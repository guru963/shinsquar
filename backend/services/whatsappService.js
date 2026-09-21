const axios = require("axios");
const config = require("../config");

const GRAPH_API_VERSION = "v19.0";
const BASE_URL = `https://graph.facebook.com/${GRAPH_API_VERSION}`;

/**
 * WhatsApp Cloud API Service.
 * Wraps outgoing Graph API requests for sending messages, buttons, templates, and reading receipts.
 */
class WhatsAppService {
  constructor() {
    this.client = axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${config.whatsappAccessToken}`,
        "Content-Type": "application/json",
      },
    });
  }

  /**
   * Helper to handle and format errors thrown during Meta Graph API requests.
   */
  handleError(methodName, error) {
    console.error(`[WhatsAppService Error] ${methodName} failed:`);
    if (error.response) {
      console.error(`  Status Code: ${error.response.status}`);
      console.error(`  Error Data:`, JSON.stringify(error.response.data, null, 2));
    } else {
      console.error(`  Error Message: ${error.message}`);
    }
    throw error;
  }

  /**
   * Send a simple text message.
   * @param {string} to - Recipient phone number (with country code, e.g. "15555555555").
   * @param {string} textBody - Text content of the message.
   */
  async sendText(to, textBody) {
    try {
      const response = await this.client.post(`/${config.whatsappPhoneNumberId}/messages`, {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to,
        type: "text",
        text: { body: textBody },
      });
      return response.data;
    } catch (error) {
      this.handleError("sendText", error);
    }
  }

  /**
   * Send interactive buttons (limit: up to 3 buttons, max title length 20 chars).
   * @param {string} to - Recipient phone number.
   * @param {string} bodyText - Main text body above the buttons.
   * @param {Array<{id: string, title: string}>} buttons - Array of button objects.
   * @param {string|null} headerText - Optional header text.
   * @param {string|null} footerText - Optional footer text.
   */
  async sendInteractiveButtons(to, bodyText, buttons, headerText = null, footerText = null) {
    try {
      if (!buttons || buttons.length === 0) {
        throw new Error("Buttons list cannot be empty");
      }
      if (buttons.length > 3) {
        throw new Error("WhatsApp interactive reply buttons are limited to a maximum of 3");
      }

      const formattedButtons = buttons.map((btn, index) => {
        if (!btn.id || !btn.title) {
          throw new Error(`Button at index ${index} must have 'id' and 'title' properties`);
        }
        if (btn.title.length > 20) {
          console.warn(
            `[WhatsAppService Warning] Button title "${btn.title}" exceeds 20 characters and will be truncated.`
          );
        }
        return {
          type: "reply",
          reply: {
            id: btn.id,
            title: btn.title.substring(0, 20),
          },
        };
      });

      const interactivePayload = {
        type: "button",
        body: { text: bodyText },
        action: { buttons: formattedButtons },
      };

      if (headerText) {
        interactivePayload.header = { type: "text", text: headerText };
      }
      if (footerText) {
        interactivePayload.footer = { text: footerText };
      }

      const response = await this.client.post(`/${config.whatsappPhoneNumberId}/messages`, {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to,
        type: "interactive",
        interactive: interactivePayload,
      });

      return response.data;
    } catch (error) {
      this.handleError("sendInteractiveButtons", error);
    }
  }

  /**
   * Send a pre-approved message template. Required to initiate conversations outside 24h window.
   * @param {string} to - Recipient phone number.
   * @param {string} templateName - Name of the pre-approved template.
   * @param {string} languageCode - Language code (e.g. "en_US").
   * @param {Array} components - Optional components (body parameters, button parameters, etc.)
   */
  async sendTemplate(to, templateName, languageCode = "en_US", components = []) {
    try {
      const response = await this.client.post(`/${config.whatsappPhoneNumberId}/messages`, {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to,
        type: "template",
        template: {
          name: templateName,
          language: { code: languageCode },
          components: components,
        },
      });
      return response.data;
    } catch (error) {
      this.handleError("sendTemplate", error);
    }
  }

  /**
   * Mark a received message as read (shows blue double tick).
   * @param {string} messageId - The incoming WhatsApp message ID.
   */
  async markMessageAsRead(messageId) {
    try {
      const response = await this.client.post(`/${config.whatsappPhoneNumberId}/messages`, {
        messaging_product: "whatsapp",
        status: "read",
        message_id: messageId,
      });
      return response.data;
    } catch (error) {
      // Do not crash the app if marking read fails; log a warning instead.
      console.warn(`[WhatsAppService Warning] Failed to mark message ${messageId} as read:`, error.message);
    }
  }
}

module.exports = WhatsAppService;
