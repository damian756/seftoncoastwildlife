import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { buildContactEmail, isPlainEmail, logSendError } from "@/lib/contact";

const FAILED = "Failed to send message. Please try again.";

function text(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = (await req.json()) as Record<string, unknown>;
  } catch {
    // Not logged: a JSON parse error message can quote the sender's text.
    return NextResponse.json({ error: FAILED }, { status: 500 });
  }

  try {
    const name = text(body?.name);
    const email = text(body?.email);
    const subject = text(body?.subject);
    const message = text(body?.message);

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    if (!isPlainEmail(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Contact form email failed: RESEND_API_KEY is not set");
      return NextResponse.json({ error: FAILED }, { status: 500 });
    }

    const resend = new Resend(apiKey);
    // Delivered to DELIVERY_EMAIL, sent from the site's own domain, reply-to the enquirer (see lib/contact.ts).
    const { error } = await resend.emails.send(buildContactEmail({ name, email, subject, message }));
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
