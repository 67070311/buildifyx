"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

export default function NavbarMobile({ navItems }: { navItems: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
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
      className={`fixed inset-0 z-[99999] transition-opacity duration-300 ${
        open
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      {/* Overlay */}
      <button
        type="button"
        aria-label="Close Menu"
        onClick={() => setOpen(false)}
        className="absolute inset-0 h-full w-full bg-black/60"
      />

      {/* Drawer */}
      <aside
        className={`absolute right-0 top-0 z-10 flex h-dvh w-[78vw] max-w-[340px] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
          <h2 className="text-xl font-semibold text-gray-900">Menu</h2>

          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close Menu"
            className="flex items-center justify-center text-gray-900"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col px-6 py-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-gray-100 py-5 text-lg font-medium text-gray-800 transition-colors hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Footer */}
        {/* Footer */}
        <div className="mt-auto p-6">
          <Link
            href="/mywork"
            onClick={() => setOpen(false)}
            className="block w-full rounded-full bg-black py-4 text-center font-medium text-white transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
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
        className="flex items-center justify-center"
      >
        <Menu size={30} />
      </button>

      {mounted ? createPortal(mobileMenu, document.body) : null}
    </>
  );
}
