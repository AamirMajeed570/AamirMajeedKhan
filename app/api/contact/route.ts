import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { rateLimit } from "@/lib/rate-limit";

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

    if (process.env.RESEND_API_KEY) {
      // Placeholder for Resend integration.
    }

    return NextResponse.json({ message: `Thanks ${name}, your message has been received.` });
  } catch {
    return NextResponse.json({ message: "Unable to send message." }, { status: 500 });
  }
}
