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
    <Link to={link}>
      <div
        className="bg-white cursor-pointer transition-all  shadow-[0px_4px_10px_rgba(0,0,0,0.1)]  hover:shadow-[0px_8px_20px_rgba(0,0,0,0.5)]"
        style={{
          padding: "12px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
      //     boxShadow:
      // "0px 8px 20px rgba(0, 0, 0, 0.08)" // ✅ updated shadow
        }}
      >
        {/* Image */}
        <div className="rounded-md overflow-hidden bg-gray-50">
          <img
            src={image}
            alt={title}
            className="w-full h-[190px] sm:h-[230px] object-cover"
          />
        </div>

        {/* Text */}
        <div className="text-center">
          <h3
            className="text-[1.2em] text-[#2C2C2C]"
            style={{
              fontFamily: "Poppins",
              fontWeight:500,
              letterSpacing: "-0.5%"
            }}
          >
            {title}
          </h3>

          <p
            className="text-[16px] text-[#737373] font-normal"
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
    <section id="deals" className="bg-[#FFFFFF] pt-12 sm:pt-[62px] pb-16 sm:pb-24 lg:pb-[138px] px-4">

      <div className="max-w-[1200px] mx-auto text-center">

        {/* GET */}
        <p
            className="text-xl sm:text-2xl text-[#595959] pb-4 sm:pb-[22px]"
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
          text-4xl
          sm:text-5xl
          font-semibold
          tracking-[0.05em]
          leading-[100%]
          bg-gradient-to-r
          from-[#4356FF]
          to-[#43A1FF]
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
            className="text-3xl sm:text-4xl text-[#2C2C2C] pt-[12px]"
            style={{
              fontFamily: "Kaushan Script",
              letterSpacing: "0.5px"
            }}
          >
            in your locality
          </p>

          {/* GREEN BRUSH UNDERLINE */}
          <img src={leaf}
            className="absolute left-[35%] -bottom-4 sm:-bottom-5 w-[128px] sm:w-[170px]"
            alt=""
          />
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12 mt-12 sm:mt-16">
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
