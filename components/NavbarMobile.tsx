"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

export default function NavbarMobile({
  navItems = [],
}: {
  navItems?: NavItem[];
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
    }

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open]);

  const mobileMenu = (
    <div
      className={`fixed inset-0 z-[99999] transition-all duration-300 ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      {/* Background overlay */}
      <button
        type="button"
        aria-label="Close Menu"
        onClick={() => setOpen(false)}
        className="absolute inset-0 h-full w-full bg-black/35"
      />

      {/* Glass Drawer */}
      <aside
        className={`absolute right-0 top-0 z-10 flex h-dvh w-[76vw] max-w-[420px] flex-col bg-black/55 px-6 py-6 text-white shadow-2xl backdrop-blur-2xl transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top */}
        <div className="mb-12 flex items-center justify-start">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-white/85 transition hover:bg-white/10"
          >
            <X size={21} strokeWidth={1.5} />
          </button>
        </div>

        {/* Main Navigation */}
        <nav className="flex flex-col items-start gap-7 text-left">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-[18px] font-light uppercase tracking-[0.055em] text-white/90 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Bottom */}
        <div className="mt-auto pb-4">
          <a
            href="mailto:buildifyX.th@gmail.com"
            onClick={() => setOpen(false)}
            className="group flex items-center justify-between border-b border-white/70 pb-3 text-[16px] font-light tracking-[0.04em] text-white/90"
          >
            <span>Email</span>
            <ArrowRight
              size={21}
              strokeWidth={1.4}
              className="transition group-hover:translate-x-1"
            />
          </a>
        </div>
      </aside>
    </div>
  );

  return (
    <>
      {/* Menu Button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open Menu"
        aria-expanded={open}
        className="flex h-8 w-8 items-center justify-center rounded-full text-white"
      >
        <Menu size={21} strokeWidth={1.5} />
      </button>

      {mounted ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
