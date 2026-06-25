"use client";

import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";

const problemCards = [
  {
    badge: "Insight",
    title: "Problem Thinking",
    text: "We begin with real challenges faced by people and businesses before jumping into solutions.",
    bg: "#EA7BAF",
    imageBg: "#FCE6F0",
    accent: "#EA7BAF",
    illustration: "research",
    offset: "xl:translate-y-0",
  },
  {
    badge: "Purpose",
    title: "Purposeful Builds",
    text: "Every product is intentionally designed with usability, business value, and long-term impact.",
    bg: "#45BF8B",
    imageBg: "#E5F8EF",
    accent: "#45BF8B",
    illustration: "window",
    offset: "xl:translate-y-14",
  },
  {
    badge: "AI Flow",
    title: "Smart Prompts",
    text: "We turn ideas into clear flows, systems, and AI-powered experiences that feel simple.",
    bg: "#7D70E8",
    imageBg: "#ECE9FF",
    accent: "#7D70E8",
    illustration: "prompt",
    offset: "xl:translate-y-0",
  },
  {
    badge: "Connect",
    title: "Integration",
    text: "We connect tools, workflows, and data so teams can move faster with less manual work.",
    bg: "#7B6FE5",
    imageBg: "#ECE9FF",
    accent: "#7B6FE5",
    illustration: "magnet",
    offset: "xl:-translate-y-4",
  },
  {
    badge: "Launch",
    title: "Product Launch",
    text: "We help shape, test, and launch digital products that are ready for real users.",
    bg: "#FF8C61",
    imageBg: "#FFF0E8",
    accent: "#FF8C61",
    illustration: "paper",
    offset: "xl:translate-y-10",
  },
  {
    badge: "Scale",
    title: "Scalable Impact",
    text: "We design systems that can grow with your business instead of breaking when demand rises.",
    bg: "#48BF91",
    imageBg: "#E5F8EF",
    accent: "#48BF91",
    illustration: "chart",
    offset: "xl:-translate-y-4",
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

  const startFloating = () => {
    cardControls.start({
      y: [0, -7, 0, 5, 0],
      rotate: index % 2 === 0 ? [0, -0.8, 0, 0.6, 0] : [0, 0.8, 0, -0.6, 0],
      transition: {
        duration: 7.5 + index * 0.45,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.2,
      },
    });

    imageControls.start({
      y: [0, -4, 0, 3, 0],
      rotate: index % 2 === 0 ? [0, 0.7, 0, -0.5, 0] : [0, -0.7, 0, 0.5, 0],
      transition: {
        duration: 6.8 + index * 0.35,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.15,
      },
    });
  };

  useEffect(() => {
    startFloating();

    return () => {
      cardControls.stop();
      imageControls.stop();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.06, ease: "easeOut" }}
      onHoverStart={() => {
        cardControls.stop();
        imageControls.stop();
      }}
      onHoverEnd={() => {
        startFloating();
      }}
      className={`relative overflow-hidden rounded-[1.35rem] p-3 shadow-[0_22px_70px_rgba(0,0,0,0.24)] transition sm:rounded-[2rem] sm:p-5 ${card.offset}`}
      style={{ backgroundColor: card.bg }}
    >
      <motion.div animate={cardControls} className="h-full">
        <div
          className="relative overflow-hidden rounded-[1rem] border border-black/10 p-3 sm:rounded-[1.35rem] sm:p-5"
          style={{ backgroundColor: card.imageBg }}
        >
          <motion.div
            animate={imageControls}
            className="mx-auto h-24 max-w-[190px] sm:h-36 sm:max-w-[260px] md:h-40"
          >
            <CardIllustration type={card.illustration} accent={card.accent} />
          </motion.div>
        </div>

        <div className="mt-4 sm:mt-5">
          <span className="inline-flex rounded-md bg-black/15 px-2.5 py-1 text-[9px] font-normal uppercase tracking-[0.12em] text-white/90 sm:px-3 sm:py-1.5 sm:text-[10px]">
            {card.badge}
          </span>

          <h4 className="mt-3 text-lg font-normal leading-tight tracking-[-0.04em] text-white sm:mt-4 sm:text-2xl md:text-3xl">
            {card.title}
          </h4>

          <p className="mt-2 min-h-[78px] text-xs font-light leading-5 text-white/82 sm:mt-3 sm:min-h-[72px] sm:text-sm sm:leading-6">
            {card.text}
          </p>
        </div>
      </motion.div>
    </motion.article>
  );
}

export default function Problem() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#160933_0%,#000000_100%)] px-4 py-16 text-white sm:px-5 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(126,112,232,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(69,191,139,0.08),transparent_34%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-[10px] font-light uppercase tracking-[0.32em] text-white/38 sm:text-xs">
            Why Buildifyx
          </p>

          <h3 className="mt-5 text-3xl font-normal leading-[1.05] tracking-[-0.055em] text-white md:text-5xl lg:text-6xl">
            When problems need
            <br className="hidden md:block" />
            real digital solutions
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-7 text-white/58 md:text-base">
            We believe technology should solve meaningful real-world challenges.
            Every product is crafted with purpose, innovation, and long-term
            impact in mind.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:gap-8 xl:grid-cols-3">
          {problemCards.map((card, index) => (
            <UseCaseCard key={card.title} card={card} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-16 flex flex-col items-center justify-center gap-4 sm:mt-20 sm:flex-row"
        >
          <Link
            href="/whyus"
            className="rounded-full bg-white px-8 py-4 text-sm font-normal text-[#202027] shadow-[0_18px_60px_rgba(255,255,255,0.12)] transition hover:-translate-y-1 hover:bg-white/90"
          >
            See More
          </Link>

          <Link
            href="/Contact"
            className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-normal text-white/80 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/35 hover:bg-white/10"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
