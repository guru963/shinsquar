import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useShops } from "../hooks/useShops";
import { SHOP_CATEGORIES, CATEGORY_ICONS } from "../types";
import type { Shop } from "../types";
import SEO from "../components/SEO";

/* ─── Category filter config ─────────────────────────────────────────────── */
const ALL_CATEGORIES = [
  { key: 'all', label: 'All Shops', icon: 'apps' },
  ...Object.entries(SHOP_CATEGORIES).map(([key, label]) => ({
    key,
    label,
    icon: CATEGORY_ICONS[key as Shop['shop_category']],
  })),
];

/* ─── Skeleton Card ──────────────────────────────────────────────────────── */
const SkeletonCard: React.FC = () => (
  <div className="bg-white p-6 rounded-[32px] border border-outline-variant/30 shadow-sm flex flex-col h-full animate-pulse">
    <div className="aspect-square rounded-2xl bg-surface-container-high mb-6" />
    <div className="space-y-3 mt-auto">
      <div className="h-6 bg-surface-container-high rounded-full w-3/4 mx-auto" />
      <div className="h-4 bg-surface-container-high rounded-full w-1/2 mx-auto" />
      <div className="h-4 bg-surface-container-high rounded-full w-2/3 mx-auto" />
    </div>
  </div>
);

/* ─── Shop Card ──────────────────────────────────────────────────────────── */
const ShopCard: React.FC<{ shop: Shop }> = ({ shop }) => (
  <Link to={`/regular-shops/${shop.id}`} className="group block w-full">
    <div className="bg-white p-6 rounded-[32px] border border-outline-variant/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full">
      {/* Image */}
      <div className="aspect-square rounded-2xl bg-surface-container mb-6 overflow-hidden relative">
        {shop.logo_url ? (
          <img
            src={shop.logo_url}
            alt={shop.shop_name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            width={400}
            height={400}
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary-fixed">
            <span className="material-symbols-outlined text-[64px] text-primary/40" style={{ fontVariationSettings: '"FILL" 1' }}>
              storefront
            </span>
          </div>
        )}
        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-on-surface text-[11px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
          <span className="material-symbols-outlined text-[14px] text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>
            {CATEGORY_ICONS[shop.shop_category]}
          </span>
          {SHOP_CATEGORIES[shop.shop_category]}
        </span>
        {/* Verified badge */}
        {shop.verified && (
          <span className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: '"FILL" 1' }}>verified</span>
            Verified
          </span>
        )}
      </div>

      {/* Content */}
      <div className="text-center mt-auto space-y-2">
        <h3 className="text-headline-lg font-bold text-on-surface">
          {shop.shop_name}
        </h3>
        <div className="flex items-center justify-center gap-1 text-body-md text-on-surface-variant font-medium">
          <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
          <span className="line-clamp-1">{shop.shop_address}</span>
        </div>
        <div className="flex items-center justify-center gap-1 text-body-md text-on-surface-variant/70">
          <span className="material-symbols-outlined text-[16px]">schedule</span>
          {shop.shop_timings || 'Timings not set'}
        </div>
      </div>
    </div>
  </Link>
);

/* ─── Empty State ────────────────────────────────────────────────────────── */
const EmptyState: React.FC<{ query: string; category: string }> = ({ query, category }) => (
  <div className="col-span-full flex flex-col items-center justify-center py-20">
    <span className="material-symbols-outlined text-[72px] text-outline-variant mb-4" style={{ fontVariationSettings: '"FILL" 1' }}>
      search_off
    </span>
    <h3 className="text-headline-lg font-bold text-on-surface mb-2">No shops found</h3>
    <p className="text-body-md text-on-surface-variant max-w-md text-center">
      {query
        ? `No results for "${query}"${category !== 'all' ? ` in ${SHOP_CATEGORIES[category as Shop['shop_category']]}` : ''}`
        : category !== 'all'
          ? `No shops listed in ${SHOP_CATEGORIES[category as Shop['shop_category']]} yet`
          : 'No verified shops are listed yet. Check back soon!'}
    </p>
  </div>
);

/* ─── Main Page ──────────────────────────────────────────────────────────── */
const RegularShops: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce search
  const debounceRef = React.useRef<ReturnType<typeof setTimeout>>(undefined);
  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setDebouncedSearch(value), 300);
  };

  const { shops, loading, error } = useShops({
    category: activeCategory,
    searchQuery: debouncedSearch,
  });

  const shopCount = shops.length;

  const regularShopsSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Local Shops in Durg, Chhattisgarh",
    "description": "Browse verified local stores and shops in Durg, Chhattisgarh on Locall.",
    "url": "https://locall.co.in/regular-shops",
    "numberOfItems": shopCount,
    "itemListElement": shops.map((shop, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "url": `https://locall.co.in/regular-shops/${shop.id}`,
      "name": shop.shop_name,
    })),
  }), [shops, shopCount]);

  return (
    <section className="bg-background min-h-screen pb-24 px-margin-mobile md:px-margin-desktop pt-24">
      <SEO
        title="Local Business & Shops Directory in Durg, Chhattisgarh"
        description="Browse the list of verified local stores, shops, and services in Durg, Chhattisgarh. Get the best rates and exclusive deals."
        schema={regularShopsSchema}
        canonical="https://locall.co.in/regular-shops"
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
        <div className="mb-10">
          <h1 className="text-display-lg md:text-display-xl font-display-xl text-on-surface mb-3">
            Discover Local Shops in{" "}
            <span className="text-primary font-bold">Durg</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Browse verified shops and businesses near you. All listings are live from our vendor network.
          </p>
        </div>

        {/* Search + Filters Bar */}
        <div className="mb-10 space-y-5">
          {/* Search */}
          <div className="relative max-w-xl">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant/50">
              search
            </span>
            <input
              type="text"
              placeholder="Search shops by name..."
              value={searchQuery}
              onChange={(e) => handleSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-outline-variant/40 rounded-2xl text-body-md text-on-surface placeholder:text-on-surface-variant/40 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => { setSearchQuery(''); setDebouncedSearch(''); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant/50 hover:text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            )}
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {ALL_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] font-semibold transition-all cursor-pointer border ${
                  activeCategory === cat.key
                    ? 'bg-primary text-on-primary border-primary shadow-md'
                    : 'bg-white text-on-surface-variant border-outline-variant/40 hover:border-primary/30 hover:text-primary'
                }`}
              >
                <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: '"FILL" 1' }}>
                  {cat.icon}
                </span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="bg-error-container border border-error/20 text-error text-body-md rounded-2xl px-6 py-4 mb-8">
            <span className="font-bold">Error:</span> {error}
          </div>
        )}

        {/* Results Count */}
        {!loading && !error && (
          <p className="text-body-md text-on-surface-variant mb-6">
            {shopCount} {shopCount === 1 ? 'shop' : 'shops'} found
            {activeCategory !== 'all' && ` in ${SHOP_CATEGORIES[activeCategory as Shop['shop_category']]}`}
            {debouncedSearch && ` matching "${debouncedSearch}"`}
          </p>
        )}

        {/* Shops Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {loading ? (
            Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)
          ) : shops.length > 0 ? (
            shops.map((shop) => <ShopCard key={shop.id} shop={shop} />)
          ) : (
            <EmptyState query={debouncedSearch} category={activeCategory} />
          )}
        </div>
      </div>
    </section>
  );
};

export default RegularShops;