import React, { useState } from "react";
import { Menu, X, MapPin, ChevronDown, Check } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

/* ── navigation items ── */
const navItems = [
  { label: "Home", scrollTo: "hero" },
  { label: "Deals", scrollTo: "deals" },
  { label: "About", scrollTo: "about" },
  { label: "Team", scrollTo: "founder" },
  { label: "Contact us", scrollTo: "contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  /* ── smooth scroll helper ── */
  const handleNav = (item: (typeof navItems)[0]) => {
    setIsOpen(false);

    // If we're not on the home page, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(item.scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
      return;
    }

    // Already on home — scroll directly
    const el = document.getElementById(item.scrollTo);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="w-full bg-[#F7F8FF] shadow-[0px_1px_4px_rgba(12,12,13,0.05)] flex items-center px-margin-mobile md:px-margin-desktop relative sticky top-0 z-50">

      {/* Container */}
      <div className="flex items-center justify-between w-full py-2 relative">

        {/* Logo */}
        <div className="flex items-center shrink-0">
          <img src={logo} alt="Locall" className="h-10 md:h-14 w-auto object-contain" />
        </div>

        {/* Middle: Location Selection Button */}
        <div className="absolute left-1/2 -translate-x-1/2 z-20">
          <button
            onClick={() => setIsLocationOpen(!isLocationOpen)}
            className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-white border border-gray-200/80 rounded-full shadow-sm text-xs md:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition cursor-pointer"
          >
            <MapPin size={15} className="text-[#1E3A8A] shrink-0" />
            <span>Durg, CG</span>
            <ChevronDown size={13} className="text-gray-400 shrink-0" />
          </button>

          {isLocationOpen && (
            <>
              {/* Overlay to close when clicking outside */}
              <div 
                className="fixed inset-0 z-40 cursor-default" 
                onClick={() => setIsLocationOpen(false)}
              ></div>
              
              {/* Dropdown Card */}
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-xl p-3 z-50 transition-all duration-200">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider px-3 py-1 mb-1">
                  Select Location
                </p>
                <div className="space-y-0.5">
                  <button 
                    onClick={() => setIsLocationOpen(false)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs md:text-sm font-semibold text-[#1E3A8A] bg-[#1E3A8A]/5 hover:bg-[#1E3A8A]/10 transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#1E3A8A]" />
                      Durg, CG
                    </span>
                    <Check size={14} className="text-[#1E3A8A]" />
                  </button>

                  {[
                    "Bhilai, CG",
                    "Raipur, CG",
                    "HSR Layout, Bangalore"
                  ].map((loc) => (
                    <div 
                      key={loc}
                      className="flex items-center justify-between px-3 py-2 rounded-xl text-xs md:text-sm font-medium text-gray-400 cursor-not-allowed select-none"
                    >
                      <span className="flex items-center gap-2">
                        <MapPin size={14} className="text-gray-300" />
                        {loc}
                      </span>
                      <span className="text-[8px] font-bold text-gray-400 bg-gray-100 px-1.5 py-0.5 rounded uppercase tracking-wide">
                        Soon
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Right Section: Desktop Links + Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Desktop Links — using <a> tags for SEO crawlability */}
          <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={`/#${item.scrollTo}`}
                onClick={(e) => { e.preventDefault(); handleNav(item); }}
                className="hover:text-[#1E3A8A] transition cursor-pointer text-sm"
                style={{ fontFamily: "Poppins" }}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F7F8FF] border-t flex flex-col items-center gap-6 py-8 shadow-lg md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={`/#${item.scrollTo}`}
              onClick={(e) => { e.preventDefault(); handleNav(item); }}
              className="text-gray-600 hover:text-[#1E3A8A] transition cursor-pointer"
              style={{ fontFamily: "Poppins" }}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
