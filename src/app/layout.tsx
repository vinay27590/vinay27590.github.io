import type { Metadata, Viewport } from "next";
import { Overpass } from "next/font/google";
import "../globals.css";
import { Navbar } from "@/components/Navbar";
import { themeInitScript } from "@/components/themeScript";
import { SITE_URL, contact, profile } from "@/components/data";

const overpass = Overpass({
  subsets: ["latin"],
  variable: "--font-overpass",
  display: "swap",
});

const title = `${profile.name} | ${profile.role}`;
const description =
  "Java full-stack developer in Indore with 6+ years in IT: Spring Boot, WebFlux, PostgreSQL, Vue, Angular and React. Building LaundryOS and FlexPulse end to end.";
const shareDescription =
  "Spring Boot, WebFlux, multi-tenant platforms and AI features. Building LaundryOS and FlexPulse end to end.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: SITE_URL }],
  creator: profile.name,
  keywords: [
    profile.name,
    profile.role,
    "Java Developer",
    "Spring Boot Developer",
    "Full Stack Developer Indore",
    ...profile.stack,
    "Portfolio",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    firstName: "Vinay",
    lastName: "Chouhan",
    siteName: profile.name,
    locale: "en_IN",
    title,
    description: shareDescription,
    url: "/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: shareDescription,
    images: ["/og.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description,
  url: SITE_URL,
  image: `${SITE_URL}/images/vinay-runfinity.jpg`,
  email: `mailto:${contact.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  knowsAbout: ["Java", ...profile.stack],
  sameAs: [contact.linkedin, contact.github, contact.hackerrank],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#15171c" },
    { media: "(prefers-color-scheme: dark)", color: "#1f232a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={overpass.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body>
        <a
          href="#projects"
          className="sr-only focus:not-sr-only focus:fixed focus:top-16 focus:left-4 focus:z-[60] focus:rounded-[3px] focus:bg-ink focus:text-paper focus:px-4 focus:py-2"
        >
          Skip to projects
        </a>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
