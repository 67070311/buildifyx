"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Product() {
  return (
    <section className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.4em] text-[#a78bfa]">
            Our Product
          </p>

          <h1 className="text-5xl font-black uppercase text-black md:text-7xl">
            FUN PRODUCT
          </h1>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-[#c4b5fd]"></div>
        </motion.div>

        {/* Product Image Clickable */}
        <motion.a
          href="https://humansofbangmod.buildifyx.com/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mx-auto mt-24 block max-w-6xl overflow-hidden rounded-[2.5rem] border border-[#ede9fe] bg-[#faf7ff] p-4 shadow-[0_30px_80px_rgba(167,139,250,0.22)] md:p-6"
        >
          {/* Decoration */}
          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-[#ddd6fe] blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#f3e8ff] blur-3xl"></div>

          <div className="group relative overflow-hidden rounded-[2rem] bg-white">
            <Image
              src="/work/product.png"
              alt="Humans of Bangmod"
              width={1600}
              height={900}
              className="h-auto w-full object-cover transition duration-700 group-hover:scale-105"
              priority
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-500 group-hover:bg-black/20">
              <span className="translate-y-4 rounded-full bg-white px-6 py-3 text-sm font-bold text-black opacity-0 shadow-lg transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                View Project
              </span>
            </div>
          </div>
        </motion.a>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto mt-14 max-w-4xl text-center"
        >
          <h2 className="text-3xl font-black leading-tight text-black md:text-5xl">
            Humans of Bangmod
            <span className="mt-3 block text-[#8b5cf6]">
              พื้นที่ของเรื่องเล่าคนบางมด
            </span>
          </h2>

          <p className="mt-6 text-lg font-semibold tracking-[0.25em] text-gray-400 md:text-xl">
            Chatlok
          </p>
        </motion.div>
      </div>
    </section>
  );
}
