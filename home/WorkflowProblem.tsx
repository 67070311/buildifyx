"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const apps = [
  {
    id: 1,
    name: "Figma",
    src: "/home/logoicon/Figma1.png",
  },
  {
    id: 2,
    name: "Python",
    type: "python",
  },
  {
    id: 3,
    name: "Meet",
    src: "/home/logoicon/Meet.png",
  },
  {
    id: 4,
    name: "Next.js",
    src: "/home/logoicon/Next.png",
  },
  {
    id: 5,
    name: "Pandas",
    src: "/home/logoicon/Pandas.png",
  },
  {
    id: 6,
    name: "PyTorch",
    src: "/home/logoicon/Pytorch.png",
  },
  {
    id: 7,
    name: "Power BI",
    src: "/home/logoicon/PowerBi.png",
  },
  {
    id: 8,
    name: "Claude",
    src: "/home/logoicon/Claude.png",
  },
];

const workflowPoints = [
  "Using tools modern teams rely on.",
  "Flexible across multiple platforms.",
  "Building seamless digital workflows.",
];

function PythonLogo() {
  return (
    <svg
      viewBox="0 0 256 255"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 object-contain sm:h-12 sm:w-12"
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="python-blue"
          x1="12.959"
          x2="79.639"
          y1="12.039"
          y2="78.201"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#387EB8" />
          <stop offset="1" stopColor="#366994" />
        </linearGradient>

        <linearGradient
          id="python-yellow"
          x1="76.176"
          x2="143.301"
          y1="77.313"
          y2="143.183"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE052" />
          <stop offset="1" stopColor="#FFC331" />
        </linearGradient>
      </defs>

      <path
        fill="url(#python-blue)"
        d="M126.916.072c-64.832 0-60.779 28.115-60.779 28.115l.072 29.128h61.864v8.744H41.631S0 61.34 0 127.005c0 65.667 36.347 63.33 36.347 63.33h21.691v-30.484s-1.17-36.347 35.764-36.347h61.36s34.406.557 34.406-33.285V34.169S194.789.072 126.916.072ZM92.802 19.66a11.12 11.12 0 1 1 0 22.24 11.12 11.12 0 0 1 0-22.24Z"
      />

      <path
        fill="url(#python-yellow)"
        d="M128.757 254.126c64.832 0 60.778-28.115 60.778-28.115l-.071-29.127H127.6v-8.745h86.441s41.632 4.72 41.632-60.946c0-65.667-36.347-63.33-36.347-63.33h-21.692v30.484s1.17 36.347-35.763 36.347h-61.36s-34.407-.557-34.407 33.285v56.05s-5.221 34.097 62.653 34.097Zm34.113-19.588a11.12 11.12 0 1 1 0-22.24 11.12 11.12 0 0 1 0 22.24Z"
      />
    </svg>
  );
}

export default function WorkflowProblem() {
  return (
    <section className="relative z-10 w-full overflow-hidden bg-white px-5 py-24 text-center text-black sm:px-6 md:py-32">
      {/* Soft Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#5552D9]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#FF7A59]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto max-w-3xl"
        >
          <p className="text-sm font-black uppercase tracking-[0.35em] text-[#5552D9]">
            Workflow Tools
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight tracking-[-0.04em] text-black sm:text-5xl md:text-6xl">
            The modern workplace runs on countless tools.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            We connect the platforms your team already uses into cleaner,
            faster, and more reliable digital workflows.
          </p>
        </motion.div>

        {/* Apps Grid */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="mx-auto mt-14 max-w-4xl rounded-[2rem] border border-gray-100 bg-white/80 p-4 shadow-xl shadow-black/5 backdrop-blur sm:p-6 md:mt-16"
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {apps.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="flex flex-col items-center justify-center rounded-2xl border border-gray-100 bg-[#fafafa] px-4 py-5 transition hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm sm:h-16 sm:w-16">
                  {app.type === "python" ? (
                    <PythonLogo />
                  ) : (
                    <Image
                      src={app.src!}
                      alt={app.name}
                      width={64}
                      height={64}
                      className="h-9 w-9 object-contain sm:h-11 sm:w-11"
                    />
                  )}
                </div>

                <p className="mt-3 text-sm font-bold text-gray-700">
                  {app.name}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Points */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
          className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3"
        >
          {workflowPoints.map((point, index) => (
            <div
              key={point}
              className="rounded-[1.5rem] border border-gray-100 bg-white p-6 shadow-lg shadow-black/5"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#5552D9]/10 text-sm font-black text-[#5552D9]">
                {String(index + 1).padStart(2, "0")}
              </div>

              <p className="mt-4 text-base font-semibold leading-7 text-gray-700">
                {point}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
