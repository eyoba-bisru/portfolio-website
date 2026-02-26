"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaTelegram, FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <div className="glass rounded-2xl p-8 hover-glow transition-shadow">
        <p className="text-gray-600 dark:text-white/70 mb-2">
          I'd love to hear from you! Reach out through any of the channels
          below.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            className="group flex items-center gap-3 glass rounded-xl px-5 py-3 hover-glow transition-all hover:scale-105 active:scale-100"
            href="mailto:eabebe91@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send Email"
          >
            <HiOutlineMail className="text-xl text-accent-violet dark:text-accent-cyan" />
            <span className="text-sm font-medium text-gray-700 dark:text-white/80">
              Email
            </span>
          </a>

          <a
            className="group flex items-center gap-3 glass rounded-xl px-5 py-3 hover-glow transition-all hover:scale-105 active:scale-100"
            href="tel:+251964643164"
            aria-label="Phone"
          >
            <FaPhone className="text-lg text-accent-violet dark:text-accent-cyan" />
            <span className="text-sm font-medium text-gray-700 dark:text-white/80">
              Phone
            </span>
          </a>

          <a
            className="group flex items-center gap-3 glass rounded-xl px-5 py-3 hover-glow transition-all hover:scale-105 active:scale-100"
            href="https://t.me/eyoba_bisru"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
          >
            <FaTelegram className="text-xl text-accent-violet dark:text-accent-cyan" />
            <span className="text-sm font-medium text-gray-700 dark:text-white/80">
              Telegram
            </span>
          </a>

          <a
            className="group flex items-center gap-3 glass rounded-xl px-5 py-3 hover-glow transition-all hover:scale-105 active:scale-100"
            href="https://www.linkedin.com/in/eyob-abebe-8327b71a1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BsLinkedin className="text-xl text-accent-violet dark:text-accent-cyan" />
            <span className="text-sm font-medium text-gray-700 dark:text-white/80">
              LinkedIn
            </span>
          </a>

          <a
            className="group flex items-center gap-3 glass rounded-xl px-5 py-3 hover-glow transition-all hover:scale-105 active:scale-100"
            href="https://github.com/eyoba-bisru"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithubSquare className="text-xl text-accent-violet dark:text-accent-cyan" />
            <span className="text-sm font-medium text-gray-700 dark:text-white/80">
              GitHub
            </span>
          </a>
        </div>
      </div>
    </motion.section>
  );
}
