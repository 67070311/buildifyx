"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const testimonials = [
  {
    comment:
      "Working with the team was one of the best decisions we made for our product. Everything from communication to execution felt smooth and professional.",
    commentTh:
      "การทำงานกับทีมเป็นหนึ่งในการตัดสินใจที่ดีที่สุดของโปรเจกต์ ตั้งแต่การสื่อสารจนถึงการลงมือทำ ทุกอย่างราบรื่นและเป็นมืออาชีพ",
    rating: 4,
    avatar:
      "https://cdn.imgbin.com/3/12/17/imgbin-computer-icons-avatar-user-login-avatar-man-wearing-blue-shirt-illustration-mJrXLG07YnZUc2bH5pGfFKUhX.jpg",
    name: "Client 1",
    role: "Buildifyx partner",
    roleTh: "พาร์ตเนอร์ Buildifyx",
  },
  {
    comment:
      "They understood our vision quickly and turned it into a polished product. The process was clear, fast, and very easy to follow.",
    commentTh:
      "ทีมเข้าใจภาพที่เราต้องการได้เร็ว และเปลี่ยนให้กลายเป็นผลิตภัณฑ์ที่ดูดี กระบวนการชัดเจน รวดเร็ว และติดตามง่าย",
    rating: 5,
    avatar:
      "https://media.invisioncic.com/i328763/monthly_2019_03/persona-database_admin.png.18543d18b113f683d1f9af84ec897e00.png",
    name: "Client 2",
    role: "Buildifyx partner",
    roleTh: "พาร์ตเนอร์ Buildifyx",
  },
  {
    comment:
      "Amazing experience from start to finish. The team delivered clean design, solid development, and helpful suggestions along the way.",
    commentTh:
      "ประสบการณ์ดีตั้งแต่ต้นจนจบ ทั้งดีไซน์สะอาด การพัฒนาที่แข็งแรง และคำแนะนำที่ช่วยให้งานดีขึ้นระหว่างทาง",
    rating: 5,
    avatar:
      "https://www.socialdiscoverycorp.com/hs-fs/hubfs/Archive/SDC__Casey-circle.png?height=1386&name=SDC__Casey-circle.png&width=1386",
    name: "Client 3",
    role: "Buildifyx partner",
    roleTh: "พาร์ตเนอร์ Buildifyx",
  },
  {
    comment:
      "Their communication was excellent. We always knew what was happening, and the final result looked even better than expected.",
    commentTh:
      "การสื่อสารดีมาก เรารู้ตลอดว่างานอยู่ขั้นไหน และผลลัพธ์สุดท้ายออกมาดีกว่าที่คาดไว้",
    rating: 4,
    avatar:
      "https://cdn1.iconfinder.com/data/icons/woman-profile-001/2200/MSI23.00043-512.png",
    name: "Client 4",
    role: "Buildifyx partner",
    roleTh: "พาร์ตเนอร์ Buildifyx",
  },
  {
    comment:
      "A reliable team that really cares about details. They helped us launch with confidence and made the whole project feel simple.",
    commentTh:
      "เป็นทีมที่ไว้ใจได้และใส่ใจรายละเอียด ช่วยให้เราเปิดตัวได้อย่างมั่นใจ และทำให้ทั้งโปรเจกต์รู้สึกง่ายขึ้น",
    rating: 5,
    avatar: "https://icon2.cleanpng.com/ci4/psh/ihi/a4zzebpm3.webp",
    name: "Client 5",
    role: "Buildifyx partner",
    roleTh: "พาร์ตเนอร์ Buildifyx",
  },
];

export default function Comment() {
  const { language } = useLanguage();
  const th = language === "th";
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  const goPrev = () =>
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );

  const goNext = () =>
    setActiveIndex((current) => (current + 1) % testimonials.length);

  return (
    <section className="bg-[#f2f2f7] px-5 py-16 text-[#1c1c1e] sm:px-8 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }} className="grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#007aff]">
              {th ? "เรื่องจากลูกค้า" : "Client stories"}
            </p>
            <h2 className={`mt-3 max-w-xl font-semibold ${th ? "text-[32px] leading-[1.22] tracking-[-.02em] sm:text-[44px]" : "text-[38px] leading-[1.02] tracking-[-0.05em] sm:text-[50px]"}`}>
              {th ? "ประสบการณ์จาก" : "What it feels like"}
              <span className="block text-[#007aff]">{th ? "การทำงานร่วมกับเรา" : "to build with us."}</span>
            </h2>
            <p className="mt-4 max-w-lg text-[14px] leading-6 text-[#636366]">
              {th ? "สื่อสารชัดเจน ลงมือทำอย่างใส่ใจ และมีกระบวนการที่ทำให้ทุกคนเห็นภาพผลิตภัณฑ์ตั้งแต่ไอเดียจนเปิดตัว" : "Clear communication, thoughtful execution, and a process that keeps people close to the product from idea to launch."}
            </p>

            <div className="mt-6 flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous client story"
                className="grid h-11 w-11 place-items-center rounded-full border border-black/[0.06] bg-white text-[#1c1c1e] shadow-[0_8px_22px_rgba(15,23,42,.06)] transition hover:-translate-y-0.5 hover:text-[#007aff]"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next client story"
                className="grid h-11 w-11 place-items-center rounded-full border border-black/[0.06] bg-white text-[#1c1c1e] shadow-[0_8px_22px_rgba(15,23,42,.06)] transition hover:-translate-y-0.5 hover:text-[#007aff]"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <span className="ml-2 text-[11px] font-medium text-[#8e8e93]">
                {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeIndex}
                initial={{ opacity: 0, x: 18, scale: 0.985 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -18, scale: 0.985 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
                className="overflow-hidden rounded-[30px] border border-black/[0.06] bg-white shadow-[0_24px_70px_rgba(15,23,42,.08)]"
              >
              <div className="bg-[linear-gradient(135deg,#eaf4ff_0%,#f8fbff_100%)] p-5 sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={active.avatar}
                      alt={active.name}
                      className="h-16 w-16 rounded-full object-cover ring-4 ring-white"
                      loading="lazy"
                      decoding="async"
                    />
                    <div>
                      <p className="text-[17px] font-semibold tracking-[-0.02em]">{active.name}</p>
                      <p className="mt-1 text-[12px] text-[#8e8e93]">{th ? active.roleTh : active.role}</p>
                    </div>
                  </div>

                  <div className="grid h-11 w-11 place-items-center rounded-[14px] bg-[#007aff] text-white shadow-[0_10px_24px_rgba(0,122,255,.18)]">
                    <Quote className="h-4 w-4" />
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${index < active.rating ? "fill-[#ffb340] text-[#ffb340]" : "text-[#d1d1d6]"}`}
                    />
                  ))}
                </div>

                <p className="mt-5 max-w-3xl text-[18px] leading-8 tracking-[-0.015em] text-[#2c2c2e] sm:text-[20px]">
                  “{th ? active.commentTh : active.comment}”
                </p>

                <div className="mt-6 grid gap-2 sm:grid-cols-3">
                  {[
                    ["Communication", "Clear"],
                    ["Process", "Smooth"],
                    ["Delivery", "Reliable"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-[16px] bg-[#f2f2f7] px-4 py-3">
                      <p className="text-[9px] uppercase tracking-[.12em] text-[#8e8e93]">{label}</p>
                      <p className="mt-1 text-[12px] font-semibold text-[#1c1c1e]">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
              </motion.article>
            </AnimatePresence>

            <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-1">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${item.name}`}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-2 py-2 pr-3 transition ${index === activeIndex ? "border-[#007aff]/20 bg-white shadow-[0_8px_22px_rgba(0,122,255,.08)]" : "border-transparent bg-white/55 hover:bg-white"}`}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="h-8 w-8 rounded-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className={`text-[11px] font-medium ${index === activeIndex ? "text-[#007aff]" : "text-[#636366]"}`}>
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
