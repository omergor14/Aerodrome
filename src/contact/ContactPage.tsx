import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { RevealBlock } from "../components/RevealBlock";
import "../components/site-layout.css";
import "./contact.css";

const c = "/assets/contact";
const iconCtaChevron = "/assets/icon-cta-chevron.svg";

export function ContactPage() {
  return (
    <div className="contact" data-name="Contact" data-node-id="2045:13335">
      <SiteNav />

      <main className="contact__main">
        {/* Hero — Figma 2045:13336 */}
        <section className="contact-hero" aria-labelledby="contact-hero-title">
          <div className="contact-hero__bg" aria-hidden="true">
            <div className="contact-hero__bg-slot contact-hero__bg-slot--a">
              <img src={`${c}/hero-a.jpg`} alt="" className="contact-hero__img contact-hero__img--a" />
            </div>
            <img src={`${c}/hero-b.jpg`} alt="" className="contact-hero__img contact-hero__img--b" />
            <div className="contact-hero__bg-slot contact-hero__bg-slot--c">
              <img src={`${c}/hero-c.jpg`} alt="" className="contact-hero__img contact-hero__img--c" />
            </div>
          </div>

          <div className="contact-hero__frame">
            <div className="contact-hero__copy page-enter-hero page-hero-mission">
              <div className="page-hero-mission__stack">
                <h1 id="contact-hero-title" className="page-hero-mission__title">
                  Contact
                </h1>
                <p className="page-hero-mission__text">Ask us anything</p>
              </div>
            </div>
          </div>
        </section>

        {/* Offices — Figma 2045:13342 */}
        <section className="contact-offices" aria-label="Office locations">
          <div className="contact-offices__row">
            <div className="contact-offices__panel">
              <div className="contact-offices__panel-inner">
              <RevealBlock className="reveal-rise">
                <div className="contact-offices__stack">
                  <article className="contact-office">
                    <h2 className="contact-office__title">Israel Office</h2>
                    <div className="contact-office__body">
                      <p>Hapsagot St 4, Petah Tikva, Israel</p>
                      <p>Phone: +972-72-2608093</p>
                      <p>Email: office@aerodrome-sys.com</p>
                      <p>Hours: Sun–Thu 09:00–18:00</p>
                    </div>
                  </article>

                  <hr className="contact-offices__rule" />

                  <article className="contact-office">
                    <h2 className="contact-office__title">Singapore Office</h2>
                    <div className="contact-office__body">
                      <p>HaPa&apos;amon St 8, Petah Tikva, Israel</p>
                      <p>Phone: +972-72-2608093</p>
                      <p>Email: office@aerodrome-sys.com</p>
                      <p>Hours: Sun–Thu 09:00–18:00</p>
                    </div>
                  </article>
                </div>
              </RevealBlock>
              </div>
            </div>

            <div className="contact-offices__visual" aria-hidden="true">
              <img src={`${c}/office-d.jpg`} alt="" className="contact-offices__img" />
            </div>
          </div>
        </section>

        {/* Form band — Figma 2045:26110 */}
        <section
          id="contact-us"
          className="contact-formband"
          aria-labelledby="contact-form-title"
        >
          <div className="contact-formband__visual" aria-hidden="true">
            <div className="contact-formband__visual-bg" />
            <div className="contact-formband__visual-slot">
              <img src={`${c}/form-left.jpg`} alt="" className="contact-formband__visual-img" />
            </div>
          </div>

          <div className="contact-formband__aside" data-node-id="2045:26143">
            <div className="contact-formband__aside-inner">
              <RevealBlock className="reveal-rise">
                <h2 id="contact-form-title" className="contact-formband__heading">
                  CONTACT US
                </h2>

                <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                {/* Figma 2045:26260 — flex-col gap-24 items-start w-full */}
                <div className="contact-form__fields">
                  <label className="contact-field">
                    <span className="contact-field__label">
                      <span className="contact-field__star" aria-hidden="true">
                        *
                      </span>
                      <span className="contact-field__name">Subject</span>
                    </span>
                    <div className="contact-field__box">
                      <input
                        className="contact-field__control"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                  </label>

                  <div className="contact-form__pair">
                    <label className="contact-field">
                      <span className="contact-field__label">
                        <span className="contact-field__star" aria-hidden="true">
                          *
                        </span>
                        <span className="contact-field__name">Your full name</span>
                      </span>
                      <div className="contact-field__box">
                        <input
                          className="contact-field__control"
                          name="fullName"
                          placeholder="Name"
                          required
                        />
                      </div>
                    </label>
                    <label className="contact-field">
                      <span className="contact-field__label">
                        <span className="contact-field__star" aria-hidden="true">
                          *
                        </span>
                        <span className="contact-field__name">Organization Name</span>
                      </span>
                      <div className="contact-field__box">
                        <input
                          className="contact-field__control"
                          name="organization"
                          placeholder="Company"
                          required
                        />
                      </div>
                    </label>
                  </div>

                  <div className="contact-form__pair">
                    <label className="contact-field">
                      <span className="contact-field__label">
                        <span className="contact-field__star" aria-hidden="true">
                          *
                        </span>
                        <span className="contact-field__name">Role</span>
                      </span>
                      <div className="contact-field__box">
                        <input
                          className="contact-field__control"
                          name="role"
                          placeholder="Position"
                          required
                        />
                      </div>
                    </label>
                    <label className="contact-field">
                      <span className="contact-field__label">
                        <span className="contact-field__star" aria-hidden="true">
                          *
                        </span>
                        <span className="contact-field__name">Email</span>
                      </span>
                      <div className="contact-field__box">
                        <input
                          className="contact-field__control"
                          name="email"
                          type="email"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </label>
                  </div>

                  <label className="contact-field contact-field--textarea">
                    <span className="contact-field__label contact-field__label--details">
                      <span className="contact-field__name">Request details</span>
                      <span className="contact-field__optional">(optional)</span>
                    </span>
                    <div className="contact-field__textarea-box">
                      <textarea
                        className="contact-field__textarea"
                        name="details"
                        placeholder="Tell us more... (optional)"
                        rows={2}
                      />
                      <img
                        className="contact-field__resizer"
                        src={`${c}/form-resizer.png`}
                        alt=""
                        aria-hidden="true"
                      />
                    </div>
                  </label>
                </div>

                <div className="contact-form__actions">
                  <button type="submit" className="contact-form__send">
                    <span>SEND</span>
                    <img src={iconCtaChevron} alt="" aria-hidden="true" />
                  </button>
                </div>
              </form>
              </RevealBlock>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
