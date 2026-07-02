import Image from "next/image";
import { products } from "@/data/products";

const productMetrics = [
  ["Weight Index / 02", "Airflow / Active", "Reflective / Track", "Material / Shell-01"],
  ["Weight Index / 01", "Grip / Wet", "Drop / Forward", "Material / Foam-02"],
  ["Weight Index / 00", "Airflow / High", "Dry Rate / Fast", "Material / Mesh-03"],
  ["Weight Index / 02", "Support / Tuned", "Reflective / Active", "Material / Knit-04"],
];

export function ProductSystem() {
  const total = products.length.toString().padStart(2, "0");

  return (
    <section className="product-system dark-section" id="products">
      <div className="product-stage">
        <div className="product-rule" data-product-rule aria-hidden="true" />

        <div className="product-fixed">
          <p className="system-meta">SYSTEM / 01 &nbsp; MOTION INDEX</p>
          <p className="section-label">PRODUCT SCANNER</p>
          <h2>
            Product
            <br />
            Scanner.
          </h2>

          <div className="product-details" aria-live="polite">
            {products.map((product, index) => (
              <article
                className={`product-detail ${index === 0 ? "is-active" : ""}`}
                data-product-detail
                key={product.name}
              >
                <p className="product-count">
                  {product.number} / {total}
                </p>
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <ul className="product-tags">
                  {product.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="product-parameter-row">
                  <span>SCAN STATUS</span>
                  <span>WEIGHT / AIRFLOW / VISIBILITY / MATERIAL</span>
                </div>
                <dl className="product-metrics">
                  {productMetrics[index].map((metric) => {
                    const [label, value] = metric.split(" / ");
                    return (
                      <div key={metric}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    );
                  })}
                </dl>
              </article>
            ))}
          </div>
        </div>

        <div className="product-visuals">
          {products.map((product, index) => (
            <figure
              className={`product-visual ${index === 0 ? "is-active" : ""}`}
              data-product-visual
              data-product-index={product.number}
              key={product.image}
            >
              <div className="product-visual-shell" data-product-follow>
                <span className="product-scan-line" data-product-scan aria-hidden="true" />
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 780px) 100vw, 52vw"
                />
              </div>
              <dl className="product-scan-panel" aria-label={`${product.name} scanner data`}>
                {productMetrics[index].map((metric) => {
                  const [label, value] = metric.split(" / ");
                  return (
                    <div key={metric}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  );
                })}
              </dl>
              <figcaption>{product.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="product-mini-nav" aria-label="Product sequence index">
          {products.map((product, index) => (
            <button
              className={`product-mini ${index === 0 ? "is-active" : ""}`}
              data-product-thumb={index}
              key={product.name}
              type="button"
            >
              <span className="product-mini-number">{product.number}</span>
              <span className="product-mini-image" aria-hidden="true">
                <Image
                  src={product.image}
                  alt=""
                  fill
                  sizes="68px"
                />
              </span>
              <span className="product-mini-copy">
                <span>{product.category}</span>
                <strong>{product.name.replace("AEROFORM ", "")}</strong>
              </span>
            </button>
          ))}
        </div>

        <div className="product-mobile-list">
          {products.map((product) => (
            <article className="product-mobile-card" key={product.name}>
              <div>
                <p className="product-count">
                  {product.number} / {total}
                </p>
                <p className="product-category">{product.category}</p>
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <ul className="product-tags">
                  {product.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <dl className="product-metrics product-metrics-mobile">
                  {productMetrics[Number(product.number) - 1].map((metric) => {
                    const [label, value] = metric.split(" / ");
                    return (
                      <div key={metric}>
                        <dt>{label}</dt>
                        <dd>{value}</dd>
                      </div>
                    );
                  })}
                </dl>
              </div>
              <figure className="product-mobile-image">
                <span className="product-scan-line" aria-hidden="true" />
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="100vw"
                />
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
