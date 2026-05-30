"use client";

import { motion } from "framer-motion";
import Link from "next/dist/client/link";
import Image from "next/image";

export default function Hero() {
  const floatingItems = [
    {
      id: 1,
      src: "/home/banner/Direct Hit.gif",
      className:
        "w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-[120px] lg:h-[120px]",
      top: "12%",
      left: "6%",
      duration: 4,
    },
    {
      id: 2,
      src: "/home/banner/8 Ball.gif",
      className:
        "w-9 h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[110px] lg:h-[110px]",
      top: "14%",
      right: "6%",
      duration: 5,
    },
    {
      id: 3,
      src: "/home/banner/Wand.gif",
      className:
        "w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-[150px] lg:h-[150px]",
      bottom: "10%",
      left: "2%",
      duration: 6,
    },
    {
      id: 4,
      src: "/home/banner/Die.gif",
      className:
        "w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-[120px] lg:h-[120px]",
      bottom: "2%",
      left: "22%",
      duration: 4.5,
    },
    {
      id: 5,
      src: "/home/banner/Champagne bottle.gif",
      className:
        "w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-[130px] lg:h-[130px]",
      bottom: "8%",
      right: "14%",
      duration: 5.5,
    },
    {
      id: 6,
      src: "/home/banner/Pencil.gif",
      className:
        "w-9 h-9 sm:w-12 sm:h-12 md:w-16 md:h-16 lg:w-[110px] lg:h-[110px]",
      top: "52%",
      right: "2%",
      duration: 4.8,
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-32">
      {/* ---------------- Grid Background ---------------- */}
      <div
        className="
          absolute inset-0 opacity-40
          bg-[linear-gradient(to_right,#e5e5e5_1px,transparent_1px),linear-gradient(to_bottom,#e5e5e5_1px,transparent_1px)]
          bg-[size:42px_42px]
          sm:bg-[size:52px_52px]
          md:bg-[size:62px_62px]
        "
      />

      {/* ---------------- Glow ---------------- */}
      {/* <div
        className="
          absolute left-1/2 top-1/2
          h-[220px] w-[220px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-[#5552D9]/10
          blur-3xl

          sm:h-[320px]
          sm:w-[320px]

          md:h-[450px]
          md:w-[450px]
        "
      /> */}

      {/* ---------------- Floating Images ---------------- */}
      {floatingItems.map((item) => (
        <motion.div
          key={item.id}
          className="absolute z-20"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            bottom: item.bottom,
          }}
          animate={{
            y: [0, -18, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src={item.src}
            alt="floating item"
            width={300}
            height={300}
            priority
            className={`${item.className} object-contain`}
          />
        </motion.div>
      ))}

      {/* ---------------- Main Content ---------------- */}
      <div
        className="
          relative z-30
          mx-auto
          flex
          max-w-6xl
          flex-col
          items-center
          px-5
          text-center

          sm:px-6
        "
      >
        {/* ---------------- Title ---------------- */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="
            text-4xl
            font-black
            tracking-tight
            text-black

            sm:text-5xl
            md:text-7xl
            lg:text-8xl
          "
        >
          BUILDIFYX
        </motion.h1>
        {/* ---------------- Subtitle ---------------- */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            mt-3
            text-lg
            font-semibold
            italic
            text-[#5552D9]

            sm:text-xl
            md:text-3xl
          "
        >
          Your eyes, your rules
        </motion.p>
        {/* ---------------- Description ---------------- */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="
            mt-5
            max-w-[280px]
            text-sm
            leading-relaxed
            text-gray-500

            sm:max-w-xl
            sm:text-base

            md:max-w-2xl
            md:text-lg
          "
        >
          Smart creative platform for next generation designers
        </motion.p>
        {/* ---------------- Button ---------------- */}
        <Link
          href="/mywork"
          className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-[#eee] bg-white px-5 py-3 text-sm font-semibold shadow-[0_6px_16px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 sm:px-[22px] sm:py-[14px] sm:text-base"
        >
          See more Projects
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5552D9] text-xs text-white sm:h-6 sm:w-6 sm:text-sm">
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
