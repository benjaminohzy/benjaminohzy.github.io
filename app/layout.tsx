import type { Metadata } from "next";
import { Playfair_Display, Inter, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://benjaminoh.com"),
  title: "Benjamin Oh — AI GTM · Coach · Former National Athlete",
  description: "Benjamin Oh. AI GTM, coaching, building with AI.",
  openGraph: {
    title: "Benjamin Oh — AI GTM · Coach · Former National Athlete",
    description: "Benjamin Oh. AI GTM, coaching, building with AI.",
    url: "https://benjaminoh.com",
    siteName: "Benjamin Oh",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benjamin Oh — AI GTM · Coach · Former National Athlete",
    description: "Benjamin Oh. AI GTM, coaching, building with AI.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="grain antialiased font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
