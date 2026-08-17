"use server";

import { Resend } from "resend";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type SubscribeResult = { ok: true } | { ok: false; error: string };

export async function subscribe(
  _prevState: SubscribeResult | null,
  formData: FormData
): Promise<SubscribeResult> {
  const email = String(formData.get("email") ?? "").trim();

  if (!email || !EMAIL_RE.test(email)) {
    return { ok: false, error: "Enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    return { ok: false, error: "Signups aren't set up yet. Try again later." };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.contacts.create({ email, audienceId });

  if (error) {
    return { ok: false, error: "Something went wrong. Try again in a moment." };
  }

  return { ok: true };
}
