import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { WORKERS } from "../data2";

interface Vendor {
  id: string;
  name: string;
  work: string;
  price: string;
  image: string;
  verified: boolean;
  distance: string;
  category: string;
}

const vendorsData: Vendor[] = [
  {
    id: 'vendor-narendra',
    name: 'Narendra',
    work: 'Plumber',
    price: 'Work dependent',
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&h=450&fit=crop',
    verified: true,
    distance: '0.2 km',
    category: 'Plumbing',
  },
  {
    id: 'vendor-hemant',
    name: 'Hemant',
    work: 'Tiles Worker',
    price: 'Work dependent',
    image: 'https://tse1.mm.bing.net/th/id/OIP.vfU3gEC3hhr5bbQVFSMFPAHaEO?pid=Api&P=0&h=180',
    verified: true,
    distance: '0.8 km',
    category: 'Construction',
  },
  {
    id: 'vendor-bhola',
    name: 'Bhola',
    work: 'Louvers and PVC',
    price: 'Work dependent',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=450&fit=crop',
    verified: false,
    distance: '1.5 km',
    category: 'Interior',
  },
  {
    id: 'vendor-lakshman',
    name: 'Lakshman',
    work: 'Photographer',
    price: 'Price on request',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=450&fit=crop',
    verified: false,
    distance: '1.2 km',
    category: 'Creative',
  },
];

const CATEGORIES = ['All', 'Plumbing', 'Construction', 'Interior', 'Creative'];

import SEO from "../components/SEO";

const householdWorksSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Household Workers & Home Service Providers in Durg, Chhattisgarh",
  "description": "Find verified plumbers, electricians, carpenters and other home service providers in Durg, Chhattisgarh on ShinSquare.",
  "url": "https://shinsquare.com/household-works",
  "numberOfItems": vendorsData.length + WORKERS.length,
  "itemListElement": [
    ...vendorsData.map((v, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": `${v.name} — ${v.work}`,
      "description": `${v.work} in Durg, Chhattisgarh. Category: ${v.category}. Distance: ${v.distance}.`,
    })),
    ...WORKERS.map((w, i) => ({
      "@type": "ListItem",
      "position": vendorsData.length + i + 1,
      "url": `https://shinsquare.com/household-workers/${w.id}`,
      "name": `${w.name} — ${w.role}`,
      "description": `${w.role} in Durg with ${w.experience} of experience. Rating: ${w.rating}/5.`,
    })),
  ],
};

const HouseholdWorks: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredVendors =
    activeCategory === 'All'
      ? vendorsData
      : vendorsData.filter((v) => v.category === activeCategory);

  useEffect(() => {
    if (!gridRef.current || !('IntersectionObserver' in window)) return;

    const cards = gridRef.current.querySelectorAll('.pop-card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    cards.forEach((card, i) => {
      const el = card as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = `opacity 0.5s ${i * 0.08}s ease-out, transform 0.5s ${i * 0.08}s ease-out`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activeCategory]);

  return (
    <section className="popular py-24 min-h-screen bg-[#F4F6FC]" id="vendors-section">
      <SEO
        title="Household Workers & Home Service Providers in Durg"
        description="Hire verified local Plumbers, Tiles Workers, Electricians, Carpenters and Creative professionals in Durg, Chhattisgarh. Trusted local expertise."
        schema={householdWorksSchema}
        canonical="https://shinsquare.com/household-works"
      />
      <div className="container">
        {/* Back Button */}
        <div className="mb-8 text-left flex">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#4356FF] font-bold transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="popular__header">
          <div className="text-left">
            <p className="popular__eyebrow">Near You</p>
            <h2 className="popular__title">
              Household Workers in <span style={{ color: "#4356FF" }}>Durg, Chhattisgarh</span>
            </h2>
            <p className="popular__subtitle">
              Verified local professionals trusted by your neighbors
            </p>
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="popular__filters mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`popular__filter-btn${activeCategory === cat ? ' popular__filter-btn--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="popular__grid" ref={gridRef}>
          {filteredVendors.map((vendor) => {
            const whatsappText = encodeURIComponent(`Hello, I want to hire ${vendor.name} for ${vendor.work} work.`);
            const whatsappUrl = `https://wa.me/917587315025?text=${whatsappText}`;

            return (
              <div key={vendor.id} className="pop-card popular-card">
                {/* Image area */}
                <div className="pop-card__media">
                  <img src={vendor.image} alt={vendor.name} loading="lazy" />
                  
                  {vendor.verified && (
                    <span className="pop-card__badge pop-card__badge--verified">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Verified
                    </span>
                  )}
                  
                  <span className="pop-card__distance">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {vendor.distance}
                  </span>
                </div>

                {/* Body */}
                <div className="pop-card__body text-left">
                  <p className="pop-card__category">{vendor.category}</p>
                  <h3 className="pop-card__title">{vendor.name}</h3>
                  <p className="pop-card__desc">{vendor.work}</p>
                  
                  {/* Clean Flex Footer Row for price and WhatsApp */}
                  <div className="flex justify-between items-center gap-2 mt-4 pt-3 border-t border-gray-100">
                    <div className="pop-card__pricing m-0">
                      <span className="pop-card__price">{vendor.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* WhatsApp button */}
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pop-card__whatsapp-btn-clean"
                        aria-label={`Contact ${vendor.name} on WhatsApp`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.816 9.816 0 0 0 4.73 1.206h.005c5.46 0 9.908-4.448 9.913-9.913a9.815 9.815 0 0 0-2.902-7.008zM11.992 20.13a8.17 8.17 0 0 1-4.177-1.149l-.299-.17-3.11.815.83-3.03-.187-.297A8.178 8.178 0 0 1 3.82 11.91c.005-4.514 3.678-8.187 8.187-8.187a8.171 8.171 0 0 1 5.792 2.4a8.175 8.175 0 0 1 2.397 5.793c-.005 4.514-3.678 8.187-8.204 8.214zm4.505-6.17c-.247-.125-1.47-.723-1.696-.807-.228-.083-.393-.125-.558.125-.166.246-.639.807-.784.972-.145.166-.29.187-.537.063a6.786 6.786 0 0 1-1.998-1.233 7.465 7.465 0 0 1-1.384-1.722c-.145-.246-.015-.38.109-.504.113-.11.247-.29.37-.433.125-.145.166-.247.249-.413.083-.166.04-.31-.02-.433-.063-.125-.559-1.347-.765-1.848-.2-.486-.403-.42-.558-.428-.145-.008-.31-.008-.475-.008-.166 0-.434.062-.661.31-.227.247-.867.847-.867 2.067 0 1.22.888 2.397 1.012 2.562.124.166 1.747 2.668 4.233 3.738.59.255 1.05.408 1.41.521.593.189 1.134.162 1.562.099.476-.072 1.47-.6 1.677-1.18.207-.577.207-1.074.145-1.18-.062-.103-.228-.165-.475-.29z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
          );
        })}
        </div>

        {/* Worker Detail Pages Section */}
        {WORKERS.length > 0 && (
          <div className="mt-16">
            <h2 className="popular__title mb-6">Featured Professionals</h2>
            <div className="popular__grid">
              {WORKERS.map((worker) => (
                <Link
                  key={worker.id}
                  to={`/household-workers/${worker.id}`}
                  className="pop-card popular-card block hover:no-underline"
                  aria-label={`View profile of ${worker.name}`}
                >
                  <div className="pop-card__media">
                    <img src={worker.image} alt={worker.name} loading="lazy" width={400} height={300} />
                    <span className="pop-card__badge pop-card__badge--verified">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Verified
                    </span>
                  </div>
                  <div className="pop-card__body text-left">
                    <p className="pop-card__category">{worker.role}</p>
                    <h3 className="pop-card__title">{worker.name}</h3>
                    <p className="pop-card__desc">{worker.experience} Experience · ⭐ {worker.rating}</p>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <span className="inline-flex items-center gap-1 text-[#4356FF] font-bold text-sm">
                        View Profile
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HouseholdWorks;