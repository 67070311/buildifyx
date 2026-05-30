"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/dist/client/link";

export default function Problem() {
  return (
    <section className="py-20">
      {/* Mission */}
      <motion.section
        className="mt-10 px-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h3 className="mt-6 text-center text-2xl font-bold leading-relaxed text-[#000000] md:text-4xl">
          When the world’s problems finally have a solution,
          <br className="hidden md:block" />
          that solution will be called Buildifyx.
        </h3>

        {/* Sub text */}
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm leading-relaxed text-[#777] md:text-lg">
          We believe technology should solve meaningful real-world challenges.
          <br />
          At Buildifyx, every product is crafted with purpose, innovation, and
          long-term impact in mind.
        </p>
      </motion.section>

      {/* Cards */}
      <section className="grid grid-cols-1 gap-16 px-4 md:grid-cols-2 md:px-10 xl:grid-cols-3 xl:px-20">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* GIF Only */}
          <div
            className="
              flex w-full items-center justify-center
              rounded-[42px]
              p-10
            "
          >
            <Image
              src={"/home/Seeking development.gif"}
              alt="Problem Driven Thinking"
              width={420}
              height={420}
              className="
                h-auto
                w-full
                max-w-[320px]
                object-contain
              "
            />
          </div>

          {/* Text */}
          <div className="mt-10 text-center">
            <h4 className="text-3xl font-black text-[#5552D9]">
              Problem-Driven Thinking
            </h4>

            <p className="mt-4 text-sm leading-relaxed text-[#777] md:text-base">
              We begin with real challenges faced by people and businesses.
            </p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* GIF Only */}
          <div
            className="
              flex w-full items-center justify-center
              rounded-[42px]
              p-10
            "
          >
            <Image
              src={"/home/Marketing online.gif"}
              alt="Build with Purpose"
              width={420}
              height={420}
              className="
                h-auto
                w-full
                max-w-[320px]
                object-contain
              "
            />
          </div>

          {/* Text */}
          <div className="mt-10 text-center">
            <h4 className="text-3xl font-black text-[#5552D9]">
              Build with Purpose
            </h4>

            <p className="mt-4 text-sm leading-relaxed text-[#777] md:text-base">
              Every product is intentionally designed with innovation and
              usability.
            </p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          {/* GIF Only */}
          <div
            className="
              flex w-full items-center justify-center
              rounded-[42px]
              p-10
            "
          >
            <Image
              src={"/home/Business Goal.gif"}
              alt="Scalable Impact"
              width={420}
              height={420}
              className="
                h-auto
                w-full
                max-w-[320px]
                object-contain
              "
            />
          </div>

          {/* Text */}
          <div className="mt-10 text-center">
            <h4 className="text-3xl font-black text-[#5552D9]">
              Scalable Impact
            </h4>

            <p className="mt-4 text-sm leading-relaxed text-[#777] md:text-base">
              We design systems that are scalable and future-ready.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Buttons */}
      <div className="mb-20 mt-20 flex items-center justify-center gap-4">
        {/* Fill Button */}
        <Link
          href="/whyus"
          className="rounded-full bg-[#5552D9] px-8 py-4 font-medium text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-[#4338CA]"
        >
          See More
        </Link>

        {/* Outline Button */}
        <Link
          href="/Contact"
          className="rounded-full border-2 border-[#5552D9] px-8 py-4 font-medium text-[#5552D9] transition-all duration-200 hover:scale-105 hover:bg-white hover:text-[#5552D9]"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
