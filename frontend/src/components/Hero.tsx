import DealStack from './DealStack';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container hero__grid">
        {/* Left: Content */}
        <div className="hero__content">
          <h1 className="hero__title">
            Everything your<br />
            <span className="hero__gradient">locality</span><br />
            runs on.
          </h1>
          <p className="hero__subtitle">
            Verified local shops, unbeatable deals, and trusted home help—everything you need, right around you.
          </p>
          <div className="hero__cta">
            <a 
              href="https://chat.whatsapp.com/Hbt9UIJwOxGJ5Uz44AEe0c?s=sh&p=i&mlu=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp btn--lg"
              id="join-whatsapp-btn"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.816 9.816 0 0 0 4.73 1.206h.005c5.46 0 9.908-4.448 9.913-9.913a9.815 9.815 0 0 0-2.902-7.008zM11.992 20.13a8.17 8.17 0 0 1-4.177-1.149l-.299-.17-3.11.815.83-3.03-.187-.297A8.178 8.178 0 0 1 3.82 11.91c.005-4.514 3.678-8.187 8.187-8.187a8.171 8.171 0 0 1 5.792 2.4a8.175 8.175 0 0 1 2.397 5.793c-.005 4.514-3.678 8.187-8.204 8.214zm4.505-6.17c-.247-.125-1.47-.723-1.696-.807-.228-.083-.393-.125-.558.125-.166.246-.639.807-.784.972-.145.166-.29.187-.537.063a6.786 6.786 0 0 1-1.998-1.233 7.465 7.465 0 0 1-1.384-1.722c-.145-.246-.015-.38.109-.504.113-.11.247-.29.37-.433.125-.145.166-.247.249-.413.083-.166.04-.31-.02-.433-.063-.125-.559-1.347-.765-1.848-.2-.486-.403-.42-.558-.428-.145-.008-.31-.008-.475-.008-.166 0-.434.062-.661.31-.227.247-.867.847-.867 2.067 0 1.22.888 2.397 1.012 2.562.124.166 1.747 2.668 4.233 3.738.59.255 1.05.408 1.41.521.593.189 1.134.162 1.562.099.476-.072 1.47-.6 1.677-1.18.207-.577.207-1.074.145-1.18-.062-.103-.228-.165-.475-.29z" />
              </svg>
              Join WhatsApp Group
            </a>
          </div>
          <a 
            href="https://www.google.com/search?q=shin+square&sca_esv=340f99c589fee39c&biw=1470&bih=918&sxsrf=APpeQnt4SPTg40x_-LlsfzWf9kQrEd1P-Q:1781950087947&ei=h2Y2apmsOY-SseMPhpuN4Q0&ved=0ahUKEwjZi_-vyZWVAxUPSWwGHYZNI9wQ4dUDCBI&uact=5&oq=shin+square&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3NoaW4gc3F1YXJlMgQQIxgnMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMgYQABgHGB4yBhAAGAcYHjIGEAAYBxgeMggQABgHGB4YCjIGEAAYBxgeMgYQABgHGB5IzApQPFg8cAF4AZABAJgB5wKgAecCqgEDMy0xuAEDyAEA-AEBmAICoAL0AsICBxAjGLADGCfCAgoQABhHGNYEGLADmAMA4gMFEgExIECIBgGQBgqSBwUxLjMtMaAH_wWyBwMzLTG4B-8CwgcDMi0yyAcJgAgB&sclient=gws-wiz-serp#lrd=0x3a293d002566c3eb:0x38fa647a4f6523d4,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-proof"
            style={{ textDecoration: "none" }}
          >
            <div className="avatars" aria-hidden="true">
              <img src="/shubham.png" alt="User Avatar" width="36" height="36" />
            </div>
            <p className="hero__trust-text">Trusted by <strong>1</strong> user</p>
            <span className="rating-badge" aria-label="Rating 5.0 out of 5">
              5.0
              <span className="rating-badge__stars" style={{ display: "inline-flex", gap: "2px", marginLeft: "4px" }}>
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ color: "#fbbf24" }}>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </span>
            </span>
          </a>
        </div>

        {/* Right: Card Stack */}
        <DealStack />
      </div>
    </section>
  );
}
