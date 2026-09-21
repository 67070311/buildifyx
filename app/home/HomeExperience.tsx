"use client";

import Image from "next/image";
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
    titleB: "ที่คนใช้ได้จริง และธุรกิจเติบโตต่อได้",
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
    teamOverline: "ทีมหลักของเรา",
    teamSubtitle: "สามคน สามความถนัด แต่คิดและสร้างโปรดักต์ไปในทิศทางเดียวกัน",
    teamTitle: "คนเบื้องหลัง Buildifyx",
    teamText:
      "เรารวมมุมมองด้านโปรดักต์ ดีไซน์ วิศวกรรม และข้อมูลไว้ในทีมเดียว เพื่อให้ทุกการตัดสินใจไปถึงของที่ใช้งานจริงได้เร็วขึ้น",
    teamQuote:
      "ต่างคนต่างเก่งคนละด้าน แต่มีมาตรฐานเดียวกัน — ทำของที่มีประโยชน์ คิดมาดี และใช้งานได้จริง",
    processTitle: "วิธีที่เราพาไอเดียไปถึงของจริง",
    steps: [
      ["01", "ทำความเข้าใจ", "เข้าใจปัญหา ผู้ใช้ เป้าหมาย และข้อจำกัด"],
      ["02", "ออกแบบ", "วาง flow, UX, data และ architecture ให้ชัด"],
      ["03", "พัฒนา", "พัฒนา software, AI และ integration เป็นระบบเดียวกัน"],
      ["04", "นำขึ้นใช้งาน", "เปิดใช้งาน เก็บ feedback และพัฒนาต่อ"],
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

function ButterflyMark() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-[#2f7fff]"
      fill="none"
    >
      <path
        d="M11.7 12.2C9.8 7.9 7.8 5.7 5.9 5.3c-1.6-.3-2.7.7-2.5 2.2.2 2.1 2.3 4.4 6.4 5.4m2.5-.7c1.9-4.3 3.9-6.5 5.8-6.9 1.6-.3 2.7.7 2.5 2.2-.2 2.1-2.3 4.4-6.4 5.4M11.9 12.4c-1.7 2.1-2 4.1-.9 5.6.8 1.1 2.3 1 3.1-.1 1-1.4.6-3.3-1.1-5.5M12 8.8v7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const productShowcase = [
  {
    name: "bdxa",
    logo: "/work/bdxa-logo.svg",
    image: "/work/bdxa/1.png",
    href: "https://bdxa.buildifyx.com/",
    accent: "#1688ff",
    soft: "#eaf5ff",
    description: {
      th: "AI workspace agent ที่ช่วยอ่านโปรเจกต์ ค้นหาโค้ด และแก้ไขงานได้จากแชต",
      en: "An AI workspace agent for reading projects, finding code, and making changes from chat.",
    },
  },
  {
    name: "Simple POS",
    logo: "/work/pos/pos-logo.png",
    image: "/work/pos/new/3.png",
    href: "/mywork",
    accent: "#f47a2f",
    soft: "#fff2e8",
    description: {
      th: "ระบบ POS สำหรับจัดการเมนู ออร์เดอร์ โต๊ะ และร้านใน flow เดียว",
      en: "A POS system for menus, orders, tables, and store management in one flow.",
    },
  },
  {
    name: "Bigger",
    logo: "/work/bigger/logo.png",
    image: "/work/bigger/1.png",
    href: "https://biggerx.app",
    accent: "#0f9fb5",
    soft: "#e9fbfd",
    description: {
      th: "แพลตฟอร์มแลกของแบบ trade-up ที่รวม offer, chat และ progress ไว้ด้วยกัน",
      en: "A trade-up exchange platform built around offers, chat, and visible progress.",
    },
  },
] as const;

function HeroProductDeck({
  language,
}: {
  language: "th" | "en";
}) {
  const deck = [
    productShowcase[1],
    productShowcase[0],
    productShowcase[2],
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 34 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.68, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-30 mx-auto mb-5 mt-12 max-w-[1260px] overflow-hidden rounded-[34px] bg-white shadow-[0_30px_80px_rgba(35,91,150,.14)] sm:mb-6 sm:mt-14 sm:rounded-[38px] lg:mt-16"
    >
      <div className="overflow-x-auto overscroll-x-contain px-4 py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-5 sm:py-6 md:overflow-visible md:px-6 lg:px-7 lg:py-7 xl:px-9 xl:py-8">
        <div className="flex snap-x snap-mandatory gap-4 md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-[0.86fr_1.28fr_0.86fr] lg:items-end lg:gap-5 xl:gap-7">
          {deck.map((product, index) => {
            const isCenter = index === 1;
            const isExternal = product.href.startsWith("http");

            return (
              <motion.a
                key={product.name}
                href={product.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.22 + index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: isCenter ? -6 : -3 }}
                className={`group flex min-w-[82%] snap-center flex-col text-left sm:min-w-[56%] md:min-w-0 ${isCenter ? "lg:-translate-y-3" : "lg:pb-3"}`}
              >
                <div className={`flex items-center gap-2.5 ${isCenter ? "lg:gap-3" : ""}`}>
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-[12px] sm:h-10 sm:w-10 ${isCenter ? "lg:h-11 lg:w-11 lg:rounded-[14px]" : ""}`}
                    style={{ backgroundColor: product.soft }}
                  >
                    <Image
                      src={product.logo}
                      alt={`${product.name} logo`}
                      width={26}
                      height={26}
                      loading={isCenter ? "eager" : "lazy"}
                      className={`h-[23px] w-[23px] object-contain sm:h-[25px] sm:w-[25px] ${isCenter ? "lg:h-[28px] lg:w-[28px]" : ""}`}
                    />
                  </span>

                  <span className={`truncate text-[17px] font-semibold tracking-[-0.035em] text-[#12243d] sm:text-[19px] ${isCenter ? "lg:text-[22px]" : "lg:text-[18px]"}`}>
                    {product.name}
                  </span>
                </div>

                <div
                  className={`relative mt-4 h-[205px] overflow-hidden rounded-[22px] sm:h-[225px] md:h-[180px] ${isCenter ? "lg:h-[300px] xl:h-[330px] lg:rounded-[26px]" : "lg:h-[230px] xl:h-[250px]"}`}
                  style={{ backgroundColor: product.soft }}
                >
                  <Image
                    src={product.image}
                    alt={`${product.name} product preview`}
                    fill
                    sizes="(max-width: 639px) 82vw, (max-width: 767px) 56vw, (max-width: 1023px) 30vw, (max-width: 1279px) 36vw, 470px"
                    loading={isCenter ? "eager" : "lazy"}
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.012]"
                  />
                </div>

                <p className={`mt-4 line-clamp-2 min-h-[38px] text-[11px] leading-[1.6] text-[#6f7c8f] sm:text-[12px] md:text-[11px] ${isCenter ? "lg:text-[13px] lg:leading-5" : "lg:text-[11px]"}`}>
                  <span className="font-semibold text-[#17263d]">
                    {product.name}
                  </span>{" "}
                  {product.description[language]}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
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
      className="rounded-[20px] border border-[#e8eef7] bg-white p-4 shadow-[0_18px_50px_rgba(33,73,128,.06)] sm:rounded-[24px] sm:p-6"
    >
      <div className="grid h-10 w-10 place-items-center rounded-[13px] bg-[#edf5ff] text-[#2f7fff] sm:h-11 sm:w-11 sm:rounded-[14px]">
        <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
      </div>
      <h3 className="mt-4 text-[15px] font-semibold leading-tight tracking-[-0.03em] text-[#172033] sm:mt-6 sm:text-xl">{title}</h3>
      <p className="mt-2 text-[11px] leading-[1.55] text-[#728099] sm:mt-3 sm:text-sm sm:leading-6">{text}</p>
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
      whileInView={{ y: [0, -7, 0] }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay }}
      className={`absolute z-30 ${className}`}
    >
      <div className="relative grid h-[72px] w-[72px] place-items-center rounded-full border-[5px] border-white bg-[linear-gradient(145deg,#ffe8e6,#ffd3d8)] shadow-[0_18px_42px_rgba(60,102,155,.16)] sm:h-[108px] sm:w-[108px] sm:border-[7px]">
        <span className="absolute inset-[5px] rounded-full bg-white/34 sm:inset-[7px]" />
        <span
          className="relative select-none text-[42px] leading-none sm:text-[66px]"
          style={{
            fontFamily:
              '"Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',
          }}
          aria-hidden="true"
        >
          {emoji}
        </span>
      </div>

      <div className="absolute left-1/2 top-[84%] -translate-x-1/2 whitespace-nowrap rounded-[10px] border border-[#e6edf6] bg-white px-2.5 py-1.5 text-[9px] font-medium text-[#51617a] shadow-[0_10px_26px_rgba(44,78,123,.11)] sm:top-[87%] sm:rounded-[12px] sm:px-4 sm:py-2 sm:text-[12px]">
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
    <div className="relative mx-auto mt-0 h-[470px] w-full max-w-[900px] sm:h-[555px]">
      <div className="absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.98)_0%,rgba(244,249,255,.82)_47%,rgba(232,244,255,.34)_70%,transparent_74%)] sm:h-[500px] sm:w-[500px]" />

      <motion.div
        whileInView={{ rotate: 360 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[344px] w-[344px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#a9d3ff] sm:h-[495px] sm:w-[495px]"
      >
        <span className="absolute left-1/2 top-[-4px] h-2 w-2 -translate-x-1/2 rounded-full bg-[#2f7fff] shadow-[0_0_14px_rgba(47,127,255,.4)]" />
      </motion.div>

      <motion.div
        whileInView={{ rotate: -360 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[270px] w-[270px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#c2dfff] sm:h-[385px] sm:w-[385px]"
      />

      <motion.div
        whileInView={{ rotate: 360 }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[195px] w-[195px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#d7eaff] sm:h-[285px] sm:w-[285px]"
      />

      <motion.div
        whileInView={{ y: [0, -4, 0], rotate: [-1.6, -0.8, -1.6] }}
        viewport={{ amount: 0.1 }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[50%] z-10 w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-[22px] bg-[linear-gradient(145deg,#63c0ff_0%,#3485ff_54%,#216ff0_100%)] px-4 py-5 text-white shadow-[0_26px_65px_rgba(47,127,255,.22)] sm:top-[49%] sm:w-[66%] sm:rounded-[28px] sm:px-8 sm:py-8"
      >
        <div className="relative">
          <p className="text-[11px] leading-5 text-white/98 sm:text-[15px] sm:leading-7">
            {text}
          </p>
          <div className="my-3 h-px bg-white/18 sm:my-4" />
          <p className="font-serif text-[15px] italic leading-6 text-white/90 sm:text-[20px] sm:leading-8">
            “{quote}”
          </p>
        </div>
      </motion.div>

      <AppleAvatar
        emoji="👨🏻"
        label="Engineering"
        className="left-[1%] top-[15%] sm:left-[6%] sm:top-[24%]"
        delay={0.1}
      />
      <AppleAvatar
        emoji="👩🏻"
        label="Full Stack"
        className="right-[1%] top-[16%] sm:right-[6%] sm:top-[26%]"
        delay={0.7}
      />
      <AppleAvatar
        emoji="🧔🏽‍♂️"
        label="AI & Data"
        className="left-1/2 bottom-[1%] -translate-x-1/2 sm:bottom-[3%]"
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
        <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[30px] bg-[radial-gradient(circle_at_50%_16%,rgba(255,255,255,.98)_0%,rgba(255,255,255,.54)_20%,transparent_42%),radial-gradient(circle_at_12%_18%,rgba(68,157,255,.30),transparent_34%),radial-gradient(circle_at_86%_20%,rgba(90,211,255,.28),transparent_32%),linear-gradient(180deg,#78c0ff_0%,#badfff_36%,#eaf5ff_72%,#ffffff_100%)] px-5 pb-1 sm:px-8 lg:px-10">
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
          <div className="pointer-events-none absolute -right-[14%] top-[-22%] h-[760px] w-[760px] rounded-full border border-white/24" />

          <div className="relative z-30 mx-auto flex max-w-5xl flex-col items-center pt-12 text-center sm:pt-14 lg:pt-16 xl:pt-18">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/84 bg-white/66 px-4 py-2 shadow-[0_10px_30px_rgba(58,117,179,.08)] backdrop-blur-xl">
              <ButterflyMark />
              <p className="text-[9px] font-semibold uppercase tracking-[0.19em] text-[#245f9c] sm:text-[10px]">
                {t.overline}
              </p>
            </div>

            <h1 className={`mx-auto mt-5 max-w-5xl font-semibold text-[#10233f] ${language === "th" ? "text-[36px] leading-[1.18] tracking-[-.025em] sm:text-[48px] sm:leading-[1.16] lg:text-[58px]" : "text-[40px] leading-[.96] tracking-[-.065em] sm:text-[54px] lg:text-[64px]"}`}>
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

          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[420px] overflow-hidden">
            <div className="absolute left-1/2 bottom-[-72px] h-[270px] w-[820px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(89,147,255,.24)_0%,rgba(89,147,255,.08)_42%,transparent_74%)] blur-[22px]" />
          </div>

          <HeroProductDeck language={language} />
        </div>
      </section>

      <section className="border-y border-[#edf1f6] bg-[#fbfdff] px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium text-[#2f7fff]">{language === "th" ? "สิ่งที่เราช่วยได้" : "What we do"}</p>
            <h2 className={`mt-4 font-semibold ${language === "th" ? "text-[30px] leading-[1.25] tracking-[-.02em] sm:text-[42px]" : "text-[34px] leading-[1.08] tracking-[-.045em] sm:text-[48px]"}`}>
              {t.servicesTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#7b879b] sm:text-base">
              {t.servicesLead}
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-4">
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
            <h2 className={`mt-2 font-semibold text-[#2b3547] ${language === "th" ? "text-[30px] leading-[1.2] tracking-[-.02em] sm:text-[40px]" : "text-[34px] tracking-[-.055em] sm:text-[42px]"}`}>
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#007aff]">{language === "th" ? "ขั้นตอนการทำงาน" : "Our process"}</p>
            <h2 className={`mt-2 font-semibold text-[#1c1c1e] ${language === "th" ? "text-[32px] leading-[1.2] tracking-[-.02em] sm:text-[44px]" : "text-[38px] leading-[1.02] tracking-[-.05em] sm:text-[50px]"}`}>
              {t.processTitle}
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-6 text-[#636366]">
              {language === "th" ? "กระบวนการที่ชัดเจน ตั้งแต่เข้าใจปัญหา ไปจนถึงส่งมอบสิ่งที่ผู้ใช้ใช้งานได้จริง" : "A clear flow from understanding the problem to shipping something people can actually use."}
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
                  whileInView={{ y: [0, -4, 0] }}
                  viewport={{ amount: 0.1 }}
                  transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 -mr-3 grid h-[88px] w-[88px] place-items-center overflow-hidden rounded-full border-[6px] border-white bg-white shadow-[0_16px_36px_rgba(36,91,145,.18)]"
                >
                  <img
                    src={ctaAvatars[0].src}
                    alt={ctaAvatars[0].alt}
                    loading="lazy"
                    decoding="async"
                    className="h-[86%] w-[86%] object-contain"
                  />
                </motion.div>

                <motion.div
                  whileInView={{ y: [0, 4, 0], scale: [1, 1.018, 1] }}
                  viewport={{ amount: 0.1 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
                  className="relative z-30 grid h-[112px] w-[112px] place-items-center overflow-hidden rounded-full border-[7px] border-white bg-white shadow-[0_20px_44px_rgba(36,91,145,.22)]"
                >
                  <img
                    src={ctaAvatars[1].src}
                    alt={ctaAvatars[1].alt}
                    loading="lazy"
                    decoding="async"
                    className="h-[88%] w-[88%] object-contain"
                  />
                </motion.div>

                <motion.div
                  whileInView={{ y: [0, -4, 0] }}
                  viewport={{ amount: 0.1 }}
                  transition={{ duration: 5.7, repeat: Infinity, ease: "easeInOut", delay: 0.55 }}
                  className="relative z-20 -ml-3 grid h-[88px] w-[88px] place-items-center overflow-hidden rounded-full border-[6px] border-white bg-white shadow-[0_16px_36px_rgba(36,91,145,.18)]"
                >
                  <img
                    src={ctaAvatars[2].src}
                    alt={ctaAvatars[2].alt}
                    loading="lazy"
                    decoding="async"
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
