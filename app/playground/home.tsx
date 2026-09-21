"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Compass,
  Gamepad2,
  LockKeyhole,
  MapPin,
  Play,
  Shirt,
  Star,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const games = [
  {
    id: 1,
    title: "Tiny Jumper",
    description: "Jump, dodge obstacles, and collect every star.",
    href: "/playground?game=tiny-jump",
    category: "Arcade",
    icon: Gamepad2,
    accentIcon: Star,
    image: "/playgroud/gmae-tinyjump.png",
    imageAlt: "Cute jumping arcade game",
    status: "Ready",
    time: "3 min",
    accent: "#f59e0b",
    soft: "#fff7df",
    available: true,
    isNew: true,
  },
  {
    id: 2,
    title: "Cute Dress Up",
    description: "Mix outfits and create your favorite look.",
    href: "/playground?game=dress",
    category: "Fashion",
    icon: Shirt,
    accentIcon: Shirt,
    image: "/playgroud/game-dress.png",
    imageAlt: "Cute character dress-up game",
    status: "Ready",
    time: "5 min",
    accent: "#ec4899",
    soft: "#fff0f7",
    available: true,
    isNew: false,
  },
  {
    id: 3,
    title: "Travel Spinner",
    description: "Let the wheel choose your next destination.",
    href: "/playground?game=spin",
    category: "Travel",
    icon: Compass,
    accentIcon: MapPin,
    image: "/playgroud/game-spin.png",
    imageAlt: "Travel destination spinner game",
    status: "Ready",
    time: "2 min",
    accent: "#6366f1",
    soft: "#f1f2ff",
    available: true,
    isNew: false,
  },
  {
    id: 4,
    title: "Memory Match",
    description: "Remember the cards and match every pair.",
    href: "",
    category: "Puzzle",
    icon: Brain,
    accentIcon: Brain,
    image: "",
    imageAlt: "Memory card matching game",
    status: "Coming soon",
    time: "4 min",
    accent: "#10b981",
    soft: "#ecfdf5",
    available: false,
    isNew: false,
  },
];

export default function PlaygroundHome() {
  const { language } = useLanguage();
  const th = language === "th";
  const t = {
    badge: th ? "สนามเด็กเล่น Buildifyx" : "Buildifyx Playground",
    titleA: th ? "เกมเล็ก ๆ" : "Small games.",
    titleB: th ? "พักสมองสั้น ๆ" : "Big little breaks.",
    lead: th ? "พักจากงานสักครู่ เลือกมินิเกม แล้วสนุกกับมุมเล็ก ๆ ที่สร้างมาเพื่อความอยากรู้อยากลอง ความคิดสร้างสรรค์ และความสนุก" : "Take a quick break, choose a mini game, and enjoy a playful corner made for curiosity, creativity, and fun.",
    explore: th ? "ดูเกมทั้งหมด" : "Explore games",
    count: th ? "มี 4 มินิเกมให้ลอง" : "4 mini games to explore",
    pick: th ? "เลือกเกมต่อไปของคุณ" : "Pick your next game",
    all: th ? "เกมทั้งหมด" : "All Games",
    sub: th ? "มินิเกมเบา ๆ สำหรับพักสั้น ๆ ระหว่างทำงาน" : "Quick, lightweight games made for short breaks between work.",
    ready: th ? "พร้อมเล่น" : "Ready",
    play: th ? "เล่น" : "Play",
    soon: th ? "เร็ว ๆ นี้" : "Soon",
    mini: th ? "มินิเกม" : "Mini game",
  };
  const heroRef = useRef<HTMLDivElement>(null);
  const gamesRowRef = useRef<HTMLDivElement>(null);
  const heroActive = useInView(heroRef, { amount: 0.05 });

  const scrollToGames = () => {
    document.getElementById("all-games")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollGames = (direction: "left" | "right") => {
    const row = gamesRowRef.current;
    if (!row) return;

    const amount = Math.max(260, row.clientWidth * 0.82);
    row.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-white px-4 pb-20 pt-[118px] sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[920px] bg-[radial-gradient(circle_at_50%_15%,rgba(99,102,241,.12),transparent_55%)]" />

      <section
        ref={heroRef}
        className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[38px] border border-[#e3e4fb] bg-[radial-gradient(circle_at_18%_12%,rgba(244,114,182,.13),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(96,165,250,.14),transparent_30%),linear-gradient(180deg,#fbfbff_0%,#f5f4ff_55%,#ffffff_100%)] shadow-[0_34px_100px_rgba(77,69,150,.10)]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(99,102,241,.28) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage: "linear-gradient(to bottom, black, transparent 78%)",
          }}
        />

        <div className="relative px-5 py-8 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="grid items-center gap-2 sm:gap-8 lg:grid-cols-[1.05fr_.95fr] lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto flex max-w-[720px] flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#6366f1]/12 bg-white/80 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#6366f1] shadow-sm backdrop-blur-xl">
                <Gamepad2 className="h-4 w-4" />
                {t.badge}
              </div>

              <h1 className={`mt-6 font-semibold text-[#17172b] ${th ? "text-[38px] leading-[1.18] tracking-[-.015em] sm:text-[54px] lg:text-[64px]" : "text-[50px] leading-[.92] tracking-[-.07em] sm:text-[68px] lg:text-[78px] xl:text-[86px]"}`}>
                {t.titleA}
                <span className={`mt-1 block bg-[linear-gradient(90deg,#6366f1,#ec4899,#f59e0b)] bg-clip-text text-transparent ${th ? "whitespace-nowrap" : ""}`}>
                  {t.titleB}
                </span>
              </h1>

              <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#6f7088] sm:text-[16px]">
                {t.lead}
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <button
                  type="button"
                  onClick={scrollToGames}
                  className="inline-flex min-h-12 items-center gap-2 rounded-[15px] bg-[#17172b] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(23,23,43,.20)] transition hover:-translate-y-0.5 hover:bg-[#2a2a45]"
                >
                  {t.explore}
                  <ArrowRight className="h-4 w-4" />
                </button>

                <div className="inline-flex min-h-12 items-center gap-2 rounded-[15px] border border-[#dedff3] bg-white/72 px-4 text-[11px] font-medium text-[#71728a] backdrop-blur-xl">
                  {t.count}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30, scale: .96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: .78, delay: .08, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-auto flex min-h-[220px] w-full max-w-[560px] items-center justify-center sm:min-h-[380px] lg:min-h-[470px]"
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.5, 0.85, 0.5],
                }}
                transition={{
                  duration: 6,
                  repeat: heroActive ? Infinity : 0,
                  ease: "easeInOut",
                }}
                className="absolute h-[70%] w-[70%] rounded-full bg-[#8b5cf6]/16 blur-[90px]"
              />

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 5.5,
                  repeat: heroActive ? Infinity : 0,
                  ease: "easeInOut",
                }}
                className="relative z-10 -mt-10 w-[112%] max-w-[500px] sm:mt-0 sm:w-full"
              >
                <Image
                  src="/playgroud/Game (1).gif"
                  alt="Buildifyx Playground illustration"
                  width={720}
                  height={720}
                  priority
                  unoptimized
                  className="h-auto w-full object-contain drop-shadow-[0_28px_50px_rgba(63,48,125,.20)]"
                />
              </motion.div>
            </motion.div>
          </div>

          <section id="all-games" className="relative z-10 mx-auto mt-6 max-w-[1180px] scroll-mt-28 sm:mt-10">
            <div className="mb-6 flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[.18em] text-[#8a8ba6]">
                  {t.pick}
                </p>
                <h2 className="mt-1 text-3xl font-semibold tracking-[-.04em] text-[#17172b] sm:text-4xl">
                  {t.all}
                </h2>
              </div>

              <div className="flex flex-col items-center gap-3 sm:items-end">
                <p className="max-w-[360px] text-xs leading-5 text-[#8b8ca4] sm:text-right">
                  {t.sub}
                </p>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => scrollGames("left")}
                    aria-label="Previous games"
                    className="grid h-10 w-10 place-items-center rounded-full border border-[#dedff0] bg-white text-[#303045] shadow-[0_8px_22px_rgba(54,52,102,.08)] transition hover:-translate-y-0.5 hover:border-[#cfd0e8] hover:bg-[#f8f8fd] active:scale-95"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => scrollGames("right")}
                    aria-label="Next games"
                    className="grid h-10 w-10 place-items-center rounded-full bg-[#17172b] text-white shadow-[0_10px_24px_rgba(23,23,43,.16)] transition hover:-translate-y-0.5 hover:bg-[#2a2a45] active:scale-95"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div
              ref={gamesRowRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-3 pr-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {games.map((game, index) => {
                const GameIcon = game.icon;
                const AccentIcon = game.accentIcon;

                const card = (
                  <motion.article
                    initial={{ opacity: 0, y: 24, scale: .97 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, amount: .2 }}
                    transition={{ duration: .52, delay: index * .06 }}
                    whileHover={game.available ? { y: -8, scale: 1.012 } : undefined}
                    className="group h-full overflow-hidden rounded-[24px] border border-[#e7e7f2] bg-white shadow-[0_18px_45px_rgba(54,52,102,.08)] transition hover:border-[#d9d9ea]"
                  >
                    <div
                      className="relative aspect-[1.12/1] overflow-hidden"
                      style={{ backgroundColor: game.soft }}
                    >
                      {game.available ? (
                        <Image
                          src={game.image}
                          alt={game.imageAlt}
                          fill
                          sizes="(max-width: 640px) 92vw, (max-width: 1280px) 45vw, 25vw"
                          className="object-cover transition duration-500 group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div
                            className="grid h-24 w-24 place-items-center rounded-[28px] border border-white bg-white/70 shadow-[0_18px_40px_rgba(38,80,60,.10)] backdrop-blur"
                            style={{ color: game.accent }}
                          >
                            <LockKeyhole className="h-10 w-10" strokeWidth={1.8} />
                          </div>
                        </div>
                      )}

                      <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/70 bg-white/82 px-2.5 py-1.5 text-[9px] font-semibold uppercase tracking-[.13em] text-[#303045] shadow-sm backdrop-blur">
                        <GameIcon className="h-3 w-3" />
                        {th ? ({ 1: "อาร์เคด", 2: "แฟชั่น", 3: "ท่องเที่ยว", 4: "พัซเซิล" } as Record<number, string>)[game.id] : game.category}
                      </div>

                      {game.isNew && (
                        <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#17172b] px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[.12em] text-white">
                          New
                        </div>
                      )}

                      <div className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1.5 text-[9px] font-semibold text-[#303045] shadow-sm backdrop-blur">
                        <Clock3 className="h-3 w-3" />
                        {game.time}
                      </div>
                    </div>

                    <div className="p-4 sm:p-5">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[9px] font-semibold uppercase tracking-[.15em] text-[#a0a1b3]">
                            {t.mini} #{String(game.id).padStart(2, "0")}
                          </p>
                          <h3 className="mt-1 text-[19px] font-semibold tracking-[-.03em] text-[#17172b]">
                            {game.title}
                          </h3>
                        </div>

                        <div
                          className="grid h-9 w-9 shrink-0 place-items-center rounded-[12px]"
                          style={{ backgroundColor: game.soft, color: game.accent }}
                        >
                          <AccentIcon className="h-4 w-4" />
                        </div>
                      </div>

                      <p className="mt-3 min-h-[42px] text-xs leading-5 text-[#85869a]">
                        {th ? ({ 1: "กระโดด หลบสิ่งกีดขวาง และเก็บดาวให้ครบ", 2: "ลองจับคู่เสื้อผ้าและสร้างลุคที่ชอบ", 3: "หมุนวงล้อให้ช่วยเลือกจุดหมายถัดไป", 4: "จำตำแหน่งการ์ดแล้วจับคู่ให้ครบ" } as Record<number, string>)[game.id] : game.description}
                      </p>

                      <div className="mt-4 flex items-center justify-between border-t border-[#eeeeF5] pt-4">
                        <div className="flex items-center gap-2">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: game.available ? "#22c55e" : "#f59e0b" }}
                          />
                          <span className="text-[10px] font-semibold text-[#74758b]">{game.available ? t.ready : t.soon}</span>
                        </div>

                        {game.available ? (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#17172b] px-3 py-2 text-[10px] font-semibold text-white">
                            {t.play}
                            <Play className="h-3 w-3" fill="currentColor" />
                          </span>
                        ) : (
                          <span className="rounded-full bg-[#f3f3f7] px-3 py-2 text-[9px] font-semibold uppercase tracking-[.08em] text-[#9a9aab]">
                            {t.soon}
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                );

                return game.available ? (
                  <Link key={game.id} href={game.href} className="block h-full min-w-[78%] snap-start sm:min-w-[46%] md:min-w-[36%] lg:min-w-[28%] xl:min-w-[24%]">
                    {card}
                  </Link>
                ) : (
                  <div key={game.id} className="h-full min-w-[78%] snap-start sm:min-w-[46%] md:min-w-[36%] lg:min-w-[28%] xl:min-w-[24%]" aria-label={game.title + " is coming soon"}>
                    {card}
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
