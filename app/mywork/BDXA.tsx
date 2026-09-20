"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  FileCode2,
  Laptop,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";

const features = [
  [FileCode2, "Project files", "Read and edit the code that already lives in your workspace."],
  [TerminalSquare, "Developer tools", "Run approved commands through the same local permission layer."],
  [Laptop, "Your machine", "Keep the workflow on the computer and projects you already use."],
  [ShieldCheck, "Local control", "Sensitive actions stay behind your device permission rules."],
];

const flow = [
  ["01", "Connect", "Link a device and choose the workspace."],
  ["02", "Ask", "Work with ChatGPT in normal conversation."],
  ["03", "Execute", "bdxa carries out approved file and command actions."],
];

export default function BDXA() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-12 pt-[118px] sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[940px] bg-[radial-gradient(circle_at_50%_0%,rgba(56,148,255,.16),transparent_56%)]" />

      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[38px] border border-[#d9e7f5] bg-[radial-gradient(circle_at_78%_18%,rgba(38,143,255,.13),transparent_31%),linear-gradient(180deg,#fbfdff_0%,#f2f8ff_58%,#ffffff_100%)] shadow-[0_34px_100px_rgba(41,83,128,.11)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[.16]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(60,117,179,.22) 1px, transparent 1px)",
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
            className="relative z-20 mx-auto flex max-w-[920px] flex-col items-center text-center"
          >
            <motion.img
              initial={{ opacity: 0, scale: .9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: .45 }}
              src="/work/bdxa-logo.svg"
              alt="bdxa logo"
              className="h-[68px] w-[68px] object-contain drop-shadow-[0_14px_24px_rgba(0,122,255,.16)] sm:h-[82px] sm:w-[82px]"
            />

            <div className="mt-4 inline-flex items-center rounded-full border border-[#007aff]/12 bg-white/80 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#007aff] shadow-sm backdrop-blur-xl">
              Our Work · 01
            </div>

            <h1 className="mt-6 text-[58px] font-semibold leading-[.9] tracking-[-.075em] text-[#14243b] sm:text-[78px] lg:text-[92px]">
              bdxa
            </h1>

            <p className="mt-5 max-w-[760px] text-[22px] font-medium leading-[1.08] tracking-[-.04em] text-[#31506f] sm:text-[29px]">
              Give ChatGPT a safe bridge into your real workspace.
            </p>

            <p className="mt-4 max-w-[760px] text-sm leading-7 text-[#718397] sm:text-[15px]">
              bdxa connects Buildifyx Cloud to your computer so AI can work with approved
              files and developer tools while local permission rules stay in control.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 34, scale: .98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: .18 }}
            transition={{ duration: .72, delay: .04, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto mt-10 max-w-[1120px] sm:mt-12"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[340px] w-[920px] max-w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#1688ff]/15 blur-[100px]" />
            <div className="relative z-10 overflow-hidden rounded-[20px] bg-[#08111f] shadow-[0_34px_90px_rgba(18,48,84,.22)] ring-1 ring-black/5 sm:rounded-[28px]">
              <img
                src="/work/bdxa/1.png"
                alt="bdxa device management dashboard"
                className="block h-auto w-full select-none object-contain"
                draggable={false}
              />
            </div>
          </motion.div>

          <div className="relative z-20 mx-auto mt-8 grid max-w-[1120px] gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([Icon, title, desc], index) => {
              const I = Icon as typeof FileCode2;
              return (
                <motion.div
                  key={String(title)}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: .06 + index * .06 }}
                  className="group rounded-[20px] border border-[#dce7f2] bg-white/82 p-5 text-left shadow-[0_12px_30px_rgba(44,83,126,.055)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-[14px] bg-[#007aff]/10 text-[#007aff]">
                    <I className="h-[19px] w-[19px]" />
                  </div>
                  <p className="mt-4 text-[13px] font-semibold text-[#1c1c1e]">{String(title)}</p>
                  <p className="mt-1.5 text-[11px] leading-5 text-[#8795a5]">{String(desc)}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="relative z-20 mx-auto mt-5 grid max-w-[900px] gap-2 sm:grid-cols-3">
            {flow.map(([num, title, desc], index) => (
              <motion.div
                key={num}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * .08 }}
                className="rounded-[16px] border border-[#e2eaf3] bg-[#f8fbff]/90 px-4 py-3 text-left"
              >
                <div className="flex items-start gap-3">
                  <div className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-[#007aff] text-[9px] font-bold text-white">
                    {num}
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-[#1c1c1e]">{title}</p>
                    <p className="mt-0.5 text-[9px] leading-4 text-[#8794a3]">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative z-20 mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://www.npmjs.com/package/@buildifyx/desktop-agent"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center gap-2 rounded-[15px] bg-[#007aff] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(0,122,255,.22)] transition hover:-translate-y-0.5 hover:bg-[#0a84ff]"
            >
              View desktop agent
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <div className="inline-flex min-h-12 items-center gap-2 rounded-[15px] border border-[#dce7f2] bg-white/78 px-4 text-[11px] font-medium text-[#5f7185] backdrop-blur-xl">
              <ShieldCheck className="h-4 w-4 text-[#34c759]" />
              Local permission control
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
