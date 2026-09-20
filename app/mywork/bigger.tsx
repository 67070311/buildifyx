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
            <div className="inline-flex items-center gap-2 rounded-full border border-[#22b8cf]/14 bg-white/86 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#0f9fb5] shadow-sm">
              <span className="grid h-6 w-6 place-items-center rounded-[8px] bg-[#22b8cf] text-[10px] font-bold text-white">B</span>
              Our Work · 03
            </div>

            <h2 className="mt-6 text-[54px] font-semibold leading-[.92] tracking-[-.07em] text-[#1c1c1e] sm:text-[72px] lg:text-[86px]">
              Bigger
            </h2>

            <p className="mt-5 max-w-[760px] text-[21px] font-medium leading-[1.08] tracking-[-.035em] text-[#405b70] sm:text-[28px]">
              A trade-up marketplace designed around exchange, progress, and community.
            </p>

            <p className="mt-4 max-w-[760px] text-sm leading-7 text-[#74889a] sm:text-[15px]">
              Bigger turns unused items into new opportunities through structured offers,
              group exchange ideas, chat, and a product flow made for trading instead of checkout.
            </p>
          </motion.div>

          <div className="relative mx-auto mt-10 max-w-[1180px] sm:mt-12">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[900px] max-w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#48d5e8]/16 blur-[90px]" />

            <div className="relative z-10 grid gap-4 md:grid-cols-3 md:items-end">
              {showcase.map(([src, label], index) => (
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

          <div className="relative z-20 mx-auto mt-8 grid max-w-[1120px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(([Icon, title, desc], index) => {
              const I = Icon as typeof Repeat2;
              return (
                <motion.div
                  key={String(title)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: .06 + index * .06 }}
                  className="group rounded-[20px] border border-[#dce9f2] bg-white/84 p-5 text-left shadow-[0_12px_30px_rgba(48,96,128,.05)] transition hover:-translate-y-1 hover:bg-white"
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
              Open Bigger
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
