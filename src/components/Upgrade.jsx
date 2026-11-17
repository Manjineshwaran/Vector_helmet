import { useReveal } from "../hooks/useReveal";

const helmetTypes = [
  {
    name: "Full Face",
    image:
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Modular",
    image:
      "https://images.unsplash.com/photo-1591637333184-19aa32dd0f4f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Adventure",
    image:
      "https://images.unsplash.com/photo-1622185135505-2d795003994a?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Upgrade() {
  const ref = useReveal();

  return (
    <section className="upgrade section" id="upgrade" ref={ref}>
      <div className="container reveal">
        <div className="upgrade__banner">
          <img
            src="https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1600&q=80"
            alt="Motorcycle on scenic coastal road"
            className="upgrade__bg"
          />
          <div className="upgrade__panel">
            <h2 className="section-label">Upgrade Your Lid</h2>
            <p>
              Every VECTORS helmet is built for one job — keeping your head
              protected. Pick the shell that matches how you ride.
            </p>
            <a href="#bestsellers" className="btn-gradient">
              Shop Helmets
            </a>
          </div>
        </div>

        <div className="upgrade__visors">
          {helmetTypes.map((item) => (
            <article key={item.name} className="upgrade__visor">
              <div className="upgrade__visor-media">
                <img src={item.image} alt={`${item.name} helmet`} loading="lazy" />
              </div>
              <h3>{item.name}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
