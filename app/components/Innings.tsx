"use client";

import { useEffect, useRef, useState } from "react";

const timeline = [
  {
    date: "2H 2023",
    title: "First access",
    body: "My company ran an early ChatGPT Enterprise pilot and I was one of the users. I started using it for email drafts, ideas, thinking out loud. My first instinct was to treat it like a search engine, asking it everything. It worked, but it was not the best use of it. The shift came when I stopped asking for answers and started asking it to help me think.",
  },
  {
    date: "1H 2024",
    title: "Becoming the person who shows others",
    body: "Being one of the early users, I was nominated as a Black Belt, someone who helps others adopt the tool. I joined the Global GenAI Enablement Network for the SEA Knowledge team. Then in May I organised a Lunch and Learn for the team, covering use cases across Excel, slide writing, and email drafts. You could sense that people were slow to jump on the train. You need to show them it is doable before they will join you. That is how we approached it.",
  },
  {
    date: "2H 2024",
    title: "Moving countries, going deeper",
    body: "I relocated from Singapore to London in November. In the middle of that transition, how I used AI shifted. Less about output, more about thinking. Deep research. Getting oriented on a new topic in minutes instead of days. Quiet but consistent progress.",
  },
  {
    date: "1H 2025",
    title: "New team, first real builds",
    body: "Moved into the tech capability arm of the company, which put me closer to AI and the tools being built around it. One of the first things I did was build custom GPTs for the team, asset lookups, capability finders, affiliation checks. It did not work well. Accuracy was around 80%. The models at the time struggled to read Excel reliably. I figured out why: the model reads a spreadsheet more like JSON than a table. It forms connections based on how you categorise each column, catching the first few well and losing accuracy the further along you go. Not convincing enough for people to change their workflow. I had built the right thing at the wrong time. I was also using AI differently by then, designing agendas, workshop structures, facilitation guides. AI as a thinking partner for how to run a room, not just what to put in a deck.",
  },
  {
    date: "2H 2025",
    title: "The models caught up",
    body: "Somewhere in mid-2025, the capability experienced a step change. I went back to the GPT I had built and abandoned. Fed it the same Excel file. Asked the same questions. Accuracy jumped from around 80% to 95%. The tool I had built months earlier and given up on suddenly worked. That taught me something about AI adoption most people miss: sometimes the tool is not the problem. The model just was not ready. You build early, you wait, and you come back. Then in August, during our annual learning week, I used ChatGPT to learn Python from scratch. I had a specific problem: every week I spent two hours manually splitting revenue numbers across different cuts. By the end of the week I had a script that did it in seconds.",
  },
  {
    date: "1H 2026",
    title: "Building systems, not just scripts",
    body: "Used Replit to build a pipeline dashboard for commercial reporting, after seeing a colleague build one for their region. Filters by system and region. More engaging than reading through an Excel tracker in a meeting. Then moved to Cursor, building on top of my colleague's orchestration work, not one-off scripts but full workflows. Data extraction, analysis, auto-drafted email, ready for me to review and send. That is where I am now. Not a developer. A non-technical person who can build working tools because I learned to describe what I want clearly enough for the AI to write it.",
  },
];

const learnings = [
  "AI is a creative problem solving tool. The clearer you think, the better it works. Clarity of thought is the skill, not coding.",
  "Adapt, adapt, adapt. New tools, new models, new skills. Whatever you know today will not be enough tomorrow. The people getting ahead are the ones who keep going.",
  "Learn by doing. You will not figure it out by reading about it. Start, make mistakes, adjust.",
  "Not sure where to start? Expose yourself to what others are building. The bar has dropped. Everyone can build with models now. You just need to begin.",
  "Think wider. It started with one use case, then a skill, then an agent, now managing context across systems. Build systems, not one-off tools.",
];

function InningsTimeline() {
  const [active, setActive] = useState(-1);
  const [pinned, setPinned] = useState<number | null>(null);
  const pinnedRef = useRef<number | null>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    pinnedRef.current = pinned;
  }, [pinned]);

  useEffect(() => {
    let ticking = false;

    function updateActiveByCenter() {
      ticking = false;
      if (pinnedRef.current !== null) return;
      const center = window.innerHeight / 2;
      let closest = -1;
      let closestDist = Infinity;
      rowRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - center);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });
      setActive(closestDist < window.innerHeight / 2 ? closest : -1);
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(updateActiveByCenter);
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  function handleClick(i: number) {
    if (pinned === i) {
      setPinned(null);
      setActive(-1);
    } else {
      setPinned(i);
      setActive(i);
    }
  }

  return (
    <div className="mt-12">
      {timeline.map((entry, i) => {
        const isActive = active === i;
        return (
          <div
            key={entry.date}
            ref={(el) => {
              rowRefs.current[i] = el;
            }}
            className="border-t border-line last:border-b"
          >
            <button
              type="button"
              onClick={() => handleClick(i)}
              aria-expanded={isActive}
              aria-controls={`inning-body-${i}`}
              className="flex w-full items-center gap-4 py-3.5 text-left"
            >
              <span
                className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-[3px] border font-mono text-base tabular-nums transition-colors duration-300 ${
                  isActive
                    ? "border-seam bg-seam text-paper"
                    : "border-line bg-paper-2 text-muted"
                }`}
              >
                {i + 1}
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="font-mono text-[11px] tracking-wide text-muted">
                  {entry.date}
                </span>
                <span
                  className={`font-serif text-base transition-colors duration-300 sm:text-lg ${
                    isActive ? "text-ink" : "text-ink-soft"
                  }`}
                >
                  {entry.title}
                </span>
              </span>
              <span
                className={`ml-auto flex-shrink-0 text-muted transition-transform duration-300 ${
                  isActive ? "-rotate-180 text-seam" : ""
                }`}
              >
                &#9660;
              </span>
            </button>
            <div
              id={`inning-body-${i}`}
              role="region"
              aria-label={`${entry.date} — ${entry.title}`}
              className="grid transition-[grid-template-rows,opacity] duration-[450ms] ease-out"
              style={{
                gridTemplateRows: isActive ? "1fr" : "0fr",
                opacity: isActive ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 text-sm leading-relaxed text-ink-soft">
                  {entry.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Innings() {
  return (
    <section
      id="innings"
      className="relative z-[2] mx-auto w-full max-w-6xl px-6 py-24 sm:px-8 sm:py-32"
    >
      <p className="font-mono text-xs tracking-wide text-muted">01 / THE INNINGS</p>
      <h2 className="mt-2 font-serif text-3xl sm:text-4xl">AI journey</h2>
      <p className="mt-4 max-w-2xl text-ink-soft">
        Some innings you score. Some you go three up, three down. In softball, each inning is a new
        chance. This is my record of both — what I tried in my AI journey, what clicked, and what I
        walked away from knowing more than when I started.
      </p>

      <InningsTimeline />

      <div className="mt-20 border-t border-line pt-10">
        <h3 className="font-serif text-2xl">Things I have learned</h3>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {learnings.map((learning, index) => (
            <div key={learning.slice(0, 20)} className="flex gap-4">
              <span className="font-mono text-sm text-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-ink-soft">{learning}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
