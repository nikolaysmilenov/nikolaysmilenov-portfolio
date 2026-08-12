import { Resend } from "resend";
import {
  getServiceInquiryTitle,
  isServiceInquiryId,
} from "@/data/services";
import { social } from "@/data/social";
import { siteConfig } from "@/data/site";

export const runtime = "nodejs";

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 5000;
const MIN_MESSAGE_LENGTH = 10;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
};

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function jsonError(message: string, status: number) {
  return Response.json({ ok: false, error: message }, { status });
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return jsonError("Invalid request body.", 400);
  }

  // Honeypot — bots fill hidden fields; treat as soft success.
  if (asTrimmedString(body.website).length > 0) {
    return Response.json({ ok: true });
  }

  const name = asTrimmedString(body.name);
  const email = asTrimmedString(body.email).toLowerCase();
  const service = asTrimmedString(body.service);
  const message = asTrimmedString(body.message);

  if (!name || name.length > MAX_NAME_LENGTH) {
    return jsonError("Please provide a valid name.", 400);
  }

  if (
    !email ||
    email.length > MAX_EMAIL_LENGTH ||
    !EMAIL_PATTERN.test(email)
  ) {
    return jsonError("Please provide a valid email address.", 400);
  }

  if (!service || !isServiceInquiryId(service)) {
    return jsonError("Please select a valid service.", 400);
  }

  if (
    !message ||
    message.length < MIN_MESSAGE_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return jsonError("Please provide a valid message.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact API: RESEND_API_KEY is not configured.");
    return jsonError("Email service is not configured.", 503);
  }

  const recipient = social.email ?? "smilenov@icloud.com";
  const serviceTitle =
    getServiceInquiryTitle(service, "en") ?? "Selected service";
  const submittedAt = new Date().toISOString();

  const text = [
    "New portfolio contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Service: ${serviceTitle}`,
    `Submitted: ${submittedAt}`,
    "",
    "Message:",
    message,
  ].join("\n");

  const html = `
    <div style="font-family: ui-sans-serif, system-ui, sans-serif; line-height: 1.5; color: #111;">
      <p><strong>New portfolio contact form submission</strong></p>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Service:</strong> ${escapeHtml(serviceTitle)}</p>
      <p><strong>Submitted:</strong> ${escapeHtml(submittedAt)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `.trim();

  const from =
    process.env.CONTACT_FROM_EMAIL?.trim() ||
    `${siteConfig.name} <onboarding@resend.dev>`;

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: [recipient],
      replyTo: email,
      subject: `Portfolio inquiry — ${serviceTitle}`,
      text,
      html,
    });

    if (result.error) {
      console.error("Contact API: Resend error", result.error.name);
      return jsonError("Failed to send message.", 502);
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error(
      "Contact API: unexpected send failure",
      error instanceof Error ? error.name : "unknown",
    );
    return jsonError("Failed to send message.", 502);
  }
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
