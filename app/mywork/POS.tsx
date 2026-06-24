"use client";

import { motion } from "framer-motion";

export default function POS() {
  return (
    <main className="overflow-hidden bg-white text-black">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#5552D9]/10 via-white to-white px-4 pb-16 pt-20 text-center sm:px-6 sm:pb-24 sm:pt-24 lg:pb-28 lg:pt-28">
        <div className="absolute left-[-80px] top-24 h-48 w-48 rounded-full bg-[#5552D9]/10 sm:h-72 sm:w-72" />
        <div className="absolute right-[-90px] top-52 h-56 w-56 rounded-full bg-[#FF7A59]/10 sm:h-80 sm:w-80" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5552D9] text-lg font-black text-white shadow-lg shadow-[#5552D9]/25 sm:h-16 sm:w-16 sm:text-xl"
          >
            POS
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto mb-4 w-fit rounded-full border border-[#5552D9]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-[#5552D9] shadow-sm sm:text-sm"
          >
            Smart Store System
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-5xl text-[42px] font-black leading-[0.95] tracking-[-0.06em] sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Simple POS
            <br />
            No Hardware Needed
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg sm:leading-8"
          >
            A modern POS system for shops, restaurants, cafes, and small
            businesses. Use it on your phone, tablet, or computer without buying
            expensive POS machines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex justify-center"
          >
            <a
              href="https://scansung.app"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#5552D9] px-8 py-4 text-sm font-black text-white shadow-xl shadow-[#5552D9]/25 transition hover:-translate-y-1 hover:bg-[#4643c7] sm:text-base"
            >
              Visit Website
            </a>
          </motion.div>

          {/* 5 Phone Images */}
          <div className="relative mx-auto mt-14 flex max-w-6xl items-end justify-center -space-x-7 sm:mt-20 sm:-space-x-5 md:-space-x-2 lg:space-x-5">
            <motion.div
              initial={{ opacity: 0, y: 90, rotate: -10 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              whileHover={{ y: -14, rotate: -3 }}
              className="relative z-10 w-[23vw] max-w-[210px] min-w-[62px] rounded-[1.2rem] p-1 sm:rounded-[2rem] sm:p-2"
            >
              <img
                src="/work/pos/1.png"
                alt="POS order screen"
                className="h-[190px] w-full rounded-xl object-contain drop-shadow-2xl sm:h-[320px] md:h-[380px] lg:h-[430px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 90, rotate: -6 }}
              animate={{ opacity: 1, y: 18, rotate: -3 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ y: 0, rotate: 0 }}
              className="relative z-20 w-[24vw] max-w-[230px] min-w-[68px] rounded-[1.2rem] p-1 sm:rounded-[2rem] sm:p-2 lg:translate-y-8"
            >
              <img
                src="/work/pos/2.png"
                alt="POS dashboard screen"
                className="h-[205px] w-full rounded-xl object-contain drop-shadow-2xl sm:h-[340px] md:h-[400px] lg:h-[450px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 90, scale: 0.9 }}
              animate={{ opacity: 1, y: -6, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.3 }}
              whileHover={{ y: -20, scale: 1.03 }}
              className="relative z-40 w-[30vw] max-w-[280px] min-w-[86px] rounded-[1.5rem] p-1 sm:rounded-[2.4rem] sm:p-2"
            >
              <img
                src="/work/pos/3.png"
                alt="POS sales screen"
                className="h-[240px] w-full rounded-xl object-contain drop-shadow-2xl sm:h-[390px] md:h-[460px] lg:h-[520px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 90, rotate: 6 }}
              animate={{ opacity: 1, y: 18, rotate: 3 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ y: 0, rotate: 0 }}
              className="relative z-20 w-[24vw] max-w-[230px] min-w-[68px] rounded-[1.2rem] p-1 sm:rounded-[2rem] sm:p-2 lg:translate-y-8"
            >
              <img
                src="/work/pos/4.png"
                alt="POS stock screen"
                className="h-[205px] w-full rounded-xl object-contain drop-shadow-2xl sm:h-[340px] md:h-[400px] lg:h-[450px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 90, rotate: 10 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              whileHover={{ y: -14, rotate: 3 }}
              className="relative z-10 w-[23vw] max-w-[210px] min-w-[62px] rounded-[1.2rem] p-1 sm:rounded-[2rem] sm:p-2"
            >
              <img
                src="/work/pos/5.png"
                alt="POS report screen"
                className="h-[190px] w-full rounded-xl object-contain drop-shadow-2xl sm:h-[320px] md:h-[380px] lg:h-[430px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="relative overflow-hidden bg-gray-50 px-4 py-20 sm:px-6 sm:py-24 lg:py-28">
        <div className="absolute left-[-100px] bottom-[-100px] h-64 w-64 rounded-full bg-[#5552D9]/10" />

        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <p className="font-black uppercase tracking-[0.25em] text-[#5552D9]">
              Works on Any Device
            </p>

            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl lg:text-6xl">
              Run Your Store
              <br />
              From Anywhere
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-gray-600 lg:mx-0">
              Business owners can check orders, sales, stock, and daily reports
              from anywhere. You do not need to stay in front of the store all
              the time.
            </p>

            <div className="mx-auto mt-8 grid max-w-xl gap-4 sm:grid-cols-2 lg:mx-0">
              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white p-5 text-left shadow-lg shadow-black/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#5552D9] font-black text-white">
                  ✓
                </div>
                <p className="font-black">Create orders quickly</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white p-5 text-left shadow-lg shadow-black/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF7A59] font-black text-white">
                  ✓
                </div>
                <p className="font-black">Manage products and stock</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white p-5 text-left shadow-lg shadow-black/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#22C55E] font-black text-white">
                  ✓
                </div>
                <p className="font-black">View sales reports</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-3xl bg-white p-5 text-left shadow-lg shadow-black/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#38BDF8] font-black text-white">
                  ✓
                </div>
                <p className="font-black">No POS machine needed</p>
              </motion.div>
            </div>

            <a
              href="https://scansung.app"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-[#5552D9] px-8 py-4 font-bold text-white shadow-lg shadow-[#5552D9]/25 transition hover:-translate-y-1 hover:bg-[#4643c7]"
            >
              Go to Website
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px]"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-[2.5rem] bg-white p-4 shadow-2xl shadow-black/10"
            >
              <img
                src="/work/pos/hook.png"
                alt="POS mobile screen"
                className="h-[430px] w-full rounded-[2rem] object-contain sm:h-[560px] md:h-[620px]"
              />
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -left-3 top-10 rounded-2xl bg-[#5552D9] px-4 py-3 text-sm font-black text-white shadow-xl sm:-left-10"
            >
              Live Sales
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 bottom-20 rounded-2xl bg-[#FF7A59] px-4 py-3 text-sm font-black text-white shadow-xl sm:-right-10"
            >
              Stock Sync
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#5552D9] px-4 py-20 text-center text-white sm:px-6 sm:py-24 lg:py-28">
        <div className="absolute left-[-120px] top-[-120px] h-72 w-72 rounded-full bg-white/10" />
        <div className="absolute bottom-[-140px] right-[-120px] h-80 w-80 rounded-full bg-white/10" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-4xl"
        >
          <p className="font-black uppercase tracking-[0.25em] text-white/60">
            Ready to Start?
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.05em] sm:text-5xl md:text-6xl">
            Start Using a Better
            <br className="hidden sm:block" /> POS System
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            No machine, no complicated setup, and no high starting cost. Just a
            simple POS system that helps your business work better.
          </p>

          <a
            href="https://scansung.app"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-black text-[#5552D9] shadow-lg transition hover:-translate-y-1"
          >
            Visit Website
          </a>
        </motion.div>
      </section>
    </main>
  );
}
