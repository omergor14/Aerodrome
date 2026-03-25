import { useEffect } from "react";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { RevealBlock } from "../components/RevealBlock";
import "../components/site-layout.css";
import "./about.css";

const a = "/assets/about";

const missionParagraphs = [
  "The nature of modern warfare is rapidly evolving. Traditional reliance on large, costly, and complex military platforms is giving way to a new era defined by agility, autonomy, and precision. The battlefield has shifted — favoring small, lightweight, highly maneuverable, and flexible robotic systems that can adapt quickly to dynamic threats and operate effectively across a wide range of environments.",
  "At the forefront of this transformation, our mission is to lead the evolution of long-range stand-off capabilities by designing and delivering advanced UAV systems that are intelligent, precise, and impactful. We specialize in developing unmanned aerial platforms that combine cutting-edge AI, mature and battle-proven technologies, and superior reliability — empowering defense forces to achieve air dominance without compromise.",
  "By focusing on long-range operational reach and high survivability, our systems enable commanders to project power, gather intelligence, and execute missions with strategic advantage and strike smarter",
] as const;

const valueIcons = [0, 1, 2, 3, 4] as const;

export function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about" data-name="About" data-node-id="2038:10563">
      <SiteNav />
      <main className="about__main">
        <section className="about-hero" aria-labelledby="about-hero-title">
          <div className="about-hero__bg" aria-hidden="true">
            <img src={`${a}/hero.jpg`} alt="" className="about-hero__bg-img" />
          </div>
          <div className="about-hero__inner">
            <div className="about-hero__copy page-enter-hero page-hero-mission">
              <div className="page-hero-mission__stack">
                <h1 id="about-hero-title" className="page-hero-mission__title">
                  We are Aerodrome
                </h1>
                <p className="page-hero-mission__text">
                  An elite team shaping the future of long-range battlefield
                  systems — driven by results, committed to mission success
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-mission" aria-labelledby="about-mission-heading">
          <div className="about-mission__text">
            <RevealBlock className="reveal-rise">
              <hr className="about-rule about-rule--on-dark" />
              <div className="about-mission__body">
                <h2 id="about-mission-heading" className="about-heading about-heading--cream">
                  Our mission
                </h2>
                <div className="about-prose about-prose--cream">
                  {missionParagraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </RevealBlock>
          </div>
          <div className="about-mission__media" aria-hidden="true">
            <img src={`${a}/mission-a.jpg`} alt="" className="about-mission__img" />
            <img src={`${a}/mission-b.jpg`} alt="" className="about-mission__img about-mission__img--front" />
          </div>
        </section>

        <section className="about-platform" aria-labelledby="about-platform-heading">
          <div className="about-platform__bg" aria-hidden="true">
            <div className="about-platform__bg-white" />
            <div className="about-platform__bg-img-wrap">
              <img src={`${a}/platform-bg.jpg`} alt="" />
            </div>
          </div>
          <div className="about-platform__content">
            <RevealBlock className="reveal-rise">
              <p className="about-platform__label">Platform</p>
              <div className="about-platform__block">
                <div className="about-platform__copy">
                  <h2 id="about-platform-heading" className="about-heading about-heading--white">
                    Fully Redundant Design
                  </h2>
                  <p className="about-prose about-prose--cream about-prose--platform">
                    Built on the architecture of the most sophisticated, large-class
                    UAV platforms, our product incorporates full redundancy across
                    power, navigation, and critical systems. That multi-layered
                    resilience ensures the highest safety standards in-flight and
                    maximizes mission assurance — reliably reaching targets while
                    minimizing false launches.
                  </p>
                </div>
              </div>
            </RevealBlock>
          </div>
        </section>

        <section className="about-ai" aria-labelledby="about-ai-heading">
          <div className="about-ai__text">
            <div className="about-ai__inner">
              <RevealBlock className="reveal-rise">
                <hr className="about-rule about-rule--on-cream" />
                <div className="about-ai__body">
                  <h2 id="about-ai-heading" className="about-heading about-heading--charcoal">
                    Built in AI Core
                  </h2>
                  <p className="about-prose about-prose--charcoal">
                    Phoenix LM redefines operational autonomy with a built-in, open
                    AI framework that enables users or third-party integrators to
                    create and implement mission-specific applications in-house.
                    This capability reduces dependency, accelerates innovation
                    cycles, and supports rapid adaptation to evolving battlefield
                    needs.
                  </p>
                </div>
              </RevealBlock>
            </div>
          </div>
          <div className="about-ai__media" aria-hidden="true">
            <img src={`${a}/ai-a.jpg`} alt="" className="about-ai__img" />
            <img src={`${a}/ai-b.jpg`} alt="" className="about-ai__img about-ai__img--layer" />
          </div>
        </section>

        <section className="about-range" aria-labelledby="about-range-heading">
          <div className="about-range__media" aria-hidden="true">
            <div className="about-range__media-bg" />
            <img src={`${a}/range-a.jpg`} alt="" className="about-range__img about-range__img--contain" />
            <img src={`${a}/range-b.jpg`} alt="" className="about-range__img about-range__img--cover" />
          </div>
          <div className="about-range__text">
            <div className="about-range__inner">
              <RevealBlock className="reveal-rise">
                <hr className="about-rule about-rule--on-tan" />
                <div className="about-range__body">
                  <h2 id="about-range-heading" className="about-heading about-heading--near-black">
                    Long Range Operations
                  </h2>
                  <p className="about-prose about-prose--near-black">
                    Cruise-missile level performance delivered affordably — extended
                    operational reach up to 2,000 km with robust performance in
                    dynamic, contested, and degraded environments.
                  </p>
                </div>
              </RevealBlock>
            </div>
          </div>
        </section>

        <section className="about-values" aria-labelledby="about-values-heading">
          <RevealBlock className="reveal-rise">
            <div className="about-values__head">
              <h2 id="about-values-heading" className="about-values__title">
                Our values
              </h2>
              <div className="about-values__icons" aria-hidden="true">
                {valueIcons.map((i) => (
                  <img
                    key={i}
                    src={`${a}/icon-chevron.svg`}
                    alt=""
                    width={29}
                    height={16}
                  />
                ))}
              </div>
            </div>
            <div className="about-values__grids">
            <div className="about-values__row about-values__row--3">
              <article className="about-values__cell">
                <h3 className="about-values__cell-title">Creativity</h3>
                <p className="about-values__cell-text">
                  We embrace unconventional thinking to solve the battlefield’s
                  toughest challenges. From system design to mission architecture,
                  creativity drives our ability to innovate beyond expectations and
                  deliver future-ready solutions.
                </p>
              </article>
              <article className="about-values__cell">
                <h3 className="about-values__cell-title">Customer Oriented</h3>
                <p className="about-values__cell-text">
                  Our customers operate in high-stakes environments — and we never
                  forget it. Every decision, feature, and capability is built
                  around real operational needs. We listen, adapt, and deliver
                  with precision and purpose
                </p>
              </article>
              <article className="about-values__cell">
                <h3 className="about-values__cell-title">Synergy</h3>
                <p className="about-values__cell-text">
                  Our strength lies in convergence. By fusing AI, autonomy,
                  communications, propulsion, and advanced materials into one
                  cohesive platform, we create smarter, more capable systems that
                  outperform siloed solutions
                </p>
              </article>
            </div>
            <div className="about-values__row about-values__row--2">
              <article className="about-values__cell about-values__cell--wide">
                <h3 className="about-values__cell-title about-values__cell-title--long">
                  North Star for Long Range Strike System
                </h3>
                <p className="about-values__cell-text">
                  We’re not just following the future of long-range strike — we’re
                  defining it. Our commitment is to lead the domain with vision,
                  integrity, and relentless innovation, becoming the reference
                  point for range, reliability, and results
                </p>
              </article>
              <article className="about-values__cell">
                <h3 className="about-values__cell-title">Leading In Technology</h3>
                <p className="about-values__cell-text">
                  We push the boundaries of what unmanned systems can achieve. From
                  advanced AI cores to scalable architectures, we are continuously
                  innovating to stay ahead of the curve — and to keep our customers
                  ahead of the threat.
                </p>
              </article>
            </div>
          </div>
          </RevealBlock>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
