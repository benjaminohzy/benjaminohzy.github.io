import { SHOW_PLACEHOLDER_MARKS } from "../site";

export function PlaceholderMark() {
  if (!SHOW_PLACEHOLDER_MARKS) return null;

  return (
    <span className="inline-block rounded-sm bg-lavender/70 px-1.5 py-0.5 align-middle font-sans text-[10px] font-semibold tracking-[0.14em] text-navy">
      PLACEHOLDER
    </span>
  );
}
