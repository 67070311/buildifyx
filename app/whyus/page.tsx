import type { Metadata } from "next";
import Whyus from "./hero";
import Body from "./body";
import Comment from "./comment";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Why Choose Us",
  description:
    "Choose Buildifyx for practical strategy, modern UI/UX, reliable software engineering, AI and data expertise, responsive development, and client-focused delivery.",
  path: "/whyus",
});

export default function WhyUs() {
  return (
    <>
      <Whyus />
      <Body />
      <Comment />
    </>
  );
}
