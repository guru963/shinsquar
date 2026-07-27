import React from "react";
import ceo from "../assets/CEO.png";
import waves from "../assets/waves.png";
import jayesh from "../assets/jayesh.jpg";
import team2 from "../assets/Team2.jpeg"
import shubham from "../assets/shubham.jpg"
import guru from "../assets/Guru.jpeg"

interface TeamMemberProps {
  image?: string;
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
  const getInitials = (n: string) => {
    return n
      .split(" ")
      .map((p) => p[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="text-center" style={{ fontFamily: "Poppins" }}>

      {/* Image / Placeholder */}
      <div className="w-[270px] h-[270px] rounded-full overflow-hidden mx-auto">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-[#1E3A8A]/10 to-[#1E3A8A]/30 flex items-center justify-center border border-[#1E3A8A]/20 shadow-sm text-[#1E3A8A]">
            <span className="text-[72px] font-semibold tracking-wide select-none">
              {getInitials(name)}
            </span>
          </div>
        )}
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
    <section id="team" className="relative bg-[#F7F8FF] pt-[48px] pb-[72px]" >

      {/* WAVES IMAGE */}
      <img
        src={waves}
        alt=""
        aria-hidden="true"
        className="absolute left-10 top-16 w-[48px] h-[103px]"
      />

      <div className="max-w-[1200px] mx-auto px-6">

        {/* Heading */}
        <h2
          className="text-center mb-[72px]"
          style={{
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "48px",
            color: "#1E3A8A"
          }}
        >
          Team
        </h2>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 justify-items-center mb-[96px]">
          <TeamMember
            image={ceo}
            name="Jayant Dhote"
            role="Founder"
            description={`Ex-OYO Rooms, Fin-Tech
DPS Durg, IIT Guwahati Alumni`}
          />
          <TeamMember
            image={guru}
            name="Guru Divya Darshini U"
            role="Backend Developer"
            description={`Shiv Nadar University, Chennai`}
          />
          <TeamMember
            image={shubham}
            name="Shubham Patthe"
            role="Frontend Developer"
            description={`IIT Kharagpur`}
          />
        </div>

        {/* Mentors Section */}
        <div className="mt-16 pt-16 border-t border-[#e2e8f0]">
          <h2
            className="text-center mb-[72px]"
            style={{
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "48px",
              color: "#1E3A8A"
            }}
          >
            Mentors & Advisors
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center max-w-[800px] mx-auto">
            <TeamMember
              image={jayesh}
              name="Jayesh Khade"
              role="Advisor"
              description={`World Trade Center Navi Mumbai
E-cell IIT Bombay`}
            />
            <TeamMember
            image={team2}
              name="Manish Gadpande"
              role="Industrialist"
              description={`Raipur, Bhilai area`}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TeamSection;