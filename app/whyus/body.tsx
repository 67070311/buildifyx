"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    number: "01",
    label: "Digital Product",
    title: "Build products that solve real problems",
    description:
      "We design and develop digital products that solve real problems, scale with confidence, and create meaningful user experiences.",
    image: "/whyus/whyus1.gif",
    accent: {
      number: "bg-sky-50 text-sky-700 ring-sky-100",
      label: "border-sky-100 bg-sky-50/80 text-sky-700",
      glow: "bg-sky-100/75",
      imageBackground: "bg-gradient-to-br from-sky-50 via-white to-slate-50",
      imageGlow: "bg-sky-100/65",
    },
  },
  {
    number: "02",
    label: "Startup Partner",
    title: "Work like your product partner",
    description:
      "Whether you are validating a new idea or scaling an existing platform, we work as an extension of your team with clear communication and fast execution.",
    image: "/whyus/whyus2.gif",
    accent: {
      number: "bg-emerald-50 text-emerald-700 ring-emerald-100",
      label: "border-emerald-100 bg-emerald-50/80 text-emerald-700",
      glow: "bg-emerald-100/75",
      imageBackground:
        "bg-gradient-to-br from-emerald-50 via-white to-slate-50",
      imageGlow: "bg-emerald-100/65",
    },
  },
  {
    number: "03",
    label: "Engineering",
    title: "Strong engineering behind every product",
    description:
      "We build high-performance web and mobile applications with scalable architecture, clean code, and smooth user experiences.",
    image: "/whyus/whyus3.gif",
    accent: {
      number: "bg-blue-50 text-blue-700 ring-blue-100",
      label: "border-blue-100 bg-blue-50/80 text-blue-700",
      glow: "bg-blue-100/75",
      imageBackground: "bg-gradient-to-br from-blue-50 via-white to-slate-50",
      imageGlow: "bg-blue-100/65",
    },
  },
];

export default function Body() {
  return (
    <section className="relative overflow-hidden bg-[#fbfcfd] px-3 py-14 text-slate-950 sm:px-6 sm:py-18 md:py-20 lg:px-8 lg:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbfc_48%,#ffffff_100%)]" />

        <div className="absolute left-1/2 top-[-230px] h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-sky-100/65 blur-[150px]" />

        <div className="absolute -left-40 top-[35%] h-[370px] w-[370px] rounded-full bg-emerald-100/55 blur-[125px]" />

        <div className="absolute -right-40 bottom-[6%] h-[390px] w-[390px] rounded-full bg-blue-100/55 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,116,144,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(14,116,144,0.035) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "linear-gradient(to bottom, black, transparent 92%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 92%)",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-slate-900/[0.06]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 32,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sky-700 sm:text-xs">
            Our Process
          </p>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl md:text-5xl">
            Why teams choose
            <br />
            BuildifyX
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            We combine strategy, design, and engineering to create digital
            products that feel clear, reliable, and ready to scale.
          </p>
        </motion.div>

        {/* Rows */}
        <div className="mt-10 space-y-5 sm:mt-14 sm:space-y-8 md:mt-16 md:space-y-10">
          {items.map((item, index) => (
            <motion.article
              key={item.number}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="grid grid-cols-[1.05fr_0.95fr] items-stretch gap-2.5 sm:gap-5 lg:gap-8"
            >
              <TextCard item={item} />

              <ImageCard item={item} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TextCard({ item }: { item: (typeof items)[number] }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className="relative flex min-h-[210px] flex-col justify-center overflow-hidden rounded-[20px] border border-slate-200/80 bg-white/85 p-4 shadow-[0_18px_55px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:min-h-[280px] sm:rounded-[26px] sm:p-7 lg:min-h-[340px] lg:p-9"
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl sm:h-44 sm:w-44 ${item.accent.glow}`}
      />

      <div className="relative">
        <div className="mb-4 flex flex-col items-start gap-2 sm:mb-6 sm:flex-row sm:items-center sm:gap-3">
          <span
            className={`grid h-8 w-8 shrink-0 place-items-center rounded-full text-[10px] font-semibold ring-1 sm:h-10 sm:w-10 sm:text-xs ${item.accent.number}`}
          >
            {item.number}
          </span>

          <span
            className={`max-w-full rounded-full border px-2.5 py-1.5 text-[7px] font-semibold uppercase tracking-[0.12em] sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[0.2em] ${item.accent.label}`}
          >
            {item.label}
          </span>
        </div>

        <h2 className="text-base font-semibold leading-[1.2] tracking-[-0.03em] text-slate-950 sm:text-2xl lg:max-w-lg lg:text-3xl">
          {item.title}
        </h2>

        <p className="mt-3 line-clamp-4 text-[10px] leading-[1.65] text-slate-500 sm:mt-5 sm:text-sm sm:leading-7 lg:text-base">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function ImageCard({ item }: { item: (typeof items)[number] }) {
  return (
    <motion.div
      whileHover={{
        y: -4,
      }}
      transition={{
        duration: 0.25,
      }}
      className="relative min-w-0 overflow-hidden rounded-[20px] border border-slate-200/80 bg-white/85 p-2 shadow-[0_18px_55px_rgba(15,23,42,0.07)] backdrop-blur-xl sm:rounded-[26px] sm:p-4"
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-80 ${item.accent.imageBackground}`}
      />

      <div className="relative flex h-full min-h-[210px] items-center justify-center overflow-hidden rounded-[15px] border border-slate-200/60 bg-[#f8fafc] sm:min-h-[280px] sm:rounded-[20px] lg:min-h-[340px]">
        <div
          className={`pointer-events-none absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[75px] ${item.accent.imageGlow}`}
        />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.08,
          }}
          viewport={{
            once: true,
          }}
          className="relative flex h-full w-full items-center justify-center p-2 sm:p-4"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={520}
            height={520}
            unoptimized
            className="h-auto max-h-[180px] w-full max-w-[170px] object-contain drop-shadow-[0_22px_38px_rgba(15,23,42,0.11)] sm:max-h-[250px] sm:max-w-[280px] lg:max-h-[310px] lg:max-w-[350px]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
