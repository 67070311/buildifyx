"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Team() {
  return (
    <>
      <section className="mt-1 bg-white px-4 py-16 md:px-6 md:py-24">
        {/* Top */}
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-base text-[#afafaf] md:text-xl">Team</p>

          <h1 className="mt-4 text-3xl font-medium text-[#5552D9] md:text-5xl">
            Meet Our Team
          </h1>
        </div>

        <section>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10 w-full px-0 py-10"
          >
            {/* Card 1 */}
            <div className="mt-10 bg-gray-100 px-6 pt-10 md:mt-16 md:px-20">
              <div className="grid items-center gap-10 md:grid-cols-2">
                {/* LEFT CONTENT */}
                <div>
                  <h2 className="text-2xl font-bold text-black md:text-2xl">
                    PISITPON JANTON (Top)
                  </h2>

                  <div className="mt-6 text-sm uppercase tracking-wide text-gray-400 md:mt-10 md:text-lg">
                    <p>Frontend Developer</p>
                    <p className="mt-2">Backend Developer</p>
                    <p className="mt-2">Product Manager</p>
                  </div>

                  <h3 className="mt-8 text-lg font-semibold text-[#6C4CF1] md:mt-10 md:text-xl">
                    Professional Summary
                  </h3>

                  <p className="mt-3 text-base leading-[1.8] text-black md:text-lg">
                    A multidisciplinary developer with experience in both
                    frontend and backend development. Passionate about building
                    scalable digital products and translating real-world
                    problems into effective solutions.
                  </p>

                  <h3 className="mt-8 text-lg font-bold text-[#6C4CF1] md:mt-10 md:text-xl">
                    Education
                  </h3>

                  <p className="mt-3 text-base leading-[1.8] text-black md:text-lg pb-10">
                    King Mongkut's Institute of Technology Ladkrabang
                    <br />
                    Faculty of Information Technology
                  </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex items-end justify-center h-full">
                  <Image
                    src="/aboutus_pic/Top.png"
                    alt="Team"
                    width={400}
                    height={400}
                    className="w-[220px] md:w-[400px] self-end"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10 w-full px-0 py-10"
          >
            {/* Card 2 */}
            <div className="mt-6 bg-gray-100 px-6 pt-10 md:mt-10 md:px-20">
              <div className="grid items-center gap-10 md:grid-cols-2">
                {/* LEFT IMAGE */}
                <div className="order-2 flex items-end justify-center h-full md:order-1">
                  <Image
                    src="/aboutus_pic/Ming.png"
                    alt="Team"
                    width={400}
                    height={400}
                    className="w-[220px] md:w-[400px]"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="order-1 md:order-2">
                  <h2 className="text-xl font-bold text-black md:text-2xl">
                    PICHAIYUT TAWEEPONGPAIRUT (Ming)
                  </h2>

                  <div className="mt-6 text-sm uppercase tracking-wide text-gray-400 md:mt-10 md:text-lg">
                    <p>AI Engineer</p>
                    <p className="mt-2">Data Scientist</p>
                    <p className="mt-2">Frontend Developer</p>
                  </div>

                  <h3 className="mt-8 text-lg font-semibold text-[#6C4CF1] md:mt-10 md:text-xl">
                    Professional Summary
                  </h3>

                  <p className="mt-3 text-base leading-[1.8] text-black md:text-lg">
                    A tech-driven problem solver specializing in AI, data
                    science, and frontend development. Focused on building
                    scalable systems and turning data into meaningful insights
                    to support better product and business decisions.
                  </p>

                  <h3 className="mt-8 text-lg font-bold text-[#6C4CF1] md:mt-10 md:text-xl">
                    Education
                  </h3>

                  <p className="mt-3 text-base leading-[1.8] text-black md:text-lg pb-10">
                    King Mongkut's Institute of Technology Ladkrabang
                    <br />
                    Faculty of Science Computer Science
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10 w-full px-0 py-10"
          >
            {/* Card 3 */}
            <div className="mt-10 bg-gray-100 px-6 pt-10 md:mt-16 md:px-20">
              <div className="grid items-center gap-10 md:grid-cols-2">
                {/* LEFT CONTENT */}
                <div>
                  <h2 className="text-2xl font-bold text-black md:text-2xl">
                    PATTARAPOL PETCHARAT  (Poohpol)
                  </h2>

                  <div className="mt-6 text-sm uppercase tracking-wide text-gray-400 md:mt-10 md:text-lg">
                    <p>Product Manager</p>
                    <p className="mt-2">Data Engineer</p>
                    <p className="mt-2">Frontend Developer</p>
                  </div>

                  <h3 className="mt-8 text-lg font-semibold text-[#6C4CF1] md:mt-10 md:text-xl">
                    Professional Summary
                  </h3>

                  <p className="mt-3 text-base leading-[1.8] text-black md:text-lg">
                    A data-driven problem solver with experience in data
                    analysis, business intelligence, and system development.
                    Skilled in using Python and SQL to extract actionable
                    insights, build dashboards, and support business decisions,
                    with hands-on experience in enterprise and cross-functional
                    teams.
                  </p>

                  <h3 className="mt-8 text-lg font-bold text-[#6C4CF1] md:mt-10 md:text-xl">
                    Education
                  </h3>

                  <p className="mt-3 text-base leading-[1.8] text-black md:text-lg pb-10">
                    King Mongkut’s Institute of Technology Ladkrabang
                    <br />
                    Faculty of Information Technology Data Science and Business
                    Analytics
                  </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex items-end justify-center h-full">
                  <Image
                    src="/aboutus_pic/Pol.png"
                    alt="Team"
                    width={400}
                    height={400}
                    className="w-[220px] md:w-[400px] self-end"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative z-10 w-full px-0 py-10"
          >
            {/* Card 4 */}
            <div className="mt-6 bg-gray-100 px-6 pt-10 md:mt-10 md:px-20">
              <div className="grid items-center gap-10 md:grid-cols-2">
                {/* LEFT IMAGE */}
                <div className="order-2 flex items-end justify-center h-full md:order-1">
                  <Image
                    src="/aboutus_pic/Manee.png"
                    alt="Team"
                    width={1000}
                    height={1000}
                    className="w-[220px] md:w-[400px]"
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="order-1 md:order-2">
                  <h2 className="text-2xl font-bold text-black md:text-2xl">
                    PIMMANEE NIMITRAPORN (Manee)
                  </h2>

                  <div className="mt-6 text-sm uppercase tracking-wide text-gray-400 md:mt-10 md:text-lg">
                    <p>UI/UX Designer</p>
                    <p className="mt-2">Graphic Designer</p>
                    <p className="mt-2">Frontend Developer</p>
                    <p className="mt-2">3D Modeler</p>
                  </div>

                  <h3 className="mt-8 text-lg font-semibold text-[#6C4CF1] md:mt-10 md:text-xl">
                    Professional Summary
                  </h3>

                  <p className="mt-3 text-base leading-[1.8] text-black md:text-lg">
                    creative UI/UX designer with a strong passion for visual
                    storytelling and digital experiences. Experienced in
                    designing user-centered interfaces, creating engaging
                    content, and developing modern web applications that combine
                    aesthetics with functionality.
                  </p>

                  <h3 className="mt-8 text-lg font-bold text-[#6C4CF1] md:mt-10 md:text-xl">
                    Education
                  </h3>

                  <p className="mt-3 text-base leading-[1.8] text-black md:text-lg pb-10">
                    King Mongkut’s Institute of Technology Ladkrabang
                    <br />
                    Faculty of Information Technology
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </section>
    </>
  );
}
