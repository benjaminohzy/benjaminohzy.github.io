const links = [
  { href: "#bio", label: "Bio" },
  { href: "#innings", label: "The Innings" },
  { href: "#batting-cage", label: "Batting Cage" },
  { href: "#coaching", label: "Coaching" },
  { href: "#dugout", label: "The Dugout" },
];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 border-b border-line/60 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#bio" className="font-serif text-lg">
          Benjamin Oh
        </a>
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs tracking-wide text-ink-soft">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-seam">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:g3.benjaminoh@gmail.com"
              className="rounded-full border border-line px-3 py-1 transition-colors hover:border-seam hover:text-seam"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
