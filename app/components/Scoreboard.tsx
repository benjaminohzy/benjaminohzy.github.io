"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { number: string; label: string };

export default function Scoreboard({ stats, caption }: { stats: Stat[]; caption: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`mt-6 overflow-hidden rounded-md bg-field ${live ? "is-live" : ""}`}>
      <div
        className="grid gap-px bg-cream/25"
        style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
      >
        {stats.map((stat, i) => (
          <div key={stat.label} className="bg-field px-3 py-5 text-center sm:py-6">
            <p className="font-score text-sm font-medium tracking-[0.14em] text-cream/85 uppercase">
              {stat.label}
            </p>
            <div className="mt-2 [perspective:400px]">
              <p
                className="flip-tile mx-auto inline-block min-w-24 rounded-[3px] bg-ink/45 px-3 py-1 font-score text-6xl font-bold text-cream tabular-nums sm:text-7xl"
                style={{ "--flip-delay": `${i * 0.2}s` } as React.CSSProperties}
              >
                {stat.number}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="border-t border-cream/25 px-3 py-2.5 text-center font-score text-sm font-medium tracking-[0.14em] text-cream/85 uppercase">
        {caption}
      </p>
    </div>
  );
}
