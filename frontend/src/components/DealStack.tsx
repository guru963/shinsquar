

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
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </article>
    </div>
  );
}
