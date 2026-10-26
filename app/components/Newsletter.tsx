import SubscribeForm from "./SubscribeForm";
import { PlaceholderMark } from "./Placeholder";

const section =
  "reveal mx-auto w-full max-w-6xl scroll-mt-24 border-t border-navy/10 px-6 py-20 sm:px-8 sm:py-28";

export default function Newsletter() {
  return (
    <section id="newsletter" className={section}>
      <h2 className="font-serif text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        Newsletter
      </h2>
      <div className="mt-8 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink">
        <p>
          One email a month. What I&apos;ve been building with AI, what&apos;s working, and what
          I&apos;m learning from coaching. Short enough to read with your morning coffee.
        </p>
        {/* PLACEHOLDER / TODO: Ben to confirm the newsletter name and roughly when it starts. */}
        <div className="space-y-2">
          <PlaceholderMark />
          <p>It hasn&apos;t launched yet. Leave your email and the first one comes to you.</p>
        </div>
      </div>
      <SubscribeForm />
    </section>
  );
}
