import { absoluteUrl, siteConfig } from "@/app/seo";

type PageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

type Breadcrumb = {
  name: string;
  path: string;
};

export default function PageJsonLd({
  type = "WebPage",
  name,
  description,
  path,
  breadcrumbs = [],
}: {
  type?: PageType;
  name: string;
  description: string;
  path: string;
  breadcrumbs?: Breadcrumb[];
}) {
  const url = absoluteUrl(path);
  const breadcrumbItems = [
    { name: "Home", path: "/" },
    ...breadcrumbs,
  ].map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  }));

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type,
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        isPartOf: {
          "@id": `${siteConfig.url}/#website`,
        },
        about: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: ["th", "en"],
      },
      ...(breadcrumbItems.length > 1
        ? [
            {
              "@type": "BreadcrumbList",
              "@id": `${url}#breadcrumb`,
              itemListElement: breadcrumbItems,
            },
          ]
        : []),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
