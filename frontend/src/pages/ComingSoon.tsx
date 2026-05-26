import React from "react";
import { Link } from "react-router-dom";

const ComingSoon: React.FC = () => {
  return (
    <section className="bg-background min-h-[80vh] flex items-center justify-center py-24 px-margin-mobile md:px-margin-desktop">
      <div className="max-w-xl mx-auto bg-white rounded-[32px] p-12 text-center shadow-xl border border-outline-variant/30">
        <div className="w-20 h-20 bg-[#4356FF]/10 rounded-full flex items-center justify-center text-[#4356FF] mx-auto mb-8 animate-bounce">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </div>
        
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 font-display-xl" style={{ fontFamily: "var(--font-display)" }}>
          Coming Soon!
        </h1>
        
        <p className="text-gray-600 text-lg leading-relaxed mb-8" style={{ fontFamily: "var(--font-display)" }}>
          We are working hard to bring this feature to your area. Shin Square is expanding quickly, and this section will be live shortly. Stay tuned!
        </p>
        
        <Link 
          to="/" 
          className="inline-flex items-center justify-center bg-[#4356FF] text-white px-8 py-4 rounded-2xl font-bold hover:bg-[#3144e5] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-md"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
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
