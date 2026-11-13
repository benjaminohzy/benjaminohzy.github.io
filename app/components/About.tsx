import Image from "next/image";
import { headingClass, links, sectionClass } from "../site";

const sectionHeading = "mt-12 font-score text-2xl font-semibold tracking-wide text-field uppercase sm:text-3xl";

export default function About() {
  return (
    <section id="background" className={sectionClass}>
      <h2 className={headingClass}>Background</h2>
      <p className="mt-8 max-w-2xl text-[1.05rem] leading-relaxed text-ink">
        I&apos;m Ben. This is how I got here. I also coach people who feel stuck.
      </p>

      <div className="mt-4 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink">
        <div className="space-y-2">
          <h3 className={sectionHeading}>Singapore</h3>
          <p>
            I grew up in Singapore in a family that didn&apos;t have much. My parents worked seven
            days a week. I&apos;m the eldest of three, and I trained in finance and accounting.
            That&apos;s not a very exciting start, but it got me my first job. I repeated a year of
            junior college because my grades weren&apos;t good enough.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className={sectionHeading}>2015 SEA Games</h3>
          <p>
            In 2015 I got cut from the SEA Games softball squad, went to a training camp in Japan
            anyway, and made it back. We won bronze with my whole family in the stands. Then
            average uni results and a lot of rejection emails.
          </p>
        </div>
      </div>

      <figure className="mt-10 max-w-xl">
        <div className="relative aspect-video -rotate-1 overflow-hidden rounded-[4px] border-[6px] border-white shadow-[0_10px_30px_-12px_rgb(27_25_22/0.45)]">
          <Image
            src="/images/seagames.jpg"
            alt="Singapore men's softball team at the 2015 SEA Games"
            fill
            sizes="(min-width: 640px) 576px, 100vw"
            className="object-cover"
          />
        </div>
        <p className="mt-3 text-right font-hand text-2xl text-sg-red -rotate-2 sm:text-3xl">
          got cut, then made it back
        </p>
        <figcaption className="mt-2 text-sm leading-relaxed text-muted">
          Singapore men&apos;s softball, 2015 SEA Games. Bronze. (
          <a
            href={links.seaGamesReport}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-clay underline-offset-4 hover:decoration-ink"
          >
            match report
          </a>
          {" · "}
          <a
            href={links.seaGamesRoster}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-clay underline-offset-4 hover:decoration-ink"
          >
            roster
          </a>
          )
        </figcaption>
      </figure>

      <div className="mt-12 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink">
        <h3 className={sectionHeading}>The career fair</h3>
        <p>
          I applied for every internship and got none of them. I went to the career fair anyway and
          talked to the recruiters. One conversation became an interview at a local bank, then a
          summer internship in banking. I also turned down a written offer from a Big 4 firm in
          audit when I had no other role.
        </p>
      </div>

      <div className="mt-12 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink">
        <h3 className={sectionHeading}>Sierra Leone</h3>
        <p>
          That job was in restructuring at Borrelli Walsh. For three years I worked on companies
          that were in trouble across Southeast Asia, and once on site in Sierra Leone. When a
          company is running out of money, nobody wants a slide deck. They want to know what
          happens on Monday. I learned more there than in all of uni.
        </p>
      </div>

      <figure className="mt-10 max-w-xl">
        <div className="relative aspect-[4/3] rotate-1 overflow-hidden rounded-[4px] border-[6px] border-white shadow-[0_10px_30px_-12px_rgb(27_25_22/0.45)]">
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

      <div className="mt-12 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink">
        <h3 className={sectionHeading}>An operator-first PE firm</h3>
        <p>
          I left Borrelli Walsh in the middle of Covid to join an operator-first PE firm. My MD
          texted to ask if I was sure. I&apos;d got to the end of what I was going to learn there,
          so I went.
        </p>
      </div>

      <div className="mt-12 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink">
        <h3 className={sectionHeading}>Since then</h3>
        <p>
          Then I went into private equity as a sort of mini-CFO for a business in the portfolio.
          Fewer people, more hats. I did the numbers, and also anything else that needed doing.
        </p>
        <p>In 2021 I joined BCG in Singapore, in the transformation team.</p>
        <p>
          Part of that work was the transformation of a two-billion-dollar company. The move to
          London was a long run of nos, from external recruiters, internal recruiters, and my own
          manager. I kept at it. In November 2024 I moved to London.
        </p>
        <p>
          From November 2024 to February 2026 I was at BCG X. I&apos;m now a Global Offer Senior
          Manager - AI Transformations at BCG.
        </p>
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
            className="text-ink underline decoration-clay underline-offset-4 hover:decoration-ink"
          >
            Credly
          </a>
          , if you&apos;re the type who checks.
        </p>
        <p className="font-score text-[1.6rem] leading-snug font-semibold text-ink sm:text-[1.65rem]">
          None of it went the way I planned. I just kept turning up.
        </p>
      </div>
    </section>
  );
}
