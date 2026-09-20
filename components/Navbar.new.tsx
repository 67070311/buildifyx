"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarMobile from "./NavbarMobile";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

const navConfig = [
  { key: "home", href: "/" },
  { key: "why", href: "/whyus" },
  { key: "work", href: "/mywork" },
  { key: "play", href: "/playground" },
  { key: "contact", href: "/Contact" },
] as const;

const labels = {
  th: {
    home: "หน้าหลัก",
    why: "ทำไมต้องเรา",
    work: "ผลงาน",
    play: "ทดลอง",
    contact: "ติดต่อ",
    cta: "เริ่มโปรเจกต์",
  },
  en: {
    home: "Home",
    why: "Why Us",
    work: "Our Work",
    play: "Playground",
    contact: "Contact",
    cta: "Start a project",
  },
} as const;

export default function Navbar() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = labels[language];
  const navItems = navConfig.map((item) => ({
    name: t[item.key],
    href: item.href,
  }));

  return (
    <header className="fixed left-0 top-5 z-50 w-full px-4">
      <div className="mx-auto flex h-[54px] max-w-7xl items-center justify-between rounded-full border border-white/10 bg-black/88 px-2 shadow-[0_16px_50px_rgba(0,0,0,0.28)] backdrop-blur-2xl">
        <Link href="/" className="flex items-center gap-2.5 rounded-full px-3 text-white">
          <span className="grid h-7 w-7 place-items-center rounded-full border border-white/12 bg-white/5">
            <Image
              src="/logo/logo.png"
              alt="Buildifyx logo"
              width={18}
              height={18}
              className="object-contain invert"
            />
          </span>
          <span className="text-sm font-medium tracking-[-0.03em]">Buildifyx</span>
          <span className="hidden font-mono text-[8px] tracking-[0.16em] text-white/25 sm:inline">
            DIGITAL STUDIO
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-[11px] font-medium transition ${
                  isActive
                    ? "bg-white text-black"
                    : "text-white/48 hover:bg-white/8 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle compact />
          <Link
            href="/Contact"
            className="inline-flex h-10 items-center rounded-full bg-white px-4 text-[11px] font-semibold text-black transition hover:-translate-y-0.5"
          >
            {t.cta}
          </Link>
        </div>

        <div className="md:hidden">
          <NavbarMobile navItems={navItems} ctaLabel={t.cta} />
        </div>
      </div>
    </header>
  );
}
