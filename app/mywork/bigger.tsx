"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  HeartHandshake,
  MessageCircle,
  Repeat2,
  Trophy,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const showcase = [
  ["/work/bigger/1.png", "Explore"],
  ["/work/bigger/2.png", "Item detail"],
  ["/work/bigger/3.png", "Exchange offer"],
];

const capabilities = [
  [Repeat2, "1:1 & group trade", "Exchange directly or build more flexible trade flows."],
  [MessageCircle, "Built-in conversation", "Keep offer context and chat close to the exchange."],
  [Trophy, "Progress & ranking", "Turn useful activity into visible progress and motivation."],
  [HeartHandshake, "Trade-up journey", "Move from unused items toward something more useful over time."],
];

export default function Bigger() {
  const { language } = useLanguage();
  const th = language === "th";
  const localizedShowcase = th ? [
    ["/work/bigger/1.png", "สำรวจสินค้า"],
    ["/work/bigger/2.png", "รายละเอียดสินค้า"],
    ["/work/bigger/3.png", "ข้อเสนอแลกเปลี่ยน"],
  ] : showcase;
  const localizedCapabilities = th ? [
    [Repeat2, "แลก 1:1 และแบบกลุ่ม", "แลกโดยตรงหรือสร้าง flow การแลกที่ยืดหยุ่นมากขึ้น"],
    [MessageCircle, "แชตในระบบ", "เก็บบริบทของข้อเสนอและบทสนทนาไว้กับการแลกเปลี่ยน"],
    [Trophy, "ความคืบหน้าและอันดับ", "เปลี่ยนกิจกรรมที่มีประโยชน์ให้เห็นเป็น progress และแรงจูงใจ"],
    [HeartHandshake, "เส้นทาง Trade-up", "ค่อย ๆ เปลี่ยนของที่ไม่ได้ใช้ไปสู่ของที่มีประโยชน์มากขึ้น"],
  ] : capabilities;

  return (
    <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-[radial-gradient(circle_at_50%_8%,rgba(34,184,207,.14),transparent_58%)]" />

      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[38px] border border-[#dce9f7] bg-[radial-gradient(circle_at_78%_18%,rgba(72,213,232,.14),transparent_31%),linear-gradient(180deg,#f7fcff_0%,#eef9ff_58%,#ffffff_100%)] shadow-[0_28px_80px_rgba(45,102,151,.09)]">
        <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .25 }}
            transition={{ duration: .62 }}
            className="relative z-20 mx-auto flex max-w-[900px] flex-col items-center text-center"
          >
            <motion.img
              initial={{ opacity: 0, scale: .9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .45 }}
              src="/work/bigger/logo.png"
              alt="Bigger logo"
              loading="lazy"
              decoding="async"
              className="h-[68px] w-[68px] object-contain drop-shadow-[0_14px_24px_rgba(15,159,181,.16)] sm:h-[82px] sm:w-[82px]"
            />

            <div className="mt-4 inline-flex items-center rounded-full border border-[#22b8cf]/14 bg-white/86 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#0f9fb5] shadow-sm">
              {th ? "ผลงาน · 03" : "Our Work · 03"}
            </div>

            <h2 className="mt-6 text-[54px] font-semibold leading-[.92] tracking-[-.07em] text-[#1c1c1e] sm:text-[72px] lg:text-[86px]">
              Bigger
            </h2>

            <p className={`mt-5 max-w-[760px] font-medium text-[#405b70] ${th ? "text-[20px] leading-[1.28] tracking-[-.015em] sm:text-[27px]" : "text-[21px] leading-[1.08] tracking-[-.035em] sm:text-[28px]"}`}>
              {th ? (
                <>
                  <span className="block">Marketplace แบบ Trade-up ที่ออกแบบรอบการแลกเปลี่ยน</span>
                  <span className="mt-1 block">ความคืบหน้า และชุมชน</span>
                </>
              ) : (
                "A trade-up marketplace designed around exchange, progress, and community."
              )}
            </p>

            <p className="mt-4 max-w-[760px] text-sm leading-7 text-[#74889a] sm:text-[15px]">
              {th ? "Bigger เปลี่ยนของที่ไม่ได้ใช้ให้เป็นโอกาสใหม่ ผ่านข้อเสนอที่เป็นระบบ การแลกแบบกลุ่ม แชต และ flow ที่สร้างมาเพื่อการแลกโดยเฉพาะ" : <>Bigger turns unused items into new opportunities through structured offers, group exchange ideas, chat, and a product flow made for trading instead of checkout.</>}
            </p>
          </motion.div>

          <div className="relative mx-auto mt-10 max-w-[1180px] sm:mt-12">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[900px] max-w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#48d5e8]/16 blur-[90px]" />

            <div className="relative z-10 grid gap-4 md:grid-cols-3 md:items-end">
              {localizedShowcase.map(([src, label], index) => (
                <motion.article
                  key={src}
                  initial={{ opacity: 0, y: 30, scale: .96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: .15 }}
                  transition={{ delay: .06 + index * .08, duration: .58, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, scale: 1.015 }}
                  className={index === 1 ? "md:-translate-y-5" : ""}
                >
                  <div className="overflow-hidden rounded-[22px] border border-white bg-white p-2 shadow-[0_26px_64px_rgba(41,105,143,.15)] sm:rounded-[26px]">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[16px] bg-[#eef7fb] sm:rounded-[20px]">
                      <Image
                        src={src}
                        alt={label}
                        fill
                        sizes="(max-width: 768px) 92vw, 31vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="flex items-center justify-between px-2 pb-1 pt-2">
                      <p className="text-[10px] font-semibold text-[#3c5267]">{label}</p>
                      <HeartHandshake className="h-3.5 w-3.5 text-[#22b8cf]" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>

          <div className="relative z-20 mx-auto mt-8 grid max-w-[1120px] grid-cols-2 gap-3 lg:grid-cols-4">
            {localizedCapabilities.map(([Icon, title, desc], index) => {
              const I = Icon as typeof Repeat2;
              return (
                <motion.div
                  key={String(title)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: .06 + index * .06 }}
                  className="group rounded-[18px] border border-[#dce9f2] bg-white/84 p-3.5 text-left shadow-[0_12px_30px_rgba(48,96,128,.05)] sm:rounded-[20px] sm:p-5 transition hover:-translate-y-1 hover:bg-white"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-[14px] bg-[#22b8cf]/10 text-[#0f9fb5]">
                    <I className="h-[19px] w-[19px]" />
                  </div>
                  <p className="mt-4 text-[13px] font-semibold text-[#1c1c1e]">{String(title)}</p>
                  <p className="mt-1.5 text-[11px] leading-5 text-[#8a98a8]">{String(desc)}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="relative z-20 mt-7 flex justify-center">
            <a
              href="https://biggerx.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-[15px] bg-[#0f9fb5] px-5 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(15,159,181,.22)] transition hover:-translate-y-0.5 hover:bg-[#16aec4]"
            >
              {th ? "เปิด Bigger" : "Open Bigger"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
