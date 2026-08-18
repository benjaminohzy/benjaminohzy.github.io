"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-6xl flex-col items-center justify-center px-6 text-center sm:px-8">
      <p className="font-mono text-xs tracking-wide text-muted">RAIN DELAY</p>
      <h1 className="mt-4 font-serif text-5xl sm:text-6xl">Something went sideways</h1>
      <p className="mt-4 max-w-md text-ink-soft">
        The page hit a snag loading. Give it another shot.
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-seam"
        >
          Try again
        </button>
        <a
          href="/"
          className="text-sm text-ink-soft underline decoration-line underline-offset-4 hover:text-seam"
        >
          Back to home plate
        </a>
      </div>
    </div>
  );
}
