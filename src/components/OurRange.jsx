import { useReveal } from "../hooks/useReveal";

export default function OurRange() {
  const ref = useReveal();

  return (
    <section className="range section" id="range" ref={ref}>
      <div className="container reveal">
        <div className="range__layout">
          <div className="range__copy">
            <h2 className="section-label">Our Range</h2>
            <p>
              From city streets to alpine passes — helmets built for every ride,
              every weather, every rider.
            </p>
            <a href="#bestsellers" className="btn-gradient">
              View All
            </a>
          </div>

          <div className="range__stage">
            <div className="range__rock range__rock--left" />
            <div className="range__pedestal">
              <img
                src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=700&q=80"
                alt="Featured VECTORS helmet on display"
                className="range__helmet"
              />
            </div>
            <div className="range__rock range__rock--right" />
          </div>
        </div>
      </div>
    </section>
  );
}
