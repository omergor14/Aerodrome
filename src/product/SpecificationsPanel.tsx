import { useEffect, useMemo, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";
import { specificationSections, type SpecSection } from "./specData";
import {
  buildCountUpDisplay,
  hasNumericTokens,
  parseSpecValue,
} from "./specValueParse";

const p = "/assets/product";

const TYPING_MS = 22;
const TITLE_PAD_MS = 140;
const ROW_STAGGER_MS = 90;
const VALUE_AFTER_LABEL_MS = 70;

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

function TypingText({
  text,
  active,
  reducedMotion,
}: {
  text: string;
  active: boolean;
  reducedMotion: boolean;
}) {
  const [n, setN] = useState(() =>
    reducedMotion && active ? text.length : 0
  );

  useEffect(() => {
    if (reducedMotion) {
      setN(active ? text.length : 0);
      return;
    }
    if (!active) {
      setN(0);
      return;
    }
    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) window.clearInterval(id);
    }, TYPING_MS);
    return () => window.clearInterval(id);
  }, [active, text, reducedMotion]);

  const showCaret = active && n < text.length && !reducedMotion;

  return (
    <>
      <span className="spec-sr-only">{text}</span>
      <span aria-hidden>
        {text.slice(0, n)}
        {showCaret ? <span className="spec-typing-caret" /> : null}
      </span>
    </>
  );
}

function AnimatedSpecValue({
  value,
  active,
  reducedMotion,
}: {
  value: string;
  active: boolean;
  reducedMotion: boolean;
}) {
  const segments = useMemo(() => parseSpecValue(value), [value]);
  const numeric = useMemo(() => hasNumericTokens(value), [value]);
  const [progress, setProgress] = useState(() =>
    reducedMotion && active ? 1 : 0
  );

  useEffect(() => {
    if (reducedMotion) {
      setProgress(active ? 1 : 0);
      return;
    }
    if (!active) {
      setProgress(0);
      return;
    }
    if (!numeric) {
      setProgress(1);
      return;
    }
    let start: number | null = null;
    const numCount = segments.filter((s) => s.kind === "num").length;
    const duration = Math.min(1700, 520 + numCount * 240);
    let raf = 0;
    const easeOutQuad = (t: number) => 1 - (1 - t) * (1 - t);
    const tick = (now: number) => {
      if (start === null) start = now;
      const t = Math.min(1, (now - start) / duration);
      setProgress(easeOutQuad(t));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, reducedMotion, numeric, segments]);

  const display = !numeric
    ? active
      ? value
      : ""
    : buildCountUpDisplay(segments, progress);

  return (
    <>
      <span className="spec-sr-only">{value}</span>
      <span aria-hidden>{display}</span>
    </>
  );
}

function SpecAnimatedRow({
  label,
  value,
  rowIndex,
  rowsUnlocked,
  reducedMotion,
  showDivider,
}: {
  label: string;
  value: string;
  rowIndex: number;
  rowsUnlocked: boolean;
  reducedMotion: boolean;
  showDivider: boolean;
}) {
  const [rowGo, setRowGo] = useState(false);
  const [valueGo, setValueGo] = useState(false);

  useEffect(() => {
    if (!rowsUnlocked) {
      setRowGo(false);
      setValueGo(false);
      return;
    }
    if (reducedMotion) {
      setRowGo(true);
      setValueGo(true);
      return;
    }
    const t = window.setTimeout(() => setRowGo(true), rowIndex * ROW_STAGGER_MS);
    return () => window.clearTimeout(t);
  }, [rowsUnlocked, reducedMotion, rowIndex]);

  useEffect(() => {
    if (!rowGo) {
      setValueGo(false);
      return;
    }
    if (reducedMotion) {
      setValueGo(true);
      return;
    }
    const labelMs = Math.min(label.length * TYPING_MS, 1400);
    const t = window.setTimeout(
      () => setValueGo(true),
      labelMs + VALUE_AFTER_LABEL_MS
    );
    return () => window.clearTimeout(t);
  }, [rowGo, reducedMotion, label]);

  return (
    <div>
      <div className="spec-row">
        <p className="spec-row__label">
          <TypingText
            text={label}
            active={rowGo}
            reducedMotion={reducedMotion}
          />
        </p>
        <p className="spec-row__value">
          <AnimatedSpecValue
            value={value}
            active={valueGo}
            reducedMotion={reducedMotion}
          />
        </p>
      </div>
      {showDivider ? <hr className="spec-row__divider" /> : null}
    </div>
  );
}

function SpecAnimatedSection({ section }: { section: SpecSection }) {
  const [ref, visible] = useScrollReveal<HTMLElement>(0.12);
  const reducedMotion = usePrefersReducedMotion();
  const [rowsUnlocked, setRowsUnlocked] = useState(false);

  useEffect(() => {
    if (!visible) {
      setRowsUnlocked(false);
      return;
    }
    if (reducedMotion) {
      setRowsUnlocked(true);
      return;
    }
    const titleMs = Math.min(section.title.length * TYPING_MS, 900);
    const t = window.setTimeout(
      () => setRowsUnlocked(true),
      titleMs + TITLE_PAD_MS
    );
    return () => window.clearTimeout(t);
  }, [visible, reducedMotion, section.title.length]);

  const titleId = `spec-${section.title.replace(/\s+/g, "-")}`;

  return (
    <section
      ref={ref}
      className="spec-section"
      aria-labelledby={titleId}
    >
      <h2 id={titleId} className="spec-section__title">
        <TypingText
          text={section.title}
          active={visible}
          reducedMotion={reducedMotion}
        />
      </h2>
      <div className="spec-rows">
        {section.rows.map((row, i) => (
          <SpecAnimatedRow
            key={row.label}
            label={row.label}
            value={row.value}
            rowIndex={i}
            rowsUnlocked={rowsUnlocked}
            reducedMotion={reducedMotion}
            showDivider={i < section.rows.length - 1}
          />
        ))}
      </div>
    </section>
  );
}

export function SpecificationsPanel() {
  const [selectedId, setSelectedId] = useState<SwatchId>("grey");

  const active =
    swatches.find((s) => s.id === selectedId) ?? swatches[2];

  return (
    <div className="spec-stack">
      {specificationSections.map((section) => (
        <SpecAnimatedSection key={section.title} section={section} />
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
