import Image from "next/image";
import { technology } from "@/data/technology";

export function Technology() {
  return (
    <section className="material-lab light-section" id="technology">
      <div className="lab-shell">
        <aside className="lab-sticky">
          <p className="system-meta">MATERIAL STUDY / FIELD TEST</p>
          <p className="section-label">MATERIAL LAB</p>
          <h2>
            MATERIAL
            <br />
            ARCHIVE
          </h2>
          <p>
            A technical archive of shell, mesh, reflective surfaces, and motion
            cuts. Only details that improve the run stay in the system.
          </p>
        </aside>

        <div className="lab-modules">
          {technology.map((item) => (
            <article className="lab-module" data-lab-module key={item.number}>
              <div className="lab-copy">
                <span data-lab-number>{item.number}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="lab-line" data-lab-line />
              <figure className="lab-image" data-lab-image>
                <span className="lab-scan-line" data-lab-scan aria-hidden="true" />
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 780px) 100vw, 48vw"
                />
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
