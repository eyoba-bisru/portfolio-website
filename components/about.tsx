"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] scroll-mt-28 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <div className="glass rounded-2xl p-8 sm:p-10 hover-glow transition-shadow">
        <p className="mb-4 leading-7 text-gray-700 dark:text-white/80">
          I'm a results-driven fullstack developer with a passion for building
          robust, efficient, and maintainable applications. From{" "}
          <span className="font-medium text-accent-cyan dark:text-cyan-400">
            backend APIs
          </span>{" "}
          to{" "}
          <span className="font-medium text-accent-violet dark:text-violet-400">
            modern frontends
          </span>
          , I deliver end-to-end solutions that are scalable, secure, and
          aligned with real business goals.
        </p>

        <p className="mb-4 leading-7 text-gray-700 dark:text-white/80">
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

        <p className="leading-7 text-gray-700 dark:text-white/80">
          Currently, I'm a{" "}
          <span className="font-semibold">Junior Core Banking Officer</span> at{" "}
          <span className="font-semibold">Amhara Bank S.C.</span>, developing
          integrations using TAFJ, InfoBasic, and Java for the Temenos Transact
          (T24) platform. I graduated in Software Engineering from{" "}
          <span className="font-semibold">Bahir Dar University</span> with a
          CGPA of{" "}
          <span className="font-bold gradient-text">3.93</span>.
        </p>

        {/* Stats Strip */}
        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-black/5 dark:border-white/10">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">
              3+
            </div>
            <div className="text-sm text-gray-500 dark:text-white/50 mt-1">
              Years Experience
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">
              8+
            </div>
            <div className="text-sm text-gray-500 dark:text-white/50 mt-1">
              Projects Built
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text">
              3.93
            </div>
            <div className="text-sm text-gray-500 dark:text-white/50 mt-1">
              University CGPA
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
