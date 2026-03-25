import { useState } from "react";
import { specificationSections } from "./specData";

const p = "/assets/product";

type SwatchId = "black" | "camo" | "grey" | "camel";

type Swatch = {
  id: SwatchId;
  label: string;
  swatchSrc: string;
  heroSrc: string;
};

const swatches: Swatch[] = [
  {
    id: "black",
    label: "Black",
    swatchSrc: `${p}/swatch-black.svg`,
    heroSrc: `${p}/spec-phoenix-black.png`,
  },
  {
    id: "camo",
    label: "Camouflage",
    swatchSrc: `${p}/swatch-camo.svg`,
    heroSrc: `${p}/spec-phoenix-camouflage.png`,
  },
  {
    id: "grey",
    label: "Grey",
    swatchSrc: `${p}/swatch-grey.png`,
    heroSrc: `${p}/spec-phoenix-grey.png`,
  },
  {
    id: "camel",
    label: "Camel",
    swatchSrc: `${p}/swatch-camel.svg`,
    heroSrc: `${p}/spec-phoenix-camel.png`,
  },
];

export function SpecificationsPanel() {
  const [selectedId, setSelectedId] = useState<SwatchId>("grey");

  const active =
    swatches.find((s) => s.id === selectedId) ?? swatches[2];

  return (
    <div className="spec-stack">
      {specificationSections.map((section) => (
        <section
          key={section.title}
          className="spec-section"
          aria-labelledby={`spec-${section.title}`}
        >
          <h2 id={`spec-${section.title}`} className="spec-section__title">
            {section.title}
          </h2>
          <div className="spec-rows">
            {section.rows.map((row, i) => (
              <div key={row.label}>
                <div className="spec-row">
                  <p className="spec-row__label">{row.label}</p>
                  <p className="spec-row__value">{row.value}</p>
                </div>
                {i < section.rows.length - 1 ? (
                  <hr className="spec-row__divider" />
                ) : null}
              </div>
            ))}
          </div>
        </section>
      ))}

      <div className="spec-showcase">
        <div className="spec-showcase__frame">
          <div className="spec-showcase__image-wrap">
            <img
              src={active.heroSrc}
              alt={`Phoenix LT — ${active.label} finish`}
            />
          </div>
          <div
            className="spec-swatches"
            role="group"
            aria-label="Product finish"
          >
            {swatches.map((s) => (
              <button
                key={s.id}
                type="button"
                className={
                  selectedId === s.id
                    ? "spec-swatch spec-swatch--active"
                    : "spec-swatch"
                }
                onClick={() => setSelectedId(s.id)}
                aria-pressed={selectedId === s.id}
                aria-label={`Show ${s.label} finish`}
              >
                <img src={s.swatchSrc} alt="" aria-hidden />
                <span>{s.label}</span>
              </button>
            ))}
          </div>
          <div className="spec-showcase__copy">
            <h3 className="spec-showcase__copy-title">Phoenix LT</h3>
            <div className="spec-showcase__copy-body">
              <p>
                The Phoenix LT is a next-generation long-range UAV platform that
                brings cruise-missile technology into an ultra-simple operational
                package. Built for precision strike and persistent missions, it
                pairs an elastic Target Management System (TMS) with an onboard AI
                computer and open-access tools, allowing operators to train and
                adapt the system to new operational scenarios—maximizing mission
                fit and tactical advantage.
              </p>
              <p>
                If your mission profile demands custom configurations or
                engineering adaptations, our team stands ready to deliver.
                Contact our sales department to discuss tailored solutions and
                receive a dedicated NRE (Non-Recurring Engineering) proposal
                designed around your specific operational needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
