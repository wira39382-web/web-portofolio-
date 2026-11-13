"use client";
import { useEffect } from "react";
export default function SceneReveals() {
  useEffect(() => {
    if (
      matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
            observer.unobserve(entry.target);
            continue;
          }
          entry.target.animate(
            entry.target.classList.contains("portrait-frame")
              ? [
                  {
                    clipPath: "inset(8% 0 0 0)",
                    transform: "translateY(18px)",
                  },
                  { clipPath: "inset(0)", transform: "translateY(0)" },
                ]
              : [
                  { opacity: 0.65, transform: "translateY(16px)" },
                  { opacity: 1, transform: "translateY(0)" },
                ],
            { duration: 650, easing: "cubic-bezier(.2,.65,.3,1)" },
          );
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.16 },
    );
    document
      .querySelectorAll(".portrait-frame")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return null;
}
