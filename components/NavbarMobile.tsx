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

  useEffect(() => {
    const timer = window.setTimeout(() => setMounted(true), 0);
    return () => window.clearTimeout(timer);
  }, []);

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

  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(false), 0);
    return () => window.clearTimeout(timer);
  }, [pathname]);

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
        className="absolute inset-0 h-full w-full bg-[#172033]/18 backdrop-blur-sm"
      />

      <aside
        id="mobile-navigation"
        className={`absolute right-0 top-0 z-10 flex h-dvh w-[90vw] max-w-[410px] flex-col overflow-y-auto overscroll-contain border-l border-[#e7edf5] bg-white px-5 pb-6 pt-5 text-[#172033] shadow-[-25px_0_80px_rgba(45,73,115,.12)] transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#edf1f6] pb-5">
          <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center">
              <Image src="/logo/logo.png" alt="Buildifyx logo" width={18} height={18} />
            </span>
            <p className="text-sm font-semibold">Buildifyx</p>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="grid h-10 w-10 place-items-center rounded-[10px] border border-[#e6ecf4] bg-[#f8fafc] text-[#65738a]"
          >
            <X size={18} strokeWidth={1.6} />
          </button>
        </div>

        <div className="mt-5">
          <LanguageToggle />
        </div>

        <nav className="mt-7 flex flex-col">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`group flex items-center justify-between border-b border-[#edf1f6] px-1 py-5 ${
                  isActive ? "text-[#2f7fff]" : "text-[#65738a]"
                }`}
              >
                <span className="text-lg font-medium tracking-[-0.03em]">{item.name}</span>
                <ArrowUpRight className="h-4 w-4 text-[#9aa6b8]" />
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto">
          <Link
            href="/Contact"
            onClick={() => setOpen(false)}
            className="flex min-h-14 items-center justify-between rounded-[14px] bg-[#2f7fff] px-5 text-sm font-semibold text-white"
          >
            {ctaLabel}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
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
        className="grid h-9 w-9 place-items-center rounded-[10px] border border-[#e5ebf3] bg-[#f8fafc] text-[#4f5d72]"
      >
        <Menu size={18} strokeWidth={1.7} />
      </button>
      {mounted ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
