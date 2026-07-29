"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

export default function NavbarMobile({
  navItems = [],
}: {
  navItems?: NavItem[];
}) {
  const pathname = usePathname();

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

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const mobileMenu = (
    <div
      className={`fixed inset-0 z-[99999] transition-all duration-300 ${
        open
          ? "pointer-events-auto visible opacity-100"
          : "pointer-events-none invisible opacity-0"
      }`}
    >
      {/* Background overlay */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={() => setOpen(false)}
        className="absolute inset-0 h-full w-full bg-black/55 backdrop-blur-[2px]"
      />

      {/* Mobile drawer */}
      <aside
        className={`absolute right-0 top-0 z-10 flex h-dvh w-[86vw] max-w-[380px] flex-col border-l border-white/10 bg-[#161616]/95 px-5 pb-6 pt-5 text-white shadow-[-20px_0_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-full"
          >
            <Image
              src="/logo/logo.png"
              alt="Buildifyx logo"
              width={24}
              height={24}
              className="object-contain invert"
            />

            <span className="text-sm font-light tracking-tight text-white">
              Buildifyx
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition duration-300 hover:bg-white hover:text-black"
          >
            <X size={18} strokeWidth={1.6} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 flex flex-col gap-2">
          {navItems.map((item, index) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`group flex items-center justify-between rounded-2xl px-4 py-4 transition duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-[0_10px_30px_rgba(255,255,255,0.08)]"
                    : "text-white/60 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="flex items-center gap-4">
                  <span
                    className={`text-[10px] font-light tracking-[0.14em] ${
                      isActive ? "text-black/40" : "text-white/25"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="text-[15px] font-light tracking-tight">
                    {item.name}
                  </span>
                </span>

                <ArrowRight
                  size={16}
                  strokeWidth={1.5}
                  className={`transition duration-300 group-hover:translate-x-1 ${
                    isActive ? "text-black" : "text-white/35"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Bottom section */}
        <div className="mt-auto space-y-3 pt-8">
          <Link
            href="/Contact"
            onClick={() => setOpen(false)}
            className="group flex min-h-12 w-full items-center justify-between rounded-full bg-white px-5 py-3 text-sm font-light text-black transition duration-300 hover:bg-white/85"
          >
            <span>Get Started</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#161616] text-white">
              <ArrowRight
                size={15}
                strokeWidth={1.6}
                className="transition duration-300 group-hover:translate-x-0.5"
              />
            </span>
          </Link>

          <a
            href="mailto:buildifyX.th@gmail.com"
            onClick={() => setOpen(false)}
            className="flex items-center justify-between rounded-full border border-white/10 bg-white/[0.05] px-5 py-3 text-xs font-light text-white/55 transition duration-300 hover:bg-white/10 hover:text-white"
          >
            <span>buildifyX.th@gmail.com</span>
            <ArrowRight size={14} strokeWidth={1.5} />
          </a>

          <p className="pt-2 text-center text-[10px] font-light text-white/25">
            © {new Date().getFullYear()} Buildifyx
          </p>
        </div>
      </aside>
    </div>
  );

  return (
    <>
      {/* Menu button */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition duration-300 hover:bg-white hover:text-black"
      >
        <Menu size={19} strokeWidth={1.6} />
      </button>

      {mounted ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
