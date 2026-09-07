function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function renderContactEmailHtml({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");
  const timestamp = new Date().toLocaleString("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Europe/Berlin",
  });

  return `<!doctype html>
<html>
  <body style="margin:0;padding:32px 16px;background:#f4f4f7;font-family:ui-monospace,'SF Mono',Menlo,Consolas,monospace;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;">
      <tr>
        <td style="padding-bottom:20px;">
          <span style="font-size:11px;letter-spacing:0.18em;color:#6d5bd0;text-transform:uppercase;">
            06 / New Transmission
          </span>
        </td>
      </tr>
      <tr>
        <td style="background:#ffffff;border:1px solid rgba(0,0,0,0.08);border-radius:12px;padding:28px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding-bottom:18px;border-bottom:1px solid rgba(0,0,0,0.08);">
                <div style="font-size:10px;letter-spacing:0.14em;color:#71717a;text-transform:uppercase;">From</div>
                <div style="margin-top:4px;font-size:16px;color:#18181b;">${safeName}</div>
                <a href="mailto:${safeEmail}" style="font-size:13px;color:#6d5bd0;text-decoration:none;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding-top:18px;">
                <div style="font-size:10px;letter-spacing:0.14em;color:#71717a;text-transform:uppercase;">Message</div>
                <div style="margin-top:10px;font-size:14px;line-height:1.65;color:#27272a;white-space:pre-wrap;">${safeMessage}</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td style="padding-top:18px;">
          <a
            href="mailto:${safeEmail}"
            style="display:inline-block;padding:10px 18px;border:1px solid #6d5bd0;border-radius:8px;color:#6d5bd0;font-size:12px;letter-spacing:0.1em;text-decoration:none;"
          >
            REPLY →
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding-top:24px;font-size:11px;color:#a1a1aa;">
          Sent from the portfolio contact form · ${timestamp} (Europe/Berlin)
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
