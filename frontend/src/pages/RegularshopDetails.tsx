import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { X, Send, Loader2 } from "lucide-react";
import { SHOPS, PRODUCTS } from "../data";
import denim from "../assets/denim.png";

// ─── WhatsApp Cloud API Config ───────────────────────────────────────────────
const WA_PHONE_NUMBER_ID = "978729701999437";
const WA_ACCESS_TOKEN = "EAAM9dwY8JEYBRCjjhoJZBgPUtQGqNHXL2khaTbZCq6cghZBC0X3soquRw2TmZBHShnziZBvqVfQ1qoEZATWynSli1edGtechePnIYUnDBtbggCZCrhnFgCwBFW8U33zAibI84GuIHvGuSa2Aw7ds1GWoZCCJcL22eNAcVmI6msGAD5ZCFxGUZCH1L9hQZBMOEzBhovulHrbYBcpApRX8kz0HR5qarg212xa1x6iyldEndTX6rZBVwfYahMPIZA3kTl0jrDKUc4kdr8ji1d5jXHFqkwQBxSr7I2AZDZD";
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
              language: { code: "en" },
              components: [
                {
                  type: "body",
                  parameters: [
                    { type: "text", text: shopName },
                    { type: "text", text: product.name },
                    { type: "text", text: coupon },
                    { type: "text", text: product.discount }
                  ]
                }
              ]
            }
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error?.message || "Failed to send message");
      }

      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm">
      <div className="bg-white rounded-[32px] border border-outline-variant/20 shadow-2xl w-full max-w-md p-8 relative text-left">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-on-surface-variant hover:text-on-surface transition-colors cursor-pointer"
        >
          <X size={20} />
        </button>

        <h3 className="text-display-lg font-bold text-on-surface mb-2">Send Coupon</h3>
        <p className="text-body-md text-on-surface-variant mb-6">
          Enter the customer's WhatsApp number to send the coupon directly.
        </p>

        {/* Product Preview */}
        <div className="flex items-center gap-4 bg-surface-container-low border border-outline-variant/20 rounded-2xl p-4 mb-6">
          <img src={denim} className="w-16 h-16 object-cover rounded-xl" alt={product.name} />
          <div>
            <p className="font-bold text-on-surface text-body-lg">{product.name}</p>
            <p className="text-body-md text-on-surface-variant">{shopName}</p>
            <span className="text-label-sm bg-error text-on-primary px-2.5 py-0.5 rounded-md mt-1 inline-block">
              {product.discount}
            </span>
          </div>
        </div>

        {status === "success" ? (
          <div className="text-center py-6">
            <div className="text-5xl mb-4">✨</div>
            <p className="text-emerald-600 font-bold text-body-lg">Coupon Sent Successfully!</p>
            <p className="text-body-md text-on-surface-variant mt-2">
              The coupon was delivered to +{recipientPhone.replace(/\D/g, "")} via WhatsApp.
            </p>
            <button
              onClick={onClose}
              className="mt-6 w-full bg-primary text-on-primary py-3 rounded-full text-body-md font-bold hover:bg-primary/95 transition-all shadow-md cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <>
            {/* Phone Input */}
            <label className="block text-body-md font-bold text-on-surface mb-2">
              Recipient's WhatsApp Number
            </label>
            <div className="flex items-center border border-outline-variant/40 rounded-xl overflow-hidden mb-2 focus-within:ring-2 focus-within:ring-primary focus-within:border-transparent">
              <span className="bg-surface-container px-4 py-3.5 text-body-md text-on-surface-variant border-r border-outline-variant/40">
                +
              </span>
              <input
                type="tel"
                placeholder="919876543210 (with country code)"
                value={recipientPhone}
                onChange={(e) => setRecipientPhone(e.target.value)}
                className="flex-1 px-4 py-3.5 text-body-md outline-none text-on-surface placeholder:text-on-surface-variant/40"
              />
            </div>
            <p className="text-label-sm text-on-surface-variant/60 mb-6">
              Include country code without +. E.g. 91 for India.
            </p>

            {/* Error */}
            {status === "error" && (
              <div className="bg-error-container border border-error/20 text-error text-body-md rounded-xl px-4 py-3 mb-6">
                {errorMsg}
              </div>
            )}
            {errorMsg && status === "idle" && (
              <div className="bg-error-container border border-error/20 text-error text-body-md rounded-xl px-4 py-3 mb-6">
                {errorMsg}
              </div>
            )}

            {/* Send Button */}
            <button
              onClick={sendViaCloudAPI}
              disabled={status === "sending"}
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 text-white py-4 rounded-full font-bold text-body-md disabled:opacity-60 hover:bg-emerald-700 transition-colors shadow-md cursor-pointer"
            >
              {status === "sending" ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
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

import SEO from "../components/SEO";

const ShopDetails: React.FC = () => {
  const { id } = useParams();
  const shop = SHOPS.find((s) => s.id === id);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);

  if (!shop) {
    return (
      <div className="p-20 text-center font-bold text-display-lg">Shop Not Found</div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-24 px-margin-mobile md:px-margin-desktop pt-24 text-left">
      <SEO 
        title={shop.name} 
        description={`Get live coupons, discounts and details for ${shop.name} at ${shop.fullAddress || shop.location}, Durg, Chhattisgarh.`}
      />
      {/* Coupon Modal */}
      {selectedProduct && (
        <CouponModal
          product={selectedProduct}
          shopName={shop.name}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      <div className="max-w-7xl mx-auto">
        {/* BACK BUTTON */}
        <div className="mb-12">
          <Link
            to="/regular-shops"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-bold transition-colors"
          >
            <span className="material-symbols-outlined text-[20px] font-bold">arrow_back</span>
            Back to Shops
          </Link>
        </div>

        {/* SHOP HEADER */}
        <div className="bg-white p-8 rounded-[40px] border border-outline-variant/30 shadow-sm mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src={shop.image}
              alt={shop.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <h1 className="text-display-lg md:text-display-xl font-display-xl text-on-surface">
                  {shop.name}
                </h1>
                <div className="flex justify-center gap-3">
                  <span className="text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full text-label-sm font-bold flex items-center gap-1 w-fit">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>fiber_manual_record</span>
                    Live
                  </span>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="flex items-center justify-center md:justify-start gap-2 mt-6 text-body-lg text-on-surface-variant font-medium">
                <span className="material-symbols-outlined text-[22px] text-primary">location_on</span>
                {shop.fullAddress}
              </div>

              {/* PHONE */}
              <div className="flex items-center justify-center md:justify-start gap-2 mt-3 text-body-lg text-on-surface-variant font-medium">
                <span className="material-symbols-outlined text-[22px] text-primary">call</span>
                {shop.phone}
              </div>

              {/* ACTION BUTTON */}
              <div className="mt-8 flex justify-center md:justify-start">
                <button className="bg-primary hover:bg-primary/95 text-on-primary font-bold px-8 py-3 rounded-full transition-all flex items-center gap-2 text-body-md shadow-md cursor-pointer">
                  <span className="material-symbols-outlined">forum</span>
                  Contact for offers
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* OFFERS */}
        <div>
          <h2 className="text-display-lg font-display-xl text-on-surface mb-8">
            Offers in shop
          </h2>

          {/* OFFER LIST */}
          <div className="space-y-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="bg-white p-6 rounded-[32px] border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-center"
              >
                {/* IMAGE */}
                <img
                  src={denim}
                  className="w-full md:w-40 h-40 rounded-2xl object-cover"
                  alt={product.name}
                />

                {/* INFO */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                    <h3 className="text-headline-lg font-bold text-on-surface">
                      {product.name}
                    </h3>
                    <span className="bg-error text-on-primary px-3 py-1 rounded-md text-label-sm font-bold">
                      {product.discount}
                    </span>
                  </div>
                  <p className="text-body-md text-on-surface-variant mt-3 max-w-2xl mx-auto md:mx-0">
                    {product.desc}
                  </p>
                </div>

                {/* PRICE + BUTTON */}
                <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-3 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="text-on-surface-variant/50 line-through text-body-md">
                      Rs.{product.oldPrice}
                    </span>
                    <span className="text-headline-lg font-bold text-on-surface">
                      Rs.{product.price}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-body-md font-bold w-full md:w-auto transition-colors shadow-md cursor-pointer"
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