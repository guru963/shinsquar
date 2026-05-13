import React from "react";
import ceo from "../assets/CEO.png";
import cto from "../assets/CTO.png";
import waves from "../assets/waves.png";

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  image,
  name,
  role,
  description
}) => {
  return (
    <div className="text-center" style={{ fontFamily: "Poppins" }}>
      
      {/* Image */}
      <div className="w-[270px] h-[270px]  rounded-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h3
        className="mt-8 text-[30px] text-black"
        style={{
          fontWeight: 500,
          letterSpacing: "-0.5%"
        }}
      >
        {name}
      </h3>

      {/* Role */}
      <p
        className="text-[19px] text-[#737373] mt-1"
        style={{ fontWeight: 500 }}
      >
        {role}
      </p>

      {/* Description */}
      <p
        className="text-[19px] text-[#737373] mt-2 whitespace-pre-line leading-relaxed"
        style={{ fontWeight: 500 }}
      >
        {description}
      </p>
    </div>
  );
};

const TeamSection: React.FC = () => {
  return (
    <section className="relative bg-[#F7F8FF] pt-[48px] pb-[72px]" >

      {/* WAVES IMAGE */}
      <img
        src={waves}
        alt="decorative waves"
        className="absolute left-10 top-16 w-[48px] h-[103px]"
      />

      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <h2
          className="text-center mb-[96px]"
          style={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "48px",
            color: "#1E2773"
          }}
        >
          Team
        </h2>

        {/* Team Members */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-50">
          <TeamMember
            image={ceo}
            name="Jayant Dhote"
            role="Founder"
            description={`Ex-OYO Rooms, Fin-Tech
DPS Durg, IIT Guwahati Alumni`}
          />

          <TeamMember
            image={cto}
            name="Kamal Sahare"
            role="Co-founder"
            description={`Ex-OYO Rooms, Fin-Tech
KV Durg, IIT Ranchi Alumni`}
          />

        </div>

      </div>
    </section>
  );
};

export default TeamSection;