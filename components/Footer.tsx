import Link from "next/link";
import { SiInstagram, SiFacebook, SiTiktok, SiLine } from "react-icons/si";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/buildifyx_studio?igsh=N3k3Ym1tcjRqYmRn", icon: SiInstagram },
  { name: "Facebook", href: "https://www.facebook.com/share/1BnqzyphJ2/?mibextid=wwXIfr", icon: SiFacebook },
  { name: "TikTok", href: "https://www.tiktok.com/@buildifyx?_r=1&_t=ZS-975HyBNi92t", icon: SiTiktok },
  { name: "LINE OA", href: "https://line.me/R/ti/p/@722xuryu?oat_content=url&ts=06251804", icon: SiLine },
];

const links = [
  ["Home", "/"],
  ["Why Us", "/whyus"],
  ["Our Work", "/mywork"],
  ["Playground", "/playground"],
  ["Contact", "/Contact"],
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#fafbf6] text-[#1d2a21]">
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="absolute inset-x-0 bottom-0 h-[72%] bg-cover bg-[center_60%] opacity-[0.48] saturate-[0.9]"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/33000454/pexels-photo-33000454.jpeg?auto=compress&cs=tinysrgb&w=2200')",
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#fafbf6_0%,rgba(250,251,246,0.98)_18%,rgba(250,251,246,0.82)_42%,rgba(250,251,246,0.3)_72%,rgba(250,251,246,0.9)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_18%_20%,rgba(118,145,112,0.18),transparent_28%),radial-gradient(circle_at_78%_4%,rgba(223,230,193,0.4),transparent_32%)]" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute left-[-5%] top-[30%] h-52 w-52 rounded-full bg-[#bfd6b4]/35 blur-[90px]" />
      <div aria-hidden="true" className="pointer-events-none absolute right-[-4%] top-[26%] h-64 w-64 rounded-full bg-[#e2dcb4]/30 blur-[100px]" />
      <span aria-hidden="true" className="pointer-events-none absolute left-[5%] top-[22%] rotate-[-22deg] text-5xl text-[#708d68]/35">❧</span>
      <span aria-hidden="true" className="pointer-events-none absolute right-[7%] top-[18%] rotate-[20deg] text-6xl text-[#7f9876]/30">❧</span>
      <span aria-hidden="true" className="pointer-events-none absolute right-[12%] top-[34%] text-2xl text-[#d7b486]/60">✦</span>
      <span aria-hidden="true" className="pointer-events-none absolute left-[13%] top-[46%] text-xl text-[#d7b486]/45">✦</span>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">
        <div className="grid gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#6e8569]">Buildifyx</p>
            <h2 className="mt-5 max-w-2xl text-[46px] font-light leading-[0.94] tracking-[-0.06em] sm:text-[62px] lg:text-[78px]">
              Good ideas
              <span className="block font-serif italic text-[#4f684f]">grow further.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-7 text-[#5a655d] sm:text-base">
              Let’s build digital products that create a brighter tomorrow — together.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/Contact" className="site-cta-dark group">
                Start a project
                <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
              </Link>
              <Link
                href="/mywork"
                className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#26362b]/18 bg-white/68 px-7 text-sm font-medium text-[#26362b] shadow-[0_14px_35px_rgba(54,73,59,0.06)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white"
              >
                See our work
              </Link>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:pt-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#6e8569]">Quick Links</p>
              <nav className="mt-5 flex flex-col items-start gap-3.5">
                {links.map(([label, href]) => (
                  <Link key={href} href={href} className="text-sm text-[#4e5951] transition hover:translate-x-1 hover:text-[#274332]">
                    {label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#6e8569]">Contact</p>
              <div className="mt-5 space-y-4 text-sm text-[#4e5951]">
                <a href="mailto:buildifyX.th@gmail.com" className="flex items-center gap-3 transition hover:text-[#274332]">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/72 shadow-[0_8px_22px_rgba(60,78,63,0.08)] backdrop-blur-sm">
                    <MdEmail className="text-base text-[#506853]" />
                  </span>
                  <span className="break-all">buildifyX.th@gmail.com</span>
                </a>

                <div className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/72 shadow-[0_8px_22px_rgba(60,78,63,0.08)] backdrop-blur-sm">
                    <MdPhone className="text-base text-[#506853]" />
                  </span>
                  <div className="flex flex-wrap gap-x-1.5 pt-2">
                    <a href="tel:0645809429" className="hover:text-[#274332]">0645809429</a>
                    <span>·</span>
                    <a href="tel:0638760067" className="hover:text-[#274332]">0638760067</a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/72 shadow-[0_8px_22px_rgba(60,78,63,0.08)] backdrop-blur-sm">
                    <MdLocationOn className="text-base text-[#506853]" />
                  </span>
                  <span>Bangkok, Thailand</span>
                </div>
              </div>

              <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#6e8569]">Follow Us</p>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="grid h-10 w-10 place-items-center rounded-full bg-white/74 text-base text-[#35463a] shadow-[0_8px_20px_rgba(60,78,63,0.07)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:bg-[#506853] hover:text-white"
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-28 rounded-[26px] border border-white/55 bg-white/50 px-5 py-4 shadow-[0_14px_40px_rgba(53,73,57,0.06)] backdrop-blur-md sm:px-6">
          <div className="flex flex-col gap-3 text-[9px] uppercase tracking-[0.22em] text-[#617064] sm:flex-row sm:items-center sm:justify-between sm:text-[10px]">
            <span>© 2026 Buildifyx · All rights reserved</span>
            <span>Think · Design · Build · Grow</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
