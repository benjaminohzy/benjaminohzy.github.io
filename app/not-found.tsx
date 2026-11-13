import Link from "next/link";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { primaryButtonClass } from "./site";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center px-6 py-24 text-center sm:px-8">
        <h1 className="font-serif text-5xl font-medium text-ink sm:text-6xl">This page isn&apos;t here</h1>
        <p className="mt-4 max-w-md text-ink">
          Whatever you were looking for has moved, or the link is off.
        </p>
        <Link href="/" className={`${primaryButtonClass} mt-8`}>
          Back home
        </Link>
      </main>
      <Footer />
    </>
  );
}
