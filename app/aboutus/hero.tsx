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
    <section className="w-full bg-white px-4 py-16 sm:px-6 md:py-24 lg:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-6 rounded-full bg-[#5552D9]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#5552D9]"
        >
          About Us
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="max-w-4xl text-3xl font-black leading-tight text-[#17172f] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          The Skilled Team Building Digital Products At BuildifyX
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 max-w-2xl text-sm font-medium leading-7 text-gray-500 sm:text-base md:text-lg"
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
                className={`group flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-all duration-300 sm:px-5 sm:py-3 ${
                  isActive
                    ? "border-[#5552D9] bg-[#5552D9] text-white shadow-[0_12px_30px_rgba(85,82,217,0.28)]"
                    : "border-[#e9e7ff] bg-white text-[#5552D9] shadow-[0_8px_24px_rgba(0,0,0,0.04)] hover:-translate-y-1 hover:border-[#5552D9] hover:bg-[#5552D9] hover:text-white"
                }`}
              >
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full transition ${
                    isActive
                      ? "bg-white text-[#5552D9]"
                      : "bg-[#5552D9]/10 text-[#5552D9] group-hover:bg-white group-hover:text-[#5552D9]"
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
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mt-12 w-full max-w-4xl rounded-[2rem] border border-[#eceaff] bg-white p-6 text-center shadow-[0_24px_80px_rgba(85,82,217,0.10)] sm:p-8 md:p-10"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#5552D9] text-white shadow-[0_14px_35px_rgba(85,82,217,0.35)]">
            {activeRole.icon}
          </div>

          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#5552D9] sm:text-sm">
            {activeRole.label}
          </p>

          <h2 className="text-2xl font-black text-[#17172f] sm:text-3xl md:text-4xl">
            {activeRole.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-gray-500 sm:text-base md:text-lg md:leading-8">
            {activeRole.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
