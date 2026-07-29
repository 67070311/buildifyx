"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    comment:
      "Working with the team was one of the best decisions we made for our product. Everything from communication to execution felt smooth and professional.",
    rating: 4,
    avatar: "/whyus/1.png",
  },
  {
    comment:
      "They understood our vision quickly and turned it into a polished product. The process was clear, fast, and very easy to follow.",
    rating: 5,
    avatar: "/whyus/2.png",
  },
  {
    comment:
      "Amazing experience from start to finish. The team delivered clean design, solid development, and helpful suggestions along the way.",
    rating: 5,
    avatar: "/whyus/3.png",
  },
  {
    comment:
      "Their communication was excellent. We always knew what was happening, and the final result looked even better than expected.",
    rating: 4,
    avatar: "/whyus/4.png",
  },
  {
    comment:
      "A reliable team that really cares about details. They helped us launch with confidence and made the whole project feel simple.",
    rating: 5,
    avatar: "/whyus/5.png",
  },
];

export default function Comment() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(event.targetTouches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(event.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;
    const minimumSwipeDistance = 50;

    if (distance > minimumSwipeDistance) {
      nextSlide();
    }

    if (distance < -minimumSwipeDistance) {
      prevSlide();
    }
  };

  const getPosition = (index: number) => {
    const total = testimonials.length;
    const difference = (index - activeIndex + total) % total;

    if (difference === 0) return "active";
    if (difference === 1) return "next";
    if (difference === total - 1) return "prev";

    return "hidden";
  };

  const getCardLeft = (position: string) => {
    if (position === "active") return "50%";
    if (position === "prev") return "20%";
    if (position === "next") return "80%";
    return "50%";
  };

  const getCardOpacity = (position: string) => {
    if (position === "active") return 1;
    if (position === "prev" || position === "next") return 0.25;
    return 0;
  };

  const getCardZIndex = (position: string) => {
    if (position === "active") return 20;
    if (position === "prev" || position === "next") return 10;
    return 0;
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#faf9ff] px-4 py-16 text-slate-950 sm:px-6 md:py-24 lg:px-8">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-220px] h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-violet-200/60 blur-[145px]" />

        <div className="absolute -left-36 top-[30%] h-[360px] w-[360px] rounded-full bg-indigo-100/70 blur-[120px]" />

        <div className="absolute -right-36 bottom-[8%] h-[380px] w-[380px] rounded-full bg-purple-100/70 blur-[125px]" />

        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(rgba(109,40,217,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.045) 1px, transparent 1px)",
            backgroundSize: "68px 68px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-px bg-violet-950/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-violet-600 md:text-xs">
            Testimonials
          </p>

          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl md:text-5xl">
            What our clients
            <span className="block bg-gradient-to-r from-violet-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
              say about us
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Real feedback from people who trusted us to design, build, and
            launch meaningful digital products.
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div
          className="relative mx-auto h-[350px] max-w-6xl overflow-visible sm:h-[370px] md:h-[390px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Previous button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-2 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-violet-950/10 bg-white/85 text-violet-600 shadow-[0_12px_35px_rgba(76,29,149,0.1)] backdrop-blur-xl transition hover:-translate-y-[calc(50%+4px)] hover:border-violet-200 hover:bg-white md:flex"
          >
            <ArrowLeft size={18} />
          </button>

          {/* Cards */}
          {testimonials.map((item, index) => {
            const position = getPosition(index);

            return (
              <motion.div
                key={item.avatar}
                animate={{
                  left: getCardLeft(position),
                  x: "-50%",
                  y: "-50%",
                  opacity: getCardOpacity(position),
                  scale: position === "active" ? 1 : 0.94,
                }}
                transition={{
                  duration: 0.75,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  zIndex: getCardZIndex(position),
                }}
                className={`absolute top-1/2 h-full w-full will-change-transform md:w-[58%] ${
                  position === "active"
                    ? "pointer-events-auto block"
                    : position === "prev" || position === "next"
                      ? "pointer-events-none hidden md:block"
                      : "pointer-events-none hidden"
                }`}
              >
                <div className="relative flex h-full min-h-[290px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-violet-950/10 bg-white/82 px-6 py-8 text-center shadow-[0_28px_80px_rgba(76,29,149,0.12)] backdrop-blur-2xl sm:px-9 md:rounded-[34px] md:px-12 md:py-10">
                  <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-violet-200/65 blur-3xl" />

                  <div className="pointer-events-none absolute -bottom-28 -right-24 h-64 w-64 rounded-full bg-indigo-100/75 blur-3xl" />

                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />

                  {/* Comment */}
                  <p className="relative mx-auto max-w-3xl text-base leading-8 text-slate-600 md:text-lg md:leading-9">
                    “{item.comment}”
                  </p>

                  {/* Stars */}
                  <div className="relative mt-6 flex justify-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={17}
                        strokeWidth={1.7}
                        className={
                          starIndex < item.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-200"
                        }
                      />
                    ))}
                  </div>

                  {/* Client */}
                  <div className="relative mt-6 flex items-center justify-center gap-3">
                    <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-white bg-violet-50 shadow-[0_10px_25px_rgba(76,29,149,0.12)]">
                      <Image
                        src={item.avatar}
                        alt={`Client ${index + 1}`}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </div>

                    <div className="text-left">
                      <p className="text-sm font-semibold text-slate-950">
                        Client {index + 1}
                      </p>

                      <p className="text-xs text-slate-400">
                        Buildifyx Partner
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Next button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-2 top-1/2 z-30 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-violet-950/10 bg-white/85 text-violet-600 shadow-[0_12px_35px_rgba(76,29,149,0.1)] backdrop-blur-xl transition hover:-translate-y-[calc(50%+4px)] hover:border-violet-200 hover:bg-white md:flex"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="mt-7 flex justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-950/10 bg-white/85 text-violet-600 shadow-sm backdrop-blur-xl transition active:scale-95"
          >
            <ArrowLeft size={17} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-950/10 bg-white/85 text-violet-600 shadow-sm backdrop-blur-xl transition active:scale-95"
          >
            <ArrowRight size={17} />
          </button>
        </div>

        {/* Avatars */}
        <div className="mt-9 flex items-center justify-center gap-3 md:mt-12">
          {testimonials.map((item, index) => (
            <button
              key={item.avatar}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`relative rounded-full transition-all duration-500 ease-out ${
                activeIndex === index
                  ? "scale-110 opacity-100"
                  : "scale-95 opacity-50 hover:opacity-85"
              }`}
            >
              <span
                className={`absolute inset-0 rounded-full p-[2px] transition duration-500 ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-violet-500 via-indigo-400 to-purple-400"
                    : "bg-violet-950/10"
                }`}
              />

              <span className="relative block rounded-full bg-white p-[3px]">
                <Image
                  src={item.avatar}
                  alt={`Client ${index + 1}`}
                  width={activeIndex === index ? 58 : 46}
                  height={activeIndex === index ? 58 : 46}
                  className="rounded-full object-cover"
                />
              </span>
            </button>
          ))}
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.avatar}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeIndex === index
                  ? "w-8 bg-violet-600"
                  : "w-1.5 bg-violet-200 hover:bg-violet-300"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-9 flex justify-center">
          <Link
            href="/Contact"
            className="rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_35px_rgba(109,40,217,0.2)] transition hover:-translate-y-1 hover:bg-violet-700"
          >
            Start a project with us
          </Link>
        </div>
      </div>
    </section>
  );
}
