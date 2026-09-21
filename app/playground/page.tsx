import type { Metadata } from "next";
import PlaygroundHome from "./home";
import TravelSpinnerGame from "./spin";
import DressUpGame from "./dress";
import TinyJumpGame from "./tiny-jump";
import PageJsonLd from "@/components/PageJsonLd";
import { createPageMetadata } from "../seo";

type PlaygroundPageProps = {
  searchParams: Promise<{
    game?: string | string[];
  }>;
};

const gameTitles: Record<string, string> = {
  spin: "Travel Spinner",
  dress: "Cute Dress Up",
  "tiny-jump": "Tiny Jumper",
};

export async function generateMetadata({
  searchParams,
}: PlaygroundPageProps): Promise<Metadata> {
  const params = await searchParams;
  const selectedGame = Array.isArray(params.game) ? params.game[0] : params.game;

  if (selectedGame && gameTitles[selectedGame]) {
    return createPageMetadata({
      title: `${gameTitles[selectedGame]} — Buildifyx Playground`,
      description:
        "Play a lightweight creative mini game from Buildifyx Playground.",
      path: "/playground",
      noIndex: true,
      imageAlt: "Buildifyx Playground creative mini games",
    });
  }

  return createPageMetadata({
    title: "Playground — Creative Mini Games",
    description:
      "Explore Buildifyx Playground, a collection of lightweight creative mini games including Tiny Jumper, Cute Dress Up, and Travel Spinner.",
    path: "/playground",
    keywords: ["Buildifyx Playground", "creative mini games", "web mini games"],
    imageAlt: "Buildifyx Playground creative mini games",
  });
}

export default async function PlaygroundPage({
  searchParams,
}: PlaygroundPageProps) {
  const params = await searchParams;

  const selectedGame = Array.isArray(params.game)
    ? params.game[0]
    : params.game;

  if (selectedGame === "spin") return <TravelSpinnerGame />;
  if (selectedGame === "dress") return <DressUpGame />;
  if (selectedGame === "tiny-jump") return <TinyJumpGame />;

  return (
    <>
      <PageJsonLd
        type="CollectionPage"
        name="Buildifyx Playground"
        description="A collection of lightweight creative mini games by Buildifyx."
        path="/playground"
        breadcrumbs={[{ name: "Playground", path: "/playground" }]}
      />
      <PlaygroundHome />
    </>
  );
}
