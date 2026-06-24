import type { Metadata } from "next";
import AboutUs from "@/home/AboutUs";
import Hero from "@/home/Hero";
import Problem from "@/home/Problem";
import WorkflowProblem from "@/home/WorkflowProblem";
import ImageSlider from "@/home/image";
import { createPageMetadata, siteConfig } from "./seo";

export const metadata: Metadata = createPageMetadata({
  title: "Buildifyx | Software Development, Web, AI & Data Studio",
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WorkflowProblem />
      <ImageSlider />
      <Problem />
    </>
  );
}
