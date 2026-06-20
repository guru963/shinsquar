import React from "react";
import { Link } from "react-router-dom";

const EXPERIENCE_SHOPS = [
  {
    id: "glow-studio",
    name: "Glow Studio Salon",
    role: "Salon & Haircare",
    location: "Model Town, Durg",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uh9GPZ9-IlSCw4xbv42sXS2VfO2tc3gkb4iPs7bbT97jiPTnnOqpaOptzUwRts4BJHAnRrED37h-pc6BNN_8qAIIBjVvKGYoSZTT9CNJMlWYbWyxpXraGETG5EVi2rvO5PWVYKTuOxHOwNF6yo5TRet20EE_mGMjIUQ8SH3JtdqwapKvL1MVCjfofNCw9hElW32ZhWOnq-1Hv3Y0AWvDXVPj8AETkpESXPTxXzzGwP_jvdqETxxz8U7y1Qe",
    rating: "4.9"
  },
  {
    id: "iron-gym",
    name: "Iron Paradise Gym",
    role: "Fitness & Gym",
    location: "Green Chowk, Durg",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uh7Mst421mD0XF8qR4qIqR4qIqR4qIqR4qIR4qIqR4qIqR4qIqR4qIqR4qIq", // Placeholder that works
    rating: "4.7"
  },
  {
    id: "royal-spa",
    name: "Royal Wellness Spa",
    role: "Spa & Massage",
    location: "Station Road, Durg",
    image: "https://lh3.googleusercontent.com/aida/ADBb0uh7Mst421mD0XF8qR4qIqR4qIqR4qIR4qIqR4qIqR4qIqR4qIqR4qIq",
    rating: "4.8"
  }
];

const ExperienceShopCard: React.FC<{ shop: typeof EXPERIENCE_SHOPS[0] }> = ({ shop }) => (
  <div
    className="bg-white p-6 rounded-[32px] border border-outline-variant/30 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
  >
    {/* Image */}
    <div className="aspect-square rounded-2xl bg-surface-container mb-6 overflow-hidden relative">
      <img
        src={shop.image}
        alt={shop.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
        <span className="material-symbols-outlined text-[14px] text-amber-500" style={{ fontVariationSettings: '"FILL" 1' }}>star</span>
        <span className="text-[12px] font-bold text-on-surface">{shop.rating}</span>
      </div>
    </div>

    {/* Content */}
    <div className="text-center mt-auto">
      <h3 className="text-headline-lg font-bold text-on-surface mb-1">
        {shop.name}
      </h3>
      <div className="text-body-md text-primary font-bold tracking-wide uppercase px-2.5 py-0.5 bg-primary/5 rounded-full inline-block mb-3">
        {shop.role}
      </div>
      <div className="flex items-center justify-center gap-1 text-body-md text-on-surface-variant font-medium">
        <span className="material-symbols-outlined text-[18px]">location_on</span>
        {shop.location}
      </div>
    </div>
  </div>
);

import SEO from "../components/SEO";

const ExperienceBased: React.FC = () => {
  return (
    <section className="bg-background min-h-screen pb-24 px-margin-mobile md:px-margin-desktop pt-24">
      <SEO 
        title="Experience Services & Salons" 
        description="Book appointments and discover trusted salons, fitness gyms, spas, and wellness centers in your locality in Durg, Chhattisgarh."
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
          Experience Based Services in{" "}
          <span className="text-primary font-bold">
            Durg, Chhattisgarh
          </span>
        </h1>

        {/* Shops Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {EXPERIENCE_SHOPS.map((shop) => (
            <ExperienceShopCard key={shop.id} shop={shop} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceBased;