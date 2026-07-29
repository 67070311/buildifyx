"use client";

import Link from "next/link";
import { useState, type ReactNode } from "react";
import {
  ArrowLeft,
  Check,
  Crown,
  Dice5,
  Glasses,
  Palette,
  RefreshCcw,
  Shirt,
  Sparkles,
} from "lucide-react";

type Category = "hair" | "tops" | "bottoms" | "shoes" | "accessories";

type ItemOption = {
  id: string;
  name: string;
};

const categories: {
  id: Category;
  label: string;
  shortLabel: string;
}[] = [
  {
    id: "hair",
    label: "Hair",
    shortLabel: "Hair",
  },
  {
    id: "tops",
    label: "Tops",
    shortLabel: "Top",
  },
  {
    id: "bottoms",
    label: "Bottoms",
    shortLabel: "Bottom",
  },
  {
    id: "shoes",
    label: "Shoes",
    shortLabel: "Shoes",
  },
  {
    id: "accessories",
    label: "Accessories",
    shortLabel: "Acc.",
  },
];

const hairOptions: ItemOption[] = [
  { id: "red", name: "Cherry" },
  { id: "brown", name: "Cocoa" },
  { id: "blonde", name: "Honey" },
  { id: "purple", name: "Grape" },
  { id: "mint", name: "Mint" },
  { id: "blue", name: "Sky" },
];

const topOptions: ItemOption[] = [
  { id: "purple", name: "Purple Tee" },
  { id: "red", name: "Fire Tee" },
  { id: "yellow", name: "Sunny Tee" },
  { id: "green", name: "Mint Tee" },
  { id: "blue", name: "Ocean Tee" },
  { id: "brown", name: "Coffee Tee" },
];

const bottomOptions: ItemOption[] = [
  { id: "plaid", name: "Plaid Skirt" },
  { id: "pink", name: "Pink Shorts" },
  { id: "green", name: "Green Pants" },
  { id: "brown", name: "Brown Pants" },
  { id: "blue", name: "Blue Shorts" },
  { id: "yellow", name: "Yellow Skirt" },
];

const shoeOptions: ItemOption[] = [
  { id: "red", name: "Red Shoes" },
  { id: "white", name: "White Shoes" },
  { id: "purple", name: "Purple Shoes" },
  { id: "green", name: "Green Shoes" },
  { id: "blue", name: "Blue Shoes" },
  { id: "black", name: "Black Shoes" },
];

const accessoryOptions: ItemOption[] = [
  { id: "none", name: "None" },
  { id: "glasses", name: "Glasses" },
  { id: "crown", name: "Crown" },
  { id: "bow", name: "Bow" },
  { id: "star", name: "Star" },
  { id: "flower", name: "Flower" },
];

const hairColors: Record<string, string> = {
  red: "#ef4e43",
  brown: "#7b4932",
  blonde: "#f5c84e",
  purple: "#8061d2",
  mint: "#5bcdb4",
  blue: "#57a4e2",
};

const topColors: Record<string, string> = {
  purple: "#7061d5",
  red: "#ef514a",
  yellow: "#ffc74b",
  green: "#4fc69a",
  blue: "#58a9e2",
  brown: "#946145",
};

const bottomColors: Record<string, string> = {
  plaid: "#8177a7",
  pink: "#fb6d91",
  green: "#3eb38c",
  brown: "#755044",
  blue: "#5899d0",
  yellow: "#e8ad39",
};

const shoeColors: Record<string, string> = {
  red: "#a84334",
  white: "#ebe8db",
  purple: "#624d97",
  green: "#2f7e69",
  blue: "#3f6596",
  black: "#302d39",
};

function randomItem<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function PixelCharacter({
  hair,
  top,
  bottom,
  shoes,
  accessory,
}: {
  hair: string;
  top: string;
  bottom: string;
  shoes: string;
  accessory: string;
}) {
  const hairColor = hairColors[hair];
  const topColor = topColors[top];
  const bottomColor = bottomColors[bottom];
  const shoeColor = shoeColors[shoes];

  return (
    <div className="relative h-[430px] w-[260px] origin-center scale-[0.68] xs:scale-[0.78] sm:scale-[0.9] md:scale-100">
      {/* Ground shadow */}
      <div className="absolute bottom-2 left-1/2 h-8 w-[210px] -translate-x-1/2 rounded-[50%] bg-[#75b97e]/30" />

      {/* Hair behind head */}
      <div
        className="absolute left-[55px] top-[28px] h-[170px] w-[150px] rounded-t-[55px]"
        style={{ backgroundColor: hairColor }}
      />

      <div
        className="absolute left-[43px] top-[82px] h-[130px] w-[34px] rounded-l-[14px]"
        style={{ backgroundColor: hairColor }}
      />

      <div
        className="absolute right-[43px] top-[82px] h-[130px] w-[34px] rounded-r-[14px]"
        style={{ backgroundColor: hairColor }}
      />

      {/* Face */}
      <div className="absolute left-[72px] top-[68px] h-[126px] w-[116px] rounded-[25px] bg-[#f2a45e] shadow-[inset_0_-8px_0_rgba(194,104,54,0.16)]">
        <div className="absolute left-[25px] top-[57px] h-[12px] w-[10px] rounded-sm bg-[#2f3946]" />

        <div className="absolute right-[25px] top-[57px] h-[12px] w-[10px] rounded-sm bg-[#2f3946]" />

        <div className="absolute left-[45px] top-[80px] h-[8px] w-[27px] rounded-b-xl border-b-4 border-[#a94d4c]" />

        <div className="absolute left-[14px] top-[79px] h-3 w-4 rounded-full bg-[#ed7d77]/65" />

        <div className="absolute right-[14px] top-[79px] h-3 w-4 rounded-full bg-[#ed7d77]/65" />
      </div>

      {/* Hair front */}
      <div
        className="absolute left-[66px] top-[35px] h-[54px] w-[128px] rounded-t-[35px]"
        style={{ backgroundColor: hairColor }}
      />

      <div
        className="absolute left-[65px] top-[72px] h-[38px] w-[33px] rotate-[-13deg]"
        style={{ backgroundColor: hairColor }}
      />

      <div
        className="absolute left-[94px] top-[65px] h-[30px] w-[34px] rotate-[8deg]"
        style={{ backgroundColor: hairColor }}
      />

      <div
        className="absolute left-[126px] top-[62px] h-[31px] w-[35px] rotate-[-6deg]"
        style={{ backgroundColor: hairColor }}
      />

      <div
        className="absolute right-[65px] top-[70px] h-[41px] w-[34px] rotate-[13deg]"
        style={{ backgroundColor: hairColor }}
      />

      {/* Glasses */}
      {accessory === "glasses" && (
        <>
          <div className="absolute left-[82px] top-[119px] z-20 h-[30px] w-[39px] rounded-md border-[5px] border-[#5a7e5f] bg-white/10" />

          <div className="absolute right-[82px] top-[119px] z-20 h-[30px] w-[39px] rounded-md border-[5px] border-[#5a7e5f] bg-white/10" />

          <div className="absolute left-[119px] top-[130px] z-20 h-[5px] w-[22px] bg-[#5a7e5f]" />
        </>
      )}

      {/* Crown */}
      {accessory === "crown" && (
        <div className="absolute left-[99px] top-[-2px] z-30">
          <div className="flex items-end gap-1">
            <div className="h-8 w-5 rotate-[-15deg] bg-[#ffd34f]" />
            <div className="h-12 w-7 bg-[#ffd34f]" />
            <div className="h-8 w-5 rotate-[15deg] bg-[#ffd34f]" />
          </div>

          <div className="h-5 w-[64px] rounded-b-md bg-[#edaa31]" />
        </div>
      )}

      {/* Bow */}
      {accessory === "bow" && (
        <div className="absolute right-[38px] top-[49px] z-30 flex items-center">
          <div className="h-11 w-12 rotate-[-18deg] rounded-[50%_20%_50%_20%] bg-[#ff6f9d]" />
          <div className="h-6 w-6 rounded-full bg-[#db4779]" />
          <div className="h-11 w-12 rotate-[18deg] rounded-[20%_50%_20%_50%] bg-[#ff6f9d]" />
        </div>
      )}

      {/* Star */}
      {accessory === "star" && (
        <div className="absolute right-[43px] top-[42px] z-30 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#8f72d6] text-3xl font-black text-yellow-200 shadow-lg">
          ★
        </div>
      )}

      {/* Flower */}
      {accessory === "flower" && (
        <div className="absolute right-[40px] top-[48px] z-30">
          <div className="relative h-16 w-16">
            <div className="absolute left-5 top-0 h-8 w-8 rounded-full bg-[#ff8b76]" />
            <div className="absolute bottom-0 left-5 h-8 w-8 rounded-full bg-[#ff8b76]" />
            <div className="absolute left-0 top-5 h-8 w-8 rounded-full bg-[#ff8b76]" />
            <div className="absolute right-0 top-5 h-8 w-8 rounded-full bg-[#ff8b76]" />
            <div className="absolute left-5 top-5 h-8 w-8 rounded-full bg-[#ffd35b]" />
          </div>
        </div>
      )}

      {/* Neck */}
      <div className="absolute left-[111px] top-[184px] h-[34px] w-10 bg-[#e99854]" />

      {/* Shirt body */}
      <div
        className="absolute left-[70px] top-[205px] h-[118px] w-[120px] rounded-t-[20px]"
        style={{ backgroundColor: topColor }}
      >
        {top === "red" && (
          <div className="absolute left-[42px] top-[33px] h-12 w-9 rounded-t-full bg-[#ffbd4b]">
            <div className="absolute bottom-0 left-[7px] h-7 w-5 bg-[#ff8f3d]" />
          </div>
        )}

        {top === "purple" && (
          <div className="absolute left-[31px] top-[39px] flex h-12 w-[58px] items-center justify-center rounded-lg bg-white">
            <div className="h-6 w-5 rounded-sm bg-[#6749a6]" />
          </div>
        )}

        {top === "yellow" && (
          <div className="absolute left-[35px] top-[34px] text-4xl text-white">
            ★
          </div>
        )}

        {top === "green" && (
          <div className="absolute left-[41px] top-[34px] h-12 w-10 rounded-full border-[6px] border-white/80" />
        )}

        {top === "blue" && (
          <div className="absolute left-[31px] top-[42px] h-7 w-[58px] rounded-full bg-white/80" />
        )}

        {top === "brown" && (
          <div className="absolute left-[34px] top-[36px] h-11 w-[52px] rounded-lg border-4 border-[#f2d8a4]" />
        )}
      </div>

      {/* Arms */}
      <div className="absolute left-[45px] top-[217px] h-[108px] w-[29px] rounded-b-lg bg-[#ef9f5c]" />

      <div className="absolute right-[45px] top-[217px] h-[108px] w-[29px] rounded-b-lg bg-[#ef9f5c]" />

      <div
        className="absolute left-[45px] top-[207px] h-14 w-10 rounded-t-lg"
        style={{ backgroundColor: topColor }}
      />

      <div
        className="absolute right-[45px] top-[207px] h-14 w-10 rounded-t-lg"
        style={{ backgroundColor: topColor }}
      />

      {/* Bottom */}
      {bottom === "plaid" ? (
        <div
          className="absolute left-[66px] top-[315px] h-[66px] w-[128px] rounded-b-lg"
          style={{
            backgroundColor: bottomColor,
            backgroundImage:
              "linear-gradient(90deg, transparent 44%, rgba(255,255,255,.22) 44%, rgba(255,255,255,.22) 54%, transparent 54%), linear-gradient(transparent 42%, rgba(255,255,255,.22) 42%, rgba(255,255,255,.22) 54%, transparent 54%)",
            backgroundSize: "38px 38px",
          }}
        />
      ) : (
        <>
          <div
            className="absolute left-[67px] top-[315px] h-[68px] w-[61px] rounded-bl-lg"
            style={{ backgroundColor: bottomColor }}
          />

          <div
            className="absolute right-[67px] top-[315px] h-[68px] w-[61px] rounded-br-lg"
            style={{ backgroundColor: bottomColor }}
          />
        </>
      )}

      {/* Legs */}
      <div className="absolute left-[79px] top-[378px] h-[39px] w-[43px] bg-[#f0a05d]" />

      <div className="absolute right-[79px] top-[378px] h-[39px] w-[43px] bg-[#f0a05d]" />

      {/* Shoes */}
      <div
        className="absolute bottom-[5px] left-[73px] h-[27px] w-[53px] rounded-t-md"
        style={{ backgroundColor: shoeColor }}
      />

      <div
        className="absolute bottom-[5px] right-[73px] h-[27px] w-[53px] rounded-t-md"
        style={{ backgroundColor: shoeColor }}
      />
    </div>
  );
}

function HairPreview({ color }: { color: string }) {
  return (
    <div className="relative h-16 w-16 sm:h-20 sm:w-20">
      <div
        className="absolute left-[10%] top-[10%] h-[80%] w-[80%] rounded-t-[28px] rounded-b-xl"
        style={{ backgroundColor: hairColors[color] }}
      />

      <div className="absolute left-[25%] top-[36%] h-[55%] w-[50%] rounded-xl bg-[#f2a45e]" />

      <div
        className="absolute left-[15%] top-[10%] h-[40%] w-[70%] rounded-t-[24px]"
        style={{ backgroundColor: hairColors[color] }}
      />
    </div>
  );
}

function TopPreview({ color }: { color: string }) {
  return (
    <div className="relative h-16 w-20 sm:h-20 sm:w-24">
      <div
        className="absolute left-[22%] top-[16%] h-[70%] w-[56%] rounded-t-xl"
        style={{ backgroundColor: topColors[color] }}
      />

      <div
        className="absolute left-[3%] top-[22%] h-[40%] w-[28%] rounded-t-lg"
        style={{ backgroundColor: topColors[color] }}
      />

      <div
        className="absolute right-[3%] top-[22%] h-[40%] w-[28%] rounded-t-lg"
        style={{ backgroundColor: topColors[color] }}
      />

      <div className="absolute left-[42%] top-0 h-[25%] w-[16%] rounded-b-full bg-[#f5f1db]" />
    </div>
  );
}

function BottomPreview({ color }: { color: string }) {
  return (
    <div className="relative h-16 w-20 sm:h-20 sm:w-24">
      {color === "plaid" ? (
        <div
          className="absolute left-[8%] top-[18%] h-[60%] w-[84%] rounded-b-lg"
          style={{
            backgroundColor: bottomColors[color],
            backgroundImage:
              "linear-gradient(90deg, transparent 45%, rgba(255,255,255,.25) 45%, rgba(255,255,255,.25) 55%, transparent 55%), linear-gradient(transparent 45%, rgba(255,255,255,.25) 45%, rgba(255,255,255,.25) 55%, transparent 55%)",
            backgroundSize: "28px 28px",
          }}
        />
      ) : (
        <>
          <div
            className="absolute left-[8%] top-[18%] h-[70%] w-[40%] rounded-bl-lg"
            style={{ backgroundColor: bottomColors[color] }}
          />

          <div
            className="absolute right-[8%] top-[18%] h-[70%] w-[40%] rounded-br-lg"
            style={{ backgroundColor: bottomColors[color] }}
          />
        </>
      )}
    </div>
  );
}

function ShoesPreview({ color }: { color: string }) {
  return (
    <div className="relative h-14 w-20 sm:h-16 sm:w-24">
      <div
        className="absolute bottom-[12%] left-[2%] h-[44%] w-[42%] rounded-t-md"
        style={{ backgroundColor: shoeColors[color] }}
      />

      <div
        className="absolute bottom-[12%] right-[2%] h-[44%] w-[42%] rounded-t-md"
        style={{ backgroundColor: shoeColors[color] }}
      />
    </div>
  );
}

function AccessoryPreview({ item }: { item: string }) {
  if (item === "none") {
    return (
      <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-dashed border-[#b7dca2] text-[9px] font-black text-[#75a966] sm:h-20 sm:w-20 sm:text-xs">
        NONE
      </div>
    );
  }

  if (item === "glasses") {
    return (
      <Glasses
        className="h-12 w-12 text-[#5c8766] sm:h-14 sm:w-14"
        strokeWidth={3.5}
      />
    );
  }

  if (item === "crown") {
    return (
      <Crown
        className="h-12 w-12 text-[#e8a728] sm:h-14 sm:w-14"
        strokeWidth={3}
      />
    );
  }

  if (item === "bow") {
    return (
      <div className="flex scale-75 items-center sm:scale-100">
        <div className="h-11 w-11 rotate-[-20deg] rounded-[50%_20%_50%_20%] bg-[#ff75a0]" />
        <div className="h-7 w-7 rounded-full bg-[#d94f7d]" />
        <div className="h-11 w-11 rotate-[20deg] rounded-[20%_50%_20%_50%] bg-[#ff75a0]" />
      </div>
    );
  }

  if (item === "star") {
    return <div className="text-5xl text-[#8869d1] sm:text-6xl">★</div>;
  }

  return (
    <div className="relative h-14 w-14 sm:h-16 sm:w-16">
      <div className="absolute left-[31%] top-0 h-1/2 w-1/2 rounded-full bg-[#ff8b76]" />
      <div className="absolute bottom-0 left-[31%] h-1/2 w-1/2 rounded-full bg-[#ff8b76]" />
      <div className="absolute left-0 top-[31%] h-1/2 w-1/2 rounded-full bg-[#ff8b76]" />
      <div className="absolute right-0 top-[31%] h-1/2 w-1/2 rounded-full bg-[#ff8b76]" />
      <div className="absolute left-[31%] top-[31%] h-1/2 w-1/2 rounded-full bg-[#ffd25b]" />
    </div>
  );
}

function ItemSection({
  title,
  items,
  selected,
  onSelect,
  renderPreview,
}: {
  title: string;
  items: ItemOption[];
  selected: string;
  onSelect: (id: string) => void;
  renderPreview: (item: ItemOption) => ReactNode;
}) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-2 sm:gap-4">
        <div className="h-1 flex-1 rounded-full bg-[#9bd75c]" />

        <h2 className="shrink-0 rounded-full bg-[#e7ffad] px-5 py-2 text-xs font-black text-[#477350] shadow-sm sm:px-8 sm:text-base">
          {title}
        </h2>

        <div className="h-1 flex-1 rounded-full bg-[#9bd75c]" />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-6">
        {items.map((item) => {
          const isSelected = selected === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              aria-label={item.name}
              className={`group relative aspect-square min-h-[108px] overflow-hidden rounded-[20px] border-4 bg-[#f8f8e9] p-2 transition hover:-translate-y-1 sm:min-h-[135px] sm:rounded-[24px] sm:p-3 ${
                isSelected
                  ? "border-[#44c441] shadow-[0_7px_0_#2fa936]"
                  : "border-white/90 shadow-[0_6px_0_rgba(81,151,55,0.18)]"
              }`}
            >
              <div className="flex h-full items-center justify-center">
                {renderPreview(item)}
              </div>

              <div className="absolute left-1.5 top-1.5 rounded-md bg-[#5d9ed5] p-1 text-white shadow-sm sm:left-2 sm:top-2 sm:rounded-lg sm:p-1.5">
                <Shirt className="h-3 w-3 sm:h-4 sm:w-4" strokeWidth={3} />
              </div>

              {isSelected && (
                <div className="absolute bottom-0 left-0 flex h-9 w-9 items-center justify-center rounded-tr-[18px] bg-[#44c441] text-white sm:h-12 sm:w-12 sm:rounded-tr-[22px]">
                  <Check className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={4} />
                </div>
              )}

              <div className="absolute bottom-1.5 right-1.5 max-w-[70%] truncate rounded-md bg-white/90 px-1.5 py-1 text-[8px] font-black text-[#5b785e] opacity-100 sm:bottom-2 sm:right-2 sm:px-2 sm:text-[9px] lg:opacity-0 lg:transition lg:group-hover:opacity-100">
                {item.name}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

export default function DressUpGame() {
  const [activeTab, setActiveTab] = useState<Category>("tops");
  const [hair, setHair] = useState("red");
  const [top, setTop] = useState("purple");
  const [bottom, setBottom] = useState("plaid");
  const [shoes, setShoes] = useState("red");
  const [accessory, setAccessory] = useState("none");

  const resetOutfit = () => {
    setHair("red");
    setTop("purple");
    setBottom("plaid");
    setShoes("red");
    setAccessory("none");
  };

  const randomizeOutfit = () => {
    setHair(randomItem(hairOptions).id);
    setTop(randomItem(topOptions).id);
    setBottom(randomItem(bottomOptions).id);
    setShoes(randomItem(shoeOptions).id);
    setAccessory(randomItem(accessoryOptions).id);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#87d45a] px-3 pb-12 pt-24 text-[#315d48] sm:px-6 sm:pb-16 lg:px-10">
      {/* Page background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#95df62_0%,#70c759_100%)]" />

        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.9) 2px, transparent 2px)",
            backgroundSize: "34px 34px",
          }}
        />

        <div className="absolute -left-32 top-20 h-[400px] w-[400px] rounded-full bg-yellow-200/25 blur-[120px]" />

        <div className="absolute -right-28 bottom-10 h-[420px] w-[420px] rounded-full bg-green-100/20 blur-[130px]" />
      </div>

      <section className="relative z-10 mx-auto max-w-[1500px]">
        {/* Top navigation */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/playground"
            className="inline-flex items-center gap-2 rounded-2xl border-2 border-white/50 bg-white/70 px-3 py-2.5 text-xs font-black text-[#39734b] shadow-[0_5px_0_rgba(44,128,57,0.25)] transition hover:-translate-y-0.5 sm:px-4 sm:text-sm"
          >
            <ArrowLeft size={18} strokeWidth={3} />
            Back to Playground
          </Link>

          <div className="flex items-center gap-2 rounded-2xl border-2 border-white/50 bg-white/65 px-3 py-2.5 text-xs font-black text-[#39734b] shadow-[0_5px_0_rgba(44,128,57,0.22)] sm:px-4 sm:text-sm">
            <Sparkles size={18} />
            Cute Dress Up Studio
          </div>
        </div>

        <div className="overflow-hidden rounded-[26px] border-[5px] border-white/80 bg-[#d7ff84] shadow-[0_18px_0_rgba(47,137,59,0.22),0_35px_70px_rgba(28,89,44,0.25)] sm:rounded-[34px] sm:border-[6px]">
          {/* Character section — always at the top */}
          <section className="relative min-h-[540px] overflow-hidden border-b-[5px] border-white/70 bg-[#f4f9e9] px-3 pb-4 pt-5 sm:min-h-[650px] sm:border-b-[6px] sm:p-8 md:min-h-[700px]">
            {/* Background decoration */}
            <div className="absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-white/80 to-transparent" />

            <div className="absolute left-[8%] top-[24%] h-28 w-28 rounded-full bg-yellow-200/20 blur-2xl sm:h-52 sm:w-52" />

            <div className="absolute right-[8%] top-[30%] h-28 w-28 rounded-full bg-green-200/25 blur-2xl sm:h-52 sm:w-52" />

            {/* Character header */}
            <div className="relative z-20 flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[15px] border-[3px] border-white bg-[#75d742] text-white shadow-[0_5px_0_#47a935] sm:h-14 sm:w-14 sm:rounded-[20px] sm:border-4 sm:shadow-[0_6px_0_#47a935]">
                  <Palette className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={3} />
                </div>

                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.14em] text-[#78a36f] sm:text-xs">
                    My character
                  </p>

                  <h1 className="text-base font-black text-[#386f4b] sm:text-xl">
                    Create your look
                  </h1>
                </div>
              </div>

              <button
                type="button"
                onClick={resetOutfit}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[15px] border-[3px] border-white bg-[#73d741] text-white shadow-[0_5px_0_#47a935] transition hover:-translate-y-1 sm:h-14 sm:w-14 sm:rounded-[20px] sm:border-4 sm:shadow-[0_6px_0_#47a935]"
                aria-label="Reset outfit"
              >
                <RefreshCcw className="h-5 w-5 sm:h-7 sm:w-7" strokeWidth={3} />
              </button>
            </div>

            {/* Character preview */}
            <div className="relative z-10 flex h-[390px] items-center justify-center sm:h-[485px] md:h-[520px]">
              <div className="absolute bottom-8 left-1/2 h-16 w-[230px] -translate-x-1/2 rounded-[50%] bg-[#bce4a5]/60 sm:bottom-6 sm:h-24 sm:w-[330px]" />

              <PixelCharacter
                hair={hair}
                top={top}
                bottom={bottom}
                shoes={shoes}
                accessory={accessory}
              />
            </div>

            {/* Current outfit items */}
            <div className="relative z-20 mx-auto grid max-w-3xl grid-cols-5 gap-2 sm:gap-3">
              <button
                type="button"
                onClick={() => setActiveTab("hair")}
                className={`flex aspect-square items-center justify-center overflow-hidden rounded-[16px] border-[3px] bg-white transition hover:-translate-y-1 sm:rounded-[22px] sm:border-4 ${
                  activeTab === "hair"
                    ? "border-[#56c641] shadow-[0_5px_0_#3daa35]"
                    : "border-white shadow-[0_5px_0_rgba(61,170,53,0.25)]"
                }`}
                aria-label="Open hair options"
              >
                <HairPreview color={hair} />
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("tops")}
                className={`flex aspect-square items-center justify-center overflow-hidden rounded-[16px] border-[3px] bg-white transition hover:-translate-y-1 sm:rounded-[22px] sm:border-4 ${
                  activeTab === "tops"
                    ? "border-[#56c641] shadow-[0_5px_0_#3daa35]"
                    : "border-white shadow-[0_5px_0_rgba(61,170,53,0.25)]"
                }`}
                aria-label="Open top options"
              >
                <TopPreview color={top} />
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("bottoms")}
                className={`flex aspect-square items-center justify-center overflow-hidden rounded-[16px] border-[3px] bg-white transition hover:-translate-y-1 sm:rounded-[22px] sm:border-4 ${
                  activeTab === "bottoms"
                    ? "border-[#56c641] shadow-[0_5px_0_#3daa35]"
                    : "border-white shadow-[0_5px_0_rgba(61,170,53,0.25)]"
                }`}
                aria-label="Open bottom options"
              >
                <BottomPreview color={bottom} />
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("shoes")}
                className={`flex aspect-square items-center justify-center overflow-hidden rounded-[16px] border-[3px] bg-white transition hover:-translate-y-1 sm:rounded-[22px] sm:border-4 ${
                  activeTab === "shoes"
                    ? "border-[#56c641] shadow-[0_5px_0_#3daa35]"
                    : "border-white shadow-[0_5px_0_rgba(61,170,53,0.25)]"
                }`}
                aria-label="Open shoe options"
              >
                <ShoesPreview color={shoes} />
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("accessories")}
                className={`flex aspect-square items-center justify-center overflow-hidden rounded-[16px] border-[3px] bg-white transition hover:-translate-y-1 sm:rounded-[22px] sm:border-4 ${
                  activeTab === "accessories"
                    ? "border-[#56c641] shadow-[0_5px_0_#3daa35]"
                    : "border-white shadow-[0_5px_0_rgba(61,170,53,0.25)]"
                }`}
                aria-label="Open accessory options"
              >
                <AccessoryPreview item={accessory} />
              </button>
            </div>
          </section>

          {/* Clothing controls — always below character */}
          <section className="bg-[#c9f56d]">
            {/* Category tabs */}
            <div className="overflow-x-auto bg-[#57b94a] px-2 pt-3 sm:px-5 sm:pt-5">
              <div className="grid min-w-[500px] grid-cols-5 gap-1.5 sm:min-w-0 sm:gap-2">
                {categories.map((category) => {
                  const selected = activeTab === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setActiveTab(category.id)}
                      className={`rounded-t-[16px] px-2 py-4 text-xs font-black transition sm:rounded-t-[22px] sm:py-5 sm:text-base ${
                        selected
                          ? "bg-[#c9f56d] text-[#416d4f]"
                          : "bg-[#78c84d] text-[#3f784b] hover:bg-[#8bd75b]"
                      }`}
                    >
                      <span className="sm:hidden">{category.shortLabel}</span>
                      <span className="hidden sm:inline">{category.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-3 sm:p-6 lg:p-8">
              {activeTab === "hair" && (
                <ItemSection
                  title="Choose hairstyle"
                  items={hairOptions}
                  selected={hair}
                  onSelect={setHair}
                  renderPreview={(item) => <HairPreview color={item.id} />}
                />
              )}

              {activeTab === "tops" && (
                <ItemSection
                  title="Choose top"
                  items={topOptions}
                  selected={top}
                  onSelect={setTop}
                  renderPreview={(item) => <TopPreview color={item.id} />}
                />
              )}

              {activeTab === "bottoms" && (
                <ItemSection
                  title="Choose bottom"
                  items={bottomOptions}
                  selected={bottom}
                  onSelect={setBottom}
                  renderPreview={(item) => <BottomPreview color={item.id} />}
                />
              )}

              {activeTab === "shoes" && (
                <ItemSection
                  title="Choose shoes"
                  items={shoeOptions}
                  selected={shoes}
                  onSelect={setShoes}
                  renderPreview={(item) => <ShoesPreview color={item.id} />}
                />
              )}

              {activeTab === "accessories" && (
                <ItemSection
                  title="Choose accessory"
                  items={accessoryOptions}
                  selected={accessory}
                  onSelect={setAccessory}
                  renderPreview={(item) => <AccessoryPreview item={item.id} />}
                />
              )}

              <button
                type="button"
                onClick={randomizeOutfit}
                className="mt-7 flex h-14 w-full items-center justify-center gap-2 rounded-[18px] border-[3px] border-white bg-[#62cf46] text-sm font-black text-white shadow-[0_7px_0_#359c35] transition hover:-translate-y-1 active:translate-y-1 active:shadow-[0_3px_0_#359c35] sm:h-16 sm:gap-3 sm:rounded-[22px] sm:border-4 sm:text-base sm:shadow-[0_8px_0_#359c35]"
              >
                <Dice5 size={24} strokeWidth={3} />
                Random outfit
                <Sparkles size={21} strokeWidth={3} />
              </button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
