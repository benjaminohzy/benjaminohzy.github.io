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
  { href: "#about", label: "About" },
  { href: "#ai-work", label: "AI work" },
  { href: "#projects", label: "Projects" },
  { href: "#coaching", label: "Coaching" },
  { href: "#newsletter", label: "Newsletter" },
] as const;

export const primaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-5 py-2.5 text-sm text-cream transition-colors duration-200 hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy";

export const secondaryButtonClass =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-navy/25 bg-cream px-5 py-2.5 text-sm text-navy transition-colors duration-200 hover:border-navy hover:bg-lavender/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-navy";

export const sectionClass =
  "reveal gutter mx-auto w-full max-w-6xl scroll-mt-24 border-t border-navy/10 py-14 sm:py-20 lg:py-28";

export const headingClass =
  "font-serif text-3xl font-medium tracking-tight text-ink sm:text-4xl lg:text-5xl";

// BCG is named on purpose. Approved for this redesign.
export const seo = {
  title: "Benjamin Oh | AI go-to-market at BCG, and a career coach",
  description:
    "I'm Ben. I work on how BCG sells AI and coach people who feel stuck. Here's my story, what I've built with AI, and how to book a chat.",
  url: "https://benjaminoh.com/",
} as const;

/**
 * Approved hero paragraph (version A). Shown until a chapter is chosen.
 * PLACEHOLDER: Ben to refine this before launch. Draft wording only.
 */
export const heroStory =
  "I grew up in Singapore in a family that didn't have much. My parents worked seven days a week. I repeated a year of junior college because my grades weren't good enough. In 2015 I got cut from the SEA Games softball squad, went to a training camp in Japan anyway, and made it back. We won bronze with my whole family in the stands. Then average uni results and a lot of rejection emails.";

/** Portrait on the cover, before a chapter is chosen. */
export const coverPhoto = "/images/headshot.jpg";

/**
 * Click order follows the photos already on the page: the cover headshot,
 * then the SEA Games photo in About, then the Sierra Leone photo in About.
 * `label` is the section header. `text` is existing copy, not new facts.
 * `focus` is the crop for the square frame.
 */
export const storyChapters = [
  {
    id: "seagames",
    label: "How I got here",
    photo: "/images/seagames.jpg",
    focus: "object-center",
    text: "In 2015 I got cut from the SEA Games softball squad, went to a training camp in Japan anyway, and made it back. We won bronze with my whole family in the stands.",
  },
  {
    id: "sierra-leone",
    label: "Sierra Leone",
    photo: "/images/sierra-leone-1.jpg",
    focus: "object-left",
    text: "That job was in restructuring at Borrelli Walsh. For three years I worked on companies that were in trouble across Southeast Asia, and once on site in Sierra Leone.",
  },
] as const;

// TODO: Ben still to confirm the job title wording ("AI Senior Offer Manager").
// TODO: Ben still to confirm the two SEA Games sources at the end of sameAs.
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Benjamin Oh",
  alternateName: "Ben Oh",
  url: "https://benjaminoh.com/",
  jobTitle: "AI Senior Offer Manager",
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
