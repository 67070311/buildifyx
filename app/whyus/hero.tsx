import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Code2,
  Flower2,
  Leaf,
  Palette,
  Sparkles,
  Sprout,
} from "lucide-react";

type StatItem = {
  value: string;
  label: string;
};

type PrincipleItem = {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: string;
};

const stats: StatItem[] = [
  { value: "30+", label: "Happy clients" },
  { value: "6+", label: "Years growing" },
  { value: "116+", label: "Projects delivered" },
];

const principles: PrincipleItem[] = [
  {
    title: "Rooted in strategy",
    description: "Every choice starts with your goal, audience, and real user journey.",
    icon: Sprout,
    tone: "bg-[#eaf0df] text-[#48613f] border-[#d7e2c9]",
  },
  {
    title: "Designed with character",
    description: "Clear, memorable interfaces that feel human instead of template-made.",
    icon: Palette,
    tone: "bg-[#fff0e8] text-[#9c6248] border-[#f2d9cd]",
  },
  {
    title: "Built to keep growing",
    description: "Fast, responsive code that stays easy to maintain as your business evolves.",
    icon: Code2,
    tone: "bg-[#e8f0ef] text-[#416765] border-[#d3e1df]",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f1] px-4 pb-16 pt-24 text-[#273126] sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(217,229,199,0.45),transparent_28%),radial-gradient(circle_at_82%_28%,rgba(247,218,201,0.32),transparent_24%),linear-gradient(rgba(66,83,62,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(66,83,62,0.035)_1px,transparent_1px)] bg-[size:auto,auto,72px_72px,72px_72px]" />

      <div className="pointer-events-none absolute -left-12 bottom-[-34px] hidden h-[260px] w-[260px] opacity-60 lg:block">
        <BotanicalSprig className="h-full w-full -rotate-12" />
      </div>
      <div className="pointer-events-none absolute -right-10 top-16 hidden h-[250px] w-[250px] opacity-55 lg:block">
        <BotanicalSprig className="h-full w-full rotate-[154deg]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <div className="whyus-reveal relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#cfdac6] bg-[#fdfdf9] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#53674d] shadow-[0_8px_24px_rgba(57,72,52,0.05)]">
            <Leaf className="h-3.5 w-3.5" />
            Why Buildifyx
          </div>

          <h1 className="mt-7 max-w-[760px] font-serif text-[46px] font-medium leading-[0.98] tracking-[-0.045em] text-[#273126] sm:text-[58px] lg:text-[72px]">
            Good digital work
            <span className="relative mt-1 block italic text-[#78906e]">
              should feel alive.
              <span className="absolute -bottom-2 left-1 h-[3px] w-28 rounded-full bg-[#d8a88c] sm:w-36" />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-[15px] leading-7 text-[#667061] sm:text-base">
            We grow brands through thoughtful strategy, expressive design, and
            reliable software — combining technology with the warmth and rhythm of
            something made by people.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/Contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#2f3b2e] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#455742]"
            >
              Grow something together
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              href="/mywork"
              className="inline-flex items-center gap-2 rounded-full border border-[#ced8c7] bg-[#fdfdf9] px-5 py-3 text-sm font-semibold text-[#4a5946] transition hover:-translate-y-0.5 hover:border-[#aebca7]"
            >
              See our work
            </Link>
          </div>

          <div className="mt-11 flex flex-wrap gap-x-9 gap-y-5 border-t border-[#dfe5d9] pt-6">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="font-serif text-3xl font-semibold tracking-[-0.04em] text-[#2f3b2e]">
                  {item.value}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-[#7a8575]">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="whyus-reveal whyus-delay-1 relative mx-auto min-h-[570px] w-full max-w-[660px] sm:min-h-[620px]">
          <div className="absolute inset-x-[8%] bottom-[3%] top-[3%] rounded-[52%_48%_44%_56%/42%_49%_51%_58%] border border-[#cdd8c5] bg-[#eef2e7]" />

          <div className="whyus-bloom absolute left-[8%] top-[7%] h-[64%] w-[47%] opacity-90 sm:left-[11%] sm:w-[43%]">
            <GardenFlower />
          </div>

          <div className="absolute right-[6%] top-[9%] w-[58%] rounded-[34px] border border-[#d9dfd3] bg-[#fffdf8] p-5 shadow-[0_26px_70px_rgba(52,67,49,0.10)] sm:right-[8%] sm:p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#667a5f]">
                <Flower2 className="h-4 w-4" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                  Our way of working
                </span>
              </div>
              <Sparkles className="h-4 w-4 text-[#d69a79]" />
            </div>

            <h2 className="mt-4 max-w-sm font-serif text-[30px] font-medium leading-[1.04] tracking-[-0.035em] text-[#2d382c] sm:text-[36px]">
              Ideas grow better when every layer has intention.
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-[#70796d]">
              Like a garden, the strongest digital products need good roots,
              thoughtful shaping, and room to evolve.
            </p>
          </div>

          <div className="absolute bottom-[7%] left-[3%] right-[3%] grid gap-3 sm:left-[7%] sm:right-[7%] sm:grid-cols-3">
            {principles.map(({ title, description, icon: Icon, tone }, index) => (
              <article
                key={title}
                className={`relative rounded-[24px] border p-4 shadow-[0_14px_38px_rgba(52,67,49,0.07)] ${tone} ${
                  index === 1 ? "sm:-translate-y-5" : ""
                }`}
              >
                <div className="grid h-9 w-9 place-items-center rounded-full bg-white/70">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 text-sm font-semibold leading-5">{title}</h3>
                <p className="mt-2 text-[11px] leading-5 opacity-75">{description}</p>
              </article>
            ))}
          </div>

          <div className="absolute left-[3%] top-[29%] hidden rotate-[-7deg] rounded-full border border-[#ead7c9] bg-[#fff7f1] px-4 py-2 text-[11px] font-semibold text-[#9b6d56] shadow-[0_10px_26px_rgba(111,78,58,0.07)] sm:block">
            Made with care
          </div>

          <div className="absolute right-[2%] top-[53%] hidden rotate-[6deg] rounded-full border border-[#cad8c3] bg-[#f6faf2] px-4 py-2 text-[11px] font-semibold text-[#61725b] shadow-[0_10px_26px_rgba(67,83,62,0.07)] sm:block">
            Built to bloom
          </div>
        </div>
      </div>
    </section>
  );
}

function BotanicalSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 260"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M32 228C77 175 110 130 142 83C163 53 188 34 226 19"
        stroke="#7f9475"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M77 176C48 168 31 145 32 119C63 119 82 137 77 176Z" fill="#dbe5d2" stroke="#7f9475" strokeWidth="2" />
      <path d="M112 128C87 109 82 81 94 58C122 72 133 96 112 128Z" fill="#edf1e8" stroke="#7f9475" strokeWidth="2" />
      <path d="M151 74C149 47 164 27 189 19C197 45 184 68 151 74Z" fill="#dfe8d7" stroke="#7f9475" strokeWidth="2" />
      <path d="M135 96C163 91 187 104 199 128C171 139 146 128 135 96Z" fill="#edf2e7" stroke="#7f9475" strokeWidth="2" />
      <circle cx="213" cy="26" r="11" fill="#f1c7b3" stroke="#c99578" strokeWidth="2" />
      <circle cx="213" cy="26" r="4" fill="#d69a79" />
    </svg>
  );
}

function GardenFlower() {
  return (
    <svg
      viewBox="0 0 330 430"
      aria-hidden="true"
      className="h-full w-full"
      fill="none"
    >
      <path d="M165 392C163 324 164 245 173 171C178 126 196 84 222 50" stroke="#6f8767" strokeWidth="5" strokeLinecap="round" />
      <path d="M167 317C132 288 101 285 75 301C97 331 127 338 167 317Z" fill="#cbd8bf" stroke="#78906e" strokeWidth="3" />
      <path d="M170 251C204 221 235 215 265 229C247 261 218 272 170 251Z" fill="#dce5d4" stroke="#78906e" strokeWidth="3" />
      <path d="M177 186C142 164 117 138 112 105C147 105 174 133 177 186Z" fill="#edf1e8" stroke="#78906e" strokeWidth="3" />
      <g transform="translate(220 61)">
        <ellipse cx="0" cy="-30" rx="19" ry="39" fill="#fffaf4" stroke="#d5aa90" strokeWidth="3" />
        <ellipse cx="29" cy="-10" rx="19" ry="39" transform="rotate(58 29 -10)" fill="#fffaf4" stroke="#d5aa90" strokeWidth="3" />
        <ellipse cx="18" cy="24" rx="19" ry="39" transform="rotate(116 18 24)" fill="#fffaf4" stroke="#d5aa90" strokeWidth="3" />
        <ellipse cx="-18" cy="24" rx="19" ry="39" transform="rotate(-116 -18 24)" fill="#fffaf4" stroke="#d5aa90" strokeWidth="3" />
        <ellipse cx="-29" cy="-10" rx="19" ry="39" transform="rotate(-58 -29 -10)" fill="#fffaf4" stroke="#d5aa90" strokeWidth="3" />
        <circle cx="0" cy="0" r="18" fill="#e9b18f" />
        <circle cx="0" cy="0" r="7" fill="#b97351" />
      </g>
      <circle cx="117" cy="104" r="9" fill="#f0c7ad" />
      <circle cx="76" cy="300" r="7" fill="#e6bda4" />
    </svg>
  );
}
