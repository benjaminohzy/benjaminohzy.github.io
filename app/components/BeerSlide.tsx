"use client";

import { useEffect, useRef, useState } from "react";

const RECORD_METERS = 9.82;
const SLIDE_MS = 2000;

function BeerCan() {
  return (
    <svg viewBox="0 0 44 72" aria-hidden="true" className="beer-can h-[4.5rem] w-11">
      <ellipse cx="22" cy="7" rx="13" ry="4" fill="#d9dbde" />
      <ellipse cx="22" cy="6.5" rx="9" ry="2.4" fill="#b9bcc1" />
      <rect x="18" y="5" width="8" height="3" rx="1.5" fill="#8d9197" />
      <path d="M9 7h26l3 6v50a5 5 0 0 1-5 5H11a5 5 0 0 1-5-5V13z" fill="#3f5d3c" />
      <path d="M9 7h26l3 6H6z" fill="#c4c7cc" />
      <rect x="6" y="62" width="32" height="6" rx="3" fill="#c4c7cc" />
      <rect x="10" y="14" width="3" height="46" rx="1.5" fill="#faf8f0" opacity="0.28" />
      <ellipse cx="22" cy="37" rx="14" ry="12" fill="#faf8f0" />
      <ellipse cx="22" cy="37" rx="14" ry="12" fill="none" stroke="#c8102e" strokeWidth="1.2" />
      <text
        x="22"
        y="41.5"
        textAnchor="middle"
        fontSize="12"
        fontWeight="700"
        letterSpacing="0.5"
        fill="#c8102e"
        style={{ fontFamily: "var(--font-barlow-condensed), sans-serif" }}
      >
        BEER
      </text>
      <circle cx="31" cy="20" r="1.3" fill="#faf8f0" opacity="0.6" />
      <circle cx="33" cy="54" r="1" fill="#faf8f0" opacity="0.6" />
      <circle cx="14" cy="56" r="1.2" fill="#faf8f0" opacity="0.6" />
    </svg>
  );
}

export default function BeerSlide() {
  const [slid, setSlid] = useState(false);
  const [meters, setMeters] = useState(0);
  const [moving, setMoving] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const canRef = useRef<HTMLButtonElement>(null);
  const frameRef = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frameRef.current), []);

  function slide() {
    const next = !slid;
    setSlid(next);
    setMoving(true);
    cancelAnimationFrame(frameRef.current);
    const started = performance.now();

    function tick(now: number) {
      const track = trackRef.current?.getBoundingClientRect();
      const can = canRef.current?.getBoundingClientRect();
      if (now - started >= SLIDE_MS || !track || !can) {
        setMeters(next ? RECORD_METERS : 0);
        setMoving(false);
        return;
      }
      const travelled = (can.left - track.left) / (track.width - can.width);
      setMeters(Math.min(Math.max(travelled, 0), 1) * RECORD_METERS);
      frameRef.current = requestAnimationFrame(tick);
    }

    frameRef.current = requestAnimationFrame(tick);
  }

  const landed = slid && !moving;

  return (
    <div>
      <div ref={trackRef} className="relative h-[4.5rem]">
        <p
          aria-hidden="true"
          className={`pointer-events-none absolute top-3 left-16 -rotate-2 font-hand text-2xl text-sg-red transition-opacity duration-300 ${slid || moving ? "opacity-0" : "opacity-100"}`}
        >
          &larr; tap the can
        </p>
        <p
          aria-hidden="true"
          className={`pointer-events-none absolute top-3 right-16 rotate-2 font-hand text-2xl text-sg-red transition-opacity duration-300 ${landed ? "opacity-100" : "opacity-0"}`}
        >
          Singapore record
        </p>
        <div className="beer-runner pointer-events-none absolute inset-0" data-slid={slid}>
          <button
            ref={canRef}
            type="button"
            onClick={slide}
            aria-pressed={slid}
            aria-label={slid ? "Slide the beer can back" : "Slide the beer can down the bar"}
            className="beer-can-button pointer-events-auto block cursor-pointer rounded-[3px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <BeerCan />
          </button>
        </div>
      </div>
      <div aria-hidden="true" className="h-3 rounded-[2px] border-b-4 border-[#8a4a2a] bg-clay" />
      <div className="mt-1.5 flex items-baseline justify-between font-score font-medium tracking-[0.14em] text-muted uppercase">
        <span aria-hidden="true" className="text-xs">
          0 m
        </span>
        <span
          role="status"
          className={`tabular-nums transition-colors duration-300 ${
            landed ? "text-2xl font-bold text-sg-red" : moving ? "text-2xl font-bold text-ink" : "text-xs"
          }`}
        >
          {moving || landed ? `${meters.toFixed(2)} meters` : "0.00 m"}
        </span>
      </div>
    </div>
  );
}
