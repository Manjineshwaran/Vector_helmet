export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <img
          src="https://images.unsplash.com/photo-1558980664-769d59546b3d?auto=format&fit=crop&w=2000&q=85"
          alt="Motorcycle parked on a rocky mountain ridge under dramatic clouds"
          className="hero__img"
        />
        <div className="hero__scrim" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">Premium Protection. Raw Attitude.</p>
        <h1 className="hero__title">VECTORS</h1>
        <p className="hero__subtitle">
          Motorcycle helmets only — engineered for riders who chase the edge.
        </p>
        <div className="hero__cta">
          <a href="#bestsellers" className="btn-gradient">
            Shop Helmets
          </a>
          <a href="#range" className="btn-outline">
            View Range
          </a>
        </div>
      </div>

      <a href="#range" className="hero__scroll" aria-label="Scroll to next section">
        <span />
      </a>
    </section>
  );
}
