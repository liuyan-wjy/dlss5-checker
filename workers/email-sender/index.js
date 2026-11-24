/**
 * Private Cloudflare Worker (`dlss5-email-sender`) with native `send_email` binding.
 * Public workers.dev access is disabled; only callable via Cloudflare Pages Service Binding `EMAIL_SERVICE`.
 */
const worker = {
  async fetch(request, env) {
    if (request.method !== "POST") {
      return Response.json({ ok: false, error: "Method not allowed" }, { status: 405 });
    }
    let payload;
    try {
      payload = await request.json();
    } catch {
      return Response.json({ ok: false, error: "Invalid JSON payload" }, { status: 400 });
    }

    const fromEmail = typeof payload.from === "string" ? payload.from : payload.from?.email;
    const fromName =
      typeof payload.from === "object" && payload.from?.name ? payload.from.name : "DLSS 5 Checker";
    if (fromEmail !== "alerts@dlss5.net") {
      return Response.json({ ok: false, error: "Sender address not allowed" }, { status: 403 });
    }
    if (!payload.to || !payload.subject || !payload.html || !payload.text) {
      return Response.json({ ok: false, error: "Missing required email fields" }, { status: 400 });
    }

    try {
      const msg = {
        from: { email: fromEmail, name: fromName },
        to: payload.to,
        replyTo: payload.replyTo || "support@dlss5.net",
        subject: String(payload.subject),
        html: String(payload.html),
        text: String(payload.text),
      };
      if (payload.headers && typeof payload.headers === "object" && Object.keys(payload.headers).length > 0) {
        msg.headers = payload.headers;
      }
      const result = await env.EMAIL.send(msg);
      return Response.json({ ok: true, messageId: result?.messageId ?? null });
    } catch (err) {
      return Response.json(
        { ok: false, error: err instanceof Error ? err.message : "Cloudflare Email send failed" },
        { status: 502 },
      );
    }
  },
};

export default worker;
