import React from "react";
import { Link } from "react-router-dom";

const ComingSoon: React.FC = () => {
  return (
    <section 
      className="min-h-[85vh] flex items-center justify-center py-20 px-margin-mobile md:px-margin-desktop relative overflow-hidden bg-background"
      style={{
        background: "radial-gradient(at 0% 0%, rgba(67, 86, 255, 0.12) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(67, 192, 255, 0.1) 0px, transparent 50%), #F8FAFC"
      }}
    >
      {/* Decorative floating blurred vector circles */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 bg-[#4356FF]/5 rounded-full blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-[#43C0FF]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-2xl w-full mx-auto bg-white/80 backdrop-blur-xl rounded-[40px] p-8 md:p-14 text-center shadow-2xl border border-white/60 relative z-10">
        
        {/* Animated Badge */}
        <span className="text-[#4356FF] text-xs font-extrabold uppercase tracking-widest bg-[#4356FF]/10 px-4 py-2 rounded-full inline-block mb-6 font-display-xl animate-pulse" style={{ fontFamily: "var(--font-display)" }}>
          Feature Launching Soon
        </span>
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight font-display-xl" style={{ fontFamily: "var(--font-display)", lineHeight: "1.15" }}>
          Hyperlocal Power, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4356FF] to-[#43C0FF]">Coming Soon</span>
        </h1>
        
        <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-lg mx-auto mb-10" style={{ fontFamily: "var(--font-display)" }}>
          We are hard at work mapping the best local stores and certified helpers. In the meantime, you can reach out to us directly on WhatsApp.
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
              <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.816 9.816 0 0 0 4.73 1.206h.005c5.46 0 9.908-4.448 9.913-9.913a9.815 9.815 0 0 0-2.902-7.008zM11.992 20.13a8.17 8.17 0 0 1-4.177-1.149l-.299-.17-3.11.815.83-3.03-.187-.297A8.178 8.178 0 0 1 3.82 11.91c.005-4.514 3.678-8.187 8.187-8.187a8.171 8.171 0 0 1 5.792 2.4a8.175 8.175 0 0 1 2.397 5.793c-.005 4.514-3.678 8.187-8.204 8.214zm4.505-6.17c-.247-.125-1.47-.723-1.696-.807-.228-.083-.393-.125-.558.125-.166.246-.639.807-.784.972-.145.166-.29.187-.537.063a6.786 6.786 0 0 1-1.998-1.233 7.465 7.465 0 0 1-1.384-1.722c-.145-.246-.015-.38.109-.504.113-.11.247-.29.37-.433.125-.145.166-.247.249-.413.083-.166.04-.31-.02-.433-.063-.125-.559-1.347-.765-1.848-.2-.486-.403-.42-.558-.428-.145-.008-.31-.008-.475-.008-.166 0-.434.062-.661.31-.227.247-.867.847-.867 2.067 0 1.22.888 2.397 1.012 2.562.124.166 1.747 2.668 4.233 3.738.59.255 1.05.408 1.41.521.593.189 1.134.162 1.562.099.476-.072 1.47-.6 1.677-1.18.207-.577.207-1.074.145-1.18-.062-.103-.228-.165-.475-.29z" />
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
