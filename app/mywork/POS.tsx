"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BarChart3,
  Boxes,
  ShoppingCart,
  Store,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const features = [
  [ShoppingCart, "Orders", "Create and move orders through a clear live workflow."],
  [Boxes, "Menu & stock", "Manage products, categories, and availability in one place."],
  [Store, "Tables & stores", "Handle table orders and multiple store locations."],
  [BarChart3, "Overview", "See day-to-day store activity from one responsive dashboard."],
];

const screens = [
  { src: "/work/pos/new/1.png", alt: "Create order screen", className: "md:-rotate-[4deg] md:z-[10]" },
  { src: "/work/pos/new/2.png", alt: "Table order screen", className: "md:-rotate-[2deg] md:z-[20]" },
  { src: "/work/pos/new/3.png", alt: "Manage menu screen", className: "md:z-[30] md:scale-[1.04]" },
  { src: "/work/pos/new/4.png", alt: "Orders screen", className: "md:rotate-[2deg] md:z-[20]" },
  { src: "/work/pos/new/5.png", alt: "Store management screen", className: "md:rotate-[4deg] md:z-[10]" },
];

export default function POS() {
  const { language } = useLanguage();
  const th = language === "th";
  const localizedFeatures = th ? [
    [ShoppingCart, "ออร์เดอร์", "สร้างและจัดการออร์เดอร์ตามสถานะการทำงานแบบเรียลไทม์"],
    [Boxes, "เมนูและสต๊อก", "จัดการสินค้า หมวดหมู่ และสถานะพร้อมขายในที่เดียว"],
    [Store, "โต๊ะและร้าน", "รองรับออร์เดอร์แบบโต๊ะและการจัดการหลายสาขา"],
    [BarChart3, "ภาพรวม", "ดูการทำงานประจำวันของร้านจาก dashboard ที่รองรับทุกหน้าจอ"],
  ] : features;

  return (
    <section className="relative overflow-hidden bg-white px-4 py-10 sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[900px] bg-[radial-gradient(circle_at_50%_8%,rgba(255,113,22,.16),transparent_58%)]" />

      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[38px] border border-[#ffe0cf] bg-[radial-gradient(circle_at_78%_18%,rgba(255,135,70,.16),transparent_30%),linear-gradient(180deg,#fffaf7_0%,#fff4ec_58%,#ffffff_100%)] shadow-[0_34px_90px_rgba(170,74,18,.10)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[.16]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,107,18,.22) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage: "linear-gradient(to bottom, black, transparent 82%)",
          }}
        />

        <div className="relative px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: .25 }}
            transition={{ duration: .62, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 mx-auto flex max-w-[900px] flex-col items-center text-center"
          >
            <motion.img
              initial={{ opacity: 0, scale: .9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .45 }}
              src="/work/pos/pos-logo.png"
              alt="Simple POS logo"
              loading="lazy"
              decoding="async"
              className="h-[68px] w-[68px] object-contain drop-shadow-[0_14px_24px_rgba(255,90,0,.16)] sm:h-[82px] sm:w-[82px]"
            />

            <div className="mt-4 inline-flex items-center rounded-full border border-[#ff6a00]/12 bg-white/82 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#ff5a00] shadow-sm backdrop-blur-xl">
              {th ? "ผลงาน · 02" : "Our Work · 02"}
            </div>

            <h2 className="mt-6 text-[54px] font-semibold leading-[.92] tracking-[-.07em] text-[#28150f] sm:text-[72px] lg:text-[86px]">
              Simple POS
            </h2>

            <p className="mt-5 max-w-[720px] text-[22px] font-medium leading-[1.08] tracking-[-.035em] text-[#5f3425] sm:text-[29px]">
              {th ? "จัดการร้านทั้งหมดจากระบบเดียวที่ออกแบบมาให้ใช้งานง่ายบนมือถือ" : "Run the store from one clean, mobile-first system."}
            </p>

            <p className="mt-4 max-w-[720px] text-sm leading-7 text-[#81675d] sm:text-[15px]">
              {th ? "ออร์เดอร์ โต๊ะ เมนู ร้าน และงานประจำวันถูกรวมไว้ใน POS เดียวที่ใช้งานได้ลื่นและคุ้นเคยในทุกอุปกรณ์" : <>Orders, tables, menus, stores, and daily operations stay in one responsive POS experience designed to feel fast and familiar on any device.</>}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34, scale: .98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: .18 }}
            transition={{ duration: .72, delay: .04, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-10 max-w-[1180px] sm:mt-12"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[390px] w-[900px] max-w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#ff7a2a]/14 blur-[100px]" />

            <div className="relative z-10 grid grid-cols-2 gap-x-2 gap-y-5 sm:gap-x-4 sm:gap-y-6 md:flex md:min-h-[440px] md:items-center md:justify-center md:gap-0 lg:min-h-[500px]">
              {screens.map((screen, index) => (
                <motion.div
                  key={screen.src}
                  initial={{ opacity: 0, y: 26, scale: .94 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: .5,
                    delay: .05 + index * .055,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -8, scale: 1.025 }}
                  className={`relative flex min-w-0 items-center justify-center ${index === 0 ? "order-1" : index === 2 ? "order-2" : index === 1 ? "order-3" : index === 3 ? "order-4" : "order-5"} md:order-none ${index === 4 ? "col-span-2 mx-auto w-[50%]" : "w-full"} md:mx-0 md:w-[23%] md:max-w-[300px] md:shrink-0 ${index === 0 ? "" : "md:-ml-[6%]"} ${screen.className}`}
                >
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full select-none object-contain drop-shadow-[0_24px_30px_rgba(103,49,20,.18)] md:drop-shadow-[0_30px_38px_rgba(103,49,20,.20)]"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative z-20 mx-auto mt-6 grid max-w-[1120px] grid-cols-2 gap-3 lg:mt-8 lg:grid-cols-4">
            {localizedFeatures.map(([Icon, title, desc], index) => {
              const I = Icon as typeof ShoppingCart;
              return (
                <motion.div
                  key={String(title)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: .06 + index * .06 }}
                  className="group rounded-[18px] border border-[#f1d9cc] bg-white/82 p-3.5 text-left shadow-[0_12px_30px_rgba(122,63,29,.055)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white sm:rounded-[20px] sm:p-5"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-[14px] bg-[#ff5a00]/10 text-[#ff5a00]">
                    <I className="h-[19px] w-[19px]" />
                  </div>
                  <p className="mt-4 text-[13px] font-semibold text-[#28150f]">{String(title)}</p>
                  <p className="mt-1.5 text-[11px] leading-5 text-[#927b70]">{String(desc)}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="relative z-20 mt-7 flex justify-center">
            <a
              href="https://www.scansung.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-[15px] bg-[#ff5a00] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(255,90,0,.24)] transition hover:-translate-y-0.5 hover:bg-[#ff6b18]"
            >
              {th ? "ดูผลิตภัณฑ์" : "View product"}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
