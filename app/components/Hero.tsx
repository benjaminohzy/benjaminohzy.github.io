import Image from "next/image";
import { PlaceholderMark } from "./Placeholder";
import { BOOK_A_CHAT_URL, links, primaryButtonClass, secondaryButtonClass } from "../site";

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
          {/* PLACEHOLDER / TODO: Ben to sign off this opening. Draft from his description of himself: a problem solver who asks like a journalist, never takes the first no, and has gone from distressed-company restructuring, to smaller-business transformation, to a two billion dollar BCG transformation, to what BCG sells in AI. He said "journalist"; confirm he means the way he asks, not a job title. */}
          <PlaceholderMark />
          <p className="mt-3 text-[1.05rem] leading-relaxed text-ink">
            I&apos;ve sat with lenders and creditors when a company was running out of money.
            I&apos;ve worked on the transformation of smaller businesses. At BCG I worked on the
            transformation of a two-billion-dollar company.
          </p>
          <h1 className="mt-8 font-serif text-5xl leading-[0.95] font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            I&apos;m Ben.
          </h1>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-ink">
            I come at the problem from a different point of view. I keep asking, and I don&apos;t
            take the first no. These days that question is what BCG should sell in AI, and how to
            sell it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href={BOOK_A_CHAT_URL}
              target="_blank"
              rel="noreferrer"
              className={`${primaryButtonClass} w-full sm:w-auto`}
            >
              Book a chat
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
