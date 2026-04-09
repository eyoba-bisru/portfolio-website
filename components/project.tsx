"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiTerminal, FiGithub } from "react-icons/fi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const hasImage = imageUrl !== null;
  const isGithub = link?.includes("github.com");

  const cardContent = (
    <section
      className={`glass rounded-2xl overflow-hidden relative group-hover:shadow-xl group-hover:shadow-accent-violet/10 transition-all duration-500 dark:group-hover:shadow-accent-cyan/10 gradient-border ${hasImage ? "sm:pr-8 sm:h-[20rem] sm:group-even:pl-8" : ""
        }`}
    >
      <div
        className={`pt-4 pb-7 px-5 flex flex-col h-full ${hasImage
            ? "sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:group-even:ml-[18rem]"
            : "sm:pl-10 sm:pr-10 sm:pt-8"
          }`}
      >
        <div className="flex items-center gap-2">
          {!hasImage && (
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-accent-violet to-accent-cyan text-white mr-1 shadow-lg shadow-accent-violet/20">
              <FiTerminal className="text-lg" />
            </div>
          )}
          <h3 className="text-2xl font-bold group-hover:gradient-text transition-all duration-300">{title}</h3>
          {link && (
            <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
              {isGithub ? (
                <FiGithub className="text-accent-violet dark:text-accent-cyan" />
              ) : (
                <FiExternalLink className="text-accent-violet dark:text-accent-cyan" />
              )}
            </span>
          )}
        </div>
        <p className="mt-2 leading-relaxed text-gray-600 dark:text-white/70">
          {description}
        </p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="tag-pill bg-gradient-to-r from-accent-violet/80 to-accent-cyan/80 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full font-medium"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      {hasImage && (
        <Image
          src={imageUrl}
          alt={`Screenshot of ${title} project`}
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          transition-all duration-500
          group-hover:scale-[1.04]
          group-hover:-translate-x-3
          group-hover:translate-y-3
          group-hover:-rotate-2

          group-even:group-hover:translate-x-3
          group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2

          group-even:right-[initial] group-even:-left-40"
        />
      )}

      {/* Hover gradient overlay */}
      {link && (
        <div className="absolute inset-0 bg-gradient-to-r from-accent-violet/5 to-accent-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
      )}
    </section>
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block cursor-pointer"
          aria-label={`View ${title} project`}
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </motion.div>
  );
}
