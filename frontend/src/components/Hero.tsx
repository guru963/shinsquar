import DealStack from './DealStack';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__grid">
        {/* Left: Content */}
        <div className="hero__content">
          <h1 className="hero__title">
            Everything your<br />
            <span className="hero__gradient">neighborhood</span><br />
            runs on.
          </h1>
          <p className="hero__subtitle">
            Verified local shops, unbeatable deals, and trusted home help—everything you need, right around you.
          </p>
          <div className="hero__cta">
            <a 
              href="https://chat.whatsapp.com/KrgkGXIMyxpFWaYTC3Yuur?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary btn--lg"
              id="join-whatsapp-btn"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "#25D366", borderColor: "#25D366" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.44 0-2.85-.38-4.1-1.1l-.3-.17-3.05.8 0.81-2.96-.19-.3a8.176 8.176 0 0 1-1.25-4.33c0-4.54 3.7-8.23 8.24-8.23m-3.53 4.63c-.19 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.44 0 1.44 1.05 2.84 1.2 3.03.15.19 2.07 3.16 5.01 4.43.7.3 1.25.48 1.67.61.7.22 1.34.19 1.84.12.56-.08 1.72-.7 1.96-1.38.24-.67.24-1.26.17-1.38-.07-.12-.27-.19-.57-.34-.3-.15-1.72-.85-1.99-.95-.27-.1-.47-.15-.67.15-.2.3-.77.95-.95 1.15-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.6-.5-.52-.67-.52" />
              </svg>
              Join WhatsApp Group
            </a>
          </div>
          <div className="hero__social-proof">
            <div className="avatars" aria-hidden="true">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face" alt="" width="36" height="36" />
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face" alt="" width="36" height="36" />
              <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face" alt="" width="36" height="36" />
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face" alt="" width="36" height="36" />
            </div>
            <p className="hero__trust-text">Trusted by <strong>2,400+</strong> in HSR</p>
            <span className="rating-badge" aria-label="Rating 4.8 out of 5">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              4.8
            </span>
          </div>
        </div>

        {/* Right: Card Stack */}
        <DealStack />
      </div>
    </section>
  );
}
