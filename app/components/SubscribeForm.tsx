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
    return <p className="mt-8 font-serif text-2xl text-ink">You&apos;re in. See you in the first one.</p>;
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
          className="w-full rounded-full border border-navy/20 bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-navy focus:outline-none sm:max-w-xs"
        />
        <button type="submit" disabled={isPending} className={`${primaryButtonClass} disabled:opacity-60`}>
          {isPending ? "Sending" : "Send me the first one"}
        </button>
      </div>
      {state && !state.ok ? <p className="mt-3 text-sm text-navy">{state.error}</p> : null}
    </form>
  );
}
