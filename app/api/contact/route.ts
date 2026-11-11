import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { buildContactEmail, logSendError, parseContact } from "@/lib/contact";

const FAILED = "Failed to send message. Please try again.";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    // Not logged: a JSON parse error message can quote the sender's text.
    return NextResponse.json({ error: FAILED }, { status: 500 });
  }

  try {
    // Required: name, email, message. Optional: subject. Name and subject at most 100 characters.
    const parsed = parseContact(body);
    // Honeypot filled: answer as if sent, send nothing.
    if (parsed.kind === "honeypot") return NextResponse.json({ success: true });
    if (parsed.kind === "error") return NextResponse.json({ error: parsed.error }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Contact form email failed: RESEND_API_KEY is not set");
      return NextResponse.json({ error: FAILED }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    // One email only: delivered to DELIVERY_EMAIL, sent from the site's own domain, reply-to the enquirer
    // (see lib/contact.ts). Nothing is ever sent to the address typed into the form, so no auto-reply.
    const { error } = await resend.emails.send(buildContactEmail(parsed.input));
    if (error) {
      logSendError(error);
      return NextResponse.json({ error: FAILED }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    logSendError(err);
    return NextResponse.json({ error: FAILED }, { status: 500 });
  }
}
