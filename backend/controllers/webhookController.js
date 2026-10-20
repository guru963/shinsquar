const config = require("../config");
const WhatsAppService = require("../services/whatsappService");

// Instantiate WhatsApp service client
const whatsapp = new WhatsAppService();

const webhookController = {
  /**
   * GET /webhook
   * Verification endpoint required by Meta.
   * Matches the configured VERIFY_TOKEN and replies with the challenge parameter.
   */
  verifyWebhook: (req, res) => {
    const mode = req.query["hub.mode"];
    const token = req.query["hub.verify_token"];
    const challenge = req.query["hub.challenge"];

    if (mode === "subscribe" && token === config.whatsappVerifyToken) {
      console.log(`[Webhook verification] Webhook verified successfully!`);
      return res.status(200).send(challenge);
    } else {
      console.warn(`[Webhook verification] Verification failed. Expected token "${config.whatsappVerifyToken}", received "${token}"`);
      return res.sendStatus(403);
    }
  },

  /**
   * POST /webhook
   * Listens for real-time events sent by Meta's Graph API.
   * Handles user text, button replies, list replies, and message delivery statuses.
   */
  handleWebhook: async (req, res) => {
    try {
      const body = req.body;

      // Ensure request is from a WhatsApp business account event
      if (body.object !== "whatsapp_business_account") {
        console.warn(`[Webhook warning] Received event from non-whatsapp object: ${body.object}`);
        return res.sendStatus(404);
      }

      const entry = body.entry?.[0];
      const change = entry?.changes?.[0];
      const value = change?.value;

      if (!value) {
        return res.sendStatus(200);
      }

      // 1. Handle Status Updates (sent, delivered, read, failed)
      if (value.statuses && value.statuses.length > 0) {
        const statusUpdate = value.statuses[0];
        console.log(
          `[Webhook Status] Message ID: ${statusUpdate.id} | Status: ${statusUpdate.status} | To: ${statusUpdate.recipient_id}`
        );

        if (statusUpdate.status === "failed") {
          console.error(`[Webhook Status Error] Message delivery failed:`, statusUpdate.errors);
        }
        return res.sendStatus(200);
      }

      // 2. Handle Incoming Messages (text, interactive, media)
      if (value.messages && value.messages.length > 0) {
        const message = value.messages[0];
        const contact = value.contacts?.[0];

        const sender = {
          phone: message.from,
          name: contact?.profile?.name || "Locall User",
        };

        const messageData = {
          id: message.id,
          timestamp: message.timestamp,
          type: message.type,
        };

        // Extract message contents based on type
        if (message.type === "text") {
          messageData.text = message.text?.body;
        } else if (message.type === "interactive") {
          const interactive = message.interactive;
          messageData.interactiveType = interactive.type;

          if (interactive.type === "button_reply") {
            messageData.buttonReply = {
              id: interactive.button_reply?.id,
              title: interactive.button_reply?.title,
            };
          } else if (interactive.type === "list_reply") {
            messageData.listReply = {
              id: interactive.list_reply?.id,
              title: interactive.list_reply?.title,
              description: interactive.list_reply?.description,
            };
          }
        } else if (message.type === "button") {
          messageData.buttonReply = {
            id: message.button?.payload,
            title: message.button?.text,
          };
        } else {
          messageData.mediaContent = message[message.type];
        }

        console.log(`[Incoming message] From: ${sender.phone} (${sender.name}) | Type: ${messageData.type}`);

        // Acknowledge receipt to Meta immediately (prevents duplicate retries)
        res.sendStatus(200);

        // Process message asynchronously
        processIncomingMessage(sender, messageData).catch((err) => {
          console.error(`[Webhook Error] Error processing message from ${sender.phone}:`, err.message);
        });
      } else {
        res.sendStatus(200);
      }
    } catch (error) {
      console.error(`[Webhook Error] Fatal exception in handleWebhook:`, error);
      res.sendStatus(200);
    }
  },

  /**
   * POST /send-promotion
   * API endpoint to trigger sending the locall_product_promotion template message.
   * Body: { to: "917587315025", components?: [], languageCode?: "en_US", templateName?: "locall_product_promotion" }
   */
  sendPromotion: async (req, res) => {
    try {
      const { to, components, languageCode, templateName } = req.body;
      if (!to) {
        return res.status(400).json({
          success: false,
          error: "Recipient phone number ('to') is required with country code (e.g. 917587315025)",
        });
      }

      const template = templateName || config.whatsappTemplateName || "locall_product_promotion";
      const result = await whatsapp.sendTemplate(
        to,
        template,
        languageCode || config.whatsappTemplateLanguage || "en_US",
        components || []
      );

      return res.status(200).json({
        success: true,
        message: `Template "${template}" sent successfully to ${to}`,
        data: result,
      });
    } catch (error) {
      console.error("[sendPromotion Controller Error]", error.response?.data || error.message);
      return res.status(error.response?.status || 500).json({
        success: false,
        error: error.message,
        details: error.response?.data || null,
      });
    }
  },

  /**
   * GET /test-promotion?to=91...
   * Convenience GET endpoint for easy browser/quick testing.
   */
  testPromotion: async (req, res) => {
    const to = req.query.to;
    if (!to) {
      return res.status(400).json({
        success: false,
        message: "Please provide a recipient phone number in query param, e.g. /test-promotion?to=917587315025",
        configuredTemplate: config.whatsappTemplateName,
        configuredPhoneNumberId: config.whatsappPhoneNumberId,
      });
    }

    try {
      const result = await whatsapp.sendProductPromotion(to);
      return res.status(200).json({
        success: true,
        message: `Test promotion sent successfully to ${to}!`,
        data: result,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        error: error.message,
        details: error.response?.data || null,
      });
    }
  },

  /**
   * POST /send-message
   * Send a standard text message (works within 24h of customer initiation).
   * Body: { to: "917587315025", text: "Hello!" }
   */
  sendMessage: async (req, res) => {
    try {
      const { to, text } = req.body;
      if (!to || !text) {
        return res.status(400).json({
          success: false,
          error: "Both 'to' and 'text' fields are required.",
        });
      }

      const result = await whatsapp.sendText(to, text);
      return res.status(200).json({
        success: true,
        data: result,
      });
    } catch (error) {
      return res.status(error.response?.status || 500).json({
        success: false,
        error: error.message,
        details: error.response?.data || null,
      });
    }
  },
};

/**
 * Core business router / chatbot responder for incoming messages.
 */
async function processIncomingMessage(sender, message) {
  const phone = sender.phone;

  // Mark incoming message as read
  await whatsapp.markMessageAsRead(message.id);

  // Normalize user text inputs or button click IDs
  const userRawInput =
    message.text ||
    message.buttonReply?.id ||
    message.buttonReply?.title ||
    message.listReply?.id ||
    "";

  const userText = userRawInput.trim().toLowerCase();

  console.log(`[Bot Router] Routing input "${userText}" from ${phone}`);

  // Flow Routing Logic
  if (
    userText === "hi" ||
    userText === "hello" ||
    userText === "start" ||
    userText === "menu" ||
    userText === "hey"
  ) {
    // Welcome Greeting with interactive buttons
    await whatsapp.sendInteractiveButtons(
      phone,
      `Hello ${sender.name}! Welcome to *Locall* – Your locality, made smarter. 🛍️\n\nHow can we assist you today?`,
      [
        { id: "btn_deals", title: "Local Deals" },
        { id: "btn_services", title: "Our Services" },
        { id: "btn_contact", title: "Contact Us" },
      ],
      "Locall Assistant",
      "Tap an option below to proceed"
    );
  } else if (
    userText === "btn_deals" ||
    userText.includes("deal") ||
    userText.includes("promotion") ||
    userText.includes("offer") ||
    userText.includes("product")
  ) {
    // Show latest deals & promotion info
    const dealsMessage =
      `🔥 *Exclusive Local Deals & Promotions*\n\n` +
      `Discover verified local stores, discounts, and daily offers in your neighborhood with Locall!\n\n` +
      `🌐 Visit: https://locall.co.in\n\n` +
      `Would you like to explore services or speak with a local partner?`;

    await whatsapp.sendInteractiveButtons(
      phone,
      dealsMessage,
      [
        { id: "menu", title: "Main Menu" },
        { id: "btn_contact", title: "Contact Partner" },
      ]
    );
  } else if (userText === "btn_services" || userText === "services") {
    // Show services list
    const servicesMessage =
      `🛠️ *What Locall Offers:*\n\n` +
      `1. *Regular Shops*: Find top groceries, fashion, electronics, and daily essentials nearby.\n\n` +
      `2. *Experience Based*: Cafes, salons, wellness & recreational spots.\n\n` +
      `3. *Household Workers*: Background-verified domestic help, maids, cooks & technicians.\n\n` +
      `Learn more at https://locall.co.in`;

    await whatsapp.sendInteractiveButtons(
      phone,
      servicesMessage,
      [
        { id: "menu", title: "Main Menu" },
        { id: "btn_deals", title: "View Deals" },
        { id: "btn_contact", title: "Contact Us" },
      ]
    );
  } else if (userText === "btn_contact" || userText === "contact" || userText === "agent" || userText === "support") {
    // Show contact details
    const contactMessage =
      `📞 *Locall Partner & Support Contact*\n\n` +
      `• *Company*: Localstack Market Private Limited\n` +
      `• *Brand*: Locall\n` +
      `• *Website*: https://locall.co.in\n` +
      `• *Email*: contact@locall.co.in\n` +
      `• *Phone*: +91-75873-15025\n` +
      `• *Location*: Shankar Nagar, Durg, Chhattisgarh - 491001\n\n` +
      `A team member will be happy to assist you!`;

    await whatsapp.sendText(phone, contactMessage);
  } else {
    // Fallback response with navigation options
    const fallbackMessage =
      `✅ Thank you for messaging *Locall*!\n\n` +
      `We received: "${message.text || userRawInput}"\n\n` +
      `How can we help you?`;

    await whatsapp.sendInteractiveButtons(
      phone,
      fallbackMessage,
      [
        { id: "menu", title: "Main Menu" },
        { id: "btn_deals", title: "Local Deals" },
        { id: "btn_contact", title: "Contact Us" },
      ]
    );
  }
}

module.exports = webhookController;
