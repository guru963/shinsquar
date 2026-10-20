const express = require("express");
const router = express.Router();
const webhookController = require("../controllers/webhookController");
const verifySignature = require("../middleware/signatureVerification");

// Webhook validation GET endpoint (required by Meta dashboard)
router.get("/webhook", webhookController.verifyWebhook);

// Webhook message receiver POST endpoint (Meta sends incoming messages here)
router.post("/webhook", verifySignature, webhookController.handleWebhook);

// Trigger sending WhatsApp promotional templates
router.post("/send-promotion", webhookController.sendPromotion);

// Easy test endpoint to trigger promotional template via browser GET request
router.get("/test-promotion", webhookController.testPromotion);

// Direct text message sending endpoint (works within 24h conversation session)
router.post("/send-message", webhookController.sendMessage);

module.exports = router;
