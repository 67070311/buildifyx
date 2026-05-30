// Contact/head.tsx

"use client";

export default function Head() {
  return (
    <section className="min-h-screen bg-[#f5efff] px-4 py-10 sm:px-6 sm:py-14 lg:px-6 lg:py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.5rem] bg-white shadow-xl sm:rounded-[2rem]">
        {/* Content */}
        <div className="grid gap-10 px-5 py-10 sm:px-8 sm:py-14 md:grid-cols-2 md:gap-14 md:px-14 md:py-20">
          {/* Left */}
          <div className="text-center md:text-left">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#a78bfa] sm:mb-6 sm:text-sm sm:tracking-[0.35em]">
              Contact Us
            </p>

            <h2 className="mx-auto max-w-xl text-4xl font-black leading-tight text-black sm:text-5xl md:mx-0 md:text-6xl lg:text-7xl">
              Let’s build something together.
            </h2>

            <p className="mx-auto mt-6 max-w-md text-sm font-medium leading-7 text-gray-500 sm:text-base sm:leading-8 md:mx-0 md:mt-8">
              We create websites, digital products, AI systems, and modern
              experiences for brands and businesses.
            </p>

            {/* Social Buttons */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 md:mt-20 md:justify-start">
              <a
                href="https://www.instagram.com/buildifyx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-[#8b5cf6] bg-[#f5efff] px-5 py-3 text-center text-sm font-bold text-[#6d28d9] transition hover:bg-[#8b5cf6] hover:text-white sm:w-auto sm:px-6"
              >
                Instagram: @buildifyx
              </a>

              <a
                href="https://www.facebook.com/buildifyx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-[#8b5cf6] bg-[#f5efff] px-5 py-3 text-center text-sm font-bold text-[#6d28d9] transition hover:bg-[#8b5cf6] hover:text-white sm:w-auto sm:px-6"
              >
                Facebook: BuildifyX
              </a>

              <a
                href="https://www.tiktok.com/@buildifyx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-full border border-[#8b5cf6] bg-[#f5efff] px-5 py-3 text-center text-sm font-bold text-[#6d28d9] transition hover:bg-[#8b5cf6] hover:text-white sm:w-auto sm:px-6"
              >
                TikTok: @buildifyx
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-[1.5rem] bg-[#fbf8ff] p-5 sm:rounded-[2rem] sm:p-8 md:p-10">
            {/* Person 1 */}
            <div className="border-b border-[#eadcff] pb-6 sm:pb-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a78bfa] sm:text-sm sm:tracking-[0.35em]">
                Developer
              </p>

              <h3 className="mt-3 break-words text-xl font-black text-black sm:mt-4 sm:text-2xl lg:text-3xl">
                Pisitpol jantron
              </h3>

              <a
                href="mailto:Pisitponjan223@gmail.com"
                className="mt-3 block break-all text-sm font-medium text-gray-500 transition hover:text-[#8b5cf6] sm:text-base"
              >
                Pisitponjan223@gmail.com
              </a>
            </div>

            {/* Person 2 */}
            <div className="border-b border-[#eadcff] py-6 sm:py-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a78bfa] sm:text-sm sm:tracking-[0.35em]">
                AI Developer
              </p>

              <h3 className="mt-3 break-words text-xl font-black text-black sm:mt-4 sm:text-2xl lg:text-3xl">
                Pichaiyut Taweepongpairut
              </h3>

              <a
                href="mailto:mingpichaiyut@gmail.com"
                className="mt-3 block break-all text-sm font-medium text-gray-500 transition hover:text-[#8b5cf6] sm:text-base"
              >
                mingpichaiyut@gmail.com
              </a>
            </div>

            {/* Person 3 */}
            <div className="border-b border-[#eadcff] py-6 sm:py-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a78bfa] sm:text-sm sm:tracking-[0.35em]">
                Data Engineer
              </p>

              <h3 className="mt-3 break-words text-xl font-black text-black sm:mt-4 sm:text-2xl lg:text-3xl">
                Pattarapol Petcharat
              </h3>

              <a
                href="mailto:pattarapol.petcharat@gmail.com"
                className="mt-3 block break-all text-sm font-medium text-gray-500 transition hover:text-[#8b5cf6] sm:text-base"
              >
                pattarapol.petcharat@gmail.com
              </a>
            </div>

            {/* Person 4 */}
            <div className="pt-6 sm:pt-8">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#a78bfa] sm:text-sm sm:tracking-[0.35em]">
                Designer
              </p>

              <h3 className="mt-3 break-words text-xl font-black text-black sm:mt-4 sm:text-2xl lg:text-3xl">
                Pimmanee Nimitraporn
              </h3>

              <a
                href="mailto:pimmaneenimitraporn@gmail.com"
                className="mt-3 block break-all text-sm font-medium text-gray-500 transition hover:text-[#8b5cf6] sm:text-base"
              >
                pimmaneenimitraporn@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col items-center gap-2 border-t border-[#eadcff] px-5 py-6 text-center text-sm font-medium text-gray-500 sm:px-8 md:flex-row md:items-center md:justify-between md:text-left">
          <p>Bangkok, Thailand</p>
          <p>BuildifyX Co., Ltd.</p>
          <p>2026</p>
        </div>
      </div>
    </section>
  );
}
