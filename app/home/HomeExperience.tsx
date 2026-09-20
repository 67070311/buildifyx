"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Code2,
  Check,
  ChevronRight,
  Layers3,
  Workflow,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";
import FloatingToolBackground from "./FloatingToolBackground";

const copy = {
  th: {
    overline: "Product & Software Studio — Bangkok",
    titleA: "เราสร้างดิจิทัลโปรดักต์",
    titleB: "ที่ใช้งานจริงและเติบโตต่อได้",
    lead:
      "ตั้งแต่ Web, App, AI, Data ไปจนถึง Automation — เราช่วยคิด ออกแบบ และพัฒนาระบบให้กลายเป็นของที่คนใช้ได้จริง",
    primary: "เริ่มโปรเจกต์",
    secondary: "ดูผลงาน",
    trusted: "Software · AI · Data · Product Design",
    servicesTitle: "เราเข้าไปช่วยตรงไหนได้บ้าง",
    servicesLead:
      "ทีมเล็กที่ทำงานครบตั้งแต่คิดระบบ ออกแบบประสบการณ์ ไปจนถึงพัฒนาและนำขึ้นใช้งานจริง",
    services: [
      ["Software", "Web app, SaaS, internal tools และระบบหลังบ้าน"],
      ["AI & Data", "AI workflow, machine learning, dashboard และ data pipeline"],
      ["Product Design", "UX/UI, product flow และ prototype ที่พร้อมพัฒนาต่อ"],
      ["Automation", "API, integration และ workflow ลดงาน manual"],
    ],
    teamOverline: "Meet the core team",
    teamSubtitle: "สามคน สามความถนัด แต่คิดและสร้างโปรดักต์ไปในทิศทางเดียวกัน",
    teamTitle: "คนเบื้องหลัง Buildifyx",
    teamText:
      "เรารวมมุมมองด้านโปรดักต์ ดีไซน์ วิศวกรรม และข้อมูลไว้ในทีมเดียว เพื่อให้ทุกการตัดสินใจไปถึงของที่ใช้งานจริงได้เร็วขึ้น",
    teamQuote:
      "ต่างคนต่างเก่งคนละด้าน แต่มีมาตรฐานเดียวกัน — ทำของที่มีประโยชน์ คิดมาดี และใช้งานได้จริง",
    processTitle: "วิธีที่เราพาไอเดียไปถึงของจริง",
    steps: [
      ["01", "Understand", "เข้าใจปัญหา ผู้ใช้ เป้าหมาย และข้อจำกัด"],
      ["02", "Design", "วาง flow, UX, data และ architecture ให้ชัด"],
      ["03", "Build", "พัฒนา software, AI และ integration เป็นระบบเดียวกัน"],
      ["04", "Launch", "นำขึ้นใช้งาน เก็บ feedback และพัฒนาต่อ"],
    ],
    ctaTitle: "มีไอเดียอยู่ในหัว?",
    ctaText: "เอามาคุยกันก่อนก็ได้ เราช่วยเปลี่ยนจากแนวคิดให้เป็นระบบที่จับต้องได้",
    cta: "คุยกับ Buildifyx",
  },
  en: {
    overline: "Product & Software Studio — Bangkok",
    titleA: "We build digital products",
    titleB: "people can use and businesses can grow",
    lead:
      "From web apps and AI to data systems and automation — we help shape, design, and build products that work in the real world.",
    primary: "Start a project",
    secondary: "See our work",
    trusted: "Software · AI · Data · Product Design",
    servicesTitle: "Where we can help",
    servicesLead:
      "A small product team that works across strategy, experience, engineering, and launch.",
    services: [
      ["Software", "Web apps, SaaS, internal tools, and back-office systems"],
      ["AI & Data", "AI workflows, machine learning, dashboards, and data pipelines"],
      ["Product Design", "UX/UI, product flows, and prototypes ready to build"],
      ["Automation", "APIs, integrations, and workflows that remove repetitive work"],
    ],
    teamOverline: "Meet the core team",
    teamSubtitle: "Three people, three strengths, one shared way of building products.",
    teamTitle: "People behind Buildifyx",
    teamText:
      "We bring product, design, engineering, and data into one small team so decisions move quickly from idea to something people can actually use.",
    teamQuote:
      "Different strengths. One shared standard — make it useful, thoughtful, and real.",
    processTitle: "How we turn an idea into something real",
    steps: [
      ["01", "Understand", "Clarify the problem, users, goals, and constraints."],
      ["02", "Design", "Map the flow, UX, data, and architecture."],
      ["03", "Build", "Engineer software, AI, and integrations as one system."],
      ["04", "Launch", "Ship, collect feedback, and keep improving."],
    ],
    ctaTitle: "Have an idea in your head?",
    ctaText: "Bring it to us early. We can help turn the rough idea into a product people can actually use.",
    cta: "Talk to Buildifyx",
  },
} as const;

const avatars = [
  {
    src: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=500",
    label: "Design",
    x: "left-[2%] top-[20%]",
  },
  {
    src: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=500",
    label: "Build",
    x: "right-[0%] top-[18%]",
  },
  {
    src: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=500",
    label: "Data",
    x: "left-[8%] bottom-[5%]",
  },
  {
    src: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=500",
    label: "Product",
    x: "right-[5%] bottom-[3%]",
  },
];

const ctaAvatars = [
  {
    src: "/home/cta-avatar-1.svg",
    alt: "Buildifyx developer avatar",
  },
  {
    src: "/home/cta-avatar-2.svg",
    alt: "Buildifyx product avatar",
  },
  {
    src: "/home/cta-avatar-3.svg",
    alt: "Buildifyx design avatar",
  },
];

const serviceIcons = [Code2, Bot, Layers3, Workflow];

function HeroProductPreview({
  side,
  delay,
}: {
  side: "left" | "center" | "right";
  delay: number;
}) {
  const isCenter = side === "center";
  const isLeft = side === "left";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 150,
        scale: 0.86,
        rotate: isCenter ? 0 : isLeft ? -8 : 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isCenter ? 1 : 0.92,
        rotate: isCenter ? 0 : isLeft ? -7 : 7,
      }}
      transition={{
        type: "spring",
        stiffness: 92,
        damping: 15,
        mass: 0.9,
        delay,
      }}
      className={`absolute bottom-[-92px] overflow-hidden rounded-[28px] border border-white/80 bg-white/72 shadow-[0_34px_80px_rgba(31,83,143,.18)] backdrop-blur-2xl ${
        isCenter
          ? "left-1/2 z-20 h-[300px] w-[330px] -translate-x-1/2 sm:h-[320px] sm:w-[360px]"
          : isLeft
            ? "left-[10%] z-10 hidden h-[276px] w-[300px] lg:block"
            : "right-[10%] z-10 hidden h-[276px] w-[300px] lg:block"
      }`}
    >
      <div className="flex h-9 items-center gap-1.5 border-b border-[#dce9f7]/70 bg-white/76 px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b68]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffc84a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34c759]" />
        <div className="ml-3 h-4 flex-1 rounded-full bg-[#eff5fb]" />
      </div>

      {isCenter ? (
        <div className="p-4">
          <div className="rounded-[20px] bg-[linear-gradient(135deg,#ecf6ff,#dcecff)] p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2.5 w-20 rounded-full bg-[#9fc9f8]" />
                <div className="mt-2 h-5 w-36 rounded-full bg-[#10233f]" />
              </div>
              <div className="grid h-9 w-9 place-items-center rounded-[12px] bg-[#2f7fff] text-white">
                <Bot className="h-4 w-4" />
              </div>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {["Product", "AI", "Data"].map((item, index) => (
                <div key={item} className="rounded-[14px] border border-white bg-white/82 p-3 text-left">
                  <div className={`h-7 w-7 rounded-[9px] ${
                    index === 0 ? "bg-[#e8f2ff]" : index === 1 ? "bg-[#ecf8ff]" : "bg-[#edf7f4]"
                  }`} />
                  <p className="mt-3 text-[9px] font-semibold text-[#29445f]">{item}</p>
                  <div className="mt-1 h-1.5 w-10 rounded-full bg-[#d6e2ef]" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 grid grid-cols-[1.35fr_.65fr] gap-3">
            <div className="rounded-[16px] bg-[#f6f9fc] p-3">
              <div className="h-2 w-20 rounded-full bg-[#c8d7e6]" />
              <div className="mt-4 flex h-16 items-end gap-1.5">
                {[34, 48, 40, 62, 52, 72].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-[5px] bg-[#62a6ff]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-[16px] bg-[#eef6ff] p-3">
              <div className="text-[9px] font-semibold uppercase tracking-[.12em] text-[#6b86a4]">Live</div>
              <div className="mt-2 text-xl font-semibold text-[#2f7fff]">+84%</div>
              <div className="mt-3 h-1.5 w-full rounded-full bg-white">
                <div className="h-full w-[84%] rounded-full bg-[#2f7fff]" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div className={`rounded-[20px] p-4 ${
            isLeft
              ? "bg-[linear-gradient(145deg,#161d2b,#283a62)]"
              : "bg-[linear-gradient(145deg,#edf4ff,#dcecff)]"
          }`}>
            <div className="flex items-center justify-between">
              <div className={`h-3 w-24 rounded-full ${isLeft ? "bg-white/72" : "bg-[#10233f]"}`} />
              <div className={`h-8 w-8 rounded-[10px] ${isLeft ? "bg-[#7088ff]" : "bg-white"}`} />
            </div>
            <div className={`mt-4 h-20 rounded-[14px] ${
              isLeft
                ? "bg-[radial-gradient(circle_at_50%_40%,#6d8cff_0%,#344b8e_34%,#171d2c_72%)]"
                : "bg-white/76"
            }`} />
          </div>

          <div className="mt-3 space-y-2">
            {[0, 1, 2].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[13px] bg-[#f6f9fc] px-3 py-2.5">
                <div className={`h-7 w-7 rounded-[9px] ${isLeft ? "bg-[#e9edff]" : "bg-[#e8f2ff]"}`} />
                <div className="flex-1">
                  <div className="h-2 w-[58%] rounded-full bg-[#c9d7e6]" />
                  <div className="mt-1.5 h-1.5 w-[38%] rounded-full bg-[#e0e9f2]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}

function ServiceCard({
  title,
  text,
  index,
}: {
  title: string;
  text: string;
  index: number;
}) {
  const Icon = serviceIcons[index];

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      whileHover={{ y: -6 }}
      className="rounded-[24px] border border-[#e8eef7] bg-white p-6 shadow-[0_18px_50px_rgba(33,73,128,.06)]"
    >
      <div className="grid h-11 w-11 place-items-center rounded-[14px] bg-[#edf5ff] text-[#2f7fff]">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-[#172033]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#728099]">{text}</p>
    </motion.article>
  );
}

function AppleAvatar({
  emoji,
  label,
  className,
  delay = 0,
}: {
  emoji: string;
  label: string;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      animate={{ y: [0, -7, 0] }}
      transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute z-30 ${className}`}
    >
      <div className="relative grid h-[96px] w-[96px] place-items-center rounded-full border-[7px] border-white bg-[linear-gradient(145deg,#ffe8e6,#ffd3d8)] shadow-[0_18px_42px_rgba(60,102,155,.16)] sm:h-[108px] sm:w-[108px]">
        <span className="absolute inset-[7px] rounded-full bg-white/34" />
        <span
          className="relative select-none text-[58px] leading-none sm:text-[66px]"
          style={{
            fontFamily:
              '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',
          }}
          aria-hidden="true"
        >
          {emoji}
        </span>
      </div>

      <div className="absolute left-1/2 top-[84%] -translate-x-1/2 whitespace-nowrap rounded-[12px] border border-[#e6edf6] bg-white px-4 py-2 text-[12px] font-medium text-[#51617a] shadow-[0_10px_26px_rgba(44,78,123,.11)] sm:top-[87%]">
        {label}
      </div>
    </motion.div>
  );
}

function TeamOrbit({
  text,
  quote,
}: {
  text: string;
  quote: string;
}) {
  return (
    <div className="relative mx-auto mt-0 h-[500px] w-full max-w-[900px] sm:h-[555px]">
      <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.98)_0%,rgba(244,249,255,.82)_47%,rgba(232,244,255,.34)_70%,transparent_74%)] sm:h-[500px] sm:w-[500px]" />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#a9d3ff] sm:h-[495px] sm:w-[495px]"
      >
        <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#2f7fff] shadow-[0_0_14px_rgba(47,127,255,.4)]" />
      </motion.div>

      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[335px] w-[335px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#c2dfff] sm:h-[385px] sm:w-[385px]"
      />

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#d7eaff] sm:h-[285px] sm:w-[285px]"
      />

      <motion.div
        animate={{ y: [0, -4, 0], rotate: [-1.6, -0.8, -1.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[49%] z-10 w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-[28px] bg-[linear-gradient(145deg,#63c0ff_0%,#3485ff_54%,#216ff0_100%)] px-6 py-7 text-white shadow-[0_26px_65px_rgba(47,127,255,.22)] sm:px-8 sm:py-8"
      >
        <div className="relative">
          <p className="text-[13px] leading-6 text-white/98 sm:text-[15px] sm:leading-7">
            {text}
          </p>
          <div className="my-4 h-px bg-white/18" />
          <p className="font-serif text-[17px] italic leading-7 text-white/90 sm:text-[20px] sm:leading-8">
            “{quote}”
          </p>
        </div>
      </motion.div>

      <AppleAvatar
        emoji="👨🏻"
        label="Engineering"
        className="left-[6%] top-[24%] scale-[.88] sm:scale-100"
        delay={0.1}
      />
      <AppleAvatar
        emoji="👩🏻"
        label="Product & Design"
        className="right-[6%] top-[26%] scale-[.88] sm:scale-100"
        delay={0.7}
      />
      <AppleAvatar
        emoji="🧔🏽‍♂️"
        label="AI & Data"
        className="left-1/2 bottom-[3%] -translate-x-1/2 scale-[.88] sm:scale-100"
        delay={1.25}
      />

      <div className="absolute bottom-[1%] left-[5%] hidden items-center gap-2.5 sm:flex">
        <span className="h-px w-9 bg-[#b7d8ff]" />
        <span className="text-[9px] uppercase tracking-[0.17em] text-[#9aa7ba]">
          Think · Build · Improve
        </span>
      </div>

      <div className="absolute bottom-[1%] right-[5%] hidden text-[9px] uppercase tracking-[0.17em] text-[#9aa7ba] sm:block">
        Product / Software / AI
      </div>
    </div>
  );
}

export default function HomeExperience() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <div className="overflow-hidden bg-white text-[#172033]">
      <section className="bg-white px-4 pb-6 pt-[82px] sm:px-6 lg:px-8">
        <div className="relative mx-auto h-[calc(100vh-98px)] min-h-[650px] max-h-[780px] max-w-[1440px] overflow-hidden rounded-[30px] bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,.98)_0%,rgba(255,255,255,.54)_20%,transparent_42%),radial-gradient(circle_at_12%_18%,rgba(68,157,255,.30),transparent_34%),radial-gradient(circle_at_86%_20%,rgba(90,211,255,.28),transparent_32%),linear-gradient(180deg,#78c0ff_0%,#badfff_36%,#eaf5ff_72%,#ffffff_100%)] px-5 sm:px-8 lg:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.20]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(58,118,181,.24) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              maskImage:
                "linear-gradient(to bottom, transparent 4%, black 25%, black 70%, transparent 97%)",
            }}
          />

          <div className="pointer-events-none absolute left-1/2 top-[43%] h-[420px] w-[820px] max-w-[76vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50 blur-[92px]" />
          <div className="pointer-events-none absolute -left-[11%] top-[-23%] h-[500px] w-[500px] rounded-full border border-white/30" />
          <div className="pointer-events-none absolute -right-[14%] top-[-22%] h-[760px] w-[760px] rounded-full border border-white/24" />

          <div className="relative z-30 mx-auto flex h-full max-w-5xl flex-col items-center pt-[15%] text-center sm:pt-[11%] lg:pt-[8.5%]">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/84 bg-white/66 px-4 py-2 shadow-[0_10px_30px_rgba(58,117,179,.08)] backdrop-blur-xl">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2f7fff] shadow-[0_0_12px_rgba(47,127,255,.65)]" />
              <p className="text-[9px] font-semibold uppercase tracking-[0.19em] text-[#245f9c] sm:text-[10px]">
                {t.overline}
              </p>
            </div>

            <h1 className="mx-auto mt-5 max-w-5xl text-[40px] font-semibold leading-[.96] tracking-[-.065em] text-[#10233f] sm:text-[54px] lg:text-[64px]">
              {t.titleA}
              <span className="relative mx-auto mt-1 block w-fit max-w-full">
                <span className="bg-[linear-gradient(90deg,#10233f_0%,#173a61_52%,#2f7fff_100%)] bg-clip-text text-transparent">
                  {t.titleB}
                </span>
                <span className="pointer-events-none absolute -bottom-2 left-1/2 h-[3px] w-[34%] -translate-x-1/2 rounded-full bg-[linear-gradient(90deg,transparent,#6eb6ff,transparent)] opacity-80" />
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-6 text-[#496986] sm:text-[15px] sm:leading-7">
              {t.lead}
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/Contact"
                className="group inline-flex min-h-[52px] items-center gap-3 rounded-[17px] bg-[#2f7fff] px-7 text-sm font-semibold text-white shadow-[0_16px_34px_rgba(47,127,255,.28)] ring-1 ring-[#2f7fff]/20 transition hover:-translate-y-0.5 hover:bg-[#438cff]"
              >
                {t.primary}
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/mywork"
                className="inline-flex min-h-[52px] items-center gap-3 rounded-[17px] border border-white bg-white/80 px-7 text-sm font-medium text-[#314967] shadow-[0_12px_30px_rgba(66,104,147,.10)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:bg-white"
              >
                {t.secondary}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[330px] overflow-hidden">
            <div className="absolute left-1/2 bottom-[-70px] h-[230px] w-[520px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(89,147,255,.26)_0%,rgba(89,147,255,.08)_40%,transparent_72%)] blur-[18px]" />
          </div>

          <HeroProductPreview side="left" delay={0.12} />
          <HeroProductPreview side="center" delay={0.02} />
          <HeroProductPreview side="right" delay={0.20} />
        </div>
      </section>

      <section className="border-y border-[#edf1f6] bg-[#fbfdff] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium text-[#2f7fff]">What we do</p>
            <h2 className="mt-4 text-[34px] font-semibold leading-[1.08] tracking-[-.045em] sm:text-[48px]">
              {t.servicesTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#7b879b] sm:text-base">
              {t.servicesLead}
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {t.services.map(([title, text], index) => (
              <ServiceCard key={title} title={title} text={text} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7fbff] px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
        <div className="pointer-events-none absolute left-[-8%] top-[14%] h-64 w-64 rounded-full bg-[#dceeff]/48 blur-[90px]" />
        <div className="pointer-events-none absolute right-[-6%] top-[26%] h-72 w-72 rounded-full bg-white/85 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#2f7fff]">
              {t.teamOverline}
            </p>
            <h2 className="mt-2 text-[34px] font-semibold tracking-[-.055em] text-[#2b3547] sm:text-[42px]">
              {t.teamTitle}
            </h2>
            <p className="mx-auto mt-2.5 max-w-2xl text-[13px] leading-5 text-[#7c899d] sm:text-sm sm:leading-6">
              {t.teamSubtitle}
            </p>
          </div>

          <TeamOrbit text={t.teamText} quote={t.teamQuote} />
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.78fr_1.22fr] lg:gap-12">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#007aff]">
              Our process
            </p>
            <h2 className="mt-2 text-[38px] font-semibold leading-[1.02] tracking-[-.05em] text-[#1c1c1e] sm:text-[50px]">
              {t.processTitle}
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-6 text-[#636366]">
              A clear flow from understanding the problem to shipping something people can actually use.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-black/[0.06] bg-[#f2f2f7] p-2 shadow-[0_16px_50px_rgba(15,23,42,.06)]">
            <div className="overflow-hidden rounded-[22px] bg-white">
              {t.steps.map(([num, title, text], index) => (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.06 }}
                  className={`group flex items-center gap-4 px-4 py-4 sm:px-5 ${index < t.steps.length - 1 ? "border-b border-black/[0.06]" : ""}`}
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-[13px] bg-[#007aff] text-[11px] font-semibold text-white shadow-[0_8px_20px_rgba(0,122,255,.18)]">
                    {num}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-[15px] font-semibold text-[#1c1c1e]">{title}</p>
                    <p className="mt-0.5 text-[12px] leading-5 text-[#8e8e93]">{text}</p>
                  </div>

                  {index === t.steps.length - 1 ? (
                    <div className="grid h-7 w-7 place-items-center rounded-full bg-[#34c759]/12 text-[#248a3d]">
                      <Check className="h-4 w-4" />
                    </div>
                  ) : (
                    <ChevronRight className="h-4 w-4 shrink-0 text-[#c7c7cc] transition group-hover:translate-x-0.5 group-hover:text-[#007aff]" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f2f2f7] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(111,183,255,.16)_0%,rgba(111,183,255,.05)_46%,transparent_72%)] blur-[22px]" />

        <div className="relative mx-auto min-h-[610px] max-w-[1180px]">
          <FloatingToolBackground variant="cta" />

          <div className="relative z-20 mx-auto max-w-[690px] pt-8 sm:pt-10">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[34px] bg-white p-[10px] shadow-[0_28px_80px_rgba(15,23,42,.10)] ring-1 ring-black/[0.05]"
          >
            <div className="relative h-[192px] overflow-hidden rounded-[26px] bg-[linear-gradient(180deg,#91d0ff_0%,#bee3ff_100%)] sm:h-[208px]">
              <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-white/10 blur-2xl" />

              <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-[46%] items-center justify-center">
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 -mr-3 grid h-[88px] w-[88px] place-items-center overflow-hidden rounded-full border-[6px] border-white bg-white shadow-[0_16px_36px_rgba(36,91,145,.18)]"
                >
                  <img
                    src={ctaAvatars[0].src}
                    alt={ctaAvatars[0].alt}
                    className="h-[86%] w-[86%] object-contain"
                  />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 4, 0], scale: [1, 1.018, 1] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                  className="relative z-30 grid h-[112px] w-[112px] place-items-center overflow-hidden rounded-full border-[7px] border-white bg-white shadow-[0_20px_44px_rgba(36,91,145,.22)]"
                >
                  <img
                    src={ctaAvatars[1].src}
                    alt={ctaAvatars[1].alt}
                    className="h-[88%] w-[88%] object-contain"
                  />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 5.7, repeat: Infinity, ease: "easeInOut", delay: 0.55 }}
                  className="relative z-20 -ml-3 grid h-[88px] w-[88px] place-items-center overflow-hidden rounded-full border-[6px] border-white bg-white shadow-[0_16px_36px_rgba(36,91,145,.18)]"
                >
                  <img
                    src={ctaAvatars[2].src}
                    alt={ctaAvatars[2].alt}
                    className="h-[86%] w-[86%] object-contain"
                  />
                </motion.div>
              </div>
            </div>

            <div className="px-7 py-8 text-center sm:px-10 sm:py-9">
              <h2 className="mx-auto max-w-[560px] text-[30px] font-semibold leading-[1.1] tracking-[-.045em] text-[#111114] sm:text-[38px]">
                {t.ctaTitle}
              </h2>

              <p className="mx-auto mt-3 max-w-[500px] text-[14px] leading-6 text-[#636366] sm:text-[15px]">
                {t.ctaText}
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/Contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-[#007aff] px-6 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,122,255,.20)] transition hover:-translate-y-0.5 hover:bg-[#0a84ff]"
                >
                  {t.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>

                <Link
                  href="/mywork"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[14px] bg-[#f2f2f7] px-6 text-sm font-semibold text-[#007aff] transition hover:-translate-y-0.5 hover:bg-[#e9e9ef]"
                >
                  {t.secondary}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
