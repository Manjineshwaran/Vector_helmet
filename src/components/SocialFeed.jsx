import { socialPosts } from "../data";
import { useReveal } from "../hooks/useReveal";

export default function SocialFeed() {
  const ref = useReveal();

  return (
    <section className="social section" ref={ref}>
      <div className="container reveal">
        <h2 className="section-label social__title">
          Follow Us For The Latest Updates
        </h2>
        <div className="social__carousel">
          {socialPosts.map((src, i) => (
            <figure
              key={src}
              className="social__card"
              style={{ "--i": i - Math.floor(socialPosts.length / 2) }}
            >
              <img src={src} alt={`Community post ${i + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
