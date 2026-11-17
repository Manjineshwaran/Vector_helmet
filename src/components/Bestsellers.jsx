import { bestsellers } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Bestsellers() {
  const ref = useReveal();

  return (
    <section className="bestsellers section" id="bestsellers" ref={ref}>
      <div className="container reveal">
        <div className="bestsellers__header">
          <h2 className="section-label">All Helmets</h2>
          <a href="#spin" className="btn-outline">
            View 360°
          </a>
        </div>

        <div className="bestsellers__grid bestsellers__grid--ten">
          {bestsellers.map((item) => (
            <article key={item.id} className="product-card product-card--float">
              <div className="product-card__media">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="product-card__spin-img"
                />
              </div>
              <div className="product-card__body">
                <p className="product-card__tag">{item.tag}</p>
                <h3>{item.name}</h3>
                <p className="product-card__price">{item.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
