"use client";

import { useState } from "react";

const links = [
  { href: "#bio", label: "Bio" },
  { href: "#innings", label: "The Innings" },
  { href: "#batting-cage", label: "Batting Cage" },
  { href: "#coaching", label: "Coaching" },
  { href: "#dugout", label: "The Dugout" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 border-b border-line/60 bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#bio" className="font-serif text-lg" onClick={() => setOpen(false)}>
          Benjamin Oh
        </a>
        <ul className="hidden items-center gap-x-6 gap-y-2 font-mono text-xs tracking-wide text-ink-soft md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-seam">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:g3.benjaminoh@gmail.com"
              className="rounded-full border border-line px-3 py-1 transition-colors hover:border-seam hover:text-seam"
            >
              Get in touch
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-line md:hidden"
        >
          <span
            className={`block h-px w-4 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-4 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>
      {open && (
        <ul className="flex flex-col gap-y-1 border-t border-line/60 px-6 py-4 font-mono text-sm tracking-wide text-ink-soft sm:px-8 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition-colors hover:text-seam"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="mailto:g3.benjaminoh@gmail.com"
              onClick={() => setOpen(false)}
              className="inline-block rounded-full border border-line px-3 py-1 transition-colors hover:border-seam hover:text-seam"
            >
              Get in touch
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
