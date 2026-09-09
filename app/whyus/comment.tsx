"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Flower2,
  Leaf,
  Quote,
  Sparkles,
  Star,
} from "lucide-react";

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

const seedOffsets = ["-rotate-6", "rotate-3 sm:translate-y-3", "-rotate-2 sm:-translate-y-2", "rotate-6 sm:translate-y-4", "-rotate-3"];

export default function Comment() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const active = testimonials[activeIndex];

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="perf-section relative overflow-hidden bg-[#f8f7f1] px-4 py-20 text-[#2d382c] sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_26%,rgba(220,230,210,0.55),transparent_23%),radial-gradient(circle_at_84%_72%,rgba(244,220,207,0.42),transparent_22%)]" />
      <div className="pointer-events-none absolute -left-20 bottom-[-70px] hidden h-72 w-72 opacity-45 lg:block">
        <TestimonialSprig />
      </div>
      <div className="whyus-drift-alt pointer-events-none absolute right-[7%] top-20 hidden h-10 w-10 rounded-full border border-[#d7dfd0] bg-[#f0f4eb] lg:block">
        <Leaf className="m-auto mt-2.5 h-4 w-4 text-[#819578]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.74fr_1.26fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ced8c6] bg-[#fdfcf7] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#63755d]">
              <Flower2 className="h-3.5 w-3.5" />
              Kind words
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#747d70]">
              Good work should leave more than a polished screen. It should make the whole process feel considered, calm, and easy to trust.
            </p>
          </div>

          <h2 className="max-w-4xl font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.04em] sm:text-[52px] lg:text-[64px]">
            What people say after
            <span className="italic text-[#7b9271]"> growing with us.</span>
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#899483]">
            <Sparkles className="h-3.5 w-3.5 text-[#c99272]" />
            Pick a seed to read another note
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {testimonials.map((item, index) => (
              <button
                key={item.avatar}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show testimonial ${index + 1}`}
                className={`group/seed relative h-11 w-11 rounded-full transition-[transform,opacity] duration-300 sm:h-12 sm:w-12 ${seedOffsets[index]} ${
                  activeIndex === index
                    ? "z-10 scale-110 opacity-100"
                    : "opacity-55 hover:scale-105 hover:opacity-90"
                }`}
              >
                <span
                  className={`absolute -inset-1 rounded-full transition-colors duration-300 ${
                    activeIndex === index
                      ? "bg-[#dce7d4]"
                      : "bg-transparent group-hover/seed:bg-[#edf1e9]"
                  }`}
                />
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-[70%_30%_70%_30%] bg-[#e7b79b] opacity-0 transition-opacity duration-300 group-hover/seed:opacity-100" />
                <span className="relative block h-full w-full overflow-hidden rounded-full border-2 border-[#fbfaf5] bg-[#eef2e7] shadow-[0_8px_20px_rgba(55,67,51,0.08)]">
                  <Image
                    src={item.avatar}
                    alt={`Client ${index + 1}`}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </span>
              </button>
            ))}
          </div>
        </div>

        <div
          className="mt-8 grid overflow-hidden rounded-[36px] border border-[#d8ded2] bg-[#fcfbf6] shadow-[0_22px_65px_rgba(55,67,51,0.06)] lg:grid-cols-[0.36fr_0.64fr]"
          onTouchStart={(event) => {
            setTouchEnd(null);
            setTouchStart(event.targetTouches[0].clientX);
          }}
          onTouchMove={(event) => setTouchEnd(event.targetTouches[0].clientX)}
          onTouchEnd={handleTouchEnd}
        >
          <aside className="relative border-b border-[#dfe4da] bg-[#eef2e7] p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <div className="pointer-events-none absolute bottom-0 right-0 h-44 w-44 opacity-35 transition-transform duration-700 lg:group-hover:rotate-3">
              <MiniFlower />
            </div>

            <div className="absolute right-5 top-5 rotate-[5deg] rounded-full border border-[#e7d2c4] bg-[#fff5ed] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9b6d55]">
              pressed note
            </div>

            <div className="relative">
              <Quote className="h-9 w-9 text-[#819678]" strokeWidth={1.5} />
              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#75846f]">
                Client note {String(activeIndex + 1).padStart(2, "0")}
              </p>
              <p className="mt-4 max-w-xs font-serif text-3xl font-medium leading-[1.1] tracking-[-0.03em] text-[#344132]">
                Thoughtful work grows through good relationships.
              </p>

              <div className="mt-10 flex items-center gap-3">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous testimonial"
                  className="grid h-11 w-11 place-items-center rounded-full border border-[#cbd6c4] bg-[#fafbf6] text-[#5f7259] transition hover:-translate-y-0.5 hover:-rotate-3 hover:border-[#aebda7]"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next testimonial"
                  className="grid h-11 w-11 place-items-center rounded-full bg-[#344132] text-white transition hover:-translate-y-0.5 hover:rotate-3 hover:bg-[#485846]"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </aside>

          <div className="relative flex min-h-[430px] flex-col justify-between p-6 sm:p-9 lg:min-h-[520px] lg:p-12">
            <div className="pointer-events-none absolute right-6 top-6 h-20 w-20 opacity-[0.12] sm:h-28 sm:w-28">
              <MiniFlower />
            </div>

            <div key={activeIndex} className="whyus-note-in relative">
              <div className="flex items-center gap-1.5 text-[#d29a77]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className={`h-4 w-4 ${
                      index < active.rating ? "fill-current" : "text-[#e1e4dc]"
                    }`}
                    strokeWidth={1.6}
                  />
                ))}
              </div>

              <blockquote className="mt-8 max-w-4xl font-serif text-[30px] font-medium leading-[1.22] tracking-[-0.025em] text-[#344132] sm:text-[38px] lg:text-[44px]">
                “{active.comment}”
              </blockquote>
            </div>

            <div className="mt-10 border-t border-[#e0e4db] pt-6">
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div key={`person-${activeIndex}`} className="whyus-note-in flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full border border-[#d6ddd0] bg-[#eef2e7]">
                    <Image
                      src={active.avatar}
                      alt={`Client ${activeIndex + 1}`}
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#354233]">
                      Client {activeIndex + 1}
                    </p>
                    <p className="mt-1 text-xs text-[#8a9185]">Buildifyx partner</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {testimonials.map((item, index) => (
                    <button
                      key={item.avatar}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Show testimonial ${index + 1}`}
                      className={`h-2 rounded-full transition-[width,background-color] duration-300 ${
                        activeIndex === index
                          ? "w-8 bg-[#78906e]"
                          : "w-2 bg-[#d4dbce] hover:bg-[#bbc7b4]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-[#dfe4da] pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 text-sm text-[#727c6d]">
            <Leaf className="h-4 w-4 text-[#7d9274]" />
            Have an idea worth growing? We would love to hear it.
          </div>
          <Link
            href="/Contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#2f3b2e] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#455742]"
          >
            Grow something together
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialSprig() {
  return (
    <svg viewBox="0 0 280 280" className="h-full w-full" aria-hidden="true" fill="none">
      <path d="M30 252C78 205 111 154 148 99C173 62 205 36 250 22" stroke="#829778" strokeWidth="3" strokeLinecap="round" />
      <path d="M91 188C59 181 42 157 44 129C77 131 96 151 91 188Z" fill="#dfe7d8" stroke="#829778" strokeWidth="2" />
      <path d="M138 112C111 93 107 64 120 41C149 57 160 82 138 112Z" fill="#edf1e8" stroke="#829778" strokeWidth="2" />
      <path d="M163 78C194 74 219 89 230 116C200 126 174 113 163 78Z" fill="#dfe7d8" stroke="#829778" strokeWidth="2" />
      <circle cx="245" cy="26" r="12" fill="#e2ad8d" />
      <circle cx="245" cy="26" r="5" fill="#b97554" />
    </svg>
  );
}

function MiniFlower() {
  return (
    <svg viewBox="0 0 180 180" className="h-full w-full" aria-hidden="true" fill="none">
      <path d="M87 170C88 128 91 92 101 58" stroke="#849879" strokeWidth="4" strokeLinecap="round" />
      <path d="M91 121C65 104 45 108 32 123C50 143 70 143 91 121Z" fill="#d9e4d2" stroke="#849879" strokeWidth="2" />
      <g transform="translate(106 52)">
        <ellipse cx="0" cy="-20" rx="13" ry="26" fill="#fffaf4" stroke="#d5a489" strokeWidth="2" />
        <ellipse cx="20" cy="-6" rx="13" ry="26" transform="rotate(60 20 -6)" fill="#fffaf4" stroke="#d5a489" strokeWidth="2" />
        <ellipse cx="12" cy="18" rx="13" ry="26" transform="rotate(120 12 18)" fill="#fffaf4" stroke="#d5a489" strokeWidth="2" />
        <ellipse cx="-12" cy="18" rx="13" ry="26" transform="rotate(-120 -12 18)" fill="#fffaf4" stroke="#d5a489" strokeWidth="2" />
        <ellipse cx="-20" cy="-6" rx="13" ry="26" transform="rotate(-60 -20 -6)" fill="#fffaf4" stroke="#d5a489" strokeWidth="2" />
        <circle cx="0" cy="0" r="11" fill="#dda07d" />
      </g>
    </svg>
  );
}
