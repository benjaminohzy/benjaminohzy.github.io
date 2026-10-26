"use client";

import { useState } from "react";
import { links, navLinks, primaryButtonClass } from "../site";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-navy/10 bg-cream/90 backdrop-blur-md">
      <a
        href="#top"
        className="sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:inline-flex focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-full focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-cream focus:[clip:auto]"
      >
        Skip to story
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <a href="#top" className="font-serif text-lg text-ink" onClick={() => setOpen(false)}>
          Benjamin Oh
        </a>
        <nav className="hidden items-center gap-x-5 text-sm text-muted lg:flex" aria-label="Sections">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
              {link.label}
            </a>
          ))}
          <a
            href={links.coaching}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-ink"
          >
            Coaching site
          </a>
          <a href={links.email} className={primaryButtonClass}>
            Get in touch
          </a>
        </nav>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 rounded-full border border-navy/20 lg:hidden"
        >
          <span
            className={`block h-px w-4 bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-4 bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>
      {open ? (
        <nav className="border-t border-navy/10 px-6 py-4 sm:px-8 lg:hidden" aria-label="Sections">
          <ul className="flex flex-col gap-1 text-base text-ink">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)} className="block py-2">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={links.coaching}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="block py-2"
              >
                Coaching site
              </a>
            </li>
            <li className="pt-2">
              <a href={links.email} onClick={() => setOpen(false)} className={primaryButtonClass}>
                Get in touch
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
