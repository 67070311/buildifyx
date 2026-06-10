"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const processCards = [
  {
    number: "01",
    title: "Strategy",
    text: "We define goals, users, structure, and the right direction before building.",
    color: "bg-[#5552D9]",
    bg: "bg-[#5552D9]/10",
  },
  {
    number: "02",
    title: "Design",
    text: "We create clean, modern, and user-friendly interfaces for real users.",
    color: "bg-[#FF7A59]",
    bg: "bg-[#FF7A59]/10",
  },
  {
    number: "03",
    title: "Development",
    text: "We build fast, responsive, and scalable digital products with clean code.",
    color: "bg-[#22C55E]",
    bg: "bg-[#22C55E]/10",
  },
  {
    number: "04",
    title: "Launch",
    text: "We test, publish, improve, and support your product after launch.",
    color: "bg-[#38BDF8]",
    bg: "bg-[#38BDF8]/10",
  },
];

const floatingWords = [
  "UI/UX",
  "Web App",
  "AI System",
  "Dashboard",
  "Branding",
  "Automation",
];

export default function CurvedCarousel() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-5 py-24 text-black md:py-32">
      {/* Soft Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(85,82,217,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(85,82,217,0.06)_1px,transparent_1px)] bg-[size:70px_70px]" />

      {/* Moving Color Shapes */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#5552D9]/10"
      />

      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 70, -40, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-[-120px] h-80 w-80 rounded-full bg-[#FF7A59]/10"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="font-black uppercase tracking-[0.45em] text-[#8D8BFF]">
            Behind the Designs
          </p>

          <h1 className="mt-6 text-5xl font-black leading-none tracking-[-0.06em] md:text-7xl lg:text-8xl">
            Crafting Digital
            <br />
            <span className="bg-gradient-to-r from-[#5552D9] via-[#FF7A59] to-[#38BDF8] bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
            We design and build websites, applications, dashboards, AI systems,
            and digital products that help businesses grow faster.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/mywork"
              className="rounded-full bg-[#5552D9] px-8 py-4 font-black text-white shadow-lg shadow-[#5552D9]/20 transition hover:-translate-y-1 hover:bg-[#4643c7]"
            >
              See More Projects
            </Link>

            <Link
              href="/Contact"
              className="rounded-full border border-gray-200 bg-white px-8 py-4 font-black text-black shadow-lg transition hover:-translate-y-1 hover:border-[#5552D9] hover:text-[#5552D9]"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Main Visual */}
        <div className="mt-24 grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Left Cards */}
          <div className="hidden gap-5 sm:grid-cols-2 lg:grid">
            {processCards.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 60, rotate: -3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -12,
                  rotate: 1,
                  scale: 1.03,
                }}
                className={`rounded-[2rem] border border-gray-100 ${item.bg} p-6 shadow-lg`}
              >
                <div
                  className={`mb-8 flex h-14 w-14 items-center justify-center rounded-2xl ${item.color} text-lg font-black text-white`}
                >
                  {item.number}
                </div>

                <h3 className="text-2xl font-black text-black">{item.title}</h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Animated Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 80 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-xl"
          >
            {/* Floating Words */}
            <div className="absolute inset-0 hidden md:block">
              {floatingWords.map((word, index) => (
                <motion.div
                  key={word}
                  animate={{
                    y: [0, index % 2 === 0 ? -20 : 20, 0],
                    x: [0, index % 2 === 0 ? 16 : -16, 0],
                    rotate: [0, index % 2 === 0 ? 5 : -5, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={[
                    "absolute rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-bold text-black shadow-xl",
                    index === 0 && "-left-10 top-10 text-[#5552D9]",
                    index === 1 && "right-0 top-0 text-[#FF7A59]",
                    index === 2 && "-right-10 top-40 text-[#22C55E]",
                    index === 3 && "-left-12 bottom-28 text-[#38BDF8]",
                    index === 4 && "right-10 bottom-10 text-[#5552D9]",
                    index === 5 && "left-28 -bottom-8 text-[#FF7A59]",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  {word}
                </motion.div>
              ))}
            </div>

            {/* Main Panel */}
            <div className="relative overflow-hidden rounded-[2.5rem] border border-gray-100 bg-white p-5 shadow-2xl">
              <div className="rounded-[2rem] border border-gray-100 bg-[#fafafa] p-6">
                {/* Top Bar */}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-[#5552D9]">
                      BuildifyX Studio
                    </p>

                    <h2 className="mt-1 text-2xl font-black text-black sm:text-3xl">
                      Digital Product Engine
                    </h2>
                  </div>

                  <motion.div
                    animate={{
                      scale: [1, 1.12, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-4 w-4 shrink-0 rounded-full bg-[#22C55E]"
                  />
                </div>

                {/* Big Animated Card */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mt-8 rounded-[2rem] bg-gradient-to-br from-[#5552D9] via-[#7C5CFF] to-[#FF7A59] p-6 text-white"
                >
                  <p className="font-bold text-white/80">Live Performance</p>

                  <div className="mt-4 flex items-end gap-3">
                    <h3 className="text-6xl font-black sm:text-7xl">98%</h3>
                    <p className="pb-3 font-bold text-white/80">impact</p>
                  </div>

                  <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/20">
                    <motion.div
                      animate={{
                        width: ["20%", "98%", "65%", "98%"],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="h-full rounded-full bg-white"
                    />
                  </div>
                </motion.div>

                {/* Metrics */}
                <div className="mt-5 grid grid-cols-3 gap-3 sm:gap-4">
                  <motion.div
                    whileHover={{ y: -8 }}
                    className="rounded-2xl bg-white p-4 text-black shadow-sm"
                  >
                    <p className="text-2xl font-black sm:text-3xl">50+</p>
                    <p className="mt-1 text-xs font-bold text-black/50">
                      Projects
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -8 }}
                    className="rounded-2xl bg-white p-4 text-black shadow-sm"
                  >
                    <p className="text-2xl font-black sm:text-3xl">7+</p>
                    <p className="mt-1 text-xs font-bold text-black/50">
                      Industries
                    </p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -8 }}
                    className="rounded-2xl bg-white p-4 text-black shadow-sm"
                  >
                    <p className="text-2xl font-black sm:text-3xl">24/7</p>
                    <p className="mt-1 text-xs font-bold text-black/50">
                      Support
                    </p>
                  </motion.div>
                </div>

                {/* Moving Lines */}
                <div className="mt-6 space-y-3">
                  <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-full w-1/2 rounded-full bg-[#38BDF8]"
                    />
                  </div>

                  <div className="h-3 overflow-hidden rounded-full bg-gray-200">
                    <motion.div
                      animate={{ x: ["100%", "-100%"] }}
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="h-full w-1/2 rounded-full bg-[#FF7A59]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Steps */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-lg">
            <p className="text-sm font-bold text-[#5552D9]">#01</p>
            <h4 className="mt-2 text-xl font-black">Plan</h4>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Clear direction before development starts.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-lg">
            <p className="text-sm font-bold text-[#FF7A59]">#02</p>
            <h4 className="mt-2 text-xl font-black">Design</h4>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Modern UI with smooth user experience.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-lg">
            <p className="text-sm font-bold text-[#22C55E]">#03</p>
            <h4 className="mt-2 text-xl font-black">Build</h4>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Responsive, fast, and scalable systems.
            </p>
          </div>

          <div className="rounded-[2rem] border border-gray-100 bg-white p-6 shadow-lg">
            <p className="text-sm font-bold text-[#38BDF8]">#04</p>
            <h4 className="mt-2 text-xl font-black">Grow</h4>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Launch, improve, and support long-term growth.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
