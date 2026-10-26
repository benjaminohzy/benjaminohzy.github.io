const section =
  "reveal mx-auto w-full max-w-6xl scroll-mt-24 border-t border-navy/10 px-6 py-20 sm:px-8 sm:py-28";

export default function AiWork() {
  return (
    <section id="ai-work" className={section}>
      <h2 className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        The GPT I gave up on
      </h2>
      <div className="mt-8 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink">
        <p>
          I&apos;m a finance person. I don&apos;t write code for a living. But in 2023 I was one of
          the early users of ChatGPT at work, and I&apos;ve been tinkering ever since.
        </p>
        <p>The project that taught me the most was one I gave up on.</p>
        <p>
          In early 2025 I built a few custom GPTs for my team, for things like looking up assets
          and finding colleagues with the right skills. They got about 80% of answers right. That
          sounds fine until you&apos;re the one explaining the other 20%. Nobody changes how they
          work for a tool that&apos;s wrong one time in five. Nobody did.
        </p>
        <p>
          I spent a while working out why. The model was reading our Excel files less like a table
          and more like a long list of labels. It did well on the first few columns and got worse
          the further across it went. Better prompts didn&apos;t fix it. So I shelved it and felt a
          bit silly.
        </p>
        <div>
          <p>
            Around the middle of 2025 the models got a lot better. I went back, gave the same GPT
            the same spreadsheet and asked the same questions. It got about 95% right. I hadn&apos;t
            changed a thing.
          </p>
          <p className="mt-2 text-right font-hand text-3xl text-navy -rotate-2">
            it worked the second time
          </p>
        </div>
        <p>
          The lesson I took from it: sometimes your idea is fine and the model just isn&apos;t
          ready yet. So build it anyway, park it, and check back in a few months. Plenty of people
          try AI once, decide it doesn&apos;t work, and never look again. I nearly did.
        </p>
        <p>
          Since then I&apos;ve taught myself enough Python to turn a two-hour weekly Excel job into
          a few seconds, and most of what I build now happens in Cursor. The rest is in Projects,
          just below.
        </p>
      </div>
    </section>
  );
}
