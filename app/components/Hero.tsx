import Image from "next/image";
import { links, primaryButtonClass, secondaryButtonClass } from "../site";

function HiNote() {
  return (
    <p
      aria-hidden="true"
      className="hi-draw pointer-events-none absolute top-0 left-1 -rotate-6 py-1 font-hand text-[2.15rem] leading-none text-sg-red sm:text-[2.4rem] lg:top-[18%] lg:left-0 lg:text-[2.6rem]"
    >
      hi :)
    </p>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      className="scoresheet gutter mx-auto flex w-full max-w-6xl flex-col justify-center pt-8 pb-14 sm:pt-12 sm:pb-20 lg:min-h-[calc(100dvh-4.5rem)] lg:py-16"
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="order-2 w-full shrink-0 lg:w-auto">
          <div className="relative mx-auto w-fit pt-10 lg:pt-0 lg:pl-20">
            <HiNote />
            <div className="relative rotate-[1.5deg]">
              <span
                aria-hidden="true"
                className="absolute -top-3 left-1/2 z-[1] h-6 w-24 -translate-x-1/2 -rotate-3 bg-clay/35"
              />
              <div className="relative aspect-square w-[min(78vw,280px)] overflow-hidden rounded-[4px] border-[6px] border-white shadow-[0_10px_30px_-12px_rgb(27_25_22/0.45)] lg:w-[320px]">
                <Image
                  src="/images/headshot.jpg"
                  alt="Benjamin Oh"
                  fill
                  preload
                  sizes="(min-width: 1024px) 320px, 78vw"
                  className="object-cover object-[center_30%]"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 w-full max-w-xl">
          <h1 className="font-score text-[5.5rem] leading-[0.85] font-bold tracking-tight text-ink uppercase sm:text-[7rem] lg:text-[9rem]">
            I&apos;m Ben.
          </h1>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-ink">
            I work where AI meets value creation. I started in finance, restructuring and private
            equity, and now work on taking AI offers to market at BCG. I like starting from a real
            problem a team has, not an abstract use case, then building something small that works
            and checking whether it actually saves time or money.
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
