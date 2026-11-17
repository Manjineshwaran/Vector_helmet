import { lifestyleImages } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function Lifestyle() {
  const ref = useReveal();

  return (
    <section className="lifestyle section" id="lifestyle" ref={ref}>
      <div className="container reveal">
        <div className="lifestyle__header">
          <h2 className="section-label">Lived In. Proven Out.</h2>
          <p>Real rides. Real roads. Real riders wearing VECTORS.</p>
        </div>
        <div className="lifestyle__mosaic">
          {lifestyleImages.map((src, i) => (
            <figure key={src} className={`lifestyle__cell lifestyle__cell--${i + 1}`}>
              <img src={src} alt={`Lifestyle shot ${i + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
