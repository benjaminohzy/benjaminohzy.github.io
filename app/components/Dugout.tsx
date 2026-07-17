export default function Dugout() {
  return (
    <section
      id="dugout"
      className="relative z-[2] mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-32"
    >
      <p className="font-mono text-xs tracking-wide text-muted">04 / THE DUGOUT</p>
      <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Newsletter</h2>
      <p className="mt-4 max-w-2xl text-ink-soft">
        Where you make sense of what just happened. A newsletter about what I am building,
        learning, and figuring out — for people who are in the middle of figuring it out too.
      </p>

      <div className="mt-12 rounded-2xl border border-line bg-paper-2/60 p-8">
        <p className="font-mono text-xs tracking-wide text-seam">COMING SOON</p>
        <p className="mt-4 max-w-xl text-ink-soft">
          I am still deciding on the right home for this. In the meantime, if you want to be the
          first to know when it launches, drop me an email.
        </p>
        <a
          href="mailto:g3.benjaminoh@gmail.com?subject=Dugout newsletter"
          className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-seam"
        >
          Notify me when it launches
        </a>
      </div>
    </section>
  );
}
