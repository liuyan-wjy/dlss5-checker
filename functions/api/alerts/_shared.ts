import type { AlertLocale, AlertsEnv, AlertTopic } from "./_types";
import { ALERT_COPY } from "./_i18n";

export const VALID_TOPICS: ReadonlySet<AlertTopic> = new Set(["rtx40", "games"]);
export const VALID_LOCALES: ReadonlySet<AlertLocale> = new Set(["en", "pt", "de", "ko", "fr"]);

export function jsonResponse(body: Record<string, unknown>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export function normalizeEmail(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const email = raw.trim().toLowerCase();
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return null;
  }
  return email;
}

export function normalizeTopics(raw: unknown): AlertTopic[] {
  if (!Array.isArray(raw)) return [];
  const seen = new Set<AlertTopic>();
  for (const item of raw) {
    if (typeof item === "string" && VALID_TOPICS.has(item as AlertTopic)) {
      seen.add(item as AlertTopic);
    }
  }
  return [...seen];
}

export function normalizeLocale(raw: unknown): AlertLocale {
  if (typeof raw === "string" && VALID_LOCALES.has(raw as AlertLocale)) {
    return raw as AlertLocale;
  }
  return "en";
}

export function generateToken(): string {
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

export function timingSafeEqual(a: string, b: string): boolean {
  const enc = new TextEncoder();
  const ab = enc.encode(a);
  const bb = enc.encode(b);
  if (ab.length !== bb.length) return false;
  let diff = 0;
  for (let i = 0; i < ab.length; i++) {
    diff |= ab[i] ^ bb[i];
  }
  return diff === 0;
}

export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Machine-readable error codes; the client maps them to localized messages. */
export type AlertErrorCode =
  | "invalid_json"
  | "invalid_email"
  | "no_topics"
  | "captcha_failed"
  | "rate_limited"
  | "unavailable"
  | "send_failed"
  | "server_error";

export function jsonError(code: AlertErrorCode, message: string, status: number): Response {
  return jsonResponse({ ok: false, code, error: message }, status);
}

/** Confirmation links are valid for 72 hours after the email was sent. */
export const CONFIRM_TTL_SECONDS = 72 * 60 * 60;

export function siteOrigin(env: AlertsEnv, request: Request): string {
  return (env.SITE_ORIGIN || new URL(request.url).origin).replace(/\/$/, "");
}

export function alertLink(
  origin: string,
  action: "confirm" | "unsubscribe",
  token: string,
  locale: AlertLocale,
): string {
  return `${origin}/api/alerts/${action}?token=${encodeURIComponent(token)}&lang=${locale}`;
}

export function parseTopicsJson(raw: string | null | undefined): AlertTopic[] {
  if (!raw) return [];
  try {
    return normalizeTopics(JSON.parse(raw));
  } catch {
    return [];
  }
}

export async function sha256Hex(input: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return Array.from(new Uint8Array(digest), (b) => b.toString(16).padStart(2, "0")).join("");
}

/**
 * Fixed-window counter stored in D1. Returns true while the bucket is within `limit`
 * for the current window. Buckets must never contain raw personal data (hash IPs first).
 */
export async function consumeRateLimit(
  db: NonNullable<AlertsEnv["DB"]>,
  bucket: string,
  limit: number,
  windowSeconds: number,
): Promise<boolean> {
  const now = Math.floor(Date.now() / 1000);
  const row = await db
    .prepare(
      `INSERT INTO alert_rate_limits (bucket, window_start, count) VALUES (?1, ?2, 1)
       ON CONFLICT(bucket) DO UPDATE SET
         count = CASE WHEN window_start <= ?2 - ?3 THEN 1 ELSE count + 1 END,
         window_start = CASE WHEN window_start <= ?2 - ?3 THEN ?2 ELSE window_start END
       RETURNING count`,
    )
    .bind(bucket, now, windowSeconds)
    .first<{ count: number }>();

  // Opportunistic cleanup of stale buckets (~5% of calls) keeps the table small.
  if (Math.random() < 0.05) {
    await db
      .prepare("DELETE FROM alert_rate_limits WHERE window_start < ?")
      .bind(now - 2 * 24 * 60 * 60)
      .run();
  }

  return (row?.count ?? 1) <= limit;
}

/** Verifies a Cloudflare Turnstile token. Only called when TURNSTILE_SECRET_KEY is configured. */
export async function verifyTurnstile(
  secret: string,
  token: unknown,
  remoteIp: string | null,
): Promise<boolean> {
  if (typeof token !== "string" || token.length === 0 || token.length > 2048) return false;
  const form = new FormData();
  form.append("secret", secret);
  form.append("response", token);
  if (remoteIp) form.append("remoteip", remoteIp);
  try {
    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      body: form,
    });
    const data = (await res.json().catch(() => ({}))) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

export interface StatusPageForm {
  action: string;
  button: string;
}

export function renderStatusHtml(
  locale: AlertLocale,
  page: { title: string; heading: string; body: string },
  origin: string,
  form?: StatusPageForm,
): Response {
  const copy = ALERT_COPY[locale];
  const formHtml = form
    ? `<form method="post" action="${escapeHtml(form.action)}">
      <button type="submit">${escapeHtml(form.button)}</button>
    </form>
    <p class="back"><a href="${escapeHtml(origin + copy.homePath)}">${escapeHtml(copy.backLink)}</a></p>`
    : `<a class="cta" href="${escapeHtml(origin + copy.homePath)}">${escapeHtml(copy.backLink)}</a>`;
  const html = `<!doctype html>
<html lang="${escapeHtml(copy.htmlLang)}" class="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex, nofollow" />
  <title>${escapeHtml(page.title)} | DLSS 5 Checker</title>
  <style>
    body { margin: 0; font-family: system-ui, -apple-system, sans-serif; background: #09090b; color: #f4f4f5; display: grid; place-items: center; min-height: 100vh; padding: 24px; }
    main { max-width: 520px; width: 100%; border: 1px solid #27272a; border-radius: 14px; background: #141418; padding: 28px; }
    h1 { margin: 0 0 12px; font-size: 22px; }
    p { margin: 0 0 20px; line-height: 1.6; color: #a1a1aa; font-size: 15px; }
    a.cta, button { display: inline-block; padding: 10px 16px; border: 0; border-radius: 8px; background: #3b82f6; color: #fff; text-decoration: none; font: inherit; font-weight: 600; font-size: 14px; cursor: pointer; }
    form { margin: 0 0 16px; }
    .back { margin: 0; font-size: 13px; }
    .back a { color: #60a5fa; }
  </style>
</head>
<body>
  <main>
    <h1>${escapeHtml(page.heading)}</h1>
    <p>${escapeHtml(page.body)}</p>
    ${formHtml}
  </main>
</body>
</html>`;
  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
      // Tokens live in the query string; never leak them through the Referer header.
      "Referrer-Policy": "no-referrer",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}

export interface OutboundEmail {
  to: string;
  subject: string;
  html: string;
  text: string;
  unsubscribeUrl?: string;
}

/**
 * Sends a transactional email through Cloudflare Email Service:
 * 1) Prefers the private `env.EMAIL_SERVICE` Worker Service Binding (`dlss5-email-sender` with native `send_email` binding — zero API tokens required).
 * 2) Supports a direct `env.EMAIL` native `send_email` binding when running directly on Workers.
 * 3) Falls back to Cloudflare Email Sending REST API (`CLOUDFLARE_ACCOUNT_ID` + `CLOUDFLARE_EMAIL_API_TOKEN`).
 */
export async function sendCloudflareEmail(
  env: AlertsEnv,
  message: OutboundEmail,
): Promise<{ ok: true; messageId?: string } | { ok: false; error: string }> {
  const fromAddress = env.ALERT_FROM_EMAIL || "alerts@dlss5.net";
  const senderName = "DLSS 5 Checker";
  const replyToAddress = "support@dlss5.net";
  const headers: Record<string, string> = {};
  if (message.unsubscribeUrl && message.unsubscribeUrl.startsWith("https://")) {
    headers["List-Unsubscribe"] = `<${message.unsubscribeUrl}>`;
    headers["List-Unsubscribe-Post"] = "List-Unsubscribe=One-Click";
  }

  // 1) Private Service Binding to `dlss5-email-sender` Worker (native send_email binding, no API tokens).
  if (env.EMAIL_SERVICE && typeof env.EMAIL_SERVICE.fetch === "function") {
    try {
      const res = await env.EMAIL_SERVICE.fetch("https://dlss5-email-sender.internal/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: { email: fromAddress, name: senderName },
          to: message.to,
          replyTo: replyToAddress,
          subject: message.subject,
          html: message.html,
          text: message.text,
          ...(Object.keys(headers).length ? { headers } : {}),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        messageId?: string | null;
        error?: string;
      };
      if (!res.ok || data.ok === false) {
        return {
          ok: false,
          error: data.error || `Email service worker error (HTTP ${res.status})`,
        };
      }
      return { ok: true, messageId: data.messageId ?? undefined };
    } catch (err) {
      return {
        ok: false,
        error: err instanceof Error ? err.message : "Email service binding request failed",
      };
    }
  }

  // 2) Direct native Workers send_email binding (uses `email` key and `replyTo`).
  if (env.EMAIL && typeof env.EMAIL.send === "function") {
    try {
      const result = await env.EMAIL.send({
        from: { email: fromAddress, name: senderName },
        to: message.to,
        replyTo: replyToAddress,
        subject: message.subject,
        html: message.html,
        text: message.text,
        ...(Object.keys(headers).length ? { headers } : {}),
      });
      return { ok: true, messageId: result?.messageId };
    } catch (err) {
      return {
        ok: false,
        error: err instanceof Error ? err.message : "Cloudflare Email binding send failed",
      };
    }
  }

  // 3) Cloudflare Email Sending REST API fallback (uses `address` key and snake_case `reply_to`).
  if (env.CLOUDFLARE_ACCOUNT_ID && env.CLOUDFLARE_EMAIL_API_TOKEN) {
    try {
      const res = await fetch(
        `https://api.cloudflare.com/client/v4/accounts/${env.CLOUDFLARE_ACCOUNT_ID}/email/sending/send`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.CLOUDFLARE_EMAIL_API_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: { address: fromAddress, name: senderName },
            to: message.to,
            reply_to: replyToAddress,
            subject: message.subject,
            html: message.html,
            text: message.text,
            ...(Object.keys(headers).length ? { headers } : {}),
          }),
        },
      );
      const data = (await res.json().catch(() => ({}))) as {
        success?: boolean;
        errors?: Array<{ message?: string }>;
        result?: { message_id?: string; delivered?: string[]; queued?: string[] };
      };
      if (!res.ok || data.success === false) {
        const msg = data.errors?.[0]?.message || `HTTP ${res.status}`;
        return { ok: false, error: `Cloudflare Email REST API error: ${msg}` };
      }
      return { ok: true, messageId: data.result?.message_id };
    } catch (err) {
      return {
        ok: false,
        error: err instanceof Error ? err.message : "Cloudflare Email REST API request failed",
      };
    }
  }

  return {
    ok: false,
    error: "Email service is not configured yet (missing EMAIL_SERVICE, EMAIL binding, or CLOUDFLARE_EMAIL_API_TOKEN).",
  };
}
