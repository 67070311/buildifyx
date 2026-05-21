export default function Footer() {
  return (
    <footer className="w-full px-6 md:px-10 pb-6 mt-20">
      <div className="bg-[#f3f3f3] rounded-[40px] px-8 md:px-16 pt-16 pb-8 overflow-hidden">
        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* LEFT */}
          <div>
            <h2 className="text-[#5552D9] text-2xl md:text-3xl font-semibold leading-tight">
              Software studio
            </h2>
          </div>

          {/* MENU */}
          <div>
            <h4 className="text-sm text-gray-500 mb-4">Explore</h4>

            <ul className="space-y-3 font-medium">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Why Us</a>
              </li>
              <li>
                <a href="#">Our Work</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="text-sm text-gray-500 mb-4">Follow us</h4>

            <div className="space-y-3">
              <a href="#" className="block font-medium">
                Instagram
              </a>

              <a href="#" className="block font-medium">
                Facebook
              </a>

              <a href="#" className="block font-medium">
                Tiktok
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="md:text-right">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-2xl font-semibold"
            >
              Let&apos;s Talk
              <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-sm">
                ↗
              </span>
            </a>

            <p className="text-gray-500 mt-2">
              Ready to build your next project
            </p>
          </div>
        </div>

        {/* BIG TEXT */}
        <div className="mt-20">
          <h1 className="text-[80px] md:text-[180px] font-black leading-none tracking-tight">
            Buildifyx
          </h1>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 text-sm text-gray-500">
          <div className="flex items-center gap-6">
            <span>© 2025 Buildifyx</span>
            <a href="#">Privacy Policy</a>
          </div>

          <div className="flex items-center gap-6">
            <span>Thailand</span>
            <span>12:24 PM</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
