"use client";

import { useEffect, useMemo, useState } from "react";
import type { ComponentProps } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  SiAsana,
  SiCanva,
  SiDiscord,
  SiDocker,
  SiDropbox,
  SiFigma,
  SiGithub,
  SiGooglechrome,
  SiHubspot,
  SiNotion,
  SiOpenai,
  SiReact,
  SiSlack,
  SiMongodb,
  SiSupabase,
  SiVercel,
  SiYoutube,
  SiZoom,
} from "react-icons/si";

function GmailClassicIcon(props: ComponentProps<"img">) {
  return (
    <img
      {...props}
      src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg"
      alt=""
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );
}

function InstagramClassicIcon(props: ComponentProps<"img">) {
  return (
    <img
      {...props}
      src="/home/instagram-classic.svg"
      alt=""
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );
}

const logoPool = [
  { key: "canva", label: "Canva", Icon: SiCanva, color: "#00C4CC" },
  { key: "github", label: "GitHub", Icon: SiGithub, color: "#111111" },
  { key: "vercel", label: "Vercel", Icon: SiVercel, color: "#111111" },
  { key: "notion", label: "Notion", Icon: SiNotion, color: "#111111" },
  { key: "gmail", label: "Gmail", Icon: GmailClassicIcon, color: "#EA4335" },
  { key: "zoom", label: "Zoom", Icon: SiZoom, color: "#2D8CFF" },
  { key: "slack", label: "Slack", Icon: SiSlack, color: "#36C5F0" },
  { key: "mongodb", label: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { key: "hubspot", label: "HubSpot", Icon: SiHubspot, color: "#FF7A59" },
  { key: "chrome", label: "Chrome", Icon: SiGooglechrome, color: "#4285F4" },
  { key: "figma", label: "Figma", Icon: SiFigma, color: "#A259FF" },
  { key: "dropbox", label: "Dropbox", Icon: SiDropbox, color: "#0061FF" },
  { key: "discord", label: "Discord", Icon: SiDiscord, color: "#5865F2" },
  { key: "asana", label: "Asana", Icon: SiAsana, color: "#F06A6A" },
  { key: "youtube", label: "YouTube", Icon: SiYoutube, color: "#FF0000" },
  { key: "instagram", label: "Instagram", Icon: InstagramClassicIcon, color: "#E4405F" },
  { key: "openai", label: "OpenAI", Icon: SiOpenai, color: "#111111" },
  { key: "supabase", label: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { key: "docker", label: "Docker", Icon: SiDocker, color: "#2496ED" },
  { key: "react", label: "React", Icon: SiReact, color: "#149ECA" },
];

const heroSlots = [
  {
    side: "left",
    row: "top",
    className: "left-[3%] top-[12%]",
    size: "lg",
    delay: 0,
    duration: 9.6,
  },
  {
    side: "left",
    row: "middle",
    className: "left-[8.5%] top-[39%]",
    size: "md",
    delay: 0,
    duration: 9.6,
  },
  {
    side: "left",
    row: "bottom",
    className: "left-[4%] top-[66%]",
    size: "lg",
    delay: 0,
    duration: 9.6,
  },

  {
    side: "right",
    row: "top",
    className: "right-[3%] top-[13%]",
    size: "lg",
    delay: 1.15,
    duration: 9.6,
  },
  {
    side: "right",
    row: "middle",
    className: "right-[8.5%] top-[40%]",
    size: "md",
    delay: 1.15,
    duration: 9.6,
  },
  {
    side: "right",
    row: "bottom",
    className: "right-[4%] top-[67%]",
    size: "lg",
    delay: 1.15,
    duration: 9.6,
  },
] as const;

const ctaSlots = [
  {
    side: "left",
    row: "top",
    className: "left-[1.5%] top-[8%]",
    size: "md",
    delay: 0,
    duration: 8.8,
  },
  {
    side: "left",
    row: "middle",
    className: "left-[5%] top-[41%]",
    size: "lg",
    delay: 0.45,
    duration: 9.4,
  },
  {
    side: "left",
    row: "bottom",
    className: "left-[1%] top-[72%]",
    size: "md",
    delay: 0.9,
    duration: 8.6,
  },
  {
    side: "right",
    row: "top",
    className: "right-[1.5%] top-[10%]",
    size: "md",
    delay: 0.7,
    duration: 9.1,
  },
  {
    side: "right",
    row: "middle",
    className: "right-[5%] top-[43%]",
    size: "lg",
    delay: 1.05,
    duration: 9.6,
  },
  {
    side: "right",
    row: "bottom",
    className: "right-[1%] top-[73%]",
    size: "md",
    delay: 1.35,
    duration: 8.9,
  },
] as const;

const tileClass = {
  md: "h-[66px] w-[66px] rounded-[20px] sm:h-[76px] sm:w-[76px] lg:h-[86px] lg:w-[86px] lg:rounded-[24px]",
  lg: "h-[78px] w-[78px] rounded-[23px] sm:h-[90px] sm:w-[90px] lg:h-[100px] lg:w-[100px] lg:rounded-[28px]",
} as const;

const iconClass = {
  md: "h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10",
  lg: "h-9 w-9 sm:h-10 sm:w-10 lg:h-12 lg:w-12",
} as const;

function pickNextLogo(current: number[], slotIndex: number) {
  const used = new Set(current);
  let next = Math.floor(Math.random() * logoPool.length);
  let guard = 0;

  while ((used.has(next) || next === current[slotIndex]) && guard < 40) {
    next = Math.floor(Math.random() * logoPool.length);
    guard += 1;
  }

  return next;
}

export default function FloatingToolBackground({
  variant = "hero",
}: {
  variant?: "hero" | "cta";
}) {
  const slots = useMemo(() => (variant === "cta" ? ctaSlots : heroSlots), [variant]);
  const [activeLogos, setActiveLogos] = useState(() =>
    slots.map((_, index) => index),
  );

  useEffect(() => {
    const logoTimer = window.setInterval(() => {
      setActiveLogos((current) => {
        const next = [...current];
        const changeCount = 2 + Math.floor(Math.random() * 2);
        const changedSlots = new Set<number>();

        while (changedSlots.size < changeCount) {
          changedSlots.add(Math.floor(Math.random() * slots.length));
        }

        changedSlots.forEach((slotIndex) => {
          next[slotIndex] = pickNextLogo(next, slotIndex);
        });

        return next;
      });
    }, 2400);

    return () => {
      window.clearInterval(logoTimer);
    };
  }, [slots]);

  return (
    <div className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${variant === "cta" ? "rounded-[44px]" : "rounded-[30px]"}`}>
      {slots.map((slot, index) => {
        const logo = logoPool[activeLogos[index] ?? index];
        if (!logo || !logo.Icon) return null;

        const Icon = logo.Icon;
        const sideDrift = slot.side === "left" ? 7 : -7;

        const yPath =
          slot.row === "top"
            ? [0, 18, 74, 78, 24, 0, 0]
            : slot.row === "middle"
              ? [0, -10, -46, -50, 46, 50, 0]
              : [0, 0, 0, -18, -72, -78, 0];

        const xPath =
          slot.row === "middle"
            ? [0, sideDrift, sideDrift * -0.55, 0, sideDrift * 0.45, 0, 0]
            : [0, sideDrift * 0.4, sideDrift, sideDrift * 0.35, sideDrift * -0.35, 0, 0];

        const rotatePath =
          slot.row === "middle"
            ? [0, 0.7, -1.2, 1.1, -1.1, 0.6, 0]
            : [0, -0.5, 1.2, -1.1, 0.8, -0.4, 0];

        const scalePath =
          slot.row === "middle"
            ? [1, 1.01, 1.08, 1.12, 1.08, 1.12, 1]
            : [1, 1.01, 1.07, 1.12, 1.02, 1.06, 1];

        return (
          <motion.div
            key={index}
            className={`group pointer-events-auto absolute z-30 cursor-pointer ${slot.className}`}
            whileInView={{
              x: xPath,
              y: yPath,
              rotate: rotatePath,
              opacity: [0.58, 0.72, 0.9, 1, 0.76, 0.92, 0.58],
              scale: scalePath,
            }}
            viewport={{ amount: 0.05 }}
            transition={{
              duration: slot.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: slot.delay,
              times: [0, 0.16, 0.31, 0.37, 0.62, 0.69, 1],
            }}
            whileHover={{
              opacity: 1,
              scale: 1.22,
              y: -14,
              rotate: 0,
              zIndex: 80,
              transition: { duration: 0.18 },
            }}
          >
            <div
              className={`relative grid place-items-center border border-white/90 bg-white/88 shadow-[0_16px_42px_rgba(69,98,130,.11)] backdrop-blur-xl transition-all duration-200 group-hover:border-[#7eb8ff] group-hover:bg-white group-hover:shadow-[0_26px_70px_rgba(47,127,255,.30)] ${tileClass[slot.size]}`}
            >
              <div className="absolute inset-[1px] rounded-[inherit] bg-[radial-gradient(circle_at_28%_18%,rgba(255,255,255,1),rgba(255,255,255,.80)_50%,rgba(243,248,255,.66)_100%)]" />
              <div className="absolute -inset-5 rounded-[34px] bg-[#77b8ff]/0 blur-2xl transition-all duration-200 group-hover:bg-[#77b8ff]/28" />

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={logo.key}
                  initial={{ opacity: 0, scale: 0.72, filter: "blur(6px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.72, filter: "blur(6px)" }}
                  transition={{ duration: 0.20, ease: "easeOut" }}
                  className="relative z-10 grid place-items-center"
                >
                  <Icon
                    className={`transition-all duration-200 group-hover:scale-125 group-hover:drop-shadow-[0_8px_14px_rgba(20,70,140,.20)] ${iconClass[slot.size]}`}
                    style={{ color: logo.color }}
                    aria-hidden="true"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

          </motion.div>
        );
      })}
    </div>
  );
}
