import Image from "next/image";
import { materialStudies } from "@/data/gallery";

export function MaterialStudies() {
  return (
    <section className="materials dark-section" id="materials">
      <div className="materials-intro" data-section-title>
        <p className="eyebrow">MATERIAL STUDIES</p>
        <h2>
          Quiet Texture.
          <br />
          Active Surface.
        </h2>
        <p>
          Every surface has a function: airflow, protection, compression, or
          visibility.
        </p>
      </div>
      <div className="material-grid">
        {materialStudies.map((item) => (
          <article className="material-card" key={item.title} data-section-copy>
            <div className="material-image">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 780px) 100vw, 31vw"
              />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
