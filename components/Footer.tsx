import { ArrowRight } from "lucide-react";

const footerColumns = [
  ["System", "Products", "Material Lab", "Motion"],
  ["Field Test", "Drops", "Sizing", "Care"],
  ["Instagram", "Press", "Contact", "Privacy"],
  ["Shanghai", "Tokyo", "Seoul", "Global"],
];

export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-line" aria-hidden="true" />
      <div className="footer-top">
        <div>
          <p className="section-label">STAY IN MOTION</p>
          <p className="footer-brand-title">AEROFORM</p>
          <h2>BUILT TO MOVE LIGHTER.</h2>
          <p className="footer-cn">为更轻的行动而设计。</p>
        </div>

        <form action="#contact" className="footer-signup">
          <label htmlFor="email">Early access, product drops, and performance insights.</label>
          <div className="email-row">
            <input id="email" type="email" placeholder="Enter your email" />
            <button type="submit" aria-label="Submit email">
              <ArrowRight size={17} />
            </button>
          </div>
        </form>
      </div>

      <div className="footer-columns">
        {footerColumns.map((column, index) => (
          <nav aria-label={`Footer column ${index + 1}`} key={column.join("-")}>
            {column.map((item) => (
              <a href="#top" key={item}>
                {item}
              </a>
            ))}
          </nav>
        ))}
      </div>

      <div className="footer-wordmark" aria-hidden="true">
        AEROFORM
      </div>
      <div className="footer-bottom">
        <p>© 2026 AEROFORM. All Rights Reserved.</p>
        <p>ENGINEERED FOR MOTION</p>
      </div>
    </footer>
  );
}
