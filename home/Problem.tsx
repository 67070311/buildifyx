"use client";
import Image from "next/image";

export default function Problem() {
  return (
    <>
      <section className="">
        <div className="text-center">
          <p className="text-gray-400 text-md font-bold">Vision</p>
          <h2 className="text-[#5552D9] mt-2 text-xl font-semi">
            Every problem people face is our next product
          </h2>
        </div>
      </section>

      {/*Mission */}
      <section className="mt-4">
        <div className="flex justify-center">
          <div className="text-[#5552D9] text-4xl p-4">+</div>
        </div>
        <div className="flex justify-center">
          <div className="rounded-full bg-purple-200 px-6 py-2 text-md font-bold text-[#7C3AED]">
            Mission
          </div>
        </div>
        <h3 className="mt-3 flex justify-center text-center text-2xl text-[#5552D9] font-semibold">
          When the world’s problems finally have a solution,
          <br /> that solution will be called Buildifyx.
        </h3>
      </section>

      {/*Card*/}
      <section className="mt-6 grid grid-cols-3 gap-10 px-20">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl p-5 shadow-md">
          <div className="bg-[#E9DDFB] rounded-3xl p-6">
            <Image
              src={"/home/Seeking development.gif"}
              alt=""
              width={300}
              height={300}
            ></Image>
          </div>

          <h4 className="mt-6 text-2xl font-bold">Problem-Driven Thinking</h4>

          <p className="mt-3 text-gray-500">
            We start with real problems faced by users and businesses, to build
            solutions that truly matter not just ideas that look good
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl p-5 shadow-md">
          <div className="bg-[#E9DDFB] rounded-3xl p-6">
            <Image
              src={"/home/Marketing online.gif"}
              alt=""
              width={300}
              height={300}
            ></Image>
          </div>

          <h4 className="mt-6 text-2xl font-bold">Build with Purpose</h4>

          <p className="mt-3 text-gray-500">
            Every product is intentionally designed and developed with a clear
            purpose focused on real-world usability and creating meaningful
            value for users.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-3xl p-5 shadow-md">
          <div className="bg-[#E9DDFB] rounded-3xl p-6">
            <Image
              src={"/home/Business Goal.gif"}
              alt=""
              width={300}
              height={300}
            ></Image>
          </div>

          <h4 className="mt-6 text-2xl font-bold">Scalable Impact</h4>

          <p className="mt-3 text-gray-500">
            We build systems that are scalable and adaptable designed to support
            long-term use and future business growth
          </p>
        </div>
      </section>
    </>
  );
}
