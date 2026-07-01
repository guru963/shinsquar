import React from "react";
import neighborhoodImg from "../assets/neighborhood.jpg";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-12 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-12 text-left">
        <div className="lg:sticky lg:top-32 h-fit">
          <h2 className="text-display-lg font-display-xl text-on-surface mb-6">
            Hyperlocal, <span className="text-primary">Reimagined.</span>
          </h2>
          
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center shrink-0 font-bold group-hover:bg-primary group-hover:text-white transition-all select-none">
                01
              </div>
              <div>
                <h4 className="text-headline-lg font-bold mb-2">Pinpoint Your Needs</h4>
                <p className="text-on-surface-variant">
                  Whether it's a leaky faucet or a late-night craving, just shout it out on the Square.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center shrink-0 font-bold group-hover:bg-primary group-hover:text-white transition-all select-none">
                02
              </div>
              <div>
                <h4 className="text-headline-lg font-bold mb-2">See Live Offers</h4>
                <p className="text-on-surface-variant">
                  Nearby vendors respond in real-time with quotes and availability. Transparent pricing, no surprises.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 group">
              <div className="w-12 h-12 rounded-full border-2 border-primary text-primary flex items-center justify-center shrink-0 font-bold group-hover:bg-primary group-hover:text-white transition-all select-none">
                03
              </div>
              <div>
                <h4 className="text-headline-lg font-bold mb-2">Instant Booking</h4>
                <p className="text-on-surface-variant">
                  Secure your service with a tap. Track progress and pay only when the job is done.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Visual Image */}
        <div className="space-y-8 flex items-center justify-center">
          <div className="glass aspect-[4/5] w-full max-w-[400px] rounded-[32px] overflow-hidden border-white shadow-2xl relative">
            <img 
              className="w-full h-full object-cover" 
              alt="Local street market in Durg showing hyperlocal services by Locall" 
              src={neighborhoodImg} 
            />
            <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-2xl border-white/40">
              <div className="flex justify-between items-center text-on-surface">
                <div>
                  <div className="font-bold">Verified Professional</div>
                  <div className="text-label-sm opacity-70">Arriving in minutes</div>
                </div>
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>
                  stars
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
