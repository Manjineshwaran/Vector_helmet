import { Logo } from "./Icons";

const columns = [
  {
    title: "Shop Helmets",
    links: ["All 10 Helmets", "Full Face", "Modular", "Sport", "Adventure"],
  },
  {
    title: "Support",
    links: ["Help Center", "Shipping", "Returns", "Warranty"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Press", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookies", "Accessibility"],
  },
];

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <a href="#top" className="nav__brand">
            <Logo />
            <span>VECTORS</span>
          </a>
          <p>Motorcycle helmets only. Ride harder. Stay protected.</p>
          <div className="footer__social">
            {["Fb", "Ig", "Yt", "X"].map((s) => (
              <a key={s} href="#footer" aria-label={s} className="footer__social-link">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__cols">
          {columns.map((col) => (
            <div key={col.title}>
              <h3>{col.title}</h3>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#footer">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} VECTORS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
