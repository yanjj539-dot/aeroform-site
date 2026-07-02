"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScroll({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return;
    }

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.matchMedia("(max-width: 780px)").matches;
    let lenis: Lenis | undefined;
    let animationFrame = 0;
    const cleanupFns: Array<() => void> = [];

    if (!reduceMotion && !isMobile) {
      lenis = new Lenis({
        duration: 1.08,
        lerp: 0.09,
        smoothWheel: true,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        animationFrame = requestAnimationFrame(raf);
      };

      animationFrame = requestAnimationFrame(raf);
      lenis.on("scroll", ScrollTrigger.update);
    }

    const context = gsap.context(() => {
      const mm = gsap.matchMedia();
      cleanupFns.push(() => mm.revert());

      if (!reduceMotion) {
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .fromTo(
            "[data-intro-logo]",
            { autoAlpha: 0 },
            { autoAlpha: 1, duration: 0.28 },
          )
          .fromTo(
            "[data-intro-kicker]",
            { autoAlpha: 0, letterSpacing: "24px" },
            { autoAlpha: 1, letterSpacing: "12px", duration: 0.5 },
            "-=0.06",
          )
          .to("[data-intro-loader]", {
            autoAlpha: 0,
            duration: 0.38,
            delay: 0.24,
            pointerEvents: "none",
          });
      } else {
        gsap.set("[data-intro-loader]", { autoAlpha: 0, pointerEvents: "none" });
      }

      if (!reduceMotion) {
        gsap
          .timeline({
            defaults: { ease: "power4.out" },
            delay: 0.72,
          })
          .fromTo(
            "[data-hero-media]",
            {
              autoAlpha: 0.2,
              clipPath: "polygon(18% 12%, 90% 8%, 84% 88%, 10% 92%)",
              filter: "brightness(0.72)",
              scale: 1.08,
            },
            {
              autoAlpha: 1,
              clipPath: "polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)",
              filter: "brightness(1)",
              scale: 1,
              duration: 1.15,
              ease: "expo.out",
            },
          )
          .from(
            "[data-load-fade]",
            {
              y: -14,
              autoAlpha: 0,
              duration: 0.62,
              ease: "power3.out",
            },
            "-=0.88",
          )
          .from(
            "[data-hero-anchor]",
            {
              scaleX: 0,
              duration: 0.82,
              transformOrigin: "left",
              ease: "power3.out",
            },
            "-=0.62",
          )
          .fromTo(
            "[data-hero-trace]",
            { scaleX: 0.12, autoAlpha: 0 },
            {
              scaleX: 0.56,
              autoAlpha: 1,
              duration: 0.92,
              ease: "power3.out",
            },
            "-=0.58",
          )
          .from(
            "[data-hero-kicker]",
            {
              y: 18,
              autoAlpha: 0,
              duration: 0.55,
              ease: "power3.out",
            },
            "-=0.46",
          )
          .from(
            "[data-hero-line]",
            {
              y: 48,
              autoAlpha: 0,
              clipPath: "inset(0 0 100% 0)",
              duration: 0.9,
              stagger: 0.12,
              ease: "expo.out",
            },
            "-=0.28",
          )
          .from(
            "[data-hero-copy]",
            {
              y: 24,
              autoAlpha: 0,
              duration: 0.65,
              ease: "power3.out",
            },
            "-=0.32",
          )
          .from(
            "[data-hero-actions]",
            {
              y: 18,
              autoAlpha: 0,
              duration: 0.45,
              ease: "power3.out",
            },
            "-=0.18",
          )
          .from(
            "[data-hero-side], .hero-bottom",
            {
              autoAlpha: 0,
              duration: 0.55,
              stagger: 0.08,
              ease: "power3.out",
            },
            "-=0.32",
          );
      }

      gsap.utils.toArray<HTMLElement>("[data-section-title]").forEach((item) => {
        const splitTitle = item.querySelectorAll("h2 span");
        const title = item.querySelector("h2");
        const titleTargets = splitTitle.length
          ? Array.from(splitTitle)
          : title
            ? [title]
            : [item];
        const supportTargets = item.querySelectorAll(
          ".section-label, p, .gallery-sequence",
        );

        gsap.from(titleTargets, {
          y: reduceMotion ? 0 : 48,
          clipPath: reduceMotion ? "inset(0)" : "inset(0 0 100% 0)",
          autoAlpha: reduceMotion ? 1 : 0,
          immediateRender: false,
          duration: reduceMotion ? 0.01 : 0.9,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: item,
            start: "top 82%",
            once: true,
          },
        });

        if (supportTargets.length) {
          gsap.from(supportTargets, {
            y: reduceMotion ? 0 : 24,
            autoAlpha: reduceMotion ? 1 : 0,
            immediateRender: false,
            duration: reduceMotion ? 0.01 : 0.65,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              once: true,
            },
          });
        }
      });

      gsap.utils.toArray<HTMLElement>("[data-section-copy]").forEach((item) => {
        gsap.from(item, {
          y: reduceMotion ? 0 : 32,
          autoAlpha: reduceMotion ? 1 : 0,
          immediateRender: false,
          duration: reduceMotion ? 0.01 : 0.72,
          ease: "power3.out",
          scrollTrigger: {
          trigger: item,
          start: "top 86%",
          once: true,
          },
        });
      });

      mm.add("(min-width: 781px)", () => {
        if (reduceMotion) {
          return;
        }

        gsap
          .timeline({
            scrollTrigger: {
              trigger: "[data-hero-scene]",
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          })
          .to(
            "[data-hero-media]",
            {
              clipPath: "polygon(4% 0%, 100% 0%, 96% 100%, 0% 100%)",
              y: 108,
              scale: 1.1,
              ease: "none",
            },
            0,
          )
          .to(
            '[data-hero-line="left"]',
            { x: -120, autoAlpha: 0.45, ease: "none" },
            0,
          )
          .to(
            '[data-hero-line="right"]',
            { x: 120, autoAlpha: 0.45, ease: "none" },
            0,
          )
          .to(
            "[data-hero-side]",
            { y: -60, autoAlpha: 0, ease: "none" },
            0,
          )
          .to(
            "[data-hero-trace]",
            { scaleX: 1, autoAlpha: 0.68, ease: "none" },
            0,
          );

        gsap.to("[data-philosophy-ghost]", {
          y: -120,
          ease: "none",
          scrollTrigger: {
            trigger: ".philosophy",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        const details = gsap.utils.toArray<HTMLElement>("[data-product-detail]");
        const visuals = gsap.utils.toArray<HTMLElement>("[data-product-visual]");
        const thumbs = gsap.utils.toArray<HTMLElement>("[data-product-thumb]");

        gsap.set(details.slice(1), { autoAlpha: 0, y: 24 });
        gsap.set("[data-product-scan], [data-lab-scan]", { scaleX: 0 });
        gsap.set(visuals[0], { filter: "blur(0px)", scale: 1 });
        gsap.set(visuals.slice(1), {
          autoAlpha: 0,
          filter: "blur(8px)",
          scale: 1.06,
        });
        gsap.set(thumbs.slice(1), { opacity: 0.46 });

        const productSection =
          document.querySelector<HTMLElement>(".product-system");
        if (productSection && thumbs.length > 1) {
          thumbs.forEach((thumb, index) => {
            const onClick = () => {
              const scrollable =
                productSection.scrollHeight - window.innerHeight;
              const progress = index / (thumbs.length - 1);
              const target = productSection.offsetTop + scrollable * progress;
              if (lenis) {
                lenis.scrollTo(target, {
                  duration: 1.08,
                  easing: (value: number) => 1 - Math.pow(1 - value, 3),
                });
              } else {
                window.scrollTo({ top: target, behavior: "smooth" });
              }
            };
            thumb.addEventListener("click", onClick);
            cleanupFns.push(() => thumb.removeEventListener("click", onClick));
          });
        }

        const productTl = gsap.timeline({
          scrollTrigger: {
            trigger: ".product-system",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        productTl.fromTo(
          "[data-product-rule]",
          { scaleX: 0 },
          { scaleX: 1, ease: "none", duration: details.length },
          0,
        );

        const firstScan = visuals[0]?.querySelector("[data-product-scan]");
        if (firstScan) {
          productTl.fromTo(
            firstScan,
            { scaleX: 0 },
            { scaleX: 1, duration: 0.6, ease: "power3.out" },
            0.18,
          );
        }

        for (let index = 1; index < details.length; index += 1) {
          const position = index - 0.25;
          const nextText = details[index].querySelectorAll(
            ".product-count, .product-category, h3, .product-description, .product-tags, .product-parameter-row, .product-metrics",
          );
          const nextScan = visuals[index].querySelector("[data-product-scan]");
          productTl
            .to(
              details[index - 1],
              { autoAlpha: 0, y: -20, duration: 0.38, ease: "power3.out" },
              position,
            )
            .to(
              visuals[index - 1],
              {
                autoAlpha: 0,
                filter: "blur(6px)",
                scale: 0.96,
                duration: 0.42,
                ease: "power3.out",
              },
              position,
            )
            .to(
              thumbs[index - 1],
              { opacity: 0.46, duration: 0.28, ease: "power3.out" },
              position,
            )
            .set(details[index], { autoAlpha: 1, y: 0 }, position + 0.12)
            .to(
              thumbs[index],
              { opacity: 1, duration: 0.34, ease: "power3.out" },
              position + 0.08,
            )
            .fromTo(
              visuals[index],
              { autoAlpha: 0, filter: "blur(6px)", scale: 1.06 },
              {
                autoAlpha: 1,
                filter: "blur(0px)",
                scale: 1,
                duration: 0.52,
                ease: "power4.out",
              },
              position + 0.1,
            )
            .fromTo(
              nextText,
              { autoAlpha: 0, y: 24 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.48,
                stagger: 0.08,
                ease: "power3.out",
              },
              position + 0.16,
            );
          if (nextScan) {
            productTl.fromTo(
              nextScan,
              { scaleX: 0 },
              { scaleX: 1, duration: 0.62, ease: "power3.out" },
              position + 0.34,
            );
          }
        }

        gsap.utils
          .toArray<HTMLElement>("[data-product-follow]")
          .forEach((item) => {
            const onMove = (event: PointerEvent) => {
              const rect = item.getBoundingClientRect();
              const x = (event.clientX - rect.left - rect.width / 2) * 0.035;
              const y = (event.clientY - rect.top - rect.height / 2) * 0.035;
              gsap.to(item, { x, y, duration: 0.36, ease: "power3.out" });
            };
            const onLeave = () => {
              gsap.to(item, { x: 0, y: 0, duration: 0.45, ease: "power3.out" });
            };
            item.addEventListener("pointermove", onMove);
            item.addEventListener("pointerleave", onLeave);
            cleanupFns.push(() => {
              item.removeEventListener("pointermove", onMove);
              item.removeEventListener("pointerleave", onLeave);
            });
          });

        gsap.utils.toArray<HTMLElement>("[data-lab-module]").forEach((module) => {
          gsap.fromTo(
            module.querySelector("[data-lab-number]"),
            {
              autoAlpha: 0,
              color: "#7c7970",
              letterSpacing: "0.12em",
              y: 16,
            },
            {
              autoAlpha: 1,
              color: "#d6ff00",
              letterSpacing: "0.04em",
              y: 0,
              duration: 0.7,
              ease: "power3.out",
              scrollTrigger: {
                trigger: module,
                start: "top 68%",
                toggleActions: "play reverse play reverse",
              },
            },
          );

          gsap.from(module.querySelector("[data-lab-line]"), {
            scaleX: 0,
            transformOrigin: "left",
            immediateRender: false,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: module,
              start: "top 72%",
              once: true,
            },
          });

          gsap.from(module.querySelector("[data-lab-image]"), {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            immediateRender: false,
            duration: 1,
            ease: "expo.out",
            scrollTrigger: {
              trigger: module,
              start: "top 72%",
              once: true,
            },
          });

          gsap.fromTo(
            module.querySelector("[data-lab-scan]"),
            { scaleX: 0 },
            {
              scaleX: 1,
              immediateRender: false,
              duration: 0.82,
              ease: "power3.out",
              scrollTrigger: {
                trigger: module,
                start: "top 68%",
                once: true,
              },
            },
          );

          gsap.from(module.querySelectorAll(".lab-copy h3, .lab-copy p"), {
            y: 34,
            autoAlpha: 0,
            immediateRender: false,
            duration: 0.72,
            stagger: 0.08,
            ease: "power4.out",
            scrollTrigger: {
              trigger: module,
              start: "top 72%",
              once: true,
            },
          });
        });

        const galleryTiles = gsap.utils.toArray<HTMLElement>("[data-gallery-tile]");
        const galleryStarts = [
          { y: 80, x: 0, scale: 0.98 },
          { y: -40, x: 0, scale: 0.98 },
          { y: 24, x: 60, scale: 1 },
          { y: 0, x: 0, scale: 0.96 },
          { y: -34, x: -44, scale: 0.98 },
        ];

        galleryTiles.forEach((tile, index) => {
          const startState = galleryStarts[index] ?? galleryStarts[0];
          gsap.from(tile, {
            ...startState,
            autoAlpha: 0,
            immediateRender: false,
            duration: 1,
            delay: index * 0.06,
            ease: "power4.out",
            scrollTrigger: {
              trigger: tile,
              start: "top 84%",
              once: true,
            },
          });
        });

        galleryTiles.forEach((tile, index) => {
          const value = Number(tile.dataset.parallax || 0);
          gsap.to(tile, {
            y: index === 2 ? 0 : -value,
            x: index === 2 ? -120 : 0,
            scale: index === 3 ? 1.05 : 1,
            ease: "none",
            scrollTrigger: {
              trigger: tile,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          });
        });
      });
    }, root);

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
      context.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      lenis?.destroy();
    };
  }, []);

  return (
    <main className="aeroform-page" ref={rootRef}>
      {children}
    </main>
  );
}
