import { useState } from "react";
import { testimonials } from "../data";
import { IconInfinity, IconStar, IconArrow } from "./Icons";
import { useReveal } from "../hooks/useReveal";

export default function Testimonials() {
  const ref = useReveal();
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="testimonials section" ref={ref}>
      <div className="container reveal">
        <div className="testimonials__icon">
          <IconInfinity />
        </div>
        <h2 className="section-label">What Our Riders Say</h2>

        <blockquote className="testimonials__quote" key={item.name}>
          <div className="testimonials__stars" aria-label={`${item.rating} out of 5 stars`}>
            {Array.from({ length: item.rating }).map((_, i) => (
              <IconStar key={i} />
            ))}
          </div>
          <p>“{item.quote}”</p>
          <footer>
            <strong>{item.name}</strong>
            <span>{item.role}</span>
          </footer>
        </blockquote>

        <div className="testimonials__controls">
          <button onClick={prev} aria-label="Previous review" className="launched__btn">
            <IconArrow dir="left" />
          </button>
          <div className="testimonials__dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testimonials__dot ${i === index ? "is-active" : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="Next review" className="launched__btn">
            <IconArrow dir="right" />
          </button>
        </div>
      </div>
    </section>
  );
}
