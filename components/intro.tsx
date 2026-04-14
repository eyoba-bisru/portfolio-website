"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const roles = [
  "Full-Stack Developer",
  "Backend Engineer",
  "React Specialist",
  "Go Developer",
];

const codeLines = [
  { text: 'const developer = {', color: '#cba6f7' },
  { text: '  name: "Eyob Abebe",', color: '#a6e3a1' },
  { text: '  role: "Full-Stack Engineer",', color: '#a6e3a1' },
  { text: '  stack: ["React", "Next.js", "Go"],', color: '#89b4fa' },
  { text: '  passion: "Building scalable apps",', color: '#a6e3a1' },
  { text: '  available: true,', color: '#fab387' },
  { text: '};', color: '#cba6f7' },
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [visibleLines]);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[72rem] w-full sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Left side — Text content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Status badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium glass mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-gray-600 dark:text-gray-300">
              Available for opportunities
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold !leading-[1.15] mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I&apos;m{" "}
            <span className="gradient-text">Eyob Abebe</span>
            <span className="text-accent-violet">.</span>
          </motion.h1>

          {/* Animated role */}
          <motion.div
            className="mb-6 h-8 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.p
              key={roleIndex}
              className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {roles[roleIndex]}
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            A results-driven developer with{" "}
            <span className="font-semibold text-gray-700 dark:text-gray-200">
              3+ years
            </span>{" "}
            of experience building scalable, secure & maintainable solutions with{" "}
            <span className="font-semibold text-accent-violet dark:text-accent-cyan">
              React, Next.js & Go
            </span>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-3 lg:justify-start justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Link
              href="#contact"
              className="group bg-gradient-to-r from-accent-violet to-accent-cyan text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition-all shadow-lg shadow-accent-violet/20 hover:shadow-xl hover:shadow-accent-violet/30 text-sm font-medium"
              onClick={() => {
                setActiveSection("Contact");
                setTimeOfLastClick(Date.now());
              }}
            >
              Get in touch
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              className="group glass-strong px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-100 transition-all cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-200"
              href="/Resume.pdf"
              download
            >
              Download CV
              <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition-transform" />
            </a>

            <div className="flex gap-2">
              <a
                className="glass-strong p-3.5 text-gray-600 flex items-center rounded-full focus:scale-110 hover:scale-110 hover:text-accent-violet active:scale-100 transition-all cursor-pointer dark:text-white/60 dark:hover:text-accent-cyan"
                href="https://www.linkedin.com/in/eyob-abebe-8327b71a1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <BsLinkedin size={16} />
              </a>

              <a
                className="glass-strong p-3.5 text-gray-600 flex items-center rounded-full focus:scale-110 hover:scale-110 hover:text-accent-violet active:scale-100 transition-all cursor-pointer dark:text-white/60 dark:hover:text-accent-cyan"
                href="https://github.com/eyoba-bisru"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FaGithubSquare size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side — Code terminal */}
        <motion.div
          className="flex-1 max-w-md w-full hidden md:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="terminal relative">
            {/* Glow behind terminal */}
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-violet/20 to-accent-cyan/20 blur-3xl rounded-3xl -z-10"></div>

            {/* Terminal header */}
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500/80"></div>
              <div className="terminal-dot bg-yellow-500/80"></div>
              <div className="terminal-dot bg-green-500/80"></div>
              <span className="text-[0.65rem] text-gray-500 ml-2 font-mono">
                ~/portfolio — developer.ts
              </span>
            </div>

            {/* Terminal body */}
            <div className="terminal-body">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  animate={
                    i < visibleLines
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -10 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-gray-600 text-[0.7rem] select-none w-4 text-right shrink-0">
                    {i + 1}
                  </span>
                  <span style={{ color: line.color }}>{line.text}</span>
                </motion.div>
              ))}
              {/* Cursor */}
              <div className="flex items-center gap-3 mt-1">
                <span className="text-gray-600 text-[0.7rem] select-none w-4 text-right shrink-0">
                  {codeLines.length + 1}
                </span>
                <span className="w-2 h-4 bg-accent-cyan animate-cursor-blink"></span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
