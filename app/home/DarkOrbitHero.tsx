"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useLayoutEffect, useRef } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./DarkOrbitHero.module.css";

const heroCopy = {
  th: {
    overline: "Buildifyx Studio",
    titleA: "เราสร้างดิจิทัลโปรดักต์",
    titleB: "ที่คนใช้ได้จริง และธุรกิจเติบโตต่อได้",
    lead: "ตั้งแต่ Web, App, AI, Data ไปจนถึง Automation เราช่วยคิด ออกแบบ และพัฒนาระบบให้กลายเป็นของที่คนใช้ได้จริง",
    primary: "เริ่มโปรเจกต์",
    secondary: "ดูผลงาน",
  },
  en: {
    overline: "Buildifyx Studio",
    titleA: "We build digital products",
    titleB: "people can use and businesses can grow",
    lead: "From web apps and AI to data systems\nand automation, we help shape, design, and build products that work in the real world.",
    primary: "Start a project",
    secondary: "See our work",
  },
} as const;

const cardImages = [
  "https://images.pexels.com/photos/7794037/pexels-photo-7794037.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop",
  "https://images.pexels.com/photos/8518624/pexels-photo-8518624.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop",
  "https://images.pexels.com/photos/7698825/pexels-photo-7698825.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop",
  "https://images.pexels.com/photos/12899156/pexels-photo-12899156.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop",
  "https://images.pexels.com/photos/7651932/pexels-photo-7651932.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop",
  "https://images.pexels.com/photos/12899151/pexels-photo-12899151.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop",
  "https://images.pexels.com/photos/4339794/pexels-photo-4339794.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop",
  "https://images.pexels.com/photos/6592371/pexels-photo-6592371.jpeg?auto=compress&cs=tinysrgb&w=900&h=1200&fit=crop",
  "https://unsplash.com/photos/5QgIuuBxKwM/download?force=true&w=900",
  "https://unsplash.com/photos/UikYLDQj9_I/download?force=true&w=900",
] as const;

const cardNames = [
  "Team meeting",
  "Product collaboration",
  "Strategy session",
  "Software development",
  "Office workshop",
  "Programming",
  "Team collaboration",
  "Project discussion",
  "Creative meeting",
  "Tech teamwork",
] as const;

function ButterflyIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" width="16" height="16" fill="none">
      <path d="M11.8 12.1C9.9 7.8 7.7 5.6 5.8 5.2 4.1 4.9 3 5.9 3.2 7.5c.3 2.2 2.4 4.5 6.6 5.5m2.4-.9c1.9-4.3 4.1-6.5 6-6.9 1.7-.3 2.8.7 2.6 2.3-.3 2.2-2.4 4.5-6.6 5.5m-2.1-.7c-1.6 2-2 4-.9 5.5.8 1.2 2.4 1.1 3.2 0 1-1.4.6-3.4-1.1-5.5M12 8.8v7.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function DarkOrbitHero() {
  const { language } = useLanguage();
  const copy = heroCopy[language];
  const stageRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const starARef = useRef<HTMLDivElement>(null);
  const starBRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;

    const resize = () => {
      const width = stage.clientWidth;
      const height = stage.clientHeight;
      if (width <= 700) {
        canvas.style.removeProperty("--hero-k");
        canvas.style.removeProperty("--hero-fill");
        return;
      }
      const tablet = width <= 1080;
      const designWidth = tablet ? 920 + ((width - 701) * (1172 - 920)) / (1080 - 701) : 1172;
      const k = Math.min(width / designWidth, height / 560);
      const fill = Math.max(0, height / k - 657);
      canvas.style.setProperty("--hero-k", String(k));
      canvas.style.setProperty("--hero-fill", `${fill}px`);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(stage);
    window.addEventListener("resize", resize);
    window.visualViewport?.addEventListener("resize", resize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resize);
      window.visualViewport?.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const buildStars = (el: HTMLDivElement | null, count: number, blur: number, minAlpha: number, maxAlpha: number) => {
      if (!el) return;
      const shadows: string[] = [];
      for (let i = 0; i < count; i += 1) {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const alpha = minAlpha + Math.random() * (maxAlpha - minAlpha);
        shadows.push(`${x.toFixed(2)}vw ${y.toFixed(2)}vh ${blur}px 0 rgba(47,127,255,${alpha.toFixed(3)})`);
      }
      el.style.boxShadow = shadows.join(",");
    };
    buildStars(starARef.current, 120, 0, 0.025, 0.12);
    buildStars(starBRef.current, 16, 1.1, 0.12, 0.28);
  }, []);

  useLayoutEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const radius = 891;
    const count = 37;
    const step = 360 / count;
    let phase = -2;
    let frame = 0;
    let last = performance.now();

    const paint = (time: number) => {
      const dt = Math.min((time - last) / 1000, 0.1);
      last = time;
      if (!reduced.matches) phase -= 1.9 * dt;

      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        const angle = ((index * step + phase) % 360 + 540) % 360 - 180;
        if (Math.abs(angle) > 42) {
          el.style.visibility = "hidden";
          return;
        }
        el.style.visibility = "visible";
        const rad = (angle * Math.PI) / 180;
        const cos = Math.cos(rad);
        const x = radius * Math.sin(rad);
        const z = radius * (1 - cos);
        el.style.transform = `translate3d(${x}px,0,${z}px) rotateY(${-angle}deg)`;
        el.style.filter = `brightness(${0.92 + 0.22 * (1 / cos - 1)}) saturate(.98)`;
      });
      frame = requestAnimationFrame(paint);
    };

    const resetClock = () => { last = performance.now(); };
    paint(performance.now());
    document.addEventListener("visibilitychange", resetClock);
    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener("visibilitychange", resetClock);
    };
  }, []);

  return (
    <section className={styles.heroSection}>
      <section ref={stageRef} className={styles.stage} aria-label="Buildifyx hero">
        <div className={styles.background} aria-hidden="true" />
        <div ref={starARef} className={`${styles.stars} ${styles.starA}`} aria-hidden="true" />
        <div ref={starBRef} className={`${styles.stars} ${styles.starB}`} aria-hidden="true" />
        <div ref={canvasRef} className={styles.canvas}>
          <div className={styles.stack}>
            <div className={styles.badge}>
              <i><ButterflyIcon /></i>
              <b>{copy.overline}</b>
            </div>
            <div className={styles.headlineWrap}>
              <h1 className={styles.headline}><span>{copy.titleA}</span><span>{copy.titleB}</span></h1>
              <p className={styles.lead}>{copy.lead}</p>
            </div>
            <div className={styles.ctaRow}>
              <Link href="/Contact" className={`${styles.glowButton} ${styles.primaryButton}`}><span>{copy.primary}</span><ArrowUpRight className={styles.ctaIcon} size={16} /></Link>
              <Link href="/mywork" className={`${styles.glowButton} ${styles.secondaryButton}`}><span>{copy.secondary}</span><ArrowRight className={styles.ctaIcon} size={16} /></Link>
            </div>
          </div>
          <div className={styles.showcase} aria-hidden="true">
            <div className={styles.ring}>
              {Array.from({ length: 37 }, (_, index) => {
                const image = cardImages[index % cardImages.length];
                const name = cardNames[index % cardNames.length];
                return (
                  <div key={`${image}-${index}`} ref={(node) => { cardRefs.current[index] = node; }} className={styles.card}>
                    <img src={image} alt="" draggable={false} referrerPolicy="no-referrer" />
                    <div className={styles.cardShade} />
                    <span className={styles.cardLabel}>{name}</span>
                    <div className={styles.cardEdge} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
