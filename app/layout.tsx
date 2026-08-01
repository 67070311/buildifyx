import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_Thai } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "./seo";

/* =========================
   Fonts
========================= */

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

/* =========================
   Metadata / SEO
========================= */

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: "Buildifyx | Software Development, Web, AI & Data Studio",
    template: "%s | Buildifyx",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  keywords: [
    "Buildifyx",
    "software development company Thailand",
    "web development Bangkok",
    "web application development",
    "AI development company",
    "data engineering",
    "dashboard development",
    "UI UX design",
    "SaaS development",
    "บริษัทพัฒนาซอฟต์แวร์",
    "รับทำเว็บไซต์",
    "พัฒนาระบบ AI",
  ],

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  creator: siteConfig.name,
  publisher: siteConfig.name,

  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",

    siteName: siteConfig.name,

    title: "Buildifyx | Software Development, Web, AI & Data Studio",

    description: siteConfig.description,

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Buildifyx software development company",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Buildifyx | Software Development, Web, AI & Data Studio",

    description: siteConfig.description,

    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,

      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/logo/logo.png",
  },
};

/* =========================
   Viewport
========================= */

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

/* =========================
   Root Layout
========================= */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* =========================
     Structured Data
  ========================= */

  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Organization",

        "@id": `${siteConfig.url}/#organization`,

        name: siteConfig.name,

        legalName: siteConfig.legalName,

        url: siteConfig.url,

        logo: `${siteConfig.url}/logo/logo.png`,

        description: siteConfig.description,

        foundingDate: "2025",

        email: siteConfig.email,

        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangkok",
          addressCountry: "TH",
        },

        areaServed: ["Thailand", "Worldwide"],

        knowsAbout: [
          "Software Development",
          "Web Development",
          "Web Applications",
          "Artificial Intelligence",
          "Data Engineering",
          "UI/UX Design",
          "SaaS Development",
        ],

        sameAs: siteConfig.socialLinks,

        contactPoint: {
          "@type": "ContactPoint",

          email: siteConfig.email,

          contactType: "sales",

          availableLanguage: ["English", "Thai"],
        },
      },

      {
        "@type": "WebSite",

        "@id": `${siteConfig.url}/#website`,

        url: siteConfig.url,

        name: siteConfig.name,

        description: siteConfig.description,

        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },

        inLanguage: ["en", "th"],
      },
    ],
  };

  /* =========================
     Render
  ========================= */

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} ${notoSansThai.variable}`}
    >
      <body className="min-h-screen bg-white text-black antialiased">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        {/* Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="min-h-screen bg-white text-black">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
