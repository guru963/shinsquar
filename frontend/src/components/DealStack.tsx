

export default function DealStack() {
  return (
    <div className="hero__cards" aria-label="Featured local businesses" id="hero-cards">
      {/* Back card — Kirana Store (rightmost, tilted right) */}
      <article className="deal-card deal-card--back" id="card-kirana">
        <div className="deal-card__media">
          <img
            src="https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&h=750&fit=crop"
            alt="Fresh Kirana Store"
            width="260"
            height="325"
            loading="lazy"
          />
          <span className="badge badge--verified">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Verified
          </span>
        </div>
        <div className="deal-card__body deal-card__body--compact">
          <h3 className="deal-card__title">Fresh Kirana Store</h3>
          <p className="deal-card__desc">
            15% off on Aashirvaad<br />and more groceries
          </p>
          <p className="deal-card__urgency">Valid till tomorrow</p>
        </div>
      </article>

      {/* Middle card — Rakesh Plumbing (offset right, tilted left) */}
      <article className="deal-card deal-card--middle" id="card-plumber">
        <div className="deal-card__media">
          <img
            src="/assets/images/plumber.png"
            alt="Rakesh Plumbing professional"
            width="260"
            height="325"
            loading="lazy"
          />
          <span className="badge badge--verified">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Verified
          </span>
          <span className="deal-card__rating-overlay">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            4.9
          </span>
        </div>
        <div className="deal-card__body deal-card__body--compact">
          <h3 className="deal-card__title">Rakesh Plumbing</h3>
          <p className="deal-card__desc">Plumbing • Repairs • Installation</p>
          <p className="deal-card__available">Available today</p>
        </div>
      </article>

      {/* Front card — Glow Studio Salon (leftmost, prominent) */}
      <article className="deal-card deal-card--front" id="card-salon">
        <div className="deal-card__media">
          <img
            src="/assets/images/salon_hero.png"
            alt="Glow Studio Salon interior"
            width="320"
            height="400"
            loading="lazy"
          />
          <span className="badge badge--discount">-40%</span>
          <span className="badge badge--verified">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Verified
          </span>
          <span className="deal-card__distance-overlay">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor" />
              <circle cx="12" cy="9" r="2.5" fill="white" />
            </svg>
            1.2 km
          </span>
        </div>
        <div className="deal-card__body">
          <h3 className="deal-card__title">Glow Studio Salon</h3>
          <p className="deal-card__desc">Haircut • Highlights • Smoothening</p>
          <div className="deal-card__pricing">
            <span className="deal-card__price">₹599</span>
            <span className="deal-card__price-old">₹999</span>
          </div>
          <div className="deal-card__footer">
            <p className="deal-card__urgency deal-card__urgency--clock">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Deal ends in 2 days
            </p>
          </div>
        </div>
        {/* WhatsApp button */}
        <a href="#whatsapp" className="whatsapp-btn" aria-label="Contact on WhatsApp" id="whatsapp-btn">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19.001 4.908A9.817 9.817 0 0 0 11.992 2C6.534 2 2.085 6.448 2.08 11.908c0 1.748.458 3.45 1.321 4.956L2 22l5.255-1.377a9.816 9.816 0 0 0 4.73 1.206h.005c5.46 0 9.908-4.448 9.913-9.913a9.815 9.815 0 0 0-2.902-7.008zM11.992 20.13a8.17 8.17 0 0 1-4.177-1.149l-.299-.17-3.11.815.83-3.03-.187-.297A8.178 8.178 0 0 1 3.82 11.91c.005-4.514 3.678-8.187 8.187-8.187a8.171 8.171 0 0 1 5.792 2.4a8.175 8.175 0 0 1 2.397 5.793c-.005 4.514-3.678 8.187-8.204 8.214zm4.505-6.17c-.247-.125-1.47-.723-1.696-.807-.228-.083-.393-.125-.558.125-.166.246-.639.807-.784.972-.145.166-.29.187-.537.063a6.786 6.786 0 0 1-1.998-1.233 7.465 7.465 0 0 1-1.384-1.722c-.145-.246-.015-.38.109-.504.113-.11.247-.29.37-.433.125-.145.166-.247.249-.413.083-.166.04-.31-.02-.433-.063-.125-.559-1.347-.765-1.848-.2-.486-.403-.42-.558-.428-.145-.008-.31-.008-.475-.008-.166 0-.434.062-.661.31-.227.247-.867.847-.867 2.067 0 1.22.888 2.397 1.012 2.562.124.166 1.747 2.668 4.233 3.738.59.255 1.05.408 1.41.521.593.189 1.134.162 1.562.099.476-.072 1.47-.6 1.677-1.18.207-.577.207-1.074.145-1.18-.062-.103-.228-.165-.475-.29z" />
          </svg>
        </a>
      </article>
    </div>
  );
}
