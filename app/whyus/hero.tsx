import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const particles = [
  "left-[18%] top-[46%]", "left-[23%] top-[58%]", "left-[28%] top-[67%]",
  "left-[31%] top-[52%]", "left-[35%] top-[43%]", "left-[36%] top-[58%]",
  "left-[40%] top-[69%]", "left-[41%] top-[48%]", "left-[46%] top-[62%]",
  "left-[48%] top-[44%]", "left-[50%] top-[54%]", "left-[53%] top-[72%]",
  "left-[55%] top-[60%]", "left-[58%] top-[41%]", "left-[60%] top-[49%]",
  "left-[64%] top-[57%]", "left-[67%] top-[70%]", "left-[69%] top-[53%]",
  "left-[73%] top-[63%]", "left-[77%] top-[47%]", "left-[80%] top-[59%]",
  "left-[83%] top-[68%]",
];

function ButterflyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 shrink-0 text-[#2f7fff]" fill="currentColor">
      <path d="M11.2 11.3C8.4 4.7 3.2 4.5 2.4 6.7c-.8 2.2 1.4 5.1 5.8 6.2-3.6.3-5.7 2.4-4.7 4.3 1.2 2.1 5.6 1.3 7.7-2.6V21h1.6v-6.4c2.1 3.9 6.5 4.7 7.7 2.6 1-1.9-1.1-4-4.7-4.3 4.4-1.1 6.6-4 5.8-6.2-.8-2.2-6-2-8.8 4.6-.4-.5-1.2-.5-1.6 0Z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="whyus-night-hero relative min-h-[100svh] overflow-hidden bg-white text-white">
      <div
        aria-hidden="true"
        className="whyus-night-scene pointer-events-none absolute inset-0 bg-cover brightness-[1.22] saturate-[1.02] contrast-[0.96]"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/531972/pexels-photo-531972.jpeg?auto=compress&cs=tinysrgb&w=2400')",
          backgroundPosition: "center 30%",
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(232,246,255,0.10)_32%,rgba(205,232,255,0.06)_58%,rgba(255,255,255,0.16)_100%)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,0.68)_0%,rgba(246,251,255,0.38)_24%,rgba(225,241,255,0.14)_46%,transparent_68%),radial-gradient(circle_at_17%_68%,rgba(255,255,255,0.18),transparent_34%),radial-gradient(circle_at_84%_62%,rgba(255,255,255,0.18),transparent_34%)]" />
      <div aria-hidden="true" className="whyus-night-aura pointer-events-none absolute left-1/2 top-[52%] h-[34rem] w-[42rem] max-w-[92vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(255,255,255,0.54)_0%,rgba(192,226,255,0.18)_44%,transparent_74%)]" />

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {particles.map((position, index) => (
          <span
            key={position}
            className={`whyus-night-particle absolute ${position} ${index % 5 === 0 ? "whyus-night-star h-3 w-3" : index % 3 === 0 ? "h-1.5 w-1.5 rounded-full bg-white/90 shadow-[0_0_12px_rgba(190,225,255,0.98)]" : "h-1 w-1 rounded-full bg-white/80 shadow-[0_0_10px_rgba(190,225,255,0.9)]"}`}
            style={{ animationDelay: `${index * 0.28}s` }}
          />
        ))}
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute left-[5.5%] top-[31%] z-10 hidden text-[9px] uppercase leading-[2.15] tracking-[0.22em] text-[#55718f]/60 xl:block">
        <p>01&nbsp;&nbsp; Strategy</p>
        <p>02&nbsp;&nbsp; Design</p>
        <p>03&nbsp;&nbsp; Engineering</p>
        <p>04&nbsp;&nbsp; Grow together</p>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute right-[6%] top-[29%] z-10 hidden max-w-[150px] -rotate-6 font-serif text-xl italic leading-7 text-[#55718f]/60 xl:block">
        Good ideas<br />create a brighter<br />tomorrow.
        <span className="mt-5 block h-px w-5 bg-[#6f8cab]/35" />
      </div>

      <div className="relative z-20 mx-auto flex min-h-[100svh] max-w-7xl flex-col px-5 pb-8 pt-32 sm:px-8 sm:pt-36 lg:px-10 lg:pt-40">
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center text-center">
          <div className="whyus-rise-in inline-flex items-center gap-2 rounded-full border border-[#2f7fff]/15 bg-white/58 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#49627f] shadow-[0_10px_30px_rgba(69,126,190,.10)] backdrop-blur-xl">
            <ButterflyIcon />
            Buildifyx Studio
          </div>

          <h1 className="whyus-rise-in-delayed mt-8 text-balance text-[46px] font-light leading-[0.96] tracking-[-0.055em] text-[#10233f] sm:text-[68px] md:text-[82px] lg:text-[96px]">
            Built for ideas that
          </h1>
          <div className="whyus-night-word mt-2 inline-flex items-center justify-center px-2 py-1">
            <span className="font-serif text-[62px] font-medium italic leading-none tracking-[-0.05em] text-[#2f7fff] [text-shadow:0_10px_30px_rgba(47,127,255,0.16)] sm:text-[80px] md:text-[94px]">
              matter.
            </span>
          </div>

          <p className="whyus-rise-in-delayed mt-7 max-w-2xl text-sm leading-7 text-[#53677f] sm:text-base">
            We turn ideas into digital products through strategy, expressive design, and reliable engineering — built to create real impact.
          </p>

          <Link href="/Contact" className="whyus-night-cta group mt-7 inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#2f7fff] px-8 text-sm font-semibold !text-white shadow-[0_14px_34px_rgba(47,127,255,.28)] ring-1 ring-[#2f7fff]/20 transition hover:-translate-y-0.5 hover:bg-[#216fe8]">
            <span className="relative z-10 text-white">Start a project</span>
            <ArrowUpRight className="relative z-10 h-4 w-4 text-white transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <div className="whyus-rise-in-delayed mt-8 grid w-full max-w-2xl grid-cols-2 border-y border-[#5f87ad]/12 bg-white/24 py-4 backdrop-blur-md sm:grid-cols-4 sm:border-y-0 sm:bg-transparent sm:py-0 sm:backdrop-blur-none">
            {[
              ["30+", "Clients"],
              ["116+", "Projects"],
              ["Bangkok", "Based"],
              ["Worldwide", "Impact"],
            ].map(([value, label], index) => (
              <div key={label} className={`px-3 py-2 ${index > 0 ? "sm:border-l sm:border-[#5f87ad]/20" : ""}`}>
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#173a61]">{value}</p>
                <p className="mt-1.5 text-[8px] uppercase tracking-[0.24em] text-[#6c8299]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-auto flex items-end justify-between gap-4 border-t border-[#6f8cab]/18 pt-5 text-[9px] uppercase tracking-[0.22em] text-[#6f8298]/70 sm:text-[10px]">
          <span>Think · Design · Build</span>
          <span className="hidden sm:inline">Ideas with purpose. Products with impact.</span>
          <span>Buildifyx</span>
        </div>
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[18%] bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.88))]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[7%] bg-[linear-gradient(90deg,rgba(255,255,255,0.34),transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[7%] bg-[linear-gradient(270deg,rgba(255,255,255,0.34),transparent)]" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[6%] bg-[linear-gradient(180deg,rgba(255,255,255,0.20),transparent)]" />
    </section>
  );
}
