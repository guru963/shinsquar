const express = require("express");
const router = express.Router();
const webhookController = require("../controllers/webhookController");
const verifySignature = require("../middleware/signatureVerification");

// Webhook validation GET endpoint
router.get("/webhook", webhookController.verifyWebhook);

// Webhook message receiver POST endpoint
// Signature verification middleware validates Meta requests in production
router.post("/webhook", verifySignature, webhookController.handleWebhook);

module.exports = router;
