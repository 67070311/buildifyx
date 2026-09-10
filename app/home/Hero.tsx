"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type EyeProps = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  pupilRx?: number;
  pupilRy?: number;
  delay?: number;
  active: boolean;
};

function Eye({
  cx,
  cy,
  rx,
  ry,
  pupilRx = rx * 0.42,
  pupilRy = ry * 0.52,
  delay = 0,
  active,
}: EyeProps) {
  return (
    <>
      <ellipse
        cx={cx}
        cy={cy}
        rx={rx}
        ry={ry}
        fill="white"
        stroke="#151433"
        strokeWidth="3"
      />
      <motion.ellipse
        cx={cx}
        cy={cy}
        rx={pupilRx}
        ry={pupilRy}
        fill="#151433"
        animate={
          active
            ? { x: [0, -8, 7, 3, -5, 0], y: [0, 2, -3, 3, -1, 0] }
            : { x: 0, y: 0 }
        }
        transition={{
          duration: active ? 4.2 : 0,
          delay: active ? delay : 0,
          repeat: active ? Infinity : 0,
          ease: "easeInOut",
        }}
      />
    </>
  );
}

function BigYellowMascot({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 440 285"
      className="h-full w-full overflow-visible"
      aria-hidden="true"
    >
      <path
        d="M30 285C24 154 111 44 224 44c111 0 187 96 181 241H30z"
        fill="#FFD22E"
        stroke="#151433"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      <circle cx="116" cy="190" r="31" fill="#FF9B23" opacity="0.88" />
      <circle cx="326" cy="190" r="31" fill="#FF9B23" opacity="0.88" />
      <Eye cx={169} cy={122} rx={39} ry={40} pupilRx={17} pupilRy={18} delay={0} active={active} />
      <Eye cx={265} cy={122} rx={39} ry={40} pupilRx={17} pupilRy={18} delay={0.15} active={active} />
      <ellipse cx="220" cy="166" rx="32" ry="25" fill="#151433" />
      <path
        d="M160 202c38 34 93 34 130 0"
        stroke="#151433"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function ButterflyIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-[#8bc0a4] drop-shadow-[0_0_8px_rgba(139,192,164,0.45)]"
      fill="currentColor"
    >
      <path d="M11.2 11.3C8.4 4.7 3.2 4.5 2.4 6.7c-.8 2.2 1.4 5.1 5.8 6.2-3.6.3-5.7 2.4-4.7 4.3 1.2 2.1 5.6 1.3 7.7-2.6V21h1.6v-6.4c2.1 3.9 6.5 4.7 7.7 2.6 1-1.9-1.1-4-4.7-4.3 4.4-1.1 6.6-4 5.8-6.2-.8-2.2-6-2-8.8 4.6-.4-.5-1.2-.5-1.6 0Z" />
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isActive = useInView(sectionRef, { amount: 0.08 });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[760px] overflow-hidden bg-[#060908] px-5 pb-0 pt-24 text-white sm:min-h-[800px] sm:px-6 sm:pt-28 md:min-h-[860px] lg:min-h-[900px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#050807_0%,#08100d_45%,#09120f_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_44%,rgba(110,150,126,0.20),transparent_34%),radial-gradient(circle_at_22%_58%,rgba(64,95,72,0.16),transparent_26%),radial-gradient(circle_at_78%_62%,rgba(91,117,94,0.18),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08)_0%,rgba(0,0,0,0.08)_48%,rgba(0,0,0,0.48)_100%)]" />

      <motion.div
        animate={
          isActive
            ? { opacity: [0.34, 0.5, 0.34], scale: [1, 1.04, 1] }
            : { opacity: 0.34, scale: 1 }
        }
        transition={{
          duration: isActive ? 9 : 0,
          repeat: isActive ? Infinity : 0,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute bottom-0 left-1/2 h-[46%] w-[88%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(165,190,165,0.16)_0%,rgba(66,93,70,0.10)_46%,transparent_74%)] blur-2xl"
      />

      {[
        "left-[18%] top-[44%]",
        "left-[37%] top-[58%]",
        "right-[25%] top-[50%]",
        "right-[16%] top-[72%]",
        "left-[57%] top-[63%]",
      ].map((pos, index) => (
        <motion.span
          key={pos}
          className={`pointer-events-none absolute ${pos} h-1.5 w-1.5 rounded-full bg-white/90 shadow-[0_0_16px_rgba(255,255,255,0.7)]`}
          animate={
            isActive
              ? { opacity: [0.25, 1, 0.25], scale: [0.8, 1.35, 0.8] }
              : { opacity: 0.4, scale: 1 }
          }
          transition={{
            duration: isActive ? 2.8 + index * 0.45 : 0,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative z-20 mx-auto flex max-w-6xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.34em] text-white/55 backdrop-blur-xl sm:text-[11px]"
        >
          <ButterflyIcon />
          Buildifyx Studio
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-9 max-w-5xl text-[52px] font-medium leading-[0.94] tracking-[-0.055em] text-white sm:text-[72px] md:text-[96px] lg:text-[112px]"
        >
          Built for ideas that
          <span className="block font-serif italic font-normal tracking-[-0.04em] text-[#edf4ef]">
            grow.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base md:text-lg"
        >
          Strategy, expressive design, and reliable engineering for digital products built to keep moving forward.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.32, duration: 0.7 }}
          className="mt-8"
        >
          <Link
            href="/Contact"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#111813] transition duration-300 hover:-translate-y-1 hover:bg-[#eaf3ed]"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-5 text-[9px] uppercase tracking-[0.28em] text-white/40 sm:text-[10px]"
        >
          30+ clients · 116+ projects · Bangkok → Worldwide
        </motion.p>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-[-88px] left-1/2 z-10 h-[250px] w-[410px] -translate-x-1/2 sm:bottom-[-115px] sm:h-[320px] sm:w-[530px] md:bottom-[-135px] md:h-[380px] md:w-[625px] lg:bottom-[-160px] lg:h-[455px] lg:w-[745px]"
        animate={
          isActive
            ? { y: [0, -10, 0], rotate: [-0.7, 0.7, -0.7] }
            : { y: 0, rotate: -0.7 }
        }
        transition={{
          duration: isActive ? 5.6 : 0,
          repeat: isActive ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        <div className="absolute left-1/2 top-[18%] h-28 w-64 -translate-x-1/2 rounded-full bg-white/10 blur-3xl sm:h-36 sm:w-80 md:h-40 md:w-96" />
        <BigYellowMascot active={isActive} />
      </motion.div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-30 h-24 bg-gradient-to-t from-[#060908] to-transparent" />
    </section>
  );
}
