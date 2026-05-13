import React from "react";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import { WORKERS } from "../data2";

const WorkerCard: React.FC<{ worker: typeof WORKERS[0] }> = ({ worker }) => (
  <Link to={`/household-workers/${worker.id}`}>
    <div
      className="bg-white overflow-hidden cursor-pointer transition-all shadow-[0px_4px_10px_rgba(0,0,0,0.1)] hover:shadow-[0px_8px_20px_rgba(0,0,0,0.5)]"
      style={{
        width: "230px",
        height: "283px"
      }}
    >

      {/* Image */}
      <div className="w-full h-3/4 overflow-hidden">
        <img
          src={worker.image}
          alt={worker.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="py-3 text-center">

        <h3
          className="text-[.5em] text-[#2C2C2C]"
          style={{
            fontFamily: "Poppins",
            fontWeight: 500
          }}
        >
          {worker.name}
        </h3>

        <div
          className="flex items-center justify-center gap-1 mt-2 text-[.4em]"
          style={{
            fontFamily: "Poppins",
            fontWeight: 500,
            color: "#737373"
          }}
        >
          <MapPin size={16} />
          {worker.role}
        </div>

      </div>

    </div>
  </Link>
);

const HouseholdWorks: React.FC = () => {
  return (
    <section className="bg-[#F7F8FF] pb-[72px] px-12 font-['Poppins']">

      <div className="max-w-[1900px] mx-auto text-4xl">

        {/* Heading */}
        <h1
          className="py-[72px]"
          style={{
            fontFamily: "Poppins",
            fontWeight: 500,
            color: "#2C2C2C"
          }}
        >
          Household Workers in{" "}
          <span style={{ color: "#4356FF", fontWeight: 700 }}>
            Durg, Chhattisgarh
          </span>
        </h1>

        {/* Workers Grid */}
        <div className="flex flex-wrap gap-[72px]">
          {WORKERS.map((worker) => (
            <WorkerCard key={worker.id} worker={worker} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HouseholdWorks;