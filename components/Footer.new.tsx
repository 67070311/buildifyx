"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SiFacebook, SiInstagram, SiLine, SiTiktok } from "react-icons/si";
import { useLanguage } from "./LanguageProvider";

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/buildifyx_studio?igsh=N3k3Ym1tcjRqYmRn", icon: SiInstagram },
  { name: "Facebook", href: "https://www.facebook.com/share/1BnqzyphJ2/?mibextid=wwXIfr", icon: SiFacebook },
  { name: "TikTok", href: "https://www.tiktok.com/@buildifyx?_r=1&_t=ZS-975HyBNi92t", icon: SiTiktok },
  { name: "LINE OA", href: "https://line.me/R/ti/p/@722xuryu?oat_content=url&ts=06251804", icon: SiLine },
];

const copy = {
  th: {
    eyebrow: "BUILDIFYX / BANGKOK",
    title: "สร้างของที่",
    titleAccent: "ใช้งานได้จริง.",
    lead: "Software, AI, Data และ Digital Product สำหรับธุรกิจที่อยากไปให้ไกลกว่าเดิม",
    start: "เริ่มโปรเจกต์",
    work: "ดูผลงาน",
    links: "เมนู",
    contact: "ติดต่อ",
    nav: [
      ["หน้าหลัก", "/"],
      ["ทำไมต้องเรา", "/whyus"],
      ["ผลงาน", "/mywork"],
      ["ทดลอง", "/playground"],
      ["ติดต่อ", "/Contact"],
    ],
    location: "กรุงเทพฯ ประเทศไทย",
    footer: "คิด · ออกแบบ · พัฒนา · เติบโต",
  },
  en: {
    eyebrow: "BUILDIFYX / BANGKOK",
    title: "Build things that",
    titleAccent: "actually work.",
    lead: "Software, AI, Data, and digital products for businesses ready to move forward.",
    start: "Start a project",
    work: "See our work",
    links: "Navigation",
    contact: "Contact",
    nav: [
      ["Home", "/"],
      ["Why Us", "/whyus"],
      ["Our Work", "/mywork"],
      ["Playground", "/playground"],
      ["Contact", "/Contact"],
    ],
    location: "Bangkok, Thailand",
    footer: "Think · Design · Build · Grow",
  },
} as const;

export default function Footer() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#060606] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:54px_54px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_22%_0%,rgba(255,255,255,.1),transparent_52%)]" />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-20 sm:px-8 lg:px-10 lg:pt-28">
        <div className="grid gap-14 border-b border-white/10 pb-16 lg:grid-cols-[1.2fr_.8fr] lg:gap-20">
          <div>
            <p className="font-mono text-[9px] tracking-[0.24em] text-white/30">{t.eyebrow}</p>
            <h2 className="mt-5 max-w-3xl text-[48px] font-medium leading-[.95] tracking-[-.06em] sm:text-[64px] lg:text-[78px]">
              {t.title}
              <span className="block text-white/38">{t.titleAccent}</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/42 sm:text-base">{t.lead}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/Contact"
                className="group inline-flex min-h-14 items-center gap-3 rounded-full bg-white px-6 text-sm font-semibold text-black transition hover:-translate-y-0.5"
              >
                {t.start}
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/mywork"
                className="inline-flex min-h-14 items-center rounded-full border border-white/12 bg-white/[0.04] px-6 text-sm font-medium text-white/65 transition hover:bg-white/10 hover:text-white"
              >
                {t.work}
              </Link>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="font-mono text-[9px] tracking-[0.22em] text-white/25">{t.links}</p>
              <nav className="mt-5 flex flex-col items-start gap-3">
                {t.nav.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="group flex items-center gap-2 text-sm text-white/48 transition hover:text-white"
                  >
                    {label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="font-mono text-[9px] tracking-[0.22em] text-white/25">{t.contact}</p>
              <div className="mt-5 space-y-4 text-sm text-white/48">
                <a href="mailto:buildifyX.th@gmail.com" className="flex items-center gap-3 transition hover:text-white">
                  <Mail className="h-4 w-4 text-white/28" />
                  <span className="break-all">buildifyX.th@gmail.com</span>
                </a>
                <a href="tel:0645809429" className="flex items-center gap-3 transition hover:text-white">
                  <Phone className="h-4 w-4 text-white/28" />
                  <span>0645809429 · 0638760067</span>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-white/28" />
                  <span>{t.location}</span>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-sm text-white/45 transition hover:bg-white hover:text-black"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 font-mono text-[9px] uppercase tracking-[0.18em] text-white/20 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 BUILDIFYX · ALL RIGHTS RESERVED</span>
          <span>{t.footer}</span>
        </div>
      </div>
    </footer>
  );
}
