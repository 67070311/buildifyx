import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const particles = [
  "left-[18%] top-[46%]",
  "left-[23%] top-[58%]",
  "left-[28%] top-[67%]",
  "left-[31%] top-[52%]",
  "left-[35%] top-[43%]",
  "left-[36%] top-[58%]",
  "left-[40%] top-[69%]",
  "left-[41%] top-[48%]",
  "left-[46%] top-[62%]",
  "left-[48%] top-[44%]",
  "left-[50%] top-[54%]",
  "left-[53%] top-[72%]",
  "left-[55%] top-[60%]",
  "left-[58%] top-[41%]",
  "left-[60%] top-[49%]",
  "left-[64%] top-[57%]",
  "left-[67%] top-[70%]",
  "left-[69%] top-[53%]",
  "left-[73%] top-[63%]",
  "left-[77%] top-[47%]",
  "left-[80%] top-[59%]",
  "left-[83%] top-[68%]",
];

function ButterflyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 text-emerald-200/80" fill="currentColor">
      <path d="M11.2 11.3C8.4 4.7 3.2 4.5 2.4 6.7c-.8 2.2 1.4 5.1 5.8 6.2-3.6.3-5.7 2.4-4.7 4.3 1.2 2.1 5.6 1.3 7.7-2.6V21h1.6v-6.4c2.1 3.9 6.5 4.7 7.7 2.6 1-1.9-1.1-4-4.7-4.3 4.4-1.1 6.6-4 5.8-6.2-.8-2.2-6-2-8.8 4.6-.4-.5-1.2-.5-1.6 0Z" />
    </svg>
  );
}

export default function SwappedHero() {
  return (
    <section className="whyus-night-hero relative min-h-[100svh] overflow-hidden bg-[#050706] text-white">
      <div
        aria-hidden="true"
        className="whyus-night-scene pointer-events-none absolute inset-x-0 bottom-0 h-[72%] bg-cover bg-[center_60%] sm:h-[76%] lg:h-[78%]"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/20566901/pexels-photo-20566901.jpeg?auto=compress&cs=tinysrgb&w=1800')",
        }}
      />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#080a09_0%,rgba(8,10,9,0.98)_25%,rgba(8,10,9,0.70)_49%,rgba(5,7,6,0.12)_72%,rgba(4,6,5,0.66)_100%)]" />
      <div aria-hidden="true" className="whyus-night-aura pointer-events-none absolute left-1/2 top-[55%] h-[38rem] w-[38rem] max-w-[90vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(117,255,211,0.18)_0%,rgba(86,179,160,0.08)_32%,transparent_68%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-[28%] bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.58))]" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {particles.map((position, index) => (
          <span
            key={position}
            className={`whyus-night-particle absolute ${position} ${
              index % 5 === 0
                ? "whyus-night-star h-3 w-3"
                : index % 3 === 0
                  ? "h-1.5 w-1.5 rounded-full bg-white/90 shadow-[0_0_12px_rgba(202,255,236,0.95)]"
                  : "h-1 w-1 rounded-full bg-white/80 shadow-[0_0_10px_rgba(202,255,236,0.85)]"
            }`}
            style={{ animationDelay: `${index * 0.28}s` }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pb-8 pt-32 sm:px-8 sm:pt-36 lg:px-10 lg:pt-40">
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center text-center">
          <div className="whyus-rise-in inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.055] px-3.5 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-white/58">
            <ButterflyIcon />
            Why Buildifyx
          </div>

          <h1 className="whyus-rise-in-delayed mt-8 text-balance text-[46px] font-light leading-[0.95] tracking-[-0.055em] text-white sm:text-[68px] md:text-[82px] lg:text-[96px]">
            Built for ideas that
          </h1>

          <div className="whyus-night-word mt-3 inline-flex items-center justify-center px-2 py-1">
            <span className="font-serif text-[58px] font-medium italic leading-none tracking-[-0.05em] text-[#f4fff9] [text-shadow:0_0_20px_rgba(218,255,238,0.62)] sm:text-[76px] md:text-[86px]">
              beautiful.
            </span>
          </div>

          <p className="whyus-rise-in-delayed mt-7 max-w-xl text-sm leading-7 text-white/54 sm:text-base">
            Strategy, expressive design, and reliable engineering for digital products built to keep moving forward.
          </p>

          <div className="whyus-rise-in-delayed mt-7 flex flex-col items-center gap-3">
            <Link href="/Contact" className="site-cta-light whyus-night-cta group">
              Start a project
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/72 [text-shadow:0_1px_12px_rgba(0,0,0,0.95)]">
              30+ clients · 116+ projects · Bangkok → Worldwide
            </span>
          </div>
        </div>

        <div className="relative mt-auto flex items-end justify-between gap-4 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.22em] text-white/30 sm:text-[10px]">
          <span>Think · Design · Build</span>
          <span className="hidden sm:inline">Digital products with room to grow</span>
          <span>Buildifyx</span>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-20 bg-[linear-gradient(180deg,transparent,#f3f1e7)]" />
    </section>
  );
}
