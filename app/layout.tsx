import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Sidebar } from "@/components/layout/Sidebar";
import { MobileNav } from "@/components/layout/MobileNav";
import { GridBackground } from "@/components/layout/GridBackground";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/content/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.title}`,
    template: `%s — ${site.name}`,
  },
  description:
    "Full-stack software engineer with four years of experience building SaaS platforms, scalable backend services and high-performance web interfaces.",
  authors: [{ name: site.name, url: site.url }],
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — ${site.title}`,
    description:
      "Full-stack software engineer with four years of experience building SaaS platforms, scalable backend services and high-performance web interfaces.",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description:
      "Full-stack software engineer with four years of experience building SaaS platforms, scalable backend services and high-performance web interfaces.",
  },
  alternates: {
    canonical: site.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.title,
  email: `mailto:${site.email}`,
  url: site.url,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cottbus",
    addressCountry: "DE",
  },
  sameAs: [site.linkedinUrl, site.githubUrl],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#main-content" className="skip-link">
          SKIP TO CONTENT
        </a>
        <GridBackground />
        <CustomCursor />
        <Sidebar />
        <MobileNav />
        <div className="relative z-10 lg:pl-[248px] print:pl-0">
          <main
            id="main-content"
            className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] pt-[76px] lg:pt-0"
          >
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
