import type { Metadata, Viewport } from "next";
import { Geist, Noto_Sans_Thai } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LanguageProvider from "@/components/LanguageProvider";
import { siteConfig } from "./seo";

/* =========================
   Fonts
========================= */

const geist = Geist({
  variable: "--font-geist",
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
    default: siteConfig.defaultTitle,
    template: "%s | Buildifyx",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,
  keywords: [...siteConfig.keywords],
  manifest: "/manifest.webmanifest",

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
    alternateLocale: [siteConfig.alternateLocale],
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
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

    title: siteConfig.defaultTitle,
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
    icon: "/logo/logo.png",
    shortcut: "/logo/logo.png",
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
        telephone: siteConfig.phone,

        address: {
          "@type": "PostalAddress",
          addressLocality: "Bangkok",
          addressCountry: "TH",
        },

        areaServed: ["Thailand", "Worldwide"],
        knowsAbout: [...siteConfig.services],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Buildifyx software and digital product services",
          itemListElement: siteConfig.services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service,
              provider: {
                "@id": `${siteConfig.url}/#organization`,
              },
              areaServed: ["Thailand", "Worldwide"],
            },
          })),
        },

        sameAs: siteConfig.socialLinks,

        contactPoint: {
          "@type": "ContactPoint",

          email: siteConfig.email,
          telephone: siteConfig.phone,
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
        inLanguage: ["th", "en"],

        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },

      },
    ],
  };

  /* =========================
     Render
  ========================= */

  return (
    <html
      lang="th"
      suppressHydrationWarning
      className={`${geist.variable} ${notoSansThai.variable}`}
    >
      <body className="min-h-screen bg-white text-black antialiased">
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />

        <LanguageProvider>
          {/* Navigation */}
          <Navbar />

          {/* Page Content */}
          <main className="min-h-screen bg-white text-black">{children}</main>

          {/* Footer */}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
