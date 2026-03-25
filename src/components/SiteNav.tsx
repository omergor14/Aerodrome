import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const logo = "/assets/logo.png";

type NavLinkItem = {
  label: string;
  to: string;
  match?: string;
};

const links: NavLinkItem[] = [
  { label: "Product", to: "/product", match: "/product" },
  { label: "Investors", to: "/investors", match: "/investors" },
  { label: "About", to: "/about", match: "/about" },
  { label: "Mission", to: "/mission", match: "/mission" },
  { label: "Contact", to: "/contact", match: "/contact" },
];

export function SiteNav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-nav${scrolled ? " site-nav--scrolled" : ""}`}>
      <nav className="site-nav__inner" aria-label="Primary">
        <Link to="/" className="site-nav__logo-link">
          <img
            className="site-nav__logo"
            src={logo}
            alt="Arodrome Group"
            width={308}
            height={34}
          />
        </Link>
        <button
          type="button"
          className="site-nav__menu-btn"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="site-nav__menu-icon" aria-hidden="true" />
        </button>

        <ul className="site-nav__links">
          {links.map(({ label, to, match }) => {
            const active = match ? pathname.startsWith(match) : false;
            return (
              <li key={label}>
                <Link
                  className={
                    active
                      ? "site-nav__link site-nav__link--active"
                      : "site-nav__link"
                  }
                  to={to}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {open && (
          <div className="site-nav__drawer" role="dialog" aria-label="Menu">
            <div className="site-nav__drawer-inner">
              <ul className="site-nav__drawer-links">
                {links.map(({ label, to, match }) => {
                  const active = match ? pathname.startsWith(match) : false;
                  return (
                    <li key={label}>
                      <Link
                        className={
                          active
                            ? "site-nav__drawer-link site-nav__drawer-link--active"
                            : "site-nav__drawer-link"
                        }
                        to={to}
                        onClick={() => setOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
