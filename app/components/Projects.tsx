import Image from "next/image";
import { links } from "../site";
import { PlaceholderMark } from "./Placeholder";

const section =
  "reveal mx-auto w-full max-w-6xl scroll-mt-24 border-t border-navy/10 px-6 py-20 sm:px-8 sm:py-28";

type Project = {
  title: string;
  body: string;
  href?: string;
  status?: string;
  statusPlaceholder?: boolean;
  image?: string;
  fit?: "cover" | "contain";
  blurred?: boolean;
  placeholder?: boolean;
};

const projects: Project[] = [
  {
    title: "Personal OS",
    status: "In progress",
    body: "A set of AI agents that keep track of my bio, my AI notes, my projects and my coaching. Built in Claude Code. This site is one of the things it looks after.",
    image: "/images/personal-os-map.svg",
    fit: "contain",
  },
  {
    title: "Kith",
    href: links.kith,
    // PLACEHOLDER / TODO: Ben to confirm whether this status says "in progress", or whether Kith is live for anyone to sign up.
    status: "In progress",
    statusPlaceholder: true,
    body: "An app for keeping in touch with the people who matter. You keep notes on each person, log your chats with help from AI, and get a quick prep sheet before you meet. Each relationship lives in a room of a house, depending on how close you are.",
    image: "/images/kith-screenshot.jpeg",
  },
  {
    title: "Email workflow",
    status: "Cursor",
    body: "Pulls the data, does the analysis and drafts the email, in that order. I used to do all three by hand. Now I just read it and hit send.",
    image: "/images/cursor-icon.png",
    fit: "contain",
  },
  {
    title: "Pipeline dashboard",
    status: "Replit. Contents blurred.",
    body: "A pipeline tracker you can filter by system and region. It replaced the meeting where someone read an Excel tracker out loud. Nobody misses that meeting.",
    image: "/images/pipeline-dashboard.png",
    blurred: true,
  },
  {
    title: "My coaching site",
    href: links.coaching,
    body: "Built in Lovable from a few prompts. The first time I made something that looked like a real product without writing any code.",
    image: "/images/bencoachme-screenshot.png",
  },
  {
    // PLACEHOLDER / TODO: Ben to confirm this coachee card stays, and to replace the wording if he wants it tighter.
    title: "coachee",
    href: links.coachee,
    placeholder: true,
    body: "My ICF coaching session log. Session prep, reminders, hour tracking, and calendar invites. Built for me for now, and for friends later.",
  },
  {
    title: "Revenue script",
    status: "Python",
    body: "Splits our weekly revenue across practice areas and regions. It used to take me two hours in Excel. I learned Python in a week to write it, and now it runs in seconds.",
  },
  {
    title: "Team GPTs",
    status: "Custom GPTs",
    body: "The ones from the story above. Built too early, shelved, then brought back when the models caught up.",
    image: "/images/custom-gpt-logo.webp",
    fit: "contain",
  },
];

function ProjectMedia({ project }: { project: Project }) {
  if (!project.image) return null;

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-lavender/25">
      <Image
        src={project.image}
        alt=""
        fill
        sizes="(min-width: 768px) 280px, 100vw"
        className={
          project.fit === "contain"
            ? "object-contain p-8"
            : `object-cover object-top ${project.blurred ? "scale-105 blur-md" : ""}`
        }
      />
    </div>
  );
}

function ProjectCopy({ project }: { project: Project }) {
  return (
    <div>
      {project.placeholder ? <PlaceholderMark /> : null}
      <h3
        className={`font-serif text-2xl text-ink ${project.placeholder ? "mt-3" : ""} ${
          project.href ? "group-hover:underline group-hover:decoration-lavender group-hover:underline-offset-4" : ""
        }`}
      >
        {project.title}
      </h3>
      {project.status ? (
        <p className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted">
          {project.status}
          {project.statusPlaceholder ? <PlaceholderMark /> : null}
        </p>
      ) : null}
      <p className="mt-3 text-[1.02rem] leading-relaxed text-ink">{project.body}</p>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className={section}>
      <h2 className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        Things I&apos;ve built
      </h2>
      <p className="mt-6 max-w-2xl text-[1.05rem] leading-relaxed text-ink">
        Most of these were built badly first, then less badly. A few are still in the batting cage.
      </p>

      <div className="mt-10">
        {projects.map((project) => {
          const row = (
            <>
              <ProjectMedia project={project} />
              <ProjectCopy project={project} />
            </>
          );
          const className = project.image
            ? "grid gap-6 border-t border-navy/10 py-8 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:items-center"
            : "grid gap-6 border-t border-navy/10 py-8";

          if (project.href) {
            return (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className={`group ${className}`}
              >
                {row}
              </a>
            );
          }

          return (
            <article key={project.title} className={className}>
              {row}
            </article>
          );
        })}
      </div>
    </section>
  );
}
