import React from "react";
import { Link } from "react-router-dom";

const GoogleMockup: React.FC = () => {
  const handleScrollToSite = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="bg-[#202124] text-[#e8eaed] pt-6 pb-20 px-margin-mobile md:px-margin-desktop border-b border-[#3c4043] font-sans text-left">
      <div className="max-w-7xl mx-auto">
        {/* Google Mockup Search Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#3c4043] mb-8">
          <div className="flex items-center gap-6 flex-wrap md:flex-nowrap w-full md:w-auto">
            {/* Google Logo */}
            <div className="text-2xl font-bold flex items-center select-none" style={{ letterSpacing: "-1px" }}>
              <span className="text-[#4285F4]">G</span>
              <span className="text-[#EA4335]">o</span>
              <span className="text-[#FBBC05]">o</span>
              <span className="text-[#4285F4]">g</span>
              <span className="text-[#34A853]">l</span>
              <span className="text-[#EA4335]">e</span>
            </div>
            
            {/* Search Box Mockup */}
            <div className="flex-1 md:w-[600px] h-[46px] bg-[#303134] rounded-full border border-[#5f6368] flex items-center px-4 justify-between shadow-md">
              <div className="flex items-center gap-3 w-full">
                <svg className="text-[#9aa0a6] shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                </svg>
                <input 
                  type="text" 
                  value="shinsquare" 
                  readOnly 
                  className="bg-transparent border-none text-[#e8eaed] outline-none text-base w-full cursor-default"
                />
              </div>
              <div className="flex items-center gap-3 text-[#9aa0a6] shrink-0">
                <span>×</span>
                <span className="h-5 w-[1px] bg-[#5f6368]"></span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.48 6-3.3 6-6.72h-1.7z"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex items-center gap-4 text-[#9aa0a6] text-sm">
            <span>AI Mode</span>
            <span className="text-[#8ab4f8] border-b-2 border-[#8ab4f8] pb-1 font-bold">All</span>
            <span>Images</span>
            <span>Maps</span>
            <span>News</span>
            <span>Videos</span>
            <span>Shopping</span>
          </div>
        </div>

        {/* Outer 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Search Results (8/12 width) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Result Card */}
            <div className="space-y-2">
              <div className="flex items-center gap-2.5 text-xs text-[#bdc1c6]">
                <div className="w-6 h-6 bg-[#303134] rounded-full flex items-center justify-center text-xs font-bold text-[#8ab4f8]">
                  SS
                </div>
                <div>
                  <div className="text-sm font-medium text-[#e8eaed]">ShinSquare</div>
                  <div className="text-xs text-[#9aa0a6]">https://shinsquare.com</div>
                </div>
              </div>
              
              <h2 className="text-[22px] leading-tight text-[#8ab4f8] hover:underline cursor-pointer font-medium">
                <a href="#hero" onClick={handleScrollToSite}>
                  ShinSquare: Online directory platform for local services & deals
                </a>
              </h2>
              
              <p className="text-sm text-[#bdc1c6] leading-relaxed max-w-[620px]">
                Online directory platform for connecting and booking in Durg. Discover verified local shops, unbeatable direct deals, and trusted household workers with zero middleman markups. Connect on WhatsApp instantly.
              </p>
            </div>

            {/* Google Sitelinks List Layout */}
            <div className="pl-4 border-l-2 border-[#3c4043] py-2 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              
              {/* Sitelink 1: Household Helpers */}
              <div className="space-y-1">
                <h3 className="text-base text-[#8ab4f8] hover:underline font-medium">
                  <Link to="/household-works">Household Workers</Link>
                </h3>
                <p className="text-xs text-[#9aa0a6] leading-relaxed">
                  Hire verified plumbers, electricians, tiles workers, designers and creative photographers.
                </p>
              </div>

              {/* Sitelink 2: Regular Shops */}
              <div className="space-y-1">
                <h3 className="text-base text-[#8ab4f8] hover:underline font-medium">
                  <Link to="/coming-soon">Regular Shops</Link>
                </h3>
                <p className="text-xs text-[#9aa0a6] leading-relaxed">
                  Fashion, electronics, local food spots, furniture shops, and more near you in Shankar Nagar.
                </p>
              </div>

              {/* Sitelink 3: Experience Based */}
              <div className="space-y-1">
                <h3 className="text-base text-[#8ab4f8] hover:underline font-medium">
                  <Link to="/coming-soon">Experience Based Shops</Link>
                </h3>
                <p className="text-xs text-[#9aa0a6] leading-relaxed">
                  Book direct appointments with verified salons, fitness gyms, spas, and wellness clinics.
                </p>
              </div>

              {/* Sitelink 4: About Us */}
              <div className="space-y-1">
                <h3 className="text-base text-[#8ab4f8] hover:underline font-medium">
                  <a href="#about" onClick={handleScrollToSite}>About us</a>
                </h3>
                <p className="text-xs text-[#9aa0a6] leading-relaxed">
                  ShinSquare connects the Shankar Nagar locality to nearby merchants with 0% platform commissions.
                </p>
              </div>
            </div>

            {/* View Full Webpage Action Card */}
            <div className="pt-4">
              <a 
                href="#hero" 
                onClick={handleScrollToSite}
                className="inline-flex items-center gap-2 text-sm text-[#8ab4f8] hover:underline font-bold bg-[#303134] px-5 py-3 rounded-full border border-[#5f6368] hover:bg-[#3c4043] transition-colors"
              >
                Explore Full Interactive Landing Page ↓
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Google Maps Knowledge Panel (5/12 width) */}
          <div className="lg:col-span-5 border border-[#3c4043] rounded-2xl bg-[#202124] overflow-hidden shadow-lg w-full max-w-[450px] mx-auto lg:mx-0">
            
            {/* Embed Map Preview */}
            <div className="w-full relative aspect-[16/9] bg-[#303134]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.2185566195726!2d81.27809247597143!3d21.19626858049615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d002566c3eb%3A0x38fa647a4f6523d4!2sShinSquare!5e0!3m2!1sen!2sin!4v1717319999999!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="ShinSquare Location Map"
              ></iframe>
            </div>

            {/* Knowledge Panel Body */}
            <div className="p-6 space-y-5 text-[#bdc1c6]">
              <div>
                <h1 className="text-2xl font-bold text-[#e8eaed] mb-1 font-display-xl" style={{ fontFamily: "var(--font-display)" }}>
                  ShinSquare
                </h1>
                
                <div className="flex items-center gap-1.5 text-sm">
                  <span className="text-[#f8b83e] font-bold">5.0</span>
                  <div className="flex text-[#f8b83e]">
                    {"★★★★★".split("").map((star, idx) => (
                      <span key={idx}>{star}</span>
                    ))}
                  </div>
                  <a href="https://maps.app.goo.gl/SbPts1PV2oyCB1iu6" target="_blank" rel="noopener noreferrer" className="text-[#8ab4f8] hover:underline">
                    12 Google reviews
                  </a>
                </div>
                <p className="text-xs text-[#9aa0a6] mt-1">Local Service Directory in Durg, Chhattisgarh</p>
              </div>

              {/* Action Buttons Layout */}
              <div className="grid grid-cols-4 gap-2 pt-2 pb-4 border-b border-[#3c4043]">
                {/* Website Button */}
                <a 
                  href="#hero" 
                  onClick={handleScrollToSite}
                  className="flex flex-col items-center justify-center gap-1.5 text-center group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full border border-[#3c4043] flex items-center justify-center text-[#8ab4f8] group-hover:bg-[#303134] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <span className="text-xs text-[#8ab4f8]">Website</span>
                </a>

                {/* Directions Button */}
                <a 
                  href="https://maps.app.goo.gl/SbPts1PV2oyCB1iu6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 text-center group"
                >
                  <div className="w-10 h-10 rounded-full border border-[#3c4043] flex items-center justify-center text-[#8ab4f8] group-hover:bg-[#303134] transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 18l6-6-6-6"></path>
                    </svg>
                  </div>
                  <span className="text-xs text-[#8ab4f8]">Directions</span>
                </a>

                {/* Save Button */}
                <a 
                  href="https://maps.app.goo.gl/SbPts1PV2oyCB1iu6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-1.5 text-center group"
                >
                  <div className="w-10 h-10 rounded-full border border-[#3c4043] flex items-center justify-center text-[#8ab4f8] group-hover:bg-[#303134] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <span className="text-xs text-[#8ab4f8]">Save</span>
                </a>

                {/* Call Button */}
                <a 
                  href="tel:+917587315025"
                  className="flex flex-col items-center justify-center gap-1.5 text-center group"
                >
                  <div className="w-10 h-10 rounded-full border border-[#3c4043] flex items-center justify-center text-[#8ab4f8] group-hover:bg-[#303134] transition-colors">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <span className="text-xs text-[#8ab4f8]">Call</span>
                </a>
              </div>

              {/* Informational Data Rows */}
              <div className="space-y-4 text-sm text-[#bdc1c6]">
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-[#9aa0a6] shrink-0 mt-0.5" style={{ fontSize: "20px" }}>location_on</span>
                  <p>Goal Chowk, Shankar Nagar, Durg, Chhattisgarh 491001</p>
                </div>
                
                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-[#9aa0a6] shrink-0 mt-0.5" style={{ fontSize: "20px" }}>schedule</span>
                  <div>
                    <span className="text-[#34a853] font-bold">Open 24 hours</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="material-symbols-outlined text-[#9aa0a6] shrink-0 mt-0.5" style={{ fontSize: "20px" }}>phone</span>
                  <p>075873 15025</p>
                </div>
              </div>

              {/* Additional Mock Footer Actions */}
              <div className="pt-2 border-t border-[#3c4043] flex gap-6 text-xs text-[#8ab4f8]">
                <a href="https://maps.app.goo.gl/SbPts1PV2oyCB1iu6" target="_blank" rel="noopener noreferrer" className="hover:underline">Suggest an edit</a>
                <a href="https://maps.app.goo.gl/SbPts1PV2oyCB1iu6" target="_blank" rel="noopener noreferrer" className="hover:underline">Own this business?</a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GoogleMockup;
