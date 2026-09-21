import type { Metadata } from "next";
import HomeExperience from "./home/HomeExperience";
import PageJsonLd from "@/components/PageJsonLd";
import { createPageMetadata } from "./seo";

export const metadata: Metadata = createPageMetadata({
  title: "Software Development, AI & Web Studio in Bangkok | Buildifyx",
  description:
    "Buildifyx builds websites, web applications, AI systems, data platforms, dashboards, SaaS, and digital products in Bangkok, Thailand. รับพัฒนาซอฟต์แวร์ เว็บไซต์ ระบบ AI และ Data สำหรับธุรกิจ",
  path: "/",
  keywords: [
    "software house Bangkok",
    "software studio Bangkok",
    "รับทำ software กรุงเทพ",
    "รับพัฒนา software",
    "AI software development Thailand",
  ],
  imageAlt: "Buildifyx software development studio in Bangkok, Thailand",
});

export default function HomePage() {
  return (
    <>
      <PageJsonLd
        name="Buildifyx — Software Development, AI & Web Studio in Bangkok"
        description="Buildifyx builds websites, web applications, AI systems, data platforms, dashboards, SaaS, and digital products in Bangkok, Thailand."
        path="/"
      />
      <HomeExperience />
    </>
  );
}
