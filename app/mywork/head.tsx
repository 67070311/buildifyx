"use client";

import { motion } from "framer-motion";

export default function Head() {
  const works = [
    {
      title: "Website",
      fullTitle: "Website Development",
      tag: "Web",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
      description:
        "Modern websites with clean structure, responsive layouts, and smooth user experiences.",
      color: "text-[#A7A5F8]",
      line: "bg-[#A7A5F8]",
    },
    {
      title: "App",
      fullTitle: "App Development",
      tag: "Application",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1400&q=80",
      description:
        "Mobile-friendly apps and web applications that work smoothly across every device.",
      color: "text-[#7DD3FC]",
      line: "bg-[#7DD3FC]",
    },
    {
      title: "AI",
      fullTitle: "AI Systems",
      tag: "AI",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
      description:
        "AI workflows, smart automation, chat systems, and tools that help businesses work faster.",
      color: "text-[#FFCF70]",
      line: "bg-[#FFCF70]",
    },
    {
      title: "Data",
      fullTitle: "Data Products",
      tag: "Data",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
      description:
        "Dashboards, analytics tools, and data systems that turn information into useful insights.",
      color: "text-[#86EFAC]",
      line: "bg-[#86EFAC]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050507] px-3 py-16 text-white sm:px-6 md:py-28">
      {/* Clean background - no blur */}
      <div className="pointer-events-none absolute inset-0 bg-[#050507]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[360px] bg-gradient-to-b from-[#11111c] to-[#050507]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mx-auto mb-4 w-fit rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[10px] font-normal uppercase tracking-[0.24em] text-[#A7A5F8] sm:px-5 sm:text-[11px]">
            Our Work
          </div>

          <h1 className="text-3xl font-normal leading-[1.08] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
            Digital Products
            <br />
            We’ve Crafted
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-xs font-normal leading-6 text-white/50 sm:text-base sm:leading-8">
            We design and build websites, applications, AI systems, and data
            products that help brands grow and work better.
          </p>
        </motion.div>

        {/* Work Cards - mobile 2 columns */}
        <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:gap-6 lg:mt-20">
          {works.map((work, index) => (
            <motion.article
              key={work.fullTitle}
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 + index * 0.08 }}
              className="group overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#111114] p-2 transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:rounded-[2rem] sm:p-3"
            >
              <div className="overflow-hidden rounded-[1rem] bg-[#050507] sm:rounded-[1.5rem]">
                <img
                  src={work.image}
                  alt={work.fullTitle}
                  className="h-[115px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[260px] md:h-[320px]"
                />
              </div>

              <div className="p-3 sm:p-6">
                <div
                  className={`mb-3 h-1 w-9 rounded-full sm:h-1.5 sm:w-12 ${work.line}`}
                />

                <p
                  className={`text-[9px] font-normal uppercase tracking-[0.22em] sm:text-xs ${work.color}`}
                >
                  {work.tag}
                </p>

                <h2 className="mt-2 text-base font-normal tracking-[-0.03em] text-white sm:text-3xl">
                  <span className="sm:hidden">{work.title}</span>
                  <span className="hidden sm:inline">{work.fullTitle}</span>
                </h2>

                <p className="mt-2 max-h-[58px] overflow-hidden text-[11px] font-normal leading-5 text-white/45 sm:mt-3 sm:max-h-none sm:text-base sm:leading-7">
                  {work.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Capability Card */}
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="mx-auto mt-8 grid max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#111114] p-2 sm:mt-12 sm:rounded-[2rem] sm:p-3 md:grid-cols-[0.9fr_1fr]"
        >
          <div className="overflow-hidden rounded-[1.15rem] bg-[#050507] sm:rounded-[1.5rem]">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80"
              alt="Buildifyx capability team working"
              className="h-[180px] w-full object-cover sm:h-[260px] md:h-full"
            />
          </div>

          <div className="flex flex-col justify-center p-5 text-center sm:p-8 md:text-left">
            <p className="text-[10px] font-normal uppercase tracking-[0.26em] text-[#A7A5F8] sm:text-xs">
              Buildifyx Capability
            </p>

            <h3 className="mt-4 text-2xl font-normal tracking-[-0.035em] text-white sm:text-3xl">
              Web, App, AI, and Data in one team.
            </h3>

            <p className="mt-4 text-sm font-normal leading-7 text-white/45 sm:text-base">
              From idea to launch, we help design, develop, automate, and
              measure digital products for real business use.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
              {["Web", "App", "AI", "Data"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-xs font-normal text-white/55"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
