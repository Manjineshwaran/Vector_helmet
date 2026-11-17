import { features } from "../data";
import { IconTruck, IconShield, IconReturn } from "./Icons";
import { useReveal } from "../hooks/useReveal";

const icons = {
  truck: IconTruck,
  shield: IconShield,
  return: IconReturn,
};

export default function Features() {
  const ref = useReveal();

  return (
    <section className="features section" ref={ref}>
      <div className="container reveal">
        <div className="features__grid">
          {features.map((f) => {
            const Icon = icons[f.icon];
            return (
              <article key={f.title} className="features__item">
                <div className="features__icon">
                  <Icon />
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
