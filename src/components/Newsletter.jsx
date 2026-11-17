import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

export default function Newsletter() {
  const ref = useReveal();
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
  };

  return (
    <section className="newsletter section" ref={ref}>
      <div className="container reveal">
        <div className="newsletter__card">
          <h2 className="section-label">Never Miss A Deal</h2>
          <p>Drop your email for drops, limited editions, and rider-only offers.</p>
          {done ? (
            <p className="newsletter__thanks">You&apos;re on the list. Ride safe.</p>
          ) : (
            <form className="newsletter__form" onSubmit={onSubmit}>
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-gradient">
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
