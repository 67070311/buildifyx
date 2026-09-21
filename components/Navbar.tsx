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
    play: "สนามเด็กเล่น",
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#edf1f6] bg-white/94 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-2.5 text-[#172033]">
          <span className="grid h-9 w-9 place-items-center">
            <Image
              src="/logo/logo.png"
              alt="Buildifyx logo"
              width={21}
              height={21}
              className="object-contain"
            />
          </span>
          <div className="leading-none">
            <span className="block text-[15px] font-semibold tracking-[-0.035em]">Buildifyx</span>
            <span className="mt-1 hidden text-[9px] font-medium uppercase tracking-[0.14em] text-[#9aa6b8] sm:block">
              Product Studio
            </span>
          </div>
        </Link>

        <nav className="hidden h-full items-center gap-7 xl:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex h-full items-center text-[12px] font-medium transition ${
                  isActive
                    ? "text-[#172033]"
                    : "text-[#7b879a] hover:text-[#172033]"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-[#2f7fff]" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageToggle compact />
          <Link
            href="/Contact"
            className="inline-flex h-10 items-center rounded-[11px] bg-[#2f7fff] px-4 text-[12px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#438cff]"
          >
            {t.cta}
          </Link>
        </div>

        <div className="xl:hidden">
          <NavbarMobile navItems={navItems} ctaLabel={t.cta} />
        </div>
      </div>
    </header>
  );
}
