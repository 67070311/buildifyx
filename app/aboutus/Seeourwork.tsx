"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Seeourwork() {
  return (
    <section className="relative z-10 overflow-hidden bg-white px-4 py-16 sm:px-6 md:py-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-7xl"
      >
        <div className="text-center">
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Explore our work
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            Discover selected projects we’ve designed and built for real
            businesses.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-10 lg:mt-16">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="order-2 flex justify-center md:order-1"
          >
            <Image
              src="/aboutus_pic/about_us2.gif"
              alt="Project planning illustration"
              width={420}
              height={320}
              className="h-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px]"
            />
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 flex justify-center md:order-2"
          >
            <Link
              href="/mywork"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-[#5552D9] px-7 py-4 text-sm font-bold text-white shadow-[0_16px_40px_rgba(85,82,217,0.28)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(85,82,217,0.38)] sm:px-8 sm:text-base"
            >
              <span className="relative z-10">See more Projects</span>

              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#5552D9] transition duration-300 group-hover:translate-x-1">
                →
              </span>

              <span className="absolute inset-0 -translate-x-full bg-black/15 transition duration-500 group-hover:translate-x-0" />
            </Link>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
            className="order-3 flex justify-center"
          >
            <Image
              src="/aboutus_pic/about_us.gif"
              alt="Team working illustration"
              width={420}
              height={320}
              className="h-auto w-full max-w-[280px] sm:max-w-[340px] lg:max-w-[420px]"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
