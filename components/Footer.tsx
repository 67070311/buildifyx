import { SiInstagram, SiFacebook, SiTiktok, SiLine } from "react-icons/si";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  const socials = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/buildifyx_studio?igsh=N3k3Ym1tcjRqYmRn",
      icon: SiInstagram,
      className: "bg-gradient-to-br from-yellow-300 via-pink-500 to-purple-600",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/share/1BnqzyphJ2/?mibextid=wwXIfr",
      icon: SiFacebook,
      className: "bg-[#1877F2]",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@buildifyx?_r=1&_t=ZS-975HyBNi92t",
      icon: SiTiktok,
      className: "bg-black",
    },
    {
      name: "LINE OA",
      href: "https://line.me/R/ti/p/@722xuryu?oat_content=url&ts=06251804",
      icon: SiLine,
      className: "bg-[#06C755]",
    },
  ];

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#F4F4FF] via-white to-[#ECEBFF] px-4 py-9 text-slate-950 sm:px-6 md:px-8 md:py-12 lg:px-14 lg:py-24 xl:py-28">
      {/* soft background */}
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#5552D9]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-72 w-72 rounded-full bg-[#A7A5F8]/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#38BDF8]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid gap-9 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-24">
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo/logo.png"
                alt="Buildifyx Logo"
                className="h-11 w-11 object-contain md:h-12 md:w-12"
              />

              <div>
                <h2 className="text-2xl font-normal tracking-[-0.05em] text-slate-950 md:text-3xl">
                  Buildifyx
                </h2>

                <p className="mt-0.5 text-[10px] font-light uppercase tracking-[0.24em] text-slate-400 md:text-[11px]">
                  Software Studio
                </p>
              </div>
            </div>

            <div className="mt-7 max-w-xl">
              <p className="text-[10px] font-light uppercase tracking-[0.28em] text-[#5552D9] md:text-xs">
                Let’s create together
              </p>

              <h3 className="mt-3 max-w-xl text-3xl font-normal leading-[1.08] tracking-[-0.06em] text-slate-950 md:text-[44px]">
                Ready to build your next digital product?
              </h3>

              <p className="mt-4 max-w-xl text-sm font-light leading-6 text-slate-500 md:text-[15px] md:leading-7">
                We design and develop websites, applications, dashboards, and
                digital systems that help your business grow.
              </p>
            </div>

            {/* CONTACT */}
            <div className="mt-6 flex flex-col gap-3 text-sm font-light text-slate-500 md:text-[15px]">
              <a
                href="mailto:buildifyX.th@gmail.com"
                className="group flex w-fit items-center gap-3 transition hover:text-[#5552D9]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F0EFFF] text-base text-[#5552D9] transition group-hover:bg-[#5552D9] group-hover:text-white">
                  <MdEmail />
                </span>

                <span>buildifyX.th@gmail.com</span>
              </a>

              <div className="flex w-fit items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F0EFFF] text-base text-[#5552D9]">
                  <MdPhone />
                </span>

                <div className="flex flex-wrap items-center gap-x-1">
                  <a
                    href="tel:0645809429"
                    className="transition hover:text-[#5552D9]"
                  >
                    0645809429
                  </a>

                  <span>,</span>

                  <a
                    href="tel:0638760067"
                    className="transition hover:text-[#5552D9]"
                  >
                    0638760067
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-between lg:min-h-[360px] lg:pt-20">
            {/* SOCIAL ICONS ONLY */}
            <div className="flex flex-wrap items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="group transition hover:-translate-y-1"
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl text-white shadow-[0_10px_25px_rgba(15,23,42,0.12)] transition group-hover:shadow-[0_14px_35px_rgba(15,23,42,0.18)] md:h-12 md:w-12 md:text-2xl ${social.className}`}
                    >
                      <Icon />
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="mt-7 flex flex-col gap-3 rounded-2xl bg-white/35 p-4 shadow-[0_8px_26px_rgba(15,23,42,0.04)] backdrop-blur-xl md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[10px] font-light uppercase tracking-[0.26em] text-slate-400 md:text-xs">
                  Location
                </p>

                <p className="mt-2 text-base font-light text-slate-800 md:text-lg">
                  Thailand
                </p>
              </div>

              <div className="text-left text-[11px] font-light text-slate-400 md:text-right md:text-xs">
                <p>© 2026 Buildifyx</p>
                <p className="mt-0.5">All rights reserved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
