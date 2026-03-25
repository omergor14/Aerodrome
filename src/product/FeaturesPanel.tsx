import { featureRows } from "./featuresData";

export function FeaturesPanel() {
  return (
    <div className="product-features">
      {featureRows.map((row, i) => {
        const reverse = !row.imageLeft;
        return (
          <section
            key={row.title}
            className={
              reverse
                ? "feature-split feature-split--reverse"
                : "feature-split"
            }
            aria-labelledby={`feat-${i}`}
          >
            <div className="feature-split__media">
              <img src={row.image} alt="" />
            </div>
            <div className="feature-split__copy">
              <hr className="feature-split__rule" />
              <h2 id={`feat-${i}`} className="feature-split__title">
                {row.title}
              </h2>
              <p className="feature-split__body">{row.body}</p>
            </div>
          </section>
        );
      })}
    </div>
  );
}
