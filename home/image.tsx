"use client";

import { motion } from "framer-motion";
import Link from "next/dist/client/link";
import { useEffect, useState } from "react";

const images = [
  "/home/imagepage/phone-design.png",
  "/home/imagepage/dark-security.png",
  "/home/imagepage/web.png",
  "/home/imagepage/js.png",
  "/home/imagepage/graphic.png",
  "/home/imagepage/tensor.png",
  "/home/imagepage/garph.png",
];

export default function CurvedCarousel() {
  const [current, setCurrent] = useState(0);

  // auto rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="mt-30 w-full overflow-hidden bg-white px-5 py-[100px] font-sans">
      {/* ---------------- heading ---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center px-6 text-center"
      >
        <div className="mb-[70px] text-center">
          <p className="mb-2.5 font-bold text-[#5552D9]">Behind the Designs</p>

          <h1 className="mb-5 text-[clamp(40px,5vw,72px)] font-extrabold leading-[1.1] text-[#111]">
            Crafting Digital Products
          </h1>

          <p className="mx-auto mb-[30px] max-w-[650px] text-[18px] leading-[1.7] text-[#777]">
            We create scalable digital products that combine thoughtful design,
            modern technology, and seamless user experiences for growing
            businesses.
          </p>

          <Link
            href="/mywork"
            className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-[#eee] bg-white px-5 py-3 text-sm font-semibold shadow-[0_6px_16px_rgba(0,0,0,0.06)] transition duration-300 hover:-translate-y-1 sm:px-[22px] sm:py-[14px] sm:text-base"
          >
            See more Projects
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#5552D9] text-xs text-white sm:h-6 sm:w-6 sm:text-sm">
              →
            </span>
          </Link>
        </div>
      </motion.div>

      {/* ---------------- curved slider ---------------- */}
      <div className="relative flex h-[420px] w-full items-center justify-center [perspective:2200px] [transform-style:preserve-3d]">
        {images.map((img, index) => {
          const total = images.length;

          let offset = index - current;

          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;

          // curve positioning
          const x = offset * 150;

          // arc curve
          const y = Math.abs(offset) * 25;

          // rotate toward center
          const rotateY = offset * -28;

          // scale
          const scale = 1 - Math.abs(offset) * 0.12;

          // blur side cards
          const blur = Math.abs(offset) * 1.2;

          // depth
          const z = -Math.abs(offset) * 120;

          return (
            <div
              key={index}
              className="absolute overflow-hidden rounded-[28px] transition-all duration-1000"
              style={{
                width: offset === 0 ? "230px" : "130px",
                height: offset === 0 ? "340px" : "240px",

                transform: `
                  translateX(${x}px)
                  translateY(${y}px)
                  translateZ(${z}px)
                  rotateY(${rotateY}deg)
                  scale(${scale})
                `,

                opacity: Math.abs(offset) > 4 ? 0 : 1,

                zIndex: 100 - Math.abs(offset),

                filter: `blur(${blur}px)`,

                boxShadow:
                  offset === 0
                    ? "0 40px 80px rgba(0,0,0,0.25)"
                    : "0 10px 30px rgba(0,0,0,0.12)",
              }}
            >
              <img src={img} alt="" className="h-full w-full object-cover" />
            </div>
          );
        })}
      </div>

      {/* ---------------- bottom labels ---------------- */}
      <div className="mt-10 flex flex-wrap justify-center gap-[60px]">
        {[
          "Strategy & Planning",
          "Design & Development",
          "Launch & Growth",
          "Ongoing Support",
        ].map((item, i) => (
          <div key={i} className="text-center">
            <p className="mb-2 font-bold text-[#5552D9]">#0{i + 1}</p>

            <p className="text-[14px] text-[#444]">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
