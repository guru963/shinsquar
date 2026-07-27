import React from "react";
import { Link } from "react-router-dom";
import one from "../assets/One.png";
import two from "../assets/Two.png";
import three from "../assets/Three.png";
import leaf from "../assets/leaf.png"

interface DealCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const DealCard: React.FC<DealCardProps> = ({ image, title, description, link }) => {
  return (
    <Link to={link} className="block w-full">
      <div
        className="bg-white rounded-3xl cursor-pointer transition-all border border-gray-100/80 shadow-[0px_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0px_20px_40px_rgba(30,58,138,0.08)] hover:-translate-y-1 duration-300"
        style={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        {/* Image */}
        <div className="rounded-2xl overflow-hidden bg-gray-50 aspect-video md:aspect-[4/3] max-h-[230px]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-center space-y-2">
          <h3
            className="text-[1.25em] text-[#2C2C2C] font-semibold"
            style={{
              fontFamily: "Poppins",
              letterSpacing: "-0.5%"
            }}
          >
            {title}
          </h3>

          <p
            className="text-[15px] text-[#737373] font-normal leading-relaxed"
            style={{
              fontFamily: "Poppins",
              letterSpacing: "-0.5%"
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

const DealsSection: React.FC = () => {
  return (
    <section id="deals" className="bg-[#FFFFFF] pt-[62px] pb-[138px] px-6 md:px-12">

      <div className="max-w-[1200px] mx-auto text-center">

        {/* GET */}
        <p
          className="text-2xl text-[#595959] pb-[22px]"
          style={{
            fontFamily: "Poppins",
            fontWeight: 500
          }}
        >
          Get
        </p>

        {/* BEST DEALS */}
        <h2
          className="
          text-5xl
          font-semibold
          tracking-[0.05em]
          leading-[100%]
          bg-gradient-to-r
          from-[#1E3A8A]
          to-[#F97316]
          bg-clip-text
          text-transparent
        "
          style={{ fontFamily: "Poppins" }}
        >
          Best Deals
        </h2>

        {/* IN YOUR LOCALITY */}
        <div className="relative inline-block">

          <p
            className="text-4xl text-[#2C2C2C] pt-[12px]"
            style={{
              fontFamily: "Kaushan Script",
              letterSpacing: "0.5px"
            }}
          >
            in your locality
          </p>

          {/* GREEN BRUSH UNDERLINE */}
          <img src={leaf}
            className="absolute left-[35%] -bottom-5 w-[170px]"
            style={{ filter: "brightness(0) saturate(100%) invert(56%) sepia(87%) saturate(1478%) hue-rotate(346deg) brightness(99%) contrast(97%)" }}
          />
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-16">
          <DealCard
            image={one}
            title="Regular Shops"
            description="Fashion, electronic, Food, Furniture"
            link="/coming-soon"
          />

          <DealCard
            image={two}
            title="Experience Based Shops"
            description="Salon, Gym, Beauty Parlour, Spa"
            link="/coming-soon"
          />

          <DealCard
            image={three}
            title="Household Works"
            description="Plumber, Electrician, Granny"
            link="/household-works"
          />
        </div>
      </div>
    </section>
  );
};

export default DealsSection;