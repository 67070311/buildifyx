import type { Metadata } from "next";
import PlaygroundHome from "./home";
import TravelSpinnerGame from "./spin";
import DressUpGame from "./dress";

type PlaygroundPageProps = {
  searchParams: Promise<{
    game?: string | string[];
  }>;
};

export const metadata: Metadata = {
  title: "Playground | Buildifyx",
  description: "Choose and play creative mini games from Buildifyx Playground.",
};

export default async function PlaygroundPage({
  searchParams,
}: PlaygroundPageProps) {
  const params = await searchParams;

  const selectedGame = Array.isArray(params.game)
    ? params.game[0]
    : params.game;

  if (selectedGame === "spin") {
    return <TravelSpinnerGame />;
  }

  if (selectedGame === "dress") {
    return <DressUpGame />;
  }

  return <PlaygroundHome />;
}
