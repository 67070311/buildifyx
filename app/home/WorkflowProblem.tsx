"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import SiAnthropic from "@icons-pack/react-simple-icons/icons/SiAnthropic.mjs";
import SiDiscord from "@icons-pack/react-simple-icons/icons/SiDiscord.mjs";
import SiFigma from "@icons-pack/react-simple-icons/icons/SiFigma.mjs";
import SiGithub from "@icons-pack/react-simple-icons/icons/SiGithub.mjs";
import SiHuggingface from "@icons-pack/react-simple-icons/icons/SiHuggingface.mjs";
import SiInstagram from "@icons-pack/react-simple-icons/icons/SiInstagram.mjs";
import SiNextdotjs from "@icons-pack/react-simple-icons/icons/SiNextdotjs.mjs";
import SiNotion from "@icons-pack/react-simple-icons/icons/SiNotion.mjs";
import SiPython from "@icons-pack/react-simple-icons/icons/SiPython.mjs";
import SiPytorch from "@icons-pack/react-simple-icons/icons/SiPytorch.mjs";
import SiReact from "@icons-pack/react-simple-icons/icons/SiReact.mjs";
import SiTailwindcss from "@icons-pack/react-simple-icons/icons/SiTailwindcss.mjs";
import SiTensorflow from "@icons-pack/react-simple-icons/icons/SiTensorflow.mjs";
import SiTiktok from "@icons-pack/react-simple-icons/icons/SiTiktok.mjs";
import SiTypescript from "@icons-pack/react-simple-icons/icons/SiTypescript.mjs";
import SiVercel from "@icons-pack/react-simple-icons/icons/SiVercel.mjs";
import SiYoutube from "@icons-pack/react-simple-icons/icons/SiYoutube.mjs";

type BrandIconComponent = typeof SiReact;

type BrandIconData = {
  title: string;
  slug: string;
  hex: string;
  Icon?: BrandIconComponent;
  monogram?: string;
};

type AppItem = {
  name: string;
  icon: BrandIconData;
  background: string;
  iconColor?: string;
};

const packageIcons: Record<string, BrandIconComponent | undefined> = {
  siAnthropic: SiAnthropic,
  siHuggingface: SiHuggingface,
  siTensorflow: SiTensorflow,
  siPytorch: SiPytorch,
  siFigma: SiFigma,
  siNotion: SiNotion,
  siDiscord: SiDiscord,
  siNextdotjs: SiNextdotjs,
  siReact: SiReact,
  siTypescript: SiTypescript,
  siPython: SiPython,
  siGithub: SiGithub,
  siVercel: SiVercel,
  siTailwindcss: SiTailwindcss,
  siInstagram: SiInstagram,
  siTiktok: SiTiktok,
  siYoutube: SiYoutube,
};

function getIcon(
  exportName: string,
  title: string,
  monogram: string,
  hex = "ffffff",
): BrandIconData {
  const Icon = packageIcons[exportName];
  const slug = title.toLowerCase().replace(/\s+/g, "-");

  if (Icon) {
    return { title, slug, hex, Icon };
  }

  return {
    title,
    slug,
    hex,
    monogram,
  };
}


const rowOne: AppItem[] = [
  {
    name: "OpenAI",
    icon: getIcon("siOpenai", "OpenAI", "AI", "111827"),
    background: "linear-gradient(135deg, #ffffff 0%, #d1d5db 100%)",
    iconColor: "#111827",
  },
  {
    name: "Claude",
    icon: getIcon("siAnthropic", "Claude", "C", "ffffff"),
    background: "linear-gradient(135deg, #fb923c 0%, #7c2d12 100%)",
    iconColor: "#ffffff",
  },
  {
    name: "Hugging Face",
    icon: getIcon("siHuggingface", "Hugging Face", "HF", "111827"),
    background: "linear-gradient(135deg, #fde68a 0%, #f59e0b 100%)",
    iconColor: "#111827",
  },
  {
    name: "TensorFlow",
    icon: getIcon("siTensorflow", "TensorFlow", "TF", "ffffff"),
    background: "linear-gradient(135deg, #fdba74 0%, #ea580c 100%)",
    iconColor: "#ffffff",
  },
  {
    name: "PyTorch",
    icon: getIcon("siPytorch", "PyTorch", "PT", "ffffff"),
    background: "linear-gradient(135deg, #fb7185 0%, #dc2626 100%)",
    iconColor: "#ffffff",
  },
  {
    name: "Figma",
    icon: getIcon("siFigma", "Figma", "F", "ffffff"),
    background: "linear-gradient(135deg, #fb7185 0%, #7c3aed 100%)",
    iconColor: "#ffffff",
  },
  {
    name: "Canva",
    icon: getIcon("siCanva", "Canva", "C", "ffffff"),
    background: "linear-gradient(135deg, #67e8f9 0%, #2563eb 100%)",
    iconColor: "#ffffff",
  },
  {
    name: "Notion",
    icon: getIcon("siNotion", "Notion", "N", "111827"),
    background: "linear-gradient(135deg, #ffffff 0%, #d4d4d8 100%)",
    iconColor: "#111827",
  },
  {
    name: "Slack",
    icon: getIcon("siSlack", "Slack", "S", "ffffff"),
    background: "linear-gradient(135deg, #c084fc 0%, #ec4899 100%)",
    iconColor: "#ffffff",
  },
  {
    name: "Discord",
    icon: getIcon("siDiscord", "Discord", "D", "ffffff"),
    background: "linear-gradient(135deg, #818cf8 0%, #2563eb 100%)",
    iconColor: "#ffffff",
  },
];

const rowTwo: AppItem[] = [
  {
    name: "Next.js",
    icon: getIcon("siNextdotjs", "Next.js", "N", "111827"),
    background: "linear-gradient(135deg, #ffffff 0%, #9ca3af 100%)",
    iconColor: "#111827",
  },
  {
    name: "React",
    icon: getIcon("siReact", "React", "R", "ffffff"),
    background: "linear-gradient(135deg, #67e8f9 0%, #0284c7 100%)",
    iconColor: "#ffffff",
  },
  {
    name: "TypeScript",
    icon: getIcon("siTypescript", "TypeScript", "TS", "ffffff"),
    background: "linear-gradient(135deg, #60a5fa 0%, #1d4ed8 100%)",
    iconColor: "#ffffff",
  },
  {
    name: "Python",
    icon: getIcon("siPython", "Python", "PY", "111827"),
    background: "linear-gradient(135deg, #60a5fa 0%, #facc15 100%)",
    iconColor: "#111827",
  },
  {
    name: "GitHub",
    icon: getIcon("siGithub", "GitHub", "GH", "ffffff"),
    background: "linear-gradient(135deg, #71717a 0%, #09090b 100%)",
    iconColor: "#ffffff",
  },
  {
    name: "Vercel",
    icon: getIcon("siVercel", "Vercel", "V", "111827"),
    background: "linear-gradient(135deg, #ffffff 0%, #a1a1aa 100%)",
    iconColor: "#111827",
  },
  {
    name: "Tailwind CSS",
    icon: getIcon("siTailwindcss", "Tailwind CSS", "TW", "ffffff"),
    background: "linear-gradient(135deg, #67e8f9 0%, #2563eb 100%)",
    iconColor: "#ffffff",
  },
  {
    name: "Instagram",
    icon: getIcon("siInstagram", "Instagram", "IG", "ffffff"),
    background:
      "linear-gradient(135deg, #facc15 0%, #ec4899 48%, #7c3aed 100%)",
    iconColor: "#ffffff",
  },
  {
    name: "TikTok",
    icon: getIcon("siTiktok", "TikTok", "TT", "ffffff"),
    background:
      "linear-gradient(135deg, #22d3ee 0%, #111827 48%, #fb7185 100%)",
    iconColor: "#ffffff",
  },
  {
    name: "YouTube",
    icon: getIcon("siYoutube", "YouTube", "YT", "ffffff"),
    background: "linear-gradient(135deg, #f87171 0%, #dc2626 100%)",
    iconColor: "#ffffff",
  },
  {
    name: "LinkedIn",
    icon: getIcon("siLinkedin", "LinkedIn", "in", "ffffff"),
    background: "linear-gradient(135deg, #60a5fa 0%, #1d4ed8 100%)",
    iconColor: "#ffffff",
  },
];

function BrandIcon({
  icon,
  color,
  title,
}: {
  icon: BrandIconData;
  color?: string;
  title: string;
}) {
  const fillColor = color ?? `#${icon.hex}`;
  const Icon = icon.Icon;

  if (Icon) {
    return (
      <Icon
        role="img"
        aria-label={`${title} logo`}
        title={title}
        color={fillColor}
        className="relative z-10 h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-11 lg:w-11"
      />
    );
  }

  return (
    <svg
      role="img"
      aria-label={`${title} logo`}
      viewBox="0 0 24 24"
      className="relative z-10 h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 lg:h-11 lg:w-11"
    >
      <title>{title}</title>
      <text
        x="12"
        y="15.5"
        textAnchor="middle"
        fill={fillColor}
        fontSize="8"
        fontWeight="700"
        fontFamily="Arial, Helvetica, sans-serif"
      >
        {icon.monogram}
      </text>
    </svg>
  );
}


function AppIcon({ app }: { app: AppItem }) {
  return (
    <motion.div
      whileHover={{
        y: -7,
        scale: 1.04,
      }}
      transition={{
        duration: 0.25,
        ease: "easeOut",
      }}
      className="flex w-[82px] shrink-0 flex-col items-center gap-2 sm:w-[96px] md:w-[108px]"
    >
      <div
        className="relative flex h-[66px] w-[66px] items-center justify-center overflow-hidden rounded-[20px] border border-[#151433]/10 shadow-[0_16px_35px_rgba(61,50,96,0.14)] ring-1 ring-white/80 sm:h-[76px] sm:w-[76px] sm:rounded-[24px] md:h-[86px] md:w-[86px] md:rounded-[27px]"
        style={{
          background: app.background,
        }}
      >
        {/* Top highlight */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_28%_16%,rgba(255,255,255,0.9),transparent_34%)]" />

        {/* Bottom depth */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Inner border */}
        <div className="pointer-events-none absolute inset-[1px] rounded-[inherit] border border-white/35" />

        <BrandIcon icon={app.icon} color={app.iconColor} title={app.name} />
      </div>

      <span className="max-w-[80px] truncate text-center text-[9px] font-medium leading-none text-[#625d6f] sm:max-w-[94px] sm:text-[10px] md:text-[11px]">
        {app.name}
      </span>
    </motion.div>
  );
}

function AppGroup({
  apps,
  ariaHidden = false,
}: {
  apps: AppItem[];
  ariaHidden?: boolean;
}) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-start gap-3 pr-3 sm:gap-5 sm:pr-5 md:gap-6 md:pr-6"
    >
      {apps.map((app, index) => (
        <AppIcon key={`${app.name}-${index}`} app={app} />
      ))}
    </div>
  );
}

function MarqueeRow({
  apps,
  reverse = false,
  duration = 48,
  active,
}: {
  apps: AppItem[];
  reverse?: boolean;
  duration?: number;
  active: boolean;
}) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="overflow-x-auto py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <AppGroup apps={apps} />
      </div>
    );
  }

  return (
    <div
      className="group/marquee relative overflow-hidden py-2"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
      }}
    >
      <div
        className={`perf-marquee-track flex w-max will-change-transform group-hover/marquee:[animation-play-state:paused] ${
          active ? "[animation-play-state:running]" : "[animation-play-state:paused]"
        }`}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <AppGroup apps={apps} />

        <AppGroup apps={apps} ariaHidden />
      </div>
    </div>
  );
}

export default function WorkflowProblem() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isActive = useInView(sectionRef, { amount: 0.04 });
  const allApps = [...rowOne, ...rowTwo];

  return (
    <section
      ref={sectionRef}
      id="workflow-tools"
      aria-labelledby="workflow-tools-title"
      className="perf-section relative isolate w-full overflow-hidden bg-[#fffdf8] px-4 py-20 text-center text-[#24212d] sm:px-6 sm:py-24 md:py-28 lg:px-10"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#fffdf8_48%,#ffffff_100%)]" />

        <motion.div
          animate={
            isActive
              ? { x: [0, 25, 0], y: [0, 18, 0], scale: [1, 1.06, 1] }
              : { x: 0, y: 0, scale: 1 }
          }
          transition={{
            duration: isActive ? 13 : 0,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="absolute -left-52 top-[-140px] h-[460px] w-[460px]"
        >
          <div className="absolute inset-0 rounded-full bg-[#e4dcff]/45 blur-[150px]" />
        </motion.div>

        <motion.div
          animate={
            isActive
              ? { x: [0, -24, 0], y: [0, 20, 0], scale: [1, 1.05, 1] }
              : { x: 0, y: 0, scale: 1 }
          }
          transition={{
            duration: isActive ? 14 : 0,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="absolute -right-52 top-[5%] h-[480px] w-[480px]"
        >
          <div className="absolute inset-0 rounded-full bg-[#dcf7ec]/45 blur-[150px]" />
        </motion.div>

        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(104,88,150,0.18) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px]">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-[#7567e8] sm:text-xs">
            Workflow Tools
          </p>

          <h2
            id="workflow-tools-title"
            className="mx-auto mt-5 max-w-4xl text-[34px] font-light leading-[1.08] tracking-[-0.05em] text-[#24212d] sm:text-4xl md:text-5xl lg:text-[58px]"
          >
            Connect AI, social, and software tools into one smooth workflow.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm font-normal leading-7 text-[#6d6877] sm:text-base">
            A modern technology stack section with adaptive brand icons, smooth
            motion, responsive layout, and search-friendly structure.
          </p>
        </motion.div>

        {/* SEO list */}
        <ul className="sr-only">
          {allApps.map((app) => (
            <li key={app.name}>{app.name}</li>
          ))}
        </ul>

        {/* Marquee area */}
        <motion.div
          initial={{
            opacity: 0,
            y: 38,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            margin: "-80px",
          }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto mt-12 max-w-[1180px] sm:mt-16 md:mt-20"
        >
          {/* Main panel */}
          <div className="relative overflow-hidden rounded-[30px] border border-[#151433]/[0.07] bg-white/65 px-0 py-6 shadow-[0_28px_90px_rgba(87,69,137,0.09)] backdrop-blur-xl sm:rounded-[38px] sm:py-8 md:py-10">
            {/* Panel decoration */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(231,221,255,0.2),transparent_40%,rgba(223,248,236,0.2))]" />

            <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-[70%] -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />

            {/* Rows */}
            <div className="relative space-y-4 sm:space-y-5 md:space-y-6">
              <MarqueeRow apps={rowOne} duration={50} active={isActive} />

              <div className="mx-auto h-px w-[90%] bg-gradient-to-r from-transparent via-[#151433]/[0.06] to-transparent" />

              <MarqueeRow apps={rowTwo} reverse duration={56} active={isActive} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
