import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { SHOP_CATEGORIES, CATEGORY_ICONS } from '../types';
import type { Shop } from '../types';

const CATEGORIES = ['All', 'Food', 'Clothes', 'Furniture', 'General', 'Construction'];

const CATEGORY_MAP: Record<string, string> = {
  'Food': 'food',
  'Clothes': 'clothes',
  'Furniture': 'furniture',
  'General': 'general',
  'Construction': 'construction'
};

export default function PopularSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchShops = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('shops')
          .select('*, profiles:owner_id(name, email)')
          .eq('verified', true)
          .order('created_at', { ascending: false });

        if (!error && data) {
          setShops(data as Shop[]);
        }
      } catch (err) {
        console.error('Error fetching shops for homepage:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  const filteredShops =
    activeCategory === 'All'
      ? shops
      : shops.filter((s) => s.shop_category === CATEGORY_MAP[activeCategory]);

  const displayedShops = filteredShops.slice(0, 4);

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
  }, [displayedShops, activeCategory]);

  return (
    <section className="popular" id="vendors-section">
      <div className="container">
        <div className="popular__header">
          <div className="text-left">
            <p className="popular__eyebrow">Near You</p>
            <h2 className="popular__title">Meet Your <span style={{ color: "#2563EB" }}>Vendors</span></h2>
            <p className="popular__subtitle">
              Verified local shops and businesses trusted by your neighbors
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
          {loading ? (
            // Simple loading skeletons
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="pop-card popular-card animate-pulse">
                <div className="pop-card__media bg-surface-container-high" style={{ height: '200px' }} />
                <div className="pop-card__body p-6 space-y-3">
                  <div className="h-4 bg-surface-container-high rounded w-1/3" />
                  <div className="h-6 bg-surface-container-high rounded w-3/4" />
                  <div className="h-4 bg-surface-container-high rounded w-2/3" />
                  <div className="h-8 bg-surface-container-high rounded w-full mt-4" />
                </div>
              </div>
            ))
          ) : displayedShops.length > 0 ? (
            displayedShops.map((shop) => {
              const whatsappText = encodeURIComponent(`Hello, I want to connect with ${shop.shop_name}.`);
              const whatsappUrl = `https://wa.me/917587315025?text=${whatsappText}`;
              const displayCategory = SHOP_CATEGORIES[shop.shop_category] || shop.shop_category;
              const displayIcon = CATEGORY_ICONS[shop.shop_category] || 'storefront';

              return (
                <div key={shop.id} className="pop-card popular-card flex flex-col h-full">
                  {/* Image area / Link to details */}
                  <Link to={`/regular-shops/${shop.id}`} className="pop-card__media block">
                    {shop.logo_url ? (
                      <img src={shop.logo_url} alt={shop.shop_name} loading="lazy" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary-fixed" style={{ minHeight: '200px' }}>
                        <span className="material-symbols-outlined text-[48px] text-primary/40" style={{ fontVariationSettings: '"FILL" 1' }}>
                          storefront
                        </span>
                      </div>
                    )}
                    
                    {shop.verified && (
                      <span className="pop-card__badge pop-card__badge--verified">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        Verified
                      </span>
                    )}
                    
                    <span className="pop-card__distance">
                      <span className="material-symbols-outlined text-[12px] mr-1">sell</span>
                      {shop.shop_type ? shop.shop_type.charAt(0).toUpperCase() + shop.shop_type.slice(1) : 'Retailer'}
                    </span>
                  </Link>
  
                  {/* Body */}
                  <div className="pop-card__body text-left flex flex-col flex-1">
                    <p className="pop-card__category flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                        {displayIcon}
                      </span>
                      {displayCategory}
                    </p>
                    <Link to={`/regular-shops/${shop.id}`} className="hover:text-primary transition-colors">
                      <h3 className="pop-card__title line-clamp-1">{shop.shop_name}</h3>
                    </Link>
                    <p className="pop-card__desc line-clamp-2 flex-1">{shop.shop_address}</p>
                    
                    {/* Clean Flex Footer Row for timings and WhatsApp */}
                    <div className="flex justify-between items-center gap-2 mt-4 pt-3 border-t border-[#D9E2EF]">
                      <div className="pop-card__pricing m-0 flex items-center gap-1 text-on-surface-variant/80">
                        <span className="material-symbols-outlined text-[14px]">schedule</span>
                        <span className="pop-card__price text-xs font-semibold">{shop.shop_timings || '9:00 AM - 9:00 PM'}</span>
                      </div>
                      {/* WhatsApp button */}
                      <a 
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pop-card__whatsapp-btn-clean"
                        aria-label={`Contact ${shop.shop_name} on WhatsApp`}
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.816 9.816 0 0 0 4.73 1.206h.005c5.46 0 9.908-4.448 9.913-9.913a9.815 9.815 0 0 0-2.902-7.008zM11.992 20.13a8.17 8.17 0 0 1-4.177-1.149l-.299-.17-3.11.815.83-3.03-.187-.297A8.178 8.178 0 0 1 3.82 11.91c.005-4.514 3.678-8.187 8.187-8.187a8.171 8.171 0 0 1 5.792 2.4a8.175 8.175 0 0 1 2.397 5.793c-.005 4.514-3.678 8.187-8.204 8.214zm4.505-6.17c-.247-.125-1.47-.723-1.696-.807-.228-.083-.393-.125-.558.125-.166.246-.639.807-.784.972-.145.166-.29.187-.537.063a6.786 6.786 0 0 1-1.998-1.233 7.465 7.465 0 0 1-1.384-1.722c-.145-.246-.015-.38.109-.504.113-.11.247-.29.37-.433.125-.145.166-.247.249-.413.083-.166.04-.31-.02-.433-.063-.125-.559-1.347-.765-1.848-.2-.486-.403-.42-.558-.428-.145-.008-.31-.008-.475-.008-.166 0-.434.062-.661.31-.227.247-.867.847-.867 2.067 0 1.22.888 2.397 1.012 2.562.124.166 1.747 2.668 4.233 3.738.59.255 1.05.408 1.41.521.593.189 1.134.162 1.562.099.476-.072 1.47-.6 1.677-1.18.207-.577.207-1.074.145-1.18-.062-.103-.228-.165-.475-.29z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-10">
              <span className="material-symbols-outlined text-[48px] text-outline-variant mb-2">search_off</span>
              <p className="text-body-md text-on-surface-variant font-medium">No vendors listed in this category yet</p>
            </div>
          )}
        </div>

        {filteredShops.length > 4 && (
          <div className="flex justify-center mt-12">
            <Link
              to="/regular-shops"
              className="inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white px-8 py-3.5 rounded-full text-body-md font-bold transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              View All Vendors
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
