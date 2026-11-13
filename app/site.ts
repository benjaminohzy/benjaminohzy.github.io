/**
 * Public site constants.
 * Change BOOK_A_CHAT_URL here when the coaching booking link moves.
 */

export const BOOK_A_CHAT_URL = "https://bencoachme.lovable.app";

/** Visible PLACEHOLDER marks in the preview. Flip off once Ben signs off the draft. */
export const SHOW_PLACEHOLDER_MARKS = true;

export const links = {
  linkedin: "https://www.linkedin.com/in/benohzy/",
  email: "mailto:g3.benjaminoh@gmail.com",
  coaching: BOOK_A_CHAT_URL,
  credly: "https://www.credly.com/users/benjamin-oh.c83d0d23/badges/credly",
  kith: "https://kithmanor.com",
  coachee: "https://coachee-sage.vercel.app",
  beerCan: "https://singaporerecords.com/longest-bar-slide-with-beer-can/",
  seaGamesRoster: "https://en.wikipedia.org/wiki/Softball_at_the_2015_Southeast_Asian_Games",
  seaGamesReport:
    "https://web.archive.org/web/20210413195228/https://www.redsports.sg/2015/06/06/sea-games-softball-men-singapore-malaysia/",
} as const;

export const navLinks = [
  { href: "#background", label: "Background" },
  { href: "#ai-work", label: "AI work" },
  { href: "#projects", label: "Projects" },
  { href: "#coaching", label: "Coaching" },
  { href: "#newsletter", label: "Newsletter" },
] as const;

export const primaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-[3px] bg-ink px-5 py-2.5 font-score text-base font-semibold tracking-wider text-cream uppercase transition-colors duration-200 hover:bg-sg-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export const secondaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-[3px] border border-ink bg-cream px-5 py-2.5 font-score text-base font-semibold tracking-wider text-ink uppercase transition-colors duration-200 hover:border-sg-red hover:text-sg-red focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export const sectionClass =
  "reveal gutter mx-auto w-full max-w-6xl scroll-mt-24 border-t border-ink/10 py-14 sm:py-20 lg:py-28";

export const headingClass =
  "font-score text-4xl leading-none font-bold text-ink uppercase sm:text-5xl lg:text-6xl";

// BCG is named on purpose. Approved for this redesign.
export const seo = {
  title: "Benjamin Oh | Where AI meets value creation",
  description:
    "I'm Ben. I work where AI meets value creation, taking AI offers to market at BCG.",
  url: "https://benjaminoh.com/",
} as const;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Benjamin Oh",
  alternateName: "Ben Oh",
  url: "https://benjaminoh.com/",
  jobTitle: "Global Offer Senior Manager - AI Transformations",
  worksFor: {
    "@type": "Organization",
    name: "BCG",
  },
  image: "https://benjaminoh.com/images/headshot.jpg",
  sameAs: [
    links.linkedin,
    links.kith,
    links.credly,
    links.seaGamesRoster,
    links.seaGamesReport,
  ],
};
