"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import LanguageToggle from "./LanguageToggle";

interface NavItem {
  name: string;
  href: string;
}

export default function NavbarMobile({
  navItems = [],
  ctaLabel = "Start a project",
}: {
  navItems?: NavItem[];
  ctaLabel?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (open) document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  const mobileMenu = (
    <div
      className={`fixed inset-0 z-[99999] transition duration-300 ${
        open
          ? "pointer-events-auto visible opacity-100"
          : "pointer-events-none invisible opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setOpen(false)}
        className="absolute inset-0 h-full w-full bg-black/70 backdrop-blur-sm"
      />

      <aside
        id="mobile-navigation"
        className={`absolute right-0 top-0 z-10 flex h-dvh w-[90vw] max-w-[410px] flex-col border-l border-white/10 bg-[#080808] px-5 pb-6 pt-5 text-white shadow-[-25px_0_80px_rgba(0,0,0,.5)] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-white/10 bg-white/5">
              <Image src="/logo/logo.png" alt="Buildifyx logo" width={18} height={18} className="invert" />
            </span>
            <div>
              <p className="text-sm font-medium">Buildifyx</p>
              <p className="font-mono text-[8px] tracking-[0.16em] text-white/25">DIGITAL STUDIO</p>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-white/70"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        <div className="mt-5">
          <LanguageToggle />
        </div>

        <nav className="mt-7 flex flex-col">
          {navItems.map((item, index) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`group flex items-center justify-between border-b border-white/8 px-1 py-5 ${
                  isActive ? "text-white" : "text-white/45"
                }`}
              >
                <span className="flex items-center gap-4">
                  <span className="font-mono text-[9px] text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-medium tracking-[-0.03em]">{item.name}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-white/25 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto">
          <Link
            href="/Contact"
            onClick={() => setOpen(false)}
            className="flex min-h-14 items-center justify-between rounded-full bg-white px-5 text-sm font-semibold text-black"
          >
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          <p className="mt-5 text-center font-mono text-[9px] tracking-[0.14em] text-white/20">
            © {new Date().getFullYear()} BUILDIFYX
          </p>
        </div>
      </aside>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-white"
      >
        <Menu size={18} strokeWidth={1.6} />
      </button>
      {mounted ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
