import type { Metadata } from "next";
import BDXA from "./BDXA";
import POS from "./POS";
import Bigger from "./bigger";
import Product from "./product";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Work — Software, AI & Digital Products",
  description:
    "Explore Buildifyx products including bdxa, Simple POS, Bigger, and experimental digital products.",
  path: "/mywork",
});

export default function MyWork() {
  return (
    <main className="overflow-hidden bg-white">
      <BDXA />
      <POS />
      <Bigger />
      <Product />
    </main>
  );
}
