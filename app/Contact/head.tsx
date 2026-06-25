// contact/contact.tsx

"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowUpRight,
  CheckCircle2,
  CircleHelp,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";

const contactEmail = "buildifyX.th@gmail.com";
const WEB3FORMS_ACCESS_KEY = "bdbffd4e-5318-4044-8280-277107ffe315";

const contactItems = [
  {
    title: "Email us",
    value: contactEmail,
    href: `mailto:${contactEmail}`,
    icon: <Mail className="h-5 w-5" />,
  },
  {
    title: "Call us",
    value: "0645809429, 0638760067",
    href: "tel:0645809429",
    icon: <Phone className="h-5 w-5" />,
  },
  {
    title: "Our location",
    value: "Bangkok, Thailand",
    href: "https://maps.google.com",
    icon: <MapPin className="h-5 w-5" />,
  },
];

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

export default function Contact() {
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

    if (!name) {
      nextErrors.name = "กรุณากรอกชื่อของคุณ";
    }

    if (!email) {
      nextErrors.email = "กรุณากรอกอีเมล";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }

    if (!message) {
      nextErrors.message = "กรุณากรอกข้อความ";
    }

    return nextErrors;
  }

  function focusFirstInvalidField(nextErrors: FormErrors) {
    const fieldOrder: Array<keyof FormErrors> = ["name", "email", "message"];
    const firstErrorField = fieldOrder.find((field) => nextErrors[field]);

    if (!firstErrorField || !formRef.current) return;

    const field = formRef.current.elements.namedItem(firstErrorField);

    if (field instanceof HTMLElement) {
      field.focus();
      field.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
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

      window.requestAnimationFrame(() => {
        focusFirstInvalidField(nextErrors);
      });

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
    <section className="relative min-h-screen overflow-hidden bg-black px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <style jsx global>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus {
          -webkit-text-fill-color: #ffffff;
          box-shadow: 0 0 0px 1000px rgba(255, 255, 255, 0.045) inset;
          transition: background-color 9999s ease-in-out 0s;
        }
      `}</style>

      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,92,255,0.26),transparent_34%),linear-gradient(to_bottom,#090812_0%,#030305_52%,#000_100%)]" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-[#7C5CFF]/18 blur-[140px]" />
        <div className="absolute right-[-180px] top-[30%] h-[430px] w-[430px] rounded-full bg-[#A855F7]/13 blur-[160px]" />
        <div className="absolute bottom-0 left-[-170px] h-[380px] w-[380px] rounded-full bg-[#5552D9]/12 blur-[150px]" />
        <CircuitLines />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Big background title */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pointer-events-none absolute left-1/2 top-4 hidden -translate-x-1/2 select-none text-[120px] font-black uppercase leading-none tracking-[-0.08em] text-white/[0.04] md:block lg:text-[180px]"
        >
          Contact
        </motion.div>

        <div className="relative grid items-end gap-10 pt-4 md:pt-24 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-normal text-white shadow-[0_16px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 text-white">
                <CircleHelp className="h-4 w-4" />
              </span>
              Contact
            </div>

            <h1 className="mt-7 text-4xl font-normal leading-tight tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
              Get in touch
            </h1>

            <p className="mt-5 max-w-md text-sm font-normal leading-7 text-white/48 sm:text-base">
              Have questions or ready to build your next website? Send us a
              message and we’ll get back to you as soon as possible.
            </p>

            <div className="mt-9 space-y-3.5 sm:mt-10 sm:space-y-4">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  className="group flex items-center gap-3 rounded-3xl border border-white/10 bg-white/[0.045] p-3.5 shadow-[0_18px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#8D8BFF]/40 hover:bg-white/[0.07] sm:gap-4 sm:p-4"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10 bg-black/30 text-[#B8B7FF] transition duration-300 group-hover:bg-[#7C5CFF] group-hover:text-white sm:h-14 sm:w-14">
                    {item.icon}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-white">
                      {item.title}
                    </span>
                    <span className="mt-1 block truncate text-xs font-normal text-white/45 sm:text-sm">
                      {item.value}
                    </span>
                  </span>

                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-white transition duration-300 group-hover:bg-white group-hover:text-black sm:h-10 sm:w-10">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2.35rem] bg-gradient-to-br from-[#7C5CFF]/40 via-[#A855F7]/18 to-transparent blur-xl" />

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/40 p-3 shadow-[0_30px_120px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:rounded-[2.35rem] sm:p-4"
            >
              <input type="checkbox" name="botcheck" className="hidden" />

              <div className="pointer-events-none absolute left-0 top-0 h-44 w-44 rounded-full bg-[#8D8BFF]/12 blur-3xl" />
              <div className="pointer-events-none absolute right-0 bottom-0 h-44 w-44 rounded-full bg-[#A855F7]/10 blur-3xl" />

              <div className="relative space-y-3">
                <FormInput
                  label="Name"
                  name="name"
                  placeholder="Name"
                  autoComplete="name"
                  error={errors.name}
                  onChange={() => clearFieldError("name")}
                />

                <FormInput
                  label="Email"
                  name="email"
                  type="text"
                  inputMode="email"
                  placeholder="Email"
                  autoComplete="email"
                  error={errors.email}
                  onChange={() => clearFieldError("email")}
                />

                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={10}
                    placeholder="Message"
                    onChange={() => clearFieldError("message")}
                    className={`min-h-[240px] w-full resize-none rounded-[1.4rem] border px-5 py-5 text-sm font-normal text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_35px_rgba(0,0,0,0.28)] outline-none transition placeholder:text-white/62 focus:bg-white/[0.07] focus:ring-4 sm:min-h-[300px] sm:rounded-[1.55rem] ${
                      errors.message
                        ? "border-[#FB7185]/55 bg-[#FB7185]/10 focus:border-[#FB7185] focus:ring-[#FB7185]/10"
                        : "border-white/10 bg-white/[0.045] focus:border-[#8D8BFF]/55 focus:ring-[#8D8BFF]/10"
                    }`}
                  />

                  <AnimatePresence>
                    {errors.message && <FieldError message={errors.message} />}
                  </AnimatePresence>
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileTap={{ scale: 0.96 }}
                  animate={
                    status === "loading"
                      ? {
                          scale: [1, 1.018, 1],
                          y: [0, -2, 0],
                        }
                      : {
                          scale: 1,
                          y: 0,
                        }
                  }
                  transition={
                    status === "loading"
                      ? {
                          duration: 0.55,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }
                      : undefined
                  }
                  className="relative inline-flex h-16 w-full items-center justify-center overflow-hidden rounded-[1.25rem] bg-white px-6 text-sm font-medium text-black shadow-[0_14px_45px_rgba(255,255,255,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#F3F0FF] disabled:cursor-not-allowed disabled:opacity-90 sm:rounded-[1.45rem]"
                >
                  {status === "loading" && (
                    <>
                      <motion.span
                        className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(124,92,255,0.22),transparent)]"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <motion.span
                        className="absolute h-20 w-20 rounded-full bg-[#8D8BFF]/25 blur-xl"
                        animate={{
                          scale: [0.8, 1.35, 0.8],
                          opacity: [0.35, 0.75, 0.35],
                        }}
                        transition={{
                          duration: 0.9,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </>
                  )}

                  <span className="relative z-10 inline-flex items-center gap-2">
                    {status === "loading" ? (
                      <>
                        Sending
                        <BouncyDots />
                      </>
                    ) : (
                      "Submit"
                    )}
                  </span>
                </motion.button>

                {status === "error" && (
                  <p className="rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-center text-xs leading-5 text-red-200">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccessPopup && (
          <SuccessPopup
            submittedEmail={submittedEmail}
            onClose={closeSuccessPopup}
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
      <label htmlFor={name} className="sr-only">
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
        className={`h-16 w-full rounded-[1.25rem] border px-5 text-sm font-normal text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_10px_35px_rgba(0,0,0,0.28)] outline-none transition placeholder:text-white/62 focus:bg-white/[0.07] focus:ring-4 sm:rounded-[1.45rem] ${
          error
            ? "border-[#FB7185]/55 bg-[#FB7185]/10 focus:border-[#FB7185] focus:ring-[#FB7185]/10"
            : "border-white/10 bg-white/[0.045] focus:border-[#8D8BFF]/55 focus:ring-[#8D8BFF]/10"
        }`}
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
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.2 }}
      className="mt-2 flex items-center gap-2 px-2 text-xs font-normal text-[#FDA4AF]"
    >
      <AlertCircle className="h-3.5 w-3.5" />
      {message}
    </motion.p>
  );
}

function SuccessPopup({
  submittedEmail,
  onClose,
}: {
  submittedEmail: string;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="fixed inset-0 z-[99999] grid place-items-center bg-black/55 px-4 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.92 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 210,
            damping: 18,
          },
        }}
        exit={{
          opacity: 0,
          y: 16,
          scale: 0.96,
          transition: {
            duration: 0.8,
            ease: "easeInOut",
          },
        }}
        className="relative w-full max-w-[390px] overflow-hidden rounded-[2rem] border border-white/12 bg-[#29245F] px-6 pb-6 pt-7 text-center shadow-[0_30px_120px_rgba(0,0,0,0.55)]"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(124,92,255,0.35),transparent_52%),linear-gradient(to_bottom,#29245F,#373071)]" />
        <div className="pointer-events-none absolute -left-14 top-20 h-32 w-32 rounded-full bg-[#8D8BFF]/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-14 bottom-20 h-32 w-32 rounded-full bg-[#A855F7]/20 blur-3xl" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close popup"
          className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/80 transition hover:bg-white hover:text-black"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0.75, rotate: -8 }}
            animate={{
              scale: [0.75, 1.08, 1],
              rotate: [-8, 4, 0],
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="mx-auto"
          >
            <CelebrationIllustration />
          </motion.div>

          <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-300" />
            Message delivered
          </div>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white">
            Congratulations
          </h2>

          <p className="mx-auto mt-3 max-w-[290px] text-sm leading-6 text-white/72">
            Your message has been sent to BuildifyX successfully.
          </p>

          <p className="mx-auto mt-2 max-w-[290px] text-xs leading-5 text-white/48">
            We’ll get back to you soon
            {submittedEmail ? (
              <>
                {" "}
                at{" "}
                <span className="font-medium text-[#FACC15]">
                  {submittedEmail}
                </span>
                .
              </>
            ) : (
              "."
            )}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="mt-6 h-14 w-full rounded-full bg-white px-6 text-sm font-semibold text-[#15152E] shadow-[0_18px_55px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:bg-[#F3F0FF]"
          >
            Continue
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CelebrationIllustration() {
  return (
    <svg
      viewBox="0 0 220 170"
      className="mx-auto h-[138px] w-[178px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="partyBody" x1="55" y1="130" x2="135" y2="42">
          <stop stopColor="#4F7CFF" />
          <stop offset="0.48" stopColor="#8D63FF" />
          <stop offset="1" stopColor="#F48CFF" />
        </linearGradient>

        <linearGradient id="partyMouth" x1="100" y1="54" x2="169" y2="100">
          <stop stopColor="#5B247A" />
          <stop offset="1" stopColor="#2B164C" />
        </linearGradient>

        <filter
          id="glow"
          x="0"
          y="0"
          width="220"
          height="170"
          filterUnits="userSpaceOnUse"
        >
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="0 0 0 0 0.55 0 0 0 0 0.38 0 0 0 0 1 0 0 0 0.55 0"
          />
          <feBlend in2="SourceGraphic" mode="screen" />
        </filter>
      </defs>

      <g filter="url(#glow)">
        <path
          d="M37 133L94 45C99 37 111 39 114 48L151 129C155 139 145 149 135 145L43 142C36 142 33 137 37 133Z"
          fill="url(#partyBody)"
        />
        <path
          d="M105 48C122 35 151 61 168 87C185 113 184 139 166 145C148 151 127 129 113 104C98 77 91 59 105 48Z"
          fill="url(#partyMouth)"
          opacity="0.88"
        />
        <path d="M46 130L123 93L83 53L46 130Z" fill="white" opacity="0.12" />
      </g>

      <circle cx="63" cy="94" r="10" fill="#FACC15" />
      <circle cx="42" cy="74" r="11" fill="#FDA4AF" />
      <circle cx="172" cy="58" r="8" fill="#FB7185" />
      <circle cx="183" cy="79" r="8" fill="#F59E0B" />
      <circle cx="140" cy="130" r="9" fill="#C4B5FD" />
      <circle cx="160" cy="31" r="10" fill="#F97316" />

      <path
        d="M42 18C27 18 29 53 43 52C54 51 57 29 45 30"
        stroke="#D8B4FE"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M134 22C158 24 162 42 137 44C118 46 118 67 148 67"
        stroke="#93C5FD"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M171 105C193 107 195 122 174 126C158 129 160 145 183 145"
        stroke="#DDD6FE"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M139 80C158 67 181 63 203 68"
        stroke="#FDBA74"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BouncyDots() {
  return (
    <span className="inline-flex items-center gap-1">
      {[0, 1, 2].map((dot) => (
        <motion.span
          key={dot}
          animate={{
            y: [0, -5, 0],
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 0.55,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot * 0.12,
          }}
          className="h-1.5 w-1.5 rounded-full bg-black"
        />
      ))}
    </span>
  );
}

function CircuitLines() {
  return (
    <svg
      className="absolute inset-0 hidden h-full w-full opacity-45 sm:block"
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 120 C80 170 72 270 155 302 L292 302"
        stroke="url(#purpleLine)"
        strokeWidth="1.2"
      />
      <circle cx="292" cy="302" r="6" stroke="white" opacity="0.18" />

      <path
        d="M1440 255 C1355 255 1368 315 1295 315 L1178 315"
        stroke="url(#purpleLine)"
        strokeWidth="1.2"
      />
      <circle cx="1178" cy="315" r="6" stroke="white" opacity="0.18" />

      <path
        d="M1440 370 C1378 310 1355 275 1292 275 L1140 275"
        stroke="url(#purpleLine)"
        strokeWidth="1.2"
      />
      <circle cx="1140" cy="275" r="6" stroke="white" opacity="0.18" />

      <defs>
        <linearGradient
          id="purpleLine"
          x1="0"
          y1="0"
          x2="1440"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" stopOpacity="0.04" />
          <stop offset="0.5" stopColor="#8D8BFF" stopOpacity="0.55" />
          <stop offset="1" stopColor="white" stopOpacity="0.04" />
        </linearGradient>
      </defs>
    </svg>
  );
}
