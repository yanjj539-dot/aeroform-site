import Image from "next/image";
import { galleryImages } from "@/data/gallery";

const parallax = ["120", "-60", "80", "-90", "54"];

export function MotionGallery() {
  return (
    <section className="motion-gallery dark-section" id="motion">
      <div className="motion-shell">
        <div className="gallery-heading" data-section-title>
          <p className="system-meta">URBAN RUNNING / EDIT 04</p>
          <p className="section-label">MOTION GALLERY</p>
          <h2>
            Movement
            <br />
            Defines Us
          </h2>
          <p>
            Running is not a pose. It is a sequence of impact, breath,
            recovery, and forward drive.
          </p>
          <div className="gallery-sequence" aria-hidden="true">
            <span>01 / Impact</span>
            <span>02 / Breath</span>
            <span>03 / Recovery</span>
            <span>04 / Forward</span>
          </div>
        </div>

        <div className="gallery-stream">
          {galleryImages.map((image, index) => (
            <figure
              className={`gallery-tile gallery-tile-${index + 1}`}
              data-gallery-tile
              data-parallax={parallax[index]}
              key={image.src}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 780px) 100vw, 42vw"
              />
              <figcaption>{image.caption}</figcaption>
              <span className="gallery-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")} /{" "}
                {["IMPACT", "BREATH", "RECOVERY", "FORWARD", "DETAIL"][index]}
              </span>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
