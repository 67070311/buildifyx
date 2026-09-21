import type { MetadataRoute } from "next";
import { siteConfig } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "/aboutus", changeFrequency: "monthly", priority: 0.8 },
    { path: "/whyus", changeFrequency: "monthly", priority: 0.8 },
    { path: "/mywork", changeFrequency: "weekly", priority: 0.9 },
    { path: "/playground", changeFrequency: "monthly", priority: 0.5 },
    { path: "/Contact", changeFrequency: "monthly", priority: 0.8 },
  ] as const;

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency,
    priority,
  }));
}
