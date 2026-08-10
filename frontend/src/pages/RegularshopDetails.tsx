import React from "react";
import { useParams, Link } from "react-router-dom";
import { useShopById, useOffersByShopId } from "../hooks/useShops";
import { SHOP_CATEGORIES, CATEGORY_ICONS } from "../types";
import SEO from "../components/SEO";

/* ─── Loading Skeleton ───────────────────────────────────────────────────── */
const DetailSkeleton: React.FC = () => (
  <div className="animate-pulse">
    <div className="bg-white p-8 rounded-[40px] border border-outline-variant/30 shadow-sm mb-12">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-surface-container-high" />
        <div className="flex-1 space-y-4 w-full">
          <div className="h-10 bg-surface-container-high rounded-full w-2/3 mx-auto md:mx-0" />
          <div className="h-5 bg-surface-container-high rounded-full w-1/2 mx-auto md:mx-0" />
          <div className="h-5 bg-surface-container-high rounded-full w-1/3 mx-auto md:mx-0" />
          <div className="h-12 bg-surface-container-high rounded-full w-48 mx-auto md:mx-0 mt-6" />
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white p-8 rounded-[32px] border border-outline-variant/30 h-60" />
      <div className="bg-white p-8 rounded-[32px] border border-outline-variant/30 h-60" />
    </div>
  </div>
);

/* ─── Info Row ───────────────────────────────────────────────────────────── */
const InfoRow: React.FC<{ icon: string; label: string; value: string; filled?: boolean }> = ({ icon, label, value, filled }) => (
  <div className="flex items-start gap-3 py-3 border-b border-outline-variant/20 last:border-0">
    <span
      className="material-symbols-outlined text-[20px] text-primary mt-0.5 shrink-0"
      style={filled ? { fontVariationSettings: '"FILL" 1' } : undefined}
    >
      {icon}
    </span>
    <div className="min-w-0">
      <p className="text-[11px] font-bold text-on-surface-variant/60 uppercase tracking-wider">{label}</p>
      <p className="text-body-md text-on-surface font-medium mt-0.5 break-words">{value}</p>
    </div>
  </div>
);

/* ─── Main Component ─────────────────────────────────────────────────────── */
const ShopDetails: React.FC = () => {
  const { id } = useParams();
  const { shop, loading, error } = useShopById(id);
  const { offers, loading: offersLoading } = useOffersByShopId(id);

  if (loading) {
    return (
      <div className="bg-background min-h-screen pb-24 px-margin-mobile md:px-margin-desktop pt-24">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <Link to="/regular-shops" className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-bold transition-colors">
              <span className="material-symbols-outlined text-[20px] font-bold">arrow_back</span>
              Back to Shops
            </Link>
          </div>
          <DetailSkeleton />
        </div>
      </div>
    );
  }

  if (error || !shop) {
    return (
      <div className="bg-background min-h-screen flex flex-col items-center justify-center px-margin-mobile">
        <span className="material-symbols-outlined text-[80px] text-outline-variant mb-4" style={{ fontVariationSettings: '"FILL" 1' }}>
          store_mall_directory
        </span>
        <h1 className="text-display-lg font-bold text-on-surface mb-2">Shop Not Found</h1>
        <p className="text-body-md text-on-surface-variant mb-8">
          {error || "This shop doesn't exist or may have been removed."}
        </p>
        <Link
          to="/regular-shops"
          className="bg-primary text-on-primary font-bold px-8 py-3 rounded-full hover:bg-primary/95 transition-all shadow-md"
        >
          Browse All Shops
        </Link>
      </div>
    );
  }

  const categoryLabel = SHOP_CATEGORIES[shop.shop_category] || shop.shop_category;
  const categoryIcon = CATEGORY_ICONS[shop.shop_category] || 'storefront';
  const mapsUrl = shop.latitude && shop.longitude
    ? `https://www.google.com/maps/dir/?api=1&destination=${shop.latitude},${shop.longitude}`
    : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(shop.shop_address)}`;

  const shopSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": shop.shop_name,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": shop.shop_address,
      "addressLocality": "Durg",
      "addressRegion": "Chhattisgarh",
      "postalCode": shop.pincode || "491001",
      "addressCountry": "IN",
    },
    "url": `https://locall.co.in/regular-shops/${shop.id}`,
    "image": shop.logo_url || "https://locall.co.in/logo.png",
    "geo": shop.latitude && shop.longitude ? {
      "@type": "GeoCoordinates",
      "latitude": shop.latitude,
      "longitude": shop.longitude,
    } : undefined,
    "openingHours": shop.shop_timings,
    "priceRange": "₹",
    "currenciesAccepted": "INR",
  };

  return (
    <div className="bg-background min-h-screen pb-24 px-margin-mobile md:px-margin-desktop pt-24 text-left">
      <SEO
        title={`${shop.shop_name} — ${categoryLabel} in Durg`}
        description={`Visit ${shop.shop_name} at ${shop.shop_address}, Durg, Chhattisgarh. ${categoryLabel} — open ${shop.shop_timings || 'daily'}.`}
        schema={shopSchema}
        canonical={`https://locall.co.in/regular-shops/${shop.id}`}
      />

      <div className="max-w-5xl mx-auto">
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
        <div className="bg-white p-8 rounded-[40px] border border-outline-variant/30 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Logo */}
            {shop.logo_url ? (
              <img
                src={shop.logo_url}
                alt={shop.shop_name}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-lg"
              />
            ) : (
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary-fixed flex items-center justify-center border-4 border-white shadow-lg">
                <span className="material-symbols-outlined text-[56px] text-primary/50" style={{ fontVariationSettings: '"FILL" 1' }}>
                  storefront
                </span>
              </div>
            )}

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                <h1 className="text-display-lg md:text-display-xl font-display-xl text-on-surface">
                  {shop.shop_name}
                </h1>
                <div className="flex justify-center gap-2 flex-wrap">
                  {shop.verified && (
                    <span className="text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full text-label-sm font-bold flex items-center gap-1 w-fit">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
                      Verified
                    </span>
                  )}
                  <span className="text-primary bg-primary-fixed border border-primary/10 px-3 py-1 rounded-full text-label-sm font-bold flex items-center gap-1 w-fit">
                    <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>{categoryIcon}</span>
                    {categoryLabel}
                  </span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center justify-center md:justify-start gap-2 mt-5 text-body-lg text-on-surface-variant font-medium">
                <span className="material-symbols-outlined text-[22px] text-primary">location_on</span>
                {shop.shop_address}
              </div>

              {/* Timings */}
              {shop.shop_timings && (
                <div className="flex items-center justify-center md:justify-start gap-2 mt-3 text-body-lg text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-[22px] text-primary">schedule</span>
                  {shop.shop_timings}
                </div>
              )}

              {/* Owner */}
              {shop.profiles?.name && (
                <div className="flex items-center justify-center md:justify-start gap-2 mt-3 text-body-lg text-on-surface-variant font-medium">
                  <span className="material-symbols-outlined text-[22px] text-primary">person</span>
                  Owned by {shop.profiles.name}
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-3">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-primary/95 text-on-primary font-bold px-8 py-3 rounded-full transition-all flex items-center gap-2 text-body-md shadow-md"
                >
                  <span className="material-symbols-outlined">directions</span>
                  Get Directions
                </a>
                {shop.profiles?.email && (
                  <a
                    href={`mailto:${shop.profiles.email}`}
                    className="bg-white hover:bg-surface-container-low text-on-surface font-bold px-8 py-3 rounded-full transition-all flex items-center gap-2 text-body-md shadow-sm border border-outline-variant/40"
                  >
                    <span className="material-symbols-outlined">mail</span>
                    Contact
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* DETAILS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Shop Details */}
          <div className="bg-white p-8 rounded-[32px] border border-outline-variant/30 shadow-sm">
            <h2 className="text-headline-lg font-bold text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>info</span>
              Shop Details
            </h2>
            <div className="space-y-0">
              <InfoRow icon="storefront" label="Shop Type" value={shop.shop_type ? shop.shop_type.charAt(0).toUpperCase() + shop.shop_type.slice(1) : '—'} filled />
              <InfoRow icon="category" label="Category" value={categoryLabel} filled />
              <InfoRow icon="schedule" label="Timings" value={shop.shop_timings || 'Not specified'} />
              <InfoRow icon="pin_drop" label="Pincode" value={shop.pincode || '—'} />
              {shop.latitude && shop.longitude && (
                <InfoRow icon="my_location" label="Coordinates" value={`${shop.latitude.toFixed(4)}, ${shop.longitude.toFixed(4)}`} />
              )}
            </div>
          </div>

          {/* Owner Details */}
          <div className="bg-white p-8 rounded-[32px] border border-outline-variant/30 shadow-sm">
            <h2 className="text-headline-lg font-bold text-on-surface mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>badge</span>
              Owner Details
            </h2>
            <div className="space-y-0">
              <InfoRow icon="person" label="Owner Name" value={shop.profiles?.name || '—'} filled />
              <InfoRow icon="mail" label="Email" value={shop.profiles?.email || '—'} />
              <InfoRow icon="location_on" label="Full Address" value={shop.shop_address || '—'} filled />
            </div>

            {/* Map Embed Placeholder */}
            {shop.latitude && shop.longitude && (
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full bg-surface-container-low hover:bg-surface-container border border-outline-variant/30 rounded-2xl p-6 text-center transition-colors group"
              >
                <span className="material-symbols-outlined text-[36px] text-primary group-hover:scale-110 transition-transform inline-block" style={{ fontVariationSettings: '"FILL" 1' }}>
                  map
                </span>
                <p className="text-body-md text-on-surface-variant font-medium mt-2">View on Google Maps →</p>
              </a>
            )}
          </div>
        </div>

        {/* OFFERS SECTION */}
        <div className="mt-12">
          <h2 className="text-display-lg font-display-xl text-on-surface mb-8 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[28px]" style={{ fontVariationSettings: '"FILL" 1' }}>local_offer</span>
            Offers in shop
          </h2>

          {offersLoading ? (
            <div className="animate-pulse space-y-4">
              <div className="h-40 bg-white border border-outline-variant/30 rounded-[32px]" />
              <div className="h-40 bg-white border border-outline-variant/30 rounded-[32px]" />
            </div>
          ) : offers.length > 0 ? (
            <div className="space-y-6">
              {offers.map((offer) => {
                // Parse media JSON or string
                const media = (() => {
                  const val = offer.image_url;
                  if (!val) return { primary: null };
                  if (val.startsWith('{')) {
                    try {
                      const parsed = JSON.parse(val);
                      return { primary: parsed.primary || null };
                    } catch (e) {}
                  }
                  return { primary: val };
                })();

                const whatsappText = encodeURIComponent(
                  `Hello, I am interested in the offer "${offer.title}" (${offer.discount}) at "${shop.shop_name}".`
                );
                const whatsappUrl = `https://wa.me/917587315025?text=${whatsappText}`;

                return (
                  <div
                    key={offer.id}
                    className="bg-white p-6 rounded-[32px] border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 items-center"
                  >
                    {/* IMAGE */}
                    {media.primary ? (
                      <img
                        src={media.primary}
                        className="w-full md:w-40 h-40 rounded-2xl object-cover"
                        alt={offer.title}
                      />
                    ) : (
                      <div className="w-full md:w-40 h-40 rounded-2xl bg-primary-fixed flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[48px] text-primary/40" style={{ fontVariationSettings: '"FILL" 1' }}>
                          local_offer
                        </span>
                      </div>
                    )}

                    {/* INFO */}
                    <div className="flex-1 text-center md:text-left">
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
                        <h3 className="text-headline-lg font-bold text-on-surface">
                          {offer.title}
                        </h3>
                        <span className="bg-error text-on-primary px-3 py-1 rounded-md text-label-sm font-bold">
                          {offer.discount}
                        </span>
                      </div>
                      <p className="text-body-md text-on-surface-variant mt-3 max-w-2xl mx-auto md:mx-0">
                        {offer.description}
                      </p>
                      {offer.expiration_date && (
                        <p className="text-label-sm text-on-surface-variant/60 mt-3 flex items-center gap-1 justify-center md:justify-start">
                          <span className="material-symbols-outlined text-[14px]">event</span>
                          Expires: {offer.expiration_date}
                        </p>
                      )}
                    </div>

                    {/* PRICE + BUTTON */}
                    <div className="w-full md:w-auto flex flex-col items-center md:items-end gap-3 shrink-0">
                      <div className="flex items-center gap-2">
                        {offer.old_price && (
                          <span className="text-on-surface-variant/50 line-through text-body-md">
                            {offer.old_price.startsWith('₹') ? offer.old_price : `₹${offer.old_price}`}
                          </span>
                        )}
                        {offer.new_price && (
                          <span className="text-headline-lg font-bold text-on-surface">
                            {offer.new_price.startsWith('₹') ? offer.new_price : `₹${offer.new_price}`}
                          </span>
                        )}
                      </div>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-body-md font-bold w-full md:w-auto transition-colors shadow-md text-center cursor-pointer"
                      >
                        Claim Offer
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white p-8 rounded-[32px] border border-outline-variant/30 text-center text-on-surface-variant/80">
              <span className="material-symbols-outlined text-[48px] text-outline-variant mb-2">local_offer</span>
              <p className="text-body-md">No active offers or campaigns for this shop right now.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;