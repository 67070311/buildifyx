"use client";

import { motion } from "framer-motion";
import {
  Star,
  User,
  Wrench,
  BarChart3,
  Lightbulb,
  Handshake,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-white py-20 px-6">
      {/* TOP */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <div className="text-center mb-20">
          <p className="text-[#5552D9] font-semibold tracking-widest uppercase">
            Why Us
          </p>

          <h1 className="text-4xl font-semibold mt-3">Why Choose Us</h1>

          <p className="text-gray-500 mt-5 max-w-3xl mx-auto">
            Biggest brands in the automotive industry recommend our company as a
            reliable corporate website developer
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center px-6 text-center py-20"
      >
        {/* MAIN */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CIRCLE SECTION */}
          <div className="relative flex justify-center items-center">
            {/* BIG CIRCLE */}
            <div className="w-[500px] h-[500px] border border-gray-200 rounded-full relative flex items-center justify-center">
              {/* CENTER CONTENT */}
              <div className="text-center max-w-xs">
                <h2 className="text-3xl font-semibold mb-6">Experience</h2>

                <p className="text-gray-500 leading-8">
                  Many years of work in this field is an excellent indicator
                  that companies trust us and in response, we offer unique
                  solutions.
                </p>
              </div>

              {/* TOP */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleIcon icon={<Star size={28} />} active />
              </div>

              {/* RIGHT */}
              <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
                <CircleIcon icon={<User size={28} />} />
              </div>

              {/* BOTTOM RIGHT */}
              <div className="absolute bottom-10 right-14">
                <CircleIcon icon={<Lightbulb size={28} />} />
              </div>

              {/* BOTTOM LEFT */}
              <div className="absolute bottom-10 left-14">
                <CircleIcon icon={<BarChart3 size={28} />} />
              </div>

              {/* LEFT */}
              <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2">
                <CircleIcon icon={<Wrench size={28} />} />
              </div>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-14">
            <div className="grid grid-cols-1 md">
              <h1 className="flex justify-center font-semibold text-2xl text-[#5552D9] md:text-6xl">
                30+
              </h1>
              <p className="flex justify-center">Happy Client</p>
            </div>

            <div className="grid grid-cols-1 md">
              <h1 className="flex justify-center font-semibold text-2xl text-[#5552D9] md:text-6xl">
                6+
              </h1>
              <p className="flex justify-center">Years of Experience</p>
            </div>

            <div className="grid grid-cols-1 md">
              <h1 className="flex justify-center font-semibold text-2xl text-[#5552D9] md:text-6xl">
                16+
              </h1>
              <p className="flex justify-center">Marketing Customers</p>
            </div>

            <div className="grid grid-cols-1 md">
              <h1 className="flex justify-center font-semibold text-2xl text-[#5552D9] md:text-6xl">
                116+
              </h1>
              <p className="flex justify-center">Successful Projects</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ICON COMPONENT */
function CircleIcon({
  icon,
  active = false,
}: {
  icon: React.ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`w-24 h-24 rounded-full shadow-lg flex items-center justify-center
      ${
        active
          ? "bg-gradient-to-r from-[#5552D9] to-[#a7a5f8] text-white"
          : "bg-white text-[#5552D9]"
      }`}
    >
      {icon}
    </div>
  );
}

/* STAT CARD */
function StatCard({ number, text }: { number: string; text: string }) {
  return (
    <div>
      <h1 className="text-6xl font-bold text-black">{number}</h1>

      <p className="uppercase text-gray-500 mt-4 tracking-wide leading-7">
        {text}
      </p>
    </div>
  );
}
