"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiExternalLink, FiTerminal, FiGithub } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
  index,
}: ProjectProps) {
  const hasImage = imageUrl !== null;
  const isGithub = link?.includes("github.com");

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.08 * index, duration: 0.4 }}
      className="group"
    >
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`View ${title} project`}
      >
        <div className="card-3d glass rounded-2xl overflow-hidden h-full flex flex-col">
          {/* Image area */}
          {hasImage ? (
            <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-navy-900">
              <Image
                src={imageUrl}
                alt={`Screenshot of ${title}`}
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Floating link icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 dark:bg-navy-900/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                {isGithub ? (
                  <FiGithub size={14} className="text-gray-700 dark:text-gray-200" />
                ) : (
                  <FiExternalLink size={14} className="text-gray-700 dark:text-gray-200" />
                )}
              </div>
            </div>
          ) : (
            <div className="relative h-36 overflow-hidden bg-gradient-to-br from-accent-violet/5 to-accent-cyan/5 dark:from-accent-violet/10 dark:to-accent-cyan/10 flex items-center justify-center">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-violet to-accent-cyan text-white shadow-xl shadow-accent-violet/20">
                <FiTerminal size={24} />
              </div>
              {/* Decorative circles */}
              <div className="absolute top-4 right-8 w-20 h-20 rounded-full border border-accent-violet/10 dark:border-accent-violet/20"></div>
              <div className="absolute bottom-2 left-6 w-12 h-12 rounded-full border border-accent-cyan/10 dark:border-accent-cyan/20"></div>

              {/* Floating link icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 dark:bg-navy-900/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                {isGithub ? (
                  <FiGithub size={14} className="text-gray-700 dark:text-gray-200" />
                ) : (
                  <FiExternalLink size={14} className="text-gray-700 dark:text-gray-200" />
                )}
              </div>
            </div>
          )}

          {/* Content */}
          <div className="p-5 flex flex-col flex-1">
            <h3 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all duration-300">
              {title}
            </h3>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-white/60 mb-4 flex-1">
              {description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="tag-pill bg-gradient-to-r from-accent-violet/80 to-accent-cyan/80 px-2.5 py-0.5 text-[0.65rem] uppercase tracking-wider text-white rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}
