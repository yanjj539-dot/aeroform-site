"use client";

import { useEffect, useRef } from "react";

const DOT_COUNT = 3;

export function CursorTrail() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotsRef = useRef<Array<HTMLSpanElement | null>>([]);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    if (reduceMotion || isCoarse) {
      return;
    }

    const cursor = cursorRef.current;
    const dots = dotsRef.current.filter(Boolean) as HTMLSpanElement[];
    if (!cursor || dots.length === 0) {
      return;
    }

    const points = Array.from({ length: DOT_COUNT }, () => ({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    }));
    let targetX = points[0].x;
    let targetY = points[0].y;
    let frame = 0;

    const setHoverState = (event: PointerEvent) => {
      const element = event.target as Element | null;
      const interactive = element?.closest(
        "a, button, .gallery-tile, .product-visual-shell, .lab-image",
      );
      cursor.classList.toggle("is-interactive", Boolean(interactive));
    };

    const onPointerMove = (event: PointerEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;
      cursor.style.opacity = "0.54";
      dots.forEach((dot) => {
        dot.style.opacity = "0.32";
      });
      setHoverState(event);
    };

    const render = () => {
      points[0].x += (targetX - points[0].x) * 0.32;
      points[0].y += (targetY - points[0].y) * 0.32;

      for (let index = 1; index < points.length; index += 1) {
        points[index].x += (points[index - 1].x - points[index].x) * 0.34;
        points[index].y += (points[index - 1].y - points[index].y) * 0.34;
      }

      cursor.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      dots.forEach((dot, index) => {
        dot.style.transform = `translate3d(${points[index].x}px, ${points[index].y}px, 0) translate(-50%, -50%)`;
      });

      frame = requestAnimationFrame(render);
    };

    document.body.classList.add("has-cursor-trail");
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    frame = requestAnimationFrame(render);

    return () => {
      document.body.classList.remove("has-cursor-trail");
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <>
      <div className="cursor-ring" ref={cursorRef} aria-hidden="true" />
      <div className="cursor-dots" aria-hidden="true">
        {Array.from({ length: DOT_COUNT }).map((_, index) => (
          <span
            key={index}
            ref={(node) => {
              dotsRef.current[index] = node;
            }}
          />
        ))}
      </div>
    </>
  );
}
