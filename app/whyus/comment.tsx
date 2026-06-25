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

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    }

    if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  const getPosition = (index: number) => {
    const total = testimonials.length;
    const diff = (index - activeIndex + total) % total;

    if (diff === 0) return "active";
    if (diff === 1) return "next";
    if (diff === total - 1) return "prev";

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
    if (position === "prev" || position === "next") return 0.18;
    return 0;
  };

  const getCardZIndex = (position: string) => {
    if (position === "active") return 20;
    if (position === "prev" || position === "next") return 10;
    return 0;
  };

  return (
    <section className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#160933_0%,#07020F_48%,#000000_100%)] px-4 py-20 text-white md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(142,167,255,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(255,122,89,0.13),transparent_36%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.12)_0%,transparent_45%,rgba(0,0,0,0.72)_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* TITLE */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-16">
          <p className="text-[10px] font-light uppercase tracking-[0.38em] text-white/38 md:text-xs">
            Testimonials
          </p>

          <h1 className="mt-5 text-4xl font-normal leading-[0.98] tracking-[-0.06em] text-white md:text-6xl">
            What Our Clients
            <br />
            <span className="bg-gradient-to-r from-[#8EA7FF] via-[#FF7A59] to-[#38BDF8] bg-clip-text text-transparent">
              Say About Us
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm font-light leading-7 text-white/50 md:text-base">
            Real feedback from people who trusted us to design, build, and
            launch meaningful digital products.
          </p>
        </div>

        {/* TESTIMONIAL */}
        <div
          className="relative mx-auto h-[390px] max-w-6xl overflow-visible md:h-[420px]"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* LEFT BUTTON */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="absolute left-2 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 backdrop-blur-xl transition hover:-translate-y-[calc(50%+4px)] hover:border-white/25 hover:bg-white/12 hover:text-white md:flex"
          >
            <ArrowLeft size={20} />
          </button>

          {/* CARDS */}
          {testimonials.map((item, index) => {
            const position = getPosition(index);

            return (
              <motion.div
                key={index}
                animate={{
                  left: getCardLeft(position),
                  x: "-50%",
                  y: "-50%",
                  opacity: getCardOpacity(position),
                  scale: 1,
                }}
                transition={{
                  duration: 0.95,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  zIndex: getCardZIndex(position),
                }}
                className={`absolute top-1/2 h-full w-full will-change-transform md:w-[56%] ${
                  position === "active"
                    ? "pointer-events-auto block"
                    : position === "prev" || position === "next"
                      ? "pointer-events-none hidden md:block"
                      : "pointer-events-none hidden"
                }`}
              >
                <div className="relative flex h-full min-h-[300px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.065] px-6 py-8 text-center shadow-[0_35px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl md:rounded-[2.6rem] md:px-12 md:py-12">
                  <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[#8EA7FF]/14 blur-3xl" />
                  <div className="pointer-events-none absolute -bottom-28 -right-24 h-64 w-64 rounded-full bg-[#FF7A59]/12 blur-3xl" />

                  {/* COMMENT */}
                  <p className="relative mx-auto max-w-3xl text-base font-light leading-8 text-white/72 md:text-xl md:leading-10">
                    {item.comment}
                  </p>

                  {/* STARS */}
                  <div className="relative mt-7 flex justify-center gap-2">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={18}
                        strokeWidth={1.7}
                        className={
                          starIndex < item.rating
                            ? "fill-[#FACC15] text-[#FACC15]"
                            : "text-white/18"
                        }
                      />
                    ))}
                  </div>

                  <div className="relative mt-6 flex items-center justify-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/15 bg-white/10">
                      <Image
                        src={item.avatar}
                        alt={`avatar ${index + 1}`}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>

                    <div className="text-left">
                      <p className="text-sm font-normal text-white">
                        Client {index + 1}
                      </p>
                      <p className="text-xs font-light text-white/42">
                        Buildifyx Partner
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* RIGHT BUTTON */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="absolute right-2 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 backdrop-blur-xl transition hover:-translate-y-[calc(50%+4px)] hover:border-white/25 hover:bg-white/12 hover:text-white md:flex"
          >
            <ArrowRight size={20} />
          </button>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="mt-8 flex justify-center gap-3 md:hidden">
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 backdrop-blur-xl transition active:scale-95"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] text-white/70 backdrop-blur-xl transition active:scale-95"
          >
            <ArrowRight size={18} />
          </button>
        </div>

        {/* AVATARS */}
        <div className="mt-10 flex items-center justify-center gap-3 md:mt-14">
          {testimonials.map((item, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className={`relative rounded-full transition-all duration-500 ease-out ${
                activeIndex === index
                  ? "scale-110 opacity-100"
                  : "scale-95 opacity-45 hover:opacity-80"
              }`}
            >
              <span
                className={`absolute inset-0 rounded-full transition duration-500 ease-out ${
                  activeIndex === index
                    ? "bg-gradient-to-r from-[#8EA7FF] via-[#FF7A59] to-[#38BDF8] p-[2px]"
                    : "bg-white/10 p-[1px]"
                }`}
              />

              <span className="relative block rounded-full bg-black p-[3px]">
                <Image
                  src={item.avatar}
                  alt={`avatar ${index + 1}`}
                  width={activeIndex === index ? 62 : 48}
                  height={activeIndex === index ? 62 : 48}
                  className="rounded-full object-cover"
                />
              </span>
            </button>
          ))}
        </div>

        {/* DOTS */}
        <div className="mt-7 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ease-out ${
                activeIndex === index
                  ? "w-8 bg-white"
                  : "w-1.5 bg-white/22 hover:bg-white/45"
              }`}
            />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/Contact"
            className="rounded-full border border-white/15 bg-white/[0.06] px-7 py-3 text-sm font-light text-white/75 backdrop-blur-xl transition hover:-translate-y-1 hover:border-white/35 hover:bg-white/10 hover:text-white"
          >
            Start a project with us
          </Link>
        </div>
      </div>
    </section>
  );
}
