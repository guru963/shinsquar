import React from "react";
import { Search, Wrench, Utensils, Zap, ShieldCheck, Store } from "lucide-react";

const ServicesBento: React.FC = () => {
  return (
    <section id="features" className="py-16 px-margin-mobile md:px-margin-desktop bg-background text-left">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 text-center lg:text-left space-y-2">
          <span className="text-[#4356FF] text-xs font-bold uppercase tracking-widest bg-[#4356FF]/5 px-3 py-1.5 rounded-full inline-block font-display-xl" style={{ fontFamily: "var(--font-display)" }}>
            Core Benefits
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight font-display-xl" style={{ fontFamily: "var(--font-display)" }}>
            Why Shin Square? <br />
            <span className="text-[#4356FF] text-2xl md:text-3xl font-semibold mt-1.5 block leading-snug font-display-xl" style={{ fontFamily: "var(--font-display)" }}>
              Everything your locality needs, in one place.
            </span>
          </h2>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-bento-gap auto-rows-auto md:auto-rows-[minmax(280px,auto)]">
          
          {/* Card 1: Easy Discovery of Professionals */}
          <div className="md:col-span-8 p-6 md:p-10 rounded-3xl bg-surface-container-low border border-outline-variant/30 shadow-sm relative overflow-hidden flex flex-col md:flex-row justify-between items-stretch hover:shadow-md transition group animate-fade-in gap-6">
            <div className="relative z-10 space-y-3 flex-1 flex flex-col justify-center">
              <div className="w-12 h-12 bg-[#4356FF]/10 rounded-xl flex items-center justify-center text-[#4356FF] mb-2">
                <Search size={22} />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-display-xl" style={{ fontFamily: "var(--font-display)" }}>Easy Discovery</h3>
              <p className="text-[#475569] max-w-md text-sm md:text-base leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                Find verified local experts like plumbers, electricians, and technicians in your area instantly. No endless scrolling—just direct, quick discovery.
              </p>
            </div>
            
            {/* Visual element container (Positioned on the right to fill empty space) */}
            <div className="relative w-full md:w-[240px] min-h-[140px] md:min-h-auto bg-gray-50/60 rounded-2xl md:rounded-l-[80px] md:rounded-r-none -mr-8 md:-mr-10 -my-6 md:-my-10 p-6 flex flex-col justify-center overflow-hidden shrink-0">
              <div className="absolute top-4 left-6 flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-md border border-gray-100/50 w-fit transition-transform duration-300 group-hover:-translate-y-1">
                <div className="w-8 h-8 bg-[#4356FF]/10 rounded-lg flex items-center justify-center text-[#4356FF]">
                  <Wrench size={16} />
                </div>
                <div className="text-xs font-bold text-gray-700" style={{ fontFamily: "var(--font-display)" }}>Plumber • 0.2km</div>
              </div>
              <div className="absolute top-20 left-12 flex items-center gap-3 bg-white px-4 py-2.5 rounded-xl shadow-md border border-gray-100/50 w-fit transition-transform duration-300 group-hover:-translate-y-2">
                <div className="w-8 h-8 bg-[#4356FF]/10 rounded-lg flex items-center justify-center text-[#4356FF]">
                  <Utensils size={16} />
                </div>
                <div className="text-xs font-bold text-gray-700" style={{ fontFamily: "var(--font-display)" }}>New Bistro • 0.5km</div>
              </div>
            </div>
          </div>

          {/* Card 2: Save Time and Money */}
          <div className="md:col-span-4 p-6 md:p-10 rounded-3xl bg-[#4356FF] text-white border border-[#4356FF]/20 shadow-lg relative overflow-hidden flex flex-col justify-between hover:shadow-xl transition">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-6">
              <Zap size={24} />
            </div>
            <div className="relative z-10 space-y-3 text-left">
              <h3 className="text-2xl md:text-3xl font-extrabold font-display-xl" style={{ fontFamily: "var(--font-display)" }}>Save Time & Money</h3>
              <p className="text-white/90 text-sm md:text-base leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                Book directly in under 60 seconds. Direct deals from local providers with zero hidden markups.
              </p>
            </div>
          </div>

          {/* Card 3: Reliable and Community-Driven */}
          <div className="md:col-span-4 p-6 md:p-10 rounded-3xl bg-surface-container-low border border-outline-variant/30 shadow-sm relative overflow-hidden flex flex-col gap-5 min-h-[260px] md:h-[300px] hover:shadow-md transition">
            <div className="flex justify-between items-start">
              <div className="w-12 h-12 rounded-xl border border-[#4356FF]/20 flex items-center justify-center text-[#4356FF]">
                <ShieldCheck size={26} />
              </div>
              <span className="text-[10px] font-bold tracking-widest text-[#4356FF] bg-[#4356FF]/10 px-3 py-1 rounded-full uppercase" style={{ fontFamily: "var(--font-display)" }}>
                Verified
              </span>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-display-xl" style={{ fontFamily: "var(--font-display)" }}>Reliable & Trusted</h3>
              <p className="text-[#475569] text-sm md:text-base leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                Every professional is verified and rated by your own neighbors to ensure safety and quality work.
              </p>
            </div>
          </div>

          {/* Card 4: Support Local Businesses */}
          <div className="md:col-span-8 p-6 md:p-10 rounded-3xl bg-surface-container-low border border-outline-variant/30 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-6 md:gap-8 min-h-[320px] md:h-[300px] hover:shadow-md transition">
            <div className="flex-1 space-y-4">
              <div className="w-12 h-12 bg-[#4356FF]/10 rounded-xl flex items-center justify-center text-[#4356FF]">
                <Store size={22} />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 font-display-xl" style={{ fontFamily: "var(--font-display)" }}>Support Local Businesses</h3>
              <p className="text-[#475569] text-sm md:text-base leading-relaxed" style={{ fontFamily: "var(--font-display)" }}>
                Access exclusive deals and hyperlocal services on one community-driven platform.
              </p>
            </div>
            
            <div className="w-full md:w-1/2 h-full py-2 shrink-0">
              <img 
                alt="Community illustration" 
                className="w-full h-full object-cover rounded-2xl shadow-sm border border-gray-100" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVO9Y10mrEf2cv3o4_7lUkY6egCwzyfiPLvUilA1TEbMg8eI68qYLgrGPa7udW_IObYh810MV3kR-3h8MgVYw7MA2Bzjk1A0R2l2pSydCgIIGkueJADEwV1BWZNm42vJhJfg2GaLLMYDUr20yc8aFKQyYadKQbbuFkueEIZQ5jmNPe51HuZtJdDNbK_eGWvy5couLBIVUxIu4mf39zYFY0352janftavzDg7xKxrHO57isXh5gZM6NFa2YPe5PmuhTW8dYJw5Zn2zF" 
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ServicesBento;
