import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  let body: Record<string, string>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, phone, email, service, preferredDate, address, message } = body;

  if (!name || !phone || !service || !address) {
    return NextResponse.json(
      { error: "Name, phone, service, and address are required." },
      { status: 400 }
    );
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    BOOKING_TO_EMAIL,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !BOOKING_TO_EMAIL) {
    console.error("Missing SMTP environment variables.");
    return NextResponse.json(
      { error: "Booking is temporarily unavailable. Please call us instead." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const summaryRows = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email || "—"],
    ["Service", service],
    ["Preferred date", preferredDate || "Not specified"],
    ["Address", address],
    ["Notes", message || "—"],
  ];

  const htmlBody = `
    <h2 style="font-family: sans-serif; color:#F47421;">New booking request</h2>
    <table style="font-family: sans-serif; border-collapse: collapse;">
      ${summaryRows
        .map(
          ([label, value]) => `
        <tr>
          <td style="padding:6px 12px; font-weight:600; vertical-align:top;">${label}</td>
          <td style="padding:6px 12px;">${escapeHtml(value)}</td>
        </tr>`
        )
        .join("")}
    </table>
  `;

  try {
    await transporter.sendMail({
      from: `"OhServe Website" <${SMTP_USER}>`,
      to: BOOKING_TO_EMAIL,
      replyTo: email || undefined,
      subject: `New booking request — ${service}`,
      html: htmlBody,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Failed to send booking email:", err);
    return NextResponse.json(
      { error: "Could not send your request. Please call us instead." },
      { status: 502 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
