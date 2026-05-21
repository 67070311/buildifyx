"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Seeourwork() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center px-6 py-24 text-center"
      >
        <div>
          <h1 className="text-4xl mt-0 font-semibold">Explore our work</h1>
        </div>

        {/* Content */}
        <section className="mt-12 grid items-center gap-10 md:grid-cols-3">
          {/* left image */}
          <div className="flex justify-center">
            <Image
              src="/aboutus_pic/about_us2.gif"
              alt="Our Work 1"
              width={400}
              height={300}
            />
          </div>

          {/* CENTER BUTTON */}
          <div className="flex justify-center">
            <button className="rounded-full bg-[#5552D9] px-10 py-4 text-lg text-white transition hover:bg-[#2E2C91]">
              See our work
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <Image
              src="/aboutus_pic/about_us.gif"
              alt="Our Work 2"
              width={400}
              height={300}
            />
          </div>
        </section>
      </motion.div>
    </>
  );
}
