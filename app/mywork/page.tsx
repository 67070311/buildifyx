import type { Metadata } from "next";
import Head from "./head";
import Work from "./work";
import Product from "./product";
import POS from "./POS";
import Bigger from "./bigger";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Web, Software & Digital Product Portfolio",
  description:
    "Explore Buildifyx projects across corporate websites, e-commerce, dashboards, digital platforms, UI/UX design, and custom software development.",
  path: "/mywork",
});

export default function MyWork() {
  return (
    <>
      <Bigger />
      <POS />
      <Product />
      <Head />
    </>
  );
}
