"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { FiBriefcase, FiBookOpen } from "react-icons/fi";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section
      id="experience"
      ref={ref}
      className="scroll-mt-28 mb-28 sm:mb-40 max-w-[42rem] w-full"
    >
      <SectionHeading subtitle="My professional journey so far">
        My experience
      </SectionHeading>

      <div className="relative pl-8">
        {/* Timeline line */}
        <div className="absolute left-[0.5625rem] top-2 bottom-2 w-[2px] bg-gradient-to-b from-accent-violet via-accent-cyan to-accent-violet/20 rounded-full"></div>

        {experiencesData
          .slice()
          .reverse()
          .map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-10 last:mb-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              {/* Timeline dot */}
              <div className="absolute -left-8 top-1 w-5 h-5 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan flex items-center justify-center shadow-lg shadow-accent-violet/30 z-10">
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </div>

              {/* Card */}
              <div className="timeline-card">
                {/* Date badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-accent-violet/10 to-accent-cyan/10 dark:from-accent-violet/20 dark:to-accent-cyan/20 text-xs font-medium text-gray-600 dark:text-gray-300 mb-3">
                  {item.type === "education" ? (
                    <FiBookOpen size={11} className="text-accent-violet" />
                  ) : (
                    <FiBriefcase size={11} className="text-accent-cyan" />
                  )}
                  {item.date}
                </div>

                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">
                  {item.location}
                </p>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-white/65">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
}
