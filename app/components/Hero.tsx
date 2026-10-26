"use client";

import { useState } from "react";
import Image from "next/image";
import { PlaceholderMark } from "./Placeholder";
import {
  BOOK_A_CHAT_URL,
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

function HiNote() {
  return (
    <p
      aria-hidden="true"
      className="hi-draw pointer-events-none absolute top-[18%] left-0 -rotate-6 py-1 font-hand text-[2.6rem] leading-none text-navy"
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

  const chapter = active === null ? null : storyChapters[active];
  const photo = chapter?.photo ?? storyChapters[0].photo;
  const story = chapter?.text ?? heroStory;
  const spoken =
    active === null
      ? "Full story."
      : `Chapter ${active + 1} of ${storyChapters.length}, ${storyChapters[active].label}.`;

  return (
    <section
      id="top"
      className="mx-auto flex w-full max-w-6xl flex-col justify-center px-6 pt-12 pb-20 sm:px-8 md:min-h-[calc(100dvh-4.5rem)] md:py-16"
    >
      <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:gap-16">
        <div className="w-full shrink-0 md:w-auto">
          <div className="relative mx-auto w-fit pl-16 sm:pl-20">
            <HiNote />
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 h-full w-full rounded-[1.7rem] bg-lavender"
              />
              <button
                type="button"
                onClick={next}
                onKeyDown={onPhotoKeyDown}
                aria-label="Show the next chapter of the story"
                className="relative block aspect-square w-[min(72vw,300px)] overflow-hidden rounded-[1.7rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
              >
                <span key={active ?? "cover"} className="absolute inset-0 motion-safe:animate-photo-in">
                  <Image
                    src={photo}
                    alt=""
                    fill
                    preload
                    sizes="300px"
                    className="object-cover object-[center_30%]"
                  />
                </span>
              </button>
            </div>
            <div
              className="mt-5 flex items-center justify-center gap-2.5"
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
                    className={`h-2.5 w-2.5 rounded-full focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-navy ${
                      selected ? "bg-navy" : "bg-lavender hover:bg-navy/40"
                    }`}
                  />
                );
              })}
            </div>
            <p className="mt-1 text-center font-hand text-xl text-muted">click me</p>
          </div>
        </div>

        <div className="w-full max-w-xl">
          <h1 className="font-serif text-6xl leading-[0.95] font-semibold tracking-tight text-ink sm:text-7xl">
            I&apos;m Ben.
          </h1>
          <p className="mt-3 font-serif text-3xl font-medium text-muted italic sm:text-4xl">
            Here&apos;s my story.
          </p>
          <div className="mt-6">
            <PlaceholderMark />
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
          <p className="mt-8 font-serif text-[1.65rem] leading-snug font-semibold text-ink sm:text-[1.85rem]">
            None of it went the way I planned. I just kept turning up.
          </p>
          <p className="mt-6 text-[1.05rem] leading-relaxed text-ink">
            These days I work on how BCG sells AI, and I coach people who feel stuck. I know the
            feeling.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={BOOK_A_CHAT_URL}
              target="_blank"
              rel="noreferrer"
              className={primaryButtonClass}
            >
              Book a chat
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              className={secondaryButtonClass}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
