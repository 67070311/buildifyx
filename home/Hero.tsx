"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-20">
      <div className="mx-auto max-w-6xl">
        {/* Top Text */}
        <div className="text-center">
          <h1 className="text-[#] mx-auto max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            LEVEL UP YOUR
            <br />
            DREAM WITH OUR
            <br />
            TEAM
          </h1>

          <p className="mt-8 text-lg text-gray-600">With more than</p>

          <div className="mt-2 text-2xl font-bold">
            <p>2K+ MEMBERS</p>
            <p>500+ TUTORIALS</p>
          </div>

          <button className="mt-10 rounded-full border border-black px-8 py-3 text-lg font-medium transition hover:bg-black hover:text-white">
            Explore →
          </button>
        </div>

        <div className="flex justify-center">
          <Image
            src="/home/Business Salesman.gif"
            alt=""
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}
