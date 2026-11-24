import type { AlertsEnv, PagesContext } from "./_types";
import { renderStatusHtml } from "./_shared";

export async function onRequestGet(context: PagesContext<AlertsEnv>): Promise<Response> {
  const { request, env } = context;
  const url = new URL(request.url);
  const origin = (env.SITE_ORIGIN || url.origin).replace(/\/$/, "");
  const token = url.searchParams.get("token")?.trim();

  if (!token || !env.DB) {
    return renderStatusHtml(
      "Invalid link",
      "Confirmation link is invalid",
      "This confirmation link is missing a valid token or alerts are unavailable right now.",
      origin,
    );
  }

  const subscriber = await env.DB.prepare(
    "SELECT id, status FROM alert_subscribers WHERE confirm_token = ?",
  )
    .bind(token)
    .first<{ id: number; status: string }>();

  if (!subscriber) {
    return renderStatusHtml(
      "Link expired",
      "Confirmation link not found",
      "This confirmation link may have already been replaced or expired. You can re-enter your email on dlss5.net anytime.",
      origin,
    );
  }

  if (subscriber.status !== "confirmed") {
    await env.DB.prepare(
      `UPDATE alert_subscribers
         SET status = 'confirmed',
             confirmed_at = datetime('now'),
             updated_at = datetime('now')
       WHERE id = ?`,
    )
      .bind(subscriber.id)
      .run();
  }

  return renderStatusHtml(
    "Alerts confirmed",
    "You are subscribed to official DLSS 5 alerts",
    "We will email you only when NVIDIA publishes official RTX 40 support or a new game ships a verified live DLSS 5 patch. Every email includes a one-click unsubscribe link.",
    origin,
  );
}
