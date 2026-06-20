import React, { useEffect } from 'react'
import Hero from './components/Hero'
import DealsSection from './components/Deals'
import AboutSection from './components/About'
import PopularSection from './components/PopularSection'
import Experience from './components/Experience'
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
        title="Shin Square | Your locality, made smarter" 
        description="Discover local stores, verify household workers, and get the best local deals in your locality with ShinSquare."
      />
      {/* 1. Hero & Social Trust */}
      <Hero />

      <DealsSection />

      {/* 2. About (Core Values & Benefits) Section */}
      <AboutSection />

      {/* 3. Experience Section (Pin Point Hyperlocal) */}
      <Experience />

      {/* Popular Section (Meet Your Vendors) */}
      <PopularSection />

      {/* 4. Team */}
      <div id="founder">
        <TeamSection />
      </div>

      {/* 5. Final CTA waitlist */}
      <CTA />
    </main>
  )
}

export default App