"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

// Map skills to icon/color themes
const skillThemes: Record<string, { emoji: string; gradient: string }> = {
  "React.js": { emoji: "⚛️", gradient: "from-sky-500/10 to-blue-500/10 dark:from-sky-500/20 dark:to-blue-500/20" },
  "Next.js": { emoji: "▲", gradient: "from-gray-500/10 to-gray-700/10 dark:from-gray-400/20 dark:to-gray-600/20" },
  "TypeScript": { emoji: "📘", gradient: "from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20" },
  "Go": { emoji: "🐹", gradient: "from-cyan-500/10 to-teal-500/10 dark:from-cyan-500/20 dark:to-teal-500/20" },
  "Docker": { emoji: "🐳", gradient: "from-blue-400/10 to-sky-500/10 dark:from-blue-400/20 dark:to-sky-500/20" },
  "Python": { emoji: "🐍", gradient: "from-yellow-500/10 to-green-500/10 dark:from-yellow-500/20 dark:to-green-500/20" },
  "Flutter": { emoji: "📱", gradient: "from-blue-400/10 to-cyan-500/10 dark:from-blue-400/20 dark:to-cyan-500/20" },
  "PostgreSQL": { emoji: "🐘", gradient: "from-blue-500/10 to-indigo-500/10 dark:from-blue-500/20 dark:to-indigo-500/20" },
  "MongoDB": { emoji: "🍃", gradient: "from-green-500/10 to-emerald-500/10 dark:from-green-500/20 dark:to-emerald-500/20" },
  "Git": { emoji: "🔀", gradient: "from-orange-500/10 to-red-500/10 dark:from-orange-500/20 dark:to-red-500/20" },
  "GraphQL": { emoji: "◈", gradient: "from-pink-500/10 to-fuchsia-500/10 dark:from-pink-500/20 dark:to-fuchsia-500/20" },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-3 text-lg text-gray-800">
        {skillsData.map((skill, index) => {
          const theme = skillThemes[skill];
          return (
            <motion.li
              className={`glass rounded-xl px-5 py-3 gradient-border hover-glow cursor-default transition-all duration-300 dark:text-white/80 hover:scale-105 ${
                theme ? `bg-gradient-to-br ${theme.gradient}` : ""
              }`}
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {theme?.emoji && <span className="mr-1.5 text-base">{theme.emoji}</span>}
              {skill}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
