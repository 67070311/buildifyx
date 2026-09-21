import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Buildifyx — Software, AI & Digital Product Studio",
    short_name: "Buildifyx",
    description:
      "Software development, web applications, AI systems, data platforms, dashboards, SaaS, and digital products from Bangkok, Thailand.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2f7fff",
    lang: "th",
    icons: [
      {
        src: "/logo/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
