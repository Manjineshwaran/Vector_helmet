import { useRef } from "react";
import { newlyLaunched } from "../data";
import { IconArrow } from "./Icons";
import { useReveal } from "../hooks/useReveal";

export default function NewlyLaunched() {
  const ref = useReveal();
  const trackRef = useRef(null);

  const scrollBy = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.75), behavior: "smooth" });
  };

  return (
    <section className="launched section" ref={ref}>
      <div className="container reveal">
        <div className="launched__header">
          <h2 className="section-label">Newly Launched</h2>
          <div className="launched__controls">
            <button className="launched__btn" onClick={() => scrollBy(-1)} aria-label="Previous">
              <IconArrow dir="left" />
            </button>
            <button className="launched__btn" onClick={() => scrollBy(1)} aria-label="Next">
              <IconArrow dir="right" />
            </button>
          </div>
        </div>

        <div className="launched__track" ref={trackRef}>
          {newlyLaunched.map((item) => (
            <article key={item.id} className="launched__card">
              <div className="launched__media">
                <img src={item.image} alt={item.name} loading="lazy" />
                <span className="launched__tag">{item.tag}</span>
              </div>
              <div className="launched__meta">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                </div>
                <a href="#bestsellers" className="btn-gradient launched__buy">
                  View Details
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
