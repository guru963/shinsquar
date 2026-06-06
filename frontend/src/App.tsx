import React, { useEffect } from 'react'
import Hero from './components/Hero'
import DealsSection from './components/Deals'
import ServicesBento from './components/ServicesBento'
import PopularSection from './components/PopularSection'
import Experience from './components/Experience'
import AboutSection from './components/About'
import TeamSection from './components/Team'
import CTA from './components/CTA'

import SEO from './components/SEO'

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.05 }
    );

    const elements = document.querySelectorAll(
      'section h2, section h1, section p, .glass, [class*="bg-surface-container-low"], .auto-rows-\\[minmax\\(300px\\,auto\\)\\] > div'
    );

    elements.forEach((el) => {
      if (!el.closest('nav')) {
        el.classList.add('transition-all', 'duration-700', 'opacity-0', 'translate-y-10');
        observer.observe(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <main className="bg-background text-on-surface font-body-md overflow-x-hidden pt-16">
      <SEO 
        title="Your locality, but smarter" 
        description="Discover local stores, verify household workers, and get the best local deals at Shankar Nagar, Durg, Chhattisgarh with ShinSquare."
      />
      {/* 1. Hero & Social Trust */}
      <Hero />

      {/* 2. Deals (Untouched per requirement) */}
      <DealsSection />

      {/* 3. Services Bento */}
      <ServicesBento />

      {/* Popular Section (Meet Your Vendors) */}
      <PopularSection />

      {/* 4. Experience Section */}
      <Experience />

      {/* 6. About (Core Values) Section */}
      <AboutSection />

      {/* 7. Team (Untouched per requirement) */}
      <div id="founder">
        <TeamSection />
      </div>

      {/* 8. Final CTA waitlist */}
      <CTA />
    </main>
  )
}

export default App