"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import {
  Star,
  User,
  Wrench,
  BarChart3,
  Lightbulb,
  Sparkles,
  TrendingUp,
  ArrowUpRight,
  UsersRound,
  Quote,
  Rocket,
  Award,
  BadgeCheck,
  CheckCircle2,
  Zap,
  MousePointer2,
  Layers3,
  Code2,
  Gem,
} from "lucide-react";

const features = [
  {
    title: "Experience",
    icon: <Star className="h-4 w-4" />,
    active: true,
  },
  {
    title: "Clients",
    icon: <User className="h-4 w-4" />,
  },
  {
    title: "Solutions",
    icon: <Wrench className="h-4 w-4" />,
  },
  {
    title: "Growth",
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    title: "Ideas",
    icon: <Lightbulb className="h-4 w-4" />,
  },
];

const clientAvatars = [
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&q=80",
    alt: "Client portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=180&q=80",
    alt: "Client portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&q=80",
    alt: "Client portrait",
  },
  {
    src: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=180&q=80",
    alt: "Client portrait",
  },
];

const stats = [
  {
    value: "30+",
    label: "Happy Clients",
    icon: <UsersRound className="h-4 w-4" />,
  },
  {
    value: "6+",
    label: "Years Experience",
    icon: <Award className="h-4 w-4" />,
  },
  {
    value: "16+",
    label: "Marketing Clients",
    icon: <TrendingUp className="h-4 w-4" />,
  },
  {
    value: "116+",
    label: "Projects Done",
    icon: <Rocket className="h-4 w-4" />,
  },
];

const qualityItems = [
  {
    label: "Design Quality",
    value: "96%",
    width: "w-[96%]",
  },
  {
    label: "Client Trust",
    value: "92%",
    width: "w-[92%]",
  },
  {
    label: "Delivery Rate",
    value: "98%",
    width: "w-[98%]",
  },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#fbfcfd] px-4 py-16 text-slate-950 sm:px-6 lg:px-8 lg:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-180px] h-[540px] w-[680px] -translate-x-1/2 rounded-full bg-sky-100/70 blur-[150px]" />

        <div className="absolute bottom-[8%] left-[8%] h-80 w-80 rounded-full bg-cyan-100/65 blur-[130px]" />

        <div className="absolute right-[8%] top-[34%] h-80 w-80 rounded-full bg-emerald-100/60 blur-[130px]" />

        <div className="absolute left-1/2 top-[62%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-blue-100/45 blur-[170px]" />

        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(14,116,144,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(14,116,144,0.035) 1px, transparent 1px)",
            backgroundSize: "68px 68px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
            Why Us
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Why Choose Us
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            Leading brands in the automotive industry recommend our company as a
            reliable corporate website development partner.
          </p>
        </motion.div>

        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative mt-14 flex justify-center lg:mt-16"
        >
          <FloatingDecorations />

          <div className="relative h-[620px] w-[310px] rounded-[48px] border border-slate-900/10 bg-white/80 p-2 shadow-[0_40px_120px_rgba(76,29,149,0.16)] backdrop-blur-xl sm:h-[690px] sm:w-[360px]">
            <div className="relative h-full w-full overflow-hidden rounded-[40px] bg-[#f7f5ff]">
              {/* Screen shine */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.95),transparent_42%)]" />

              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.7),transparent_28%,transparent_70%,rgba(139,92,246,0.08))]" />

              {/* Dynamic island */}
              <div className="absolute left-1/2 top-4 z-50 h-8 w-32 -translate-x-1/2 rounded-full bg-slate-950 shadow-[0_10px_25px_rgba(15,23,42,0.25)]" />

              {/* Status bar */}
              <div className="absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-7 pt-6 text-xs font-medium text-slate-900">
                <span>9:41</span>
                <span className="tracking-widest">•••</span>
              </div>

              {/* Auto-scroll content */}
              <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                  duration: 72,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative z-20"
              >
                <PhoneContent />
                <PhoneContent />
              </motion.div>

              {/* Top fade */}
              <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-28 bg-gradient-to-b from-[#f7f5ff] via-[#f7f5ff]/90 to-transparent" />

              {/* Bottom fade */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-52 bg-gradient-to-t from-[#f7f5ff] via-[#f7f5ff]/90 to-transparent" />
            </div>

            <div className="pointer-events-none absolute -inset-x-10 -bottom-12 z-40 h-44 bg-gradient-to-t from-[#f8f8ff] via-[#f8f8ff]/95 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PhoneContent() {
  return (
    <div className="px-5 pb-12 pt-24 sm:px-6">
      {/* Main card */}
      <div className="relative overflow-hidden rounded-[34px] border border-slate-900/10 bg-white/80 p-5 shadow-[0_24px_70px_rgba(76,29,149,0.1)] backdrop-blur-xl">
        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-20 left-0 h-44 w-44 rounded-full bg-blue-100/70 blur-3xl" />

        <div className="relative flex items-start justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-slate-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-700">
              <Sparkles className="h-3.5 w-3.5" />
              Why Us
            </div>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-slate-950">
              Experience That Builds Trust
            </h2>

            <p className="mt-3 max-w-[240px] text-xs leading-5 text-slate-500">
              We build clean, reliable, and growth-focused websites for brands
              that want to look professional.
            </p>
          </div>

          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-3xl bg-gradient-to-br from-blue-500 via-indigo-500 to-emerald-300 text-white shadow-[0_18px_45px_rgba(109,40,217,0.24)]">
            <Star className="h-6 w-6" />
          </div>
        </div>

        <div className="relative mt-6 grid grid-cols-3 gap-2">
          <SmallBadge label="Trusted" />
          <SmallBadge label="Fast" />
          <SmallBadge label="Modern" />
        </div>
      </div>

      {/* Client proof card */}
      <div className="relative mt-4 overflow-hidden rounded-[32px] bg-gradient-to-br from-indigo-500 via-violet-500 to-cyan-400 p-5 shadow-[0_24px_65px_rgba(109,40,217,0.2)]">
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/25 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-pink-300/30 blur-3xl" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white ring-1 ring-white/25">
              <BadgeCheck className="h-3.5 w-3.5" />
              Client Proof
            </div>

            <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
              Trusted by growing brands
            </h3>

            <p className="mt-3 max-w-[220px] text-xs leading-5 text-white/75">
              Real businesses choose us for reliable delivery, modern design,
              and long-term growth.
            </p>
          </div>

          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/25">
            <Quote className="h-5 w-5" />
          </div>
        </div>

        <div className="relative mt-5 flex items-center justify-between gap-4">
          <AvatarStack />

          <div className="rounded-2xl bg-white/15 px-4 py-3 text-right ring-1 ring-white/20 backdrop-blur-xl">
            <p className="text-2xl font-semibold leading-none text-white">
              30+
            </p>
            <p className="mt-1 text-[11px] text-white/75">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {features.map((item) => (
          <FeaturePill key={item.title} {...item} />
        ))}
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {stats.map((item) => (
          <StatCard
            key={item.label}
            value={item.value}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>

      {/* Project result */}
      <GlassCard className="mt-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600">
              Latest Result
            </p>

            <h3 className="mt-2 text-lg font-semibold text-slate-950">
              Corporate Website
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Clean interface, faster pages, and better lead conversion.
            </p>
          </div>

          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200">
            <CheckCircle2 className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-3xl border border-slate-900/10 bg-slate-50/70 p-3">
          <div className="rounded-2xl border border-slate-900/10 bg-white p-3">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </div>

              <div className="h-2 w-16 rounded-full bg-slate-200" />
            </div>

            <div className="mt-4 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 p-3">
              <div className="h-2 w-24 rounded-full bg-white/75" />
              <div className="mt-2 h-2 w-16 rounded-full bg-white/35" />
              <div className="mt-6 h-6 w-20 rounded-full bg-white text-[10px] font-semibold text-blue-700" />
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Quality score */}
      <GlassCard className="mt-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold text-slate-950">
              Performance Score
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Quality metrics from completed projects
            </p>
          </div>

          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-sky-50 text-blue-600">
            <TrendingUp className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 space-y-4">
          {qualityItems.map((item) => (
            <QualityBar
              key={item.label}
              label={item.label}
              value={item.value}
              width={item.width}
            />
          ))}
        </div>
      </GlassCard>

      {/* Testimonial */}
      <GlassCard className="mt-4">
        <div className="flex items-start gap-3">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=180&q=80"
            alt="Client portrait"
            className="h-12 w-12 shrink-0 rounded-2xl object-cover ring-2 ring-slate-100"
          />

          <div>
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              “Professional, fast, and reliable. The final website looks modern
              and helps our brand feel more premium.”
            </p>

            <p className="mt-3 text-xs font-semibold text-slate-950">
              Automotive Client
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Final CTA */}
      <div className="mt-4 overflow-hidden rounded-[32px] border border-blue-100 bg-gradient-to-r from-violet-100 to-indigo-100 p-5 shadow-[0_20px_55px_rgba(76,29,149,0.1)]">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-blue-600 shadow-sm ring-1 ring-blue-100">
            <Zap className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-base font-semibold text-slate-950">
              Ready to grow your brand?
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              Build a website that looks clean, trustworthy, and built for
              results.
            </p>
          </div>

          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-blue-600 text-white shadow-sm">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

function FloatingDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block">
      <motion.div
        animate={{
          y: [0, -18, 0],
          rotate: [-8, -4, -8],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-8 -translate-x-[520px]"
      >
        <FloatingCard
          icon={<MousePointer2 className="h-5 w-5" />}
          title="Smart UX"
          text="Clean user flow"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 18, 0],
          x: [0, 10, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[360px] -translate-x-[430px]"
      >
        <FloatingOrb />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 16, 0],
          rotate: [6, 10, 6],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[470px] -translate-x-[560px]"
      >
        <MiniFloatingBadge
          icon={<Code2 className="h-4 w-4" />}
          label="Fast Build"
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [7, 3, 7],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-20 translate-x-[300px]"
      >
        <FloatingCard
          icon={<Layers3 className="h-5 w-5" />}
          title="Modern UI"
          text="Premium interface"
          purple
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, -16, 0],
          x: [0, -8, 0],
          rotate: [-5, -10, -5],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[330px] translate-x-[390px]"
      >
        <MiniFloatingBadge
          icon={<Gem className="h-4 w-4" />}
          label="Premium"
          purple
        />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 12, 0],
          opacity: [0.45, 1, 0.45],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[520px] translate-x-[310px]"
      >
        <div className="flex items-center gap-3">
          <span className="h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_24px_rgba(139,92,246,0.5)]" />
          <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.45)]" />
          <span className="h-4 w-4 rounded-full bg-purple-400 shadow-[0_0_28px_rgba(192,132,252,0.5)]" />
        </div>
      </motion.div>

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-[150px] -z-10 h-28 w-28 -translate-x-[610px] rounded-[34px] border border-blue-100 bg-sky-50/40"
      />

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-[250px] -z-10 h-32 w-32 translate-x-[500px] rounded-[38px] border border-emerald-100 bg-emerald-50/40"
      />
    </div>
  );
}

function FloatingCard({
  icon,
  title,
  text,
  purple = false,
}: {
  icon: ReactNode;
  title: string;
  text: string;
  purple?: boolean;
}) {
  return (
    <div className="relative w-[190px] overflow-hidden rounded-[28px] border border-slate-900/10 bg-white/75 p-4 shadow-[0_24px_70px_rgba(14,116,144,0.10)] backdrop-blur-2xl">
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full blur-3xl ${
          purple ? "bg-emerald-100/80" : "bg-blue-200/80"
        }`}
      />

      <div className="relative flex items-center gap-3">
        <div
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white shadow-[0_14px_35px_rgba(76,29,149,0.2)] ${
            purple
              ? "bg-gradient-to-br from-blue-500 to-cyan-400"
              : "bg-gradient-to-br from-blue-500 to-violet-500"
          }`}
        >
          {icon}
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-950">{title}</h4>
          <p className="mt-1 text-xs text-slate-500">{text}</p>
        </div>
      </div>
    </div>
  );
}

function MiniFloatingBadge({
  icon,
  label,
  purple = false,
}: {
  icon: ReactNode;
  label: string;
  purple?: boolean;
}) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/75 px-4 py-3 text-slate-950 shadow-[0_18px_50px_rgba(76,29,149,0.1)] backdrop-blur-2xl">
      <div
        className={`grid h-8 w-8 place-items-center rounded-full ${
          purple ? "bg-emerald-50 text-emerald-600" : "bg-sky-50 text-blue-600"
        }`}
      >
        {icon}
      </div>

      <span className="text-xs font-semibold text-slate-600">{label}</span>
    </div>
  );
}

function FloatingOrb() {
  return (
    <div className="relative h-20 w-20">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-300 to-purple-300 opacity-70 blur-xl" />

      <div className="relative grid h-20 w-20 place-items-center rounded-full border border-white bg-white/70 shadow-[0_20px_55px_rgba(76,29,149,0.16)] backdrop-blur-2xl">
        <Sparkles className="h-6 w-6 text-blue-600" />
      </div>
    </div>
  );
}

function AvatarStack() {
  return (
    <div className="flex items-center">
      <div className="flex -space-x-3">
        {clientAvatars.map((avatar) => (
          <img
            key={avatar.src}
            src={avatar.src}
            alt={avatar.alt}
            className="h-11 w-11 rounded-full border-2 border-white object-cover shadow-[0_10px_25px_rgba(15,23,42,0.18)]"
          />
        ))}
      </div>

      <div className="ml-3">
        <p className="text-xs font-semibold text-white">Clients</p>
        <p className="mt-0.5 text-[11px] text-white/65">
          Automotive & business
        </p>
      </div>
    </div>
  );
}

function FeaturePill({
  title,
  icon,
  active = false,
}: {
  title: string;
  icon: ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={`group flex items-center gap-2 rounded-2xl border px-3 py-3 transition-all duration-300 ${
        active
          ? "border-sky-200 bg-sky-50 text-slate-800 shadow-[0_14px_35px_rgba(14,116,144,0.09)]"
          : "border-slate-900/10 bg-white/75 text-slate-500 hover:border-blue-100 hover:bg-white hover:text-slate-800"
      }`}
    >
      <div
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl transition-all duration-300 ${
          active
            ? "bg-blue-600 text-white"
            : "bg-slate-50 text-violet-500 group-hover:bg-sky-50"
        }`}
      >
        {icon}
      </div>

      <span className="text-xs font-medium">{title}</span>
    </div>
  );
}

function StatCard({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-900/10 bg-white/80 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.07)]">
      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-sky-50 blur-2xl" />

      <div className="relative flex items-center justify-between gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-sky-50 text-blue-600 ring-1 ring-blue-100">
          {icon}
        </div>

        <p className="text-2xl font-semibold leading-none text-slate-950">
          {value}
        </p>
      </div>

      <p className="relative mt-3 text-xs leading-4 text-slate-500">{label}</p>
    </div>
  );
}

function GlassCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] border border-slate-900/10 bg-white/80 p-5 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

      {children}
    </div>
  );
}

function SmallBadge({ label }: { label: string }) {
  return (
    <div className="rounded-full border border-blue-100 bg-slate-50 px-3 py-2 text-center text-[10px] font-semibold text-blue-700">
      {label}
    </div>
  );
}

function QualityBar({
  label,
  value,
  width,
}: {
  label: string;
  value: string;
  width: string;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs">
        <span className="text-slate-500">{label}</span>
        <span className="font-semibold text-slate-950">{value}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-sky-50">
        <div
          className={`h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-300 ${width}`}
        />
      </div>
    </div>
  );
}
