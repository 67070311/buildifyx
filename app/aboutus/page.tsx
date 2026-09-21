import type { Metadata } from "next";
import Hero from "./hero";
import Body from "./body";
import Seeourwork from "./Seeourwork";
import PageJsonLd from "@/components/PageJsonLd";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Buildifyx — Full-Stack, AI & Data Team",
  description:
    "Meet Buildifyx, a Bangkok software studio combining full-stack engineering, AI, data, and product design to build websites, applications, and digital products for real businesses.",
  path: "/aboutus",
  keywords: [
    "Buildifyx team",
    "full stack developer Bangkok",
    "AI engineer Thailand",
    "data engineer Bangkok",
    "software team Thailand",
  ],
  imageAlt: "About the Buildifyx software, AI and data team",
});

export default function AboutUsPage() {
  return (
    <>
      <PageJsonLd
        type="AboutPage"
        name="About Buildifyx"
        description="Meet the Buildifyx full-stack, AI, data, and product design team in Bangkok."
        path="/aboutus"
        breadcrumbs={[{ name: "About Us", path: "/aboutus" }]}
      />
      <Hero />
      <Body />
      <Seeourwork />
    </>
  );
}
