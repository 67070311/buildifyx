"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Product() {
  return (
    <section className="relative overflow-hidden bg-[#050507] px-4 py-16 text-white sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,#0b0b12_0%,#050507_45%,#050507_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-[10px] font-normal uppercase tracking-[0.32em] text-[#A7A5F8] sm:mb-4 sm:text-xs sm:tracking-[0.38em]">
            Our Product
          </p>

          <h1 className="text-[2.25rem] font-normal leading-none tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
            Fun Product
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm font-normal leading-6 text-white/50 sm:mt-6 sm:max-w-2xl sm:text-base sm:leading-7">
            <span className="font-medium text-white/75">Chatlok</span> is a
            storytelling platform for people, places, and memories, designed as
            a simple and warm experience where local stories can be explored
            through a modern web interface.
          </p>
        </motion.div>

        {/* Product Card */}
        <motion.a
          href="https://humansofbangmod.buildifyx.com/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 56 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative mx-auto mt-10 block w-full max-w-6xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.055] p-2.5 shadow-[0_24px_90px_rgba(0,0,0,0.35)] sm:mt-14 sm:rounded-[2rem] sm:p-3 md:mt-16 md:rounded-[2.5rem] md:p-5"
        >
          <div className="overflow-hidden rounded-[1.35rem] bg-[#09090d] sm:rounded-[1.6rem] md:rounded-[2rem]">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[16/9]">
              <Image
                src="/work/product.png"
                alt="Humans of Bangmod"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 92vw, 1100px"
                className="object-cover transition duration-700 group-hover:scale-[1.025]"
                priority
              />

              <div className="absolute inset-0 hidden bg-gradient-to-t from-black/75 via-black/20 to-transparent sm:block" />

              {/* Desktop / Tablet Overlay */}
              <div className="absolute bottom-0 left-0 right-0 hidden flex-col items-start gap-5 p-6 text-left sm:flex md:flex-row md:items-end md:justify-between md:p-8 lg:p-10">
                <div>
                  <p className="mb-2 text-[10px] font-normal uppercase tracking-[0.28em] text-[#A7A5F8] md:text-xs">
                    Live Project
                  </p>

                  <h2 className="text-2xl font-normal tracking-[-0.035em] text-white md:text-4xl lg:text-5xl">
                    Humans of Bangmod
                  </h2>

                  <p className="mt-2 max-w-xl text-sm font-normal leading-7 text-white/65 md:text-base">
                    พื้นที่ของเรื่องเล่าคนบางมด
                  </p>
                </div>

                <span className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition duration-300 group-hover:-translate-y-1 md:px-6 md:py-3.5">
                  View Project
                  <span className="text-base">→</span>
                </span>
              </div>
            </div>

            {/* Mobile Content */}
            <div className="p-5 text-left sm:hidden">
              <p className="mb-2 text-[10px] font-normal uppercase tracking-[0.28em] text-[#A7A5F8]">
                Live Project
              </p>

              <h2 className="text-2xl font-normal tracking-[-0.035em] text-white">
                Humans of Bangmod
              </h2>

              <p className="mt-2 text-sm font-normal leading-6 text-white/60">
                พื้นที่ของเรื่องเล่าคนบางมด
              </p>

              <span className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition duration-300 group-hover:-translate-y-1">
                View Project
                <span className="text-base">→</span>
              </span>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
