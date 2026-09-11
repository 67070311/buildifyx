"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";

const processCards = [
  {
    number: "01",
    title: "Strategy",
    text: "We define goals, users, structure, and the right direction before building.",
    accent: "#6F8F7A",
    side: "left",
  },
  {
    number: "02",
    title: "Design",
    text: "We create clean, modern, and user-friendly interfaces for real users.",
    accent: "#9A806C",
    side: "left",
  },
  {
    number: "03",
    title: "Development",
    text: "We build fast, responsive, and scalable digital products with clean code.",
    accent: "#789884",
    side: "right",
  },
  {
    number: "04",
    title: "Launch",
    text: "We test, publish, improve, and support your product after launch.",
    accent: "#7E8A6A",
    side: "right",
  },
];
const serviceTags = [
  "UI/UX",
  "Web App",
  "AI System",
  "Dashboard",
  "Branding",
  "Automation",
];

const people = [
  {
    name: "Top",
    role: "Strategist",
    gender: "male",
    skin: "#DFA27D",
    hair: "#171717",
    cheek: "#F59E9E",
    accent: "#76937E",
    delay: 0,
  },
  {
    name: "Manee",
    role: "Designer",
    gender: "female",
    skin: "#F1B59E",
    hair: "#5A2D1F",
    cheek: "#FB7185",
    accent: "#A08672",
    delay: 0.35,
  },
  {
    name: "Ming",
    role: "Developer",
    gender: "male",
    skin: "#C9865D",
    hair: "#2A1710",
    cheek: "#FCA5A5",
    accent: "#809A87",
    delay: 0.7,
  },
] as const;

type Person = (typeof people)[number];

type OrbitValues = {
  x: MotionValue<number>;
  y: MotionValue<number>;
  scale: MotionValue<number>;
  rotate: MotionValue<number>;
};

function useSmoothOrbit(
  index: number,
  time: MotionValue<number>,
): OrbitValues {
  const orbitDuration = 24000;
  const phaseOffset = (index * Math.PI * 2) / people.length;

  const angle = useTransform(time, (latestTime) => {
    return (latestTime / orbitDuration) * Math.PI * 2 + phaseOffset;
  });

  const x = useTransform(angle, (value) => Math.sin(value) * 172);
  const y = useTransform(angle, (value) => -Math.cos(value) * 62);
  const scale = useTransform(y, [-62, 62], [1.06, 0.76]);
  const rotate = useTransform(x, [-172, 172], [-7, 7]);
  return { x, y, scale, rotate };
}

function CartoonFace({
  person,
  index,
  time,
  active,
}: {
  person: Person;
  index: number;
  time: MotionValue<number>;
  active: boolean;
}) {
  const [mounted, setMounted] = useState(false);
  const isFemale = person.gender === "female";
  const { x, y, scale, rotate } = useSmoothOrbit(index, time);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 w-[128px] transform-gpu will-change-transform min-[380px]:w-[142px] sm:w-[195px] lg:w-[220px]"
      style={{ x, y, scale, rotate }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 transform-gpu">
        <motion.div
          animate={active ? { y: [0, -7, 0] } : { y: 0 }}
          transition={{
            duration: active ? 4.8 + index * 0.45 : 0,
            repeat: active ? Infinity : 0,
            ease: "easeInOut",
            delay: active ? person.delay : 0,
          }}
          className="relative transform-gpu will-change-transform"
        >
          <div
            className="absolute inset-4 rounded-full blur-3xl"
            style={{
              background: person.accent,
              opacity: 0.2,
            }}
          />

          <motion.div
            whileHover={{
              scale: 1.035,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="relative rounded-[1.7rem] border border-[#151433]/10 bg-white/90 p-2 backdrop-blur-xl sm:rounded-[2.4rem] sm:p-3"
            style={{
              boxShadow: `0 28px 70px rgba(21,20,51,0.12), 0 0 60px ${person.accent}18`,
            }}
          >
            <svg
              viewBox="0 0 320 320"
              role="img"
              aria-label={`${person.name} cartoon face`}
              className="h-auto w-full overflow-visible"
            >
              <defs>
                <radialGradient
                  id={`faceGlow-${person.name}`}
                  cx="50%"
                  cy="35%"
                >
                  <stop offset="0%" stopColor="white" stopOpacity="0.36" />

                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </radialGradient>
              </defs>

              <circle
                cx="160"
                cy="160"
                r="138"
                fill={person.accent}
                opacity="0.16"
              />

              {isFemale ? (
                <path
                  d="M58 172C47 90 92 36 160 36C231 36 274 91 262 174C254 231 218 268 160 268C101 268 66 231 58 172Z"
                  fill={person.hair}
                />
              ) : (
                <path
                  d="M58 154C58 88 101 43 160 43C219 43 262 88 262 154C244 111 208 88 160 88C112 88 76 111 58 154Z"
                  fill={person.hair}
                />
              )}

              <circle cx="57" cy="164" r="22" fill={person.skin} />

              <circle cx="263" cy="164" r="22" fill={person.skin} />

              <ellipse cx="160" cy="165" rx="103" ry="116" fill={person.skin} />

              <ellipse
                cx="160"
                cy="128"
                rx="86"
                ry="82"
                fill={`url(#faceGlow-${person.name})`}
              />

              {isFemale ? (
                <>
                  <path
                    d="M67 128C75 75 113 48 160 48C209 48 245 76 253 129C224 108 197 91 160 91C123 91 96 108 67 128Z"
                    fill={person.hair}
                  />

                  <path
                    d="M76 126C91 86 121 62 158 58C147 96 116 123 76 126Z"
                    fill={person.hair}
                  />

                  <path
                    d="M126 59C148 74 162 101 163 136C139 119 127 92 126 59Z"
                    fill={person.hair}
                  />

                  <path
                    d="M160 58C186 75 201 101 203 136C176 124 162 96 160 58Z"
                    fill={person.hair}
                  />

                  <path
                    d="M195 66C226 81 245 104 253 135C222 130 203 105 195 66Z"
                    fill={person.hair}
                  />

                  <path
                    d="M102 63C109 112 86 145 59 166C57 104 72 76 102 63Z"
                    fill={person.hair}
                  />

                  <path
                    d="M219 64C212 112 236 145 263 166C265 105 250 77 219 64Z"
                    fill={person.hair}
                  />
                </>
              ) : (
                <>
                  <path
                    d="M64 132C73 80 113 51 160 51C207 51 247 80 256 132C229 111 198 101 160 101C122 101 91 111 64 132Z"
                    fill={person.hair}
                  />

                  <path
                    d="M76 130C87 95 119 73 160 73C201 73 233 95 244 130C216 118 189 112 160 112C131 112 104 118 76 130Z"
                    fill={person.hair}
                  />

                  <path
                    d="M79 136C93 113 120 98 160 98C200 98 227 113 241 136C215 130 188 127 160 127C132 127 105 130 79 136Z"
                    fill={person.hair}
                  />

                  <path
                    d="M72 126C78 89 99 64 128 54C119 92 98 117 72 126Z"
                    fill={person.hair}
                  />

                  <path
                    d="M248 126C242 89 221 64 192 54C201 92 222 117 248 126Z"
                    fill={person.hair}
                  />

                  <path
                    d="M97 72C113 58 134 50 160 50C186 50 207 58 223 72C205 66 184 63 160 63C136 63 115 66 97 72Z"
                    fill={person.hair}
                  />

                  <path
                    d="M73 126C73 126 96 99 138 94C118 111 94 126 73 126Z"
                    fill={person.hair}
                  />

                  <path
                    d="M247 126C247 126 224 99 182 94C202 111 226 126 247 126Z"
                    fill={person.hair}
                  />
                </>
              )}

              <path
                d="M105 147C118 140 132 140 144 147"
                fill="none"
                stroke={person.hair}
                strokeWidth="7"
                strokeLinecap="round"
                opacity="0.9"
              />

              <path
                d="M176 147C189 140 203 140 216 147"
                fill="none"
                stroke={person.hair}
                strokeWidth="7"
                strokeLinecap="round"
                opacity="0.9"
              />

              <circle cx="124" cy="169" r="9" fill="#111111" />

              <circle cx="196" cy="169" r="9" fill="#111111" />

              <circle cx="127" cy="166" r="3" fill="white" opacity="0.95" />

              <circle cx="199" cy="166" r="3" fill="white" opacity="0.95" />

              {isFemale && (
                <>
                  <path
                    d="M107 163L98 157"
                    stroke="#111111"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <path
                    d="M213 163L222 157"
                    stroke="#111111"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </>
              )}

              <ellipse
                cx="104"
                cy="198"
                rx="20"
                ry="10"
                fill={person.cheek}
                opacity="0.42"
              />

              <ellipse
                cx="216"
                cy="198"
                rx="20"
                ry="10"
                fill={person.cheek}
                opacity="0.42"
              />

              <path
                d="M160 178C153 194 153 204 164 205"
                fill="none"
                stroke="#111111"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.32"
              />

              <path
                d="M133 223C149 240 176 240 192 223"
                fill="none"
                stroke="#111111"
                strokeWidth="7"
                strokeLinecap="round"
              />

              <circle
                cx="160"
                cy="160"
                r="118"
                fill="none"
                stroke="white"
                strokeOpacity="0.18"
                strokeWidth="3"
              />
            </svg>

            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full border border-[#151433]/10 bg-white/95 px-2.5 py-1.5 shadow-[0_12px_30px_rgba(21,20,51,0.14)] backdrop-blur-xl sm:-bottom-5 sm:gap-2 sm:px-4 sm:py-2">
              <span
                className="h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2"
                style={{
                  background: person.accent,
                }}
              />

              <span className="text-[9px] font-semibold text-[#151433] sm:text-xs">
                {person.name}
              </span>

              <span className="hidden text-xs font-medium text-[#151433]/45 sm:inline">
                {person.role}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProcessCard({
  item,
  index,
}: {
  item: (typeof processCards)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
        rotate: item.side === "left" ? -1.5 : 1.5,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: 0,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -6,
        scale: 1.015,
      }}
      className="group relative min-h-[185px] transform-gpu overflow-hidden rounded-[1.35rem] border border-[#151433]/10 bg-white/90 p-4 backdrop-blur-xl min-[380px]:min-h-[195px] sm:min-h-[210px] sm:rounded-[1.8rem] sm:p-6 lg:min-h-0"
      style={{
        boxShadow: `0 20px 55px rgba(21,20,51,0.07), 0 15px 45px ${item.accent}10`,
      }}
    >
      <div
        className="absolute -right-10 -top-10 h-24 w-24 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-30 sm:h-28 sm:w-28"
        style={{
          background: item.accent,
          opacity: 0.12,
        }}
      />

      <div
        className="absolute left-0 top-0 h-full w-[3px] opacity-70 sm:w-1"
        style={{
          background: item.accent,
        }}
      />

      <p
        className="relative text-[11px] font-semibold sm:text-sm"
        style={{
          color: item.accent,
        }}
      >
        {item.number}
      </p>

      <h3 className="relative mt-3 break-words text-[15px] font-semibold leading-tight tracking-[-0.035em] text-[#151433] min-[380px]:text-base sm:mt-4 sm:text-xl">
        {item.title}
      </h3>

      <p className="relative mt-3 text-[10px] font-normal leading-[1.65] text-[#151433]/55 min-[380px]:text-[11px] sm:mt-4 sm:text-sm sm:leading-7">
        {item.text}
      </p>
    </motion.div>
  );
}

function usePausableTime(active: boolean) {
  const time = useMotionValue(0);
  const elapsedRef = useRef(0);

  useEffect(() => {
    if (!active) return;

    let lastTick = window.performance.now();
    const intervalId = window.setInterval(() => {
      const now = window.performance.now();
      if (document.hidden) {
        lastTick = now;
        return;
      }
      elapsedRef.current += now - lastTick;
      lastTick = now;
      time.set(elapsedRef.current);
    }, 1000 / 30);
    return () => {
      window.clearInterval(intervalId);
    };
  }, [active, time]);

  return time;
}

function TeamFacesVisual() {
  const visualRef = useRef<HTMLDivElement | null>(null);
  const isActive = useInView(visualRef, { amount: 0.05 });
  const time = usePausableTime(isActive);

  return (
    <div
      ref={visualRef}
      className="relative mx-auto h-[360px] w-full max-w-[650px] overflow-visible min-[380px]:h-[400px] sm:h-[560px] lg:h-[620px]"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          animate={
            isActive
              ? { scale: [1, 1.06, 1], opacity: [0.18, 0.34, 0.18] }
              : { scale: 1, opacity: 0.18 }
          }
          transition={{
            duration: isActive ? 5.8 : 0,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[32%] h-56 w-56 -translate-x-1/2 sm:h-80 sm:w-80"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(111,143,122,0.22),rgba(154,128,108,0.07)_46%,transparent_72%)] blur-3xl" />
        </motion.div>

        <motion.div
          animate={
            isActive
              ? { opacity: [0.08, 0.18, 0.08], x: [0, 15, 0] }
              : { opacity: 0.08, x: 0 }
          }
          transition={{
            duration: isActive ? 6.5 : 0,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[38%] h-44 w-[270px] -translate-x-1/2 sm:h-64 sm:w-[460px]"
        >
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(160,134,114,0.16),transparent_68%)] blur-3xl" />
        </motion.div>

        <div className="absolute left-1/2 top-[64%] h-24 w-[70%] -translate-x-1/2 rounded-full bg-[#151433]/5 blur-3xl sm:h-28" />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute left-1/2 top-[52%] h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#151433]/10 bg-white/45 backdrop-blur-sm min-[380px]:h-[300px] min-[380px]:w-[300px] sm:h-[430px] sm:w-[430px] lg:h-[490px] lg:w-[490px]"
        />

        <div className="absolute left-1/2 top-[52%] h-[195px] w-[195px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#151433]/10 min-[380px]:h-[220px] min-[380px]:w-[220px] sm:h-[330px] sm:w-[330px] lg:h-[370px] lg:w-[370px]" />

        <motion.div
          animate={isActive ? { rotate: 360 } : { rotate: 0 }}
          transition={{
            duration: isActive ? 34 : 0,
            repeat: isActive ? Infinity : 0,
            ease: "linear",
          }}
          className="absolute left-1/2 top-[52%] h-[225px] w-[225px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#7b9481]/18 min-[380px]:h-[255px] min-[380px]:w-[255px] sm:h-[380px] sm:w-[380px] lg:h-[430px] lg:w-[430px]"
        />
      </div>

      <div className="relative z-20 h-full w-full">
        {people.map((person, index) => (
          <CartoonFace
            key={person.name}
            person={person}
            index={index}
            time={time}
            active={isActive}
          />
        ))}
      </div>
    </div>
  );
}

export default function ImageSlider() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isActive = useInView(sectionRef, { amount: 0.04 });

  return (
    <section
      ref={sectionRef}
      className="perf-section relative w-full overflow-hidden border-y border-[#d7e2da] bg-[#f3f1e7] px-3 py-16 text-[#172019] min-[380px]:px-4 sm:px-8 sm:py-20 md:py-28 lg:px-12"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#f5f2e8_0%,#eef3ef_48%,#f8f6ef_100%)]" />

      {/* Top left glow */}
      <motion.div
        animate={
          isActive
            ? { x: [0, 28, 0], y: [0, 18, 0], scale: [1, 1.06, 1] }
            : { x: 0, y: 0, scale: 1 }
        }
        transition={{
          duration: isActive ? 12 : 0,
          repeat: isActive ? Infinity : 0,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-20 h-[420px] w-[420px]"
      >
        <div className="absolute inset-0 rounded-full bg-[#c9d8cd]/24 blur-[130px]" />
      </motion.div>

      {/* Top right glow */}
      <motion.div
        animate={
          isActive
            ? { x: [0, -26, 0], y: [0, 20, 0], scale: [1, 1.08, 1] }
            : { x: 0, y: 0, scale: 1 }
        }
        transition={{
          duration: isActive ? 13 : 0,
          repeat: isActive ? Infinity : 0,
          ease: "easeInOut",
        }}
        className="absolute -right-40 top-40 h-[450px] w-[450px]"
      >
        <div className="absolute inset-0 rounded-full bg-[#d9cdbc]/22 blur-[140px]" />
      </motion.div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(21,20,51,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(21,20,51,0.04)_1px,transparent_1px)] bg-[size:48px_48px] sm:bg-[size:72px_72px]" />

      {/* Clean bottom fade */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.15)_0%,transparent_42%,rgba(255,255,255,0.9)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 42,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#718777] sm:text-xs sm:tracking-[0.4em]">
            Behind the Designs
          </p>

          <h1 className="mt-4 text-[34px] font-semibold leading-[0.98] tracking-[-0.055em] text-[#151433] min-[380px]:text-4xl sm:mt-5 sm:text-5xl md:text-6xl lg:text-7xl">
            Crafting Digital
            <br />
            <span className="text-[#718777]">
              Experiences
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-xs font-normal leading-6 text-[#151433]/55 sm:mt-6 sm:text-sm sm:leading-7 md:text-base">
            We design and build websites, applications, dashboards, AI systems,
            and digital products that help businesses grow faster.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
            <motion.div
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="w-full max-w-[280px] sm:w-auto sm:max-w-none"
            >
              <Link
                href="/mywork"
                className="site-cta-dark w-full sm:w-auto"
              >
                See More Projects
              </Link>
            </motion.div>

            <motion.div
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="w-full max-w-[280px] sm:w-auto sm:max-w-none"
            >
              <Link
                href="/Contact"
                className="site-cta-outline w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Responsive process layout */}
        <div className="mt-8 flex flex-col lg:mt-20 lg:grid lg:grid-cols-[0.9fr_1.25fr_0.9fr] lg:items-center lg:gap-8">
          <div className="order-2 mt-3 grid grid-cols-2 gap-3 sm:mt-6 sm:gap-4 lg:order-1 lg:mt-0 lg:grid-cols-1 lg:gap-4">
            {processCards.slice(0, 2).map((item, index) => (
              <ProcessCard key={item.title} item={item} index={index} />
            ))}
          </div>

          <div className="order-1 lg:order-2">
            <TeamFacesVisual />
          </div>

          <div className="order-3 mt-3 grid grid-cols-2 gap-3 sm:mt-4 sm:gap-4 lg:mt-0 lg:grid-cols-1 lg:gap-4">
            {processCards.slice(2, 4).map((item, index) => (
              <ProcessCard key={item.title} item={item} index={index + 2} />
            ))}
          </div>
        </div>

        {/* Service tags */}
        <motion.div
          initial={{
            opacity: 0,
            y: 34,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.75,
          }}
          className="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-2 sm:mt-12 sm:gap-3"
        >
          {serviceTags.map((tag, index) => (
            <div
              key={tag}
              style={{
                animationDuration: `${3.2 + index * 0.25}s`,
                animationPlayState: isActive ? "running" : "paused",
              }}
              className={`${
                index % 2 === 0 ? "perf-float-up" : "perf-float-down"
              } transform-gpu rounded-full border border-[#151433]/10 bg-white/85 px-3 py-1.5 text-[10px] font-medium text-[#151433]/55 shadow-[0_10px_25px_rgba(21,20,51,0.05)] backdrop-blur-xl transition-transform duration-300 hover:scale-105 sm:px-4 sm:py-2 sm:text-xs`}
            >
              {tag}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
