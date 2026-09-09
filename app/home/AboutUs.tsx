"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function AboutUs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isActive = useInView(sectionRef, { amount: 0.08 });
  return (
    <section
      ref={sectionRef}
      className="perf-section relative overflow-hidden border-y border-[#151433]/10 bg-[#fffdf7] px-5 py-16 text-[#151433] sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={
            isActive
              ? { x: [0, 24, 0], y: [0, 18, 0], scale: [1, 1.05, 1] }
              : { x: 0, y: 0, scale: 1 }
          }
          transition={{
            duration: isActive ? 12 : 0,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-10 h-[380px] w-[380px]"
        >
          <div className="absolute inset-0 rounded-full bg-[#ffb9d9]/30 blur-[120px]" />
        </motion.div>

        <motion.div
          animate={
            isActive
              ? { x: [0, -22, 0], y: [0, 16, 0], scale: [1, 1.06, 1] }
              : { x: 0, y: 0, scale: 1 }
          }
          transition={{
            duration: isActive ? 11 : 0,
            repeat: isActive ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-20 h-[420px] w-[420px]"
        >
          <div className="absolute inset-0 rounded-full bg-[#9edfff]/35 blur-[130px]" />
        </motion.div>

        <div className="absolute bottom-[-220px] left-1/2 h-[440px] w-[650px] -translate-x-1/2 rounded-full bg-[#ffd22e]/25 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.22]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(21,20,51,0.28) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "linear-gradient(to bottom, black, transparent 92%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black, transparent 92%)",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Left Content */}
        <motion.div
          initial={{
            opacity: 0,
            x: -40,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="mx-auto flex max-w-xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left"
        >
          {/* Small Title */}
          <motion.div
            initial={{
              opacity: 0,
              y: 12,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.08,
            }}
            viewport={{ once: true }}
            className="mb-5 rounded-full border border-[#151433]/10 bg-white/75 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#2458ff] shadow-[0_10px_30px_rgba(21,20,51,0.07)] backdrop-blur-xl sm:text-[11px]"
          >
            About Us
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.14,
            }}
            viewport={{ once: true }}
            className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-[#151433] sm:text-5xl lg:text-6xl"
          >
            Buildifyx is a
            <span className="mt-1 block text-[#2458ff]">software studio</span>
          </motion.h2>

          {/* Paragraphs */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="mt-6 max-w-lg space-y-4 text-sm font-normal leading-7 text-[#151433]/60 sm:mt-7 sm:text-base"
          >
            <p>
              Founded by four students from KMITL with backgrounds in Computer
              Science, Information Technology, and Data Science, we started in
              early 2025 with a strong belief that real problems deserve real
              solutions.
            </p>

            <p>
              From day one, we have focused on delivering projects for real
              clients and building our own SaaS products from the ground up. Not
              just ideas, but products that create actual impact.
            </p>

            <p>
              We design and develop software solutions, from freelance client
              work to our own SaaS platforms.
            </p>
          </motion.div>

          {/* Button */}
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.55,
              delay: 0.28,
            }}
            viewport={{ once: true }}
            className="mt-8"
          >
            <motion.div
              whileHover={{
                y: -4,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <Link
                href="/aboutus"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#151433] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_38px_rgba(21,20,51,0.18)] transition-colors duration-300 hover:bg-[#2458ff]"
              >
                See More
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ffd22e] text-[#151433] transition duration-300 group-hover:rotate-[-8deg] group-hover:bg-white">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={1.9} />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.75,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="relative mx-auto w-full max-w-[620px]"
        >
          {/* Glow */}
          <motion.div
            animate={
              isActive
                ? { scale: [1, 1.08, 1], opacity: [0.65, 1, 0.65] }
                : { scale: 1, opacity: 0.65 }
            }
            transition={{
              duration: isActive ? 5 : 0,
              repeat: isActive ? Infinity : 0,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ffd22e]/30 blur-[95px]"
          />

          {/* Rocket without frame */}
          <motion.div
            whileHover={{
              y: -6,
              rotate: 0.5,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative"
          >
            <div className="relative flex min-h-[300px] items-center justify-center sm:min-h-[420px] lg:min-h-[500px]">
              <motion.div
                animate={
                  isActive
                    ? { y: [0, -8, 0], rotate: [-0.5, 0.5, -0.5] }
                    : { y: 0, rotate: -0.5 }
                }
                transition={{
                  duration: isActive ? 5.8 : 0,
                  repeat: isActive ? Infinity : 0,
                  ease: "easeInOut",
                }}
                className="relative w-full max-w-[500px]"
              >
                <Image
                  src="/home/Rocket.gif"
                  alt="Buildifyx rocket illustration"
                  width={500}
                  height={500}
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                  unoptimized
                  className="h-auto w-full object-contain drop-shadow-[0_24px_40px_rgba(21,20,51,0.18)]"
                />
              </motion.div>
            </div>

            <span className="absolute left-5 top-5 rounded-full border border-[#151433]/10 bg-white/80 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#151433]/45 backdrop-blur">
              Buildifyx Studio
            </span>

            <span className="absolute bottom-5 right-5 rounded-full bg-[#ff5570] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-white shadow-[0_10px_25px_rgba(255,85,112,0.25)]">
              Since 2023
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
