"use client";

import Image from "next/image";
import Link from "next/link";
import NavbarMobile from "./NavbarMobile";

const navItems = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#about" },
  { name: "Why Us", href: "#why" },
  { name: "Our Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo/logo.png"
            alt="Logo"
            width={30}
            height={30}
            className="object-contain"
          />
          <h1>Buildifyx</h1>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-black transition hover:text-gray-500"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <button className="rounded-full bg-black px-5 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
            Get Started
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <NavbarMobile navItems={navItems} />
        </div>
      </div>
    </header>
  );
}
