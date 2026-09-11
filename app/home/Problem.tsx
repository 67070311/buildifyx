"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Link from "next/link";

const problemCards = [
  {
    badge: "Insight",
    title: "Problem Thinking",
    text: "We begin with real challenges faced by people and businesses before jumping into solutions.",
    bg: "#315F4C",
    imageBg: "#E7F0EB",
    accent: "#6FA88D",
    illustration: "research",
    offset: "xl:translate-y-0",
  },
  {
    badge: "Purpose",
    title: "Purposeful Builds",
    text: "Every product is intentionally designed with usability, business value, and long-term impact.",
    bg: "#49745E",
    imageBg: "#EDF4F0",
    accent: "#82AD96",
    illustration: "window",
    offset: "xl:translate-y-8",
  },
  {
    badge: "AI Flow",
    title: "Smart Prompts",
    text: "We turn ideas into clear flows, systems, and AI-powered experiences that feel simple.",
    bg: "#587261",
    imageBg: "#EEF2EF",
    accent: "#93AB9C",
    illustration: "prompt",
    offset: "xl:translate-y-0",
  },
  {
    badge: "Connect",
    title: "Integration",
    text: "We connect tools, workflows, and data so teams can move faster with less manual work.",
    bg: "#3D675B",
    imageBg: "#E8F1EE",
    accent: "#76A395",
    illustration: "magnet",
    offset: "xl:-translate-y-2",
  },
  {
    badge: "Launch",
    title: "Product Launch",
    text: "We help shape, test, and launch digital products that are ready for real users.",
    bg: "#6A7660",
    imageBg: "#F1F2EB",
    accent: "#A0AD8E",
    illustration: "paper",
    offset: "xl:translate-y-6",
  },
  {
    badge: "Scale",
    title: "Scalable Impact",
    text: "We design systems that can grow with your business instead of breaking when demand rises.",
    bg: "#285447",
    imageBg: "#E5EFEB",
    accent: "#679983",
    illustration: "chart",
    offset: "xl:-translate-y-2",
  },
] as const;

type ProblemCard = (typeof problemCards)[number];
function CardIllustration({
  type,
  accent,
}: {
  type: ProblemCard["illustration"];
  accent: string;
}) {
  if (type === "research") {
    return (
      <svg viewBox="0 0 220 150" className="h-full w-full" aria-hidden="true">
        <path
          d="M55 94C55 60 80 42 110 42C140 42 165 60 165 94"
          fill="none"
          stroke="#25222B"
          strokeWidth="5"
          strokeLinecap="round"
        />

        <path
          d="M73 94V58C73 48 80 41 90 41H130C140 41 147 48 147 58V94"
          fill="none"
          stroke="#25222B"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <circle
          cx="72"
          cy="96"
          r="13"
          fill={accent}
          stroke="#25222B"
          strokeWidth="3"
        />

        <circle
          cx="101"
          cy="96"
          r="13"
          fill="#9D8CFF"
          stroke="#25222B"
          strokeWidth="3"
        />

        <circle
          cx="129"
          cy="96"
          r="13"
          fill="#FF8C61"
          stroke="#25222B"
          strokeWidth="3"
        />

        <circle
          cx="153"
          cy="96"
          r="13"
          fill="#F7C55B"
          stroke="#25222B"
          strokeWidth="3"
        />

        <path
          d="M42 118H178"
          stroke="#25222B"
          strokeWidth="5"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "window") {
    return (
      <svg viewBox="0 0 220 150" className="h-full w-full" aria-hidden="true">
        <path
          d="M90 42L126 23V112L90 130V42Z"
          fill={accent}
          stroke="#25222B"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        <path
          d="M126 23L147 35V122L126 112V23Z"
          fill="#2E9F78"
          stroke="#25222B"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        <rect
          x="51"
          y="72"
          width="44"
          height="34"
          rx="8"
          fill="#FF9A63"
          stroke="#25222B"
          strokeWidth="4"
        />

        <rect
          x="128"
          y="70"
          width="44"
          height="36"
          rx="8"
          fill="#EA7BAF"
          stroke="#25222B"
          strokeWidth="4"
        />

        <path
          d="M109 54H126M109 78H126M109 102H126"
          stroke="#25222B"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "prompt") {
    return (
      <svg viewBox="0 0 220 150" className="h-full w-full" aria-hidden="true">
        <path
          d="M110 25C129 25 145 40 145 59C145 77 132 91 116 94V112H104V94C88 91 75 77 75 59C75 40 91 25 110 25Z"
          fill="#F7C55B"
          stroke="#25222B"
          strokeWidth="4"
        />

        <path
          d="M89 108C98 118 122 118 131 108"
          fill="none"
          stroke="#25222B"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M83 123C98 136 123 136 137 123"
          fill="none"
          stroke="#25222B"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M95 69C103 77 117 77 125 69"
          fill="none"
          stroke="#25222B"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M110 18V8M83 27L75 19M137 27L145 19"
          stroke="#25222B"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "magnet") {
    return (
      <svg viewBox="0 0 220 150" className="h-full w-full" aria-hidden="true">
        <path
          d="M69 53C94 26 137 26 162 53L137 78C126 66 105 66 94 78L69 53Z"
          fill={accent}
          stroke="#25222B"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        <path
          d="M94 78L70 103C92 126 136 126 158 103L137 78C126 91 105 91 94 78Z"
          fill="#EA7BAF"
          stroke="#25222B"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        <circle
          cx="156"
          cy="49"
          r="8"
          fill="#EDE9FF"
          stroke="#25222B"
          strokeWidth="3"
        />

        <circle
          cx="173"
          cy="63"
          r="8"
          fill="#EDE9FF"
          stroke="#25222B"
          strokeWidth="3"
        />

        <circle
          cx="188"
          cy="79"
          r="8"
          fill="#EDE9FF"
          stroke="#25222B"
          strokeWidth="3"
        />
      </svg>
    );
  }

  if (type === "paper") {
    return (
      <svg viewBox="0 0 220 150" className="h-full w-full" aria-hidden="true">
        <path
          d="M55 82L167 43L129 122L103 92L55 82Z"
          fill="#EDE9FF"
          stroke="#25222B"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        <path
          d="M103 92L167 43"
          stroke="#25222B"
          strokeWidth="4"
          strokeLinecap="round"
        />

        <path
          d="M100 95L91 123L116 108"
          fill="#F6B18D"
          stroke="#25222B"
          strokeWidth="4"
          strokeLinejoin="round"
        />

        <path
          d="M83 119C87 137 112 138 118 119"
          fill="none"
          stroke="#25222B"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 220 150" className="h-full w-full" aria-hidden="true">
      <ellipse cx="110" cy="125" rx="58" ry="9" fill="#25222B" opacity="0.18" />

      <rect
        x="56"
        y="88"
        width="34"
        height="32"
        rx="8"
        fill="#9D8CFF"
        stroke="#25222B"
        strokeWidth="4"
      />

      <rect
        x="96"
        y="67"
        width="34"
        height="53"
        rx="8"
        fill="#F7C55B"
        stroke="#25222B"
        strokeWidth="4"
      />

      <rect
        x="136"
        y="42"
        width="34"
        height="78"
        rx="8"
        fill={accent}
        stroke="#25222B"
        strokeWidth="4"
      />

      <path
        d="M154 41V22L178 32L154 42Z"
        fill="#EA7BAF"
        stroke="#25222B"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      <path
        d="M55 124H176"
        stroke="#25222B"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UseCaseCard({ card, index }: { card: ProblemCard; index: number }) {
  const cardControls = useAnimation();
  const imageControls = useAnimation();
  const cardRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(cardRef, { amount: 0.1 });

  const startFloating = () => {
    cardControls.start({
      y: [0, -5, 0, 3, 0],
      rotate: index % 2 === 0 ? [0, -0.55, 0, 0.4, 0] : [0, 0.55, 0, -0.4, 0],
      transition: {
        duration: 7.5 + index * 0.4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.16,
      },
    });

    imageControls.start({
      y: [0, -3, 0, 2, 0],
      rotate: index % 2 === 0 ? [0, 0.45, 0, -0.35, 0] : [0, -0.45, 0, 0.35, 0],
      transition: {
        duration: 6.8 + index * 0.3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.12,
      },
    });
  };

  useEffect(() => {
    if (isInView) {
      startFloating();
    } else {
      cardControls.stop();
      imageControls.stop();
      cardControls.set({ y: 0, rotate: 0 });
      imageControls.set({ y: 0, rotate: 0 });
    }

    return () => {
      cardControls.stop();
      imageControls.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <motion.article
      ref={cardRef}
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-60px",
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.05,
        ease: "easeOut",
      }}
      onHoverStart={() => {
        cardControls.stop();
        imageControls.stop();
      }}
      onHoverEnd={startFloating}
      className={`relative overflow-hidden rounded-[1.15rem] border border-black/[0.06] p-2.5 shadow-[0_18px_50px_rgba(56,45,94,0.13)] sm:rounded-[1.45rem] sm:p-3.5 ${card.offset}`}
      style={{
        backgroundColor: card.bg,
      }}
    >
      <motion.div animate={cardControls} className="h-full">
        <div
          className="relative overflow-hidden rounded-[0.85rem] border border-black/[0.08] p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] sm:rounded-[1rem] sm:p-3"
          style={{
            backgroundColor: card.imageBg,
          }}
        >
          <motion.div
            animate={imageControls}
            className="mx-auto h-20 max-w-[150px] sm:h-24 sm:max-w-[180px] md:h-28"
          >
            <CardIllustration type={card.illustration} accent={card.accent} />
          </motion.div>
        </div>

        <div className="mt-3 sm:mt-4">
          <span className="inline-flex rounded-md bg-black/10 px-2 py-1 text-[8px] font-medium uppercase tracking-[0.1em] text-white sm:text-[9px]">
            {card.badge}
          </span>

          <h4 className="mt-2.5 text-base font-medium leading-tight tracking-[-0.035em] text-white sm:text-lg md:text-xl">
            {card.title}
          </h4>

          <p className="mt-2 min-h-[64px] text-[10px] font-light leading-[1.55] text-white/85 sm:min-h-[66px] sm:text-xs sm:leading-5">
            {card.text}
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function Problem() {
  return (
    <section className="perf-section relative overflow-hidden border-y border-[#d7e2da] bg-[#f3f1e7] px-4 py-12 text-[#202821] sm:px-5 md:py-18 lg:py-20">
      {/* Light background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f7f5ed_0%,#eef3ef_52%,#f7f5ed_100%)]" />

        <div className="absolute -left-40 top-[-80px] h-[420px] w-[420px] rounded-full bg-[#b9cfbf]/32 blur-[130px]" />

        <div className="absolute -right-40 top-[20%] h-[430px] w-[430px] rounded-full bg-[#8fad9a]/24 blur-[140px]" />

        <div className="absolute bottom-[-180px] left-1/2 h-[380px] w-[650px] -translate-x-1/2 rounded-full bg-[#d8d3bf]/38 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(104,88,150,0.18) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#6f8878] sm:text-[10px]">
            Why Buildifyx
          </p>

          <h3 className="mt-4 text-2xl font-medium leading-[1.08] tracking-[-0.045em] text-[#172019] sm:text-3xl md:text-4xl lg:text-5xl">
            When problems need
            <br className="hidden md:block" />
            real digital solutions
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-xs font-light leading-6 text-[#657068] sm:text-sm sm:leading-7">
            We believe technology should solve meaningful real-world challenges.
            Every product is crafted with purpose, innovation, and long-term
            impact in mind.
          </p>
        </motion.div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-11 sm:gap-4 lg:gap-5 xl:grid-cols-3">
          {problemCards.map((card, index) => (
            <UseCaseCard key={card.title} card={card} index={index} />
          ))}
        </div>

        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.55,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:mt-14 sm:flex-row"
        >
          <Link
            href="/whyus"
            className="site-cta-dark"
          >
            See More
          </Link>

          <Link
            href="/Contact"
            className="site-cta-outline"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
