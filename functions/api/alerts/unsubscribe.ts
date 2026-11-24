import type { AlertLocale, AlertsEnv, PagesContext } from "./_types";
import { ALERT_COPY } from "./_i18n";
import { alertLink, normalizeLocale, renderStatusHtml, siteOrigin } from "./_shared";

/**
 * GET renders a page with an "Unsubscribe" POST button (link scanners prefetch GET URLs).
 * POST performs the unsubscribe. RFC 8058 one-click requests from mail clients
 * (body `List-Unsubscribe=One-Click`) get a plain-text 200 response.
 */
export async function onRequestGet({ request, env }: PagesContext<AlertsEnv>): Promise<Response> {
  const url = new URL(request.url);
  const origin = siteOrigin(env, request);
  const token = url.searchParams.get("token")?.trim();
  let locale: AlertLocale = normalizeLocale(url.searchParams.get("lang"));

  try {
    if (!token || !env.DB) {
      return renderStatusHtml(locale, ALERT_COPY[locale].pages.unsubscribeInvalid, origin);
    }
    const row = await env.DB.prepare(
      "SELECT status, locale FROM alert_subscribers WHERE unsubscribe_token = ?",
    )
      .bind(token)
      .first<{ status: string; locale: string }>();
    if (!row) {
      return renderStatusHtml(locale, ALERT_COPY[locale].pages.unsubscribeInvalid, origin);
    }
    locale = normalizeLocale(row.locale);
    if (row.status === "unsubscribed") {
      return renderStatusHtml(locale, ALERT_COPY[locale].pages.unsubscribed, origin);
    }
    const prompt = ALERT_COPY[locale].pages.unsubscribePrompt;
    return renderStatusHtml(locale, prompt, origin, {
      action: alertLink(origin, "unsubscribe", token, locale),
      button: prompt.button,
    });
  } catch (err) {
    console.error("alerts/unsubscribe GET failed", err);
    return renderStatusHtml(locale, ALERT_COPY[locale].pages.unsubscribeInvalid, origin);
  }
}

export async function onRequestPost({ request, env }: PagesContext<AlertsEnv>): Promise<Response> {
  const url = new URL(request.url);
  const origin = siteOrigin(env, request);
  const token = url.searchParams.get("token")?.trim();
  let locale: AlertLocale = normalizeLocale(url.searchParams.get("lang"));

  let isOneClick = false;
  try {
    const form = await request.formData();
    isOneClick = form.has("List-Unsubscribe");
  } catch {
    // Non-form bodies are fine; treat as a regular browser POST.
  }

  let found = false;
  try {
    if (token && env.DB) {
      const row = await env.DB.prepare(
        `UPDATE alert_subscribers
            SET status = 'unsubscribed',
                pending_topics_json = NULL,
                pending_locale = NULL,
                unsubscribed_at = COALESCE(unsubscribed_at, datetime('now')),
                updated_at = datetime('now')
          WHERE unsubscribe_token = ?
          RETURNING locale`,
      )
        .bind(token)
        .first<{ locale: string }>();
      if (row) {
        found = true;
        locale = normalizeLocale(row.locale);
      }
    }
  } catch (err) {
    console.error("alerts/unsubscribe POST failed", err);
    if (isOneClick) {
      return new Response("Unsubscribe failed, please retry", { status: 500 });
    }
    return renderStatusHtml(locale, ALERT_COPY[locale].pages.unsubscribeInvalid, origin);
  }

  if (isOneClick) {
    return new Response(found ? "Unsubscribed" : "Unknown token", {
      status: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" },
    });
  }

  const pages = ALERT_COPY[locale].pages;
  return renderStatusHtml(locale, found ? pages.unsubscribed : pages.unsubscribeInvalid, origin);
}
