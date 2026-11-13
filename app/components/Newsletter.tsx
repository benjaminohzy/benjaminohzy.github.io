import SubscribeForm from "./SubscribeForm";
import { headingClass, sectionClass } from "../site";

export default function Newsletter() {
  return (
    <section id="newsletter" className={sectionClass}>
      <h2 className={headingClass}>
        Newsletter
      </h2>
      <div className="mt-8 max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink">
        <p>
          One email a month. What I&apos;ve been building with AI, what&apos;s working, and what
          I&apos;m learning from coaching. Short enough to read with your morning coffee.
        </p>
        <p>It hasn&apos;t launched yet. Leave your email and the first one comes to you.</p>
      </div>
      <SubscribeForm />
    </section>
  );
}
