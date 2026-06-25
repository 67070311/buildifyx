"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Code2, Bot, Database, Palette } from "lucide-react";

const roles = [
  {
    title: "Full-stack",
    label: "Web Application Development",
    description:
      "We build scalable websites and full-stack applications using modern frontend and backend technologies.",
    icon: <Code2 size={22} />,
  },
  {
    title: "AI Engineer",
    label: "AI Systems & Automation",
    description:
      "We create intelligent systems, AI workflows, and automation tools that help businesses work faster and smarter.",
    icon: <Bot size={22} />,
  },
  {
    title: "Data Engineer",
    label: "Data Pipeline & Analytics",
    description:
      "We design data pipelines, dashboards, and reliable data systems that turn raw information into useful insights.",
    icon: <Database size={22} />,
  },
  {
    title: "UXUI Designer",
    label: "User Experience & Interface",
    description:
      "We design clean, usable, and modern interfaces that make digital products easier and more enjoyable to use.",
    icon: <Palette size={22} />,
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % roles.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  const activeRole = roles[activeIndex];

  return (
    <section className="relative w-full overflow-hidden bg-[#050507] px-4 py-16 text-white sm:px-6 md:py-24 lg:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#5552D9]/25 blur-[150px]" />
        <div className="absolute left-[8%] top-[35%] h-80 w-80 rounded-full bg-[#2458FF]/10 blur-[130px]" />
        <div className="absolute right-[8%] bottom-[8%] h-80 w-80 rounded-full bg-[#8B5CF6]/12 blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_28%,rgba(255,255,255,0.02))]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-6 rounded-full border border-[#8D8BFF]/25 bg-[#8D8BFF]/10 px-5 py-2 text-xs font-medium uppercase tracking-[0.3em] text-[#A7A5F8] shadow-[0_0_40px_rgba(85,82,217,0.25)]"
        >
          About Us
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl text-3xl font-medium leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
        >
          The Skilled Team Building Digital Products At BuildifyX
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-sm font-normal leading-7 text-white/50 sm:text-base md:text-lg md:leading-8"
        >
          We are a software studio founded by young builders from KMITL,
          combining engineering, design, AI, and data to create real products
          for real businesses.
        </motion.p>

        {/* Role Pills */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 flex max-w-full flex-wrap items-center justify-center gap-3"
        >
          {roles.map((role, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={role.title}
                type="button"
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className={`group flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 sm:px-5 sm:py-3 ${
                  isActive
                    ? "border-[#8D8BFF]/50 bg-gradient-to-r from-[#5552D9] to-[#7C5CFF] text-white shadow-[0_18px_45px_rgba(85,82,217,0.35)]"
                    : "border-white/10 bg-white/[0.055] text-white/60 backdrop-blur-xl hover:-translate-y-1 hover:border-[#8D8BFF]/45 hover:bg-[#5552D9]/20 hover:text-white"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                    isActive
                      ? "bg-white text-[#5552D9]"
                      : "bg-white/10 text-white/55 group-hover:bg-white group-hover:text-[#5552D9]"
                  }`}
                >
                  {role.icon}
                </span>

                {role.title}
              </button>
            );
          })}
        </motion.div>

        {/* Active Detail Card */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative mt-12 w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 text-center shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-8 md:p-10"
        >
          {/* Card glow */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(141,139,255,0.20),transparent_42%)]" />

          <div className="relative z-10">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#5552D9] to-[#A7A5F8] text-white shadow-[0_18px_50px_rgba(85,82,217,0.45)]">
              {activeRole.icon}
            </div>

            <p className="mb-3 text-xs font-medium uppercase tracking-[0.28em] text-[#A7A5F8] sm:text-sm">
              {activeRole.label}
            </p>

            <h2 className="text-2xl font-medium text-white sm:text-3xl md:text-4xl">
              {activeRole.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm font-normal leading-7 text-white/50 sm:text-base md:text-lg md:leading-8">
              {activeRole.description}
            </p>

            {/* Progress dots */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {roles.map((role, index) => (
                <button
                  key={role.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-[#A7A5F8]"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Show ${role.title}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
