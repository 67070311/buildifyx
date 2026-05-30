"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const apps = [
  {
    id: 1,
    src: "/home/logoicon/Figma1.png",
    className: "top-[8%] left-[0%] md:left-[4%]",
    rotate: -12,
    duration: 4.5,
    size: "w-[38px] h-[38px] sm:w-[52px] sm:h-[52px] md:w-[74px] md:h-[74px] lg:w-[92px] lg:h-[92px]",
  },

  {
    id: 2,
    src: "/home/logoicon/Discord.png",
    className: "top-[8%] left-[22%] md:left-[28%]",
    rotate: 14,
    duration: 5.2,
    size: "w-[44px] h-[44px] sm:w-[56px] sm:h-[56px] md:w-[76px] md:h-[76px] lg:w-[95px] lg:h-[95px]",
  },

  {
    id: 3,
    src: "/home/logoicon/Meet.png",
    className: "top-[12%] right-[24%] md:right-[34%]",
    rotate: -8,
    duration: 4.8,
    size: "w-[34px] h-[34px] sm:w-[48px] sm:h-[48px] md:w-[66px] md:h-[66px] lg:w-[82px] lg:h-[82px]",
  },

  {
    id: 4,
    src: "/home/logoicon/Next.png",
    className: "top-[10%] right-[-2%] md:right-[4%]",
    rotate: 18,
    duration: 5,
    size: "w-[46px] h-[46px] sm:w-[60px] sm:h-[60px] md:w-[82px] md:h-[82px] lg:w-[100px] lg:h-[100px]",
  },

  {
    id: 5,
    src: "/home/logoicon/Pandas.png",
    className: "bottom-[10%] left-[4%] md:left-[14%]",
    rotate: -15,
    duration: 4.7,
    size: "w-[42px] h-[42px] sm:w-[56px] sm:h-[56px] md:w-[74px] md:h-[74px] lg:w-[90px] lg:h-[90px]",
  },

  {
    id: 6,
    src: "/home/logoicon/Pytorch.png",
    className: "bottom-[8%] left-[42%] md:left-[50%]",
    rotate: 10,
    duration: 5.5,
    size: "w-[48px] h-[48px] sm:w-[62px] sm:h-[62px] md:w-[86px] md:h-[86px] lg:w-[105px] lg:h-[105px]",
  },

  {
    id: 7,
    src: "/home/logoicon/PowerBi.png",
    className: "bottom-[6%] right-[10%] md:right-[14%]",
    rotate: -10,
    duration: 4.9,
    size: "w-[36px] h-[36px] sm:w-[50px] sm:h-[50px] md:w-[68px] md:h-[68px] lg:w-[86px] lg:h-[86px]",
  },

  {
    id: 8,
    src: "/home/logoicon/Claude.png",
    className: "top-[42%] right-[-4%] md:right-[0%]",
    rotate: 20,
    duration: 5.3,
    size: "w-[40px] h-[40px] sm:w-[54px] sm:h-[54px] md:w-[74px] md:h-[74px] lg:w-[92px] lg:h-[92px]",
  },
];

export default function WorkflowProblem() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="
        relative
        z-10
        flex
        flex-col
        items-center
        overflow-hidden
        px-5
        text-center

        sm:px-6
      "
    >
      <section
        className="
          relative
          mt-10
          w-full
          overflow-hidden
          py-24

          md:mt-20
          md:py-40
        "
      >
        {/* ---------------- Side Glow ---------------- */}
        <div className="absolute left-0 top-0 h-full w-6 bg-white/70 blur-2xl md:w-10" />
        <div className="absolute right-0 top-0 h-full w-6 bg-white/70 blur-2xl md:w-10" />

        {/* ---------------- Floating Apps ---------------- */}
        {apps.map((app, index) => (
          <motion.div
            key={app.id}
            initial={{ opacity: 1 }}
            animate={{
              y: [0, -14, 0],
              x: [0, 4, 0],
              rotate: [app.rotate, app.rotate + 3, app.rotate],
            }}
            transition={{
              duration: app.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
            className={`absolute z-20 ${app.className}`}
          >
            <Image
              src={app.src}
              alt="app"
              width={120}
              height={120}
              className={`
                ${app.size}
                object-contain
                drop-shadow-[0_10px_20px_rgba(0,0,0,0.12)]
              `}
            />
          </motion.div>
        ))}

        {/* ---------------- Content ---------------- */}
        <div
          className="
            relative
            z-30
            mx-auto
            max-w-6xl
            px-5
            text-center

            md:px-6
          "
        >
          {/* ---------------- Heading ---------------- */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              mx-auto
              max-w-[320px]
              text-3xl
              font-medium
              leading-tight
              text-black

              sm:max-w-[500px]
              sm:text-4xl

              md:max-w-[720px]
              md:text-5xl

              lg:max-w-[900px]
              lg:text-6xl
            "
          >
            The modern workplace runs on countless tools.
          </motion.h2>

          {/* ---------------- Stats ---------------- */}
          <div
            className="
              mt-14
              grid
              grid-cols-1
              gap-10
              text-center

              md:mt-20
              md:grid-cols-3
              md:gap-12
            "
          >
            <div>
              <p
                className="
                  text-base
                  leading-relaxed
                  text-black

                  sm:text-lg
                  md:text-xl
                "
              >
                Using tools modern <br />
                teams rely on.
              </p>
            </div>

            <div>
              <p
                className="
                  text-base
                  leading-relaxed
                  text-black

                  sm:text-lg
                  md:text-xl
                "
              >
                Flexible across <br />
                multiple platforms
              </p>
            </div>

            <div>
              <p
                className="
                  text-base
                  leading-relaxed
                  text-black

                  sm:text-lg
                  md:text-xl
                "
              >
                Building seamless <br />
                digital workflows
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
