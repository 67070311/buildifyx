"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Product() {
  return (
    <section className="relative overflow-hidden bg-[#f7fbf8] px-4 py-12 text-slate-900 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-emerald-100/70 blur-[120px]" />

        <div className="absolute -left-32 bottom-[-120px] h-[320px] w-[320px] rounded-full bg-green-100/50 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(22,101,52,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(22,101,52,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-emerald-700">
            Our Product
          </p>

          <h1 className="text-6xl font-semibold tracking-[-0.03em] text-slate-950">
            Fun Product
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-600">
            <span className="font-semibold text-slate-800">Chatlok</span> is a
            storytelling platform for people, places, and memories, designed as
            a warm and simple space where local stories can be explored through
            a modern web experience.
          </p>
        </motion.div>

        {/* Product Card */}
        <motion.a
          href="https://humansofbangmod.buildifyx.com/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="group relative mx-auto mt-8 block w-full max-w-5xl overflow-hidden rounded-[24px] border border-emerald-950/10 bg-white p-2 shadow-[0_20px_60px_rgba(22,101,52,0.10)] sm:mt-10 sm:p-2.5"
        >
          <div className="overflow-hidden rounded-[18px] bg-white">
            {/* Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/10] lg:aspect-[16/8.5]">
              <Image
                src="/work/product.png"
                alt="Humans of Bangmod"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 980px"
                className="object-cover transition duration-700 group-hover:scale-[1.02]"
                priority
              />

              <div className="absolute inset-0 hidden bg-gradient-to-t from-slate-950/70 via-slate-950/15 to-transparent sm:block" />

              {/* Desktop / Tablet Overlay */}
              <div className="absolute inset-x-0 bottom-0 hidden items-end justify-between gap-5 p-5 text-left sm:flex md:p-6">
                <div>
                  <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-emerald-200">
                    Live Project
                  </p>

                  <h2 className="text-xl font-semibold tracking-[-0.025em] text-white sm:text-2xl">
                    Humans of Bangmod
                  </h2>

                  <p className="mt-2 max-w-xl text-xs leading-6 text-white/70 sm:text-sm">
                    A digital space for stories, people, and memories from
                    Bangmod.
                  </p>
                </div>

                <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#eef7ef] px-4 py-2.5 text-xs font-semibold text-emerald-900 transition duration-300 group-hover:-translate-y-1 group-hover:bg-white">
                  View Project
                  <span aria-hidden="true">→</span>
                </span>
              </div>
            </div>

            {/* Mobile Content */}
            <div className="p-4 text-left sm:hidden">
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.24em] text-emerald-700">
                Live Project
              </p>

              <h2 className="text-xl font-semibold tracking-[-0.025em] text-slate-950">
                Humans of Bangmod
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                A digital space for stories, people, and memories from Bangmod.
              </p>

              <span className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#e8f3e9] px-4 py-2.5 text-xs font-semibold text-emerald-900 transition duration-300 group-hover:bg-[#dcebdd]">
                View Project
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  );
}
