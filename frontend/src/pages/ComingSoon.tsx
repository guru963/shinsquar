import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../assets/logo.png";

const ComingSoon: React.FC = () => {
  return (
    <section
      className="min-h-[70vh] flex items-center justify-center bg-[#F7F8FF] px-6"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="max-w-[420px] w-full text-center">
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <img src={logo} alt="ShinSquare" className="h-16 w-auto opacity-90" />
        </div>

        {/* Heading */}
        <h1
          className="
            text-4xl
            font-bold
            bg-gradient-to-r
            from-[#4356FF]
            to-[#43C0FF]
            bg-clip-text
            text-transparent
            mb-4
          "
        >
          Coming Soon
        </h1>

        {/* Subtitle */}
        <p className="text-[15px] text-[#737373] leading-relaxed mb-10">
          We are currently working hard to bring this feature to your neighborhood.
          Stay tuned for something exciting!
        </p>

        {/* Simple Link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#4356FF] font-medium hover:gap-3 transition-all"
        >
          <ArrowLeft size={18} />
          <span>Back to Home</span>
        </Link>
      </div>
    </section>
  );
};

export default ComingSoon;
