export default function Coaching() {
  return (
    <section
      id="coaching"
      className="relative z-[2] mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-32"
    >
      <p className="font-mono text-xs tracking-wide text-muted">03 / COACHING</p>
      <h2 className="mt-2 font-serif text-3xl sm:text-4xl">The dugout&apos;s quieter work</h2>
      <p className="mt-4 max-w-2xl text-ink-soft">
        Everyone has a coach. The best players especially. I needed one before I became one.
      </p>

      <div className="mt-12 grid gap-12 sm:grid-cols-2">
        <div>
          <h3 className="font-serif text-xl">Why I coach</h3>
          <div className="mt-4 flex flex-col gap-4 text-ink-soft">
            <p>I became a coach the way most people do. I needed one first.</p>
            <p>
              For a long time I was good at the job and unclear about the life. I had built a career
              that looked right on paper but had not stopped to ask whether it was what I actually
              wanted. Working with a coach changed that. It did not give me answers. It gave me
              better questions.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-serif text-xl">How I work</h3>
          <div className="mt-4 flex flex-col gap-4 text-ink-soft">
            <p>
              I trained formally through an ICF-accredited programme and earned my Associate
              Certified Coach credential in 2025. I work with people who are navigating transitions,
              feeling stuck between where they are and where they want to be, or simply trying to be
              more intentional about how they show up at work and in life.
            </p>
            <p>
              I am not the kind of coach who gives advice. I ask questions. I listen for what is not
              being said. I help people move forward on their own terms.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-line bg-paper-2/60 p-8 text-center">
        <p className="font-serif text-2xl">At a fork? Let&apos;s think it through together.</p>
        <p className="mt-2 text-ink-soft">A free 60-minute initial conversation. No obligation.</p>
        <a
          href="https://bencoachme.lovable.app"
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-seam"
        >
          Book a conversation
        </a>
      </div>
    </section>
  );
}
