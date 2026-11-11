import Image from "next/image";
import { PlaceholderMark } from "./Placeholder";
import { links, primaryButtonClass, secondaryButtonClass } from "../site";

function HiNote() {
  return (
    <p
      aria-hidden="true"
      className="hi-draw pointer-events-none absolute top-0 left-1 -rotate-6 py-1 font-hand text-[2.15rem] leading-none text-navy sm:text-[2.4rem] lg:top-[18%] lg:left-0 lg:text-[2.6rem]"
    >
      hi :)
    </p>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="gutter mx-auto flex w-full max-w-6xl flex-col justify-center pt-8 pb-14 sm:pt-12 sm:pb-20 lg:min-h-[calc(100dvh-4.5rem)] lg:py-16"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="order-2 w-full shrink-0 lg:w-auto">
          <div className="relative mx-auto w-fit pt-10 lg:pt-0 lg:pl-20">
            <HiNote />
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 h-full w-full rounded-[1.7rem] bg-lavender"
              />
              <div className="relative aspect-square w-[min(78vw,280px)] overflow-hidden rounded-[1.7rem] lg:w-[300px]">
                <Image
                  src="/images/headshot.jpg"
                  alt="Benjamin Oh"
                  fill
                  preload
                  sizes="(min-width: 1024px) 300px, 78vw"
                  className="object-cover object-[center_30%]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 w-full max-w-xl">
          {/* PLACEHOLDER / TODO: Ben to sign off this short opening. The examples stay in Background. */}
          <PlaceholderMark />
          <p className="mt-3 text-[1.05rem] leading-relaxed text-ink">
            Following the process has never got me to the next step. Finding the way has.
          </p>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink">
            I&apos;ve done that throughout my life. That&apos;s what got me here.
          </p>
          <h1 className="mt-8 font-serif text-5xl leading-[0.95] font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            I&apos;m Ben.
          </h1>
          <p className="mt-5 font-serif text-xl leading-snug text-ink sm:text-2xl">
            Built on resilience, driven by curiosity.
          </p>
          <p className="mt-4 text-[1.05rem] leading-relaxed text-ink">
            Right now I work on what to sell in AI, how to sell it, and how to drive adoption.
            Enablement, GTM, and commercialisation.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a href="#background" className={`${primaryButtonClass} w-full sm:w-auto`}>
              Read the background
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={`${secondaryButtonClass} w-full sm:w-auto`}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
