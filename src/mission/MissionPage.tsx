import { useEffect } from "react";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { RevealBlock } from "../components/RevealBlock";
import "../components/site-layout.css";
import "./mission.css";

const m = "/assets/mission";

const valuesRow1 = [
  {
    title: "Innovation",
    body: "Pioneering cutting-edge aerial technologies",
  },
  {
    title: "Reliability",
    body: "Delivering consistent, accurate, and secure solutions",
  },
  {
    title: "Safety",
    body: "Ensuring that every mission contributes to safer people, assets, and environments",
  },
] as const;

const valuesChevronSlots = [0, 1, 2, 3, 4] as const;

const valuesRow2 = [
  {
    title: "Impact",
    body: "Driving measurable value that creates lasting change",
    wide: true,
  },
  {
    title: "Partnership",
    body: "Building long-term relationships with clients and stakeholders, ensuring trust, transparency, and shared success.",
    wide: false,
  },
] as const;

export function MissionPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mission" data-name="Our mission" data-node-id="2043:13074">
      <SiteNav />
      <main className="mission__main">
        <section className="mission-hero" aria-labelledby="mission-hero-title">
          <div className="mission-hero__bg" aria-hidden="true">
            <div className="mission-hero__bg-base-wrap">
              <img
                className="mission-hero__bg-base"
                src={`${m}/hero-base.jpg`}
                alt=""
              />
            </div>
            <img
              className="mission-hero__bg-overlay"
              src={`${m}/hero-overlay.jpg`}
              alt=""
            />
          </div>
          <div className="mission-hero__inner">
            <div className="mission-hero__copy page-enter-hero page-hero-mission">
              <div className="page-hero-mission__stack">
                <h1 id="mission-hero-title" className="page-hero-mission__title">
                  Our mission
                </h1>
                <p className="page-hero-mission__text">
                  Transforming aerial intelligence into actionable insights for a
                  safer, smarter future
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mission-purpose" aria-labelledby="mission-purpose-title">
          <div className="mission-purpose__media" aria-hidden="true">
            <img src={`${m}/purpose-a.jpg`} alt="" className="mission-purpose__img" />
            <img src={`${m}/purpose-b.jpg`} alt="" className="mission-purpose__img" />
            <img src={`${m}/purpose-c.jpg`} alt="" className="mission-purpose__img" />
          </div>
          <div className="mission-purpose__panel">
            <RevealBlock className="reveal-rise">
              <div className="mission-purpose__stack">
                <hr className="mission-rule mission-rule--charcoal" />
                <div className="mission-purpose__text">
                  <h2 id="mission-purpose-title" className="mission-display mission-display--ink">
                    Our Purpose
                  </h2>
                  <p className="mission-body mission-body--ink">
                    Our purpose is to serve as a pivotal catalyst in the transition
                    of clients to autonomous long-range battlefield operations,
                    delivering the capabilities and support needed for modern
                    warfare
                  </p>
                </div>
              </div>
            </RevealBlock>
          </div>
        </section>

        <section className="mission-values" aria-labelledby="mission-values-heading">
          <RevealBlock className="reveal-rise">
            <div className="mission-values__head">
              <h2 id="mission-values-heading" className="mission-values__label">
                Our values
              </h2>
              <div className="mission-values__icons" aria-hidden="true">
                {valuesChevronSlots.map((i) => (
                  <img
                    key={i}
                    className="mission-values__icon"
                    src={`${m}/icon-chevron.svg`}
                    alt=""
                    width={29}
                    height={16}
                  />
                ))}
              </div>
            </div>
            <div className="mission-values__grid">
              <div className="mission-values__row mission-values__row--3">
                {valuesRow1.map((item) => (
                  <article key={item.title} className="mission-values__cell">
                    <h3 className="mission-values__title">{item.title}</h3>
                    <p className="mission-values__text">{item.body}</p>
                  </article>
                ))}
              </div>
              <div className="mission-values__row mission-values__row--2">
                {valuesRow2.map((item) => (
                  <article
                    key={item.title}
                    className={
                      item.wide
                        ? "mission-values__cell mission-values__cell--wide"
                        : "mission-values__cell"
                    }
                  >
                    <h3 className="mission-values__title">{item.title}</h3>
                    <p className="mission-values__text">{item.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </RevealBlock>
        </section>

        <section className="mission-impact" aria-labelledby="mission-impact-title">
          <div className="mission-impact__panel">
            <RevealBlock className="reveal-rise">
              <div className="mission-impact__stack">
                <hr className="mission-rule mission-rule--charcoal" />
                <div className="mission-impact__text">
                  <h2 id="mission-impact-title" className="mission-display mission-display--ink">
                    Our Impact in Action
                  </h2>
                  <p className="mission-body mission-body--ink">
                    We’re not just talking about defense innovation - we’re
                    delivering cutting-edge technologies that empower our customers
                    to go further, achieve more, and reach beyond what they once
                    thought possible.
                  </p>
                </div>
              </div>
            </RevealBlock>
          </div>
          <div className="mission-impact__media" aria-hidden="true">
            <div className="mission-impact__flip">
              <div className="mission-impact__img-wrap">
                <img src={`${m}/impact.jpg`} alt="" className="mission-impact__img" />
              </div>
            </div>
          </div>
        </section>

        <section className="mission-ai" aria-labelledby="mission-ai-title">
          <div className="mission-ai__bg" aria-hidden="true">
            <div className="mission-ai__bg-base" />
            <img className="mission-ai__photo" src={`${m}/ai-bg.jpg`} alt="" />
            <div className="mission-ai__scrim" />
          </div>
          <div className="mission-ai__content">
            <RevealBlock className="reveal-rise">
              <div className="mission-ai__stack">
                <hr className="mission-rule mission-rule--cream" />
                <div className="mission-ai__text">
                  <h2 id="mission-ai-title" className="mission-display mission-display--cream">
                    Built in AI Core
                  </h2>
                  <p className="mission-body mission-body--cream">
                    Phoenix LM redefines operational autonomy with a built-in, open
                    AI framework that enables users or third-party integrators to
                    create and implement mission-specific applications in-house.
                    This capability reduces dependency, accelerates innovation
                    cycles, and supports rapid adaptation to evolving battlefield
                    needs.
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
