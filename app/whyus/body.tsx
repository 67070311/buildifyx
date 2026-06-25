"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const items = [
  {
    number: "01",
    label: "Digital Product",
    title: "Build products that solve real problems",
    description:
      "We design and develop digital products that solve real problems, scale with confidence, and create meaningful user experiences.",
    image: "/whyus/whyus1.gif",
  },
  {
    number: "02",
    label: "Startup Partner",
    title: "Work like your product partner",
    description:
      "Whether you are validating a new idea or scaling an existing platform, we work as an extension of your team with clear communication and fast execution.",
    image: "/whyus/whyus2.gif",
  },
  {
    number: "03",
    label: "Engineering",
    title: "Strong engineering behind every product",
    description:
      "We build high-performance web and mobile applications with scalable architecture, clean code, and smooth user experiences.",
    image: "/whyus/whyus3.gif",
  },
];

export default function Body() {
  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 py-16 text-white sm:px-6 md:py-24">
      {/* Clean dark background */}
      <div className="pointer-events-none absolute inset-0 bg-[#050507]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-[#11111c] to-[#050507]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 42 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-normal uppercase tracking-[0.35em] text-[#A7A5F8]">
            Our Process
          </p>

          <h1 className="mt-4 text-3xl font-normal leading-tight tracking-[-0.04em] text-white sm:text-4xl md:text-5xl">
            Why teams choose
            <br />
            BuildifyX
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm font-normal leading-7 text-white/45 sm:text-base sm:leading-8">
            We combine strategy, design, and engineering to create digital
            products that feel clear, reliable, and ready to scale.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 space-y-10 md:mt-20 md:space-y-16">
          {items.map((item, index) => {
            const reverseDesktop = index % 2 === 1;

            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 56 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.25 }}
                className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12"
              >
                {/* Text always first on mobile */}
                <div
                  className={`order-1 ${
                    reverseDesktop ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <TextCard item={item} />
                </div>

                {/* Image always second on mobile */}
                <div
                  className={`order-2 ${
                    reverseDesktop ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <ImageCard item={item} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TextCard({ item }: { item: (typeof items)[number] }) {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111114] p-6 sm:p-8 lg:p-10">
      <div className="mb-6 flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-[#5552D9]/20 text-sm font-medium text-[#A7A5F8]">
          {item.number}
        </span>

        <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] font-normal uppercase tracking-[0.24em] text-white/55">
          {item.label}
        </span>
      </div>

      <h2 className="text-2xl font-normal leading-tight tracking-[-0.035em] text-white sm:text-3xl">
        {item.title}
      </h2>

      <p className="mt-5 text-sm font-normal leading-7 text-white/45 sm:text-base sm:leading-8">
        {item.description}
      </p>
    </div>
  );
}

function ImageCard({ item }: { item: (typeof items)[number] }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#111114] p-4 sm:p-6">
      <div className="flex min-h-[260px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-[#050507] sm:min-h-[340px]">
        <Image
          src={item.image}
          alt={item.title}
          width={520}
          height={520}
          className="h-auto w-[240px] object-contain sm:w-[340px] lg:w-[420px]"
        />
      </div>
    </div>
  );
}
