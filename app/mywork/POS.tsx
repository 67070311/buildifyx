"use client";

import { motion } from "framer-motion";

export default function POS() {
  const tools = ["POS", "Stock", "Sales", "Menu", "Report", "CRM"];

  const features = [
    "Create orders quickly",
    "Manage products and stock",
    "View daily sales reports",
  ];

  return (
    <main className="overflow-hidden bg-[#050507] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#050507] px-4 pb-16 pt-20 text-center sm:px-6 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-[#5552D9]/20 blur-[160px]" />
          <div className="absolute left-[-120px] top-48 h-80 w-80 rounded-full bg-[#2458FF]/10 blur-[130px]" />
          <div className="absolute right-[-120px] top-60 h-96 w-96 rounded-full bg-[#8B5CF6]/12 blur-[140px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04),transparent_35%,rgba(255,255,255,0.015))]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.45 }}
            className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-[#5552D9] p-3 shadow-[0_18px_50px_rgba(85,82,217,0.4)] sm:h-24 sm:w-24"
          >
            <img
              src="/work/logo/pos-logo.png"
              alt="POS Logo"
              className="h-full w-full object-contain"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-5 w-fit rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-[11px] font-normal uppercase tracking-[0.32em] text-[#A7A5F8] backdrop-blur-xl sm:text-xs"
          >
            Smart Store System
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-5xl text-[38px] font-normal leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Simple POS
            <br />
            No Hardware Needed
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-sm font-normal leading-7 text-white/50 sm:text-base sm:leading-8"
          >
            A modern POS system for shops, restaurants, cafes, and small
            businesses. Use it on your phone, tablet, or computer without buying
            expensive POS machines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mx-auto mt-7 flex w-full max-w-md items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/[0.06] p-1 shadow-[0_20px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            <div className="flex-1 px-4 text-left text-xs text-white/35 sm:text-sm">
              https://www.scansung.app/
            </div>

            <a
              href="https://www.scansung.app/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-gradient-to-r from-[#5552D9] to-[#7C5CFF] px-5 py-3 text-xs font-medium text-white transition hover:opacity-90 sm:px-6 sm:text-sm"
            >
              Visit Website
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.55, delay: 0.28 }}
            className="mt-4 text-xs font-normal text-white/35"
          >
            No hardware required
          </motion.p>

          {/* Phone Showcase */}
          <div className="relative mx-auto mt-14 flex max-w-7xl items-end justify-center -space-x-8 sm:mt-16 sm:-space-x-6 md:-space-x-3 lg:mt-20 lg:space-x-4">
            <motion.div
              initial={{ opacity: 0, y: 80, rotate: -8 }}
              animate={{ opacity: 1, y: 14, rotate: -5 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="relative z-10 w-[24vw] max-w-[210px] min-w-[68px]"
            >
              <img
                src="/work/pos/1.png"
                alt="POS order screen"
                className="h-[190px] w-full rounded-[1.5rem] object-contain drop-shadow-2xl sm:h-[310px] md:h-[370px] lg:h-[430px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80, rotate: -5 }}
              animate={{ opacity: 1, y: 26, rotate: -2.5 }}
              transition={{ duration: 0.7, delay: 0.14 }}
              className="relative z-20 w-[25vw] max-w-[230px] min-w-[74px]"
            >
              <img
                src="/work/pos/2.png"
                alt="POS dashboard screen"
                className="h-[205px] w-full rounded-[1.5rem] object-contain drop-shadow-2xl sm:h-[330px] md:h-[395px] lg:h-[455px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.24 }}
              className="relative z-40 w-[31vw] max-w-[285px] min-w-[90px]"
            >
              <img
                src="/work/pos/3.png"
                alt="POS sales screen"
                className="h-[245px] w-full rounded-[1.75rem] object-contain drop-shadow-2xl sm:h-[390px] md:h-[465px] lg:h-[535px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80, rotate: 5 }}
              animate={{ opacity: 1, y: 26, rotate: 2.5 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="relative z-20 w-[25vw] max-w-[230px] min-w-[74px]"
            >
              <img
                src="/work/pos/4.png"
                alt="POS stock screen"
                className="h-[205px] w-full rounded-[1.5rem] object-contain drop-shadow-2xl sm:h-[330px] md:h-[395px] lg:h-[455px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80, rotate: 8 }}
              animate={{ opacity: 1, y: 14, rotate: 5 }}
              transition={{ duration: 0.7, delay: 0.44 }}
              className="relative z-10 w-[24vw] max-w-[210px] min-w-[68px]"
            >
              <img
                src="/work/pos/5.png"
                alt="POS report screen"
                className="h-[190px] w-full rounded-[1.5rem] object-contain drop-shadow-2xl sm:h-[310px] md:h-[370px] lg:h-[430px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="relative overflow-hidden bg-[#050507] px-4 py-20 text-center text-white sm:px-6 sm:py-24 lg:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5552D9]/20 blur-[160px]" />
          <div className="absolute left-[8%] top-[20%] h-80 w-80 rounded-full bg-[#2458FF]/10 blur-[130px]" />
          <div className="absolute right-[8%] bottom-[10%] h-80 w-80 rounded-full bg-[#8B5CF6]/12 blur-[130px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-4 w-fit rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-normal text-white/50 backdrop-blur-xl"
          >
            Built for daily business
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-[32px] font-normal leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl md:text-5xl"
          >
            Use Pre-Built POS Sections
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-sm font-normal leading-7 text-white/45 sm:text-base"
          >
            Manage orders, products, stock, customers, and reports from one
            simple system. Everything works smoothly on mobile and desktop.
          </motion.p>

          <div className="relative mx-auto mt-16 min-h-[620px] max-w-5xl sm:min-h-[720px]">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -8 }}
              whileInView={{ opacity: 1, x: 0, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="absolute left-0 top-8 hidden w-56 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 text-left shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl md:block"
            >
              <p className="text-xs font-normal text-white/40">Stats</p>

              <div className="mt-4 space-y-3">
                <div className="rounded-[1.5rem] bg-white/[0.07] p-4 text-center">
                  <p className="text-2xl font-medium text-white">50+</p>
                  <p className="mt-1 text-xs text-white/40">Orders tracked</p>
                </div>

                <div className="rounded-[1.5rem] bg-white/[0.07] p-4 text-center">
                  <p className="text-2xl font-medium text-white">100+</p>
                  <p className="mt-1 text-xs text-white/40">Products</p>
                </div>
              </div>
            </motion.div>

            {/* Order Form Card */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: 10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="absolute bottom-24 left-10 hidden w-60 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 text-left shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl md:block"
            >
              <p className="text-xs font-normal text-white/40">Order Form</p>

              <div className="mt-4 space-y-3">
                <div className="h-10 rounded-full bg-white/[0.08]" />
                <div className="h-10 rounded-full bg-white/[0.08]" />
                <div className="h-10 rounded-full bg-white/[0.08]" />
                <div className="h-11 rounded-full bg-gradient-to-r from-[#5552D9] to-[#7C5CFF]" />
              </div>
            </motion.div>

            {/* Center Image */}
            <motion.div
              initial={{ opacity: 0, y: 60, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.18 }}
              className="relative z-20 mx-auto w-full max-w-[330px] sm:max-w-[390px]"
            >
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 shadow-[0_35px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl">
                <img
                  src="/work/pos/hook.png"
                  alt="POS mobile screen"
                  className="h-[520px] w-full rounded-[1.5rem] object-cover sm:h-[640px]"
                />
              </div>
            </motion.div>

            {/* Tools Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="absolute right-0 top-12 hidden w-60 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 text-left shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl md:block"
            >
              <p className="text-xs font-normal text-white/40">Tools</p>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {tools.map((item) => (
                  <div
                    key={item}
                    className="flex h-14 items-center justify-center rounded-[1.25rem] bg-white/[0.08] text-xs font-normal text-white/55"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features Card */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="absolute bottom-20 right-10 hidden w-64 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 text-left shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl md:block"
            >
              <p className="text-xs font-normal text-white/40">Features</p>

              <div className="mt-4 space-y-3">
                {features.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between rounded-[1.25rem] bg-white/[0.08] px-4 py-3 text-xs font-normal text-white/55"
                  >
                    <span>{item}</span>
                    <span>⌄</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
