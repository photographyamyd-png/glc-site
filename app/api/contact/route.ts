import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildContactLeadHtml,
  buildContactLeadSubject,
  buildContactLeadText,
} from "@/lib/contact/email-body";
import { parseContactLeadJson } from "@/lib/contact/schema";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Expected JSON body." }, { status: 400 });
  }

  const parsed = parseContactLeadJson(json);
  if (!parsed.success) {
    const flat = parsed.error.flatten();
    return NextResponse.json(
      { error: "Validation failed", fieldErrors: flat.fieldErrors, formErrors: flat.formErrors },
      { status: 422 },
    );
  }

  const data = parsed.data;
  if (data.website.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const to = process.env.CONTACT_NOTIFY_EMAIL?.trim();
  const from = process.env.RESEND_FROM?.trim();
  if (!apiKey || !to || !from) {
    return NextResponse.json(
      { error: "Contact email is not configured (missing Resend environment variables)." },
      { status: 503 },
    );
  }

  const resend = new Resend(apiKey);
  const subject = buildContactLeadSubject(data);
  const text = buildContactLeadText(data);
  const html = buildContactLeadHtml(data);

  const { data: sendData, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("[api/contact] Resend error:", error);
    return NextResponse.json({ error: "Could not send message. Please try again or call us." }, { status: 502 });
  }

  return NextResponse.json({ ok: true, id: sendData?.id ?? null });
}
