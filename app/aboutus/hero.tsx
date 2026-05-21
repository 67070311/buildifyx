"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background Image */}
      <Image
        src="/aboutus_pic/banner_aboutUs.png"
        alt="Background"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/50" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <p className="mb-6 text-xs font-medium uppercase tracking-[0.4em] text-[#5552D9] md:text-sm">
          About Buildifyx
        </p>

        <h1 className="text-xl font-black leading-none tracking-tight text-black md:text-5xl">
          About Us
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-gray-700 md:text-lg">
          We craft modern digital experiences through design, development, and
          creative strategy for brands, startups, and growing businesses.
        </p>

        {/* Button Desktop */}
        <div className="mt-10 hidden md:block">
          <Link
            href="#"
            className="rounded-full bg-[#5552D9] px-8 py-4 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#4338CA]"
          >
            See More
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
