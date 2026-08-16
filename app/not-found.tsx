import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8">
        <p className="font-mono text-xs tracking-wide text-muted">STRIKE THREE</p>
        <h1 className="mt-4 font-serif text-5xl sm:text-6xl">Foul territory</h1>
        <p className="mt-4 max-w-md text-ink-soft">
          That page went out of play. Whatever you were looking for isn&apos;t on this field.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-ink px-5 py-2.5 text-sm text-paper transition-colors hover:bg-seam"
        >
          Back to home plate
        </Link>
      </main>
      <Footer />
    </>
  );
}
