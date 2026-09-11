"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ArrowUpRight = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <path
      d="M7 17 17 7M8 7h9v9"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <path
      d="m6 12 4 4 8-8"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const phones = [
  {
    src: "/work/pos/1.png",
    alt: "POS order screen",
    wrapper:
      "z-10 w-[20%] translate-x-7 translate-y-7 -rotate-[7deg] opacity-70 sm:translate-x-10",
    delay: 0.04,
  },
  {
    src: "/work/pos/2.png",
    alt: "POS dashboard screen",
    wrapper:
      "z-20 w-[22%] translate-x-3 translate-y-3 -rotate-[3deg] opacity-90 sm:translate-x-5",
    delay: 0.1,
  },
  {
    src: "/work/pos/3.png",
    alt: "POS sales screen",
    wrapper: "z-40 w-[27%]",
    delay: 0.16,
  },
  {
    src: "/work/pos/4.png",
    alt: "POS stock screen",
    wrapper:
      "z-20 w-[22%] -translate-x-3 translate-y-3 rotate-[3deg] opacity-90 sm:-translate-x-5",
    delay: 0.22,
  },
  {
    src: "/work/pos/5.png",
    alt: "POS report screen",
    wrapper:
      "z-10 w-[20%] -translate-x-7 translate-y-7 rotate-[7deg] opacity-70 sm:-translate-x-10",
    delay: 0.28,
  },
];

const benefits = [
  "Works on every device",
  "No hardware required",
  "Cloud-based system",
];

const features = [
  {
    number: "01",
    title: "Create orders faster",
    description:
      "Build orders, calculate totals, and complete sales from any device.",
  },
  {
    number: "02",
    title: "Manage products and stock",
    description:
      "Update inventory and manage products from one simple dashboard.",
  },
  {
    number: "03",
    title: "Track sales performance",
    description:
      "Review sales, orders, and important business data in real time.",
  },
];

export default function POS() {
  const heroRef = useRef<HTMLElement>(null);
  const productRef = useRef<HTMLElement>(null);
  const heroActive = useInView(heroRef, { amount: 0.05 });
  const productActive = useInView(productRef, { amount: 0.05 });

  return (
    <main className="overflow-hidden bg-[#faf9ff] text-slate-950">
      {/* Hero */}
      <section ref={heroRef} className="relative overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              x: [0, 24, 0],
              y: [0, 18, 0],
              scale: [1, 1.04, 1],
            }}
            transition={{
              duration: 12,
              repeat: heroActive ? Infinity : 0,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-[-260px] h-[620px] w-[860px] -translate-x-1/2 rounded-full bg-violet-200/60 blur-[140px]"
          />

          <motion.div
            animate={{
              x: [0, 18, 0],
              y: [0, -14, 0],
            }}
            transition={{
              duration: 10,
              repeat: heroActive ? Infinity : 0,
              ease: "easeInOut",
            }}
            className="absolute -left-40 top-[35%] h-[380px] w-[380px] rounded-full bg-purple-100/70 blur-[120px]"
          />

          <motion.div
            animate={{
              x: [0, -20, 0],
              y: [0, 16, 0],
            }}
            transition={{
              duration: 11,
              repeat: heroActive ? Infinity : 0,
              ease: "easeInOut",
            }}
            className="absolute -right-40 top-[20%] h-[440px] w-[440px] rounded-full bg-indigo-100/60 blur-[130px]"
          />

          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(109,40,217,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.055) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage: "linear-gradient(to bottom, black, transparent 90%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black, transparent 90%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1380px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-14">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-20 mx-auto flex max-w-lg flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left"
            >
              {/* Logo */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.08,
                }}
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[#6557dc] p-2 shadow-[0_16px_40px_rgba(101,87,220,0.24)] sm:h-16 sm:w-16"
              >
                <img
                  src="/work/logo/pos-logo.png"
                  alt="Simple POS logo"
                  className="h-full w-full object-contain"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.12,
                }}
                className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-600 sm:text-xs"
              >
                POS · Stock · Reports
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.18,
                }}
                className="mt-4 max-w-xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-[64px]"
              >
                Run your store
                <span className="mt-1 block text-violet-500">
                  without POS hardware
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: 0.24,
                }}
                className="mt-5 max-w-md text-sm font-normal leading-7 text-slate-600 sm:text-base"
              >
                Take orders, manage products, monitor inventory, and review
                sales from your phone, tablet, or computer.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.3,
                }}
                className="mt-7 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
              >
                <motion.a
                  href="https://www.scansung.app/"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="site-cta-dark group w-full sm:w-auto"
                >
                  Visit website
                  <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <ArrowUpRight />
                  </span>
                </motion.a>

                <span className="inline-flex w-full items-center justify-center rounded-full border border-violet-950/10 bg-white/70 px-6 py-3.5 text-xs font-normal text-slate-500 backdrop-blur sm:w-auto">
                  scansung.app
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: 0.36,
                }}
                className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 lg:justify-start"
              >
                {benefits.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      y: 8,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: 0.4 + index * 0.06,
                    }}
                    className="flex items-center gap-2 text-[11px] font-normal text-slate-500"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                      <CheckIcon />
                    </span>

                    <span>{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Phones */}
            <motion.div
              initial={{
                opacity: 0,
                x: 36,
                scale: 0.97,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[760px]"
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 5,
                  repeat: heroActive ? Infinity : 0,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[62%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/35 blur-[95px]"
              />

              <div className="relative flex min-h-[250px] items-end justify-center sm:min-h-[340px] md:min-h-[390px] lg:min-h-[440px]">
                {phones.map((phone, index) => (
                  <motion.div
                    key={phone.src}
                    initial={{
                      opacity: 0,
                      y: 45,
                      scale: 0.95,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: phone.delay,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    whileHover={{
                      y: -8,
                      scale: 1.025,
                    }}
                    className={`relative shrink-0 ${phone.wrapper}`}
                  >
                    <motion.img
                      src={phone.src}
                      alt={phone.alt}
                      animate={{
                        y: [0, index % 2 === 0 ? -5 : -3, 0],
                      }}
                      transition={{
                        duration: 5.5 + index * 0.35,
                        repeat: heroActive ? Infinity : 0,
                        ease: "easeInOut",
                        delay: index * 0.2,
                      }}
                      className="h-auto w-full object-contain drop-shadow-[0_24px_30px_rgba(76,29,149,0.22)]"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Experience */}
      <section ref={productRef} className="relative overflow-hidden border-t border-violet-950/10 bg-white">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              x: [0, 24, 0],
              scale: [1, 1.06, 1],
            }}
            transition={{
              duration: 11,
              repeat: productActive ? Infinity : 0,
              ease: "easeInOut",
            }}
            className="absolute bottom-[-220px] left-1/2 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-violet-200/50 blur-[130px]"
          />

          <motion.div
            animate={{
              x: [0, -18, 0],
              y: [0, 16, 0],
            }}
            transition={{
              duration: 10,
              repeat: productActive ? Infinity : 0,
              ease: "easeInOut",
            }}
            className="absolute -right-36 top-20 h-[320px] w-[320px] rounded-full bg-purple-100/70 blur-[110px]"
          />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-14">
            {/* Features */}
            <motion.div
              initial={{
                opacity: 0,
                x: -24,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto flex max-w-md flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-violet-600 sm:text-xs">
                Product Experience
              </p>

              <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-4xl">
                Everything your store needs
                <span className="mt-1 block text-violet-500">
                  in one simple platform
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm font-normal leading-7 text-slate-500 sm:text-base">
                A clear interface designed to reduce unnecessary steps and work
                smoothly across mobile and desktop.
              </p>

              <div className="mt-7 w-full divide-y divide-violet-950/10 border-y border-violet-950/10 text-left">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.number}
                    initial={{
                      opacity: 0,
                      y: 16,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.4,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.08,
                    }}
                    className="grid grid-cols-[32px_1fr] gap-3 py-4"
                  >
                    <span className="pt-0.5 text-[11px] font-medium text-violet-500">
                      {feature.number}
                    </span>

                    <div>
                      <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                        {feature.title}
                      </h3>

                      <p className="mt-1.5 text-xs font-normal leading-5 text-slate-500 sm:text-sm sm:leading-6">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Product image */}
            <motion.div
              initial={{
                opacity: 0,
                y: 28,
                scale: 0.98,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -5,
              }}
              className="relative overflow-hidden rounded-[24px] border border-violet-950/10 bg-[#f7f5ff] p-4 shadow-[0_28px_70px_rgba(76,29,149,0.10)] sm:rounded-[28px] sm:p-6"
            >
              <div className="pointer-events-none absolute inset-0">
                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.65, 1, 0.65],
                  }}
                  transition={{
                    duration: 5,
                    repeat: productActive ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                  className="absolute left-1/2 top-1/2 h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/35 blur-[85px]"
                />

                <div
                  className="absolute inset-0 opacity-40"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(109,40,217,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.055) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                  }}
                />
              </div>

              <div className="relative flex min-h-[320px] items-center justify-center sm:min-h-[420px] lg:min-h-[470px]">
                <motion.img
                  src="/work/pos/hook.png"
                  alt="Simple POS mobile interface"
                  whileHover={{
                    scale: 1.025,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="max-h-[300px] w-auto max-w-full object-contain drop-shadow-[0_28px_45px_rgba(76,29,149,0.22)] sm:max-h-[395px] lg:max-h-[440px]"
                />
              </div>

              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[8px] font-medium uppercase tracking-[0.2em] text-violet-950/30 sm:left-5 sm:translate-x-0">
                Mobile interface
              </span>

              <span className="absolute right-1/2 top-4 translate-x-1/2 text-[8px] font-medium uppercase tracking-[0.2em] text-violet-950/30 sm:right-5 sm:translate-x-0">
                Simple POS
              </span>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
