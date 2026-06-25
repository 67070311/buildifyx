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
    <section className="relative overflow-hidden bg-[#050507] py-16 text-white sm:py-20 md:py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#0b0b12_0%,#050507_45%,#050507_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#6D5DFF]/10 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-20 right-0 h-[360px] w-[360px] rounded-full bg-[#A58BFF]/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.32em] text-[#A7A5F8] sm:text-xs">
            Selected Client Commissions
          </p>

          <h1 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-0.055em] text-white sm:text-5xl md:text-6xl">
            Our Work
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/45 sm:text-base sm:leading-7">
            A selection of websites, platforms, dashboards, and digital products
            designed for real businesses.
          </p>

          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-[#A7A5F8] sm:w-20" />
        </motion.div>

        {/* Work Grid */}
        <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-7 sm:gap-y-12 md:mt-16 md:grid-cols-3 md:gap-x-9 md:gap-y-14 xl:grid-cols-4 xl:gap-x-10">
          {works.map((work, index) => (
            <motion.article
              key={work.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: (index % 4) * 0.035,
              }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]">
                <div className="relative aspect-[4/3] overflow-hidden bg-white/[0.04]">
                  <Image
                    src={work.image}
                    alt={work.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-3 sm:p-4">
                  <h2 className="line-clamp-2 text-[11px] font-black uppercase leading-snug tracking-[-0.02em] text-white sm:text-sm">
                    {work.title}
                  </h2>

                  <p className="mt-2 hidden text-xs leading-5 text-white/45 sm:line-clamp-2 sm:block">
                    {work.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
