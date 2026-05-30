"use client";

import { motion } from "framer-motion";
import { Star, User, Wrench, BarChart3, Lightbulb } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 overflow-x-clip">
      {/* TOP */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <div className="text-center mb-10 lg:mb-16">
          <p className="text-[#5552D9] font-semibold tracking-widest uppercase text-sm">
            Why Us
          </p>

          <h1 className="text-3xl sm:text-4xl font-semibold mt-3">
            Why Choose Us
          </h1>

          <p className="text-gray-500 mt-5 max-w-3xl mx-auto text-sm sm:text-base">
            Biggest brands in the automotive industry recommend our company as a
            reliable corporate website developer
          </p>
        </div>
      </motion.div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 py-6 sm:py-10 lg:py-12"
      >
        <div className="max-w-7xl mx-auto grid xl:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* LEFT */}
          <div className="relative flex justify-center items-center px-8 sm:px-12 xl:px-0">
            <div className="relative w-full max-w-[360px] sm:max-w-[460px] xl:max-w-[520px] aspect-square border border-gray-200 rounded-full flex items-center justify-center">
              {/* CENTER TEXT */}
              <div className="relative z-10 text-center w-full max-w-[230px] sm:max-w-[300px] xl:max-w-[340px] px-3">
                <h2 className="text-2xl sm:text-3xl xl:text-4xl font-semibold mb-4 text-black">
                  Experience
                </h2>

                <p className="text-gray-500 leading-7 sm:leading-8 xl:leading-9 text-sm sm:text-base xl:text-lg">
                  Many years of work in this field is an excellent indicator
                  that companies trust us and in response, we offer unique
                  solutions.
                </p>
              </div>

              {/* TOP */}
              <div className="absolute top-0 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <CircleIcon icon={<Star />} active />
              </div>

              {/* RIGHT */}
              <div className="absolute top-1/2 right-0 z-20 translate-x-1/2 -translate-y-1/2">
                <CircleIcon icon={<User />} />
              </div>

              {/* LEFT */}
              <div className="absolute top-1/2 left-0 z-20 -translate-x-1/2 -translate-y-1/2">
                <CircleIcon icon={<Wrench />} />
              </div>

              {/* BOTTOM RIGHT */}
              <div className="absolute bottom-[8%] right-[18%] z-20 translate-x-1/2 translate-y-1/2">
                <CircleIcon icon={<Lightbulb />} />
              </div>

              {/* BOTTOM LEFT */}
              <div className="absolute bottom-[8%] left-[18%] z-20 -translate-x-1/2 translate-y-1/2">
                <CircleIcon icon={<BarChart3 />} />
              </div>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-10 lg:gap-14 text-center">
            <div>
              <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#5552D9]">
                30+
              </h1>
              <p className="text-sm sm:text-base mt-2 text-black">
                Happy Client
              </p>
            </div>

            <div>
              <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#5552D9]">
                6+
              </h1>
              <p className="text-sm sm:text-base mt-2 text-black">
                Years of Experience
              </p>
            </div>

            <div>
              <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#5552D9]">
                16+
              </h1>
              <p className="text-sm sm:text-base mt-2 text-black">
                Marketing Customers
              </p>
            </div>

            <div>
              <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#5552D9]">
                116+
              </h1>
              <p className="text-sm sm:text-base mt-2 text-black">
                Successful Projects
              </p>
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
      className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 xl:w-24 xl:h-24
      rounded-full shadow-lg flex items-center justify-center
      ${
        active
          ? "bg-gradient-to-r from-[#5552D9] to-[#a7a5f8] text-white"
          : "bg-white text-[#5552D9]"
      }`}
    >
      <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7">{icon}</div>
    </div>
  );
}
