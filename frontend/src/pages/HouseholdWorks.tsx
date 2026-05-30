import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import { WORKERS } from "../data2";
import { ROUTE_META } from "../seo/routes";
import { buildItemListSchema } from "../seo/schema";

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

const HouseholdWorks: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const gridRef = useRef<HTMLDivElement>(null);
  const listSchema = buildItemListSchema(
    "Household workers in Durg, Chhattisgarh",
    vendorsData.map((vendor) => ({
      name: vendor.name,
      itemType: "Service",
    }))
  );

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
        title={ROUTE_META["/household-works"].title}
        description={ROUTE_META["/household-works"].description}
        structuredData={listSchema}
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
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="text-body-md text-on-surface-variant">Explore verified profiles:</span>
              {WORKERS.map((worker) => (
                <Link
                  key={worker.id}
                  to={`/household-workers/${worker.id}`}
                  className="text-body-md font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  {worker.name} ({worker.role})
                </Link>
              ))}
            </div>
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
                  <img src={vendor.image} alt={vendor.name} loading="lazy" decoding="async" />
                  
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
                  
                  <div className="pop-card__pricing">
                    <span className="pop-card__price">{vendor.price}</span>
                  </div>

                  {/* WhatsApp button */}
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pop-card__whatsapp"
                    aria-label={`Contact ${vendor.name} on WhatsApp`}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HouseholdWorks;