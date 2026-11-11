// Contact addresses and the pure parts of the enquiry email.
// No imports and only erasable TypeScript, so `node --test tests/*.test.mjs` can load this file directly.

// Where every enquiry the site sends is delivered: the `to` of each enquiry route. One inbox.
export const DELIVERY_EMAIL = "damian@churchtownmedia.co.uk";

// The only address of ours a visitor sees: pages, mailto links and the text of any email we send.
// To change the public address, change this line.
export const DISPLAY_EMAIL = "hello@seftoncoast.network";

// Sender for enquiry mail. The site's own domain, which is verified in Resend.
export const ENQUIRY_FROM = "Sefton Coast Wildlife <noreply@seftoncoastwildlife.co.uk>";

export type ContactInput = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

export type ContactEmail = {
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
};

const HTML_ESCAPES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

/** Escape a user-supplied value for use in HTML text or a quoted attribute. */
export function escapeHtml(value: unknown): string {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => HTML_ESCAPES[ch]);
}

/** Remove CR and LF (and collapse the gap) from anything placed in an email subject line. */
export function cleanSubjectPart(value: unknown): string {
  return String(value ?? "").replace(/[\r\n]+/g, " ").replace(/\s{2,}/g, " ").trim();
}

/** One plain address: no spaces, commas, angle brackets, quotes or line breaks; at most 254 characters. */
export function isPlainEmail(value: unknown): value is string {
  if (typeof value !== "string") return false;
  if (value.length === 0 || value.length > 254) return false;
  return /^[^\s@,;<>"'()[\]\\]+@[^\s@,;<>"'()[\]\\]+\.[^\s@,;<>"'()[\]\\]+$/.test(value);
}

// Longest name, subject and message the contact route accepts. Caps what anyone can put into a mail we send.
export const LIMITS = { name: 100, subject: 100, message: 5000 } as const;

/**
 * Hidden field on the contact form. People never see it; a bot that fills it gets an ok response and
 * nothing is sent.
 */
export const HONEYPOT_FIELD = "website";

export type ParsedContact =
  | { kind: "ok"; input: ContactInput }
  | { kind: "honeypot" }
  | { kind: "error"; error: string };

const FIELD_LABEL: Record<keyof typeof LIMITS, string> = { name: "Name", subject: "Subject", message: "Message" };

/** Check a contact-route request body. Sends nothing. */
export function parseContact(body: unknown): ParsedContact {
  const b = (typeof body === "object" && body !== null ? body : {}) as Record<string, unknown>;

  const trap = b[HONEYPOT_FIELD];
  if (trap !== undefined && trap !== null && String(trap).trim() !== "") return { kind: "honeypot" };

  const text = (key: string) => (typeof b[key] === "string" ? (b[key] as string).trim() : "");
  const name = text("name");
  const email = text("email");
  const subject = text("subject");
  const message = text("message");

  if (!name || !email || !message) return { kind: "error", error: "Missing required fields." };
  if (!isPlainEmail(email)) return { kind: "error", error: "Invalid email address." };

  const capped = { name, subject, message };
  for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    if (capped[key].length > LIMITS[key]) {
      return { kind: "error", error: `${FIELD_LABEL[key]} is too long (max ${LIMITS[key].toLocaleString("en-GB")} characters).` };
    }
  }

  return { kind: "ok", input: { name, email, subject, message } };
}

/** Build the message sent to us when someone uses the contact form. */
export function buildContactEmail(input: ContactInput): ContactEmail {
  if (!isPlainEmail(input.email)) throw new Error("Invalid reply-to address");
  const name = escapeHtml(input.name);
  const email = escapeHtml(input.email);
  const subject = input.subject ? escapeHtml(input.subject) : "";
  const message = escapeHtml(input.message);
  const subjectLine = input.subject
    ? `[Sefton Coast Wildlife] ${cleanSubjectPart(input.subject)}`
    : `[Sefton Coast Wildlife] Message from ${cleanSubjectPart(input.name)}`;

  const html = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #4a6b5a; margin: 0 0 8px;">
            Sefton Coast Wildlife: contact form
          </p>
          <h2 style="color: #1c3220; margin: 0 0 24px; font-size: 20px;">New message from ${name}</h2>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 24px;">
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #2d3a3a; background: #f5f2eb; width: 100px;">Name</td>
              <td style="padding: 8px 12px; color: #2d3a3a; background: #f5f2eb;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #2d3a3a;">Email</td>
              <td style="padding: 8px 12px; color: #2d3a3a;"><a href="mailto:${email}" style="color: #4a6b5a;">${email}</a></td>
            </tr>
            ${subject ? `<tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #2d3a3a; background: #f5f2eb;">Subject</td>
              <td style="padding: 8px 12px; color: #2d3a3a; background: #f5f2eb;">${subject}</td>
            </tr>` : ""}
          </table>

          <h3 style="color: #1c3220; font-size: 14px; margin: 0 0 8px;">Message</h3>
          <div style="background: #f5f2eb; border-left: 4px solid #4a6b5a; padding: 16px; font-size: 14px; color: #2d3a3a; line-height: 1.6; white-space: pre-wrap;">${message}</div>

          <p style="font-size: 12px; color: #999; margin-top: 24px;">
            Sent from <a href="https://www.seftoncoastwildlife.co.uk/contact" style="color: #4a6b5a;">seftoncoastwildlife.co.uk/contact</a>.
            Reply to this email to answer the sender.
          </p>
        </div>
      `;

  return {
    from: ENQUIRY_FROM,
    to: DELIVERY_EMAIL,
    replyTo: input.email,
    subject: subjectLine,
    html,
  };
}

/** Log a failed send for the server logs: the error's name and message only, never the enquirer's text. */
export function logSendError(error: unknown, log: (...args: unknown[]) => void = console.error): void {
  const e = (error ?? {}) as { name?: unknown; message?: unknown };
  const name = typeof e.name === "string" && e.name ? e.name : "Error";
  const message = typeof e.message === "string" ? e.message : String(error);
  log(`Contact form email failed: ${name}: ${message}`);
}
