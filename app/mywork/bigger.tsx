"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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

const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />

    <path
      d="m16.5 16.5 4 4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
    <path
      d="M20.8 5.8a5.2 5.2 0 0 0-7.4 0L12 7.2l-1.4-1.4a5.2 5.2 0 1 0-7.4 7.4L12 22l8.8-8.8a5.2 5.2 0 0 0 0-7.4Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const gallery = [
  {
    src: "/work/bigger/1.png",
    alt: "Bigger marketplace explore page",
    label: "Explore",
  },
  {
    src: "/work/bigger/2.png",
    alt: "Bigger item detail page",
    label: "Item detail",
  },
  {
    src: "/work/bigger/3.png",
    alt: "Bigger exchange offer page",
    label: "Exchange",
  },
];

const previewItems = [
  {
    name: "Nintendo Switch",
    lookingFor: "Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Wireless Earbuds",
    lookingFor: "Smart Watch",
    image:
      "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Robot Vacuum",
    lookingFor: "Bluetooth Speaker",
    image:
      "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Espresso Machine",
    lookingFor: "Coffee Grinder",
    image:
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=900&q=85",
  },
];

const categories = ["All", "Electronics", "Fashion", "Home", "Hobbies"];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Bigger() {
  return (
    <section className="overflow-hidden bg-[#f6fbff] text-slate-950">
      {/* Hero */}
      <div className="relative overflow-hidden">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            animate={{
              x: [0, 28, 0],
              y: [0, 20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-[-260px] h-[620px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-300/30 blur-[130px]"
          />

          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -16, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-40 top-[35%] h-[420px] w-[420px] rounded-full bg-sky-200/45 blur-[120px]"
          />

          <motion.div
            animate={{
              x: [0, -24, 0],
              y: [0, 18, 0],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-48 top-[25%] h-[500px] w-[500px] rounded-full bg-blue-300/30 blur-[130px]"
          />

          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(14,165,233,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(14,165,233,0.09) 1px, transparent 1px)",
              backgroundSize: "68px 68px",
              maskImage: "linear-gradient(to bottom, black, transparent 88%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black, transparent 88%)",
            }}
          />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-24 sm:px-8 sm:pb-20 sm:pt-28 lg:px-12 lg:pb-24 lg:pt-32">
          {/* Top bar */}
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex items-center justify-between border-b border-sky-950/10 pb-4"
          >
            <div className="flex items-center gap-3">
              <motion.span
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-2 rounded-full bg-cyan-500 shadow-[0_0_14px_rgba(6,182,212,0.65)]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                Featured Project
              </span>
            </div>

            <span className="hidden text-xs text-slate-400 sm:block">
              Exchange Marketplace
            </span>
          </motion.div>

          <div className="grid items-center gap-10 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:py-16">
            {/* Left content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative z-10 flex flex-col items-center text-center lg:items-start lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.08,
                }}
                className="relative mb-6 h-14 w-40 sm:mb-8 sm:h-16 sm:w-48"
              >
                <Image
                  src="/logo/bigger-logo.png"
                  alt="Bigger logo"
                  fill
                  priority
                  sizes="192px"
                  className="object-contain object-center lg:object-left"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.12,
                }}
                className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600"
              >
                Swap · Trade · Connect
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.18,
                }}
                className="mt-4 max-w-md text-5xl font-semibold leading-tight tracking-[-0.025em] text-slate-950 sm:text-6xl"
              >
                BIGGER
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.24,
                }}
                className="mt-5 max-w-lg text-sm leading-7 text-slate-600 sm:text-base"
              >
                Bigger is an online exchange marketplace that helps people trade
                items they no longer use for something they actually want.
                Explore listings, publish items, connect with other members, and
                send exchange offers from one platform.
              </motion.p>

              <motion.a
                href="https://biggerx.app"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.3,
                }}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_16px_35px_rgba(6,182,212,0.25)] transition-colors duration-300 hover:bg-cyan-400"
              >
                View website
                <motion.span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight />
                </motion.span>
              </motion.a>
            </motion.div>

            {/* Right website preview */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.96 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{
                duration: 0.75,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[820px]"
            >
              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.75, 1, 0.75],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 h-[75%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[100px]"
              />

              <motion.div
                whileHover={{
                  y: -6,
                  rotateX: 1.5,
                  rotateY: -1.5,
                }}
                transition={{
                  duration: 0.3,
                }}
                style={{
                  transformPerspective: 1200,
                }}
                className="relative rounded-[24px] border border-white bg-white/80 p-2 shadow-[0_40px_90px_rgba(15,87,164,0.17)] backdrop-blur-xl sm:rounded-[30px] sm:p-3"
              >
                <div className="overflow-hidden rounded-[18px] border border-sky-950/10 bg-white sm:rounded-[23px]">
                  {/* Browser header */}
                  <div className="flex h-11 items-center justify-between border-b border-sky-950/10 px-4 sm:h-[52px] sm:px-5">
                    <div className="flex gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-cyan-200" />
                      <span className="h-2 w-2 rounded-full bg-sky-200" />
                      <span className="h-2 w-2 rounded-full bg-blue-200" />
                    </div>

                    <div className="hidden rounded-full bg-slate-100 px-5 py-1.5 text-[9px] text-slate-400 sm:block">
                      biggerx.app/explore
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-500 text-[9px] font-bold text-white"
                    >
                      B
                    </motion.div>
                  </div>

                  <div className="p-3 sm:p-5">
                    {/* Navigation */}
                    <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 text-xs font-bold text-white">
                          B
                        </div>

                        <span className="text-xs font-bold text-slate-900">
                          Bigger
                        </span>
                      </div>

                      <div className="hidden items-center gap-4 text-[9px] text-slate-500 sm:flex">
                        <span className="rounded-full bg-slate-950 px-3 py-1.5 text-white">
                          Explore
                        </span>

                        <span>Group trade</span>
                        <span>Challenge</span>
                        <span>Project</span>
                        <span>Chat</span>
                      </div>

                      <motion.button
                        type="button"
                        whileHover={{
                          y: -2,
                          scale: 1.04,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        className="rounded-full bg-cyan-400 px-3 py-1.5 text-[9px] font-semibold text-slate-950 transition hover:bg-cyan-300"
                      >
                        Login
                      </motion.button>
                    </div>

                    {/* Search */}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.5,
                      }}
                      className="mt-4 rounded-xl border border-slate-200 p-3"
                    >
                      <div className="flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2">
                        <span className="text-slate-400">
                          <SearchIcon />
                        </span>

                        <span className="truncate text-[9px] text-slate-400">
                          Search item, category, or desired trade
                        </span>
                      </div>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {categories.map((category, index) => (
                          <motion.span
                            key={category}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              duration: 0.35,
                              delay: 0.55 + index * 0.05,
                            }}
                            whileHover={{
                              y: -2,
                            }}
                            className={`rounded-full px-3 py-1.5 text-[8px] font-medium ${
                              index === 0
                                ? "bg-slate-950 text-white"
                                : "border border-slate-200 text-slate-500"
                            }`}
                          >
                            {category}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Product cards */}
                    <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
                      {previewItems.map((item, index) => (
                        <motion.article
                          key={item.name}
                          initial={{
                            opacity: 0,
                            y: 20,
                            scale: 0.96,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          transition={{
                            duration: 0.45,
                            delay: 0.7 + index * 0.08,
                          }}
                          whileHover={{
                            y: -5,
                            scale: 1.02,
                          }}
                          className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                        >
                          <div className="relative aspect-[1.35/1] overflow-hidden bg-slate-100">
                            <motion.img
                              src={item.image}
                              alt={item.name}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              whileHover={{
                                scale: 1.08,
                              }}
                              transition={{
                                duration: 0.4,
                              }}
                              className="h-full w-full object-cover"
                            />

                            <div className="absolute inset-x-0 top-0 flex items-start justify-between p-2">
                              <span className="rounded-full bg-slate-950/75 px-2 py-1 text-[7px] text-white backdrop-blur">
                                New
                              </span>

                              <motion.button
                                type="button"
                                aria-label={`Save ${item.name}`}
                                whileHover={{
                                  scale: 1.12,
                                }}
                                whileTap={{
                                  scale: 0.9,
                                }}
                                className="flex h-6 w-6 items-center justify-center rounded-full bg-white/95 text-slate-500 shadow"
                              >
                                <HeartIcon />
                              </motion.button>
                            </div>
                          </div>

                          <div className="p-2.5">
                            <p className="truncate text-[9px] font-bold text-slate-900">
                              {item.name}
                            </p>

                            <div className="mt-2 rounded-lg bg-cyan-50 px-2 py-1.5">
                              <p className="text-[6px] text-cyan-600">
                                Looking for
                              </p>

                              <p className="truncate text-[8px] font-semibold text-cyan-700">
                                {item.lookingFor}
                              </p>
                            </div>
                          </div>
                        </motion.article>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div
        id="bigger-gallery"
        className="scroll-mt-16 border-t border-sky-950/10 bg-white"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={fadeUp}
            transition={{
              duration: 0.6,
            }}
            className="mb-8 flex flex-col items-center gap-4 text-center sm:mb-10 sm:flex-row sm:items-end sm:justify-between sm:text-left"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-600">
                Project Showcase
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-slate-950">
                Bigger website screens
              </h2>
            </div>

            <p className="max-w-sm text-center text-xs leading-6 text-slate-500 sm:text-left sm:text-sm">
              Key Bigger screens covering marketplace discovery, item details,
              and the exchange offer experience.
            </p>
          </motion.div>

          {/* Three horizontal images */}
          <div className="-mx-5 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:overflow-visible lg:px-0">
            <div className="flex min-w-max gap-4 lg:grid lg:min-w-0 lg:grid-cols-3 lg:gap-5">
              {gallery.map((image, index) => (
                <motion.article
                  key={image.src}
                  initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.97,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.25,
                  }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="w-[82vw] shrink-0 sm:w-[70vw] md:w-[55vw] lg:w-auto"
                >
                  <div className="group relative aspect-[16/10] overflow-hidden rounded-[20px] border border-sky-950/10 bg-sky-50 shadow-[0_18px_50px_rgba(15,87,164,0.1)]">
                    <motion.div
                      whileHover={{
                        scale: 1.025,
                      }}
                      transition={{
                        duration: 0.45,
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 1023px) 82vw, 33vw"
                        className="object-cover object-top"
                      />
                    </motion.div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/65 to-transparent" />

                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.2 + index * 0.1,
                      }}
                      className="absolute bottom-0 left-0 flex items-center gap-2 p-4 text-white"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-white/15 text-[8px] backdrop-blur">
                        0{index + 1}
                      </span>

                      <p className="text-xs font-semibold">{image.label}</p>
                    </motion.div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
