import type { AlertsEnv, PagesContext } from "./_types";
import { renderStatusHtml } from "./_shared";

async function processUnsubscribe(context: PagesContext<AlertsEnv>): Promise<Response> {
  const { request, env } = context;
  const url = new URL(request.url);
  const origin = (env.SITE_ORIGIN || url.origin).replace(/\/$/, "");
  const token = url.searchParams.get("token")?.trim();

  if (token && env.DB) {
    await env.DB.prepare(
      `UPDATE alert_subscribers
         SET status = 'unsubscribed',
             unsubscribed_at = datetime('now'),
             updated_at = datetime('now')
       WHERE unsubscribe_token = ?`,
    )
      .bind(token)
      .run();
  }

  if (request.method === "POST") {
    return new Response("Unsubscribed", { status: 200 });
  }

  return renderStatusHtml(
    "Unsubscribed",
    "You have been unsubscribed",
    "Your email will no longer receive DLSS 5 status alerts from dlss5.net.",
    origin,
  );
}

export const onRequestGet = processUnsubscribe;
export const onRequestPost = processUnsubscribe;
