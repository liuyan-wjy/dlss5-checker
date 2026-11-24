import type { AlertsEnv, PagesContext } from "./_types";
import {
  escapeHtml,
  generateToken,
  jsonResponse,
  normalizeEmail,
  normalizeLocale,
  normalizeTopics,
  sendCloudflareEmail,
} from "./_shared";

const TOPIC_LABELS = {
  rtx40: "RTX 40 Series official DLSS 5 support",
  games: "New live DLSS 5 game patches",
} as const;

export async function onRequestPost(context: PagesContext<AlertsEnv>): Promise<Response> {
  const { request, env } = context;

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonResponse({ ok: false, error: "Invalid JSON payload." }, 400);
  }

  // Silently accept honeypot bot submissions without touching D1 or sending mail.
  if (typeof body.website === "string" && body.website.trim().length > 0) {
    return jsonResponse({ ok: true, status: "pending" }, 200);
  }

  const email = normalizeEmail(body.email);
  if (!email) {
    return jsonResponse({ ok: false, error: "Please enter a valid email address." }, 400);
  }

  const topics = normalizeTopics(body.topics);
  if (topics.length === 0) {
    return jsonResponse({ ok: false, error: "Select at least one alert topic." }, 400);
  }

  if (!env.DB) {
    return jsonResponse(
      { ok: false, error: "Alert storage is not configured on this environment yet." },
      503,
    );
  }

  const locale = normalizeLocale(body.locale);
  const sourcePage =
    typeof body.sourcePage === "string" ? body.sourcePage.slice(0, 120) : "/";
  const origin = (env.SITE_ORIGIN || new URL(request.url).origin).replace(/\/$/, "");

  const existing = await env.DB.prepare(
    "SELECT id, status, confirm_token, unsubscribe_token FROM alert_subscribers WHERE email = ?",
  )
    .bind(email)
    .first<{
      id: number;
      status: string;
      confirm_token: string;
      unsubscribe_token: string;
    }>();

  const confirmToken = generateToken();
  const unsubscribeToken = existing?.unsubscribe_token || generateToken();
  const topicsJson = JSON.stringify(topics);

  if (existing) {
    // Re-confirm on resubscribe or topic change so every address stays explicitly opted in.
    await env.DB.prepare(
      `UPDATE alert_subscribers
         SET topics_json = ?,
             locale = ?,
             source_page = ?,
             status = CASE WHEN status = 'confirmed' THEN 'confirmed' ELSE 'pending' END,
             confirm_token = ?,
             unsubscribed_at = NULL,
             updated_at = datetime('now')
       WHERE id = ?`,
    )
      .bind(topicsJson, locale, sourcePage, confirmToken, existing.id)
      .run();

    if (existing.status === "confirmed") {
      return jsonResponse({ ok: true, status: "updated" }, 200);
    }
  } else {
    await env.DB.prepare(
      `INSERT INTO alert_subscribers (email, topics_json, locale, source_page, status, confirm_token, unsubscribe_token)
       VALUES (?, ?, ?, ?, 'pending', ?, ?)`,
    )
      .bind(email, topicsJson, locale, sourcePage, confirmToken, unsubscribeToken)
      .run();
  }

  const confirmUrl = `${origin}/api/alerts/confirm?token=${encodeURIComponent(confirmToken)}`;
  const unsubscribeUrl = `${origin}/api/alerts/unsubscribe?token=${encodeURIComponent(unsubscribeToken)}`;
  const topicText = topics.map((t) => TOPIC_LABELS[t]).join(" & ");

  const sendResult = await sendCloudflareEmail(env, {
    to: email,
    subject: "Confirm your DLSS 5 status alerts (dlss5.net)",
    unsubscribeUrl,
    html: `
      <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111827;">
        <h1 style="font-size:20px;margin:0 0 12px;">Confirm your DLSS 5 alerts</h1>
        <p style="line-height:1.6;margin:0 0 16px;">
          You asked DLSS 5 Checker (<strong>dlss5.net</strong>) to email you when there is an official update for:
          <strong>${escapeHtml(topicText)}</strong>.
        </p>
        <p style="margin:0 0 20px;">
          <a href="${escapeHtml(confirmUrl)}" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;font-weight:600;padding:12px 18px;border-radius:8px;">
            Confirm my alerts
          </a>
        </p>
        <p style="font-size:13px;color:#4b5563;line-height:1.5;margin:0 0 12px;">
          We only send concise transactional notices when NVIDIA or a game publisher ships an official update—never rumors or marketing newsletters.
        </p>
        <p style="font-size:12px;color:#6b7280;margin:0;">
          Did not request this? Ignore this message or <a href="${escapeHtml(unsubscribeUrl)}">unsubscribe immediately</a>.
        </p>
      </div>
    `,
    text: [
      "Confirm your DLSS 5 status alerts (dlss5.net)",
      "",
      `Requested topics: ${topicText}`,
      "",
      `Confirm your alert subscription: ${confirmUrl}`,
      "",
      "We only email when NVIDIA or a game publisher ships an official DLSS 5 update.",
      `If you did not request this, ignore this email or unsubscribe: ${unsubscribeUrl}`,
    ].join("\n"),
  });

  if (!sendResult.ok) {
    return jsonResponse(
      { ok: false, error: "Could not send confirmation email right now. Please try again later." },
      502,
    );
  }

  return jsonResponse({ ok: true, status: "pending" }, 200);
}
