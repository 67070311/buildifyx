import type { Metadata } from "next";
import Head from "./head";
import PageJsonLd from "@/components/PageJsonLd";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Buildifyx — Start a Software Project",
  description:
    "Contact Buildifyx in Bangkok to discuss a website, web application, AI system, data platform, dashboard, SaaS, or custom software project. ติดต่อทีม Buildifyx เพื่อเริ่มโปรเจกต์",
  path: "/Contact",
  keywords: [
    "contact software company Bangkok",
    "hire web developer Thailand",
    "จ้างทำเว็บไซต์",
    "จ้างพัฒนาระบบ",
    "ติดต่อบริษัทซอฟต์แวร์",
  ],
  imageAlt: "Contact Buildifyx software development team in Bangkok",
});

export default function HeadPage() {
  return (
    <>
      <PageJsonLd
        type="ContactPage"
        name="Contact Buildifyx"
        description="Contact Buildifyx in Bangkok to start a software, web, AI, data, SaaS, or digital product project."
        path="/Contact"
        breadcrumbs={[{ name: "Contact", path: "/Contact" }]}
      />
      <Head />
    </>
  );
}
