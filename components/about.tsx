"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FiBriefcase, FiAward, FiCode } from "react-icons/fi";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[58rem] w-full scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <div className="bento-grid">
        {/* Bio card — spans 2 columns on desktop */}
        <motion.div
          className="bento-item col-span-2 sm:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <p className="leading-8 text-gray-600 dark:text-white/75 text-[1.02rem]">
            I&apos;m a results-driven fullstack developer with a passion for
            building robust, efficient, and maintainable applications. From{" "}
            <span className="font-semibold text-accent-cyan">backend APIs</span>{" "}
            to{" "}
            <span className="font-semibold text-accent-violet">
              modern frontends
            </span>
            , I deliver end-to-end solutions that are scalable, secure, and
            aligned with real business goals.
          </p>
          <p className="mt-4 leading-8 text-gray-600 dark:text-white/75 text-[1.02rem]">
            I specialize in{" "}
            <span className="font-semibold">RESTful API development</span>,{" "}
            <span className="font-semibold">microservices</span>,{" "}
            <span className="font-semibold">
              secure authentication (OAuth, JWT)
            </span>
            , and{" "}
            <span className="font-semibold">containerized deployments</span>.
            Whether launching a product or scaling infrastructure, I bring the
            skills to drive real results.
          </p>
        </motion.div>

        {/* Current Role */}
        <motion.div
          className="bento-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan text-white shadow-lg shadow-accent-violet/20">
              <FiBriefcase size={18} />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                Current Role
              </p>
            </div>
          </div>
          <h3 className="font-bold text-lg mb-1">Jr. Core Banking Officer</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Amhara Bank S.C.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
            Building integrations with TAFJ, InfoBasic &amp; Java for the Temenos T24
            platform.
          </p>
        </motion.div>

        {/* Education */}
        <motion.div
          className="bento-item"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent-pink to-accent-violet text-white shadow-lg shadow-accent-pink/20">
              <FiAward size={18} />
            </div>
            <div>
              <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                Education
              </p>
            </div>
          </div>
          <h3 className="font-bold text-lg mb-1">B.Sc. Software Engineering</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Bahir Dar University
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-accent-violet/10 to-accent-cyan/10 dark:from-accent-violet/20 dark:to-accent-cyan/20">
            <span className="text-sm font-bold gradient-text">3.93</span>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              CGPA
            </span>
          </div>
        </motion.div>

        {/* Stats row — spans 2 columns */}
        <motion.div
          className="bento-item col-span-2 sm:col-span-2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-emerald text-white shadow-lg shadow-accent-cyan/20">
              <FiCode size={18} />
            </div>
            <p className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
              By the Numbers
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { value: "3+", label: "Years Experience" },
              { value: "8+", label: "Projects Built" },
              { value: "3.93", label: "University CGPA" },
            ].map((stat, i) => (
              <div key={i} className="text-center stat-item cursor-default group">
                <motion.div
                  className="text-3xl sm:text-4xl font-bold gradient-text"
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 * i,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs text-gray-500 dark:text-white/50 mt-2 group-hover:text-gray-700 dark:group-hover:text-white/70 transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
