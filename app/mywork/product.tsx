"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  Compass,
  MapPin,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const features = [
  [BookOpen, "Story-first", "Content feels personal, readable, and easy to explore."],
  [MapPin, "Local identity", "A digital archive built around real people and real places."],
  [Compass, "Easy discovery", "Move naturally between stories, people, and places."],
  [Compass, "Living archive", "A modern web experience that keeps local voices visible."],
];

export default function Product() {
  const { language } = useLanguage();
  const th = language === "th";
  const localizedFeatures = th ? [
    [BookOpen, "เล่าเรื่องเป็นหลัก", "เนื้อหาให้ความรู้สึกเป็นส่วนตัว อ่านง่าย และสำรวจต่อได้ง่าย"],
    [MapPin, "ตัวตนของพื้นที่", "คลังดิจิทัลที่สร้างจากผู้คนและสถานที่จริง"],
    [Compass, "ค้นพบได้ง่าย", "เชื่อมโยงระหว่างเรื่องราว ผู้คน และสถานที่ได้อย่างเป็นธรรมชาติ"],
    [Compass, "คลังที่มีชีวิต", "ประสบการณ์เว็บสมัยใหม่ที่ช่วยให้เสียงของชุมชนยังถูกมองเห็น"],
  ] : features;

  return (
    <section className="relative overflow-hidden bg-white px-4 pb-16 pt-10 sm:px-6 sm:pb-20 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[860px] bg-[radial-gradient(circle_at_50%_8%,rgba(52,199,89,.12),transparent_58%)]" />

      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[38px] border border-[#dfe9e3] bg-[radial-gradient(circle_at_78%_18%,rgba(114,217,154,.13),transparent_31%),linear-gradient(180deg,#fbfdfb_0%,#f2f8f4_58%,#ffffff_100%)] shadow-[0_26px_76px_rgba(38,92,62,.08)]">
        <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .25 }}
            transition={{ duration: .62 }}
            className="relative z-20 mx-auto flex max-w-[900px] flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#34c759]/14 bg-white/86 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#248a3d] shadow-sm">
              {th ? "ผลงาน · 04" : "Our Work · 04"}
            </div>

            <h2 className="mt-6 text-[54px] font-semibold leading-[.92] tracking-[-.07em] text-[#1c1c1e] sm:text-[72px] lg:text-[86px]">
              {th ? "โปรเจกต์สนุก ๆ" : "Fun Product"}
            </h2>

            <p className="mt-5 max-w-[760px] text-[21px] font-medium leading-[1.08] tracking-[-.035em] text-[#4f5f70] sm:text-[28px]">
              {th ? "Chatlok — พื้นที่ดิจิทัลสำหรับเรื่องราว ผู้คน สถานที่ และความทรงจำ" : "Chatlok — a warm digital space for stories, people, places, and memories."}
            </p>

            <p className="mt-4 max-w-[760px] text-sm leading-7 text-[#7d8997] sm:text-[15px]">
              {th ? "อีกด้านที่เป็นกันเองของ Buildifyx ถ่ายทอดเรื่องราวของชุมชนผ่านเว็บสมัยใหม่ที่เรียบง่ายและค้นพบเรื่องราวได้สะดวก" : <>Built as a lighter, more human side of Buildifyx: a storytelling experience that makes local voices easy to discover through a simple modern web product.</>}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34, scale: .98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: .2 }}
            transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-10 max-w-[1120px] sm:mt-12"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[880px] max-w-[94%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#72d99a]/16 blur-[90px]" />
            <div className="relative overflow-hidden rounded-[22px] border border-white bg-white p-2.5 shadow-[0_30px_80px_rgba(45,74,101,.14)] sm:rounded-[30px]">
              <motion.div
                whileHover={{ scale: 1.008 }}
                transition={{ duration: .35 }}
                className="relative aspect-[16/9] overflow-hidden rounded-[16px] bg-[#eef4ef] sm:rounded-[22px]"
              >
                <Image
                  src="/work/product.png"
                  alt="Humans of Bangmod storytelling website"
                  fill
                  sizes="(max-width: 1024px) 92vw, 70vw"
                  className="object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>
          </motion.div>

          <div className="relative z-20 mx-auto mt-8 grid max-w-[1120px] grid-cols-2 gap-3 lg:grid-cols-4">
            {localizedFeatures.map(([Icon, title, desc], index) => {
              const I = Icon as typeof BookOpen;
              return (
                <motion.div
                  key={String(title)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: .06 + index * .06 }}
                  className="group rounded-[18px] border border-[#e1e9e4] bg-white/84 p-3.5 text-left shadow-[0_12px_30px_rgba(49,90,65,.045)] sm:rounded-[20px] sm:p-5 transition hover:-translate-y-1 hover:bg-white"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-[14px] bg-[#34c759]/10 text-[#248a3d]">
                    <I className="h-[19px] w-[19px]" />
                  </div>
                  <p className="mt-4 text-[13px] font-semibold text-[#1c1c1e]">{String(title)}</p>
                  <p className="mt-1.5 text-[11px] leading-5 text-[#8e8e93]">{String(desc)}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="relative z-20 mt-7 flex justify-center">
            <a
              href="https://humansofbangmod.buildifyx.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-[15px] bg-[#248a3d] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(36,138,61,.20)] transition hover:-translate-y-0.5 hover:bg-[#2f9b48]"
            >
              {th ? "ดูโปรเจกต์" : "View project"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
