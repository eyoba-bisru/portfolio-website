"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              duration: 0.4,
            }}
          >
            <div className="relative">
              <span className="text-6xl sm:text-7xl inline-block animate-float">💻</span>
              {/* Glow behind emoji */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 blur-2xl rounded-full -z-10"></div>
            </div>
          </motion.div>

          <motion.span
            className="absolute -bottom-1 -right-1 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.div
        className="mb-2 mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-violet-100 to-cyan-100 text-violet-700 dark:from-violet-900/40 dark:to-cyan-900/40 dark:text-violet-300 border border-violet-200/50 dark:border-violet-700/30">
          Full-Stack Software Engineer
        </span>
      </motion.div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold gradient-text text-3xl sm:text-5xl block mb-3">
          Hello, I&apos;m Eyob Abebe Melese.
        </span>{" "}
        I&apos;m a{" "}
        <span className="font-bold">results-driven full-stack developer</span>{" "}
        with <span className="font-bold">3+ years</span> of experience. I
        deliver end-to-end solutions that are{" "}
        <span className="italic text-violet-600 dark:text-violet-400">scalable, secure &amp; maintainable</span>. My
        focus is{" "}
        <span className="underline decoration-accent-violet/50 decoration-2 underline-offset-4">
          React (Next.js)
        </span>{" "}
        &amp;{" "}
        <span className="underline decoration-accent-cyan/50 decoration-2 underline-offset-4">
          Go
        </span>
        .
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gradient-to-r from-accent-violet to-accent-cyan text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all shadow-lg shadow-accent-violet/25 hover:shadow-xl hover:shadow-accent-violet/35 animate-pulse-glow"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1.5 transition-transform" />
        </Link>

        <a
          className="group glass-strong px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer hover-glow gradient-border"
          href="/Resume.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition-transform" />
        </a>

        <div className="flex gap-2">
          <a
            className="glass-strong p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-accent-violet active:scale-105 transition-all cursor-pointer hover-glow gradient-border dark:text-white/60 dark:hover:text-accent-cyan"
            href="https://www.linkedin.com/in/eyob-abebe-8327b71a1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <BsLinkedin />
          </a>

          <a
            className="glass-strong p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-accent-violet active:scale-105 transition-all cursor-pointer hover-glow gradient-border dark:text-white/60 dark:hover:text-accent-cyan"
            href="https://github.com/eyoba-bisru"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
