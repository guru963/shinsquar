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
      console.warn(`[Webhook verification] Verification failed. Token mismatch or invalid mode.`);
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
      // Meta triggers these for messages sent by the bot.
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
          name: contact?.profile?.name || "WhatsApp User",
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
          // Standard quick reply template buttons
          messageData.buttonReply = {
            id: message.button?.payload,
            title: message.button?.text,
          };
        } else {
          // Non-text media types (image, document, location, etc.)
          messageData.mediaContent = message[message.type];
        }

        console.log(`[Incoming message] From: ${sender.phone} (${sender.name}) | Type: ${messageData.type}`);

        // Acknowledge receipt of webhook to Meta immediately (prevents retry loop)
        res.sendStatus(200);

        // Process message asynchronously
        processIncomingMessage(sender, messageData).catch((err) => {
          console.error(`[Webhook Error] Error processing message from ${sender.phone}:`, err);
        });
      } else {
        // Safe fallback for other webhook structures
        res.sendStatus(200);
      }
    } catch (error) {
      console.error(`[Webhook Error] Fatal exception in handleWebhook:`, error);
      res.sendStatus(200); // Send 200 to prevent Meta webhook blockades
    }
  },
};

/**
 * Core business router/bot responder.
 * Processes the message, runs bot flows, and calls WhatsAppService.
 */
async function processIncomingMessage(sender, message) {
  const phone = sender.phone;

  // Mark message as read so user gets blue checks
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
  if (userText === "hi" || userText === "hello" || userText === "start" || userText === "menu") {
    // Welcome Greeting with interactive buttons
    await whatsapp.sendInteractiveButtons(
      phone,
      `Hello ${sender.name}! Welcome to Shinsquare. 🌟 How can we help you today?`,
      [
        { id: "btn_services", title: "Our Services" },
        { id: "btn_hours", title: "Business Hours" },
        { id: "btn_contact", title: "Talk to Agent" },
      ],
      "Shinsquare Assistant",
      "Please tap an option below"
    );
  } else if (userText === "btn_services" || userText === "services") {
    // Show services list
    const servicesMessage =
      `🛠️ *Our Services*\n\n` +
      `1. *Web Application Development*:\nCustom responsive frontend and backend structures.\n\n` +
      `2. *WhatsApp API Integration*:\nProduction-grade automated chatbot services and notifications.\n\n` +
      `3. *Cloud & DevOps Infrastructure*:\nSecure hosting, CI/CD pipelines, and hosting configuration.\n\n` +
      `Reply *menu* or click below to return to the options.`;

    await whatsapp.sendInteractiveButtons(
      phone,
      servicesMessage,
      [
        { id: "menu", title: "Back to Menu" },
        { id: "btn_contact", title: "Get in Touch" },
      ]
    );
  } else if (userText === "btn_hours" || userText === "hours") {
    // Show business hours
    const hoursMessage =
      `📅 *Business Hours*\n\n` +
      `• *Monday - Friday*: 9:00 AM - 6:00 PM\n` +
      `• *Saturday - Sunday*: Closed\n\n` +
      `Our support agents will respond to inquiries during these business hours.`;

    await whatsapp.sendInteractiveButtons(
      phone,
      hoursMessage,
      [
        { id: "menu", title: "Back to Menu" },
        { id: "btn_contact", title: "Talk to Agent" },
      ]
    );
  } else if (userText === "btn_contact" || userText === "contact" || userText === "agent") {
    // Show contact details
    const contactMessage =
      `📞 *Contact Support*\n\n` +
      `• *Email*: support@shinsquare.com\n` +
      `• *Phone*: +1 (555) 019-2834\n\n` +
      `An agent has been alerted and will reach out to this WhatsApp number shortly.`;

    await whatsapp.sendText(phone, contactMessage);
  } else {
    // Catch-all response: confirmation reply with routing suggestions
    const fallbackMessage =
      `✅ Received your message: "${message.text || userRawInput}"\n\n` +
      `We've logged your request. Would you like to check our services or talk to an agent?`;

    await whatsapp.sendInteractiveButtons(
      phone,
      fallbackMessage,
      [
        { id: "menu", title: "Main Menu" },
        { id: "btn_contact", title: "Talk to Agent" },
      ]
    );
  }
}

module.exports = webhookController;
