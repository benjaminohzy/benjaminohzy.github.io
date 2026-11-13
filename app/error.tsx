"use client";

import Link from "next/link";
import { primaryButtonClass } from "./site";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col items-center justify-center px-6 text-center sm:px-8">
      <h1 className="font-serif text-5xl font-medium text-ink sm:text-6xl">Something went sideways</h1>
      <p className="mt-4 max-w-md text-ink">The page hit a snag loading. Give it another go.</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button type="button" onClick={() => reset()} className={primaryButtonClass}>
          Try again
        </button>
        <Link
          href="/"
          className="text-sm text-navy underline decoration-lavender underline-offset-4 hover:decoration-navy"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
