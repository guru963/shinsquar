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
  whatsappPhoneNumberId: process.env.WHATSAPP_PHONE_NUMBER_ID || "1287449947790575",
  whatsappAppSecret: process.env.WHATSAPP_APP_SECRET || "",
  whatsappTemplateName: process.env.WHATSAPP_TEMPLATE_NAME || "locall_product_promotion",
  whatsappTemplateId: process.env.WHATSAPP_TEMPLATE_ID || "1080561444856471",
  whatsappTemplateLanguage: process.env.WHATSAPP_TEMPLATE_LANGUAGE || "en_US"
};
