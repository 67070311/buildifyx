"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";

export default function Body() {
  const { language } = useLanguage();

  return (
    <section className="relative -mt-[1px] w-full overflow-hidden bg-[#050507] px-6 pb-20 pt-0 text-white md:pb-28">
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center pt-20 text-center md:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.45em] text-[#A7A5F8] sm:text-sm">
            {language === "th" ? "เกี่ยวกับเรา" : "About Us"}
          </p>

          <h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {language === "th" ? "เราทำอะไร" : "What we do"}
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-sm font-normal leading-7 text-white/45 sm:text-base md:text-lg md:leading-8">
            {language === "th"
              ? "ที่ Buildifyx เราสร้างประสบการณ์ดิจิทัลสมัยใหม่ ตั้งแต่ Branding, Web Development, UI/UX Design ไปจนถึง Creative Strategy สำหรับธุรกิจและสตาร์ทอัพ"
              : "At Buildifyx, we create modern digital experiences through branding, web development, UI/UX design, and creative strategy for businesses and startups."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
          className="relative mt-14 h-[340px] w-full max-w-5xl sm:h-[430px] md:mt-20 md:h-[560px]"
        >
          <Image
            src="/aboutus_pic/Cooking.gif"
            alt={language === "th" ? "สิ่งที่เราทำ" : "What we do"}
            fill
            loading="lazy"
            fetchPriority="low"
            decoding="async"
            unoptimized
            className="object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
