import type { AlertLocale, AlertsEnv, AlertTopic, PagesContext } from "./_types";
import { ALERT_COPY } from "./_i18n";
import {
  VALID_LOCALES,
  VALID_TOPICS,
  alertLink,
  escapeHtml,
  jsonResponse,
  normalizeLocale,
  sendCloudflareEmail,
  siteOrigin,
  timingSafeEqual,
} from "./_shared";

type LocalizedText = { subject?: string; summary?: string };

interface BroadcastPayload {
  eventKey?: string;
  topic?: AlertTopic;
  subject?: string;
  summary?: string;
  /** Optional per-locale overrides; English `subject`/`summary` is the fallback. */
  translations?: Partial<Record<AlertLocale, LocalizedText>>;
  articleUrl?: string;
  dryRun?: boolean;
  limit?: number;
}

/**
 * Each recipient costs ~2 subrequests (Service Binding send + D1 delivery insert).
 * Workers Free allows 50 subrequests per invocation, so the default batch of 20 stays
 * safely below it. On a paid plan pass a larger `limit` (hard max 200) and repeat
 * the call while the response says `hasMore: true`; deliveries are idempotent per eventKey.
 */
const DEFAULT_BATCH = 20;
const MAX_BATCH = 200;
const ALLOWED_ARTICLE_HOSTS = new Set(["www.dlss5.net", "dlss5.net"]);

function cleanText(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validateArticleUrl(raw: unknown, origin: string): string | null {
  const value = cleanText(raw, 500) || `${origin}/`;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:") return null;
    const originHost = new URL(origin).host;
    if (!ALLOWED_ARTICLE_HOSTS.has(url.host) && url.host !== originHost) return null;
    return url.toString();
  } catch {
    return null;
  }
}

/**
 * Admin-only transactional status alert dispatcher.
 * Protected by Bearer ALERT_ADMIN_KEY secret; idempotent per (eventKey, subscriber_id).
 */
export async function onRequestPost(context: PagesContext<AlertsEnv>): Promise<Response> {
  try {
    return await handleBroadcast(context);
  } catch (err) {
    console.error("alerts/broadcast failed", err);
    return jsonResponse({ ok: false, code: "server_error", error: "Unexpected server error." }, 500);
  }
}

async function handleBroadcast({ request, env }: PagesContext<AlertsEnv>): Promise<Response> {
  if (!env.ALERT_ADMIN_KEY) {
    return jsonResponse({ ok: false, error: "ALERT_ADMIN_KEY secret is not configured." }, 503);
  }
  const authHeader = request.headers.get("Authorization") || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7).trim() : "";
  if (!token || !timingSafeEqual(token, env.ALERT_ADMIN_KEY)) {
    return jsonResponse({ ok: false, error: "Unauthorized." }, 401);
  }

  if (!env.DB) {
    return jsonResponse({ ok: false, error: "D1 database binding DB is missing." }, 503);
  }

  let body: BroadcastPayload;
  try {
    body = (await request.json()) as BroadcastPayload;
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON payload." }, 400);
  }

  const origin = siteOrigin(env, request);
  const eventKey = cleanText(body.eventKey, 120);
  const topic = body.topic;
  const subject = cleanText(body.subject, 200);
  const summary = cleanText(body.summary, 4000);
  const articleUrl = validateArticleUrl(body.articleUrl, origin);
  const dryRun = Boolean(body.dryRun);
  const limit = Math.min(MAX_BATCH, Math.max(1, Math.floor(Number(body.limit)) || DEFAULT_BATCH));

  if (!eventKey || !topic || !VALID_TOPICS.has(topic) || !subject || !summary) {
    return jsonResponse(
      { ok: false, error: "Required fields: eventKey, topic ('rtx40' | 'games'), subject, summary." },
      400,
    );
  }
  if (!articleUrl) {
    return jsonResponse(
      { ok: false, error: "articleUrl must be an https:// URL on dlss5.net." },
      400,
    );
  }

  const translations: Partial<Record<AlertLocale, Required<LocalizedText>>> = {};
  if (body.translations && typeof body.translations === "object") {
    for (const [key, value] of Object.entries(body.translations)) {
      if (!VALID_LOCALES.has(key as AlertLocale) || !value || typeof value !== "object") continue;
      translations[key as AlertLocale] = {
        subject: cleanText(value.subject, 200) || subject,
        summary: cleanText(value.summary, 4000) || summary,
      };
    }
  }

  const topicPattern = `%"${topic}"%`;
  const rows = await env.DB.prepare(
    `SELECT s.id, s.email, s.unsubscribe_token, s.locale
       FROM alert_subscribers s
       LEFT JOIN alert_deliveries d
         ON d.subscriber_id = s.id AND d.event_key = ?
      WHERE s.status = 'confirmed'
        AND s.topics_json LIKE ?
        AND d.id IS NULL
      ORDER BY s.id ASC
      LIMIT ?`,
  )
    .bind(eventKey, topicPattern, limit)
    .all<{ id: number; email: string; unsubscribe_token: string; locale: string }>();

  const targets = rows.results || [];
  if (dryRun) {
    return jsonResponse(
      { ok: true, dryRun: true, pendingRecipients: targets.length, hasMore: targets.length === limit },
      200,
    );
  }

  let sent = 0;
  const failures: Array<{ subscriberId: number; error: string }> = [];

  for (const recipient of targets) {
    const locale = normalizeLocale(recipient.locale);
    const copy = ALERT_COPY[locale].broadcast;
    const localized = translations[locale] ?? { subject, summary };
    const unsubscribeUrl = alertLink(origin, "unsubscribe", recipient.unsubscribe_token, locale);
    const res = await sendCloudflareEmail(env, {
      to: recipient.email,
      subject: localized.subject,
      unsubscribeUrl,
      html: `
        <div lang="${escapeHtml(ALERT_COPY[locale].htmlLang)}" style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111827;">
          <h1 style="font-size:20px;margin:0 0 12px;">${escapeHtml(localized.subject)}</h1>
          <p style="line-height:1.6;margin:0 0 18px;">${escapeHtml(localized.summary)}</p>
          <p style="margin:0 0 22px;">
            <a href="${escapeHtml(articleUrl)}" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;font-weight:600;padding:11px 18px;border-radius:8px;">
              ${escapeHtml(copy.readMore)}
            </a>
          </p>
          <p style="font-size:12px;color:#6b7280;margin:0;">
            ${escapeHtml(copy.footer)}
            <a href="${escapeHtml(unsubscribeUrl)}">${escapeHtml(copy.unsubscribeLink)}</a>.
          </p>
        </div>
      `,
      text: [
        localized.subject,
        "",
        localized.summary,
        "",
        `${copy.textDetails} ${articleUrl}`,
        "",
        `${copy.textUnsubscribe} ${unsubscribeUrl}`,
      ].join("\n"),
    });

    if (res.ok) {
      sent++;
      await env.DB.prepare(
        "INSERT OR IGNORE INTO alert_deliveries (event_key, subscriber_id, message_id) VALUES (?, ?, ?)",
      )
        .bind(eventKey, recipient.id, res.messageId ?? null)
        .run();
    } else {
      failures.push({ subscriberId: recipient.id, error: res.error });
    }
  }

  return jsonResponse(
    {
      ok: true,
      eventKey,
      attempted: targets.length,
      sent,
      failures,
      // More recipients may remain; call again with the same eventKey to continue.
      hasMore: targets.length === limit,
    },
    200,
  );
}
