import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX = { name: 100, phone: 30, email: 254, service: 100, date: 30, address: 300, message: 2000 };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(v: unknown, max: number): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
  const b = raw as Record<string, unknown>;

  // Honeypot: add a hidden "website" input in the form
  if (str(b.website, 50)) return NextResponse.json({ ok: true });

  const name = str(b.name, MAX.name);
  const phone = str(b.phone, MAX.phone);
  const email = str(b.email, MAX.email);
  const service = str(b.service, MAX.service);
  const preferredDate = str(b.preferredDate, MAX.date);
  const address = str(b.address, MAX.address);
  const message = str(b.message, MAX.message);

  if (!name || !phone || !service || !address) {
    return NextResponse.json(
      { error: "Name, phone, service, and address are required." },
      { status: 400 }
    );
  }
  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, BOOKING_TO_EMAIL } = process.env;
  const port = Number(SMTP_PORT);
  if (!SMTP_HOST || !port || !SMTP_USER || !SMTP_PASS || !BOOKING_TO_EMAIL) {
    console.error("Missing or invalid SMTP environment variables.");
    return NextResponse.json(
      { error: "Booking is temporarily unavailable. Please call us instead." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    requireTLS: port !== 465,
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email || "—"],
    ["Service", service],
    ["Preferred date", preferredDate || "Not specified"],
    ["Address", address],
    ["Notes", message || "—"],
  ];

  const html = `
    <h2 style="font-family: sans-serif; color:#F47421;">New booking request</h2>
    <table style="font-family: sans-serif; border-collapse: collapse;">
      ${rows
        .map(
          ([label, value]) => `
        <tr>
          <td style="padding:6px 12px; font-weight:600; vertical-align:top;">${label}</td>
          <td style="padding:6px 12px;">${escapeHtml(value).replace(/\n/g, "<br>")}</td>
        </tr>`
        )
        .join("")}
    </table>`;

  const text = rows.map(([l, v]) => `${l}: ${v}`).join("\n");

  try {
    await transporter.sendMail({
      from: `"OhServe Website" <${SMTP_USER}>`,
      to: BOOKING_TO_EMAIL,
      replyTo: email || undefined,
      subject: `New booking request — ${service}`,
      html,
      text,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    const e = err as { code?: string; command?: string; responseCode?: number };
    console.error("Failed to send booking email:", {
      code: e?.code,
      command: e?.command,
      responseCode: e?.responseCode,
    });
    return NextResponse.json(
      { error: "Could not send your request. Please call us instead." },
      { status: 502 }
    );
  }
}