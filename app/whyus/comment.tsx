"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

export default function Comment() {
  return (
    <section className="w-full bg-[#f8f6ff] py-10 md:py-32 px-4 overflow-hidden mt-10">
      {/* TITLE */}
      <div className="text-center mb-2">
        <h1 className="text-3xl md:text-4xl font-bold text-[#1f1f3d] leading-tight">
          What Our Clients
          <br />
          Say About Us
        </h1>
      </div>

      {/* TESTIMONIAL */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-center">
        {/*--------- LEFT BUTTON ---------*/}
        <button className="hidden md:flex absolute left-0 w-14 h-14 rounded-full border border-pink-300 items-center justify-center text-pink-400 hover:bg-pink-500 hover:text-white transition">
          <ArrowLeft size={20} />
        </button>

        {/* CARD */}
        <div className="relative w-full max-w-3xl bg-white border border-pink-200 rounded-xl shadow-[0_20px_50px_rgba(255,105,180,0.08)] px-6 md:px-16 py-10 md:py-14 text-center">
          {/* QUOTE */}
          <div className="text-6xl md:text-8xl text-pink-100 font-bold leading-none mb-4">
            “
          </div>

          {/* COMMENT HERE */}
          <p className="text-gray-500 text-sm md:text-xl leading-8 md:leading-10 mb-8">
            Working with the team was one of the best decisions we made for our
            product. Everything from communication to execution felt smooth and
            professional.
          </p>

          {/* STARS */}
          <div className="flex justify-center gap-2 mb-2">
            <Star className="fill-yellow-400 text-yellow-400" size={18} />
            <Star className="fill-yellow-400 text-yellow-400" size={18} />
            <Star className="fill-yellow-400 text-yellow-400" size={18} />
            <Star className="fill-yellow-400 text-yellow-400" size={18} />
            <Star className="text-gray-300" size={18} />
          </div>

          {/* BOTTOM POINTER */}
          <div className="absolute left-1/2 -bottom-4 -translate-x-1/2 w-8 h-8 bg-white border-r border-b border-pink-200 rotate-45"></div>
        </div>

        {/*--------- RIGHT BUTTON ---------*/}
        <button className="hidden md:flex absolute right-0 w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 items-center justify-center text-white shadow-xl hover:scale-105 transition">
          <ArrowRight size={20} />
        </button>
      </div>

      {/* AVATARS */}
      <div className="flex justify-center items-center gap-3 mt-14">
        <Image
          src="/whyus/1.png"
          alt="avatar"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />

        <Image
          src="/whyus/2.png"
          alt="avatar"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />

        <Image
          src="/whyus/3.png"
          alt="avatar"
          width={70}
          height={70}
          className="rounded-full object-cover border-4 border-white shadow-lg"
        />

        <Image
          src="/whyus/4.png"
          alt="avatar"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />

        <Image
          src="/whyus/5.png"
          alt="avatar"
          width={50}
          height={50}
          className="rounded-full object-cover"
        />
      </div>
    </section>
  );
}
