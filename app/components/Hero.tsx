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
          {/* PLACEHOLDER / TODO: Ben to sign off this opening. It leads with the reader, then who he is. Draft arrangement of existing lines. */}
          <PlaceholderMark />
          <p className="mt-3 text-[1.05rem] leading-relaxed text-ink">
            Things can look fine from the outside and still not feel fine. You don&apos;t need
            someone to tell you what to do with your life. You need a better question, and a first
            step you&apos;ll actually take.
          </p>
          <h1 className="mt-8 font-serif text-5xl leading-[0.95] font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            I&apos;m Ben.
          </h1>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-ink">
            I coach people who feel stuck. I know the feeling. These days I also work on how BCG
            sells AI.
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
