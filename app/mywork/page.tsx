import type { Metadata } from "next";
import BDXA from "./BDXA";
import POS from "./POS";
import Bigger from "./bigger";
import Product from "./product";
import PageJsonLd from "@/components/PageJsonLd";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Software, AI & Digital Product Portfolio",
  description:
    "Explore Buildifyx products and software projects including bdxa, Simple POS, Bigger, web applications, AI tools, and experimental digital products built for real use.",
  path: "/mywork",
  keywords: [
    "software portfolio Thailand",
    "web application portfolio",
    "AI product portfolio",
    "POS development Thailand",
    "SaaS portfolio Bangkok",
  ],
  imageAlt: "Buildifyx software, AI and digital product portfolio",
});

export default function MyWork() {
  return (
    <main className="overflow-hidden bg-white">
      <PageJsonLd
        type="CollectionPage"
        name="Buildifyx Software, AI & Digital Product Portfolio"
        description="Explore software products and digital projects built by Buildifyx."
        path="/mywork"
        breadcrumbs={[{ name: "Our Work", path: "/mywork" }]}
      />
      <BDXA />
      <POS />
      <Bigger />
      <Product />
    </main>
  );
}
