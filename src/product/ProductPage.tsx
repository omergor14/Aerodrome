import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { RevealBlock } from "../components/RevealBlock";
import { OverviewPanel } from "./OverviewPanel";
import { FeaturesPanel } from "./FeaturesPanel";
import { SpecificationsPanel } from "./SpecificationsPanel";
import "../components/site-layout.css";
import "./product.css";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "features", label: "Features" },
  { id: "specifications", label: "Specifications" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function normalizeTab(raw: string | null): TabId {
  if (raw === "features" || raw === "specifications") return raw;
  return "overview";
}

const hero = "/assets/product/ov-hero.jpg";
const iconUpload = "/assets/product/icon-upload.svg";
const specPdf = "/assets/product/phoenix-lt-spec.pdf";

export function ProductPage() {
  const [params, setParams] = useSearchParams();
  const tab = normalizeTab(params.get("tab"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tab]);

  const setTab = (id: TabId) => {
    setParams(id === "overview" ? {} : { tab: id });
  };

  return (
    <div className="product">
      <SiteNav />
      <div className="product__main">
        <section className="product-hero" aria-labelledby="product-hero-title">
          <div className="product-hero__bg" aria-hidden="true">
            <img src={hero} alt="" />
          </div>
          <div className="product-hero__content">
            <div className="page-enter-hero product-hero__page-enter">
              <div className="page-hero-mission__stack">
                <h1 id="product-hero-title" className="page-hero-mission__title">
                  Phoenix LT
                </h1>
                <p className="page-hero-mission__text">
                  An advanced AI-enabled UAV system designed for long-range
                  precision strikes with minimal operator input and maximum mission
                  impact
                </p>
              </div>
              <a
                href={specPdf}
                download="Phoenix LT SPEC.pdf"
                className="product-hero__download"
              >
                Download Spec
                <img src={iconUpload} alt="" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <div
          className="product-tabs"
          role="tablist"
          aria-label="Product sections"
        >
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              className={
                tab === id
                  ? "product-tabs__btn product-tabs__btn--active"
                  : "product-tabs__btn"
              }
              onClick={() => setTab(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <div role="tabpanel" id={`panel-${tab}`} aria-live="polite">
          <RevealBlock className="reveal-rise" key={tab}>
            {tab === "overview" && <OverviewPanel />}
            {tab === "features" && <FeaturesPanel />}
            {tab === "specifications" && <SpecificationsPanel />}
          </RevealBlock>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
