import type { AlertsEnv, AlertTopic, PagesContext } from "./_types";
import {
  escapeHtml,
  jsonResponse,
  sendCloudflareEmail,
  timingSafeEqual,
  VALID_TOPICS,
} from "./_shared";

interface BroadcastPayload {
  eventKey?: string;
  topic?: AlertTopic;
  subject?: string;
  summary?: string;
  articleUrl?: string;
  dryRun?: boolean;
  limit?: number;
}

/**
 * Admin-only transactional status alert dispatcher.
 * Protected by Bearer ALERT_ADMIN_KEY secret; idempotent per (eventKey, subscriber_id).
 * Respects Cloudflare Email Sending daily quota by batching (default limit = 150).
 */
export async function onRequestPost(context: PagesContext<AlertsEnv>): Promise<Response> {
  const { request, env } = context;

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

  const eventKey = typeof body.eventKey === "string" ? body.eventKey.trim() : "";
  const topic = body.topic;
  const subject = typeof body.subject === "string" ? body.subject.trim() : "";
  const summary = typeof body.summary === "string" ? body.summary.trim() : "";
  const articleUrl = typeof body.articleUrl === "string" ? body.articleUrl.trim() : "https://www.dlss5.net/";
  const dryRun = Boolean(body.dryRun);
  const limit = Math.min(180, Math.max(1, Number(body.limit) || 150));

  if (!eventKey || !topic || !VALID_TOPICS.has(topic) || !subject || !summary) {
    return jsonResponse(
      { ok: false, error: "Required fields: eventKey, topic ('rtx40' | 'games'), subject, summary." },
      400,
    );
  }

  const origin = (env.SITE_ORIGIN || new URL(request.url).origin).replace(/\/$/, "");
  const topicPattern = `%"${topic}"%`;
  const rows = await env.DB.prepare(
    `SELECT s.id, s.email, s.unsubscribe_token
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
    .all<{ id: number; email: string; unsubscribe_token: string }>();

  const targets = rows.results || [];
  if (dryRun) {
    return jsonResponse({ ok: true, dryRun: true, pendingRecipients: targets.length }, 200);
  }

  let sent = 0;
  const failures: Array<{ subscriberId: number; error: string }> = [];

  for (const recipient of targets) {
    const unsubscribeUrl = `${origin}/api/alerts/unsubscribe?token=${encodeURIComponent(recipient.unsubscribe_token)}`;
    const res = await sendCloudflareEmail(env, {
      to: recipient.email,
      subject,
      unsubscribeUrl,
      html: `
        <div style="font-family:system-ui,-apple-system,sans-serif;max-width:560px;margin:0 auto;padding:24px;color:#111827;">
          <h1 style="font-size:20px;margin:0 0 12px;">${escapeHtml(subject)}</h1>
          <p style="line-height:1.6;margin:0 0 18px;">${escapeHtml(summary)}</p>
          <p style="margin:0 0 22px;">
            <a href="${escapeHtml(articleUrl)}" style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;font-weight:600;padding:11px 18px;border-radius:8px;">
              Read verified details on dlss5.net
            </a>
          </p>
          <p style="font-size:12px;color:#6b7280;margin:0;">
            You requested official DLSS 5 status alerts from dlss5.net.
            <a href="${escapeHtml(unsubscribeUrl)}">Unsubscribe in one click</a>.
          </p>
        </div>
      `,
      text: [
        subject,
        "",
        summary,
        "",
        `Verified details: ${articleUrl}`,
        "",
        `Unsubscribe: ${unsubscribeUrl}`,
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

  return jsonResponse({ ok: true, eventKey, attempted: targets.length, sent, failures }, 200);
}
