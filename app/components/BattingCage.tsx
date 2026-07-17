import Image from "next/image";

const projects = [
  {
    title: "Personal OS",
    description:
      "A multi-agent system that manages my bio, AI journey, portfolio, and coaching practice. Built in Claude Code. This site is part of it.",
    image: "/images/personal-os-map.svg",
    tags: ["Claude Code", "Multi-agent", "In progress"],
  },
  {
    title: "Kith",
    description:
      "A personal relationship manager for staying intentional about the people in your life. Profiles, AI conversation logging, prep sheets before meetings, and a house dashboard where each room represents where a relationship stands.",
    image: "/images/kith-screenshot.jpeg",
    tags: ["AI", "Product"],
  },
  {
    title: "End-to-end email workflow",
    description:
      "A Cursor-built workflow that chains data extraction, analysis, and email drafting into one sequence. Three steps that used to be manual, now run in order.",
    image: "/images/cursor-icon.png",
    tags: ["Cursor", "Workflow"],
  },
  {
    title: "Pipeline dashboard",
    description:
      "A visual pipeline tracker built in Replit with filters by system and region. Replaced the old format of reading through an Excel tracker out loud in meetings.",
    image: "/images/pipeline-dashboard.png",
    tags: ["Replit", "Dashboard"],
    blurred: true,
  },
  {
    title: "bencoachme.lovable.app",
    description:
      "My coaching website. Vibe coded in Lovable from a few prompts. First time I shipped something that looked like a real product without writing a single line of code.",
    image: "/images/bencoachme-screenshot.png",
    tags: ["Lovable", "No-code"],
    href: "https://bencoachme.lovable.app",
  },
  {
    title: "Revenue analysis script",
    description:
      "A Python script that automates a weekly revenue split across practice areas and regions. Used to take two hours manually in Excel. Now runs in seconds.",
    tags: ["Python", "Automation"],
  },
  {
    title: "Team GPTs",
    description:
      "Three custom GPTs built for internal team use: asset lookups, capability finders, and affiliation checks. Built early, shelved, then revived when the models caught up. A lesson in building early and coming back.",
    image: "/images/custom-gpt-logo.webp",
    tags: ["Custom GPTs", "Internal"],
  },
];

export default function BattingCage() {
  return (
    <section
      id="batting-cage"
      className="relative z-[2] mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-32"
    >
      <p className="font-mono text-xs tracking-wide text-muted">02 / BATTING CAGE</p>
      <h2 className="mt-2 font-serif text-3xl sm:text-4xl">Projects &amp; experiments</h2>
      <p className="mt-4 max-w-2xl text-ink-soft">
        Where I work on my swing before anyone is watching. No pressure, just reps. These are my AI
        projects and experiments. Some worked. Some did not. All of them taught me something.
      </p>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const Wrapper = project.href ? "a" : "div";
          return (
            <Wrapper
              key={project.title}
              {...(project.href
                ? { href: project.href, target: "_blank", rel: "noreferrer" }
                : {})}
              className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper-2/60 transition-colors hover:border-seam"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-paper-2">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover ${project.blurred ? "blur-md" : ""}`}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm text-muted">
                    Screenshot coming
                  </div>
                )}
                {project.blurred && (
                  <span className="absolute right-3 bottom-3 rounded-full bg-ink/80 px-3 py-1 text-xs text-paper">
                    Contents blurred
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <p className="font-serif text-lg">{project.title}</p>
                <p className="flex-1 text-sm text-ink-soft">{project.description}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-0.5 font-mono text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
