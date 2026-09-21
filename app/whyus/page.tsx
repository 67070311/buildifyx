import type { Metadata } from "next";
import Whyus from "./hero";
import Body from "./body";
import Comment from "./comment";
import PageJsonLd from "@/components/PageJsonLd";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Why Buildifyx — Product Strategy, Design & Engineering",
  description:
    "See how Buildifyx combines product strategy, UI/UX, responsive development, software engineering, AI, and data into one practical product process from idea to launch.",
  path: "/whyus",
  keywords: [
    "product development team Thailand",
    "UI UX software development Bangkok",
    "digital product studio Thailand",
    "software product strategy",
  ],
  imageAlt: "Why Buildifyx product strategy, design and engineering",
});

export default function WhyUs() {
  return (
    <>
      <PageJsonLd
        name="Why Buildifyx"
        description="Buildifyx combines product strategy, design, engineering, AI, and data in one product process."
        path="/whyus"
        breadcrumbs={[{ name: "Why Us", path: "/whyus" }]}
      />
      <Whyus />
      <Body />
      <Comment />
    </>
  );
}
