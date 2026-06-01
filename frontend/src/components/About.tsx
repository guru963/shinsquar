import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-on-secondary-container relative overflow-hidden text-left">
      <div className="absolute inset-0 noise z-0 opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left side: Content & Main Metrics */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <span className="text-primary-fixed-dim text-xs font-bold uppercase tracking-widest block">About Us</span>
              <h2 className="text-display-lg font-display-xl text-white leading-tight">
                Shin Square<br />
                <span className="text-primary-fixed-dim text-2xl font-semibold tracking-normal block mt-1">your hyperlocal platform</span>
              </h2>
              <div className="space-y-4 text-secondary-fixed text-base max-w-md opacity-85 leading-relaxed">
                <p>
                  Shin Square is your trusted hyperlocal platform connecting you to the best deals, offers, and essential services in your neighborhood. From plumbers and electricians to photographers and local stores, we bring everything you need closer to you.
                </p>
                <p className="font-medium text-white/90">
                  Discover, connect, and save — all within your own community, made simple and convenient.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div className="space-y-2">
                <div className="text-primary-fixed-dim font-bold text-display-lg leading-none">2026</div>
                <div className="text-label-sm font-bold uppercase tracking-widest text-white opacity-60">Future Ready</div>
              </div>
              <div className="space-y-2">
                <div className="text-primary-fixed-dim font-bold text-display-lg leading-none">Zero</div>
                <div className="text-label-sm font-bold uppercase tracking-widest text-white opacity-60">Platform Fees</div>
              </div>
            </div>
          </div>

          {/* Right side: Bento Grid for Core Values */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[240px]">
            {/* Truly Hyperlocal */}
            <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-primary-fixed-dim/20 flex items-center justify-center text-primary-fixed-dim group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">location_searching</span>
              </div>
              <div>
                <h4 className="text-headline-lg font-bold text-white mb-2">Truly Hyperlocal</h4>
                <p className="text-secondary-fixed opacity-80 text-body-md italic font-semibold">
                  "We focus only on your area"
                </p>
              </div>
            </div>

            {/* Faster Service */}
            <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-primary-fixed-dim/20 flex items-center justify-center text-primary-fixed-dim group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">bolt</span>
              </div>
              <div>
                <h4 className="text-headline-lg font-bold text-white mb-2">Faster Service</h4>
                <p className="text-secondary-fixed opacity-70 text-body-md">
                  Local means quicker response times and on-time delivery.
                </p>
              </div>
            </div>

            {/* Trusted Vendors */}
            <div className="p-8 rounded-[40px] bg-primary flex flex-col justify-between shadow-[0_24px_48px_-12px_rgba(0,74,198,0.4)] group">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                  verified_user
                </span>
              </div>
              <div>
                <h4 className="text-headline-lg font-bold text-white mb-2">Trusted Vendors</h4>
                <p className="text-white/80 text-body-md">
                  Verified locals you can rely on, rated by your neighbors.
                </p>
              </div>
            </div>

            {/* More Values (Stacked) */}
            <div className="grid grid-rows-2 gap-6">
              {/* Better Prices */}
              <div className="p-6 rounded-[32px] bg-white/5 border border-white/10 flex items-center gap-6 hover:bg-white/10 transition-colors">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary-fixed-dim">
                  <span className="material-symbols-outlined">payments</span>
                </div>
                <div>
                  <h5 className="font-bold text-white">Better Prices</h5>
                  <p className="text-secondary-fixed text-[13px] opacity-70">
                    No middleman markup — deals straight from local shops.
                  </p>
                </div>
              </div>

              {/* Community Bond */}
              <div className="p-6 rounded-[32px] bg-white/5 border border-white/10 flex items-center gap-6 hover:bg-white/10 transition-colors">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-primary-fixed-dim">
                  <span className="material-symbols-outlined">diversity_3</span>
                </div>
                <div>
                  <h5 className="font-bold text-white">Community Bond</h5>
                  <p className="text-secondary-fixed text-[13px] opacity-70">
                    Every transaction strengthens your local economy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
