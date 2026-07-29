import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#073B91] relative overflow-hidden text-left">
      <div className="absolute inset-0 noise z-0 opacity-[0.03]"></div>
      
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left side: Content & Main Metrics */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <h2 className="text-display-lg font-display-xl text-white leading-tight" style={{ fontFamily: "var(--font-display)" }}>
                About Us
                <span className="text-[#FFB179] text-2xl font-semibold tracking-normal block mt-1">Your locality, made smarter</span>
              </h2>
              <div className="space-y-4 text-secondary-fixed text-base max-w-md opacity-85 leading-relaxed">
                <p>
                  Locall is your trusted hyperlocal platform connecting you directly with the best local shops, home service providers (plumbers, electricians, etc.), and exclusive deals. 
                </p>
                <p className="font-medium text-white/90">
                  Founded by an IIT Guwahati alumnus and former OYO Rooms employee, our mission is to empower local economies by bringing verified services closer to you.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div className="space-y-2">
                <div className="text-[#FFB179] font-bold text-display-lg leading-none" style={{ fontFamily: "var(--font-display)" }}>2026</div>
                <div className="text-label-sm font-bold uppercase tracking-widest text-white opacity-60">Future Ready</div>
              </div>
              <div className="space-y-2">
                <div className="text-[#FFB179] font-bold text-display-lg leading-none" style={{ fontFamily: "var(--font-display)" }}>Zero</div>
                <div className="text-label-sm font-bold uppercase tracking-widest text-white opacity-60">Platform Fees</div>
              </div>
            </div>
          </div>

          {/* Right side: Bento Grid for Core Value Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[220px]">
            {/* Truly Hyperlocal */}
            <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 flex flex-col justify-center items-start text-left gap-4 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/20 flex items-center justify-center text-[#FFB179] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">location_searching</span>
              </div>
              <div>
                <h4 className="text-headline-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>Truly Hyperlocal</h4>
                <p className="text-secondary-fixed opacity-70 text-body-md">
                  Focused strictly on your locality. Local means quicker response times and on-time service.
                </p>
              </div>
            </div>

            {/* Easy Discovery */}
            <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 flex flex-col justify-center items-start text-left gap-4 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/20 flex items-center justify-center text-[#FFB179] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">bolt</span>
              </div>
              <div>
                <h4 className="text-headline-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>Easy Discovery</h4>
                <p className="text-secondary-fixed opacity-70 text-body-md">
                  Find and contact verified plumbers, electricians, or technicians in your neighborhood in under 60 seconds.
                </p>
              </div>
            </div>

            {/* Trusted Vendors */}
            <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 flex flex-col justify-center items-start text-left gap-4 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/20 flex items-center justify-center text-[#FFB179] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: '"FILL" 1' }}>
                  verified_user
                </span>
              </div>
              <div>
                <h4 className="text-headline-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>Verified & Safe</h4>
                <p className="text-white/80 text-body-md">
                  Every vendor is verified and rated by residents in your area, guaranteeing quality and safety.
                </p>
              </div>
            </div>

            {/* Better Prices / Savings */}
            <div className="p-8 rounded-[40px] bg-white/5 border border-white/10 flex flex-col justify-center items-start text-left gap-4 hover:bg-white/10 transition-colors group">
              <div className="w-12 h-12 rounded-2xl bg-[#FF6B00]/20 flex items-center justify-center text-[#FFB179] group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">payments</span>
              </div>
              <div>
                <h4 className="text-headline-lg font-bold text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>Direct Savings</h4>
                <p className="text-secondary-fixed opacity-70 text-body-md">
                  Book directly with local stores and home service providers. Zero middleman markup means better prices for you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
