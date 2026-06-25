"use client";

import { motion, type Transition } from "framer-motion";
import Link from "next/link";

const processCards = [
  {
    number: "01",
    title: "Strategy",
    text: "We define goals, users, structure, and the right direction before building.",
    accent: "#8EA7FF",
    side: "left",
  },
  {
    number: "02",
    title: "Design",
    text: "We create clean, modern, and user-friendly interfaces for real users.",
    accent: "#FF7A59",
    side: "left",
  },
  {
    number: "03",
    title: "Development",
    text: "We build fast, responsive, and scalable digital products with clean code.",
    accent: "#22C55E",
    side: "right",
  },
  {
    number: "04",
    title: "Launch",
    text: "We test, publish, improve, and support your product after launch.",
    accent: "#38BDF8",
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
    accent: "#8EA7FF",
    delay: 0,
  },
  {
    name: "Manee",
    role: "Designer",
    gender: "female",
    skin: "#F1B59E",
    hair: "#5A2D1F",
    cheek: "#FB7185",
    accent: "#FF7A59",
    delay: 0.35,
  },
  {
    name: "Ming",
    role: "Developer",
    gender: "male",
    skin: "#C9865D",
    hair: "#2A1710",
    cheek: "#FCA5A5",
    accent: "#38BDF8",
    delay: 0.7,
  },
] as const;

const carouselSlots = [
  {
    x: -170,
    y: 58,
    scale: 0.78,
    rotate: -7,
    z: 20,
  },
  {
    x: 0,
    y: -54,
    scale: 1.04,
    rotate: 0,
    z: 30,
  },
  {
    x: 170,
    y: 58,
    scale: 0.78,
    rotate: 7,
    z: 20,
  },
];

const carouselTransition: Transition = {
  duration: 22,
  repeat: Infinity,
  ease: "linear",
  times: [0, 0.34, 0.67, 1],
};

type Person = (typeof people)[number];

function CartoonFace({ person, index }: { person: Person; index: number }) {
  const isFemale = person.gender === "female";

  const slotPath = [
    carouselSlots[index % 3],
    carouselSlots[(index + 1) % 3],
    carouselSlots[(index + 2) % 3],
    carouselSlots[index % 3],
  ];

  return (
    <motion.div
      animate={{
        x: slotPath.map((slot) => slot.x),
        y: slotPath.map((slot) => slot.y),
        zIndex: slotPath.map((slot) => slot.z),
      }}
      transition={carouselTransition}
      className="absolute left-1/2 top-1/2 w-[150px] transform-gpu opacity-100 will-change-transform sm:w-[195px] lg:w-[220px]"
      style={{ opacity: 1 }}
    >
      <div className="-translate-x-1/2 -translate-y-1/2 transform-gpu">
        <motion.div
          animate={{
            scale: slotPath.map((slot) => slot.scale),
            rotate: slotPath.map((slot) => slot.rotate),
          }}
          transition={carouselTransition}
          className="relative transform-gpu opacity-100 will-change-transform"
          style={{ opacity: 1 }}
        >
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4.8 + index * 0.45,
              repeat: Infinity,
              ease: "easeInOut",
              delay: person.delay,
            }}
            className="relative transform-gpu opacity-100 will-change-transform"
            style={{ opacity: 1 }}
          >
            <div
              className="absolute inset-4 rounded-full blur-3xl"
              style={{
                background: person.accent,
                opacity: 0.48,
              }}
            />

            <div
              className="relative rounded-[2.4rem] border border-white/20 bg-white/[0.14] p-3 shadow-[0_35px_120px_rgba(0,0,0,0.78)] backdrop-blur-xl"
              style={{
                boxShadow: `0 35px 120px rgba(0,0,0,0.78), 0 0 90px ${person.accent}33`,
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
                  opacity="0.22"
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

                <ellipse
                  cx="160"
                  cy="165"
                  rx="103"
                  ry="116"
                  fill={person.skin}
                />

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
                      stroke="#111"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                    <path
                      d="M213 163L222 157"
                      stroke="#111"
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

              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/20 bg-black/90 px-4 py-2 shadow-2xl backdrop-blur-xl">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: person.accent }}
                />

                <span className="text-xs font-semibold text-white">
                  {person.name}
                </span>

                <span className="hidden text-xs font-medium text-white/55 sm:inline">
                  {person.role}
                </span>
              </div>
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
        y: 38,
        rotate: item.side === "left" ? -2 : 2,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: 0,
      }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="group relative transform-gpu overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.055] p-6 shadow-2xl backdrop-blur-xl will-change-transform"
      style={{
        boxShadow: `0 28px 90px ${item.accent}16`,
      }}
    >
      <div
        className="absolute -right-10 -top-10 h-28 w-28 rounded-full blur-3xl transition group-hover:opacity-70"
        style={{
          background: item.accent,
          opacity: 0.22,
        }}
      />

      <p
        className="relative text-sm font-medium"
        style={{ color: item.accent }}
      >
        {item.number}
      </p>

      <h3 className="relative mt-4 text-xl font-medium tracking-[-0.035em] text-white">
        {item.title}
      </h3>

      <p className="relative mt-4 text-sm font-light leading-7 text-white/48">
        {item.text}
      </p>
    </motion.div>
  );
}

function TeamFacesVisual() {
  return (
    <div className="relative mx-auto h-[430px] w-full max-w-[650px] overflow-visible sm:h-[560px] lg:h-[620px]">
      <div className="pointer-events-none absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.36, 0.76, 0.36],
          }}
          transition={{
            duration: 5.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[32%] h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(85,82,217,0.54),rgba(56,189,248,0.18)_46%,transparent_72%)] blur-3xl"
        />

        <motion.div
          animate={{
            opacity: [0.22, 0.42, 0.22],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-[38%] h-64 w-[460px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,122,89,0.4),transparent_68%)] blur-3xl"
        />

        <div className="absolute left-1/2 top-[59%] h-48 w-[82%] -translate-x-1/2 rounded-full bg-black/80 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute left-1/2 top-[52%] h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/[0.025] backdrop-blur-sm sm:h-[430px] sm:w-[430px] lg:h-[490px] lg:w-[490px]"
        />

        <div className="absolute left-1/2 top-[52%] h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-[330px] sm:w-[330px] lg:h-[370px] lg:w-[370px]" />
      </div>

      <div className="relative z-20 h-full w-full">
        {people.map((person, index) => (
          <CartoonFace key={person.name} person={person} index={index} />
        ))}
      </div>
    </div>
  );
}

export default function ImageSlider() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050008] px-5 py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#000000_0%,#03000B_34%,#09031C_68%,#160934_100%)]" />

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,transparent_42%,rgba(22,9,52,0.28)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-[10px] font-normal uppercase tracking-[0.4em] text-white/40 sm:text-xs">
            Behind the Designs
          </p>

          <h1 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.055em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Crafting Digital
            <br />
            <span className="bg-gradient-to-r from-[#8EA7FF] via-[#FF7A59] to-[#38BDF8] bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-7 text-white/52 md:text-base">
            We design and build websites, applications, dashboards, AI systems,
            and digital products that help businesses grow faster.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/mywork"
              className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:-translate-y-1 hover:bg-white/90"
            >
              See More Projects
            </Link>

            <Link
              href="/Contact"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3 text-sm font-medium text-white/80 transition hover:-translate-y-1 hover:border-white/35 hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <div className="relative mt-14 md:mt-20">
          <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.25fr_0.9fr]">
            <div className="order-2 grid gap-4 sm:grid-cols-2 lg:order-1 lg:grid-cols-1">
              {processCards.slice(0, 2).map((item, index) => (
                <ProcessCard key={item.title} item={item} index={index} />
              ))}
            </div>

            <div className="order-1 lg:order-2">
              <TeamFacesVisual />
            </div>

            <div className="order-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {processCards.slice(2, 4).map((item, index) => (
                <ProcessCard key={item.title} item={item} index={index + 2} />
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
          className="mx-auto mt-12 flex max-w-4xl flex-wrap items-center justify-center gap-3"
        >
          {serviceTags.map((tag, index) => (
            <motion.div
              key={tag}
              animate={{
                y: [0, index % 2 === 0 ? -7 : 7, 0],
              }}
              transition={{
                duration: 3.2 + index * 0.25,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="transform-gpu rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-xs font-normal text-white/60 backdrop-blur-xl will-change-transform"
            >
              {tag}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
