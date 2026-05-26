import React, { useRef, useState } from "react";
import { MapPin, MessageSquare, Star, ArrowLeft, ArrowRight } from "lucide-react";

interface Neighbor {
  id: number;
  name: string;
  role: string;
  image: string;
  distance: string;
  rating?: number;
}

const neighbors: Neighbor[] = [
  {
    id: 1,
    name: "David S.",
    role: "Master Handyman",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAX0sOAUyjwmE1cm9CshdI6bYLUELaNXoND1X0DxVY2LjzZOkXeUZcwTMh4SQO0mdwueGmeMeaPGzsVVGOnWhaaOxH5mxfNNFAUGsfIUBgnbqfQI_CDut_XZRShIewab3UvRtMj8oY6AOHff68lAhMtBx6ltCU7uwMGYoZyoW7MUPIRGwurpkVTmol4-YtLYJZnEo1XitS9t0DseI87bK81j4eoCC7mJsIYzerzU3nGnq02JwZy-0YmwCKlpRIBKhp77WAg5pVge5xY",
    distance: "2 mins away",
    rating: 4.9
  },
  {
    id: 2,
    name: "Elena R.",
    role: "Artisan Baker",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCztgzlPbe610wrkNKteYt4rPLs9ttQkpfo7mB-JHIl5TVwm2LFnbOn8I7thjIGD10GkqUYgDByrj2AP8TFUBPRDHEQdIXLugxfvSgl3LF5K8SX7BVzhLSBeauHg2faiACr962q1TfMD-9qIObl7kF2z1D3sDfaXM-qNWvGEG8vBDCMbepGf4wZfk6hNbLQ2mOu8VnK-_nCDWB9B_4oUiIMyupcn4laGYVONZZk_v1hro4dC-6ObaT6Poix71lQ97_VYfs80NBJajy4",
    distance: "400m away",
    rating: 5.0
  },
  {
    id: 3,
    name: "Marcus T.",
    role: "IT Specialist",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBLChpQPqqSkPaUrKAJvfRPBc2EB35SCZsZMbkB2I9LPSgJhLmfEdKoaewEpJgjvehUm-1teJFGzPijP4WafBvMJcES9ZZkx7nkc1SQGKM9DC2aKvSbDsE0tBifraYYXYA2MfDRcqJcgqVD35-RHk2qjzbQz2gnaVObY4BezjdiZC79u9sRIPBU8ZT6y5CjQTp8CACAJ4kU0SUFTOXmpEQXya8cwk_ULWDkr3GgQspAh74tD2DwMCnSI_FnhCpa2Z3J_O8rfNMu2gQ_",
    distance: "1.2km away",
    rating: 4.8
  },
  {
    id: 4,
    name: "Sara L.",
    role: "Artisan Florist",
    image: "https://images.unsplash.com/photo-1549417229-aa67d3263c09?w=300&h=400&fit=crop",
    distance: "3 mins away",
    rating: 4.9
  },
  {
    id: 5,
    name: "Rohan M.",
    role: "Fitness Coach",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop",
    distance: "800m away",
    rating: 5.0
  }
];

const Community: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const totalScrollable = scrollWidth - clientWidth;
      if (totalScrollable > 0) {
        const progress = (scrollLeft / totalScrollable) * 100;
        setScrollProgress(progress);
      }
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section 
      id="community" 
      className="min-h-[100svh] lg:h-[100vh] flex flex-col justify-center py-12 px-margin-mobile md:px-margin-desktop bg-[#F8FAFC] relative overflow-hidden"
    >
      {/* Decorative blurred background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Title Area */}
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 font-display-xl">
            Meet Your <span className="text-primary inline-block transform -rotate-1 hover:rotate-0 transition-transform">Neighbors.</span>
          </h2>
          <p className="text-sm md:text-base text-[#475569] max-w-xl mx-auto font-medium">
            The heart and soul of Shin Square. Real people, real connections, right next door.
          </p>
        </div>

        {/* Scroll navigation controls */}
        <div className="flex justify-between items-center mb-4 max-w-6xl mx-auto px-4">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Slide to discover ({neighbors.length})
          </span>
          <div className="flex gap-2">
            <button 
              onClick={() => scroll("left")}
              className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 text-gray-600 transition cursor-pointer"
              aria-label="Scroll left"
            >
              <ArrowLeft size={16} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-8 h-8 rounded-full border border-gray-200 bg-white flex items-center justify-center hover:bg-gray-50 text-gray-600 transition cursor-pointer"
              aria-label="Scroll right"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto py-4 px-4 md:px-12 snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {neighbors.map((neighbor) => (
            <div 
              key={neighbor.id}
              className="w-[280px] flex-shrink-0 snap-start bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-[0_12px_30px_rgba(67,86,255,0.06)] hover:-translate-y-1 transition duration-300 flex flex-col h-[380px] overflow-hidden"
            >
              {/* Top 3/4: Cover Image */}
              <div className="relative h-[290px] w-full overflow-hidden bg-gray-50">
                <img 
                  src={neighbor.image} 
                  alt={neighbor.name}
                  className="w-full h-full object-cover" 
                />
                
                {/* Distance Badge overlay */}
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg flex items-center gap-1 shadow-sm text-[10px] font-bold text-gray-700">
                  <MapPin size={10} className="text-primary" />
                  {neighbor.distance}
                </span>

                <span className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2 py-1 rounded-full flex items-center gap-1 shadow-sm text-[10px] font-semibold text-green-600">
                  Verified
                </span>
              </div>

              {/* Bottom 1/4: Info & Chat */}
              <div className="h-[90px] px-5 py-4 flex items-center justify-between bg-white text-left">
                <div className="space-y-1 min-w-0">
                  <h4 className="font-bold text-gray-900 text-base truncate leading-tight">{neighbor.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] text-primary font-bold tracking-wider uppercase px-1.5 py-0.5 bg-primary/5 rounded">
                      {neighbor.role}
                    </span>
                    {neighbor.rating && (
                      <div className="flex items-center gap-0.5 text-amber-500 text-xs font-semibold">
                        <Star size={11} fill="currentColor" />
                        {neighbor.rating}
                      </div>
                    )}
                  </div>
                </div>

                {/* Chat Button */}
                <button 
                  className="flex-shrink-0 w-10 h-10 bg-primary hover:bg-[#3144e5] text-white rounded-full flex items-center justify-center shadow-[0_4px_10px_rgba(67,86,255,0.25)] transition cursor-pointer" 
                  aria-label="Chat now"
                >
                  <MessageSquare size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Progress Bar indicator */}
        <div className="w-48 h-1.5 bg-gray-200/60 mx-auto rounded-full mt-6 relative overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-75"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
