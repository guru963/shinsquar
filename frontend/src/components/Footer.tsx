import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="bg-[#1E2773] text-white pt-[20px] pb-[20px] px-[20px] md:px-[84px]"
      style={{ fontFamily: "Poppins" }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0">

          {/* LEFT */}
          <div className="w-full md:w-auto">
            <h2 className="text-3xl font-extrabold mt-6 md:mt-16 text-center md:text-left">
              ShinSquare
            </h2>

            <p className="text-[1.2em] font-semibold text-[#C7C9E0] mt-4 leading-[28px] text-center md:text-left">
              Get the best deal <br />
              in your nearby locality
            </p>
          </div>

          {/* MIDDLE */}
          <div className="space-y-4 font-light w-full md:w-auto text-center md:text-left">

            {/* Address */}
            <div className="flex items-start gap-4 justify-center md:justify-start">
              <FaMapMarkerAlt className="text-[27px] mt-4" />
              <p className="text-[17px] leading-[32px]">
                Shankar Nagar,<br />
                Durg-491001
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4 justify-center md:justify-start">
              <FaPhoneAlt className="text-[25px] mt-1" />
              <div className="text-[17px] leading-[32px]">
                <p>+91-75873-15025</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <FaEnvelope className="text-[27px]" />
              <p className="text-[17px]">
                contact@shinsquare.com
              </p>
            </div>

          </div>

          {/* RIGHT */}
          <div className="text-center md:text-right mt-6 md:mt-16 w-full md:w-auto">
            <h4 className="text-2xl font-semibold mb-6">
              Stay connected
            </h4>

            <div className="flex gap-5 justify-center md:justify-end">

              <a
                href="https://www.facebook.com/profile.php?id=61589310645378"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] border border-white rounded-lg flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#2B2F7F] transition"
              >
                <FaFacebookF size={20} />
              </a>

              <a
                href="https://www.instagram.com/shin_square_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] border border-white rounded-lg flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#2B2F7F] transition"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="http://www.linkedin.com/in/shin-square-48a93a40a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] border border-white rounded-lg flex items-center justify-center cursor-pointer hover:bg-white hover:text-[#2B2F7F] transition"
              >
                <FaLinkedinIn size={22} />
              </a>

              <div className="w-[40px] h-[40px] border border-white rounded-lg flex items-center justify-center cursor-default opacity-70 transition">
                <FaWhatsapp size={22} />
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-wrap justify-center items-center mt-[30px] text-[14px] md:text-[16px] text-[#C7C9E0] gap-2 md:gap-3 text-center">

          <span>LocalStack Market Place PVT LTD</span>

          <span className="w-[22px] h-[22px] border border-white rounded-full flex items-center justify-center text-[12px]">
            C
          </span>

          <span>2026, All rights reserved</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;