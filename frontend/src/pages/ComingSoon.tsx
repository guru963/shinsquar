import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const ComingSoon: React.FC = () => {
  return (
    <section 
      className="min-h-[85vh] flex items-center justify-center py-20 px-margin-mobile md:px-margin-desktop relative overflow-hidden bg-background"
      style={{
        background: "radial-gradient(at 0% 0%, rgba(30, 58, 138, 0.12) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(249, 115, 22, 0.1) 0px, transparent 50%), #F8FAFC"
      }}
    >
      {/* Decorative floating blurred vector circles */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-[#1E3A8A]/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#F97316]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-2xl w-full mx-auto bg-white/80 backdrop-blur-xl rounded-[40px] p-8 md:p-14 text-center shadow-2xl border border-white/60 relative z-10">
        <SEO 
          title="Coming Soon — New Features" 
          description="Locall is launching new hyperlocal features in Durg, Chhattisgarh. Find local shops, household workers, and the best deals near you. Stay tuned!"
        />
        
        {/* Animated Badge */}
        <span className="text-[#1E3A8A] text-xs font-extrabold uppercase tracking-widest bg-[#1E3A8A]/10 px-4 py-2 rounded-full inline-block mb-6 font-display-xl animate-pulse" style={{ fontFamily: "var(--font-display)" }}>
          Feature Launching Soon
        </span>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight font-display-xl" style={{ fontFamily: "var(--font-display)", lineHeight: "1.15" }}>
          Hyperlocal Power, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1E3A8A] to-[#F97316]">Coming Soon</span>
        </h1>
        
        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-10" style={{ fontFamily: "var(--font-display)" }}>
          We are hard at work mapping the best locality stores and certified helpers. In the meantime, you can reach out to us directly on WhatsApp.
        </p>

        {/* WhatsApp Button */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a 
            href="https://wa.me/917587315025"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-4 rounded-2xl font-bold text-sm hover:bg-[#20ba5a] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md cursor-pointer"
            style={{ fontFamily: "var(--font-display)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
              <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.44 0-2.85-.38-4.1-1.1l-.3-.17-3.05.8 0.81-2.96-.19-.3a8.176 8.176 0 0 1-1.25-4.33c0-4.54 3.7-8.23 8.24-8.23m-3.53 4.63c-.19 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.44 0 1.44 1.05 2.84 1.2 3.03.15.19 2.07 3.16 5.01 4.43.7.3 1.25.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.67.24-1.26.17-1.38-.07-.12-.27-.19-.57-.34-.3-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.3-.77.95-.95 1.15-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.6-.5-.52-.67-.52" />
            </svg>
            Contact on WhatsApp
          </a>
        </div>

        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center justify-center bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-gray-900 border border-gray-200/80 px-7 py-3.5 rounded-2xl font-bold text-sm transition-all shadow-sm cursor-pointer"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ComingSoon;
