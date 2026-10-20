const axios = require("axios");
const config = require("../config");

const GRAPH_API_VERSION = "v19.0";
const BASE_URL = `https://graph.facebook.com/${GRAPH_API_VERSION}`;

/**
 * WhatsApp Cloud API Service.
 * Wraps outgoing Graph API requests for sending messages, buttons, templates, and reading receipts.
 */
class WhatsAppService {
  /**
   * Dynamic axios client to ensure current access token is always used.
   */
  get client() {
    return axios.create({
      baseURL: BASE_URL,
      headers: {
        Authorization: `Bearer ${config.whatsappAccessToken}`,
        "Content-Type": "application/json",
      },
    });
  }

  /**
   * Helper to sanitize phone numbers (removes spaces, +, dashes).
   */
  sanitizePhoneNumber(phone) {
    if (!phone) return "";
    return phone.toString().replace(/[^0-9]/g, "");
  }

  /**
   * Helper to format errors thrown during Meta Graph API requests.
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
   * @param {string} to - Recipient phone number (with country code, e.g. "917587315025").
   * @param {string} textBody - Text content of the message.
   */
  async sendText(to, textBody) {
    try {
      const recipient = this.sanitizePhoneNumber(to);
      const response = await this.client.post(`/${config.whatsappPhoneNumberId}/messages`, {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: recipient,
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
      const recipient = this.sanitizePhoneNumber(to);
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
        to: recipient,
        type: "interactive",
        interactive: interactivePayload,
      });

      return response.data;
    } catch (error) {
      this.handleError("sendInteractiveButtons", error);
    }
  }

  /**
   * Send a pre-approved message template.
   * Required to initiate conversations outside the 24h service window.
   * Includes automatic language fallback (e.g. en_US <-> en).
   * @param {string} to - Recipient phone number.
   * @param {string} templateName - Name of the pre-approved template.
   * @param {string} languageCode - Language code (e.g. "en_US" or "en").
   * @param {Array} components - Optional components (body parameters, header, etc.)
   */
  async sendTemplate(to, templateName, languageCode = "en_US", components = []) {
    const recipient = this.sanitizePhoneNumber(to);
    const buildPayload = (lang) => {
      const payload = {
        messaging_product: "whatsapp",
        recipient_type: "individual",
        to: recipient,
        type: "template",
        template: {
          name: templateName,
          language: { code: lang },
        },
      };
      if (components && components.length > 0) {
        payload.template.components = components;
      }
      return payload;
    };

    try {
      const response = await this.client.post(
        `/${config.whatsappPhoneNumberId}/messages`,
        buildPayload(languageCode)
      );
      return response.data;
    } catch (error) {
      // Check if the error is due to language code mismatch (e.g. created as 'en' instead of 'en_US')
      const errorMsg = error.response?.data?.error?.message || "";
      if (
        (errorMsg.toLowerCase().includes("does not exist in") ||
         errorMsg.toLowerCase().includes("language")) &&
        (languageCode === "en_US" || languageCode === "en")
      ) {
        const fallbackLang = languageCode === "en_US" ? "en" : "en_US";
        console.log(
          `[WhatsAppService] Retrying template "${templateName}" with fallback language "${fallbackLang}"...`
        );
        try {
          const retryRes = await this.client.post(
            `/${config.whatsappPhoneNumberId}/messages`,
            buildPayload(fallbackLang)
          );
          return retryRes.data;
        } catch (retryError) {
          this.handleError("sendTemplate", retryError);
        }
      }
      this.handleError("sendTemplate", error);
    }
  }

  /**
   * Shortcut to send the Locall product promotion template.
   * @param {string} to - Recipient phone number.
   * @param {Array} components - Template variable components (if any).
   * @param {string} languageCode - Language code, defaults to config.whatsappTemplateLanguage.
   */
  async sendProductPromotion(to, components = [], languageCode = null) {
    const template = config.whatsappTemplateName || "locall_product_promotion";
    const lang = languageCode || config.whatsappTemplateLanguage || "en_US";
    return this.sendTemplate(to, template, lang, components);
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
      console.warn(`[WhatsAppService Warning] Failed to mark message ${messageId} as read:`, error.message);
    }
  }
}

module.exports = WhatsAppService;
