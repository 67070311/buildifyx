import Link from "next/link";
import { ArrowUpRight, Code2, Compass, Palette } from "lucide-react";

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

function ButterflyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5" fill="currentColor">
      <path d="M11.2 11.3C8.4 4.7 3.2 4.5 2.4 6.7c-.8 2.2 1.4 5.1 5.8 6.2-3.6.3-5.7 2.4-4.7 4.3 1.2 2.1 5.6 1.3 7.7-2.6V21h1.6v-6.4c2.1 3.9 6.5 4.7 7.7 2.6 1-1.9-1.1-4-4.7-4.3 4.4-1.1 6.6-4 5.8-6.2-.8-2.2-6-2-8.8 4.6-.4-.5-1.2-.5-1.6 0Z" />
    </svg>
  );
}

export default function Body() {
  return (
    <section className="perf-section overflow-hidden bg-white text-[#151a17]">
      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-24 sm:px-8 sm:pt-28 lg:px-10 lg:pt-32">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.26em] text-[#5f6b63]">
              <ButterflyIcon />
              How we work
            </div>
            <div className="mt-6 h-px w-24 bg-[#1b241e]/25" />
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#69716c]">
              One process, three different energies — clarity first, expression second, performance all the way through.
            </p>
          </div>

          <div className="relative">
            <span className="pointer-events-none absolute -left-2 -top-10 font-serif text-[90px] italic leading-none text-[#7f8d83]/[0.08] sm:text-[130px] lg:text-[170px]">
              01—03
            </span>
            <h2 className="relative max-w-5xl text-balance text-[46px] font-light leading-[0.94] tracking-[-0.06em] sm:text-[62px] lg:text-[82px]">
              We do not hand ideas through a conveyor belt.
              <span className="mt-2 block font-serif italic text-[#718074]">
                We let each one find its own rhythm.
              </span>
            </h2>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1500px] px-5 pb-24 pt-12 sm:px-8 sm:pb-28 lg:px-10 lg:pb-32">
        <div className="relative grid min-h-[720px] items-center gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-16">
          <div className="relative z-10 max-w-xl lg:pl-8">
            <div className="pointer-events-none absolute -left-8 -top-24 select-none font-serif text-[190px] italic leading-none text-black/[0.035] sm:text-[250px] lg:-left-12 lg:text-[320px]">
              01
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5e6d63]">
                <Compass className="h-4 w-4" />
                Discover
              </div>
              <h3 className="mt-6 max-w-lg text-[42px] font-light leading-[0.98] tracking-[-0.05em] sm:text-[54px] lg:text-[64px]">
                Before we draw anything,
                <span className="font-serif italic text-[#708075]"> we listen for what matters.</span>
              </h3>
              <p className="mt-7 max-w-lg text-[15px] leading-8 text-[#667069]">
                We start with the business, the audience, and the decisions that need to become easier. The visual direction comes after the reason to build is clear.
              </p>

              <div className="mt-9 flex flex-wrap gap-x-8 gap-y-3 border-t border-black/10 pt-5 text-[10px] font-medium uppercase tracking-[0.16em] text-[#7b847e]">
                <span>Goals & audience</span>
                <span>User journey</span>
                <span>Direction</span>
              </div>
            </div>
          </div>

          <div className="relative flex min-h-[560px] items-center sm:min-h-[650px] lg:min-h-[700px]">
            <div className="grid w-full max-w-[720px] grid-cols-2 gap-2.5 sm:gap-5">
              <article className="group relative overflow-hidden rounded-[20px] border border-[#dce5de] bg-[#edf3ef] p-2.5 shadow-[0_18px_50px_rgba(35,50,40,0.10)] sm:rounded-[32px] sm:p-5 sm:shadow-[0_24px_70px_rgba(35,50,40,0.10)]">
                <div className="flex items-center justify-between text-[9px] font-medium uppercase tracking-[0.18em] text-[#657268]">
                  <span>Discovery board</span>
                  <span className="font-serif text-sm italic text-[#839084]">01A</span>
                </div>

                <div className="relative mt-4 overflow-hidden rounded-[24px] bg-[#fbfaf5]">
                  <img
                    src={discoverImage}
                    alt="Cartoon developer working on a laptop"
                    loading="lazy"
                    decoding="async"
                    className="h-[300px] w-full scale-[1.08] object-cover object-top transition-transform duration-700 group-hover:scale-[1.12] sm:h-[350px]"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,transparent,#fbfaf5)]" />
                  <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                    {["Audience", "Flow"].map((item) => (
                      <span key={item} className="rounded-full border border-[#d8e2da] bg-white/92 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.13em] text-[#526258]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="px-1 pb-1 pt-4">
                  <p className="font-serif text-xl italic text-[#253129]">Clarity before pixels.</p>
                  <p className="mt-1 text-xs leading-5 text-[#69736c]">
                    Understand the problem before deciding what the screen should become.
                  </p>
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-[20px] border border-[#e7dfd4] bg-[#f6f1e9] p-2.5 shadow-[0_18px_50px_rgba(64,49,35,0.09)] sm:translate-y-12 sm:rounded-[32px] sm:p-5 sm:shadow-[0_24px_70px_rgba(64,49,35,0.09)]">
                <div className="flex items-center justify-between text-[9px] font-medium uppercase tracking-[0.18em] text-[#74695f]">
                  <span>Signal map</span>
                  <span className="font-serif text-sm italic text-[#998d82]">01B</span>
                </div>

                <div className="relative mt-4 overflow-hidden rounded-[24px] bg-[#fffaf2]">
                  <img
                    src={discoverThinkingImage}
                    alt="Cartoon woman thinking while working on a laptop"
                    loading="lazy"
                    decoding="async"
                    className="h-[250px] w-full object-contain object-center p-3 transition-transform duration-700 group-hover:scale-[1.035] sm:h-[290px]"
                  />
                  <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-1.5">
                    {["Goal", "Journey", "Scope"].map((item, index) => (
                      <span key={item} className={`rounded-full px-2 py-1.5 text-center text-[7px] font-semibold uppercase tracking-[0.12em] ${index === 1 ? "bg-[#dceadf] text-[#294033]" : "bg-white/85 text-[#59665e]"}`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative px-1 pb-1 pt-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#9fcab0]" />
                    <span className="h-px flex-1 bg-[#cfc5b8]" />
                    <span className="h-2.5 w-2.5 rounded-full border border-[#b79470]" />
                  </div>
                  <p className="font-serif text-xl italic text-[#2b332d]">Turn signals into direction.</p>
                  <p className="mt-1 text-xs leading-5 text-[#716a63]">
                    Connect goals, user needs, and constraints into one clear product path.
                  </p>
                </div>
              </article>
            </div>

            <div className="whyus-drift pointer-events-none absolute right-[7%] top-[6%] h-3 w-3 rounded-full bg-[#b9d3c2]" />
            <div className="whyus-drift-alt pointer-events-none absolute left-[2%] bottom-[11%] h-2.5 w-2.5 rounded-full bg-[#d6ad82]" />
          </div>
        </div>
      </div>

      <section className="relative isolate min-h-[760px] overflow-hidden bg-[#070a08] text-white">
        <img
          src={shapeImage}
          alt="Laptop showing a graphic design interface"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-68"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,6,0.96)_0%,rgba(5,8,6,0.8)_38%,rgba(5,8,6,0.24)_72%,rgba(5,8,6,0.7)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(180deg,#fff,transparent)]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(0deg,#fff,transparent)] opacity-95" />

        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-5 py-28 sm:px-8 lg:px-10">
          <div className="grid w-full items-end gap-12 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-emerald-100/70">
                <Palette className="h-4 w-4" />
                Shape
              </div>
              <h3 className="mt-6 max-w-2xl text-[44px] font-light leading-[0.96] tracking-[-0.055em] sm:text-[58px] lg:text-[72px]">
                Then we give it a visual language
                <span className="font-serif italic text-emerald-100"> people can feel.</span>
              </h3>
              <p className="mt-7 max-w-lg text-[15px] leading-8 text-white/62">
                Typography, motion, interaction, and rhythm all work together. The point is not decoration — it is creating something unmistakably yours.
              </p>
            </div>

            <div className="relative min-h-[330px] self-stretch lg:min-h-[460px]">
              <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 font-serif text-[170px] italic leading-none text-white/[0.07] sm:text-[240px] lg:text-[300px]">
                02
              </div>
              <p className="absolute bottom-[12%] right-[4%] max-w-sm text-right font-serif text-2xl italic leading-snug text-white/88 sm:text-3xl">
                Personality works best when it grows from purpose, not from trend.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f5f8f4] text-[#151a17]">
        <div className="pointer-events-none absolute -left-8 top-10 font-serif text-[220px] italic leading-none text-[#263129]/[0.035] sm:text-[300px] lg:text-[390px]">03</div>
        <div className="whyus-drift pointer-events-none absolute right-[8%] top-[16%] h-3 w-3 rounded-full bg-[#a8ccb4]" />
        <div className="whyus-drift-alt pointer-events-none absolute left-[46%] bottom-[14%] h-2.5 w-2.5 rounded-full bg-[#d9ad7b]" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
            <div className="relative flex min-h-[620px] items-center">
              <div className="grid w-full max-w-[760px] grid-cols-2 gap-2.5 sm:gap-5">
                <article className="group relative overflow-hidden rounded-[20px] border border-[#d8e4dc] bg-[#eaf2ed] p-2.5 shadow-[0_18px_50px_rgba(35,50,40,0.10)] sm:rounded-[32px] sm:p-5 sm:shadow-[0_24px_70px_rgba(35,50,40,0.10)]">
                  <div className="flex items-center justify-between text-[9px] font-medium uppercase tracking-[0.18em] text-[#657268]">
                    <span>Build room</span>
                    <span className="font-serif text-sm italic text-[#839084]">03A</span>
                  </div>

                  <div className="relative mt-4 overflow-hidden rounded-[24px] bg-[#f9fbf8]">
                    <img
                      src={buildDeveloperImage}
                      alt="Cartoon developer working at a desktop computer"
                      loading="lazy"
                      decoding="async"
                      className="h-[180px] w-full object-contain object-center p-2 transition-transform duration-700 group-hover:scale-[1.035] sm:h-[350px] sm:p-4"
                    />
                    <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
                      {["Code", "Responsive"].map((item) => (
                        <span key={item} className="rounded-full border border-[#d7e2da] bg-white/92 px-2.5 py-1 text-[8px] font-semibold uppercase tracking-[0.13em] text-[#526258]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-1 pb-1 pt-4">
                    <p className="font-serif text-xl italic text-[#253129]">Structure before scale.</p>
                    <p className="mt-1 text-xs leading-5 text-[#69736c]">
                      Build clean foundations first, then make every screen adapt with confidence.
                    </p>
                  </div>
                </article>

                <article className="group relative overflow-hidden rounded-[20px] border border-[#e7dfd4] bg-[#f6f1e9] p-2.5 shadow-[0_18px_50px_rgba(64,49,35,0.09)] sm:translate-y-12 sm:rounded-[32px] sm:p-5 sm:shadow-[0_24px_70px_rgba(64,49,35,0.09)]">
                  <div className="flex items-center justify-between text-[9px] font-medium uppercase tracking-[0.18em] text-[#74695f]">
                    <span>Review desk</span>
                    <span className="font-serif text-sm italic text-[#998d82]">03B</span>
                  </div>

                  <div className="relative mt-4 overflow-hidden rounded-[24px] bg-[#fffaf2]">
                    <img
                      src={buildReviewImage}
                      alt="Cartoon woman reviewing work on a laptop"
                      loading="lazy"
                      decoding="async"
                      className="h-[250px] w-full object-contain object-center p-4 transition-transform duration-700 group-hover:scale-[1.035] sm:h-[290px]"
                    />
                    <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-1.5">
                      {["Test", "Tune", "Ship"].map((item, index) => (
                        <span key={item} className={`rounded-full px-2 py-1.5 text-center text-[7px] font-semibold uppercase tracking-[0.12em] ${index === 1 ? "bg-[#dceadf] text-[#294033]" : "bg-white/88 text-[#59665e]"}`}>
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative px-1 pb-1 pt-4">
                    <div className="mb-3 flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-[#9fcab0]" />
                      <span className="h-px flex-1 bg-[#cfc5b8]" />
                      <span className="h-2.5 w-2.5 rounded-full border border-[#b79470]" />
                    </div>
                    <p className="font-serif text-xl italic text-[#2b332d]">Polish without the weight.</p>
                    <p className="mt-1 text-xs leading-5 text-[#716a63]">
                      Test the details, tune performance, and ship something that stays easy to grow.
                    </p>
                  </div>
                </article>
              </div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#5e6d63]">
                <Code2 className="h-4 w-4" />
                Build
              </div>
              <h3 className="mt-6 max-w-2xl text-[44px] font-light leading-[0.96] tracking-[-0.055em] sm:text-[58px] lg:text-[70px]">
                Beautiful on the surface.
                <span className="block font-serif italic text-[#708075]">Serious underneath.</span>
              </h3>
              <p className="mt-7 max-w-xl text-[15px] leading-8 text-[#667069]">
                We turn the visual system into responsive, maintainable software without losing the personality that made the idea worth building in the first place.
              </p>

              <div className="mt-10 space-y-0 border-y border-black/10">
                {[
                  ["01", "Responsive by default", "Layouts adapt cleanly from small screens to large ones."],
                  ["02", "Performance aware", "Motion, media, and code stay intentional instead of becoming weight."],
                  ["03", "Built to evolve", "The structure stays understandable when the next feature arrives."],
                ].map(([number, title, description]) => (
                  <div key={number} className="group flex gap-5 border-b border-black/10 py-5 last:border-b-0">
                    <span className="pt-0.5 font-serif text-lg italic text-[#849087]">{number}</span>
                    <div>
                      <p className="text-sm font-semibold text-[#253028] transition-transform duration-300 group-hover:translate-x-1">{title}</p>
                      <p className="mt-1 max-w-md text-xs leading-6 text-[#758078]">{description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/Contact"
                className="site-cta-dark group mt-9"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
