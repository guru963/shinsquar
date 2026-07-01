import React from "react";
import { Link } from "react-router-dom";
import { SHOPS } from "../data";

import SEO from "../components/SEO";

const regularShopsSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Local Shops in Durg, Chhattisgarh",
  "description": "Browse verified local stores and shops in Durg, Chhattisgarh on Locall.",
  "url": "https://shinsquare.com/regular-shops",
  "numberOfItems": SHOPS.length,
  "itemListElement": SHOPS.map((shop, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "url": `https://shinsquare.com/regular-shops/${shop.id}`,
    "name": shop.name,
  })),
};

const ShopCard: React.FC<{ shop: typeof SHOPS[0] }> = ({ shop }) => (
  <Link to={`/regular-shops/${shop.id}`} className="group block w-full">
    <div
      className="bg-white p-6 rounded-[32px] border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Image */}
      <div className="aspect-square rounded-2xl bg-surface-container mb-6 overflow-hidden">
        <img
          src={shop.image}
          alt={shop.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          width={400}
          height={400}
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="text-center mt-auto">
        <h3 className="text-headline-lg font-bold text-on-surface mb-2">
          {shop.name}
        </h3>
        <div className="flex items-center justify-center gap-1 text-body-md text-on-surface-variant font-medium">
          <span className="material-symbols-outlined text-[18px]">location_on</span>
          {shop.location}
        </div>
      </div>
    </div>
  </Link>
);

const RegularShops: React.FC = () => {
  return (
    <section className="bg-background min-h-screen pb-24 px-margin-mobile md:px-margin-desktop pt-24">
      <SEO
        title="Local Business & Shops Directory in Durg, Chhattisgarh"
        description="Browse the list of verified local stores, shops, and services in Durg, Chhattisgarh. Get the best rates and exclusive deals."
        schema={regularShopsSchema}
        canonical="https://shinsquare.com/regular-shops"
      />
      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary font-bold transition-colors"
          >
            <span className="material-symbols-outlined text-[20px] font-bold">arrow_back</span>
            Back to Home
          </Link>
        </div>

        {/* Heading */}
        <h1 className="text-display-lg md:text-display-xl font-display-xl text-on-surface mb-12">
          Regular Shops in{" "}
          <span className="text-primary font-bold">
            Durg, Chhattisgarh
          </span>
        </h1>

        {/* Shops Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {SHOPS.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default RegularShops;