import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import nodemailer from "nodemailer";

const PORT = process.env.PORT || 3001;
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const CONTACT_FROM = process.env.CONTACT_FROM || SMTP_USER;
const CONTACT_TO = process.env.CONTACT_TO || SMTP_USER;

if (!BOT_TOKEN || !CHAT_ID) {
  console.warn(
    "[warn] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID missing — Telegram delivery disabled."
  );
}

const mailer =
  SMTP_HOST && SMTP_USER && SMTP_PASS
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      })
    : null;

if (!mailer) {
  console.warn(
    "[warn] SMTP_HOST / SMTP_USER / SMTP_PASS missing — email delivery disabled."
  );
}

const app = express();

app.set("trust proxy", 1);

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  process.env.ALLOWED_ORIGIN,
].filter(Boolean);

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: "rate_limited" },
});

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
  const text = [
    "<b>📩 New message — arsyxweb.ir</b>",
    "",
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>Email:</b> ${escapeHtml(email)}`,
    ...(phone ? [`<b>Phone:</b> ${escapeHtml(phone)}`] : []),
    "",
    escapeHtml(message),
  ].join("\n");

  const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: "HTML",
    }),
  });

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

app.post("/api/contact", contactLimiter, async (req, res) => {
  const honeypot = typeof req.body.company_website === "string" ? req.body.company_website : "";

  if (honeypot !== "") {
    return res.json({ ok: true });
  }

  const fields = validateContact(req.body);

  if (!fields) {
    return res.status(400).json({ ok: false, error: "validation" });
  }

  const channels = [];
  if (mailer) channels.push(["email", () => sendToEmail(fields)]);
  if (BOT_TOKEN && CHAT_ID) channels.push(["telegram", () => sendToTelegram(fields)]);

  if (channels.length === 0) {
    console.error("[contact] no delivery channel configured");
    return res.status(502).json({ ok: false, error: "delivery" });
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
    return res.status(502).json({ ok: false, error: "delivery" });
  }

  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`Arsyx contact API listening on http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Arsyx Contact API is running"
  });
});