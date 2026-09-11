"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Clock3,
  Compass,
  Gamepad2,
  MapPin,
  Play,
  LockKeyhole,
  Shirt,
  Sparkles,
  Star,
} from "lucide-react";
import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const games = [
  {
    id: 1,
    title: "Tiny Jumper",
    description: "Jump, dodge obstacles, and collect every star.",
    href: "/playground?game=tiny-jump",
    category: "Arcade",
    icon: Gamepad2,
    accentIcon: Star,
    image: "/playgroud/gmae-tinyjump.png",
    imageAlt: "Cute jumping arcade game",
    status: "Ready",
    time: "3 min",
    gradient: "from-[#d88725] via-[#f4a73d] to-[#ffc65c]",
    glow: "shadow-[0_24px_70px_rgba(244,167,61,0.22)]",
    available: true,
    isNew: true,
  },
  {
    id: 2,
    title: "Cute Dress Up",
    description: "Mix outfits and create your favorite look.",
    href: "/playground?game=dress",
    category: "Fashion",
    icon: Shirt,
    accentIcon: Sparkles,
    image: "/playgroud/game-dress.png",
    imageAlt: "Cute character dress-up game",
    status: "Ready",
    time: "5 min",
    gradient: "from-[#dc4d91] via-[#ee67a4] to-[#ff82b8]",
    glow: "shadow-[0_24px_70px_rgba(238,103,164,0.22)]",
    available: true,
    isNew: false,
  },
  {
    id: 3,
    title: "Travel Spinner",
    description: "Let the wheel choose your next destination.",
    href: "/playground?game=spin",
    category: "Travel",
    icon: Compass,
    accentIcon: MapPin,
    image: "/playgroud/game-spin.png",
    imageAlt: "Travel destination spinner game",
    status: "Ready",
    time: "2 min",
    gradient: "from-[#3f43dd] via-[#595cef] to-[#6e75ff]",
    glow: "shadow-[0_24px_70px_rgba(85,88,239,0.24)]",
    available: true,
    isNew: false,
  },
  {
    id: 4,
    title: "Memory Match",
    description: "Remember the cards and match every pair.",
    href: "",
    category: "Puzzle",
    icon: Brain,
    accentIcon: Sparkles,
    image: "/playground/memory-match.png",
    imageAlt: "Memory card matching game",
    status: "Coming soon",
    time: "4 min",
    gradient: "from-[#29966f] via-[#43b489] to-[#6dcba4]",
    glow: "shadow-[0_24px_70px_rgba(67,180,137,0.2)]",
    available: false,
    isNew: false,
  },
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function PlaygroundHome() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const gamesRef = useRef<HTMLElement>(null);
  const heroActive = useInView(heroRef, { amount: 0.05 });
  const gamesActive = useInView(gamesRef, { amount: 0.05 });

  const scrollGames = (direction: "left" | "right") => {
    const slider = sliderRef.current;

    if (!slider) return;

    const cardWidth =
      slider.querySelector<HTMLElement>("[data-game-card]")?.offsetWidth ?? 300;

    slider.scrollBy({
      left: direction === "left" ? -(cardWidth + 24) : cardWidth + 24,
      behavior: "smooth",
    });
  };

  const scrollToGames = () => {
    document
      .getElementById("all-games")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09091d] px-5 pb-24 pt-32 text-white sm:px-8 lg:px-12">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{
            x: [0, 28, 0],
            y: [0, 20, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 12,
            repeat: heroActive ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="absolute -left-44 top-20 h-[430px] w-[430px] rounded-full bg-purple-600/20 blur-[150px]"
        />

        <motion.div
          animate={{
            x: [0, -30, 0],
            y: [0, 24, 0],
            scale: [1, 1.07, 1],
          }}
          transition={{
            duration: 13,
            repeat: heroActive ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="absolute -right-40 top-24 h-[450px] w-[450px] rounded-full bg-blue-500/20 blur-[160px]"
        />

        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.45, 0.8, 0.45],
          }}
          transition={{
            duration: 8,
            repeat: heroActive ? Infinity : 0,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-1/2 h-[360px] w-[540px] -translate-x-1/2 rounded-full bg-pink-500/10 blur-[160px]"
        />

        <motion.div
          animate={{
            backgroundPosition: ["0px 0px", "30px 30px"],
          }}
          transition={{
            duration: 14,
            repeat: heroActive ? Infinity : 0,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.65) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <section className="relative z-10 mx-auto max-w-7xl">
        {/* Hero */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          ref={heroRef}
          className="mb-20 grid min-h-[430px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]"
        >
          {/* Hero content */}
          <div className="max-w-3xl">
            <motion.div
              variants={fadeUpVariants}
              whileHover={{
                y: -3,
                scale: 1.02,
              }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65 backdrop-blur-md"
            >
              <motion.span
                animate={{
                  rotate: [0, -8, 8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: heroActive ? Infinity : 0,
                  ease: "easeInOut",
                }}
              >
                <Gamepad2 size={15} />
              </motion.span>
              Buildifyx Playground
            </motion.div>

            <motion.h1
              variants={fadeUpVariants}
              className="text-5xl font-black leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl xl:text-[82px]"
            >
              Small games.
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 7,
                  repeat: heroActive ? Infinity : 0,
                  ease: "linear",
                }}
                className="mt-2 block bg-[linear-gradient(90deg,#fde047,#f472b6,#c084fc,#fde047)] bg-[length:220%_220%] bg-clip-text text-transparent"
              >
                Big little breaks.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              className="mt-7 max-w-2xl text-sm leading-7 text-white/55 sm:text-base lg:text-lg lg:leading-8"
            >
              Take a quick break, choose a game, and enjoy a playful space
              designed for curiosity, creativity, and fun.
            </motion.p>

            <motion.div
              variants={fadeUpVariants}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <motion.button
                type="button"
                onClick={scrollToGames}
                whileHover={{
                  y: -4,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="site-cta-light group"
              >
                Explore games
                <motion.span
                  className="inline-flex"
                  animate={{
                    x: [0, 4, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: heroActive ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight size={17} />
                </motion.span>
              </motion.button>

              <motion.div
                whileHover={{
                  x: 4,
                }}
                className="flex items-center gap-2 text-sm text-white/45"
              >
                <motion.span
                  animate={{
                    rotate: [0, 12, -12, 0],
                    scale: [1, 1.08, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: heroActive ? Infinity : 0,
                    ease: "easeInOut",
                  }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]"
                >
                  <Sparkles size={16} />
                </motion.span>
                Four mini games to explore
              </motion.div>
            </motion.div>
          </div>

          {/* Desktop hero image */}
          <motion.div
            variants={fadeUpVariants}
            className="relative hidden min-h-[420px] items-center justify-center lg:flex"
          >
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.5, 0.85, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: heroActive ? Infinity : 0,
                ease: "easeInOut",
              }}
              className="absolute h-[380px] w-[380px] rounded-full bg-purple-500/20 blur-[110px]"
            />

            <motion.div
              animate={{
                scale: [1.08, 1, 1.08],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 6,
                repeat: heroActive ? Infinity : 0,
                ease: "easeInOut",
              }}
              className="absolute h-[280px] w-[280px] rounded-full bg-blue-400/15 blur-[90px]"
            />

            <motion.div
              animate={{
                y: [0, -12, 0],
                opacity: [0.6, 1, 0.6],
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 2.8,
                repeat: heroActive ? Infinity : 0,
                ease: "easeInOut",
              }}
              className="absolute left-8 top-16 h-3 w-3 rounded-full bg-yellow-300 shadow-[0_0_18px_rgba(253,224,71,0.8)]"
            />

            <motion.div
              animate={{
                y: [0, 10, 0],
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3.4,
                repeat: heroActive ? Infinity : 0,
                ease: "easeInOut",
              }}
              className="absolute right-12 top-12 h-2 w-2 rounded-full bg-pink-400 shadow-[0_0_18px_rgba(244,114,182,0.8)]"
            />

            <motion.div
              animate={{
                x: [0, 10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: heroActive ? Infinity : 0,
                ease: "easeInOut",
              }}
              className="absolute bottom-16 left-20 h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.8)]"
            />

            <motion.div
              animate={{
                y: [0, -12, 0],
                rotate: [-1.5, 1.5, -1.5],
              }}
              transition={{
                duration: 5.5,
                repeat: heroActive ? Infinity : 0,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.04,
                rotate: 1,
              }}
              className="relative z-10 w-full max-w-[520px]"
            >
              <Image
                src="/playgroud/Game (1).gif"
                alt="Buildifyx Playground illustration"
                width={520}
                height={520}
                priority
                unoptimized
                className="h-auto w-full object-contain drop-shadow-[0_35px_70px_rgba(0,0,0,0.35)]"
              />
            </motion.div>
          </motion.div>

          {/* Mobile hero image */}
          <motion.div
            variants={fadeUpVariants}
            className="relative flex min-h-[280px] items-center justify-center lg:hidden"
          >
            <motion.div
              animate={{
                scale: [1, 1.12, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: heroActive ? Infinity : 0,
                ease: "easeInOut",
              }}
              className="absolute h-64 w-64 rounded-full bg-purple-500/20 blur-[90px]"
            />

            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 5,
                repeat: heroActive ? Infinity : 0,
                ease: "easeInOut",
              }}
              className="relative z-10 w-full max-w-[340px]"
            >
              <Image
                src="/playgroud/Game (1).gif"
                alt="Buildifyx Playground illustration"
                width={380}
                height={380}
                priority
                unoptimized
                className="h-auto w-full object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Games */}
        <motion.section
          ref={gamesRef}
          id="all-games"
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="scroll-mt-28"
        >
          <div className="mb-7 flex items-end justify-between gap-5">
            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
              }}
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                Pick your next game
              </p>

              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
                All Games
              </h2>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
              }}
              className="flex items-center gap-3"
            >
              <motion.button
                type="button"
                onClick={() => scrollGames("left")}
                aria-label="Scroll games left"
                whileHover={{
                  scale: 1.08,
                  x: -3,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white transition-colors hover:bg-white hover:text-[#141428]"
              >
                <ArrowLeft size={18} />
              </motion.button>

              <motion.button
                type="button"
                onClick={() => scrollGames("right")}
                aria-label="Scroll games right"
                whileHover={{
                  scale: 1.08,
                  x: 3,
                }}
                whileTap={{
                  scale: 0.94,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#141428] transition-colors hover:bg-white/85"
              >
                <ArrowRight size={18} />
              </motion.button>
            </motion.div>
          </div>

          {/* Horizontal slider */}
          <motion.div
            ref={sliderRef}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-60px",
            }}
            className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto pb-12"
          >
            {games.map((game, index) => {
              const GameIcon = game.icon;
              const AccentIcon = game.accentIcon;

              const card = (
                <motion.article
                  data-game-card
                  variants={cardVariants}
                  whileHover={
                    game.available
                      ? {
                          y: -10,
                          scale: 1.02,
                        }
                      : undefined
                  }
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 20,
                    delay: index * 0.04,
                  }}
                  className={`group relative w-[78vw] max-w-[310px] overflow-hidden rounded-[22px] border border-white/10 bg-[#15152c] ${game.glow} sm:w-[290px] ${
                    game.available ? "hover:border-white/20" : ""
                  }`}
                >
                  {/* Cover image */}
                  <div className="relative aspect-[1.05/1] w-full overflow-hidden bg-[#202044]">
                    {game.id === 4 ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,#34345d_0%,#222244_48%,#15152d_100%)]">
                        <motion.div
                          animate={{
                            y: [0, -7, 0],
                            rotate: [0, -2, 2, 0],
                            scale: [1, 1.04, 1],
                          }}
                          transition={{
                            duration: 3.2,
                            repeat: gamesActive ? Infinity : 0,
                            ease: "easeInOut",
                          }}
                          className="relative flex h-28 w-28 items-center justify-center rounded-[30px] border border-white/15 bg-white/[0.08] text-white/75 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl"
                        >
                          <div className="absolute inset-3 rounded-[22px] border border-white/10" />
                          <LockKeyhole size={50} strokeWidth={1.8} />
                        </motion.div>

                        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.22em] text-white/35">
                          Locked game
                        </div>
                      </div>
                    ) : (
                      <motion.div
                        whileHover={
                          game.available
                            ? {
                                scale: 1.1,
                              }
                            : undefined
                        }
                        transition={{
                          duration: 0.7,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="absolute inset-0"
                      >
                        <Image
                          src={game.image}
                          alt={game.imageAlt}
                          fill
                          sizes="(max-width: 640px) 78vw, 290px"
                          className="object-cover"
                        />
                      </motion.div>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#15152c] via-transparent to-black/5" />

                    {/* Category */}
                    <motion.div
                      whileHover={{
                        scale: 1.04,
                      }}
                      className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-md"
                    >
                      <GameIcon size={12} />
                      {game.category}
                    </motion.div>

                    {game.isNew && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: -8 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.25 }}
                        className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-[#fde047] px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.16em] text-[#17172b] shadow-[0_10px_25px_rgba(253,224,71,0.28)]"
                      >
                        <Sparkles size={11} />
                        New Game
                      </motion.div>
                    )}

                    {/* Duration */}
                    <motion.div
                      animate={{
                        y: [0, -3, 0],
                      }}
                      transition={{
                        duration: 2.5 + index * 0.3,
                        repeat: gamesActive ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                      className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-[#17172b] shadow-lg"
                    >
                      <Clock3 size={12} />
                      {game.time}
                    </motion.div>
                  </div>

                  {/* Card information */}
                  <div
                    className={`relative bg-gradient-to-br px-5 pb-5 pt-4 ${game.gradient}`}
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[#121229]/55" />

                    <div className="relative z-10">
                      <div className="mb-3 flex items-start justify-between gap-4">
                        <div>
                          <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.16em] text-white/45">
                            Mini game #{String(game.id).padStart(2, "0")}
                          </p>

                          <h3 className="text-xl font-black tracking-tight text-white">
                            {game.title}
                          </h3>
                        </div>

                        <motion.span
                          animate={{
                            rotate: [0, 8, -8, 0],
                            y: [0, -3, 0],
                          }}
                          transition={{
                            duration: 3.5 + index * 0.25,
                            repeat: gamesActive ? Infinity : 0,
                            ease: "easeInOut",
                          }}
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white backdrop-blur-md"
                        >
                          <AccentIcon size={17} />
                        </motion.span>
                      </div>

                      <p className="line-clamp-2 min-h-[40px] text-xs leading-5 text-white/60">
                        {game.description}
                      </p>

                      <div className="my-4 h-px bg-white/10" />

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <motion.span
                            whileHover={{
                              rotate: -8,
                              scale: 1.06,
                            }}
                            className="relative flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/10"
                          >
                            <Gamepad2 size={15} />

                            <motion.span
                              animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.7, 1, 0.7],
                              }}
                              transition={{
                                duration: 1.8,
                                repeat: gamesActive ? Infinity : 0,
                                ease: "easeInOut",
                              }}
                              className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#272747] ${
                                game.available
                                  ? "bg-green-400"
                                  : "bg-orange-300"
                              }`}
                            />
                          </motion.span>

                          <div>
                            <p className="text-[9px] uppercase tracking-[0.14em] text-white/35">
                              Status
                            </p>

                            <p className="text-xs font-semibold text-white/80">
                              {game.status}
                            </p>
                          </div>
                        </div>

                        {game.available ? (
                          <motion.span
                            whileHover={{
                              scale: 1.04,
                            }}
                            className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[11px] font-bold text-[#17172b]"
                          >
                            Play
                            <motion.span
                              animate={{
                                x: [0, 3, 0],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: gamesActive ? Infinity : 0,
                                ease: "easeInOut",
                              }}
                            >
                              <Play size={12} fill="currentColor" />
                            </motion.span>
                          </motion.span>
                        ) : (
                          <motion.span
                            animate={{
                              opacity: [0.65, 1, 0.65],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: gamesActive ? Infinity : 0,
                              ease: "easeInOut",
                            }}
                            className="rounded-full border border-white/15 bg-white/10 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-white/70"
                          >
                            Coming soon
                          </motion.span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              );

              if (game.available) {
                return (
                  <Link
                    key={game.id}
                    href={game.href}
                    className="block shrink-0 snap-start"
                  >
                    {card}
                  </Link>
                );
              }

              return (
                <div
                  key={game.id}
                  className="block shrink-0 snap-start"
                  aria-label={`${game.title} is coming soon`}
                >
                  {card}
                </div>
              );
            })}
          </motion.div>
        </motion.section>
      </section>
    </main>
  );
}
