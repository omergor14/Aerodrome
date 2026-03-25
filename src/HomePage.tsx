import { Link } from "react-router-dom";
import { SiteNav } from "./components/SiteNav";
import { SiteFooter } from "./components/SiteFooter";
import { RevealBlock } from "./components/RevealBlock";
import "./components/site-layout.css";
import "./home.css";

const assets = {
  heroDrone: "/assets/home-hero-drone.png",
  missionDesert: "/assets/mission-desert.jpg",
  missionOverlay: "/assets/mission-overlay.jpg",
  visionBg: "/assets/home-vision-bg.png",
  platformPhoenix: "/assets/platform-phoenix.jpg",
  sectionExplosion: "/assets/section-explosion.jpg",
  sectionMoon: "/assets/section-moon.jpg",
  sectionMissile: "/assets/section-missile.jpg",
  sectionEngine: "/assets/section-engine.jpg",
  iconArrowCta: "/assets/icon-arrow-cta.svg",
  iconArrowDown: "/assets/icon-arrow-down.svg",
} as const;

export function HomePage() {
  return (
    <div className="home" data-name="Home page" data-node-id="2002:7542">
      <SiteNav />

      <main id="top">
        {/* ── Hero ── */}
        <section className="home__hero" aria-labelledby="hero-heading">
          <div className="home__hero-bg" aria-hidden="true">
            <img src={assets.heroDrone} alt="" />
          </div>
          <div className="home__hero-inner">
            <div className="home__hero-copy">
              <div className="home__hero-stack">
                <h1 id="hero-heading" className="home__hero-title">
                  UNMATCHED INTELLIGENT AIR SUPERIORITY
                </h1>
                <p className="home__hero-lead">
                  Unmanned systems built for endurance, precision, and autonomy,
                  integrating smart systems with combat-proven tech to redefine
                  control of the aerial battlefield.
                </p>
              </div>
              <div className="home__hero-ctas">
                <Link to="/contact#contact-us" className="home__btn home__btn--primary">
                  <span>CONTACT US</span>
                  <img src={assets.iconArrowCta} alt="" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mission ── */}
        <section
          id="mission"
          className="home__panel home__panel--mission"
          aria-labelledby="mission-title"
        >
          <div className="home__panel-bg" aria-hidden="true">
            <img src={assets.missionDesert} alt="" />
          </div>
          <div className="home__panel-inner">
            <RevealBlock className="home__block" style={{ gap: "3.75rem" }}>
              <hr className="home__rule" />
              <div className="home__block home__copy-stack">
                <h2 id="mission-title" className="home__section-title">
                  OUR MISSION
                </h2>
                <div className="home__body">
                  <p>
                    The nature of modern warfare is rapidly evolving.
                    Traditional reliance on large, costly, and complex military
                    platforms is giving way to a new era defined by agility,
                    autonomy, and precision. The battlefield has shifted —
                    favoring small, lightweight, highly maneuverable, and
                    flexible robotic systems that can adapt quickly to dynamic
                    threats and operate effectively across a wide range of
                    environments.
                  </p>
                  <p>
                    At the forefront of this transformation, our mission is to
                    lead the evolution of long-range stand-off capabilities by
                    designing and delivering advanced UAV systems that are
                    intelligent, precise, and impactful. We specialize in
                    developing unmanned aerial platforms that combine
                    cutting-edge AI, mature and battle-proven technologies, and
                    superior reliability — empowering defense forces to achieve
                    air dominance without compromise.
                  </p>
                </div>
                <a href="#vision" className="home__text-link">
                  Learn More
                  <img src={assets.iconArrowDown} alt="" aria-hidden="true" />
                </a>
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ── Vision ── */}
        <section
          id="vision"
          className="home__panel home__panel--vision"
          aria-labelledby="vision-title"
        >
          <div className="home__panel-bg home__panel-bg--vision" aria-hidden="true">
            <img
              className="home__panel-bg-img home__panel-bg-img--vision"
              src={assets.visionBg}
              alt=""
            />
          </div>
          <div className="home__panel-inner">
            <RevealBlock className="home__block" style={{ gap: "3.75rem" }}>
              <hr className="home__rule" />
              <div className="home__block home__copy-stack">
                <h2 id="vision-title" className="home__section-title">
                  VISION
                </h2>
                <p className="home__body">
                  Our vision is to be the global leader in long-range, AI-powered
                  UAV systems for defense — delivering unmatched performance,
                  reliability, and operational impact. We strive to set the
                  standard for the next generation of unmanned air power by
                  pioneering intelligent, battle-ready platforms that empower
                  militaries to operate with greater safety, speed, and
                  situational superiority.
                </p>
                <a href="#platform" className="home__text-link">
                  Learn More
                  <img src={assets.iconArrowDown} alt="" aria-hidden="true" />
                </a>
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ── Platform ── */}
        <section id="platform" className="home__platform" aria-labelledby="platform-heading">
          <RevealBlock>
            <p id="platform-heading" className="home__platform-label">
              Platform
            </p>
          </RevealBlock>
          <div className="home__platform-stage">
            <div className="home__platform-bg" aria-hidden="true">
              <img src={assets.platformPhoenix} alt="" />
            </div>
            <RevealBlock className="home__platform-bar">
              <h2 className="home__platform-name">PHOENIX LT</h2>
              <Link
                to="/product?tab=features"
                className="home__text-link"
              >
                EXPLORE
                <img src={assets.iconArrowDown} alt="" aria-hidden="true" />
              </Link>
            </RevealBlock>
          </div>
        </section>

        {/* ── Critical Deterrent ── */}
        <section
          className="home__panel"
          aria-labelledby="deterrent-title"
        >
          <div className="home__panel-bg" aria-hidden="true">
            <img src={assets.sectionExplosion} alt="" />
          </div>
          <div className="home__panel-inner home__panel-inner--right">
            <RevealBlock className="home__block" style={{ gap: "3.75rem" }}>
              <hr className="home__rule" />
              <div className="home__block home__copy-stack">
                <h2 id="deterrent-title" className="home__section-title">
                  CRITICAL DETERRENT POWER
                </h2>
                <p className="home__body">
                  We empower our customers with the most advanced, intelligent,
                  and long-range defensive strike capabilities—delivering
                  credible deterrent power that prevents escalation, stabilizes
                  volatile environments, and supports wide-area
                  peacekeeping—giving our partners the confidence, capability,
                  and technological superiority to protect their people and
                  shape a safer, more stable future.
                </p>
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ── AI Capabilities ── */}
        <section className="home__panel" aria-labelledby="ai-title">
          <div className="home__panel-bg" aria-hidden="true">
            <img src={assets.sectionMoon} alt="" />
          </div>
          <div className="home__panel-inner">
            <RevealBlock className="home__block" style={{ gap: "3.75rem" }}>
              <hr className="home__rule" />
              <div className="home__block home__copy-stack">
                <h2 id="ai-title" className="home__section-title">
                  NEW ERA UNMATCHED OF AI CAPABILITIES
                </h2>
                <div className="home__body">
                  <p>New Era Unmatched of AI Capabilities</p>
                  <p>
                    We seamlessly integrate the full power of advanced AI into
                    our embedded airborne systems, enabling our UAVs to operate
                    with unprecedented independence and mission-driven
                    intelligence.
                  </p>
                </div>
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ── Cruise Missile ── */}
        <section
          className="home__panel"
          aria-labelledby="cruise-title"
        >
          <div className="home__panel-bg home__panel-bg--layered" aria-hidden="true">
            <img
              className="home__panel-bg-img"
              src={assets.sectionExplosion}
              alt=""
            />
            <img
              className="home__panel-bg-img home__panel-bg-img--front"
              src={assets.sectionMissile}
              alt=""
            />
          </div>
          <div className="home__panel-inner home__panel-inner--right home__panel-inner--bottom">
            <RevealBlock className="home__block" style={{ gap: "3.75rem" }}>
              <hr className="home__rule" />
              <div className="home__block home__copy-stack">
                <h2 id="cruise-title" className="home__section-title">
                  TOP TIER CRUISE MISSILE TECHNOLOGIES WITHIN REACH
                </h2>
                <p className="home__body">
                  We harness the most advanced cruise-missile–grade technologies
                  integrated into our products. We deliver these high-end
                  capabilities with exceptional program agility: streamlined
                  production, rapid deployment timelines, and smart engineering
                  that keeps our systems attainable without compromising
                  performance, quality, or battlefield effectiveness.
                </p>
              </div>
            </RevealBlock>
          </div>
        </section>

        {/* ── Quality ── */}
        <section className="home__panel" aria-labelledby="quality-title">
          <div className="home__panel-bg" aria-hidden="true">
            <img src={assets.sectionEngine} alt="" />
          </div>
          <div className="home__panel-dim" aria-hidden="true" />
          <div className="home__panel-inner">
            <RevealBlock
              className="home__block"
              style={{ maxWidth: 700, gap: "3.75rem" }}
            >
              <hr className="home__rule" />
              <div className="home__block home__copy-stack">
                <h2 id="quality-title" className="home__section-title">
                  NEW ERA UNMATCHED OF AI CAPABILITIES
                </h2>
                <div className="home__body">
                  <p>
                    Every screw, every circuit, every structural element of our
                    systems is engineered with uncompromising precision and
                    cared for with an almost microscopic level of attention. An
                    obsessive commitment to quality that defines every stage of
                    our work.
                  </p>
                  <p>
                    This is why our high-definition approach extends far beyond
                    manufacturing: it continues through integration, field
                    delivery, on-site support, and mission-ready training.
                  </p>
                </div>
              </div>
            </RevealBlock>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
