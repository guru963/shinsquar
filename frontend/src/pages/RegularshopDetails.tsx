import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Phone, MapPin, ArrowLeft, MessageSquare, X, Send, Loader2 } from "lucide-react";
import { SHOPS, PRODUCTS } from "../data";
import denim from "../assets/denim.png";

// ─── WhatsApp Cloud API Config ───────────────────────────────────────────────
// Replace these with your actual values from Meta Developer Console
const WA_PHONE_NUMBER_ID = "978729701999437";   // e.g. "123456789012345"
const WA_ACCESS_TOKEN = "EAAM9dwY8JEYBRCjjhoJZBgPUtQGqNHXL2khaTbZCq6cghZBC0X3soquRw2TmZBHShnziZBvqVfQ1qoEZATWynSli1edGtechePnIYUnDBtbggCZCrhnFgCwBFW8U33zAibI84GuIHvGuSa2Aw7ds1GWoZCCJcL22eNAcVmI6msGAD5ZCFxGUZCH1L9hQZBMOEzBhovulHrbYBcpApRX8kz0HR5qarg212xa1x6iyldEndTX6rZBVwfYahMPIZA3kTl0jrDKUc4kdr8ji1d5jXHFqkwQBxSr7I2AZDZD"; // from Meta App Dashboard
// ─────────────────────────────────────────────────────────────────────────────

interface CouponModalProps {
  product: any;
  shopName: string;
  onClose: () => void;
}

const CouponModal: React.FC<CouponModalProps> = ({ product, shopName, onClose }) => {
  const [recipientPhone, setRecipientPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const generateCoupon = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetter = letters[Math.floor(Math.random() * letters.length)];
    const randomNumber = Math.floor(100 + Math.random() * 900);
    return `SHIN${randomLetter}${randomNumber}`;
  };

  const sendViaCloudAPI = async () => {
    // Validate phone number (digits only, 10–15 chars)
    const cleanPhone = recipientPhone.replace(/\D/g, "");
    if (cleanPhone.length < 10 || cleanPhone.length > 15) {
      setErrorMsg("Please enter a valid phone number with country code (e.g. 919876543210)");
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    const coupon = generateCoupon();

    try {
      const response = await fetch(
        `https://graph.facebook.com/v22.0/${WA_PHONE_NUMBER_ID}/messages`,
        {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${WA_ACCESS_TOKEN}`,
            "Content-Type": "application/json",
          },
          
            body: JSON.stringify({
  messaging_product: "whatsapp",
  to: cleanPhone,
  type: "template",
  template: {
    name: "shinsquare",
    language: { code: "en" }, // IMPORTANT (your template shows "English", not en_US)
    components: [
      {
        type: "body",
        parameters: [
          { type: "text", text: shopName },        // {{1}}
          { type: "text", text: product.name },    // {{2}}
          { type: "text", text: coupon },          // {{3}}
          { type: "text", text: product.discount } // {{4}}
        ]
      }
    ]
  }
})
        
        }
      );

      const data = await response.json();

      if (!response.ok) {
        // Meta API returns error details in data.error
        throw new Error(data?.error?.message || "Failed to send message");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative font-['Poppins']">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X size={20} />
        </button>

        <h3 className="text-xl font-bold text-[#2C2C2C] mb-1">Send Coupon via WhatsApp</h3>
        <p className="text-sm text-[#737373] mb-5">
          Enter the customer's WhatsApp number to send the coupon directly.
        </p>

        {/* Product Preview */}
        <div className="flex items-center gap-3 bg-[#F7F8FF] rounded-xl p-3 mb-5">
          <img src={denim} className="w-14 h-14 object-cover rounded-lg" />
          <div>
            <p className="font-semibold text-[#2C2C2C] text-sm">{product.name}</p>
            <p className="text-xs text-[#737373]">{shopName}</p>
            <span className="text-xs bg-[#DC2626] text-white px-2 py-0.5 rounded-full mt-1 inline-block">
              {product.discount}
            </span>
          </div>
        </div>

        {status === "success" ? (
          <div className="text-center py-6">
            <div className="text-5xl mb-3">✅</div>
            <p className="text-[#16A34A] font-semibold text-lg">Coupon Sent!</p>
            <p className="text-sm text-[#737373] mt-1">
              The coupon was delivered to +{recipientPhone.replace(/\D/g, "")} via WhatsApp.
            </p>
            <button
              onClick={onClose}
              className="mt-5 bg-[#4356FF] text-white px-6 py-2 rounded-full text-sm font-medium"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Phone Input */}
            <label className="block text-sm font-medium text-[#2C2C2C] mb-1">
              Recipient's WhatsApp Number
            </label>
            <div className="flex items-center border border-[#EAEAEA] rounded-xl overflow-hidden mb-2 focus-within:ring-2 focus-within:ring-[#4356FF]">
              <span className="bg-[#F7F8FF] px-3 py-3 text-sm text-[#737373] border-r border-[#EAEAEA]">
                +
              </span>
              <input
                type="tel"
                placeholder="919876543210 (with country code)"
                value={recipientPhone}
                onChange={(e) => setRecipientPhone(e.target.value)}
                className="flex-1 px-3 py-3 text-sm outline-none text-[#2C2C2C] placeholder:text-[#9CA3AF]"
              />
            </div>
            <p className="text-xs text-[#9CA3AF] mb-4">
              Include country code without +. E.g. 91 for India.
            </p>

            {/* Error */}
            {status === "error" && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl px-4 py-3 mb-4">
                {errorMsg}
              </div>
            )}
            {errorMsg && status === "idle" && (
              <div className="bg-yellow-50 border border-yellow-200 text-yellow-700 text-sm rounded-xl px-4 py-3 mb-4">
                {errorMsg}
              </div>
            )}

            {/* Send Button */}
            <button
              onClick={sendViaCloudAPI}
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 bg-[#16A34A] text-white py-3 rounded-full font-medium text-sm disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send Coupon
                </>
              )}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const ShopDetails: React.FC = () => {
  const { id } = useParams();
  const shop = SHOPS.find((s) => s.id === id);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  if (!shop) {
    return (
      <div className="p-20 text-center font-bold">Shop Not Found</div>
    );
  }

  return (
    <div className="bg-[#F7F8FF] min-h-screen font-['Poppins']">

      {/* Coupon Modal */}
      {selectedProduct && (
        <CouponModal
          product={selectedProduct}
          shopName={shop.name}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <div className="max-w-[1948px] mx-auto">

        {/* BACK BUTTON */}
        <div className="px-[20px] md:px-[48px] py-[40px] md:py-[52px]">
          <Link
            to="/regular-shops"
            className="flex items-center gap-2 text-[#2C2C2C] font-medium text-xl md:text-2xl"
          >
            <ArrowLeft size={20} />
            Back
          </Link>
        </div>

        {/* SHOP HEADER */}
        <div>
          <div className="flex items-center gap-[16px] md:gap-[48px] px-[20px] md:px-[48px]">
            <img
              src={shop.image}
              className="w-[70px] h-[70px] md:w-[160px] md:h-[160px] rounded-full object-cover"
            />
            <div>
              <div className="flex flex-wrap items-center gap-[16px] md:gap-[48px]">
                <h1 className="text-[20px] md:text-4xl font-medium text-[#2C2C2C]">
                  {shop.name}
                </h1>
                <button className="flex items-center gap-2 bg-[#4356FF] text-white px-[14px] md:px-[28px] py-[6px] md:py-[10px] rounded-full text-[13px] md:text-[20px] font-medium">
                  <MessageSquare size={18} />
                  Contact for offers
                </button>
              </div>
              <p className="text-[#22C55E] text-[16px] md:text-[26px] font-medium">Live</p>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="flex items-center py-[26px] gap-[8px] px-[20px] md:px-[48px] mt-[16px] text-[#737373] text-[13px] md:text-[16px] font-semibold">
            <MapPin size={20} />
            {shop.fullAddress}
          </div>

          {/* PHONE */}
          <div className="flex items-center gap-[8px] px-[20px] md:px-[48px] mt-[6px] text-[#737373] text-[13px] md:text-[16px] font-semibold">
            <Phone size={20} />
            {shop.phone}
          </div>
        </div>

        {/* OFFERS TITLE */}
        <div className="mt-[48px] md:mt-[72px] mb-[48px] md:mb-[72px]">
          <h2 className="px-[20px] md:px-[48px] mb-[32px] md:mb-[72px] text-[20px] md:text-3xl font-bold text-[#2C2C2C]">
            Offers in shop
          </h2>

          {/* OFFER LIST */}
          <div className="space-y-[24px] md:space-y-[36px] mx-[20px] md:mx-[48px]">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="flex flex-col md:flex-row items-start md:items-center gap-[16px] md:gap-[59px] bg-white border border-[#EAEAEA] pr-[16px] md:pr-[48px] shadow-[0px_1px_4px_rgba(12,12,13,0.05)]"
              >
                {/* IMAGE */}
                <img
                  src={denim}
                  className="w-full md:w-[170px] h-[180px] md:h-full object-cover"
                />

                {/* INFO */}
                <div className="flex-1 px-[12px] md:px-0">
                  <div className="flex flex-wrap items-center gap-[10px] md:gap-[36px]">
                    <h3 className="text-[18px] md:text-[30px] font-medium text-[#2C2C2C]">
                      {product.name}
                    </h3>
                    <span className="bg-[#DC2626] text-white px-[10px] md:px-[12px] py-[2px] rounded-full text-[12px] md:text-[20px] font-medium">
                      {product.discount}
                    </span>
                  </div>
                  <p className="text-[#737373] text-[14px] md:text-[15px] font-semibold mt-[8px] md:mt-[30px] max-w-[600px]">
                    {product.desc}
                  </p>
                </div>

                {/* PRICE + BUTTON */}
                <div className="w-full md:w-auto flex flex-col items-start md:items-end px-[12px] md:px-0 pb-[12px] md:pb-0">
                  <div className="flex items-center gap-2 md:justify-end">
                    <span className="text-[#9CA3AF] line-through text-[14px] md:text-[20px]">
                      Rs.{product.oldPrice}
                    </span>
                    <span className="text-[18px] md:text-[20px] font-semibold text-[#2C2C2C]">
                      Rs.{product.price}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="mt-[10px] md:mt-[16px] bg-[#16A34A] text-white px-[16px] md:px-[18px] py-[8px] md:py-[10px] rounded-full text-[14px] md:text-[20px] font-medium w-full md:w-auto"
                  >
                    Get coupon code
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;