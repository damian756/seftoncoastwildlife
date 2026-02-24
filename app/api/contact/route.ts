import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { name, email, subject, message } = body as {
      name: string;
      email: string;
      subject: string;
      message: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    await resend.emails.send({
      from: "Sefton Coast Wildlife <noreply@seftoncoastwildlife.co.uk>",
      to: "damian@churchtownmedia.co.uk",
      replyTo: email,
      subject: subject ? `[Sefton Coast Wildlife] ${subject}` : `[Sefton Coast Wildlife] Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <p style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; color: #4a6b5a; margin: 0 0 8px;">
            Sefton Coast Wildlife — Contact Form
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
            Sent from <a href="https://seftoncoastwildlife.co.uk/contact" style="color: #4a6b5a;">seftoncoastwildlife.co.uk/contact</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
