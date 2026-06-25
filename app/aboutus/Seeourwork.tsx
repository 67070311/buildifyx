"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Seeourwork() {
  return (
    <section className="relative -mt-[1px] overflow-hidden bg-[#050507] px-4 py-16 text-white sm:px-6 md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#5552D9]/20 blur-[150px]" />
        <div className="absolute left-[5%] bottom-[10%] h-80 w-80 rounded-full bg-[#2458FF]/10 blur-[130px]" />
        <div className="absolute right-[8%] top-[35%] h-80 w-80 rounded-full bg-[#8B5CF6]/12 blur-[130px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.035),transparent_35%,rgba(255,255,255,0.015))]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 mx-auto max-w-7xl"
      >
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-4 text-[11px] font-normal uppercase tracking-[0.42em] text-[#A7A5F8] sm:text-xs"
          >
            Selected Projects
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
            viewport={{ once: true }}
            className="text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Explore our work
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.16 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-2xl text-sm font-normal leading-7 text-white/45 sm:text-base md:leading-8"
          >
            Discover selected projects we’ve designed and built for real
            businesses, startups, and digital products.
          </motion.p>
        </div>

        {/* Content */}
        <div className="mt-12 grid items-center gap-10 md:mt-16 md:grid-cols-[1fr_auto_1fr] md:gap-12 lg:gap-16">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="relative order-2 flex justify-center md:order-1"
          >
            <div className="absolute inset-8 rounded-full bg-[#5552D9]/18 blur-3xl" />

            <Image
              src="/aboutus_pic/about_us2.gif"
              alt="Project planning illustration"
              width={420}
              height={320}
              className="relative z-10 h-auto w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[400px]"
            />
          </motion.div>

          {/* Center CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 flex flex-col items-center text-center md:order-2"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5552D9] to-[#A7A5F8] text-xl shadow-[0_18px_50px_rgba(85,82,217,0.45)]">
              ✦
            </div>

            <h2 className="max-w-xs text-xl font-normal leading-tight text-white sm:text-2xl md:text-3xl">
              See how ideas become real products
            </h2>

            <p className="mt-4 max-w-xs text-sm font-normal leading-7 text-white/45">
              From design concepts to production-ready websites, apps, and AI
              tools.
            </p>

            <Link
              href="/mywork"
              className="group mt-7 inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#5552D9] to-[#7C5CFF] px-6 py-3.5 text-sm font-medium text-white shadow-[0_18px_45px_rgba(85,82,217,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(85,82,217,0.5)] sm:px-7"
            >
              <span>See more Projects</span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#5552D9] transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="relative order-3 flex justify-center"
          >
            <div className="absolute inset-8 rounded-full bg-[#8B5CF6]/18 blur-3xl" />

            <Image
              src="/aboutus_pic/about_us.gif"
              alt="Team working illustration"
              width={420}
              height={320}
              className="relative z-10 h-auto w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[400px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
