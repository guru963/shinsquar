import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { SHOPS } from "../data";

const ShopCard: React.FC<{ shop: typeof SHOPS[0] }> = ({ shop }) => (
  <Link to={`/regular-shops/${shop.id}`}>
    <div
      className="bg-white overflow-hidden cursor-pointer transition-all shadow-[0px_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[0px_8px_20px_rgba(0,0,0,0.5)] w-full max-w-[230px] h-[260px] md:h-[283px] mx-auto"
    >
      {/* Image */}
      <div className="w-full h-3/4 overflow-hidden">
        <img
          src={shop.image}
          alt={shop.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="py-3 text-center">

        <h3
          className="text-[12px] md:text-[.5em] text-[#2C2C2C]"
          style={{
            fontFamily: "Poppins",
            fontWeight: 500
          }}
        >
          {shop.name}
        </h3>

        <div
          className="flex items-center justify-center gap-1 mt-2 text-[10px] md:text-[.4em]"
          style={{
            fontFamily: "Poppins",
            fontWeight: 500,
            color: "#737373"
          }}
        >
          <MapPin size={14} className="md:w-[16px] md:h-[16px]" />
          {shop.location}
        </div>

      </div>
    </div>
  </Link>
);

const RegularShops: React.FC = () => {
  return (
    <section className="bg-[#F7F8FF] pb-[72px] px-4 md:px-12 font-['Poppins']">

      <div className="max-w-[1900px] mx-auto text-xl md:text-4xl">

        {/* Heading */}
        <h1
          className="py-[48px] md:py-[72px]"
          style={{
            fontFamily: "Poppins",
            fontWeight: 500,
            color: "#2C2C2C"
          }}
        >
          Regular Shops in{" "}
          <span style={{ color: "#4356FF", fontWeight: 700 }}>
            Durg, Chhattisgarh
          </span>
        </h1>

        {/* Shops Grid */}
        <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-[72px]">
          {SHOPS.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default RegularShops;