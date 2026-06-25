"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type EyeProps = {
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  pupilRx?: number;
  pupilRy?: number;
  delay?: number;
};

function Eye({
  cx,
  cy,
  rx,
  ry,
  pupilRx = rx * 0.42,
  pupilRy = ry * 0.52,
  delay = 0,
}: EyeProps) {
  return (
    <>
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="white" />

      <motion.ellipse
        cx={cx}
        cy={cy}
        rx={pupilRx}
        ry={pupilRy}
        fill="#100824"
        animate={{
          x: [0, -8, 7, 3, -5, 0],
          y: [0, 2, -3, 3, -1, 0],
        }}
        transition={{
          duration: 4.2,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}

function Sparkle() {
  return (
    <svg viewBox="0 0 40 40" className="h-full w-full">
      <path
        d="M20 2l4.8 11.8L37 18.6l-11.8 4.8L20 38l-5.2-14.6L3 18.6l12.2-4.8L20 2z"
        fill="currentColor"
      />
    </svg>
  );
}

function BigYellowMascot() {
  return (
    <svg
      viewBox="0 0 440 285"
      className="h-full w-full overflow-visible drop-shadow-2xl"
    >
      <path
        d="M30 285C24 154 111 44 224 44c111 0 187 96 181 241H30z"
        fill="#FFD22E"
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
      />

      <Eye
        cx={265}
        cy={122}
        rx={39}
        ry={40}
        pupilRx={17}
        pupilRy={18}
        delay={0.15}
      />

      <ellipse cx="220" cy="166" rx="32" ry="25" fill="#050505" />

      <path
        d="M160 202c38 34 93 34 130 0"
        stroke="#050505"
        strokeWidth="9"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function Hero() {
  const sparkles = [
    "left-[16%] top-[38%] h-5 w-5 text-[#2458ff] sm:h-7 sm:w-7",
    "right-[26%] top-[25%] h-7 w-7 text-[#ff5570] sm:h-10 sm:w-10",
    "left-[23%] bottom-[29%] h-4 w-4 text-[#ff5570] sm:h-6 sm:w-6",
    "right-[15%] bottom-[34%] h-5 w-5 text-[#2458ff] sm:h-8 sm:w-8",
  ];

  return (
    <section className="relative min-h-[700px] overflow-hidden bg-[#151433] px-5 py-10 text-white sm:min-h-[750px] sm:px-6 sm:py-12 md:min-h-[780px] md:py-14 lg:min-h-[790px]">
      <div
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            "radial-gradient(circle at 16% 18%, rgba(255, 95, 190, 0.22), transparent 27%), radial-gradient(circle at 84% 22%, rgba(103, 189, 232, 0.22), transparent 28%), radial-gradient(circle at 50% 92%, rgba(255, 210, 46, 0.24), transparent 34%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.55) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute left-1/2 top-[54%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl sm:h-[380px] sm:w-[380px] md:h-[460px] md:w-[460px]" />

      {sparkles.map((className, index) => (
        <motion.div
          key={className}
          className={`pointer-events-none absolute z-10 ${className}`}
          animate={{
            scale: [1, 0.65, 1],
            rotate: [0, 18, 0],
            opacity: [0.9, 0.45, 0.9],
          }}
          transition={{
            duration: 2.4 + index * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Sparkle />
        </motion.div>
      ))}

      <div className="relative z-30 mx-auto flex max-w-5xl flex-col items-center pt-8 text-center sm:pt-10 md:pt-12 lg:pt-14">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white/80 backdrop-blur sm:text-[11px]"
        >
          Build smart • Design fast
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl text-[44px] font-black leading-[0.88] tracking-tight sm:text-[68px] md:text-[92px] lg:text-[124px]"
        >
          BUILDIFYX
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.7 }}
          className="mt-5 text-[16px] font-extrabold italic text-[#ffd22e] sm:text-[20px] md:text-[32px]"
        >
          Your eyes, your rules
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-5 max-w-[310px] text-[12px] font-medium leading-relaxed text-white/65 sm:max-w-xl sm:text-[14px] md:text-[16px]"
        >
          Smart creative platform for next generation designers. Make your
          website feel alive with cute interactive details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-7 flex items-center justify-center sm:mt-8"
        >
          <Link
            href="/mywork"
            className="
              inline-flex items-center gap-2.5 rounded-full bg-white
              px-5 py-3 text-[12px] font-bold text-[#151433]
              shadow-[0_14px_34px_rgba(0,0,0,0.24)]
              transition duration-300 hover:-translate-y-1 hover:bg-[#ffd22e]

              sm:gap-3 sm:px-6 sm:py-3.5 sm:text-[14px] sm:font-extrabold
            "
          >
            See more Projects
            <span
              className="
                flex h-6 w-6 items-center justify-center rounded-full
                bg-[#151433] text-xs text-white

                sm:h-7 sm:w-7 sm:text-sm
              "
            >
              →
            </span>
          </Link>
        </motion.div>
      </div>

      <motion.div
        className="
          pointer-events-none absolute left-1/2 z-20

          bottom-[-25px]
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
        style={{ x: "-50%" }}
        animate={{
          y: [0, -8, 0],
          rotate: [-0.8, 0.8, -0.8],
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <BigYellowMascot />
      </motion.div>
    </section>
  );
}
