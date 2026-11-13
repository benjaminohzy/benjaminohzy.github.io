import { links, navLinks } from "../site";

function BeerCan() {
  return (
    <svg viewBox="0 0 40 64" aria-hidden="true" className="beer-can absolute top-0 left-0 h-11 w-7">
      <ellipse cx="20" cy="10" rx="11" ry="3.5" fill="#8f98c9" />
      <rect x="9" y="10" width="22" height="44" rx="5" fill="#2d3353" />
      <rect x="9" y="10" width="22" height="8" fill="#b3bbe6" />
      <rect x="13" y="24" width="14" height="16" rx="1.5" fill="#faf8f0" />
      <path d="M15 29h10M15 33h7" stroke="#666e99" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="gutter mx-auto w-full max-w-6xl pt-4 pb-[max(4rem,env(safe-area-inset-bottom))]">
      <div className="border-t border-navy/10 pt-12">
        <h2 className="font-serif text-3xl font-medium text-ink">Say hi</h2>
        <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink">
          Email is best. LinkedIn works too. I reply to everyone, eventually.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm">
          <li>
            <a href={links.email} className="inline-flex min-h-11 items-center underline decoration-lavender underline-offset-4 hover:decoration-navy">
              Email
            </a>
          </li>
          <li>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center underline decoration-lavender underline-offset-4 hover:decoration-navy"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={links.coaching}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center underline decoration-lavender underline-offset-4 hover:decoration-navy"
            >
              Coaching site
            </a>
          </li>
          <li>
            <a
              href={links.credly}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center underline decoration-lavender underline-offset-4 hover:decoration-navy"
            >
              Credly
            </a>
          </li>
        </ul>

        <nav className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted" aria-label="Sections">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="inline-flex min-h-11 items-center hover:text-ink">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="beer-slide mt-12 max-w-xl">
          <div className="relative h-12">
            <div aria-hidden="true" className="absolute top-1/2 right-0 left-0 h-px bg-navy/15" />
            <BeerCan />
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Since you scrolled all the way down: I also hold the Singapore record for the longest
            bar slide with a beer can. That was 2018. It was a big year.{" "}
            <a
              href={links.beerCan}
              target="_blank"
              rel="noreferrer"
              className="text-ink underline decoration-lavender underline-offset-4 hover:decoration-navy"
            >
              Here&apos;s the proof.
            </a>
          </p>
        </div>

        <p className="mt-10 text-sm text-muted">&copy; 2026 Benjamin Oh</p>
      </div>
    </footer>
  );
}
