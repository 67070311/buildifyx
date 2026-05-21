"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Body() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <div className="text-center pt-10 md:pt-24 mb-10 md:mb-24 px-4">
          <h1 className="text-[22px] md:text-4xl font-bold text-[#22223b] leading-tight">
            You care about your brain.
            <br />
            We do, too
          </h1>
        </div>
      </motion.div>
      {/* TITLE */}

      {/* TIMELINE WRAPPER */}
      <div className="relative max-w-7xl mx-auto scale-[0.55] sm:scale-[0.7] md:scale-100 origin-top">
        {/* CENTER LINE */}
        <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 h-full border-l-10 border-dotted border-[#ededff]"></div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center px-6 text-center"
        >
          {/* ================= ITEM 1 ================= */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32 relative">
            {/* LEFT TEXT */}
            <div className="lg:pr-20">
              <h2 className="text-2xl font-bold text-[#22223b] leading-snug mb-6">
                Build Products People Actually Love
              </h2>

              <p className="text-gray-500 leading-9 text-lg">
                We design and develop digital products that solve real problems,
                scale with confidence, and create meaningful user experiences.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/whyus/whyus1.gif"
                alt="study"
                width={450}
                height={450}
                className="object-contain"
              />
            </div>

            {/* NUMBER */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-xl items-center justify-center text-5xl font-bold text-[#c9c8ff]">
              1
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center px-6 text-center"
        >
          {/* ================= ITEM 2 ================= */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32 relative">
            {/* LEFT IMAGE */}
            <div className="flex justify-center order-2 lg:order-1">
              <Image
                src="/whyus/whyus2.gif"
                alt="study"
                width={420}
                height={420}
                className="object-contain"
              />
            </div>

            {/* RIGHT TEXT */}
            <div className="lg:pl-20 order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-[#22223b] leading-snug mb-6">
                Startup Partner Vibe
              </h2>

              <p className="text-gray-500 leading-9 text-lg">
                Whether you’re validating a new idea or scaling an existing
                platform, we work as an extension of your team to design,
                develop, and launch products efficiently with clear
                communication.
              </p>
            </div>

            {/* NUMBER */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-xl items-center justify-center text-5xl font-bold text-[#c9c8ff]">
              2
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col items-center px-6 text-center"
        >
          <div className="grid lg:grid-cols-2 gap-20 items-center relative">
            {/* LEFT TEXT */}
            <div className="lg:pr-20">
              <h2 className="text-2xl font-bold text-[#22223b] leading-snug mb-6">
                Tech / Engineering Focus
              </h2>

              <p className="text-gray-500 leading-9 text-lg">
                We specialize in building high-performance web and mobile
                applications with scalable architecture, clean code, and
                seamless user experiences.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="flex justify-center">
              <Image
                src="/whyus/whyus3.gif"
                alt="study"
                width={450}
                height={450}
                className="object-contain"
              />
            </div>

            {/* NUMBER */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-xl items-center justify-center text-5xl font-bold text-[#c9c8ff]">
              3
            </div>
          </div>
        </motion.div>
        {/* ================= ITEM 3 ================= */}
      </div>
    </section>
  );
}
