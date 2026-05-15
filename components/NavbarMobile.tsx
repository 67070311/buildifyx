"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

export default function NavbarMobile({ navItems }: { navItems: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger Button */}
      <button onClick={() => setOpen(true)}>
        <Menu size={30} />
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          {/* Sidebar */}
          <div className="absolute right-0 top-0 h-full w-72 bg-white p-6 shadow-xl">
            {/* Header */}
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-lg font-semibold">Menu</h2>

              <button onClick={() => setOpen(false)}>
                <X size={28} />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-gray-800 transition hover:text-black"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Button */}
            <button className="mt-10 w-full rounded-full bg-black py-3 text-white">
              Get Started
            </button>
          </div>
        </div>
      )}
    </>
  );
}
