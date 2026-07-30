import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer id="contact" className="relative bg-[#FFFFFF] text-[#2563EB] pt-20 pb-10 px-margin-mobile md:px-margin-desktop font-body-md overflow-hidden">
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Contact Section */}
          <div className="space-y-5 text-left">
            <h3 className="text-xl font-bold tracking-tight text-[#2563EB]" style={{ fontFamily: "var(--font-display)" }}>Contact</h3>
            <div className="space-y-4 text-[#162033] text-sm">
              <p>
                <span className="block text-[#475569] mb-1">Phone Number:</span>
                <a href="tel:+917587315025" className="hover:text-[#FF6B00] transition-colors">+91-75873-15025</a>
              </p>
              <p>
                <span className="block text-[#475569] mb-1">Email:</span>
                <a href="mailto:contact@locall.co.in" className="hover:text-[#FF6B00] transition-colors">contact@locall.co.in</a>
              </p>
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-5 text-left">
            <h3 className="text-xl font-bold tracking-tight text-[#2563EB]" style={{ fontFamily: "var(--font-display)" }}>Location</h3>
            <div className="text-[#162033] text-sm space-y-6">
              <p className="max-w-[200px] leading-relaxed">
                Durg, Chhattisgarh,<br/>India - 491001
              </p>
              
              {/* Social Icons - Minimal */}
              <div className="flex items-center gap-5 pt-1">
                <a href="https://www.facebook.com/profile.php?id=61589310645378" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#FF6B00] transition-colors" aria-label="Facebook">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5.00 3.66 9.15 8.44 9.9v-7.00h-2.54v-2.9h2.54v-2.21c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7.00c4.78-.75 8.44-4.9 8.44-9.9 0-5.53-4.5-10.02-10-10.02z" /></svg>
                </a>
                <a href="https://www.instagram.com/shin_square_/" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#FF6B00] transition-colors" aria-label="Instagram">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" /></svg>
                </a>
                <a href="http://www.linkedin.com/in/shin-square-48a93a40a" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#FF6B00] transition-colors" aria-label="LinkedIn">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
                </a>
                <a href="https://wa.me/917587315025" target="_blank" rel="noopener noreferrer" className="text-[#475569] hover:text-[#FF6B00] transition-colors" aria-label="WhatsApp">
                  <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.44 0-2.85-.38-4.1-1.1l-.3-.17-3.05.8 0.81-2.96-.19-.3a8.176 8.176 0 0 1-1.25-4.33c0-4.54 3.7-8.23 8.24-8.23m-3.53 4.63c-.19 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.44 0 1.44 1.05 2.84 1.2 3.03.15.19 2.07 3.16 5.01 4.43.7.3 1.25.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.67.24-1.26.17-1.38-.07-.12-.27-.19-.57-.34-.3-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.3-.77.95-.95 1.15-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.6-.5-.52-.67-.52" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Links Section (Combined) */}
          <div className="space-y-5 text-left">
            <h3 className="text-xl font-bold tracking-tight text-[#2563EB]" style={{ fontFamily: "var(--font-display)" }}>Links</h3>
            <ul className="text-sm text-[#162033] space-y-3">
              <li><a href="/#hero" onClick={(e) => { e.preventDefault(); scrollTo("hero"); }} className="hover:text-[#FF6B00] transition-colors">Home</a></li>
              <li><a href="/#deals" onClick={(e) => { e.preventDefault(); scrollTo("deals"); }} className="hover:text-[#FF6B00] transition-colors">Deals</a></li>
              <li><a href="/#about" onClick={(e) => { e.preventDefault(); scrollTo("about"); }} className="hover:text-[#FF6B00] transition-colors">About Us</a></li>
              <li><Link to="/regular-shops" className="hover:text-[#FF6B00] transition-colors">Regular Shops</Link></li>
              <li><Link to="/experience-based" className="hover:text-[#FF6B00] transition-colors">Experience Based</Link></li>
            </ul>
          </div>

          {/* Logo Section */}
          <div className="flex justify-start lg:justify-end items-start pt-2">
            <img src={logo} alt="Locall" className="h-[70px] w-auto object-contain" />
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[#475569] mt-20 relative z-10">
          <p>© 2026 LocalStack Market PVT LTD. All rights reserved.</p>
        </div>
      </div>

      {/* Decorative Orange Block matching the design image */}
      <div className="absolute bottom-0 right-[15%] w-[40%] h-20 bg-[#FF6B00] z-0 hidden md:block"></div>

    </footer>
  );
};

export default Footer;
