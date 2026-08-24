import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const rate = rateLimit(request);
  if (!rate.allowed) {
    return NextResponse.json({ message: "Too many requests. Please try again later." }, { status: 429 });
  }

  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ message: parsed.error.flatten().fieldErrors }, { status: 400 });
    }

    const { name, email, subject, message } = parsed.data;

    const toEmail = process.env.CONTACT_EMAIL;
    if (!toEmail) {
      console.error("CONTACT_EMAIL environment variable is not set.");
      return NextResponse.json({ message: "Server configuration error." }, { status: 500 });
    }

    const { error } = await resend.emails.send({
      from: `Portfolio Contact <${process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev"}>`,
      to: toEmail,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New message from your portfolio</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555; width: 80px;">Name</td>
              <td style="padding: 8px; color: #333;">${name}</td>
            </tr>
            <tr style="background: #f9f9f9;">
              <td style="padding: 8px; font-weight: bold; color: #555;">Email</td>
              <td style="padding: 8px; color: #333;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Subject</td>
              <td style="padding: 8px; color: #333;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f4f4f4; border-radius: 6px;">
            <p style="font-weight: bold; color: #555; margin: 0 0 8px;">Message</p>
            <p style="color: #333; white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
          <p style="margin-top: 16px; font-size: 12px; color: #999;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ message: "Failed to send message. Please try again." }, { status: 500 });
    }

    return NextResponse.json({ message: `Thanks ${name}, your message has been received.` });
  } catch {
    return NextResponse.json({ message: "Unable to send message." }, { status: 500 });
  }
}
