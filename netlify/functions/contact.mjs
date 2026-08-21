import nodemailer from "nodemailer";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_FROM = process.env.CONTACT_FROM || SMTP_USER;
const CONTACT_TO = process.env.CONTACT_TO || SMTP_USER;

const mailer =
  SMTP_HOST && SMTP_USER && SMTP_PASS
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      })
    : null;

const rateBuckets = new Map();
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT = 5;

function isRateLimited(key) {
  const now = Date.now();
  const bucket = rateBuckets.get(key);

  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  return bucket.count > RATE_LIMIT;
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function validateContact(body) {
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (name.length < 2 || name.length > 100) return null;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 254)
    return null;
  if (phone !== "" && !/^\d{5,20}$/.test(phone)) return null;
  if (message.length < 10 || message.length > 5000) return null;

  return { name, email, phone: phone || null, message };
}

async function sendToTelegram({ name, email, phone, message }) {
  if (!BOT_TOKEN || !CHAT_ID) throw new Error("telegram not configured");

  const text = [
    "<b>📩 New message — arsyxweb.ir</b>",
    "",
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>Email:</b> ${escapeHtml(email)}`,
    ...(phone ? [`<b>Phone:</b> ${escapeHtml(phone)}`] : []),
    "",
    escapeHtml(message),
  ].join("\n");

  const response = await fetch(
    `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text,
        parse_mode: "HTML",
      }),
    }
  );

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Telegram API error ${response.status}: ${detail}`);
  }
}

function buildContactEmailHtml({ name, email, phone, message }) {
  const rows = [
    ["Name", escapeHtml(name)],
    ["Email", escapeHtml(email)],
    ...(phone ? [["Phone", escapeHtml(phone)]] : []),
  ]
    .map(
      ([label, value]) =>
        `<tr><td style="padding:4px 12px 4px 0;"><b>${label}:</b></td><td>${value}</td></tr>`
    )
    .join("");

  return [
    '<h2 style="margin:0 0 16px;">📩 New message — arsyxweb.ir</h2>',
    `<table style="border-collapse:collapse;">${rows}</table>`,
    `<p style="margin-top:16px;">${escapeHtml(message).replaceAll("\n", "<br>")}</p>`,
  ].join("\n");
}

async function sendToEmail(fields) {
  if (!mailer) throw new Error("email not configured");

  await mailer.sendMail({
    from: `"Arsyx Website" <${CONTACT_FROM}>`,
    to: CONTACT_TO,
    replyTo: fields.email,
    subject: `New contact message from ${fields.name}`,
    text: [
      "New message — arsyxweb.ir",
      "",
      `Name: ${fields.name}`,
      `Email: ${fields.email}`,
      ...(fields.phone ? [`Phone: ${fields.phone}`] : []),
      "",
      fields.message,
    ].join("\n"),
    html: buildContactEmailHtml(fields),
  });
}

function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export default async (req, context) => {
  if (req.method !== "POST") {
    return jsonResponse({ ok: false, error: "method" }, 405);
  }

  const ip =
    context?.ip ||
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    "unknown";

  if (isRateLimited(ip)) {
    return jsonResponse({ ok: false, error: "rate_limited" }, 429);
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return jsonResponse({ ok: false, error: "validation" }, 400);
  }

  const honeypot =
    typeof body.company_website === "string" ? body.company_website : "";

  if (honeypot !== "") {
    return jsonResponse({ ok: true });
  }

  const fields = validateContact(body);

  if (!fields) {
    return jsonResponse({ ok: false, error: "validation" }, 400);
  }

  const channels = [];
  if (mailer) channels.push(["email", () => sendToEmail(fields)]);
  if (BOT_TOKEN && CHAT_ID)
    channels.push(["telegram", () => sendToTelegram(fields)]);

  if (channels.length === 0) {
    console.error("[contact] no delivery channel configured");
    return jsonResponse({ ok: false, error: "delivery" }, 502);
  }

  const results = await Promise.allSettled(channels.map(([, send]) => send()));

  let delivered = 0;
  channels.forEach(([name], i) => {
    const result = results[i];
    if (result.status === "fulfilled") {
      delivered++;
    } else {
      console.error(
        `[contact] ${name} delivery failed:`,
        result.reason?.message || result.reason
      );
    }
  });

  if (delivered === 0) {
    return jsonResponse({ ok: false, error: "delivery" }, 502);
  }

  return jsonResponse({ ok: true });
};

export const config = {
  path: "/api/contact",
};
