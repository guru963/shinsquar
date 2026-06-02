import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

/* ── navigation items ── */
const navItems = [
  { label: "Home", scrollTo: "hero" },
  { label: "Deals", scrollTo: "deals" },
   { label: "About", scrollTo: "about" },
  { label: "Services", scrollTo: "features" },
 
  { label: "Team", scrollTo: "founder" },
  { label: "Contact us", scrollTo: "contact" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div className="flex items-center justify-between w-full">

        {/* Logo + Title */}
        <div className="flex items-center gap-[10px]">
          <img src={logo} alt="logo" className="h-16 w-auto" />

          <p
            className="
              font-serif
              text-[1.7em]
              tracking-[0.11em]
              bg-gradient-to-r
              from-[#4356FF]
              to-[#43C0FF]
              bg-clip-text
              text-transparent
            "
            style={{ fontFamily: "'Baskervville SC', serif" }}
          >
            ShinSquare
          </p>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-gray-600 font-medium">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item)}
              className="hover:text-blue-600 transition cursor-pointer bg-transparent border-none"
              style={{ fontFamily: "Poppins" }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#F7F8FF] border-t flex flex-col items-center gap-6 py-8 shadow-lg md:hidden">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNav(item)}
              className="text-gray-600 hover:text-blue-600 transition cursor-pointer bg-transparent border-none"
              style={{ fontFamily: "Poppins" }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;