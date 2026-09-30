"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import styles from "./hero.module.css";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { language } = useLanguage();
  const th = language === "th";

  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.videoWrap}
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease }}
        aria-hidden="true"
      >
        <video
          className={styles.video}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_215831_c6a8989c-d716-4d8d-8745-e972a2eec711.mp4"
          autoPlay
          muted
          playsInline
          loop
        />
      </motion.div>

      <motion.div
        className={styles.footer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease }}
      >
        <div className={styles.footerInner}>
          <div className={styles.leftBlock}>
            <motion.div
              className={styles.subtitle}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
            >
              <span className={styles.subtitleDot} />
              <span>{th ? "ไอเดียที่มีเป้าหมาย ผลิตภัณฑ์ที่สร้างผลลัพธ์" : "Ideas with purpose. Products with impact."}</span>
            </motion.div>

            <motion.h1
              className={styles.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease }}
            >
              {th ? (
                <>
                  <span>เราเปลี่ยนไอเดีย</span>
                  <span>ให้กลายเป็นสิ่งที่มีความหมาย</span>
                </>
              ) : (
                <>
                  <span>Built for ideas that</span>
                  <span>matter.</span>
                </>
              )}
            </motion.h1>

            <motion.div
              className={styles.buttons}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease }}
            >
              <Link href="/Contact" className={styles.primary}>
                {th ? "เริ่มโปรเจกต์" : "Start a project"}
              </Link>
              <Link href="/mywork" className={styles.secondary}>
                {th ? "ดูผลงาน" : "See our work"}
              </Link>
            </motion.div>
          </div>

          <motion.div
            className={styles.tags}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
          >
            <span>Strategy</span>
            <span>Design</span>
            <span>Engineering</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
