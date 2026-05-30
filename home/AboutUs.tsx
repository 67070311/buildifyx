"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="bg-white mt-10 md:mt-20 py-12 md:py-20 px-5 md:px-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center px-0 md:px-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          {/* Small Title */}
          <h2 className="text-base md:text-lg font-medium text-[#5552D9] mb-4 md:mb-5">
            About Us
          </h2>

          {/* Main Heading */}
          <h1 className="text-gray-800 font-bold text-3xl md:text-5xl leading-tight">
            Buildifyx is a <br className="hidden md:block" />
            software studio
          </h1>

          {/* Paragraph */}
          <p className="mt-6 md:mt-8 text-gray-500 text-sm md:text-lg leading-7 md:leading-relaxed">
            Founded by 4 students from KMITL with backgrounds in Computer
            Science, Information Technology, and Data Science, we started in
            early 2025 with a strong belief that real problems deserve real
            solutions.
          </p>

          <p className="mt-4 md:mt-6 text-gray-500 text-sm md:text-lg leading-7 md:leading-relaxed">
            From day one, we have focused on delivering projects for real
            clients and building our own SaaS products from the ground up. Not
            just ideas, but products that create actual impact.
          </p>

          <p className="mt-4 md:mt-6 text-gray-500 text-sm md:text-lg leading-7 md:leading-relaxed">
            We design and develop software solutions, from freelance client work
            to our own SaaS platforms.
          </p>

          {/* Button Desktop */}
          <div className="hidden md:block mt-10">
            <Link
              href="/aboutus"
              className="bg-[#5552D9] hover:bg-[#4338CA] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-md inline-block"
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
            className="w-full max-w-[260px] md:max-w-[500px] h-auto"
          />

          {/* Button Mobile */}
          <div className="block md:hidden mt-6">
            <Link
              href="/aboutus"
              className="bg-[#5552D9] hover:bg-[#4338CA] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md inline-block"
            >
              See More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
