import type { AlertLocale, AlertsEnv, PagesContext } from "./_types";
import { ALERT_COPY } from "./_i18n";
import {
  CONFIRM_TTL_SECONDS,
  alertLink,
  generateToken,
  normalizeLocale,
  renderStatusHtml,
  siteOrigin,
} from "./_shared";

interface PendingConfirmation {
  id: number;
  locale: string;
  pending_locale: string | null;
  age_seconds: number | null;
}

/**
 * GET only renders a confirmation page with a POST button. Link scanners and mail
 * security gateways prefetch GET URLs, so they must never activate a subscription.
 */
export async function onRequestGet(context: PagesContext<AlertsEnv>): Promise<Response> {
  return handle(context, false);
}

export async function onRequestPost(context: PagesContext<AlertsEnv>): Promise<Response> {
  return handle(context, true);
}

async function handle({ request, env }: PagesContext<AlertsEnv>, apply: boolean): Promise<Response> {
  const url = new URL(request.url);
  const origin = siteOrigin(env, request);
  const token = url.searchParams.get("token")?.trim();
  let locale: AlertLocale = normalizeLocale(url.searchParams.get("lang"));
  const pages = () => ALERT_COPY[locale].pages;

  try {
    if (!token || !env.DB) {
      return renderStatusHtml(locale, pages().confirmInvalid, origin);
    }

    const row = await env.DB.prepare(
      `SELECT id, locale, pending_locale,
              CAST(strftime('%s', 'now') - strftime('%s', COALESCE(confirm_sent_at, updated_at)) AS INTEGER) AS age_seconds
         FROM alert_subscribers
        WHERE confirm_token = ?`,
    )
      .bind(token)
      .first<PendingConfirmation>();

    if (!row) {
      return renderStatusHtml(locale, pages().confirmInvalid, origin);
    }

    locale = normalizeLocale(row.pending_locale ?? row.locale);

    if (row.age_seconds !== null && row.age_seconds > CONFIRM_TTL_SECONDS) {
      return renderStatusHtml(locale, pages().confirmExpired, origin);
    }

    if (!apply) {
      const prompt = pages().confirmPrompt;
      const action = alertLink(origin, "confirm", token, locale);
      return renderStatusHtml(locale, prompt, origin, { action, button: prompt.button });
    }

    // Apply staged preference changes (if any) and rotate the token so the link is single-use.
    await env.DB.prepare(
      `UPDATE alert_subscribers
          SET status = 'confirmed',
              topics_json = COALESCE(pending_topics_json, topics_json),
              locale = COALESCE(pending_locale, locale),
              pending_topics_json = NULL,
              pending_locale = NULL,
              confirm_token = ?,
              confirmed_at = datetime('now'),
              unsubscribed_at = NULL,
              updated_at = datetime('now')
        WHERE id = ? AND confirm_token = ?`,
    )
      .bind(generateToken(), row.id, token)
      .run();

    return renderStatusHtml(locale, pages().confirmed, origin);
  } catch (err) {
    console.error("alerts/confirm failed", err);
    return renderStatusHtml(locale, pages().confirmInvalid, origin);
  }
}
