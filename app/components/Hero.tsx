"use client";

import { useState } from "react";
import Image from "next/image";
import { PlaceholderMark } from "./Placeholder";
import {
  BOOK_A_CHAT_URL,
  coverPhoto,
  heroStory,
  links,
  primaryButtonClass,
  secondaryButtonClass,
  storyChapters,
} from "../site";

function showIndex(index: number) {
  const count = storyChapters.length;
  return ((index % count) + count) % count;
}

function HiNote({ reading }: { reading: boolean }) {
  return (
    <p
      aria-hidden="true"
      className={`hi-draw pointer-events-none absolute -rotate-6 py-1 font-hand leading-none text-navy transition-[font-size,top,left] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
        reading
          ? "top-0 left-0 text-[1.55rem] lg:top-[6%] lg:text-[1.7rem]"
          : "top-0 left-1 text-[2.15rem] sm:text-[2.4rem] lg:top-[18%] lg:left-0 lg:text-[2.6rem]"
      }`}
    >
      hi :)
    </p>
  );
}

export default function Hero() {
  const [active, setActive] = useState<number | null>(null);

  function go(index: number) {
    setActive(showIndex(index));
  }

  function next() {
    go(active === null ? 0 : active + 1);
  }

  function prev() {
    go(active === null ? storyChapters.length - 1 : active - 1);
  }

  function onPhotoKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
  }

  function onDotKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null;
    if (event.key === "ArrowRight") nextIndex = showIndex(index + 1);
    else if (event.key === "ArrowLeft") nextIndex = showIndex(index - 1);
    else if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = storyChapters.length - 1;
    if (nextIndex === null) return;
    event.preventDefault();
    go(nextIndex);
    document.getElementById(`chapter-dot-${nextIndex}`)?.focus();
  }

  const reading = active !== null;
  const chapter = active === null ? null : storyChapters[active];
  const photo = chapter?.photo ?? coverPhoto;
  const story = chapter?.text ?? heroStory;
  const spoken =
    active === null
      ? "Full story."
      : `Chapter ${active + 1} of ${storyChapters.length}, ${storyChapters[active].label}.`;

  return (
    <section
      id="top"
      className="gutter mx-auto flex w-full max-w-6xl flex-col justify-center pt-8 pb-14 sm:pt-12 sm:pb-20 lg:min-h-[calc(100dvh-4.5rem)] lg:py-16"
    >
      <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="w-full shrink-0 lg:w-auto">
          <div
            className={`relative mx-auto w-fit transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              reading ? "pt-7 lg:pt-0 lg:pl-14" : "pt-10 lg:pt-0 lg:pl-20"
            }`}
          >
            <HiNote reading={reading} />
            <div className="relative mx-auto w-fit">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 h-full w-full rounded-[1.7rem] bg-lavender"
              />
              <button
                type="button"
                onClick={next}
                onKeyDown={onPhotoKeyDown}
                aria-label="Show the next chapter of the story"
                className={`relative block aspect-square overflow-hidden rounded-[1.7rem] transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy motion-reduce:transition-none ${
                  reading
                    ? "w-[min(46vw,168px)] lg:w-[172px]"
                    : "w-[min(78vw,280px)] lg:w-[300px]"
                }`}
              >
                <span key={active ?? "cover"} className="absolute inset-0 motion-safe:animate-photo-in">
                  <Image
                    src={photo}
                    alt=""
                    fill
                    preload
                    sizes="(min-width: 1024px) 300px, 78vw"
                    className={`object-cover ${reading && chapter?.focus ? chapter.focus : "object-[center_30%]"}`}
                  />
                </span>
              </button>
            </div>
            <div
              className="mt-3 flex items-center justify-center"
              role="tablist"
              aria-label="Story chapters"
            >
              {storyChapters.map((item, index) => {
                const selected = active === index;
                return (
                  <button
                    key={item.id}
                    id={`chapter-dot-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls="hero-story"
                    aria-label={`Chapter ${index + 1} of ${storyChapters.length}: ${item.label}`}
                    tabIndex={selected || (active === null && index === 0) ? 0 : -1}
                    onClick={() => go(index)}
                    onKeyDown={(event) => onDotKeyDown(event, index)}
                    className="flex h-11 w-11 items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy"
                  >
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${
                        selected ? "bg-navy" : "bg-lavender"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
            <p className="mt-1 text-center font-hand text-xl text-muted">click me</p>
          </div>
        </div>

        <div className="w-full max-w-xl">
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              reading ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"
            }`}
            inert={reading}
          >
            <div className="overflow-hidden">
              <h1 className="font-serif text-5xl leading-[0.95] font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
                I&apos;m Ben.
              </h1>
              <p className="mt-3 font-serif text-2xl font-medium text-muted italic sm:text-3xl lg:text-4xl">
                Here&apos;s my story.
              </p>
            </div>
          </div>
          <div
            className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
              reading ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
            inert={!reading}
          >
            <div className="overflow-hidden">
              <h2 className="font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                {chapter?.label}
              </h2>
            </div>
          </div>
          <div className={reading ? "mt-4" : "mt-6"}>
            {reading ? null : <PlaceholderMark />}
            <p
              id="hero-story"
              role="tabpanel"
              aria-live="polite"
              aria-atomic="true"
              className="mt-3 text-[1.05rem] leading-relaxed text-ink"
            >
              <span className="sr-only">{spoken} </span>
              {story}
            </p>
          </div>
          <p className="mt-8 font-serif text-[1.45rem] leading-snug font-semibold text-ink sm:text-[1.65rem] lg:text-[1.85rem]">
            None of it went the way I planned. I just kept turning up.
          </p>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-ink">
            These days I work on how BCG sells AI, and I coach people who feel stuck. I know the
            feeling.
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
