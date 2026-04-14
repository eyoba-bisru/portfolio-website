"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import type { ProjectCategory } from "@/lib/types";

const categories: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Backend", value: "backend" },
  { label: "Mobile", value: "mobile" },
];

export default function Projects() {
  const { ref } = useSectionInView("Projects");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 max-w-[72rem] w-full">
      <SectionHeading subtitle="A selection of things I've built">
        My projects
      </SectionHeading>

      {/* Filter tabs */}
      <div className="flex justify-center gap-2 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat.value
                ? "bg-gradient-to-r from-accent-violet to-accent-cyan text-white shadow-lg shadow-accent-violet/20"
                : "glass text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        layout
      >
        {filteredProjects.map((project, index) => (
          <Project key={project.title} {...project} index={index} />
        ))}
      </motion.div>
    </section>
  );
}
