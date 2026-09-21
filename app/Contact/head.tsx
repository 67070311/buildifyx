"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CircleHelp,
  Mail,
  MapPin,
  Phone,
  Send,
  X,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageProvider";

const contactEmail = "buildifyX.th@gmail.com";
const WEB3FORMS_ACCESS_KEY = "bdbffd4e-5318-4044-8280-277107ffe315";

const contactItems = [
  {
    title: "Email",
    value: contactEmail,
    description: "Send us your project details anytime.",
    href: `mailto:${contactEmail}`,
    icon: Mail,
  },
  {
    title: "Phone",
    value: "0645809429, 0638760067",
    description: "Talk directly with the Buildifyx team.",
    href: "tel:0645809429",
    icon: Phone,
  },
  {
    title: "Location",
    value: "Bangkok, Thailand",
    description: "Available for remote and local projects.",
    href: "https://maps.google.com",
    icon: MapPin,
  },
];

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
  const { language } = useLanguage();
  const th = language === "th";
  const t = {
    badge: th ? "ติดต่อ Buildifyx" : "Contact Buildifyx",
    titleA: th ? "มาสร้าง" : "Let's build",
    titleB: th ? "สิ่งที่มีประโยชน์กัน" : "something useful.",
    lead: th ? "เล่าให้เราฟังว่าคุณกำลังทำอะไร อยากแก้ปัญหาอะไร หรืออยากปรับปรุงอะไร แล้วเราจะตอบกลับพร้อมขั้นตอนต่อไปที่ชัดเจน" : "Tell us what you're working on, what problem you want to solve, or what you want to improve. We'll get back to you with a clear next step.",
    inquiry: th ? "รายละเอียดโปรเจกต์" : "Project inquiry",
    formTitle: th ? "เล่าไอเดียของคุณให้เราฟัง" : "Tell us about your idea.",
    reply: th ? "โดยปกติตอบกลับภายใน 1–2 วันทำการ" : "Usually replies within 1–2 business days.",
    name: th ? "ชื่อ" : "Name",
    namePh: th ? "ชื่อของคุณ" : "Your name",
    email: th ? "อีเมล" : "Email",
    message: th ? "ข้อความ" : "Message",
    messagePh: th ? "บอกเราว่าคุณอยากสร้าง ปรับปรุง หรือแก้ปัญหาอะไร..." : "Tell us what you want to build, improve, or solve...",
    consent: th ? "เมื่อส่งฟอร์มนี้ คุณยินยอมให้เราติดต่อกลับเกี่ยวกับรายละเอียดที่ส่งมา" : "By sending this form, you agree that we may contact you about your inquiry.",
    sending: th ? "กำลังส่ง" : "Sending",
    send: th ? "ส่งข้อความ" : "Send message",
    error: th ? "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้งหรือติดต่อเราทางอีเมลโดยตรง" : "Something went wrong. Please try again or email us directly.",
  };
  const localizedContactItems = th ? [
    { ...contactItems[0], title: "อีเมล", description: "ส่งรายละเอียดโปรเจกต์หาเราได้ทุกเมื่อ" },
    { ...contactItems[1], title: "โทรศัพท์", description: "คุยกับทีม Buildifyx ได้โดยตรง" },
    { ...contactItems[2], title: "สถานที่", value: "กรุงเทพฯ ประเทศไทย", description: "รองรับทั้งงานออนไลน์และงานในพื้นที่" },
  ] : contactItems;
  const formRef = useRef<HTMLFormElement | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  useEffect(() => {
    if (!showSuccessPopup) return;

    const popupTimer = window.setTimeout(() => {
      closeSuccessPopup();
    }, 5000);

    return () => window.clearTimeout(popupTimer);
  }, [showSuccessPopup]);

  function validateForm(formData: FormData) {
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const nextErrors: FormErrors = {};

    if (!name) nextErrors.name = th ? "กรุณากรอกชื่อของคุณ" : "Please enter your name";

    if (!email) {
      nextErrors.email = th ? "กรุณากรอกอีเมล" : "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = th ? "รูปแบบอีเมลไม่ถูกต้อง" : "Please enter a valid email";
    }

    if (!message) nextErrors.message = th ? "กรุณากรอกข้อความ" : "Please enter a message";

    return nextErrors;
  }

  function focusFirstInvalidField(nextErrors: FormErrors) {
    const fieldOrder: Array<keyof FormErrors> = ["name", "email", "message"];
    const firstErrorField = fieldOrder.find((field) => nextErrors[field]);

    if (!firstErrorField || !formRef.current) return;

    const field = formRef.current.elements.namedItem(firstErrorField);
    if (field instanceof HTMLElement) {
      field.focus();
      field.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function clearFieldError(field: keyof FormErrors) {
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const nextErrors = validateForm(formData);

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("idle");
      window.requestAnimationFrame(() => focusFirstInvalidField(nextErrors));
      return;
    }

    const email = String(formData.get("email") || "");

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New contact from BuildifyX");
    formData.append("from_name", "BuildifyX Website");

    setErrors({});
    setStatus("loading");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setSubmittedEmail(email);
        setShowSuccessPopup(true);
        setStatus("idle");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function closeSuccessPopup() {
    setShowSuccessPopup(false);
    setStatus("idle");
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-white px-4 pb-20 pt-[118px] text-[#151924] sm:px-6 lg:px-8">
      <style jsx global>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
          -webkit-text-fill-color: #151924;
          box-shadow: 0 0 0 1000px #ffffff inset;
          transition: background-color 9999s ease-in-out 0s;
        }
      `}</style>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[940px] bg-[radial-gradient(circle_at_50%_10%,rgba(59,130,246,.13),transparent_58%)]" />

      <div className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[38px] border border-[#dde8f5] bg-[radial-gradient(circle_at_18%_14%,rgba(96,165,250,.11),transparent_26%),radial-gradient(circle_at_85%_18%,rgba(129,140,248,.10),transparent_30%),linear-gradient(180deg,#fbfdff_0%,#f5f9ff_55%,#ffffff_100%)] shadow-[0_34px_100px_rgba(45,75,120,.09)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[.16]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(59,130,246,.25) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
            maskImage: "linear-gradient(to bottom, black, transparent 82%)",
          }}
        />

        <div className="relative px-5 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="relative z-10 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10 xl:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: .2 }}
              transition={{ duration: .62, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-[130px]"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#287cff]/12 bg-white/82 px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[.18em] text-[#287cff] shadow-sm backdrop-blur-xl">
                <CircleHelp className="h-4 w-4" />
                {t.badge}
              </div>

              <h1
                className={`mt-6 max-w-[620px] font-semibold text-[#151924] ${
                  th
                    ? "text-[42px] leading-[1.18] tracking-[-.02em] sm:text-[56px] sm:leading-[1.16] lg:text-[64px]"
                    : "text-[48px] leading-[.92] tracking-[-.07em] sm:text-[64px] lg:text-[72px]"
                }`}
              >
                <span className="block">{t.titleA}</span>
                <span className={`block text-[#287cff] ${th ? "mt-2 sm:mt-3" : ""}`}>
                  {t.titleB}
                </span>
              </h1>

              <p className={`max-w-[560px] text-sm leading-7 text-[#6f7a8c] sm:text-[16px] ${th ? "mt-7" : "mt-5"}`}>
                {t.lead}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {localizedContactItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.a
                      key={item.title}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: .05 + index * .06 }}
                      className="group flex items-center gap-3 rounded-[18px] border border-[#dce7f4] bg-white/84 p-3.5 text-left shadow-[0_12px_30px_rgba(51,79,118,.05)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white sm:block sm:p-4 lg:flex"
                    >
                      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-[14px] bg-[#287cff]/10 text-[#287cff]">
                        <Icon className="h-[19px] w-[19px]" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-[13px] font-semibold text-[#151924]">
                          {item.title}
                        </p>
                        <p className="mt-0.5 truncate text-[11px] font-medium text-[#536174]">
                          {item.value}
                        </p>
                        <p className="mt-1 hidden text-[10px] leading-4 text-[#8b97a8] lg:block">
                          {item.description}
                        </p>
                      </div>

                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#a0aec0] transition group-hover:text-[#287cff] sm:hidden lg:block" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28, scale: .99 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: .15 }}
              transition={{ duration: .68, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="pointer-events-none absolute left-1/2 top-[42%] h-[360px] w-[760px] max-w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#4f8cff]/12 blur-[105px]" />

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                className="relative overflow-hidden rounded-[26px] border border-[#dce7f4] bg-white/92 p-4 shadow-[0_28px_80px_rgba(51,79,118,.11)] backdrop-blur-2xl sm:p-6 lg:p-7 xl:p-8"
              >
                <input type="checkbox" name="botcheck" className="hidden" />

                <div className="mb-6 border-b border-[#e8eef6] pb-6">
                  <p className="text-[9px] font-semibold uppercase tracking-[.18em] text-[#8a96a8]">
                    {t.inquiry}
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold tracking-[-.04em] text-[#151924] sm:text-3xl">
                    {t.formTitle}
                  </h2>
                  <p className="mt-2 text-xs leading-5 text-[#8a96a8]">
                    {t.reply}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <FormInput
                    label={t.name}
                    name="name"
                    placeholder={t.namePh}
                    autoComplete="name"
                    error={errors.name}
                    onChange={() => clearFieldError("name")}
                  />

                  <FormInput
                    label={t.email}
                    name="email"
                    type="text"
                    inputMode="email"
                    placeholder="you@email.com"
                    autoComplete="email"
                    error={errors.email}
                    onChange={() => clearFieldError("email")}
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[11px] font-semibold text-[#4b5668]"
                  >
                    {t.message}
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={8}
                    placeholder={t.messagePh}
                    onChange={() => clearFieldError("message")}
                    className={`min-h-[220px] w-full resize-none rounded-[18px] border px-4 py-4 text-sm text-[#151924] outline-none transition placeholder:text-[#a0a9b6] focus:bg-white focus:ring-4 sm:min-h-[260px] sm:px-5 sm:py-5 ${errors.message ? "border-[#fb7185]/60 bg-[#fff7f8] focus:border-[#fb7185] focus:ring-[#fb7185]/10" : "border-[#dce5ef] bg-[#fbfcfe] focus:border-[#287cff]/55 focus:ring-[#287cff]/10"}`}
                  />

                  <AnimatePresence>
                    {errors.message && <FieldError message={errors.message} />}
                  </AnimatePresence>
                </div>

                {status === "error" && (
                  <p className="mt-4 rounded-[15px] border border-red-200 bg-red-50 px-4 py-3 text-xs leading-5 text-red-600">
                    {t.error}
                  </p>
                )}

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[10px] leading-4 text-[#929dad]">
                    {t.consent}
                  </p>

                  <motion.button
                    type="submit"
                    disabled={status === "loading"}
                    whileTap={{ scale: .97 }}
                    className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-[15px] bg-[#287cff] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(40,124,255,.23)] transition hover:-translate-y-0.5 hover:bg-[#3c89ff] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" ? (
                      <>
                        {t.sending}
                        <BouncyDots />
                      </>
                    ) : (
                      <>
                        {t.send}
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccessPopup && (
          <SuccessPopup
            submittedEmail={submittedEmail}
            onClose={closeSuccessPopup}
            language={language}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function FormInput({
  label,
  name,
  type = "text",
  inputMode,
  placeholder,
  autoComplete,
  error,
  onChange,
}: {
  label: string;
  name: string;
  type?: string;
  inputMode?:
    | "email"
    | "text"
    | "search"
    | "tel"
    | "url"
    | "none"
    | "numeric"
    | "decimal";
  placeholder: string;
  autoComplete?: string;
  error?: string;
  onChange?: () => void;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-[11px] font-semibold text-[#4b5668]"
      >
        {label}
      </label>

      <input
        id={name}
        type={type}
        name={name}
        inputMode={inputMode}
        placeholder={placeholder}
        autoComplete={autoComplete}
        onChange={onChange}
        className={`h-14 w-full rounded-[16px] border px-4 text-sm text-[#151924] outline-none transition placeholder:text-[#a0a9b6] focus:bg-white focus:ring-4 sm:h-16 sm:px-5 ${error ? "border-[#fb7185]/60 bg-[#fff7f8] focus:border-[#fb7185] focus:ring-[#fb7185]/10" : "border-[#dce5ef] bg-[#fbfcfe] focus:border-[#287cff]/55 focus:ring-[#287cff]/10"}`}
      />

      <AnimatePresence>
        {error && <FieldError message={error} />}
      </AnimatePresence>
    </div>
  );
}

function FieldError({ message }: { message: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: -3 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -3 }}
      transition={{ duration: .18 }}
      className="mt-2 flex items-center gap-1.5 text-[10px] font-medium text-[#ef5268]"
    >
      <AlertCircle className="h-3.5 w-3.5" />
      {message}
    </motion.p>
  );
}

function SuccessPopup({
  submittedEmail,
  onClose,
  language,
}: {
  submittedEmail: string;
  onClose: () => void;
  language: "th" | "en";
}) {
  const th = language === "th";
  return (
    <motion.div
      className="fixed inset-0 z-[99999] grid place-items-center bg-[#10182a]/35 px-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: .94 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 14, scale: .97 }}
        transition={{ type: "spring", stiffness: 210, damping: 20 }}
        className="relative w-full max-w-[390px] overflow-hidden rounded-[28px] border border-[#dce7f4] bg-white p-6 text-center shadow-[0_30px_90px_rgba(20,39,73,.22)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close popup"
          className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-[#f2f6fb] text-[#6f7b8e] transition hover:bg-[#151924] hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mx-auto grid h-16 w-16 place-items-center rounded-[20px] bg-[#eaf3ff] text-[#287cff]">
          <CheckCircle2 className="h-8 w-8" />
        </div>

        <p className="mt-5 text-[9px] font-semibold uppercase tracking-[.18em] text-[#287cff]">
          {th ? "ส่งข้อความแล้ว" : "Message delivered"}
        </p>

        <h2 className="mt-2 text-3xl font-semibold tracking-[-.04em] text-[#151924]">
          {th ? "ขอบคุณ" : "Thank you."}
        </h2>

        <p className="mx-auto mt-3 max-w-[300px] text-sm leading-6 text-[#6f7a8c]">
          {th ? "ส่งข้อความถึง Buildifyx เรียบร้อยแล้ว" : "Your message has been sent to Buildifyx successfully."}
        </p>

        {submittedEmail && (
          <p className="mx-auto mt-2 max-w-[300px] text-xs leading-5 text-[#8c97a7]">
            {th ? "เราจะตอบกลับไปที่" : "We'll reply to"} <span className="font-semibold text-[#287cff]">{submittedEmail}</span>.
          </p>
        )}

        <button
          type="button"
          onClick={onClose}
          className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[15px] bg-[#151924] px-5 text-sm font-semibold text-white transition hover:bg-[#2a3140]"
        >
          {th ? "ดำเนินการต่อ" : "Continue"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </motion.div>
    </motion.div>
  );
}

function BouncyDots() {
  return (
    <span className="inline-flex items-center gap-1">
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          animate={{
            y: [0, -4, 0],
            opacity: [.45, 1, .45],
          }}
          transition={{
            duration: .55,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot * .12,
          }}
          className="h-1.5 w-1.5 rounded-full bg-white"
        />
      ))}
    </span>
  );
}
