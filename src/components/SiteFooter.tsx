import { Link } from "react-router-dom";

function scrollPageTop() {
  window.scrollTo(0, 0);
}

const assets = {
  logo: "/assets/logo.png",
  logoFooter: "/assets/logo-footer.png",
  iconArrowCta: "/assets/icon-cta-chevron.svg",
  iconLinkedin: "/assets/icon-linkedin.svg",
  iconFlexbox: "/assets/footer/icon-flexbox-studios.svg",
} as const;

export function SiteFooter() {
  return (
    <footer id="footer" className="site-footer">
      <div className="site-footer__top">
        <Link to="/" onClick={scrollPageTop}>
          <img
            className="site-footer__logo"
            src={assets.logoFooter}
            alt="Arodrome Group"
            width={371}
            height={41}
          />
        </Link>
        <div className="site-footer__cta-wrap">
          <Link to="/contact" className="site-footer__btn" onClick={scrollPageTop}>
            <span>CONTACT US</span>
            <img src={assets.iconArrowCta} alt="" aria-hidden="true" />
          </Link>
        </div>
      </div>

      <div className="site-footer__columns">
        <div className="site-footer__col">
          <p className="site-footer__heading">Company</p>
          <Link className="site-footer__link" to="/" onClick={scrollPageTop}>
            Home
          </Link>
          <Link className="site-footer__link" to="/about" onClick={scrollPageTop}>
            About
          </Link>
          <Link className="site-footer__link" to="/mission" onClick={scrollPageTop}>
            Mission statement
          </Link>
          <Link className="site-footer__link" to="/investors" onClick={scrollPageTop}>
            Investors
          </Link>
          <Link className="site-footer__link" to="/contact#contact-us">
            Join Us
          </Link>
          <Link className="site-footer__link" to="/contact" onClick={scrollPageTop}>
            Contact
          </Link>
        </div>
        <div className="site-footer__col">
          <p className="site-footer__heading">Product</p>
          <Link className="site-footer__link" to="/product" onClick={scrollPageTop}>
            Phoenix LT
          </Link>
        </div>
        <div className="site-footer__col">
          <p className="site-footer__heading">Legal</p>
          <Link className="site-footer__link" to="/" onClick={scrollPageTop}>
            Privacy Policy
          </Link>
          <Link className="site-footer__link" to="/" onClick={scrollPageTop}>
            Terms of Use
          </Link>
        </div>
      </div>

      <hr className="site-footer__rule" />

      <div className="site-footer__bottom">
        <p className="site-footer__copyright">
          <strong>© 2025.</strong> ARODROME GROUP LTD.
        </p>
        <a
          className="site-footer__design-link"
          href="https://www.instagram.com/flexbox.studios/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Designed by flexbox.studios on Instagram"
        >
          <span className="site-footer__designed-by">Designed by</span>
          <img
            className="site-footer__design-lockup"
            src={assets.iconFlexbox}
            alt="flexbox.studios"
          />
        </a>
      </div>
    </footer>
  );
}
