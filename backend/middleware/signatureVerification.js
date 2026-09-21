const crypto = require("crypto");
const config = require("../config");

/**
 * Middleware to verify WhatsApp Webhook signatures (x-hub-signature-256).
 * Computes SHA256 HMAC of raw request body using App Secret.
 */
function verifySignature(req, res, next) {
  // If app secret is not configured, warn and bypass verification to ease dev setup.
  // In production, app secret must be set to ensure security.
  if (!config.whatsappAppSecret) {
    console.warn(
      `[Webhook warning] WHATSAPP_APP_SECRET is not defined. Bypassing payload signature verification.`
    );
    return next();
  }

  const signatureHeader = req.headers["x-hub-signature-256"];
  if (!signatureHeader) {
    console.warn(`[Webhook warning] Missing x-hub-signature-256 header. Request denied.`);
    return res.status(401).send("Signature missing");
  }

  const parts = signatureHeader.split("=");
  if (parts.length !== 2 || parts[0] !== "sha256") {
    console.warn(`[Webhook warning] Invalid signature format. Request denied.`);
    return res.status(401).send("Invalid signature format");
  }

  const signature = parts[1];
  
  // Express body-parser with custom rawBody capture is required for this to work
  if (!req.rawBody) {
    console.error(
      `[Webhook error] Raw request body is not available. Ensure express.json() is configured with rawBody verify function.`
    );
    return res.status(500).send("Signature verification setup error");
  }

  const computedSignature = crypto
    .createHmac("sha256", config.whatsappAppSecret)
    .update(req.rawBody)
    .digest("hex");

  try {
    const isVerified = crypto.timingSafeEqual(
      Buffer.from(signature, "hex"),
      Buffer.from(computedSignature, "hex")
    );

    if (!isVerified) {
      console.warn(`[Webhook warning] Payload signature mismatch. Request denied.`);
      return res.status(401).send("Signature verification failed");
    }
  } catch (err) {
    console.error(`[Webhook error] Error validating signature:`, err.message);
    return res.status(401).send("Signature verification failed");
  }

  next();
}

module.exports = verifySignature;
