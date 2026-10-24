// Sends transactional email through Resend's REST API. Without RESEND_API_KEY,
// local development prints the email to the server log instead, so sign-in
// works before a Resend account exists. Production refuses to silently drop mail.

type Email = { to: string; subject: string; text: string; html: string };

export async function sendEmail({ to, subject, text, html }: Email) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("RESEND_API_KEY is not set, so email can't be sent.");
    }
    console.log(`\n[email] To: ${to}\n[email] Subject: ${subject}\n${text}\n`);
    return;
  }

  const from = process.env.EMAIL_FROM;
  if (!from) throw new Error("EMAIL_FROM is not set.");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, subject, text, html }),
  });
  if (!res.ok) throw new Error(`Resend returned ${res.status}: ${await res.text()}`);
}

export function signInEmail(url: string) {
  return {
    subject: "Your sign-in link for Discover the Power of Plants",
    text: `Use this link to sign in. It expires in 5 minutes and works once.\n\n${url}\n\nIf you didn't ask to sign in, you can ignore this email.`,
    html: `<p>Use this link to sign in. It expires in 5 minutes and works once.</p><p><a href="${url}">Sign in</a></p><p>If you didn't ask to sign in, you can ignore this email.</p>`,
  };
}

export function applicationDecisionEmail(storeName: string, approved: boolean, note: string | null, siteUrl: string) {
  const subject = approved
    ? `Your store ${storeName} is approved`
    : `About your seller application for ${storeName}`;
  const body = approved
    ? `Good news: your store ${storeName} has been approved. Open your Seller Dashboard to finish setting it up: ${siteUrl}/seller`
    : `Thank you for applying to sell ${storeName}. We weren't able to approve it this time. You're welcome to apply again: ${siteUrl}/sell`;
  const noteLine = note ? `\n\nNote from our team: ${note}` : "";
  const escape = (t: string) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return {
    subject,
    text: body + noteLine,
    html: `<p>${escape(body)}</p>${note ? `<p>Note from our team: ${escape(note)}</p>` : ""}`,
  };
}
