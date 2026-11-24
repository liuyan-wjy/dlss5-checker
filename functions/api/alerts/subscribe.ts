import type { AlertLocale, AlertsEnv, AlertTopic, PagesContext } from "./_types";
import { ALERT_COPY, topicText } from "./_i18n";
import {
  alertLink,
  consumeRateLimit,
  escapeHtml,
  generateToken,
  jsonError,
  jsonResponse,
  normalizeEmail,
  normalizeLocale,
  normalizeTopics,
  sendCloudflareEmail,
  sha256Hex,
  siteOrigin,
  verifyTurnstile,
} from "./_shared";

/** Max subscribe attempts per hashed client IP per hour. */
const IP_LIMIT_PER_HOUR = 5;
/** Minimum gap between two confirmation emails to the same address. */
const EMAIL_COOLDOWN_SECONDS = 10 * 60;
/** Default global cap on confirmation emails per UTC day (protects the sending quota). */
const DEFAULT_DAILY_CONFIRM_CAP = 300;

/**
 * Every accepted request answers `{ ok: true, status: "pending" }`, whether the address is new,
 * pending, unsubscribed, already confirmed, or in cooldown, so the endpoint never reveals
 * whether an email address is subscribed.
 */
const ACCEPTED = () => jsonResponse({ ok: true, status: "pending" }, 200);

interface ExistingSubscriber {
  id: number;
  status: string;
  unsubscribe_token: string;
  seconds_since_confirm_sent: number | null;
}

export async function onRequestPost(context: PagesContext<AlertsEnv>): Promise<Response> {
  try {
    return await handleSubscribe(context);
  } catch (err) {
    console.error("alerts/subscribe failed", err);
    return jsonError("server_error", "Unexpected server error.", 500);
  }
}

async function handleSubscribe({ request, env }: PagesContext<AlertsEnv>): Promise<Response> {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonError("invalid_json", "Invalid JSON payload.", 400);
  }
  if (!body || typeof body !== "object") {
    return jsonError("invalid_json", "Invalid JSON payload.", 400);
  }

  // Silently accept honeypot bot submissions without touching D1 or sending mail.
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return ACCEPTED();
  }

  const email = normalizeEmail(body.email);
  if (!email) {
    return jsonError("invalid_email", "Please enter a valid email address.", 400);
  }

  const topics = normalizeTopics(body.topics);
  if (topics.length === 0) {
    return jsonError("no_topics", "Select at least one alert topic.", 400);
  }

  const db = env.DB;
  if (!db) {
    return jsonError("unavailable", "Alert storage is not configured on this environment yet.", 503);
  }

  const clientIp = request.headers.get("CF-Connecting-IP");

  if (env.TURNSTILE_SECRET_KEY) {
    const human = await verifyTurnstile(env.TURNSTILE_SECRET_KEY, body.turnstileToken, clientIp);
    if (!human) {
      return jsonError("captcha_failed", "Verification failed. Please try again.", 403);
    }
  }

  if (clientIp) {
    const ipBucket = `ip:${await sha256Hex(`dlss5-alerts:${clientIp}`)}`;
    if (!(await consumeRateLimit(db, ipBucket, IP_LIMIT_PER_HOUR, 60 * 60))) {
      return jsonError("rate_limited", "Too many requests. Please try again later.", 429);
    }
  }

  const locale = normalizeLocale(body.locale);
  const sourcePage = typeof body.sourcePage === "string" ? body.sourcePage.slice(0, 120) : "/";
  const topicsJson = JSON.stringify(topics);
  const confirmToken = generateToken();

  let existing = await db
    .prepare(
      `SELECT id, status, unsubscribe_token,
              CAST(strftime('%s', 'now') - strftime('%s', confirm_sent_at) AS INTEGER) AS seconds_since_confirm_sent
         FROM alert_subscribers WHERE email = ?`,
    )
    .bind(email)
    .first<ExistingSubscriber>();

  if (
    existing &&
    existing.seconds_since_confirm_sent !== null &&
    existing.seconds_since_confirm_sent < EMAIL_COOLDOWN_SECONDS
  ) {
    // A confirmation was sent moments ago; do not resend (prevents inbox flooding).
    return ACCEPTED();
  }

  const dailyCap = Number(env.ALERT_DAILY_CONFIRM_CAP) || DEFAULT_DAILY_CONFIRM_CAP;
  const dayBucket = `global:confirm:${new Date().toISOString().slice(0, 10)}`;
  if (!(await consumeRateLimit(db, dayBucket, dailyCap, 24 * 60 * 60))) {
    return jsonError("rate_limited", "Too many requests. Please try again later.", 429);
  }

  let unsubscribeToken: string;
  let isPreferenceUpdate = false;

  if (!existing) {
    const newUnsubscribeToken = generateToken();
    const inserted = await db
      .prepare(
        `INSERT INTO alert_subscribers (email, topics_json, locale, source_page, status, confirm_token, unsubscribe_token)
         VALUES (?, ?, ?, ?, 'pending', ?, ?)
         ON CONFLICT(email) DO NOTHING
         RETURNING id`,
      )
      .bind(email, topicsJson, locale, sourcePage, confirmToken, newUnsubscribeToken)
      .first<{ id: number }>();
    if (!inserted) {
      // A concurrent request created this address first; that request sends the email.
      return ACCEPTED();
    }
    existing = { id: inserted.id, status: "pending", unsubscribe_token: newUnsubscribeToken, seconds_since_confirm_sent: null };
    unsubscribeToken = newUnsubscribeToken;
  } else if (existing.status === "confirmed") {
    // Never change a confirmed subscriber's preferences without proof of mailbox ownership:
    // stage the change and apply it only when the new confirmation link is used.
    isPreferenceUpdate = true;
    unsubscribeToken = existing.unsubscribe_token;
    await db
      .prepare(
        `UPDATE alert_subscribers
            SET pending_topics_json = ?,
                pending_locale = ?,
                confirm_token = ?,
                updated_at = datetime('now')
          WHERE id = ?`,
      )
      .bind(topicsJson, locale, confirmToken, existing.id)
      .run();
  } else {
    unsubscribeToken = existing.unsubscribe_token;
    await db
      .prepare(
        `UPDATE alert_subscribers
            SET topics_json = ?,
                locale = ?,
                source_page = ?,
                status = 'pending',
                confirm_token = ?,
                pending_topics_json = NULL,
                pending_locale = NULL,
                unsubscribed_at = NULL,
                updated_at = datetime('now')
          WHERE id = ?`,
      )
      .bind(topicsJson, locale, sourcePage, confirmToken, existing.id)
      .run();
  }

  const origin = siteOrigin(env, request);
  const sendResult = await sendCloudflareEmail(
    env,
    buildConfirmationEmail({
      email,
      locale,
      topics,
      isPreferenceUpdate,
      confirmUrl: alertLink(origin, "confirm", confirmToken, locale),
      unsubscribeUrl: alertLink(origin, "unsubscribe", unsubscribeToken, locale),
    }),
  );

  if (!sendResult.ok) {
    console.error("alerts/subscribe email failed", sendResult.error);
    return jsonError("send_failed", "Could not send confirmation email right now. Please try again later.", 502);
  }

  // Start the cooldown and the 72-hour link validity only after a successful send.
  await db
    .prepare("UPDATE alert_subscribers SET confirm_sent_at = datetime('now') WHERE id = ?")
    .bind(existing.id)
    .run();

  return ACCEPTED();
}

function buildConfirmationEmail(input: {
  email: string;
  locale: AlertLocale;
  topics: AlertTopic[];
  isPreferenceUpdate: boolean;
  confirmUrl: string;
  unsubscribeUrl: string;
}) {
  const copy = ALERT_COPY[input.locale];
  const c = copy.confirmEmail;
  const subject = input.isPreferenceUpdate ? c.updateSubject : c.subject;
  const heading = input.isPreferenceUpdate ? c.updateHeading : c.heading;
  const intro = input.isPreferenceUpdate ? c.updateIntro : c.intro;
  const topicsLabel = topicText(input.locale, input.topics);

  return {
    to: input.email,
    subject,
    unsubscribeUrl: input.unsubscribeUrl,
    html: `
      <div lang="${escapeHtml(copy.htmlLang)}" style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111827;">
        <h1 style="font-size:20px;margin:0 0 12px;">${escapeHtml(heading)}</h1>
        <p style="line-height:1.6;margin:0 0 16px;">
          ${escapeHtml(intro)}
          <strong>${escapeHtml(topicsLabel)}</strong>.
        </p>
        <p style="margin:0 0 20px;">
          <a href="${escapeHtml(input.confirmUrl)}" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;font-weight:600;padding:12px 18px;border-radius:8px;">
            ${escapeHtml(c.button)}
          </a>
        </p>
        <p style="font-size:13px;color:#4b5563;line-height:1.5;margin:0 0 12px;">
          ${escapeHtml(c.note)}
        </p>
        <p style="font-size:12px;color:#6b7280;margin:0;">
          ${escapeHtml(c.ignorePrefix)} <a href="${escapeHtml(input.unsubscribeUrl)}">${escapeHtml(c.ignoreLink)}</a>.
        </p>
      </div>
    `,
    text: [
      subject,
      "",
      `${c.textTopics} ${topicsLabel}`,
      "",
      `${c.textConfirm} ${input.confirmUrl}`,
      "",
      c.note,
      `${c.textIgnore} ${input.unsubscribeUrl}`,
    ].join("\n"),
  };
}
