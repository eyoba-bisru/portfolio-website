"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillCategories } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.04 * index },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  let globalIndex = 0;

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[58rem] w-full scroll-mt-28 sm:mb-40"
    >
      <SectionHeading subtitle="Technologies I work with daily">
        My skills
      </SectionHeading>

      <div className="space-y-8">
        {skillCategories.map((category) => (
          <motion.div
            key={category.name}
            className="glass rounded-2xl p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            {/* Category header */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-lg">{category.emoji}</span>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {category.name}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent dark:from-gray-700"></div>
            </div>

            {/* Skills list */}
            <div className="flex flex-wrap gap-2.5">
              {category.skills.map((skill) => {
                const idx = globalIndex++;
                return (
                  <motion.span
                    key={skill}
                    className="skill-badge"
                    variants={fadeInVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={idx}
                  >
                    {skill}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
