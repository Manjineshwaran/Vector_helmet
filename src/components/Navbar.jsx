import { useEffect, useState } from "react";
import { navLinks } from "../data";
import { Logo, IconSearch, IconUser, IconCart, IconMenu, IconClose } from "./Icons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="nav__inner container-wide">
        <a href="#top" className="nav__brand" aria-label="VECTORS home">
          <Logo />
          <span>VECTORS</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <button className="nav__icon" aria-label="Search">
            <IconSearch />
          </button>
          <button className="nav__icon" aria-label="Account">
            <IconUser />
          </button>
          <button className="nav__icon" aria-label="Cart">
            <IconCart />
          </button>
          <a href="#bestsellers" className="btn-gradient nav__cta">
            Buy Now
          </a>
          <button
            className="nav__menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      <div className={`nav__drawer ${open ? "nav__drawer--open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#bestsellers" className="btn-gradient" onClick={() => setOpen(false)}>
          Buy Now
        </a>
      </div>
    </header>
  );
}
