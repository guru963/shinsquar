import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1e256e] text-white py-10 px-margin-mobile md:px-margin-desktop font-body-md">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Brand Section */}
          <div className="space-y-2 text-left">
            <h2 className="text-4xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>ShinSquare</h2>
            <p className="text-lg leading-snug text-white/80 max-w-[320px]">Get the best deal in your nearby locality</p>
          </div>

          {/* Contact Section */}
          <div className="space-y-3 flex flex-col justify-center py-2 md:mx-auto text-left w-fit">
            <div className="flex items-center gap-3 text-left">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p className="text-lg text-white/90">Shankar Nagar, Durg-491001</p>
            </div>
            <div className="flex items-center gap-3 text-left">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <p className="text-lg text-white/90 font-semibold">+91-75873-15025</p>
            </div>
            <div className="flex items-center gap-3 text-left">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <p className="text-lg text-white/90">contact@shinsquare.com</p>
            </div>
          </div>

          {/* Social Section */}
          <div className="space-y-4 md:text-right flex flex-col md:items-end">
            <h3 className="text-2xl font-bold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>Stay connected</h3>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61589310645378" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-white/30 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5.00 3.66 9.15 8.44 9.9v-7.00h-2.54v-2.9h2.54v-2.21c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7.00c4.78-.75 8.44-4.9 8.44-9.9 0-5.53-4.5-10.02-10-10.02z" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/shin_square_/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-white/30 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
                </svg>
              </a>
              <a 
                href="http://www.linkedin.com/in/shin-square-48a93a40a" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-white/30 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a 
                href="https://wa.me/917587315025" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 border border-white/30 rounded-xl flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.816 9.816 0 0 0 4.73 1.206h.005c5.46 0 9.908-4.448 9.913-9.913a9.815 9.815 0 0 0-2.902-7.008zM11.992 20.13a8.17 8.17 0 0 1-4.177-1.149l-.299-.17-3.11.815.83-3.03-.187-.297A8.178 8.178 0 0 1 3.82 11.91c.005-4.514 3.678-8.187 8.187-8.187a8.171 8.171 0 0 1 5.792 2.4a8.175 8.175 0 0 1 2.397 5.793c-.005 4.514-3.678 8.187-8.204 8.214zm4.505-6.17c-.247-.125-1.47-.723-1.696-.807-.228-.083-.393-.125-.558.125-.166.246-.639.807-.784.972-.145.166-.29.187-.537.063a6.786 6.786 0 0 1-1.998-1.233 7.465 7.465 0 0 1-1.384-1.722c-.145-.246-.015-.38.109-.504.113-.11.247-.29.37-.433.125-.145.166-.247.249-.413.083-.166.04-.31-.02-.433-.063-.125-.559-1.347-.765-1.848-.2-.486-.403-.42-.558-.428-.145-.008-.31-.008-.475-.008-.166 0-.434.062-.661.31-.227.247-.867.847-.867 2.067 0 1.22.888 2.397 1.012 2.562.124.166 1.747 2.668 4.233 3.738.59.255 1.05.408 1.41.521.593.189 1.134.162 1.562.099.476-.072 1.47-.6 1.677-1.18.207-.577.207-1.074.145-1.18-.062-.103-.228-.165-.475-.29z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-center items-center gap-2 text-base opacity-80">
          <span>Localstack Market PVT LTD</span>
          <span>©</span>
          <span>2026, All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;