"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Code2,
  Compass,
  Layers3,
  Palette,
  Sparkles,
  Workflow,
} from "lucide-react";

const discoverImage =
  "https://cdn.dribbble.com/userupload/7238553/file/original-35f83ba3560d384332a8b00c8a1ed614.jpg?resize=900x0";
const discoverThinkingImage =
  "https://upload.wikimedia.org/wikipedia/commons/b/b0/Cartoon_Woman_Curiously_Reading_A_Text_In_Her_Laptop.svg";
const shapeImage =
  "https://images.pexels.com/photos/9281786/pexels-photo-9281786.jpeg?auto=compress&cs=tinysrgb&w=1600";
const buildDeveloperImage =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Happy_Cartoon_Man_At_Work_Using_A_Computer.svg";
const buildReviewImage =
  "https://commons.wikimedia.org/wiki/Special:Redirect/file/Happy_Cartoon_Woman_Using_A_Laptop_At_The_Office.svg";

const steps = [
  {
    number: "01",
    label: "Discover",
    icon: Compass,
    title: "Start with the reason, not the screen.",
    text: "We clarify the business goal, audience, user journey, and constraints before deciding what the product should look like.",
    chips: ["Goals", "Audience", "Journey"],
  },
  {
    number: "02",
    label: "Shape",
    icon: Palette,
    title: "Turn direction into a product people can feel.",
    text: "We bring typography, motion, interaction, and visual rhythm together so the product feels clear, intentional, and recognizably yours.",
    chips: ["UX", "Visual system", "Motion"],
  },
  {
    number: "03",
    label: "Build",
    icon: Code2,
    title: "Make the experience real — and ready to grow.",
    text: "We turn the visual system into responsive, maintainable software with performance, structure, and future changes in mind.",
    chips: ["Responsive", "Performance", "Scalable"],
  },
];

export default function Body() {
  return (
    <section className="overflow-hidden bg-white text-[#1c1c1e]">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-20 sm:px-8 sm:pt-24 lg:px-10 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#007aff]">
            How we work
          </p>
          <h2 className="mt-3 text-[38px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[52px]">
            Clear thinking before
            <span className="text-[#007aff]"> beautiful execution.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-6 text-[#636366] sm:text-[15px]">
            Strategy, design, and engineering stay in one product flow — so ideas move forward without losing the reason they started.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {steps.map(({ number, label, icon: Icon }) => (
            <motion.div
              key={number}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: Number(number) * 0.08, duration: 0.45 }}
              whileHover={{ y: -5 }}
              className="group rounded-[22px] border border-black/[0.06] bg-[#f2f7ff] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#007aff]/20 hover:shadow-[0_16px_40px_rgba(0,122,255,.08)]"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-[13px] bg-white text-[#007aff] shadow-[0_8px_20px_rgba(0,122,255,.10)]">
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-semibold tracking-[0.14em] text-[#8e8e93]">
                  {number}
                </span>
              </div>
              <p className="mt-4 text-[15px] font-semibold">{label}</p>
              <p className="mt-1 text-[12px] text-[#8e8e93]">
                One connected product process
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-6 px-5 pb-20 sm:px-8 lg:px-10 lg:pb-24">
        <motion.section initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, ease: "easeOut" }} className="overflow-hidden rounded-[32px] border border-black/[0.06] bg-[#f2f7ff] shadow-[0_24px_70px_rgba(20,60,120,.07)]">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#007aff]">
                <Compass className="h-4 w-4" />
                01 · Discover
              </div>

              <h3 className="mt-4 text-[34px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[44px]">
                Start with the reason,
                <span className="block text-[#007aff]">not the screen.</span>
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-6 text-[#636366]">
                We clarify the business goal, audience, user journey, and constraints before deciding what the product should become.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2">
                {["Goals", "Audience", "Journey", "Scope"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#007aff]/10 bg-white px-3 py-1.5 text-[11px] font-medium text-[#49627f]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="mx-auto mt-9 grid max-w-[980px] gap-4 md:grid-cols-2">
              <article className="group overflow-hidden rounded-[26px] border border-white bg-white p-3 shadow-[0_18px_45px_rgba(45,85,135,.09)]">
                <div className="flex items-center justify-between px-2 py-2">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8e8e93]">
                      Discovery board
                    </p>
                    <p className="mt-1 text-[15px] font-semibold text-[#1c1c1e]">
                      Clarity before pixels.
                    </p>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-[13px] bg-[#007aff] text-white">
                    <Workflow className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-2 overflow-hidden rounded-[20px] bg-[#f7f9fc]">
                  <img
                    src={discoverImage}
                    alt="Product discovery workshop"
                    loading="lazy"
                    decoding="async"
                    className="h-[290px] w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 pt-3">
                  {[
                    ["Goal", "Clear"],
                    ["Flow", "Mapped"],
                    ["Scope", "Focused"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[14px] bg-[#f2f7ff] px-3 py-3 text-center">
                      <p className="text-[9px] uppercase tracking-[.11em] text-[#8e8e93]">{label}</p>
                      <p className="mt-1 text-[11px] font-semibold text-[#007aff]">{value}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="group overflow-hidden rounded-[26px] border border-white bg-white p-3 shadow-[0_18px_45px_rgba(45,85,135,.09)]">
                <div className="flex items-center justify-between px-2 py-2">
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#8e8e93]">
                      Signal map
                    </p>
                    <p className="mt-1 text-[15px] font-semibold text-[#1c1c1e]">
                      Turn signals into direction.
                    </p>
                  </div>
                  <div className="grid h-10 w-10 place-items-center rounded-[13px] bg-white text-[#007aff] ring-1 ring-[#007aff]/10">
                    <Compass className="h-4 w-4" />
                  </div>
                </div>

                <div className="mt-2 overflow-hidden rounded-[20px] bg-[linear-gradient(180deg,#f9fbff,#eef6ff)]">
                  <img
                    src={discoverThinkingImage}
                    alt="Person thinking while using a laptop"
                    loading="lazy"
                    decoding="async"
                    className="h-[290px] w-full object-contain p-4 transition duration-500 group-hover:scale-[1.025]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-2 pt-3">
                  {["Audience", "Journey", "Direction"].map((item) => (
                    <div key={item} className="rounded-[14px] bg-[#f2f2f7] px-3 py-3 text-center">
                      <p className="text-[11px] font-semibold text-[#1c1c1e]">{item}</p>
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, ease: "easeOut" }} className="overflow-hidden rounded-[32px] border border-black/[0.06] bg-white shadow-[0_24px_70px_rgba(15,23,42,.06)]">
          <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[1.08fr_.92fr] lg:p-10">
            <div className="relative min-h-[360px] overflow-hidden rounded-[26px] bg-[#0a0d12]">
              <img
                src={shapeImage}
                alt="Design interface on a laptop"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,9,16,.08),rgba(5,9,16,.78))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[20px] border border-white/15 bg-black/35 p-4 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-[13px] bg-white text-[#007aff]">
                    <Palette className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[.13em] text-white/55">Visual system</p>
                    <p className="mt-1 text-[15px] font-semibold text-white">Purpose becomes personality.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#007aff]">
                <Palette className="h-4 w-4" />
                02 · Shape
              </div>
              <h3 className="mt-4 text-[34px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[44px]">
                A visual language
                <span className="block text-[#007aff]">people can feel.</span>
              </h3>
              <p className="mt-4 text-[14px] leading-6 text-[#636366]">
                Typography, motion, interaction, and rhythm work together to make the product feel distinct without getting in the way of clarity.
              </p>

              <div className="mt-6 grid grid-cols-3 gap-2">
                {["UX", "Motion", "Visual system"].map((item) => (
                  <div key={item} className="rounded-[16px] bg-[#f2f2f7] px-3 py-3 text-center">
                    <p className="text-[11px] font-semibold text-[#1c1c1e]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 34 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.65, ease: "easeOut" }} className="overflow-hidden rounded-[32px] border border-black/[0.06] bg-[#f2f2f7] shadow-[0_24px_70px_rgba(15,23,42,.05)]">
          <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[.9fr_1.1fr] lg:p-10">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.17em] text-[#007aff]">
                <Code2 className="h-4 w-4" />
                03 · Build
              </div>
              <h3 className="mt-4 max-w-xl text-[34px] font-semibold leading-[1.02] tracking-[-0.045em] sm:text-[44px]">
                Beautiful on the surface.
                <span className="block text-[#007aff]">Serious underneath.</span>
              </h3>
              <p className="mt-4 max-w-xl text-[14px] leading-6 text-[#636366]">
                We turn the visual system into responsive, maintainable software without losing the personality that made the idea worth building.
              </p>

              <div className="mt-6 overflow-hidden rounded-[22px] border border-black/[0.05] bg-white">
                {[
                  ["Responsive by default", "Layouts adapt cleanly across screen sizes."],
                  ["Performance aware", "Media, motion, and code stay intentional."],
                  ["Built to evolve", "The structure stays understandable as features grow."],
                ].map(([title, text], index) => (
                  <div
                    key={title}
                    className={`flex items-start gap-3 px-4 py-4 ${index ? "border-t border-black/[0.05]" : ""}`}
                  >
                    <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#34c759]/10 text-[#248a3d]">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[13px] font-semibold">{title}</p>
                      <p className="mt-1 text-[12px] leading-5 text-[#8e8e93]">{text}</p>
                    </div>
                    <ChevronRight className="mt-1 h-4 w-4 shrink-0 text-[#c7c7cc]" />
                  </div>
                ))}
              </div>

              <Link
                href="/Contact"
                className="mt-6 inline-flex min-h-12 items-center gap-2 rounded-[14px] bg-[#007aff] px-5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,122,255,.18)] transition hover:-translate-y-0.5 hover:bg-[#0a84ff]"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative mx-auto w-full max-w-[680px]">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <article className="group overflow-hidden rounded-[24px] border border-white bg-white p-3 shadow-[0_18px_48px_rgba(45,85,135,.10)] sm:rounded-[28px] sm:p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-[.13em] text-[#8e8e93]">Build room</p>
                      <p className="mt-1 text-[13px] font-semibold text-[#1c1c1e] sm:text-[15px]">Structure first.</p>
                    </div>
                    <div className="grid h-9 w-9 place-items-center rounded-[12px] bg-[#007aff] text-white">
                      <Code2 className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="mt-3 overflow-hidden rounded-[18px] bg-[#f7f9fc]">
                    <img
                      src={buildDeveloperImage}
                      alt="Developer working at a computer"
                      loading="lazy"
                      decoding="async"
                      className="h-[230px] w-full object-contain p-3 transition duration-500 group-hover:scale-[1.025] sm:h-[300px]"
                    />
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["Code", "Responsive"].map((item) => (
                      <span key={item} className="rounded-full bg-[#f2f7ff] px-2.5 py-1 text-[9px] font-semibold text-[#007aff]">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>

                <article className="group translate-y-6 overflow-hidden rounded-[24px] border border-white bg-white p-3 shadow-[0_18px_48px_rgba(45,85,135,.10)] sm:translate-y-10 sm:rounded-[28px] sm:p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[9px] uppercase tracking-[.13em] text-[#8e8e93]">Review desk</p>
                      <p className="mt-1 text-[13px] font-semibold text-[#1c1c1e] sm:text-[15px]">Polish before ship.</p>
                    </div>
                    <div className="grid h-9 w-9 place-items-center rounded-[12px] bg-[#f2f7ff] text-[#007aff]">
                      <Layers3 className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="mt-3 overflow-hidden rounded-[18px] bg-[linear-gradient(180deg,#f9fbff,#eef6ff)]">
                    <img
                      src={buildReviewImage}
                      alt="Designer reviewing work on a laptop"
                      loading="lazy"
                      decoding="async"
                      className="h-[230px] w-full object-contain p-3 transition duration-500 group-hover:scale-[1.025] sm:h-[300px]"
                    />
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-1.5">
                    {["Test", "Tune", "Ship"].map((item) => (
                      <span key={item} className="rounded-[10px] bg-[#f2f2f7] px-2 py-2 text-center text-[9px] font-semibold text-[#636366]">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </div>

              <div className="pointer-events-none absolute -right-5 -top-5 grid h-12 w-12 place-items-center rounded-[16px] bg-white text-[#007aff] shadow-[0_12px_30px_rgba(45,85,135,.12)]">
                <Sparkles className="h-4 w-4" />
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
