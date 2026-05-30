export default function Footer() {
  return (
    <footer className="w-full px-4 pb-4 mt-16 sm:px-6 md:px-10 md:pb-6 md:mt-20">
      <div className="overflow-hidden rounded-[28px] bg-[#f3f3f3] px-6 py-10 sm:rounded-[36px] sm:px-8 md:rounded-[40px] md:px-16 md:pt-16 md:pb-8">
        {/* TOP */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* LEFT */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-2xl font-semibold leading-tight text-[#5552D9] sm:text-3xl">
              Software studio
            </h2>
          </div>

          {/* MENU */}
          <div>
            <h4 className="mb-4 text-sm text-gray-500">Explore</h4>

            <ul className="space-y-3 font-medium">
              <li>
                <a href="#" className="transition hover:text-[#5552D9]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#5552D9]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#5552D9]">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#5552D9]">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-[#5552D9]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="mb-4 text-sm text-gray-500">Follow us</h4>

            <div className="space-y-3">
              <a
                href="#"
                className="block font-medium transition hover:text-[#5552D9]"
              >
                Instagram
              </a>

              <a
                href="#"
                className="block font-medium transition hover:text-[#5552D9]"
              >
                Facebook
              </a>

              <a
                href="#"
                className="block font-medium transition hover:text-[#5552D9]"
              >
                Tiktok
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="sm:col-span-2 lg:col-span-1 lg:text-right">
            <a
              href="#"
              className="inline-flex items-center gap-3 text-xl font-semibold transition hover:text-[#5552D9] sm:text-2xl"
            >
              Let&apos;s Talk
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-sm text-white">
                ↗
              </span>
            </a>

            <p className="mt-2 max-w-xs text-gray-500 lg:ml-auto">
              Ready to build your next project
            </p>
          </div>
        </div>

        {/* BIG TEXT */}
        <div className="mt-16 sm:mt-20">
          <h1 className="break-words text-[16vw] font-black leading-none tracking-tight sm:text-[15vw] lg:text-[180px]">
            Buildifyx
          </h1>
        </div>

        {/* BOTTOM */}
        <div className="mt-8 flex flex-col gap-4 border-t border-black/10 pt-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <span>© 2025 Buildifyx</span>
            <a href="#" className="transition hover:text-black">
              Privacy Policy
            </a>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <span>Thailand</span>
            <span>12:24 PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
