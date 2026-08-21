import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";

const PORT = process.env.PORT || 3001;
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

if (!BOT_TOKEN || !CHAT_ID) {
  console.warn(
    "[warn] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID missing — /api/contact will fail until they are set."
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

app.post("/api/contact", contactLimiter, async (req, res) => {
  const honeypot = typeof req.body.company_website === "string" ? req.body.company_website : "";

  if (honeypot !== "") {
    return res.json({ ok: true });
  }

  const fields = validateContact(req.body);

  if (!fields) {
    return res.status(400).json({ ok: false, error: "validation" });
  }

  try {
    await sendToTelegram(fields);
    res.json({ ok: true });
  } catch (error) {
    console.error("[contact] failed to deliver:", error.message);
    res.status(502).json({ ok: false, error: "delivery" });
  }
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