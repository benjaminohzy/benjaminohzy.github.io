import { links, navLinks } from "../site";
import BeerSlide from "./BeerSlide";

export default function Footer() {
  return (
    <footer className="gutter mx-auto w-full max-w-6xl pt-4 pb-[max(4rem,env(safe-area-inset-bottom))]">
      <div className="border-t border-ink/10 pt-12">
        <h2 className="font-score text-4xl font-bold text-ink uppercase">Say hi</h2>
        <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-ink">
          Email is best. LinkedIn works too. I reply to everyone, eventually.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm">
          <li>
            <a href={links.email} className="inline-flex min-h-11 items-center underline decoration-clay underline-offset-4 hover:decoration-ink">
              Email
            </a>
          </li>
          <li>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center underline decoration-clay underline-offset-4 hover:decoration-ink"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href={links.coaching}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center underline decoration-clay underline-offset-4 hover:decoration-ink"
            >
              Coaching site
            </a>
          </li>
          <li>
            <a
              href={links.credly}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-11 items-center underline decoration-clay underline-offset-4 hover:decoration-ink"
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

        <div className="mt-14">
          <BeerSlide />
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted">
            Since you scrolled all the way down: I also hold the Singapore record for the longest
            bar slide with a beer can. That was 2018. It was a big year.{" "}
            <a
              href={links.beerCan}
              target="_blank"
              rel="noreferrer"
              className="text-ink underline decoration-clay underline-offset-4 hover:decoration-ink"
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
