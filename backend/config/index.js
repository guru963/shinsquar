require("dotenv").config();

// Validation list
const recommendedEnv = [
  "WHATSAPP_VERIFY_TOKEN",
  "WHATSAPP_ACCESS_TOKEN",
  "WHATSAPP_PHONE_NUMBER_ID"
];

const missing = recommendedEnv.filter(key => !process.env[key]);
if (missing.length > 0) {
  console.warn(
    `\n[WARNING] Missing recommended environment variables: ${missing.join(", ")}\n` +
    `Ensure these are defined in your .env file or environment settings for WhatsApp integration to function correctly.\n`
  );
}

module.exports = {
  port: process.env.PORT || 3000,
  whatsappVerifyToken: process.env.WHATSAPP_VERIFY_TOKEN || "mywhatsappsecret123",
  whatsappAccessToken: process.env.WHATSAPP_ACCESS_TOKEN || "",
  whatsappPhoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID || "",
  whatsappAppSecret: process.env.WHATSAPP_APP_SECRET || "" // Optional, but enables signature verification if provided
};
