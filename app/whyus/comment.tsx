"use client";

import { useState } from "react";
import Image from "next/image";
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

  return (
    <section className="w-full bg-[#f8f6ff] px-4 pt-8 pb-10 md:mt-10 md:py-32 overflow-hidden">
      {/* TITLE */}
      <div className="text-center mb-6 md:mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1f1f3d] leading-tight">
          What Our Clients
          <br />
          Say About Us
        </h1>
      </div>

      {/* TESTIMONIAL */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-center">
        {/* LEFT BUTTON */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous testimonial"
          className="absolute left-0 md:left-0 z-20 flex w-10 h-10 md:w-14 md:h-14 rounded-full border border-pink-300 items-center justify-center text-pink-400 bg-white/90 hover:bg-pink-500 hover:text-white transition"
        >
          <ArrowLeft size={20} />
        </button>

        {/* SLIDER WRAPPER */}
        <div
          className="w-full max-w-3xl overflow-hidden px-10 md:px-0"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* SLIDER TRACK */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${activeIndex * 100}%)`,
            }}
          >
            {testimonials.map((item, index) => (
              <div key={index} className="min-w-full px-1">
                {/* CARD */}
                <div className="relative w-full bg-white border border-pink-200 rounded-xl shadow-[0_20px_50px_rgba(255,105,180,0.08)] px-6 md:px-16 py-8 md:py-14 text-center">
                  {/* QUOTE */}
                  <div className="text-6xl md:text-8xl text-pink-100 font-bold leading-none mb-2 md:mb-4">
                    “
                  </div>

                  {/* COMMENT */}
                  <p className="text-gray-500 text-sm md:text-xl leading-7 md:leading-10 mb-6 md:mb-8">
                    {item.comment}
                  </p>

                  {/* STARS */}
                  <div className="flex justify-center gap-2 mb-2">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={18}
                        className={
                          starIndex < item.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  {/* BOTTOM POINTER */}
                  <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-8 h-8 bg-white border-r border-b border-pink-200 rotate-45" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT BUTTON */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next testimonial"
          className="absolute right-0 md:right-0 z-20 flex w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 items-center justify-center text-white shadow-xl hover:scale-105 transition"
        >
          <ArrowRight size={20} />
        </button>
      </div>

      {/* AVATARS */}
      <div className="flex justify-center items-center gap-3 mt-12 md:mt-14">
        {testimonials.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
            className={`rounded-full transition-all duration-300 ${
              activeIndex === index
                ? "scale-110 border-4 border-white shadow-lg"
                : "scale-100 opacity-70 hover:opacity-100"
            }`}
          >
            <Image
              src={item.avatar}
              alt={`avatar ${index + 1}`}
              width={activeIndex === index ? 70 : 50}
              height={activeIndex === index ? 70 : 50}
              className="rounded-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* DOTS */}
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              activeIndex === index ? "w-6 bg-pink-500" : "w-2 bg-pink-200"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
