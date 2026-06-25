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
    <section className="relative w-full overflow-hidden bg-black px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-10 h-[440px] w-[440px] -translate-x-1/2 rounded-full bg-[#5552D9]/25 blur-[150px]" />
        <div className="absolute left-[8%] bottom-[8%] h-80 w-80 rounded-full bg-[#2563EB]/15 blur-[130px]" />
        <div className="absolute right-[8%] top-[34%] h-80 w-80 rounded-full bg-[#A855F7]/15 blur-[130px]" />
        <div className="absolute left-1/2 top-[62%] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#111827]/80 blur-[170px]" />
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
          <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#8D8BFF]">
            Why Us
          </p>

          <h1 className="mt-4 text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
            Why Choose Us
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm font-normal leading-7 text-white/50 sm:text-base">
            Biggest brands in the automotive industry recommend our company as a
            reliable corporate website developer.
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

          <div className="relative h-[620px] w-[310px] rounded-[48px] border border-white/20 bg-gradient-to-b from-white/15 via-white/[0.07] to-white/[0.03] p-2 shadow-[0_40px_140px_rgba(0,0,0,0.9)] sm:h-[690px] sm:w-[360px]">
            <div className="relative h-full w-full overflow-hidden rounded-[40px] bg-[#07070A]">
              {/* Screen shine */}
              <div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.2),transparent_42%)]" />
              <div className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_28%,transparent_70%,rgba(141,139,255,0.1))]" />

              {/* Dynamic island */}
              <div className="absolute left-1/2 top-4 z-50 h-8 w-32 -translate-x-1/2 rounded-full bg-black shadow-[0_10px_30px_rgba(0,0,0,0.7)]" />

              {/* Status bar */}
              <div className="absolute left-0 right-0 top-0 z-40 flex items-center justify-between px-7 pt-6 text-xs font-normal text-white">
                <span>9:41</span>
                <span className="tracking-widest">•••</span>
              </div>

              {/* Auto scroll content */}
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
              <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-28 bg-gradient-to-b from-[#07070A] via-[#07070A]/90 to-transparent" />

              {/* Bottom fade inside screen */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-30 h-52 bg-gradient-to-t from-black via-black/90 to-transparent" />
            </div>

            {/* Phone bottom fade */}
            <div className="pointer-events-none absolute -inset-x-10 -bottom-12 z-40 h-44 bg-gradient-to-t from-black via-black/95 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PhoneContent() {
  return (
    <div className="px-5 pb-12 pt-24 sm:px-6">
      {/* Main premium card */}
      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-gradient-to-b from-white/[0.12] to-white/[0.04] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.48)] backdrop-blur-xl">
        <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#8D8BFF]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-44 w-44 rounded-full bg-[#2563EB]/25 blur-3xl" />

        <div className="relative flex items-start justify-between gap-5">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#8D8BFF]/25 bg-[#8D8BFF]/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8B7FF]">
              <Sparkles className="h-3.5 w-3.5" />
              Why Us
            </div>

            <h2 className="mt-4 text-3xl font-medium leading-tight text-white">
              Experience That Builds Trust
            </h2>

            <p className="mt-3 max-w-[240px] text-xs font-normal leading-5 text-white/50">
              We build clean, reliable, and growth-focused websites for brands
              that want to look professional.
            </p>
          </div>

          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-3xl bg-gradient-to-br from-[#5552D9] via-[#7775FF] to-[#A7A5F8] text-white shadow-[0_18px_55px_rgba(85,82,217,0.5)]">
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
      <div className="relative mt-4 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#2458FF] via-[#5F4DFF] to-[#A855F7] p-5 shadow-[0_24px_80px_rgba(85,82,217,0.35)]">
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-[#FF4FA3]/35 blur-3xl" />

        <div className="relative flex items-start justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 ring-1 ring-white/15">
              <BadgeCheck className="h-3.5 w-3.5" />
              Client Proof
            </div>

            <h3 className="mt-4 text-2xl font-medium leading-tight text-white">
              Trusted by growing brands
            </h3>

            <p className="mt-3 max-w-[220px] text-xs leading-5 text-white/70">
              Real businesses choose us for reliable delivery, modern design,
              and long-term growth.
            </p>
          </div>

          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/15 text-white ring-1 ring-white/20">
            <Quote className="h-5 w-5" />
          </div>
        </div>

        <div className="relative mt-5 flex items-center justify-between gap-4">
          <AvatarStack />

          <div className="rounded-2xl bg-black/20 px-4 py-3 text-right ring-1 ring-white/10 backdrop-blur-xl">
            <p className="text-2xl font-medium leading-none text-white">30+</p>
            <p className="mt-1 text-[11px] text-white/65">Happy Clients</p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        {features.map((item) => (
          <FeaturePill key={item.title} {...item} />
        ))}
      </div>

      {/* Stats dashboard */}
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

      {/* Project highlight */}
      <GlassCard className="mt-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#8D8BFF]">
              Latest Result
            </p>
            <h3 className="mt-2 text-lg font-medium text-white">
              Corporate Website
            </h3>
            <p className="mt-1 text-xs leading-5 text-white/45">
              Clean interface, faster pages, and better lead conversion.
            </p>
          </div>

          <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-400/15 text-emerald-300 ring-1 ring-emerald-300/20">
            <CheckCircle2 className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-black/25 p-3">
          <div className="rounded-2xl bg-gradient-to-br from-white/14 to-white/[0.04] p-3">
            <div className="flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>

              <div className="h-2 w-16 rounded-full bg-white/15" />
            </div>

            <div className="mt-4 h-20 rounded-2xl bg-gradient-to-br from-[#2458FF]/80 to-[#A855F7]/80 p-3">
              <div className="h-2 w-24 rounded-full bg-white/60" />
              <div className="mt-2 h-2 w-16 rounded-full bg-white/30" />
              <div className="mt-6 h-6 w-20 rounded-full bg-white text-[10px] font-medium text-[#5552D9]" />
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Quality score */}
      <GlassCard className="mt-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-medium text-white">
              Performance Score
            </h3>
            <p className="mt-1 text-xs text-white/45">
              Quality metrics from completed projects
            </p>
          </div>

          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#5552D9]/20 text-[#B8B7FF]">
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
            className="h-12 w-12 shrink-0 rounded-2xl object-cover ring-2 ring-white/15"
          />

          <div>
            <div className="flex items-center gap-1 text-[#FFCF6B]">
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
              <Star className="h-3.5 w-3.5 fill-current" />
            </div>

            <p className="mt-2 text-sm leading-6 text-white/60">
              “Professional, fast, and reliable. The final website looks modern
              and helps our brand feel more premium.”
            </p>

            <p className="mt-3 text-xs font-medium text-white">
              Automotive Client
            </p>
          </div>
        </div>
      </GlassCard>

      {/* Final CTA */}
      <div className="mt-4 overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-r from-[#111827] to-[#1E1B4B] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)]">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-[#B8B7FF] ring-1 ring-white/10">
            <Zap className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-base font-medium text-white">
              Ready to grow your brand?
            </h3>
            <p className="mt-1 text-xs leading-5 text-white/45">
              Build a website that looks clean, trustworthy, and built for
              results.
            </p>
          </div>

          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-[#5552D9]">
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
      {/* Left floating card */}
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

      {/* Left orb */}
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

      {/* Left mini badge */}
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

      {/* Right floating card */}
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

      {/* Right mini badge */}
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

      {/* Right dots */}
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
          <span className="h-3 w-3 rounded-full bg-[#8D8BFF] shadow-[0_0_30px_rgba(141,139,255,0.9)]" />
          <span className="h-2 w-2 rounded-full bg-[#2563EB] shadow-[0_0_24px_rgba(37,99,235,0.8)]" />
          <span className="h-4 w-4 rounded-full bg-[#A855F7] shadow-[0_0_34px_rgba(168,85,247,0.85)]" />
        </div>
      </motion.div>

      {/* Rotating decorative squares */}
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-[150px] -z-10 h-28 w-28 -translate-x-[610px] rounded-[34px] border border-[#5552D9]/25 bg-[#5552D9]/5"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-[250px] -z-10 h-32 w-32 translate-x-[500px] rounded-[38px] border border-[#A855F7]/25 bg-[#A855F7]/5"
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
    <div className="relative w-[190px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.055] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.42)] backdrop-blur-2xl">
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full blur-3xl ${
          purple ? "bg-[#A855F7]/35" : "bg-[#2563EB]/35"
        }`}
      />

      <div className="relative flex items-center gap-3">
        <div
          className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white shadow-[0_14px_45px_rgba(85,82,217,0.35)] ${
            purple
              ? "bg-gradient-to-br from-[#7C3AED] to-[#C084FC]"
              : "bg-gradient-to-br from-[#2458FF] to-[#8D8BFF]"
          }`}
        >
          {icon}
        </div>

        <div>
          <h4 className="text-sm font-medium text-white">{title}</h4>
          <p className="mt-1 text-xs text-white/45">{text}</p>
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
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-3 text-white shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
      <div
        className={`grid h-8 w-8 place-items-center rounded-full ${
          purple
            ? "bg-[#A855F7]/20 text-[#D8B4FE]"
            : "bg-[#5552D9]/20 text-[#B8B7FF]"
        }`}
      >
        {icon}
      </div>

      <span className="text-xs font-medium text-white/75">{label}</span>
    </div>
  );
}

function FloatingOrb() {
  return (
    <div className="relative h-20 w-20">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2458FF] to-[#A855F7] opacity-70 blur-xl" />
      <div className="relative grid h-20 w-20 place-items-center rounded-full border border-white/15 bg-white/[0.06] shadow-[0_20px_80px_rgba(85,82,217,0.35)] backdrop-blur-2xl">
        <Sparkles className="h-6 w-6 text-white" />
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
            className="h-11 w-11 rounded-full border-2 border-white/80 object-cover shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          />
        ))}
      </div>

      <div className="ml-3">
        <p className="text-xs font-medium text-white">Clients</p>
        <p className="mt-0.5 text-[11px] text-white/55">
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
          ? "border-[#7775FF]/50 bg-gradient-to-br from-[#5552D9]/35 to-[#8D8BFF]/15 text-white shadow-[0_14px_45px_rgba(85,82,217,0.22)]"
          : "border-white/10 bg-white/[0.045] text-white/55 hover:border-white/20 hover:bg-white/[0.07] hover:text-white/75"
      }`}
    >
      <div
        className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl transition-all duration-300 ${
          active
            ? "bg-white text-[#5552D9]"
            : "bg-white/10 text-white/55 group-hover:bg-white/15 group-hover:text-white"
        }`}
      >
        {icon}
      </div>

      <span className="text-xs font-normal">{title}</span>
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
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.035] p-4 shadow-[0_14px_55px_rgba(0,0,0,0.25)]">
      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#8D8BFF]/20 blur-2xl" />

      <div className="relative flex items-center justify-between gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#8D8BFF]/15 text-[#B8B7FF] ring-1 ring-[#8D8BFF]/20">
          {icon}
        </div>

        <p className="text-2xl font-medium leading-none text-white">{value}</p>
      </div>

      <p className="relative mt-3 text-xs leading-4 text-white/45">{label}</p>
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
      className={`relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.06] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.28)] backdrop-blur-xl ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      {children}
    </div>
  );
}

function SmallBadge({ label }: { label: string }) {
  return (
    <div className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-center text-[10px] font-medium text-white/65 backdrop-blur-xl">
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
        <span className="text-white/55">{label}</span>
        <span className="font-medium text-white">{value}</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full bg-gradient-to-r from-[#5552D9] via-[#8D8BFF] to-[#C4C3FF] ${width}`}
        />
      </div>
    </div>
  );
}
