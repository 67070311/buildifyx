"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Body() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative mt-10 overflow-hidden bg-white px-6 py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        {/* Top Label */}
        <p className="mb-4 text-sm font-medium text-[#5552D9]">About Us</p>

        {/* Title */}
        <h2 className="text-4xl font-bold tracking-tight text-black md:text-6xl">
          What we do
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600 md:text-lg">
          At Buildifyx, we create modern digital experiences through branding,
          web development, UI/UX design, and creative strategy for businesses
          and startups.
        </p>

        {/* Image */}
        <div className="relative mt-20 h-[400px] w-full max-w-4xl md:h-[600px]">
          <Image
            src="/aboutus_pic/Cooking.gif"
            alt="What we do"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </motion.section>
  );
}
