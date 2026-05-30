"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { name: "Wisdom Topup", image: "/work/logo/wisdom-topup.png" },
  { name: "Ministry of Public Health", image: "/work/logo/health.png" },
  { name: "Friday Online", image: "/work/logo/friday.png" },
  { name: "Betterway", image: "/work/logo/bw.png" },
  { name: "Via Logs", image: "/work/logo/via-logs.png" },
  { name: "Canela", image: "/work/logo/dog.png" },
];

export default function Head() {
  return (
    <section className="relative overflow-hidden bg-[#f7f7f5] py-20">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#d4d3ff] blur-3xl" />
      <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#b5c9ff] blur-3xl" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full border border-black/10 bg-white px-4 py-1 text-sm font-medium shadow-sm"
        >
          Our Work — Selected Projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-5xl font-bold leading-tight text-black md:text-7xl"
        >
          Digital Products
          <br />
          We’ve Crafted
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-gray-600"
        >
          We design and build modern websites, applications, and digital
          experiences that help brands grow and connect with their audience.
        </motion.p>

        <div className="relative mt-20 flex w-full flex-col items-center justify-center md:flex-row">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-0 top-10 hidden w-72 rounded-3xl bg-white p-6 text-left shadow-xl md:block"
          >
            <h3 className="text-xl font-semibold">Creative Strategy</h3>

            <p className="mt-3 text-gray-500">
              From brand direction to user experience, we turn business goals
              into clear digital solutions.
            </p>

            <div className="mt-6">
              <p className="text-3xl font-bold">50+</p>
              <p className="text-sm text-gray-500">Completed Projects</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-20"
          >
            <div className="overflow-hidden rounded-[3rem] border-[10px] border-black bg-white shadow-2xl">
              <div className="h-[650px] w-[320px] bg-white p-6">
                <div className="mb-8">
                  <h2 className="text-2xl font-bold">Our Work</h2>
                  <p className="text-gray-500">Selected case studies</p>
                </div>

                <div className="rounded-3xl bg-gray-100 p-5">
                  <p className="text-gray-500">Project Impact</p>

                  <h1 className="mt-2 text-4xl font-bold">98%</h1>

                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 12,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="mt-6 h-52 rounded-full bg-gradient-to-r from-purple-300 via-blue-300 to-green-300"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-0 top-20 hidden w-72 rounded-3xl bg-white p-6 text-left shadow-xl md:block"
          >
            <div className="mb-3 flex text-yellow-400">★★★★★</div>

            <h3 className="text-2xl font-semibold">Trusted Delivery</h3>

            <p className="mt-3 text-gray-500">
              We combine clean design, smooth performance, and reliable
              development for every project.
            </p>

            <p className="mt-5 font-semibold">Client Feedback</p>
          </motion.div>
        </div>

        <p className="mt-24 text-sm text-gray-500">
          Trusted by teams and brands we’ve worked with
        </p>

        <div className="relative mt-8 w-full overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex min-w-full gap-16 whitespace-nowrap"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex items-center gap-3">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  width={40}
                  height={40}
                  className="object-contain"
                />

                <span className="text-xl font-semibold text-black/80">
                  {logo.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
