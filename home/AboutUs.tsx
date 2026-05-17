"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section className="bg-[#ffffff] py-20 px-6 md:px-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center px-20">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          {/* Small Title */}
          <h2 className="text-lg font-bold text-[#5552D9] mb-5">About Us</h2>

          {/* Main Heading */}
          <h1 className="text-gray-800 font-bold text-4xl md:text-5xl leading-tight">
            Buildifyx is a <br className="hidden md:block" />
            software studio
          </h1>

          {/* Paragraph */}
          <p className="mt-8 text-gray-500 text-lg leading-relaxed">
            Founded by 4 students from KMITL with backgrounds in Computer
            Science, Information Technology, and Data Science, we started in
            early 2025 with a strong belief that real problems deserve real
            solutions.
          </p>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            From day one, we have focused on delivering projects for real
            clients and building our own SaaS products from the ground up — not
            just ideas, but products that create actual impact.
          </p>

          <p className="mt-6 text-gray-500 text-lg leading-relaxed">
            We design and develop software solutions, from freelance client work
            to our own SaaS platforms.
          </p>

          {/* Button Desktop */}
          <div className="hidden md:block mt-10">
            <button className="bg-[#5552D9] hover:bg-[#4338CA] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-md">
              See More
            </button>
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
            className="w-full max-w-[320px] md:max-w-[500px] h-auto"
          />

          {/* Button Mobile */}
          <div className="block md:hidden mt-8">
            <button className="bg-[#5552D9] hover:bg-[#4338CA] text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-md">
              See More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
