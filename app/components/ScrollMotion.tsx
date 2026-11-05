"use client";

import { useEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!root.current) return;

    const motion = gsap.matchMedia();

    motion.add("(prefers-reduced-motion: no-preference)", () => {
      const context = gsap.context(() => {
        const sections = gsap.utils.toArray<HTMLElement>("section", root.current);
        const hero = sections[0];

        if (hero) {
          const intro = hero.querySelector(".max-w-7xl");
          const introItems = intro?.children;

          if (introItems?.length) {
            gsap.fromTo(
              introItems,
              { y: 34, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.12,
                ease: "power3.out",
                clearProps: "transform,opacity",
              },
            );
          }

          const stats = hero.querySelectorAll(".grid > div");
          gsap.fromTo(
            stats,
            { y: 22, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.09,
              delay: 0.45,
              ease: "power3.out",
              clearProps: "transform,opacity",
            },
          );
        }

        sections.slice(1).forEach((section) => {
          const heading = section.querySelector("h2");
          if (heading) {
            gsap.fromTo(
              heading,
              { y: 32, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.85,
                ease: "power3.out",
                clearProps: "transform,opacity",
                scrollTrigger: {
                  trigger: heading,
                  start: "top 86%",
                  once: true,
                },
              },
            );
          }

          const cards = section.querySelectorAll(
            ".grid > div.rounded-xl, .grid > div.rounded-2xl, .grid > div.relative.rounded-2xl",
          );
          if (cards.length) {
            gsap.fromTo(
              cards,
              { y: 38, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
                clearProps: "transform,opacity",
                scrollTrigger: {
                  trigger: cards[0],
                  start: "top 88%",
                  once: true,
                },
              },
            );
          }
        });

        const progress = root.current?.querySelector<HTMLElement>(
          "[data-scroll-progress]",
        );
        if (progress) {
          gsap.to(progress, {
            scaleX: 1,
            ease: "none",
            scrollTrigger: { trigger: document.documentElement, start: "top top", end: "bottom bottom", scrub: 0.35 },
          });
        }

      }, root);

      return () => context.revert();
    });

    return () => motion.revert();
  }, []);

  return (
    <div ref={root} className="contents">
      <div
        data-scroll-progress
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[2px] origin-left scale-x-0 bg-[#f24e1e] shadow-[0_0_12px_rgba(242,78,30,0.7)]"
      />
      {children}
    </div>
  );
}
