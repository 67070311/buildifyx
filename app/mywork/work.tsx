// mywork/work.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const works = [
  {
    title: "NICE DIVE CLUB",
    image: "/work/work1.png",
    alt: "NICE DIVE CLUB",
    description: "Modern responsive website design for business branding.",
  },
  {
    title: "Better Way (Thailand) Co., Ltd.",
    image: "/work/work2.png",
    alt: "Better Way Thailand",
    description: "UI/UX focused landing page with clean modern layout.",
  },
  {
    title: "FRIDAY ONLINE SHOPPING",
    image: "/work/work3.png",
    alt: "FRIDAY ONLINE SHOPPING",
    description: "E-commerce platform design with marketplace experience.",
  },
  {
    title: "WISDOM TOPUP",
    image: "/work/work4.png",
    alt: "WISDOM TOPUP",
    description: "Top-up service platform with gaming marketplace system.",
  },
  {
    title: "FUSECORP",
    image: "/work/work5.png",
    alt: "FUSECORP",
    description:
      "Corporate website design presenting services, solutions, and brand credibility.",
  },
  {
    title: "MINISTRY OF PUBLIC HEALTH",
    image: "/work/work6edit.png",
    alt: "Ministry of Public Health",
    description:
      "Healthcare management dashboard designed for public health service workflows.",
  },
  {
    title: "DUKIRA",
    image: "/work/work7.png",
    alt: "DUKIRA",
    description:
      "Virtual try-on plugin for online stores, helping customers preview outfits before purchase.",
  },
  {
    title: "CANELA PAWSCAN",
    image: "/work/work8.png",
    alt: "CANELA PAWSCAN",
    description:
      "Dog paw measurement platform for creating custom-fit pet shoes.",
  },
];

export default function Work() {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl font-black uppercase md:text-6xl">MY WORK</h1>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-blue-500" />
        </motion.div>

        {/* Work Grid */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:mt-20 md:grid-cols-2">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index % 2 === 0 ? 0 : 0.1,
              }}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-lg md:bg-transparent md:shadow-none"
            >
              <div className="overflow-hidden rounded-[2rem] shadow-lg">
                <Image
                  src={work.image}
                  alt={work.alt}
                  width={1200}
                  height={700}
                  className="h-auto w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="px-5 py-6 text-center md:px-0 md:pb-0">
                <h2 className="text-2xl font-black uppercase leading-tight md:mt-5 md:text-3xl">
                  {work.title}
                </h2>

                <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base">
                  {work.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
