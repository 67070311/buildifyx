import type { Metadata } from "next";

export const siteConfig = {
  name: "Buildifyx",
  legalName: "Buildifyx Co., Ltd.",
  url: "https://buildifyx.com",
  locale: "en_US",
  description:
    "Buildifyx is a software development company in Bangkok, Thailand. We build websites, web applications, AI systems, data platforms, dashboards, and SaaS products.",
  email: "buildifyX.th@gmail.com",
  socialLinks: [
    "https://www.instagram.com/buildifyx_studio",
    "https://www.facebook.com/share/1BnqzyphJ2/",
    "https://www.tiktok.com/@buildifyx",
  ],
} as const;

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: canonicalPath,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} software development company`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
