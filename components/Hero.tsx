import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { withBasePath } from "@/lib/paths";

export function Hero() {
  return (
    <section className="hero dark-section" id="top" data-hero-scene>
      <div className="hero-stage">
        <span className="hero-anchor-line" data-hero-anchor aria-hidden="true" />
        <span className="hero-motion-trace" data-hero-trace aria-hidden="true" />

        <div className="hero-media" data-hero-media>
          <Image
            src={withBasePath("/assets/hero/hero-runner.png")}
            alt="A runner in black AEROFORM gear moving through concrete light"
            fill
            priority
            sizes="(max-width: 780px) 100vw, 62vw"
          />
        </div>

        <div className="hero-copy">
          <p className="hero-kicker" data-hero-kicker>
            LIGHTWEIGHT RUNNING SYSTEM
          </p>
          <h1 aria-label="Engineered for motion">
            <span className="hero-line hero-line-left" data-hero-line="left">
              MOTION
            </span>
            <span className="hero-line hero-line-right" data-hero-line="right">
              ENGINEERED
            </span>
          </h1>
          <p className="hero-chinese" data-hero-copy>
            工程化轻量跑步系统
          </p>
          <p className="hero-body" data-hero-copy>
            A motion lab for lightweight running gear, urban movement imagery,
            material scans, and technical details calibrated for forward motion.
          </p>
          <div className="hero-actions" data-hero-actions>
            <a className="button button-primary" href="#products">
              Explore System
              <ArrowRight size={16} />
            </a>
            <a className="button button-secondary" href="#technology">
              View Technology
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <aside className="hero-side" data-hero-side aria-label="System metadata">
          <span>SYSTEM 01</span>
          <span>2026 CAPSULE</span>
          <span>BODY IN MOTION</span>
        </aside>

        <div className="hero-bottom">
          <span>Scroll to Move</span>
          <span>01 / 06</span>
        </div>

        <div className="hero-track" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
