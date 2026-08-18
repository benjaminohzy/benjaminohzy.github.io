import Image from "next/image";

const stats = [
  { number: "10+", label: "Years across consulting, restructuring, PE & AI" },
  { number: "5", label: "Professional certifications" },
  { number: "1", label: "SEA Games bronze medal" },
];

const chapters = [
  {
    title: "Growing up",
    label: "GROWING UP",
    paragraphs: [
      "I grew up in Singapore, the eldest of three in a family where my parents worked seven days a week and everyone pulled their weight. From an early age I learned that effort is just what you do, not something you get credit for.",
    ],
  },
  {
    title: "The athlete",
    label: "THE ATHLETE",
    paragraphs: [
      "I played softball competitively through school and university, eventually representing Singapore at the 2015 Southeast Asian Games. I almost did not make the squad. Got cut, then made it back through a training camp in Japan by deciding I had nothing to lose. My whole family was in the stands.",
      "Sport taught me more about resilience and team dynamics than any classroom did, and that carried into everything that came after.",
    ],
    photo: { src: "/images/seagames.jpg", caption: "Singapore national softball team, SEA Games 2015" },
  },
  {
    title: "The early career",
    label: "THE EARLY CAREER",
    paragraphs: [
      "My career started in restructuring and insolvency at Borrelli Walsh, where I spent three years working on distressed companies across Southeast Asia. Real work, real stakes, and a lot of learning by doing.",
      "From there I moved into a private equity operator role, then joined a global management consulting firm in Singapore in 2021 as part of the transformation and restructuring practice.",
    ],
    photo: { src: "/images/sierra-leone-1.jpg", caption: "On site in Sierra Leone, 2019" },
  },
  {
    title: "The questions",
    label: "THE QUESTIONS",
    paragraphs: [
      "Somewhere along the way, I started asking harder questions. Not about work, but about what I actually wanted. I got into coaching, first as a client, then trained as a practitioner, earning my ICF accreditation in 2025.",
      "Around the same time, AI started showing up in ways I could not ignore. I am not a developer. I am a finance and accounting trained person who decided to figure it out anyway. I have since built multi-agent systems, automated workflows, and a personal operating system that runs my own thinking. No technical background required. Just clarity and a willingness to start.",
    ],
  },
  {
    title: "Now",
    label: "NOW",
    paragraphs: [
      "I moved to London in 2024. I now lead AI commercial activation globally in consulting. I also coach people navigating transitions, career questions, and the quieter questions about what they want their life to look like.",
      "If any of that resonates, I would love to connect.",
    ],
  },
];

export default function Bio() {
  return (
    <section
      id="bio"
      className="relative z-[2] mx-auto flex min-h-dvh max-w-6xl flex-col justify-center px-6 pt-28 pb-20 sm:px-8"
    >
      <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-2xl">
          <p className="font-mono text-xs tracking-wide text-muted">
            AI GTM &middot; EX-PE &amp; RESTRUCTURING &middot; FORMER NATIONAL ATHLETE &middot; ICF-CERTIFIED COACH
          </p>
          <h1 className="mt-4 font-serif text-6xl leading-none font-medium sm:text-7xl">
            Benjamin
            <br />
            Oh
          </h1>
          <p className="mt-6 text-lg text-ink-soft italic">
            National record holder. Never strikes out twice.
          </p>
          <p className="mt-6 max-w-xl text-ink-soft">
            I lead AI commercial activation globally in consulting, and coach people navigating the
            quieter questions about what they want their life to look like.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#innings"
              className="rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-seam"
            >
              See the journey
            </a>
            <a
              href="https://www.linkedin.com/in/benohzy/"
              target="_blank"
              rel="noreferrer"
              className="text-sm text-ink-soft underline decoration-line underline-offset-4 hover:text-seam"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-8 font-mono text-xs tracking-wide text-muted">LONDON &middot; 2024 &rarr;</p>
        </div>

        <div className="relative aspect-square w-full max-w-xs shrink-0 overflow-hidden rounded-3xl border border-line sm:max-w-sm">
          <Image src="/images/headshot.jpg" alt="Benjamin Oh" fill className="object-cover" priority />
        </div>
      </div>

      <div className="mt-16 grid grid-cols-3 gap-6 border-t border-line pt-8">
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-serif text-4xl">{stat.number}</p>
            <p className="mt-1 text-sm text-muted">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <p className="font-mono text-xs tracking-wide text-muted">00 / BIO</p>
        <h2 className="mt-2 font-serif text-3xl sm:text-4xl">The backstory</h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Singapore to London, the diamond to the deal room, finance to AI. The throughline is the
          same: effort first, figure it out as you go.
        </p>

        <div className="mt-12 flex flex-col gap-16">
          {chapters.map((chapter) => (
            <div key={chapter.title}>
              <p className="font-mono text-xs tracking-wide text-seam">{chapter.label}</p>
              <h3 className="mt-2 font-serif text-2xl">{chapter.title}</h3>
              <div className="mt-4 flex flex-col gap-4 text-ink-soft">
                {chapter.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 20)}>{paragraph}</p>
                ))}
              </div>
              {chapter.photo && (
                <div className="mt-6 max-w-md">
                  <div className="relative aspect-video overflow-hidden rounded-2xl border border-line">
                    <Image
                      src={chapter.photo.src}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-2 text-sm text-muted">{chapter.photo.caption}</p>
                </div>
              )}
            </div>
          ))}

          <div>
            <p className="font-mono text-xs tracking-wide text-seam">ONE MORE THING</p>
            <p className="mt-4 max-w-2xl text-ink-soft">
              Since you read this far, you deserve to know. That national record? In 2015, I set the
              Singapore record for the longest bar slide with a beer can.{" "}
              <a
                href="https://singaporerecords.com/longest-bar-slide-with-beer-can/"
                target="_blank"
                rel="noreferrer"
                className="text-seam underline decoration-line underline-offset-4"
              >
                Here is the proof.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
