"use client";

import { useActionState } from "react";
import { subscribe, type SubscribeResult } from "../actions/subscribe";

export default function SubscribeForm() {
  const [state, formAction, isPending] = useActionState<SubscribeResult | null, FormData>(
    subscribe,
    null
  );

  if (state?.ok) {
    return (
      <p className="mt-6 font-serif text-lg text-ink">
        You&apos;re on the list. First one lands whenever it launches.
      </p>
    );
  }

  return (
    <form action={formAction} className="mt-6">
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="w-full rounded-full border border-line bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-seam focus:outline-none sm:max-w-xs"
        />
        <button
          type="submit"
          disabled={isPending}
          className="rounded-full bg-ink px-6 py-2.5 text-sm text-paper transition-colors hover:bg-seam disabled:opacity-60"
        >
          {isPending ? "Subscribing…" : "Notify me when it launches"}
        </button>
      </div>
      {state && !state.ok && (
        <p className="mt-3 text-sm text-seam">{state.error}</p>
      )}
    </form>
  );
}
