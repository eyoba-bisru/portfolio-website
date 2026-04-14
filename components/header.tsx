"use client";

import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useTheme } from "@/context/theme-context";
import { BsMoon, BsSun } from "react-icons/bs";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { theme, toggleTheme } = useTheme();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <header className="z-[999] relative">
      {/* Navbar background pill */}
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white/10 bg-white/70 shadow-lg shadow-black/[0.03] backdrop-blur-[20px] sm:top-6 sm:h-[3.25rem] sm:w-[48rem] sm:rounded-full dark:bg-navy-950/70 dark:border-white/[0.06] dark:shadow-[0_4px_30px_rgba(124,58,237,0.06)]"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-violet to-accent-cyan rounded-full origin-left sm:mx-4"
          style={{ scaleX }}
        />
      </motion.div>

      {/* Navigation links */}
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.8rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-0.5 sm:text-[0.85rem]">
          {/* Logo */}
          <motion.li
            className="hidden sm:flex items-center justify-center mr-3"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              href="#home"
              className="text-gray-950 dark:text-gray-200 font-bold text-base hover:gradient-text transition-all"
              onClick={() => {
                setActiveSection("Home");
                setTimeOfLastClick(Date.now());
              }}
            >
              EA<span className="text-accent-violet">.</span>
            </Link>
            <div className="h-4 w-[1px] bg-gray-300 dark:bg-gray-700 ml-3"></div>
          </motion.li>

          {links.map((link) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-2.5 py-3 hover:text-gray-950 transition-all duration-300 dark:text-gray-400 dark:hover:text-gray-100 whitespace-nowrap sm:px-3",
                  {
                    "text-gray-950 dark:text-gray-50 font-semibold":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}

                {link.name === activeSection && (
                  <motion.span
                    className="bg-violet-100/60 rounded-full absolute inset-0 -z-10 dark:bg-violet-900/20"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}

          {/* Theme toggle */}
          <motion.li
            className="h-3/4 flex items-center justify-center"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <div className="hidden sm:block h-4 w-[1px] bg-gray-300 dark:bg-gray-700 mx-2"></div>
            <button
              className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100/80 dark:hover:bg-white/10 transition-all duration-300 ml-1 hover:scale-110 active:scale-95"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? (
                <BsSun className="text-accent-violet text-sm" />
              ) : (
                <BsMoon className="text-accent-cyan text-sm" />
              )}
            </button>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
