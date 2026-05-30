// mywork/body.tsx

"use client";

import Image from "next/image";

export default function Body() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-tight text-black md:text-6xl">
            Key Features of Our Financial
            <br />
            <span className="text-blue-600">SaaS Platform</span>
          </h1>
        </div>

        {/* Desktop */}
        <div className="mt-24 hidden grid-cols-2 gap-20 md:grid">
          {/* Card 1 */}
          <div className="flex flex-col justify-center">
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src="/work/data.png"
                alt=""
                width={1000}
                height={800}
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-center">
            <div className="overflow-hidden rounded-[2rem]">
              <Image
                src="/work/data2.png"
                alt=""
                width={1000}
                height={800}
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-16 space-y-8 md:hidden">
          {/* Card 1 */}
          <div className="overflow-hidden rounded-[2rem]">
            <Image
              src="/work/data.png"
              alt=""
              width={1000}
              height={800}
              className="w-full object-cover"
            />
          </div>

          {/* Card 2 */}
          <div className="overflow-hidden rounded-[2rem]">
            <Image
              src="/work/data2.png"
              alt=""
              width={1000}
              height={800}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
