import { ArrowRight } from "lucide-react";

const indexRows = [
  {
    number: "01",
    title: "Shell Layer",
    detail: "Packable weather resistance for variable city miles.",
    meta: "Apparel / protection",
    href: "#products",
  },
  {
    number: "02",
    title: "Ground Contact",
    detail: "Soft landing geometry tuned for daily distance.",
    meta: "Footwear / propulsion",
    href: "#products",
  },
  {
    number: "03",
    title: "Heat Release",
    detail: "Open-knit zones reduce drag from trapped warmth.",
    meta: "Base layer / airflow",
    href: "#technology",
  },
  {
    number: "04",
    title: "Night Signal",
    detail: "Low-light details stay quiet until they are needed.",
    meta: "Visibility / motion",
    href: "#motion",
  },
];

export function PerformanceIndex() {
  return (
    <section
      className="performance-index section-shell light-section"
      id="index"
      data-section
    >
      <div className="section-meta">
        <span>02</span>
        <p>FIELD INDEX</p>
      </div>
      <div className="index-heading" data-section-title>
        <p className="eyebrow">SYSTEM AVAILABILITY</p>
        <h2>
          Field Tested.
          <br />
          City Ready.
        </h2>
      </div>
      <div className="index-list" aria-label="AEROFORM system index">
        {indexRows.map((row) => (
          <a className="index-row" href={row.href} key={row.number} data-index-row>
            <span>{row.number}</span>
            <strong>{row.title}</strong>
            <p>{row.detail}</p>
            <small>{row.meta}</small>
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        ))}
      </div>
    </section>
  );
}
