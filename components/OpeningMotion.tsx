"use client";
import { useEffect } from "react";
/** One scoped choreography. No pinning, wheel listeners, or replacement scroller. */
export default function OpeningMotion() {
  useEffect(() => {
    let cancelled = false;
    let revert: (() => void) | undefined;
    Promise.all([import("gsap"), import("gsap/ScrollTrigger")])
      .then(([{ gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);
        const root = document.querySelector(".opening-sequence");
        if (!root) return;
        const media = gsap.matchMedia();
        revert = () => media.revert();
        media.add(
          {
            all: "(min-width: 0px)",
            desktop: "(min-width: 769px)",
            reduced: "(prefers-reduced-motion: reduce)",
          },
          (context) => {
            if (context.conditions?.reduced) return;
            const desktop = !!context.conditions?.desktop;
            const scoped = gsap.context(() => {
              gsap.from(".hero-media", {
                clipPath: "inset(4% 0 8% 0)",
                duration: 1.05,
                ease: "power3.out",
                clearProps: "clipPath",
              });
              gsap.from(".hero-name-main, .hero-name-family", {
                y: 18,
                duration: 0.85,
                stagger: 0.08,
                ease: "power3.out",
                clearProps: "transform",
              });
              gsap.to(".hero-media-parallax", {
                y: desktop ? 22 : 8,
                opacity: 0.48,
                ease: "none",
                scrollTrigger: {
                  trigger: ".cinematic-hero",
                  start: "top top",
                  end: "bottom top",
                  scrub: 0.6,
                },
              });
              gsap.to(".hero-placeholder-letter", {
                y: desktop ? -12 : -5,
                ease: "none",
                scrollTrigger: {
                  trigger: ".cinematic-hero",
                  start: "top top",
                  end: "bottom top",
                  scrub: 0.6,
                },
              });
              gsap.from(".identity-fallback", {
                z: desktop ? -80 : 0,
                scale: 0.86,
                rotationY: desktop ? 12 : 0,
                y: 16,
                transformPerspective: 1200,
                duration: 0.95,
                ease: "power3.out",
                clearProps: "transform",
                scrollTrigger: {
                  trigger: ".identity-visual-wrap",
                  start: "top 88%",
                  once: true,
                },
              });
              gsap.from(".identity-bridge", {
                scaleY: 0,
                transformOrigin: "top",
                ease: "none",
                scrollTrigger: {
                  trigger: ".digital-identity-section",
                  start: "top 95%",
                  end: "top 50%",
                  scrub: 0.5,
                },
              });
              gsap.from(".work-title-line > span", {
                yPercent: 104,
                rotation: 1.5,
                transformOrigin: "left bottom",
                stagger: 0.08,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: ".work-portal-title",
                  start: "top 94%",
                  end: "bottom 55%",
                  scrub: 0.65,
                },
              });
              gsap.fromTo(
                ".work-grid .project-card:first-child .project-visual",
                { clipPath: desktop ? "inset(0 12% 0 0)" : "inset(8% 0 0 0)" },
                {
                  clipPath: "inset(0% 0% 0% 0%)",
                  ease: "none",
                  scrollTrigger: {
                    trigger: ".work-grid .project-card:first-child",
                    start: "top 94%",
                    end: "top 48%",
                    scrub: 0.5,
                  },
                },
              );
              gsap.from(".work-portal-light", {
                opacity: 0,
                scale: 0.94,
                ease: "none",
                scrollTrigger: {
                  trigger: ".work-section",
                  start: "top 95%",
                  end: "top 30%",
                  scrub: 0.65,
                },
              });
            }, root);
            return () => scoped.revert();
          },
        );
        document.fonts.ready.then(() => {
          if (!cancelled) ScrollTrigger.refresh();
        });
      })
      .catch(() => {
        /* Native content remains visible if motion cannot load. */
      });
    return () => {
      cancelled = true;
      revert?.();
    };
  }, []);
  return null;
}
