import type { MetadataRoute } from "next";
import { siteConfig } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "monthly", priority: 1 },
    { path: "/aboutus", changeFrequency: "yearly", priority: 0.8 },
    { path: "/whyus", changeFrequency: "yearly", priority: 0.8 },
    { path: "/mywork", changeFrequency: "monthly", priority: 0.9 },
    { path: "/Contact", changeFrequency: "yearly", priority: 0.7 },
  ] as const;

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency,
    priority,
  }));
}
