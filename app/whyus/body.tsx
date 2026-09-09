import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Code2,
  Compass,
  Flower2,
  Leaf,
  Palette,
  Sparkles,
  Sprout,
} from "lucide-react";

const items: Array<{
  number: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  tone: string;
  visual: "seed" | "shape" | "bloom";
  note: string;
  label: string;
}> = [
  {
    number: "01",
    eyebrow: "Discover",
    title: "Start with the roots, not the decoration.",
    description:
      "We learn what your business needs, who the product is for, and what should happen next. Clear roots make every design decision easier later.",
    icon: Compass,
    tone: "bg-[#eaf0df] border-[#d8e2cf] text-[#4f6649]",
    visual: "seed",
    note: "listen first",
    label: "plant the right seed",
  },
  {
    number: "02",
    eyebrow: "Shape",
    title: "Give every idea its own character.",
    description:
      "We turn strategy into a visual system with personality — thoughtful typography, natural rhythm, useful interaction, and enough restraint to stay clear.",
    icon: Palette,
    tone: "bg-[#fff0e8] border-[#f0dacd] text-[#98654d]",
    visual: "shape",
    note: "make it yours",
    label: "shape with intention",
  },
  {
    number: "03",
    eyebrow: "Grow",
    title: "Build it light enough to keep evolving.",
    description:
      "The final product is responsive, maintainable, and performance-aware from the start, so new pages and features can grow without weighing everything down.",
    icon: Code2,
    tone: "bg-[#e7f0ee] border-[#d1e0dd] text-[#426863]",
    visual: "bloom",
    note: "leave room to grow",
    label: "ready to bloom",
  },
];

export default function Body() {
  return (
    <section className="perf-section relative overflow-hidden bg-[#f3f1e7] px-4 py-20 text-[#2b3529] sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(74,91,69,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(74,91,69,0.028)_1px,transparent_1px)] bg-[size:76px_76px]" />
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full border border-[#dce3d4] bg-[#eef2e7]/70" />
      <div className="pointer-events-none absolute -right-28 bottom-16 h-72 w-72 rounded-[44%_56%_62%_38%/55%_42%_58%_45%] border border-[#ead8cc] bg-[#f8e9df]/50" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-[#d9dfd3] pb-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ced8c6] bg-[#faf9f3] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#61735b]">
              <Sprout className="h-3.5 w-3.5" />
              How we grow ideas
            </div>
            <p className="mt-5 max-w-xs text-sm leading-6 text-[#7a8275]">
              A process that stays simple enough to move quickly, but thoughtful enough to make the result feel distinct.
            </p>
          </div>

          <h2 className="max-w-4xl font-serif text-[40px] font-medium leading-[1.02] tracking-[-0.04em] text-[#2d382c] sm:text-[52px] lg:text-[64px]">
            From first seed to a product
            <span className="italic text-[#7c9472]"> ready to bloom.</span>
          </h2>
        </div>

        <GardenPath />

        <div className="mt-10 space-y-6 sm:mt-12 sm:space-y-8">
          {items.map((item, index) => {
            const Icon = item.icon;
            const reverse = index % 2 === 1;

            return (
              <article
                key={item.number}
                className="group relative grid overflow-hidden rounded-[34px] border border-[#d8ded2] bg-[#fbfaf5] shadow-[0_18px_55px_rgba(55,67,51,0.055)] transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-[#c2cdbb] hover:shadow-[0_28px_75px_rgba(55,67,51,0.085)] lg:grid-cols-2"
              >
                <div className="pointer-events-none absolute left-5 top-5 z-20 h-2.5 w-2.5 rounded-full bg-[#c8d7bd] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute left-9 top-8 z-20 h-1.5 w-1.5 rounded-full bg-[#e6b99f] opacity-0 transition-opacity delay-75 duration-300 group-hover:opacity-100" />

                <div
                  className={`relative flex min-h-[320px] flex-col justify-between p-6 sm:p-8 lg:min-h-[430px] lg:p-10 ${
                    reverse ? "lg:order-2" : ""
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="font-serif text-4xl italic text-[#c5cdbf] transition-colors duration-300 group-hover:text-[#9dac96]">
                          {item.number}
                        </span>
                        <div className="mt-3 inline-flex rotate-[-2deg] items-center gap-1.5 rounded-full border border-[#e6d5c8] bg-[#fff7f1] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#9a6d57] transition-transform duration-300 group-hover:rotate-0">
                          <Sparkles className="h-3 w-3" />
                          {item.note}
                        </div>
                      </div>

                      <div className={`grid h-11 w-11 place-items-center rounded-full border transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105 ${item.tone}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                    </div>

                    <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#7a8a73]">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-4 max-w-xl font-serif text-[34px] font-medium leading-[1.04] tracking-[-0.035em] text-[#2e392d] sm:text-[42px]">
                      {item.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-sm leading-7 text-[#6f786a] sm:text-[15px]">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-[#e2e6dd] pt-5">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#65755f]">
                      <Leaf className="h-3.5 w-3.5" />
                      Built with intention, not excess
                    </div>
                    <span className="font-serif text-sm italic text-[#a2aa9c]">
                      {item.label}
                    </span>
                  </div>
                </div>

                <div
                  className={`relative min-h-[300px] overflow-hidden border-t border-[#dfe4da] bg-[#f5f5ee] lg:min-h-[430px] lg:border-t-0 ${
                    reverse ? "lg:order-1 lg:border-r" : "lg:border-l"
                  }`}
                >
                  <div className="absolute right-5 top-5 z-10 rotate-[3deg] rounded-full border border-[#d8ded2] bg-[#fffdf8]/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#7d8b76] shadow-[0_8px_24px_rgba(55,67,51,0.05)] transition-transform duration-300 group-hover:rotate-0">
                    field study · {item.number}
                  </div>

                  <div className="whyus-drift pointer-events-none absolute left-[12%] top-[18%] h-2.5 w-2.5 rounded-full bg-[#d7a78c]/70" />
                  <div className="whyus-drift-alt pointer-events-none absolute bottom-[17%] right-[15%] h-3 w-3 rounded-full border border-[#9eb095] bg-[#eef3e9]" />

                  <ProcessVisual type={item.visual} index={index} />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-14 grid gap-6 rounded-[34px] border border-[#d8ded2] bg-[#fbfaf5] p-6 shadow-[0_18px_55px_rgba(55,67,51,0.045)] sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:p-10">
          <div>
            <div className="flex items-center gap-2 text-[#6c8065]">
              <Flower2 className="h-4 w-4" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
                The result
              </span>
            </div>
            <h3 className="mt-4 max-w-3xl font-serif text-3xl font-medium leading-tight tracking-[-0.03em] text-[#2e392d] sm:text-4xl">
              Clear enough to use. Distinct enough to remember. Light enough to stay fast.
            </h3>
          </div>

          <a
            href="/Contact"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#2f3b2e] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#455742]"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function GardenPath() {
  return (
    <div className="relative mt-10 hidden grid-cols-3 gap-4 rounded-[26px] border border-[#dce2d6] bg-[#f8f7ef]/80 p-4 sm:grid lg:p-5">
      <div className="pointer-events-none absolute left-[16%] right-[16%] top-1/2 border-t border-dashed border-[#bfcab8]" />
      {[
        ["01", "Roots"],
        ["02", "Character"],
        ["03", "Bloom"],
      ].map(([number, label], index) => (
        <div key={number} className="relative flex items-center justify-center">
          <div className={`relative z-10 flex items-center gap-2 rounded-full border px-4 py-2 shadow-[0_6px_18px_rgba(55,67,51,0.04)] ${
            index === 1
              ? "border-[#ead7ca] bg-[#fff4ed] text-[#93624b]"
              : index === 2
                ? "border-[#cfe0dc] bg-[#edf5f3] text-[#4d716c]"
                : "border-[#d6e1cd] bg-[#eef3e8] text-[#56704f]"
          }`}>
            <span className="font-serif text-sm italic">{number}</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em]">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProcessVisual({ type, index }: { type: "seed" | "shape" | "bloom"; index: number }) {
  const palette = [
    { leaf: "#839a78", soft: "#dce6d3", flower: "#e2ad8d" },
    { leaf: "#8d9d79", soft: "#f1ddd2", flower: "#c98b6c" },
    { leaf: "#6f8d83", soft: "#d8e5e1", flower: "#d3a277" },
  ][index];

  return (
    <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-10">
      <svg
        viewBox="0 0 520 430"
        className="h-full w-full max-w-[520px] transition-transform duration-700 ease-out group-hover:scale-[1.025] group-hover:-rotate-1"
        aria-hidden="true"
        fill="none"
      >
        <path
          d="M258 388C254 330 255 268 262 213C269 160 284 111 307 70"
          stroke={palette.leaf}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path d="M260 303C215 271 172 269 136 290C165 329 205 332 260 303Z" fill={palette.soft} stroke={palette.leaf} strokeWidth="3" />
        <path d="M263 236C311 207 354 208 388 233C355 266 315 267 263 236Z" fill={palette.soft} stroke={palette.leaf} strokeWidth="3" />
        <path d="M277 171C239 144 216 111 215 77C255 84 281 117 277 171Z" fill="#f7f7ef" stroke={palette.leaf} strokeWidth="3" />

        {type === "seed" && (
          <>
            <ellipse cx="308" cy="73" rx="29" ry="39" fill="#f8f4e9" stroke={palette.flower} strokeWidth="3" />
            <circle cx="308" cy="74" r="10" fill={palette.flower} />
            <circle cx="151" cy="289" r="11" fill={palette.flower} opacity="0.65" />
          </>
        )}

        {type === "shape" && (
          <>
            <path d="M314 90C287 62 297 24 331 18C363 34 365 70 340 92C333 99 322 99 314 90Z" fill="#fff8f2" stroke={palette.flower} strokeWidth="3" />
            <path d="M338 92C370 72 401 91 400 123C379 146 346 136 334 108C331 102 332 96 338 92Z" fill="#fff8f2" stroke={palette.flower} strokeWidth="3" />
            <circle cx="332" cy="95" r="15" fill={palette.flower} />
            <path d="M114 110C154 84 194 88 224 118" stroke={palette.flower} strokeWidth="3" strokeLinecap="round" strokeDasharray="8 10" />
          </>
        )}

        {type === "bloom" && (
          <g transform="translate(311 78)">
            <ellipse cx="0" cy="-34" rx="21" ry="43" fill="#fffaf4" stroke={palette.flower} strokeWidth="3" />
            <ellipse cx="32" cy="-10" rx="21" ry="43" transform="rotate(60 32 -10)" fill="#fffaf4" stroke={palette.flower} strokeWidth="3" />
            <ellipse cx="20" cy="28" rx="21" ry="43" transform="rotate(120 20 28)" fill="#fffaf4" stroke={palette.flower} strokeWidth="3" />
            <ellipse cx="-20" cy="28" rx="21" ry="43" transform="rotate(-120 -20 28)" fill="#fffaf4" stroke={palette.flower} strokeWidth="3" />
            <ellipse cx="-32" cy="-10" rx="21" ry="43" transform="rotate(-60 -32 -10)" fill="#fffaf4" stroke={palette.flower} strokeWidth="3" />
            <circle cx="0" cy="0" r="18" fill={palette.flower} />
          </g>
        )}

        <circle cx="95" cy="340" r="48" fill="#fffdf8" stroke="#d9dfd3" strokeWidth="2" />
        <path d="M78 344C93 327 108 324 121 334C110 351 95 354 78 344Z" fill={palette.soft} stroke={palette.leaf} strokeWidth="2" />
        <path d="M101 349C104 338 109 327 117 318" stroke={palette.leaf} strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}
