"use client";

import { useActionState } from "react";
import { subscribe, type SubscribeResult } from "../actions/subscribe";
import { primaryButtonClass } from "../site";

export default function SubscribeForm() {
  const [state, formAction, isPending] = useActionState<SubscribeResult | null, FormData>(
    subscribe,
    null
  );

  if (state?.ok) {
    return <p className="mt-8 font-score text-2xl font-semibold text-ink">You&apos;re in. See you in the first one.</p>;
  }

  return (
    <form action={formAction} className="mt-8">
      <label htmlFor="newsletter-email" className="sr-only">
        Email
      </label>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="min-h-11 w-full rounded-[3px] border border-ink/20 bg-cream px-4 py-2.5 text-base text-ink placeholder:text-muted focus:border-ink focus:outline-none sm:max-w-xs sm:text-sm"
        />
        <button type="submit" disabled={isPending} className={`${primaryButtonClass} w-full disabled:opacity-60 sm:w-auto`}>
          {isPending ? "Sending" : "Send me the first one"}
        </button>
      </div>
      {state && !state.ok ? <p className="mt-3 text-sm text-ink">{state.error}</p> : null}
    </form>
  );
}
