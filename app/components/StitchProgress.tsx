"use client";

import { useEffect, useRef } from "react";

export default function StitchProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let ticking = false;

    function update() {
      ticking = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      el!.style.clipPath = `inset(0 0 ${(1 - progress) * 100}% 0)`;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="stitch-line pointer-events-none fixed top-0 bottom-0 left-0.5 z-[5] w-2.5 sm:left-4"
      style={{ clipPath: "inset(0 0 100% 0)" }}
    />
  );
}
