import type { Metadata } from "next";

export const siteConfig = {
  name: "Buildifyx",
  legalName: "Buildifyx Co., Ltd.",
  url: "https://buildifyx.com",
  locale: "th_TH",
  alternateLocale: "en_US",
  defaultTitle: "Buildifyx | Software Development, AI & Web Studio Bangkok",
  description:
    "Buildifyx is a Bangkok software studio building websites, web applications, AI systems, data platforms, dashboards, SaaS, and digital products for real business use.",
  descriptionTh:
    "Buildifyx คือทีมพัฒนาซอฟต์แวร์ในกรุงเทพฯ รับพัฒนาเว็บไซต์ Web Application ระบบ AI ระบบ Data Dashboard SaaS และ Digital Product สำหรับใช้งานจริงทางธุรกิจ",
  email: "buildifyX.th@gmail.com",
  phone: "+66 64 580 9429",
  city: "Bangkok",
  country: "Thailand",
  socialLinks: [
    "https://www.instagram.com/buildifyx_studio",
    "https://www.facebook.com/share/1BnqzyphJ2/",
    "https://www.tiktok.com/@buildifyx",
  ],
  services: [
    "Software Development",
    "Web Development",
    "Web Application Development",
    "AI Development",
    "Data Engineering",
    "Dashboard Development",
    "UI/UX Design",
    "SaaS Development",
    "Digital Product Development",
  ],
  keywords: [
    "Buildifyx",
    "software development company Thailand",
    "software development Bangkok",
    "web development Bangkok",
    "web application development Thailand",
    "AI development company Thailand",
    "AI development Bangkok",
    "data engineering Thailand",
    "dashboard development",
    "UI UX design Thailand",
    "SaaS development Thailand",
    "digital product development",
    "บริษัทพัฒนาซอฟต์แวร์",
    "บริษัททำเว็บไซต์ กรุงเทพ",
    "รับทำเว็บไซต์",
    "รับพัฒนาเว็บแอป",
    "รับพัฒนาระบบ",
    "พัฒนาระบบ AI",
    "รับทำ dashboard",
  ],
} as const;

type PageMetadata = {
  title: string;
  description: string;
  path: string;
  keywords?: readonly string[];
  imageAlt?: string;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalized, siteConfig.url).toString();
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  imageAlt = "Buildifyx software development, AI, web and data studio in Bangkok",
  noIndex = false,
}: PageMetadata): Metadata {
  const canonicalPath = path.startsWith("/") ? path : `/${path}`;
  const mergedKeywords = Array.from(new Set([...siteConfig.keywords, ...keywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalPath,
    },
    robots: noIndex
      ? {
          index: false,
          follow: true,
        }
      : {
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
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      alternateLocale: [siteConfig.alternateLocale],
      url: canonicalPath,
      siteName: siteConfig.name,
      title,
      description,
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: imageAlt,
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
