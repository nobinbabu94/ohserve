import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX = {
  name: 100,
  phone: 30,
  email: 254,
  service: 100,
  date: 30,
  address: 300,
  message: 2000,
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: unknown, max: number): string {
  return typeof value === "string"
    ? value.trim().slice(0, max)
    : "";
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  // ----------------------------------
  // Parse request
  // ----------------------------------
  let raw: unknown;

  try {
    raw = await req.json();
  } catch (error) {
    console.error("Invalid JSON received:", error);

    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }

  if (
    !raw ||
    typeof raw !== "object" ||
    Array.isArray(raw)
  ) {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }

  const body = raw as Record<string, unknown>;
  const isContactMessage = body.formType === "contact";

  // ----------------------------------
  // Honeypot
  // ----------------------------------
  if (str(body.website, 50)) {
    return NextResponse.json({ ok: true });
  }

  // ----------------------------------
  // Read form fields
  // ----------------------------------
  const name = str(body.name, MAX.name);
  const phone = str(body.phone, MAX.phone);
  const email = str(body.email, MAX.email);
  const service = str(body.service, MAX.service);
  const preferredDate = str(
    body.preferredDate,
    MAX.date
  );
  const address = str(body.address, MAX.address);
  const message = str(body.message, MAX.message);

  // ----------------------------------
  // Validate booking
  // ----------------------------------
  const missingRequiredFields = isContactMessage
    ? !name || !phone || !message
    : !name || !phone || !service || !address;

  if (missingRequiredFields) {
    return NextResponse.json(
      {
        error:
          isContactMessage
            ? "Name, phone number, and message are required."
            : "Name, phone, service, and address are required.",
      },
      { status: 400 }
    );
  }

  if (email && !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Invalid email address." },
      { status: 400 }
    );
  }

  // ----------------------------------
  // Environment
  // ----------------------------------
  const emailUser =
    process.env.SMTP_USER || process.env.CONTACT_EMAIL;
  const emailPassword =
    process.env.SMTP_PASS || process.env.CONTACT_EMAIL_PASSWORD;

  const recipient =
    process.env.BOOKING_TO_EMAIL || emailUser;

  if (!emailUser || !emailPassword || !recipient) {
    console.error("Missing email configuration:", {
      hasEmailUser: Boolean(emailUser),
      hasEmailPassword: Boolean(emailPassword),
      hasRecipient: Boolean(recipient),
    });

    return NextResponse.json(
      {
        error:
          "Booking is temporarily unavailable. Please call us instead.",
      },
      { status: 500 }
    );
  }

  // ----------------------------------
  // SMTP transporter: port 587 uses STARTTLS; port 465 uses implicit TLS.
  // ----------------------------------
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
  const smtpSecure = process.env.SMTP_SECURE
    ? process.env.SMTP_SECURE.toLowerCase() === "true"
    : smtpPort === 465;

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpSecure,
    requireTLS: !smtpSecure,
    auth: {
      user: emailUser,
      pass: emailPassword,
    },

    connectionTimeout: 100000,
    greetingTimeout: 100000,
    socketTimeout: 150000,
  });

  // ----------------------------------
  // Verify Gmail connection
  // ----------------------------------
  try {
    await transporter.verify();

    console.log(
      "OhServe Gmail SMTP connection verified."
    );
  } catch (error) {
    const err = error as {
      code?: string;
      command?: string;
      responseCode?: number;
      response?: string;
      message?: string;
    };

    console.error(
      "OhServe Gmail SMTP verification failed:",
      {
        code: err.code,
        command: err.command,
        responseCode: err.responseCode,
        response: err.response,
        message: err.message,
      }
    );

    return NextResponse.json(
      {
        error:
          "Email service is temporarily unavailable. Please call us instead.",
      },
      { status: 502 }
    );
  }

  // ----------------------------------
  // Email content
  // ----------------------------------
  const rows: [string, string][] = isContactMessage
    ? [
      ["Name", name || "Not provided"],
      ["Phone", phone || "Not provided"],
      ["Email", email || "Not provided"],
      ["Message", message],
    ]
    : [
      ["Name", name],
      ["Phone", phone],
      ["Email", email || "Not provided"],
      ["Service", service],
      [
        "Preferred date",
        preferredDate || "Not specified",
      ],
      ["Address", address],
      ["Notes", message || "Not provided"],
    ];

  const html = `
    <div
      style="
        font-family: Arial, Helvetica, sans-serif;
        max-width: 650px;
        margin: 0 auto;
      "
    >
      <h2 style="color: #F47421;">
        ${isContactMessage ? "New chat message" : "New booking request"} — OhServe
      </h2>

      <table
        style="
          border-collapse: collapse;
          width: 100%;
        "
      >
        <thead>
          <tr>
            <th
              style="
                border: 1px solid #ddd;
                padding: 10px;
                text-align: left;
                background: #f5f5f5;
              "
            >
              Field
            </th>

            <th
              style="
                border: 1px solid #ddd;
                padding: 10px;
                text-align: left;
                background: #f5f5f5;
              "
            >
              Details
            </th>
          </tr>
        </thead>

        <tbody>
          ${rows
      .map(
        ([label, value]) => `
                <tr>
                  <td
                    style="
                      border: 1px solid #ddd;
                      padding: 10px;
                      font-weight: 600;
                      vertical-align: top;
                    "
                  >
                    ${escapeHtml(label)}
                  </td>

                  <td
                    style="
                      border: 1px solid #ddd;
                      padding: 10px;
                      vertical-align: top;
                    "
                  >
                    ${escapeHtml(value).replace(
          /\n/g,
          "<br />"
        )}
                  </td>
                </tr>
              `
      )
      .join("")}
        </tbody>
      </table>

      <p
        style="
          margin-top: 20px;
          color: #777;
          font-size: 12px;
        "
      >
        This ${isContactMessage ? "chat message" : "booking request"} was submitted through
        the OhServe website.
      </p>
    </div>
  `;

  const text = rows
    .map(([label, value]) => `${label}: ${value}`)
    .join("\n");

  // ----------------------------------
  // Send email
  // ----------------------------------
  try {
    const info = await transporter.sendMail({
      from: `"OhServe Website" <${emailUser}>`,

      to: recipient,

      replyTo: email || emailUser,

      subject: isContactMessage
        ? "New chat message — OhServe"
        : `New booking request — ${service}`,

      html,

      text,
    });

    console.log("=================================");
    console.log("OHServe EMAIL SENT");
    console.log("Message ID:", info.messageId);
    console.log("Accepted:", info.accepted);
    console.log("Rejected:", info.rejected);
    console.log("Response:", info.response);
    console.log("=================================");

    return NextResponse.json(
      {
        ok: true,
        message: "Your booking request has been sent.",
      },
      { status: 200 }
    );
  } catch (error) {
    const err = error as {
      code?: string;
      command?: string;
      responseCode?: number;
      response?: string;
      message?: string;
    };

    console.error("=================================");
    console.error("OHServe EMAIL FAILED");
    console.error("Code:", err.code);
    console.error("Command:", err.command);
    console.error("Response code:", err.responseCode);
    console.error("Response:", err.response);
    console.error("Message:", err.message);
    console.error("=================================");

    return NextResponse.json(
      {
        error:
          "Could not send your request. Please call us instead.",
      },
      { status: 502 }
    );
  }
}
