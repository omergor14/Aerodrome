import { useRef } from "react";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { RevealBlock } from "../components/RevealBlock";
import { useStockQuote } from "../hooks/useStockQuote";
import { formatUsd } from "../lib/yahooChartQuote";
import { TrendArrowIcon } from "./TrendArrowIcon";
import "../components/site-layout.css";
import "./investors.css";

const a = "/assets/investors";
const iconArrowDown = "/assets/icon-arrow-down.svg";
const STOCK_SYMBOL = "ARDM.TA";
const STOCK_YAHOO_URL = `https://finance.yahoo.com/quote/${encodeURIComponent(STOCK_SYMBOL)}`;

const articles = [
  {
    id: "1",
    title:
      "Aerodrome: Former Mossad chief and the controlling shareholders of Israel Canada join the control group.",
    href: "https://www.sponser.co.il/Article.aspx?ArticleId=121386",
    layered: true as const,
    images: [`${a}/article-1a.jpg`, `${a}/article-1b.jpg`],
  },
  {
    id: "2",
    title:
      "Aerodrome: A major American drone company to invest approximately NIS 9.2 million and establish a North American marketing arm.",
    href: "https://www.bizportal.co.il/capitalmarket/news/article/20028806",
    layered: false as const,
    images: [`${a}/article-2.jpg`],
    crop: true,
  },
  {
    id: "3",
    title:
      "Former Mossad chief and two real estate stars join this defense company, sending the stock soaring.",
    href: "https://www.globes.co.il/news/article.aspx?did=1001538112",
    layered: false as const,
    images: [`${a}/article-1a.jpg`],
  },
];

export function InvestorsPage() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stock = useStockQuote(STOCK_SYMBOL);

  const scrollByCards = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>(".investors-card");
    const delta = (card?.offsetWidth ?? 360) + 40;
    el.scrollBy({ left: direction * delta, behavior: "smooth" });
  };

  return (
    <div className="investors" data-name="Investors (Articles)" data-node-id="2034:9888">
      <SiteNav />
      <div className="investors__main">
        <section className="investors-hero" aria-labelledby="investors-hero-title">
          <div className="investors-hero__bg" aria-hidden="true">
            <img
              className="investors-hero__bg-img--a"
              src={`${a}/hero-a.jpg`}
              alt=""
            />
            <img
              className="investors-hero__bg-img--b"
              src={`${a}/hero-b.jpg`}
              alt=""
            />
          </div>
          <div className="investors-hero__row page-enter-hero">
            <div className="investors-hero__copy page-hero-mission">
              <div className="page-hero-mission__stack">
                <h1 id="investors-hero-title" className="page-hero-mission__title">
                  Investors
                </h1>
                <p className="page-hero-mission__text">
                  Access key reports, financial updates, and insights that reflect
                  our commitment to transparency and long-term growth
                </p>
              </div>
            </div>
            <aside
              className="investors-stock"
              aria-label="Stock quote"
              aria-busy={stock.status === "loading"}
              aria-live="polite"
            >
              <p className="investors-stock__label">{STOCK_SYMBOL} Stock</p>
              {stock.status === "loading" || stock.status === "idle" ? (
                <>
                  <p className="investors-stock__price investors-stock__price--pending">
                    —
                  </p>
                  <p className="investors-stock__hint">Loading quote…</p>
                </>
              ) : stock.status === "error" ? (
                <>
                  <p className="investors-stock__price investors-stock__price--pending">
                    —
                  </p>
                  <p className="investors-stock__hint">
                    Live quote unavailable.{" "}
                    <a
                      className="investors-stock__hint-link"
                      href={STOCK_YAHOO_URL}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      View on Yahoo Finance
                    </a>
                  </p>
                </>
              ) : stock.status === "ok" ? (
                <>
                  <p className="investors-stock__price">
                    {formatUsd(stock.quote.priceUsd)}
                  </p>
                  <div className="investors-stock__change">
                    <TrendArrowIcon
                      direction={stock.quote.changeUsd < 0 ? "down" : "up"}
                    />
                    <p
                      className={
                        stock.quote.changeUsd < 0
                          ? "investors-stock__delta investors-stock__delta--down"
                          : "investors-stock__delta"
                      }
                    >
                      {stock.quote.changeUsd >= 0 ? "+" : ""}
                      {formatUsd(stock.quote.changeUsd)} (
                      {stock.quote.changePercent >= 0 ? "+" : ""}
                      {stock.quote.changePercent.toFixed(2)}%)
                    </p>
                  </div>
                </>
              ) : null}
            </aside>
          </div>
        </section>

        <section className="investors-articles" aria-labelledby="investors-articles-title">
          <RevealBlock className="reveal-rise">
            <div className="investors-articles__head">
              <h2 id="investors-articles-title" className="investors-articles__title">
                Articles
              </h2>
              <div className="investors-articles__nav">
                <button
                  type="button"
                  className="investors-articles__nav-btn investors-articles__nav-btn--prev"
                  aria-label="Scroll articles left"
                  onClick={() => scrollByCards(-1)}
                >
                  <img src={`${a}/chevron-prev.svg`} alt="" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="investors-articles__nav-btn"
                  aria-label="Scroll articles right"
                  onClick={() => scrollByCards(1)}
                >
                  <img src={`${a}/chevron-next.svg`} alt="" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div
              className="investors-articles__scroller"
              ref={scrollerRef}
              role="list"
            >
            {articles.map((item) => (
              <article key={item.id} className="investors-card" role="listitem">
                <div
                  className={
                    item.layered
                      ? "investors-card__media investors-card__media--layered"
                      : item.crop
                        ? "investors-card__media investors-card__media--crop"
                        : "investors-card__media"
                  }
                >
                  {item.layered ? (
                    <>
                      <img src={item.images[0]} alt="" />
                      <img
                        className="investors-card__media-front"
                        src={item.images[1]}
                        alt=""
                      />
                    </>
                  ) : (
                    <img
                      src={item.images[0]}
                      alt=""
                      className={
                        item.crop ? "investors-card__img-single" : undefined
                      }
                    />
                  )}
                </div>
                <div className="investors-card__body">
                  <h3 className="investors-card__headline">{item.title}</h3>
                  <a
                    className="investors-card__link"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Read More
                    <img src={iconArrowDown} alt="" aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
            </div>
          </RevealBlock>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
