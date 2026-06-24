import type { Metadata } from "next";
import Head from "./head";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Our Software Development Team",
  description:
    "Contact Buildifyx in Bangkok, Thailand to discuss websites, web applications, digital products, AI systems, data platforms, dashboards, and SaaS development.",
  path: "/Contact",
});

export default function HeadPage() {
  return (
    <>
      <Head />
    </>
  );
}
