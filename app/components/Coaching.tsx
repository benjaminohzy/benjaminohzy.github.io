import { BOOK_A_CHAT_URL, primaryButtonClass } from "../site";
import { PlaceholderMark } from "./Placeholder";

const section =
  "reveal mx-auto w-full max-w-6xl scroll-mt-24 border-t border-navy/10 px-6 py-20 sm:px-8 sm:py-28";

export default function Coaching() {
  return (
    <section id="coaching" className={section}>
      <h2 className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        Coaching
      </h2>
      <div className="mt-8 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink">
        <p>
          I got a coach before I became one. I&apos;d built a career that looked right on paper and
          never stopped to ask if I actually wanted it. My coach didn&apos;t give me answers.
        </p>
        {/* PLACEHOLDER / TODO: Ben to confirm his coach's gender, or change "She" to "They" or "My coach". */}
        <div className="space-y-2">
          <PlaceholderMark />
          <p>She asked better questions than I was asking myself.</p>
        </div>
      </div>

      <div className="mt-12 max-w-2xl space-y-8 text-[1.05rem] leading-relaxed text-ink">
        <div>
          <h3 className="font-serif text-2xl text-ink">Who it&apos;s for</h3>
          <p className="mt-3">
            People who feel stuck. Maybe you&apos;re thinking about a career change, or a move, or
            you&apos;ve just got a new role and you&apos;re not sure how to show up in it. Maybe
            things look fine from the outside and you can&apos;t work out why they don&apos;t feel
            fine. You don&apos;t need a clear question to start.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-ink">What I do</h3>
          <p className="mt-3">
            I listen and I ask questions. You do most of the talking and all of the deciding.
            I&apos;ll help you get clear on what you want and what&apos;s in the way, then we work
            out a first step you&apos;ll actually take.
          </p>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-ink">What I don&apos;t do</h3>
          {/* PLACEHOLDER / TODO: Ben to confirm he is happy to say he is not a therapist, and that he won't rewrite a CV. */}
          <div className="mt-3 space-y-2">
            <PlaceholderMark />
            <p>
              I don&apos;t give advice or tell you what to do with your life. I&apos;m not a
              therapist either, and I won&apos;t rewrite your CV.
            </p>
          </div>
        </div>
      </div>

      {/* TODO: Ben to add one line on whether sessions are online, in person in London, or both. The draft has no wording for this, so nothing was invented. */}
      <p className="mt-10 max-w-2xl text-[1.05rem] text-ink">
        I&apos;m ICF-accredited (Associate Certified Coach, 2025).
      </p>

      <div className="mt-10 max-w-3xl rounded-3xl bg-lavender/45 px-6 py-8 sm:px-10 sm:py-10">
        {/* PLACEHOLDER / TODO: Ben to confirm whether the first chat is free. Draft wording does not say free. */}
        <PlaceholderMark />
        <p className="mt-4 max-w-2xl font-serif text-2xl leading-snug text-ink sm:text-[1.7rem]">
          If something&apos;s been on your mind for months and you still haven&apos;t said it out
          loud, book a chat. The first one takes 60 minutes. Worst case, you get an hour to think
          out loud with someone who has no stake in what you decide.
        </p>
        <a
          href={BOOK_A_CHAT_URL}
          target="_blank"
          rel="noreferrer"
          className={`${primaryButtonClass} mt-6`}
        >
          Book a chat
        </a>
      </div>
    </section>
  );
}
