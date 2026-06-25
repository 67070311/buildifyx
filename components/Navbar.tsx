"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarMobile from "./NavbarMobile";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Why Us", href: "/whyus" },
  { name: "About Us", href: "/aboutus" },
  { name: "Our Work", href: "/mywork" },
  { name: "Contact", href: "/Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-4 z-50 w-full px-4">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between rounded-full border border-white/10 bg-[#161616]/85 px-2 shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full px-3 text-white"
        >
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={22}
            height={22}
            className="object-contain invert"
          />

          <span className="text-sm font-light tracking-tight">Buildifyx</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`rounded-full px-4 py-2 text-xs font-light transition ${
                  isActive
                    ? "bg-white/15 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]"
                    : "text-white/55 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/mywork"
            className="rounded-full bg-white px-4 py-2 text-xs font-light text-black transition hover:bg-white/85"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <NavbarMobile navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
