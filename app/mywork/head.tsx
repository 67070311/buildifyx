"use client";

import { motion } from "framer-motion";

export default function Head() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header Text */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto mb-6 w-fit rounded-full border border-[#5552D9]/20 bg-[#5552D9]/10 px-5 py-2 text-sm font-bold text-[#5552D9]"
          >
            Our Work — Selected Projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl font-black leading-tight tracking-[-0.04em] text-black md:text-7xl"
          >
            Digital Products
            <br />
            We’ve Crafted
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600"
          >
            We design and build modern websites, applications, and digital
            experiences that help brands grow, scale, and connect with their
            audience.
          </motion.p>
        </div>

        {/* Showcase Cards */}
        <div className="mt-24 grid items-center gap-8 lg:grid-cols-[1fr_1.15fr_1fr]">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.3 },
              x: { duration: 0.6, delay: 0.3 },
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-xl"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5552D9] text-xl font-black text-white">
              01
            </div>

            <h3 className="text-2xl font-black">Creative Strategy</h3>

            <p className="mt-4 leading-7 text-gray-600">
              We turn ideas into clear digital direction before design and
              development begin.
            </p>

            <div className="mt-8 rounded-2xl bg-[#FFF3D9] p-5">
              <p className="font-black text-[#D98A00]">Planning First</p>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Every project starts with clear goals, user needs, and business
                direction.
              </p>
            </div>

            <div className="mt-5 rounded-2xl bg-[#EAF4FF] p-5">
              <p className="font-black text-[#2388E8]">Smart Structure</p>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                We organize content and features so users can understand them
                quickly.
              </p>
            </div>
          </motion.div>

          {/* Center Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-[2.5rem] border-[10px] border-black bg-white p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-[#5552D9]">
                  Project Impact
                </p>

                <h2 className="mt-1 text-3xl font-black">Buildifyx Lab</h2>
              </div>

              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-full bg-[#5552D9] px-4 py-2 text-sm font-bold text-white"
              >
                Live
              </motion.div>
            </div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-8 rounded-[2rem] bg-[#5552D9]/10 p-6"
            >
              <p className="font-bold text-[#5552D9]">Design Result</p>

              <h3 className="mt-2 text-6xl font-black text-black">98%</h3>

              <p className="mt-4 leading-7 text-gray-600">
                Better experience, faster performance, and stronger digital
                presence.
              </p>
            </motion.div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-gray-100 bg-[#E9F9F1] p-4"
              >
                <p className="text-3xl font-black text-[#13A56B]">50+</p>
                <p className="mt-1 text-sm text-gray-600">Projects</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-gray-100 bg-[#EAF4FF] p-4"
              >
                <p className="text-3xl font-black text-[#2388E8]">7+</p>
                <p className="mt-1 text-sm text-gray-600">Industries</p>
              </motion.div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-gray-100 bg-[#FFF0EB] p-4"
              >
                <p className="text-3xl font-black text-[#FF7A59]">100%</p>
                <p className="mt-1 text-sm text-gray-600">Responsive</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8 }}
                className="rounded-2xl border border-gray-100 bg-[#F4F0FF] p-4"
              >
                <p className="text-3xl font-black text-[#5552D9]">Fast</p>
                <p className="mt-1 text-sm text-gray-600">Delivery</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, 10, 0],
            }}
            transition={{
              opacity: { duration: 0.6, delay: 0.5 },
              x: { duration: 0.6, delay: 0.5 },
              y: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="rounded-[2rem] border border-gray-100 bg-white p-8 shadow-xl"
          >
            <div className="mb-5 text-2xl text-[#5552D9]">★★★★★</div>

            <h3 className="text-2xl font-black">Trusted Delivery</h3>

            <p className="mt-4 leading-7 text-gray-600">
              Clean design, smooth build, and real business value in every
              project.
            </p>

            <div className="mt-8 rounded-2xl bg-black p-5 text-white">
              <p className="text-sm font-bold text-[#FFCF5A]">Client Focus</p>

              <p className="mt-2 text-xl font-black">
                Clean design. Smooth build. Real business value.
              </p>
            </div>

            <div className="mt-5 rounded-2xl bg-[#E9F9F1] p-5">
              <p className="font-black text-[#13A56B]">Reliable Build</p>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                We focus on performance, usability, and clean development.
              </p>
            </div>
          </motion.div>
        </div>

        {/* New Project Journey Section */}
        <section className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-6xl rounded-[2.5rem] border border-gray-100 bg-white p-8 shadow-2xl md:p-12"
          >
            <div className="text-center">
              <p className="font-bold text-[#5552D9]">How We Build</p>

              <h3 className="mt-3 text-4xl font-black tracking-[-0.04em] md:text-5xl">
                From Idea to Launch
              </h3>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
                We guide each project through a clear process, from planning and
                design to development and launch.
              </p>
            </div>

            <div className="relative mt-14 grid gap-6 md:grid-cols-4">
              <div className="absolute left-0 right-0 top-10 hidden h-[2px] bg-gray-100 md:block" />

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
                className="relative rounded-[2rem] border border-gray-100 bg-[#5552D9]/10 p-6 text-center"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#5552D9] text-2xl font-black text-white"
                >
                  01
                </motion.div>

                <h4 className="text-xl font-black">Discover</h4>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Understand goals, users, business needs, and project
                  direction.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -10 }}
                className="relative rounded-[2rem] border border-gray-100 bg-[#FF7A59]/10 p-6 text-center"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#FF7A59] text-2xl font-black text-white"
                >
                  02
                </motion.div>

                <h4 className="text-xl font-black">Design</h4>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Create modern UI screens with clear structure and smooth user
                  flow.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ y: -10 }}
                className="relative rounded-[2rem] border border-gray-100 bg-[#22C55E]/10 p-6 text-center"
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#22C55E] text-2xl font-black text-white"
                >
                  03
                </motion.div>

                <h4 className="text-xl font-black">Develop</h4>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Build fast, responsive, and clean digital products with
                  reliable code.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ y: -10 }}
                className="relative rounded-[2rem] border border-gray-100 bg-[#38BDF8]/10 p-6 text-center"
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#38BDF8] text-2xl font-black text-white"
                >
                  04
                </motion.div>

                <h4 className="text-xl font-black">Launch</h4>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Test, publish, improve, and help the product grow after
                  launch.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </section>
  );
}
