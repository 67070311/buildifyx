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
    title: "มาสร้างอะไรดี ๆ ด้วยกัน",
    lead: "Software, AI, Data และ Digital Product สำหรับทีมที่อยากเปลี่ยนไอเดียให้ใช้งานได้จริง",
    start: "เริ่มโปรเจกต์",
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
  },
  en: {
    title: "Let's build something good together.",
    lead: "Software, AI, Data, and digital products for teams ready to turn ideas into something real.",
    start: "Start a project",
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
  },
} as const;

export default function Footer() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <footer className="border-t border-[#edf1f6] bg-white text-[#172033]">
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 lg:px-10 lg:pt-20">
        <div className="grid gap-12 border-b border-[#edf1f6] pb-14 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <p className="text-xs font-medium text-[#2f7fff]">Buildifyx Studio</p>
            <h2 className="mt-4 max-w-2xl text-[38px] font-semibold leading-[1.04] tracking-[-.05em] sm:text-[50px]">
              {t.title}
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#77849a] sm:text-base">
              {t.lead}
            </p>
            <Link
              href="/Contact"
              className="group mt-7 inline-flex min-h-13 items-center gap-3 rounded-[13px] bg-[#2f7fff] px-5 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(47,127,255,.18)] transition hover:-translate-y-0.5 hover:bg-[#438cff]"
            >
              {t.start}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-9 sm:grid-cols-2">
            <div>
              <p className="text-xs font-semibold text-[#42506a]">{t.links}</p>
              <nav className="mt-4 flex flex-col items-start gap-3">
                {t.nav.map(([label, href]) => (
                  <Link key={href} href={href} className="text-sm text-[#7a879b] transition hover:text-[#2f7fff]">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#42506a]">{t.contact}</p>
              <div className="mt-4 space-y-4 text-sm text-[#7a879b]">
                <a href="mailto:buildifyX.th@gmail.com" className="flex items-center gap-3 transition hover:text-[#2f7fff]">
                  <Mail className="h-4 w-4 text-[#8db9f7]" />
                  <span className="break-all">buildifyX.th@gmail.com</span>
                </a>
                <a href="tel:0645809429" className="flex items-center gap-3 transition hover:text-[#2f7fff]">
                  <Phone className="h-4 w-4 text-[#8db9f7]" />
                  <span>0645809429 · 0638760067</span>
                </a>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-[#8db9f7]" />
                  <span>{t.location}</span>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="grid h-9 w-9 place-items-center rounded-[10px] border border-[#e6edf6] bg-[#f8fbff] text-sm text-[#607089] transition hover:border-[#cce0ff] hover:bg-[#edf5ff] hover:text-[#2f7fff]"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-6 text-[11px] text-[#9aa6b8] sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Buildifyx. All rights reserved.</span>
          <span>Bangkok · Thailand · Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
