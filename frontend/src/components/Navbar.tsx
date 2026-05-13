import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#F7F8FF] shadow-[0px_1px_4px_rgba(12,12,13,0.05)] flex items-center px-[48px] relative">
      
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
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>

          <Link to="/team" className="hover:text-blue-600 transition">
            Team
          </Link>

          <Link to="/contact" className="hover:text-blue-600 transition">
            Contact us
          </Link>
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
        <div className="absolute top-[95px] left-0 w-full bg-[#F7F8FF] border-t flex flex-col items-center gap-6 py-8 shadow-lg md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/team" onClick={() => setIsOpen(false)}>Team</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;