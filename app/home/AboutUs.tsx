"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden border-y border-white/15 bg-[linear-gradient(180deg,#151433_0%,#000000_100%)] px-5 py-12 text-white md:px-16 md:py-20">
      <div className="grid grid-cols-1 items-center gap-10 px-0 md:grid-cols-2 md:gap-14 md:px-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          {/* Small Title */}
          <h2 className="mb-4 text-sm font-medium text-[#8EA7FF] md:mb-5 md:text-base">
            About Us
          </h2>

          {/* Main Heading */}
          <h1 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-4xl">
            Buildifyx is a <br className="hidden md:block" />
            software studio
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-sm font-normal leading-7 text-white/55 md:mt-8 md:text-base md:leading-relaxed">
            Founded by 4 students from KMITL with backgrounds in Computer
            Science, Information Technology, and Data Science, we started in
            early 2025 with a strong belief that real problems deserve real
            solutions.
          </p>

          <p className="mt-4 text-sm font-normal leading-7 text-white/55 md:mt-6 md:text-base md:leading-relaxed">
            From day one, we have focused on delivering projects for real
            clients and building our own SaaS products from the ground up. Not
            just ideas, but products that create actual impact.
          </p>

          <p className="mt-4 text-sm font-normal leading-7 text-white/55 md:mt-6 md:text-base md:leading-relaxed">
            We design and develop software solutions, from freelance client work
            to our own SaaS platforms.
          </p>

          {/* Button Desktop */}
          <div className="mt-10 hidden md:block">
            <Link
              href="/aboutus"
              className="inline-block rounded-full bg-[#5552D9] px-7 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#4338CA]"
            >
              See More
            </Link>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <Image
            src="/home/Rocket.gif"
            alt="About Us"
            width={500}
            height={500}
            className="h-auto w-full max-w-[260px] md:max-w-[500px]"
          />

          {/* Button Mobile */}
          <div className="mt-6 block md:hidden">
            <Link
              href="/aboutus"
              className="inline-block rounded-full bg-[#5552D9] px-7 py-3 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#4338CA]"
            >
              See More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
