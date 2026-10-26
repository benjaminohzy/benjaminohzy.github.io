import Image from "next/image";
import { links } from "../site";
import { PlaceholderMark } from "./Placeholder";

const section =
  "reveal mx-auto w-full max-w-6xl scroll-mt-24 border-t border-navy/10 px-6 py-20 sm:px-8 sm:py-28";

export default function About() {
  return (
    <section id="about" className={section}>
      <h2 className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        How I got here
      </h2>
      <div className="mt-8 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink">
        <p>
          I&apos;m the eldest of three, and I trained in finance and accounting. That&apos;s not a
          very exciting start, but it got me my first job.
        </p>
        <p>
          That job was in restructuring at Borrelli Walsh. For three years I worked on companies
          that were in trouble across Southeast Asia, and once on site in Sierra Leone. When a
          company is running out of money, nobody wants a slide deck. They want to know what
          happens on Monday. I learned more there than in all of uni.
        </p>
        {/* PLACEHOLDER / TODO: Ben to add one line on what the portfolio business was, or confirm this stays vague. */}
        <div className="space-y-2">
          <PlaceholderMark />
          <p>
            Then I went into private equity as a sort of mini-CFO for a business in the portfolio.
            Fewer people, more hats. I did the numbers, and also anything else that needed doing.
          </p>
        </div>
        <p>
          In 2021 I joined BCG in Singapore, in the transformation team. In November 2024 I moved
          to London.
        </p>
        {/* PLACEHOLDER / TODO: Ben to confirm dates for the BCGX move and the current role, and this plain-English wording. */}
        <div className="space-y-2">
          <PlaceholderMark />
          <p>
            I spent time in portfolio strategy at BCGX, BCG&apos;s tech and build arm, and now
            I&apos;m an AI Senior Offer Manager. In plain English: I help work out what BCG&apos;s
            AI offers are, who they&apos;re for and how to take them to market.
          </p>
        </div>
        <p>
          Somewhere in the middle of all that I got a coach. I was good at the job and a bit lost
          on everything else. It helped so much that I trained to do it myself, and got my ICF
          Associate Certified Coach credential in 2025.
        </p>
        <p>
          My other certificates are on{" "}
          <a
            href={links.credly}
            target="_blank"
            rel="noreferrer"
            className="text-navy underline decoration-lavender underline-offset-4 hover:decoration-navy"
          >
            Credly
          </a>
          , if you&apos;re the type who checks.
        </p>
      </div>

      <figure className="mt-12 max-w-xl">
        <div className="relative aspect-video overflow-hidden rounded-2xl">
          <Image
            src="/images/seagames.jpg"
            alt="Singapore men's softball team at the 2015 SEA Games"
            fill
            sizes="(min-width: 640px) 576px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-3 text-right font-hand text-3xl text-navy -rotate-2">
          got cut, then made it back
        </p>
        {/* TODO: Ben still to confirm the match report and roster links. */}
        <figcaption className="mt-2 text-sm leading-relaxed text-muted">
          Singapore men&apos;s softball, 2015 SEA Games. Bronze. (
          <a
            href={links.seaGamesReport}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-lavender underline-offset-4 hover:decoration-navy"
          >
            match report
          </a>
          {" · "}
          <a
            href={links.seaGamesRoster}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-lavender underline-offset-4 hover:decoration-navy"
          >
            roster
          </a>
          )
        </figcaption>
      </figure>

      <figure className="mt-10 max-w-xl">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/sierra-leone-1.jpg"
            alt="Benjamin Oh on site in Sierra Leone in 2019"
            fill
            sizes="(min-width: 640px) 576px, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-3 text-sm text-muted">On site in Sierra Leone, 2019.</figcaption>
      </figure>
    </section>
  );
}
