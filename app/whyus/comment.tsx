"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    comment:
      "Working with the team was one of the best decisions we made for our product. Everything from communication to execution felt smooth and professional.",
    rating: 4,
    avatar:
      "https://cdn.imgbin.com/3/12/17/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg",
    name: "Client 1",
    role: "Buildifyx partner",
  },
  {
    comment:
      "They understood our vision quickly and turned it into a polished product. The process was clear, fast, and very easy to follow.",
    rating: 5,
    avatar:
      "https://media.invisioncic.com/i328763/monthly_2019_03/persona-database_admin.png.18543d18b113f683d1f9af84ec897e00.png",
    name: "Client 2",
    role: "Buildifyx partner",
  },
  {
    comment:
      "Amazing experience from start to finish. The team delivered clean design, solid development, and helpful suggestions along the way.",
    rating: 5,
    avatar:
      "https://www.socialdiscoverycorp.com/hs-fs/hubfs/Archive/SDC__Casey-circle.png?height=1386&name=SDC__Casey-circle.png&width=1386",
    name: "Client 3",
    role: "Buildifyx partner",
  },
  {
    comment:
      "Their communication was excellent. We always knew what was happening, and the final result looked even better than expected.",
    rating: 4,
    avatar:
      "https://cdn1.iconfinder.com/data/icons/woman-profile-001/2200/MSI23.00043-512.png",
    name: "Client 4",
    role: "Buildifyx partner",
  },
  {
    comment:
      "A reliable team that really cares about details. They helped us launch with confidence and made the whole project feel simple.",
    rating: 5,
    avatar: "https://icon2.cleanpng.com/ci4/psh/ihi/a4zzebpm3.webp",
    name: "Client 5",
    role: "Buildifyx partner",
  },
];

export default function Comment() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevIndex =
    (activeIndex - 1 + testimonials.length) % testimonials.length;
  const nextIndex = (activeIndex + 1) % testimonials.length;
  const active = testimonials[activeIndex];

  const goPrev = () => setActiveIndex(prevIndex);
  const goNext = () => setActiveIndex(nextIndex);

  return (
    <section className="bg-[#f2f5fb] px-4 py-16 text-[#161b24] sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[32px] bg-white px-5 py-10 shadow-[0_18px_50px_rgba(37,54,84,0.05)] sm:px-8 sm:py-14 lg:px-14 lg:py-16">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8b94a3]">
            Client stories
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#161b24] sm:text-4xl">
            What our clients say about us
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-[930px] sm:mt-14">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous client story"
            className="absolute left-0 top-1/2 z-30 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#e7ebf2] bg-white text-[#202633] shadow-[0_10px_28px_rgba(43,58,87,0.10)] transition hover:scale-105 hover:bg-[#f7f9fd] sm:left-2 lg:-left-2"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next client story"
            className="absolute right-0 top-1/2 z-30 grid h-12 w-12 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#e7ebf2] bg-white text-[#202633] shadow-[0_10px_28px_rgba(43,58,87,0.10)] transition hover:scale-105 hover:bg-[#f7f9fd] sm:right-2 lg:-right-2"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="relative flex min-h-[390px] items-center justify-center overflow-hidden px-10 sm:px-16">
            <button
              type="button"
              onClick={goPrev}
              aria-label={`Show ${testimonials[prevIndex].name}`}
              className="absolute left-[4%] top-1/2 z-10 hidden h-[300px] w-[330px] -translate-y-1/2 -rotate-2 overflow-hidden rounded-[24px] border border-[#edf1f7] bg-[#f7f9fd] text-left opacity-45 shadow-[0_14px_32px_rgba(64,82,119,0.06)] transition hover:opacity-65 md:block"
            >
              <div className="absolute inset-0 bg-white/35 backdrop-blur-[1px]" />
              <div className="relative p-7">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[prevIndex].avatar}
                    alt={testimonials[prevIndex].name}
                    className="h-16 w-16 shrink-0 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="font-semibold">{testimonials[prevIndex].name}</p>
                    <p className="mt-1 text-xs text-[#8d95a4]">
                      {testimonials[prevIndex].role}
                    </p>
                  </div>
                </div>
                <p className="mt-8 text-sm leading-6 text-[#6f7786]">
                  {testimonials[prevIndex].comment}
                </p>
              </div>
            </button>

            <article className="relative z-20 w-full max-w-[390px] rounded-[26px] bg-[#eef2ff] p-7 shadow-[0_20px_50px_rgba(56,76,125,0.10)] sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  src={active.avatar}
                  alt={active.name}
                  className="h-20 w-20 shrink-0 rounded-full object-cover ring-4 ring-white/80"
                  loading="eager"
                  decoding="async"
                />
                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em]">
                    {active.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#929aaa]">{active.role}</p>
                  <p className="mt-1 text-sm text-[#929aaa]">
                    {active.rating}/5 satisfaction
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <p className="text-sm text-[#a0a7b5]">Experience</p>
                <p className="mt-2 text-[15px] leading-6 text-[#252b36]">
                  {active.comment}
                </p>
              </div>

              <div className="mt-6">
                <p className="text-sm text-[#a0a7b5]">What they valued</p>
                <p className="mt-2 text-[15px] leading-6 text-[#252b36]">
                  Clear communication, thoughtful execution and a smooth process from idea to launch.
                </p>
              </div>
            </article>

            <button
              type="button"
              onClick={goNext}
              aria-label={`Show ${testimonials[nextIndex].name}`}
              className="absolute right-[4%] top-1/2 z-10 hidden h-[300px] w-[330px] -translate-y-1/2 rotate-2 overflow-hidden rounded-[24px] border border-[#edf1f7] bg-[#f7f9fd] text-left opacity-45 shadow-[0_14px_32px_rgba(64,82,119,0.06)] transition hover:opacity-65 md:block"
            >
              <div className="absolute inset-0 bg-white/35 backdrop-blur-[1px]" />
              <div className="relative p-7">
                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[nextIndex].avatar}
                    alt={testimonials[nextIndex].name}
                    className="h-16 w-16 shrink-0 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="font-semibold">{testimonials[nextIndex].name}</p>
                    <p className="mt-1 text-xs text-[#8d95a4]">
                      {testimonials[nextIndex].role}
                    </p>
                  </div>
                </div>
                <p className="mt-8 text-sm leading-6 text-[#6f7786]">
                  {testimonials[nextIndex].comment}
                </p>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2.5">
          {testimonials.map((item, index) => (
            <button
              key={item.avatar}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${item.name}`}
              className={`relative h-11 w-11 overflow-hidden rounded-full border-2 bg-white transition duration-200 ${
                index === activeIndex
                  ? "scale-105 border-[#4f75e8] shadow-[0_4px_14px_rgba(79,117,232,0.18)]"
                  : "border-white opacity-80 hover:opacity-100"
              }`}
            >
              <img
                src={item.avatar}
                alt={item.name}
                className="h-full w-full rounded-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </button>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={`${item.avatar}-dot`}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all ${
                index === activeIndex
                  ? "w-6 bg-[#4f75e8]"
                  : "w-2 bg-[#dfe4ee] hover:bg-[#cbd3df]"
              }`}
            />
          ))}
        </div>

        <p className="mx-auto mt-9 max-w-[650px] text-center text-[15px] leading-6 text-[#333946] sm:text-base">
          Every project starts with understanding the people behind it. These are real experiences from clients who trusted us to turn ideas into products that feel clear, useful and ready to grow.
        </p>
      </div>
    </section>
  );
}
