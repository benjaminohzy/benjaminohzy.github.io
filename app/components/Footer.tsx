export default function Footer() {
  return (
    <footer className="relative z-[2] mx-auto w-full max-w-6xl px-6 py-16 sm:px-8">
      <div className="border-t border-line pt-10 text-center">
        <p className="font-serif text-2xl">Let&apos;s connect.</p>
        <p className="mx-auto mt-3 max-w-xl text-ink-soft">
          Whether it is AI, a career fork, or the quieter questions about what you want — if any of
          it resonates, I would love to hear from you.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href="mailto:g3.benjaminoh@gmail.com" className="underline decoration-line underline-offset-4 hover:text-seam">
            Email me
          </a>
          <a
            href="https://www.linkedin.com/in/benohzy/"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-line underline-offset-4 hover:text-seam"
          >
            LinkedIn
          </a>
          <a
            href="https://bencoachme.lovable.app"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-line underline-offset-4 hover:text-seam"
          >
            Coaching site
          </a>
          <a
            href="https://singaporerecords.com/longest-bar-slide-with-beer-can/"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-line underline-offset-4 hover:text-seam"
          >
            The national record
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-mono text-xs text-muted">
          <a href="#bio" className="hover:text-seam">Bio</a>
          <a href="#innings" className="hover:text-seam">The Innings</a>
          <a href="#batting-cage" className="hover:text-seam">Batting Cage</a>
          <a href="#coaching" className="hover:text-seam">Coaching</a>
          <a href="#dugout" className="hover:text-seam">The Dugout</a>
        </div>

        <p className="mt-10 font-serif text-sm text-muted">Never strikes out twice.</p>
        <p className="mt-2 text-xs text-muted">&copy; 2026 Benjamin Oh</p>
      </div>
    </footer>
  );
}
