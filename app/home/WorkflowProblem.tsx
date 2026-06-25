"use client";

import { motion, useReducedMotion } from "framer-motion";
import * as simpleIcons from "simple-icons";

type BrandIconData = {
  title: string;
  slug: string;
  hex: string;
  path?: string;
  monogram?: string;
};

type PackageIcon = {
  title: string;
  slug: string;
  hex: string;
  path: string;
};

const packageIcons = simpleIcons as unknown as Record<
  string,
  PackageIcon | undefined
>;

function getIcon(
  exportName: string,
  title: string,
  monogram: string,
  hex = "ffffff",
): BrandIconData {
  const icon = packageIcons[exportName];

  if (icon?.path) {
    return icon;
  }

  return {
    title,
    slug: title.toLowerCase().replace(/\s+/g, "-"),
    hex,
    path: "",
    monogram,
  };
}

type AppItem = {
  name: string;
  icon: BrandIconData;
  background: string;
  iconColor?: string;
};

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

  return (
    <svg
      role="img"
      aria-label={`${title} logo`}
      viewBox="0 0 24 24"
      className="relative z-10 h-8 w-8 drop-shadow-sm sm:h-10 sm:w-10 md:h-11 md:w-11"
    >
      <title>{title}</title>

      {icon.path ? (
        <path d={icon.path} fill={fillColor} />
      ) : (
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
      )}
    </svg>
  );
}

function AppIcon({ app }: { app: AppItem }) {
  return (
    <div className="flex w-[76px] shrink-0 flex-col items-center gap-2 sm:w-[96px] md:w-[112px]">
      <div
        className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-[1.35rem] shadow-[0_18px_45px_rgba(0,0,0,0.48)] ring-1 ring-white/15 transition duration-300 hover:-translate-y-1 hover:scale-105 sm:h-20 sm:w-20 md:h-[88px] md:w-[88px] md:rounded-[1.65rem]"
        style={{ background: app.background }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(255,255,255,0.78),transparent_34%)]" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/25 to-transparent" />

        <BrandIcon icon={app.icon} color={app.iconColor} title={app.name} />
      </div>

      <span className="max-w-full truncate text-[10px] font-extralight leading-none tracking-wide text-white/40 sm:text-[11px]">
        {app.name}
      </span>
    </div>
  );
}

function MarqueeRow({
  apps,
  reverse = false,
  duration = 82,
}: {
  apps: AppItem[];
  reverse?: boolean;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();
  const repeatedApps = [...apps, ...apps, ...apps];

  return (
    <div className="relative flex overflow-hidden py-1">
      <motion.div
        className="flex w-max shrink-0 gap-4 px-2 sm:gap-5 md:gap-6"
        animate={
          reduceMotion
            ? { x: 0 }
            : { x: reverse ? ["-33.333%", "0%"] : ["0%", "-33.333%"] }
        }
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {repeatedApps.map((app, index) => (
          <AppIcon key={`${app.name}-${index}`} app={app} />
        ))}
      </motion.div>
    </div>
  );
}

export default function WorkflowProblem() {
  const allApps = [...rowOne, ...rowTwo];

  return (
    <section
      id="workflow-tools"
      aria-labelledby="workflow-tools-title"
      className="relative isolate w-full overflow-hidden bg-black px-4 py-20 text-center text-white sm:px-6 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(85,82,217,0.26),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(255,122,89,0.16),transparent_38%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.62),transparent_32%,transparent_66%,rgba(0,0,0,0.85))]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl"
        >
          <p className="text-[10px] font-extralight uppercase tracking-[0.42em] text-white/40 sm:text-xs">
            Workflow Tools
          </p>

          <h2
            id="workflow-tools-title"
            className="mt-4 text-3xl font-extralight leading-tight tracking-[-0.045em] text-white sm:text-4xl md:text-5xl"
          >
            Connect AI, social, and software tools into one smooth workflow.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-extralight leading-7 text-white/50 sm:text-base">
            A modern technology stack section with adaptive brand icons, smooth
            motion, responsive layout, and search-friendly structure.
          </p>
        </motion.div>

        <ul className="sr-only">
          {allApps.map((app) => (
            <li key={app.name}>{app.name}</li>
          ))}
        </ul>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative mt-12 sm:mt-16 md:mt-20"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-14 bg-gradient-to-r from-black to-transparent sm:w-28 md:w-44" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-14 bg-gradient-to-l from-black to-transparent sm:w-28 md:w-44" />

          <div className="space-y-5 sm:space-y-6 md:space-y-7">
            <MarqueeRow apps={rowOne} duration={84} />
            <MarqueeRow apps={rowTwo} reverse duration={92} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
