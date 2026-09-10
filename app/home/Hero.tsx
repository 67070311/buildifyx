"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Gamepad2, Pencil } from "lucide-react";

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
            ? {
                x: [0, -8, 7, 3, -5, 0],
                y: [0, 2, -3, 3, -1, 0],
              }
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

function Sparkle() {
  return (
    <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden="true">
      <path
        d="M20 2l4.8 11.8L37 18.6l-11.8 4.8L20 38l-5.2-14.6L3 18.6l12.2-4.8L20 2z"
        fill="currentColor"
      />
    </svg>
  );
}

function BigYellowMascot({ active }: { active: boolean }) {
  return (
    <svg
      viewBox="0 0 440 285"
      className="h-full w-full overflow-visible drop-shadow-[0_24px_45px_rgba(21,20,51,0.18)]"
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

      <Eye
        cx={169}
        cy={122}
        rx={39}
        ry={40}
        pupilRx={17}
        pupilRy={18}
        delay={0}
        active={active}
      />

      <Eye
        cx={265}
        cy={122}
        rx={39}
        ry={40}
        pupilRx={17}
        pupilRy={18}
        delay={0.15}
        active={active}
      />

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

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isActive = useInView(sectionRef, { amount: 0.08 });
  const sparkles = [
    "left-[9%] top-[31%] h-5 w-5 text-[#2458ff] sm:left-[16%] sm:top-[38%] sm:h-7 sm:w-7",
    "right-[11%] top-[26%] h-7 w-7 text-[#ff5570] sm:right-[26%] sm:top-[25%] sm:h-10 sm:w-10",
    "left-[12%] bottom-[27%] h-4 w-4 text-[#ff5570] sm:left-[23%] sm:bottom-[29%] sm:h-6 sm:w-6",
    "right-[9%] bottom-[31%] h-5 w-5 text-[#2458ff] sm:right-[15%] sm:bottom-[34%] sm:h-8 sm:w-8",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[760px] overflow-hidden bg-[#050814] px-5 py-10 text-[#151433] sm:min-h-[800px] sm:px-6 sm:py-12 md:min-h-[830px] md:py-14 lg:min-h-[850px]"
    >
      {/* Space background — visual layer only; hero content stays unchanged */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 18% 24%, rgba(67,97,238,0.22), transparent 25%), radial-gradient(circle at 82% 20%, rgba(123,97,255,0.20), transparent 28%), radial-gradient(circle at 50% 88%, rgba(43,114,255,0.16), transparent 34%), linear-gradient(180deg, #050814 0%, #091126 55%, #101938 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.95) 1px, transparent 1.4px), radial-gradient(circle, rgba(142,184,255,0.75) 1px, transparent 1.3px), radial-gradient(circle, rgba(255,255,255,0.5) 0.7px, transparent 1px)",
          backgroundPosition: "0 0, 47px 73px, 91px 31px",
          backgroundSize: "137px 137px, 193px 193px, 83px 83px",
        }}
      />

      {/* Soft color shapes */}
      <motion.div
        animate={
          isActive
            ? { x: [0, 22, 0], y: [0, 14, 0], scale: [1, 1.05, 1] }
            : { x: 0, y: 0, scale: 1 }
        }
        transition={{
          duration: isActive ? 12 : 0,
          repeat: isActive ? Infinity : 0,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-28 top-16 h-72 w-72 sm:h-96 sm:w-96"
      >
        <div className="absolute inset-0 rounded-full bg-[#ffb9d9]/35 blur-[90px]" />
      </motion.div>

      <motion.div
        animate={
          isActive
            ? { x: [0, -20, 0], y: [0, 18, 0], scale: [1, 1.06, 1] }
            : { x: 0, y: 0, scale: 1 }
        }
        transition={{
          duration: isActive ? 11 : 0,
          repeat: isActive ? Infinity : 0,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 sm:h-[430px] sm:w-[430px]"
      >
        <div className="absolute inset-0 rounded-full bg-[#9edfff]/40 blur-[100px]" />
      </motion.div>

      {/* Dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.24]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(21,20,51,0.28) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "linear-gradient(to bottom, black, transparent 92%)",
          WebkitMaskImage: "linear-gradient(to bottom, black, transparent 92%)",
        }}
      />

      {/* Center glow */}
      <div className="pointer-events-none absolute left-1/2 top-[54%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 blur-3xl sm:h-[380px] sm:w-[380px] md:h-[460px] md:w-[460px]" />

      {/* Decorative rings */}
      <div className="pointer-events-none absolute left-[-70px] top-[46%] h-40 w-40 rounded-full border border-[#2458ff]/15 sm:left-[-45px] sm:h-52 sm:w-52" />

      <div className="pointer-events-none absolute right-[-85px] top-[18%] h-44 w-44 rounded-full border border-[#ff5570]/20 sm:right-[-40px] sm:h-56 sm:w-56" />

      {/* Sparkles */}
      {sparkles.map((className, index) => (
        <motion.div
          key={className}
          className={`pointer-events-none absolute z-10 ${className}`}
          animate={
            isActive
              ? {
                  scale: [1, 0.65, 1],
                  rotate: [0, 18, 0],
                  opacity: [0.9, 0.45, 0.9],
                }
              : { scale: 1, rotate: 0, opacity: 0.9 }
          }
          transition={{
            duration: isActive ? 2.4 + index * 0.35 : 0,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
        >
          <Sparkle />
        </motion.div>
      ))}

      {/* Hero content */}
      <div className="relative z-30 mx-auto flex max-w-5xl flex-col items-center pt-8 text-center sm:pt-10 md:pt-12 lg:pt-14">
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-5 rounded-full border border-[#151433]/10 bg-white/75 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#151433]/65 shadow-[0_12px_35px_rgba(21,20,51,0.08)] backdrop-blur-xl sm:text-[11px]"
        >
          Build smart • Design fast
        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 34,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl text-[44px] font-black leading-[0.88] tracking-[-0.05em] text-[#151433] sm:text-[68px] md:text-[92px] lg:text-[124px]"
        >
          BUILDIFYX
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.18,
            duration: 0.7,
          }}
          className="mt-5 text-[16px] font-semibold italic text-[#e4a800] sm:text-[20px] md:text-[32px]"
        >
          Your eyes, your rules
        </motion.p>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.35,
            duration: 0.7,
          }}
          className="mt-5 max-w-[310px] text-[12px] font-normal leading-relaxed text-[#151433]/60 sm:max-w-xl sm:text-[14px] md:text-[16px]"
        >
          Smart creative platform for next generation designers. Make your
          website feel alive with cute interactive details.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.7,
          }}
          className="mt-7 flex w-full max-w-[360px] flex-col items-center justify-center gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:gap-4"
        >
          {/* Projects button */}
          <motion.div
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/mywork"
              className="group inline-flex min-h-[58px] w-full items-center justify-between gap-4 rounded-full bg-[#151433] px-5 py-3 text-[13px] font-medium text-white shadow-[0_16px_38px_rgba(21,20,51,0.20)] transition duration-300 hover:bg-[#2458ff] sm:min-w-[270px] sm:px-6 sm:text-[15px]"
            >
              <span className="flex items-center gap-3">
                <Pencil className="h-5 w-5 shrink-0" strokeWidth={1.8} />

                <span>See More Projects</span>
              </span>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffd22e] text-[#151433] transition duration-300 group-hover:rotate-[-8deg] group-hover:bg-white">
                <Pencil className="h-[18px] w-[18px]" strokeWidth={1.9} />
              </span>
            </Link>
          </motion.div>

          {/* Playground button */}
          <motion.div
            whileHover={{
              y: -4,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/playground"
              className="group inline-flex min-h-[58px] w-full items-center justify-between gap-4 rounded-full border border-[#151433]/10 bg-white/80 px-5 py-3 text-[13px] font-medium text-[#151433] shadow-[0_14px_34px_rgba(21,20,51,0.10)] backdrop-blur-xl transition duration-300 hover:border-[#ffd22e] hover:bg-[#ffd22e] sm:min-w-[270px] sm:px-6 sm:text-[15px]"
            >
              <span className="flex items-center gap-3">
                <Gamepad2 className="h-5 w-5 shrink-0" strokeWidth={1.8} />

                <span>Buildify Game</span>
              </span>

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ff5570] text-white transition duration-300 group-hover:bg-[#151433]">
                <Gamepad2 className="h-5 w-5" strokeWidth={1.9} />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Mascot */}
      <motion.div
        className="
          pointer-events-none
          absolute
          bottom-[-25px]
          left-1/2
          z-20
          h-[215px]
          w-[355px]
          sm:bottom-[-90px]
          sm:h-[290px]
          sm:w-[480px]
          md:bottom-[-105px]
          md:h-[350px]
          md:w-[580px]
          lg:bottom-[-120px]
          lg:h-[420px]
          lg:w-[700px]
        "
        style={{
          x: "-50%",
        }}
        animate={
          isActive
            ? { y: [0, -8, 0], rotate: [-0.8, 0.8, -0.8] }
            : { y: 0, rotate: -0.8 }
        }
        transition={{
          duration: isActive ? 5.8 : 0,
          repeat: isActive ? Infinity : 0,
          ease: "easeInOut",
        }}
      >
        <BigYellowMascot active={isActive} />
      </motion.div>
    </section>
  );
}
