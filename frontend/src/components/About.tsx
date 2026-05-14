import React from "react";
import {
  MapPin,
  Zap,
  Heart,
  Clock,
  Search,
  Users,
  ShieldCheck,
  Handshake,
  BadgePercent,
  Cable,
  CheckCircle2,
} from "lucide-react";
import aboutIllustration from "../assets/about-illustration.png";
import hyperlocalIllustration from "../assets/hyperlocal-illustration.png";

/* ─────────────────────── small reusable pieces ─────────────────────── */

interface FeatureItemProps {
  icon: React.ReactNode;
  text: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => (
  <div className="flex items-center gap-4 group">
    <div className="w-[44px] h-[44px] rounded-xl bg-gradient-to-br from-[#4356FF]/10 to-[#43C0FF]/10 flex items-center justify-center shrink-0 group-hover:from-[#4356FF]/20 group-hover:to-[#43C0FF]/20 transition-all duration-300">
      {icon}
    </div>
    <p
      className="text-[15px] md:text-[16px] text-[#2C2C2C]"
      style={{ fontFamily: "Poppins", fontWeight: 500 }}
    >
      {text}
    </p>
  </div>
);

interface HyperlocalPointProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const HyperlocalPoint: React.FC<HyperlocalPointProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex items-start gap-4 group">
    <div className="w-[48px] h-[48px] rounded-xl bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-white/25 transition-all duration-300">
      {icon}
    </div>
    <div>
      <p
        className="text-[16px] text-white"
        style={{ fontFamily: "Poppins", fontWeight: 600 }}
      >
        {title}
      </p>
      <p
        className="text-[13px] text-[#C7C9E0] mt-0.5"
        style={{ fontFamily: "Poppins", fontWeight: 400 }}
      >
        {description}
      </p>
    </div>
  </div>
);

/* ─────────────────────── main section ─────────────────────── */

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-[#F7F8FF] py-[80px] px-6 md:px-[48px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* ═══════════════════════════════════════════════════
            SECTION 1 — ABOUT SHIN SQUARE
            Image Left  ·  Text Right
        ═══════════════════════════════════════════════════ */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-[100px]">
          {/* LEFT — illustration */}
          <div className="w-full md:w-[48%] flex justify-center">
            <img
              src={aboutIllustration}
              alt="Local marketplace illustration"
              className="w-full max-w-[480px] h-auto drop-shadow-lg"
            />
          </div>

          {/* RIGHT — text content */}
          <div className="w-full md:w-[52%]">
            {/* small label */}
            <p
              className="text-[15px] text-[#595959] mb-2 tracking-widest uppercase"
              style={{ fontFamily: "Poppins", fontWeight: 500 }}
            >
              About Us
            </p>

            {/* gradient heading */}
            <h2
              className="
                text-4xl md:text-[44px]
                font-semibold
                tracking-[0.03em]
                leading-[1.15]
                bg-gradient-to-r
                from-[#4356FF]
                to-[#43A1FF]
                bg-clip-text
                text-transparent
                mb-2
              "
              style={{ fontFamily: "Poppins" }}
            >
              Shin Square
            </h2>

            {/* cursive tagline */}
            <p
              className="text-2xl md:text-[28px] text-[#2C2C2C] mb-6"
              style={{
                fontFamily: "Kaushan Script",
                letterSpacing: "0.5px",
              }}
            >
              your hyperlocal platform
            </p>

            {/* description */}
            <p
              className="text-[15px] md:text-[16px] text-[#4A4A4A] leading-[1.9] mb-6"
              style={{ fontFamily: "Poppins", fontWeight: 400 }}
            >
              Shin Square is your trusted hyperlocal platform connecting you to
              the best deals, offers, and essential services in your
              neighborhood. From plumbers and electricians to photographers and
              local stores, we bring everything you need closer to you.
            </p>

            <p
              className="text-[15px] md:text-[16px] text-[#4A4A4A] leading-[1.9]"
              style={{ fontFamily: "Poppins", fontWeight: 400 }}
            >
              <span
                className="bg-gradient-to-r from-[#4356FF] to-[#43A1FF] bg-clip-text text-transparent"
                style={{ fontWeight: 600 }}
              >
                Discover, connect, and save
              </span>{" "}
              — all within your own community, made simple and convenient.
            </p>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            SECTION 2 — WHY SHIN SQUARE
            Text Left  ·  Features Right
        ═══════════════════════════════════════════════════ */}
        <div id="services" className="flex flex-col md:flex-row items-center gap-12 md:gap-20 mb-[100px]">
          {/* LEFT — text + features */}
          <div className="w-full md:w-[55%] order-2 md:order-1">
            {/* heading */}
            <div className="flex items-center gap-3 mb-2">
              <div className="w-[5px] h-[38px] rounded-full bg-gradient-to-b from-[#4356FF] to-[#43C0FF]" />
              <h3
                className="text-[28px] md:text-[34px] text-[#1E2773]"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                Why Shin Square?
              </h3>
            </div>

            <p
              className="text-[15px] text-[#737373] mb-8 ml-[18px]"
              style={{ fontFamily: "Poppins", fontWeight: 400 }}
            >
              Everything your neighborhood needs, in one place.
            </p>

            {/* feature list */}
            <div className="flex flex-col gap-5 ml-[18px]">
              <FeatureItem
                icon={<Cable size={20} className="text-[#4356FF]" />}
                text="One platform for offers + services"
              />
              <FeatureItem
                icon={<Heart size={20} className="text-[#4356FF]" />}
                text="Support local businesses"
              />
              <FeatureItem
                icon={<BadgePercent size={20} className="text-[#4356FF]" />}
                text="Save time and money"
              />
              <FeatureItem
                icon={<Search size={20} className="text-[#4356FF]" />}
                text="Easy discovery of nearby professionals"
              />
              <FeatureItem
                icon={<Users size={20} className="text-[#4356FF]" />}
                text="Reliable and community-driven"
              />
            </div>
          </div>

          {/* RIGHT — illustration */}
          <div className="w-full md:w-[45%] flex justify-center order-1 md:order-2">
            <img
              src={hyperlocalIllustration}
              alt="Hyperlocal services illustration"
              className="w-full max-w-[440px] h-auto drop-shadow-lg"
            />
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            SECTION 3 — TRULY HYPERLOCAL
            Centered title · subtitle · 4 separate white cards
        ═══════════════════════════════════════════════════ */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <MapPin size={26} className="text-[#4356FF]" />
            <h3
              className="text-[30px] md:text-[36px] text-[#1E2773]"
              style={{ fontFamily: "Poppins", fontWeight: 700 }}
            >
              Truly Hyperlocal
            </h3>
          </div>

          <p
            className="text-[18px] md:text-[20px] text-[#737373]"
            style={{ fontFamily: "Kaushan Script", letterSpacing: "0.5px" }}
          >
            "We focus only on your area"
          </p>
        </div>

        {/* 4 separate individual cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: <Zap size={24} className="text-[#4356FF]" />,
              bg: "from-[#4356FF]/10 to-[#43C0FF]/10",
              title: "Faster Service",
              desc: "Local means quicker response times and on-time delivery.",
            },
            {
              icon: <ShieldCheck size={24} className="text-[#4356FF]" />,
              bg: "from-[#4356FF]/10 to-[#43C0FF]/10",
              title: "Trusted Vendors",
              desc: "Verified locals you can rely on, rated by your neighbors.",
            },
            {
              icon: <BadgePercent size={24} className="text-[#4356FF]" />,
              bg: "from-[#4356FF]/10 to-[#43C0FF]/10",
              title: "Better Prices",
              desc: "No middleman markup — deals straight from local shops.",
            },
            {
              icon: <Handshake size={24} className="text-[#4356FF]" />,
              bg: "from-[#4356FF]/10 to-[#43C0FF]/10",
              title: "Community Bond",
              desc: "Every transaction strengthens your local economy.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-[0px_4px_16px_rgba(0,0,0,0.06)] hover:shadow-[0px_8px_28px_rgba(67,86,255,0.12)] px-6 py-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1"
            >
              {/* circular icon */}
              <div
                className={`w-[56px] h-[56px] rounded-full bg-gradient-to-br ${item.bg} flex items-center justify-center mb-5`}
              >
                {item.icon}
              </div>

              <h4
                className="text-[16px] text-[#1E2773] mb-2"
                style={{ fontFamily: "Poppins", fontWeight: 600 }}
              >
                {item.title}
              </h4>

              <p
                className="text-[13px] text-[#737373] leading-[1.7]"
                style={{ fontFamily: "Poppins", fontWeight: 400 }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
