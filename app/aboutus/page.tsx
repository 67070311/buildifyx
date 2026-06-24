import type { Metadata } from "next";
import Hero from "./hero";
import Body from "./body";
import Team from "./team";
import Seeourwork from "./Seeourwork";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Our Software Studio",
  description:
    "Meet Buildifyx, a Bangkok software studio combining full-stack development, AI, data engineering, and UI/UX design to build useful digital products.",
  path: "/aboutus",
});

export default function AboutUsPage() {
  return (
    <>
      <Hero />;
      <Body />
      <Team />
      <Seeourwork />
    </>
  );
}
