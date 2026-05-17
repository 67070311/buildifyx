"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Problem() {
  return (
    <>
      {/* Mission */}
      <motion.section
        className="mt-10 px-4"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Icon */}
        <div className="flex justify-center">
          <div className="text-[#5552D9] text-4xl md:text-5xl font-light">
            +
          </div>
        </div>

        {/* Badge */}
        <div className="mt-3 flex justify-center">
          <div className="rounded-full bg-purple-100 px-6 py-2 text-sm md:text-base font-semibold text-[#7C3AED] shadow-sm">
            Our Mission
          </div>
        </div>

        {/* Heading */}
        <h3 className="mt-6 text-center text-2xl md:text-4xl text-[#5552D9] font-bold leading-relaxed">
          When the world’s problems finally have a solution,
          <br className="hidden md:block" />
          that solution will be called Buildifyx.
        </h3>

        {/* Sub text */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-gray-500 text-sm md:text-lg leading-relaxed">
          We believe technology should solve meaningful real-world challenges.
          At Buildifyx, every product is crafted with purpose, innovation, and
          long-term impact in mind.
        </p>
      </motion.section>

      {/* Cards */}
      <section className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 px-4 md:px-10 xl:px-20">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="group bg-white rounded-3xl p-5 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
          <div className="bg-[#F3EDFF] rounded-3xl p-6 flex justify-center overflow-hidden">
            <Image
              src={"/home/Seeking development.gif"}
              alt="Problem Driven Thinking"
              width={320}
              height={320}
              className="w-full max-w-[260px] h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <h4 className="mt-7 text-2xl font-bold text-gray-800">
            Problem-Driven Thinking
          </h4>

          <p className="mt-4 text-gray-500 leading-relaxed text-sm md:text-base">
            We begin with real challenges faced by people and businesses.
            Instead of creating products that only look impressive, we focus on
            building solutions that genuinely improve experiences and solve
            meaningful problems.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="group bg-white rounded-3xl p-5 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
          <div className="bg-[#F3EDFF] rounded-3xl p-6 flex justify-center overflow-hidden">
            <Image
              src={"/home/Marketing online.gif"}
              alt="Build with Purpose"
              width={320}
              height={320}
              className="w-full max-w-[260px] h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <h4 className="mt-7 text-2xl font-bold text-gray-800">
            Build with Purpose
          </h4>

          <p className="mt-4 text-gray-500 leading-relaxed text-sm md:text-base">
            Every product we create is intentionally designed with a clear
            mission. From user experience to system architecture, we ensure that
            every detail contributes meaningful value and practical usability.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          viewport={{ once: true }}
          className="group bg-white rounded-3xl p-5 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
        >
          <div className="bg-[#F3EDFF] rounded-3xl p-6 flex justify-center overflow-hidden">
            <Image
              src={"/home/Business Goal.gif"}
              alt="Scalable Impact"
              width={320}
              height={320}
              className="w-full max-w-[260px] h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <h4 className="mt-7 text-2xl font-bold text-gray-800">
            Scalable Impact
          </h4>

          <p className="mt-4 text-gray-500 leading-relaxed text-sm md:text-base">
            We design systems that are scalable, flexible, and future-ready.
            Buildifyx products are created to support long-term growth, evolving
            business needs, and sustainable digital transformation.
          </p>
        </motion.div>
      </section>
    </>
  );
}
