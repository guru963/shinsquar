import React from "react";
import { Link } from "react-router-dom";

const CTA: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop relative">
      <div className="max-w-7xl mx-auto bg-primary-container rounded-3xl md:rounded-[60px] p-6 sm:p-10 md:p-24 relative overflow-hidden text-center">
        {/* Pulsing visual circles */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 space-y-8">
          <h2 className="text-4xl md:text-display-xl font-display-xl text-on-primary leading-tight">
            Bring Your Neighborhood <br />
            Online.
          </h2>
          <p className="text-on-primary/80 text-body-lg max-w-2xl mx-auto">
            Join the movement! Whether you are a vendor registering to list services, a household looking for trusted help, or a neighbor searching for local deals, sign up today.
          </p>
          <div className="flex flex-wrap justify-center gap-6 pt-4">
            <Link 
              to="/coming-soon"
              className="bg-white text-primary px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-body-lg hover:bg-on-primary-container hover:scale-105 transition-all shadow-2xl inline-block cursor-pointer"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
