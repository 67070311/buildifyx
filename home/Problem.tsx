"use client";
import Image from "next/image";

export default function Problem() {
  return (
    <>
      {/* Vision */}
      <section className="px-4">
        <div className="text-center">
          <p className="text-gray-400 text-sm md:text-md font-bold">Vision</p>

          <h2 className="text-[#5552D9] mt-2 text-xl md:text-3xl font-semibold leading-snug">
            Every problem people face is our next product
          </h2>
        </div>
      </section>

      {/* Mission */}
      <section className="mt-6 px-4">
        <div className="flex justify-center">
          <div className="text-[#5552D9] text-3xl md:text-4xl p-2 md:p-4">
            +
          </div>
        </div>

        <div className="flex justify-center">
          <div className="rounded-full bg-purple-200 px-5 py-2 text-sm md:text-md font-bold text-[#7C3AED]">
            Mission
          </div>
        </div>

        <h3 className="mt-4 text-center text-xl md:text-3xl text-[#5552D9] font-semibold leading-relaxed">
          When the world’s problems finally have a solution,
          <br className="hidden md:block" />
          that solution will be called Buildifyx.
        </h3>
      </section>

      {/* Cards */}
      <section className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-4 md:px-10 xl:px-20">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl p-4 md:p-5 shadow-md">
          <div className="bg-[#E9DDFB] rounded-3xl p-4 md:p-6 flex justify-center">
            <Image
              src={"/home/Seeking development.gif"}
              alt="Problem Driven Thinking"
              width={300}
              height={300}
              className="w-full max-w-[260px] h-auto"
            />
          </div>

          <h4 className="mt-6 text-xl md:text-2xl font-bold">
            Problem-Driven Thinking
          </h4>

          <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed">
            We start with real problems faced by users and businesses, to build
            solutions that truly matter not just ideas that look good
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl p-4 md:p-5 shadow-md">
          <div className="bg-[#E9DDFB] rounded-3xl p-4 md:p-6 flex justify-center">
            <Image
              src={"/home/Marketing online.gif"}
              alt="Build with Purpose"
              width={300}
              height={300}
              className="w-full max-w-[260px] h-auto"
            />
          </div>

          <h4 className="mt-6 text-xl md:text-2xl font-bold">
            Build with Purpose
          </h4>

          <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed">
            Every product is intentionally designed and developed with a clear
            purpose focused on real-world usability and creating meaningful
            value for users.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl p-4 md:p-5 shadow-md">
          <div className="bg-[#E9DDFB] rounded-3xl p-4 md:p-6 flex justify-center">
            <Image
              src={"/home/Business Goal.gif"}
              alt="Scalable Impact"
              width={300}
              height={300}
              className="w-full max-w-[260px] h-auto"
            />
          </div>

          <h4 className="mt-6 text-xl md:text-2xl font-bold">
            Scalable Impact
          </h4>

          <p className="mt-3 text-sm md:text-base text-gray-500 leading-relaxed">
            We build systems that are scalable and adaptable designed to support
            long-term use and future business growth
          </p>
        </div>
      </section>
    </>
  );
}
