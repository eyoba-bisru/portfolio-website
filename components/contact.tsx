"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaTelegram, FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:eabebe91@gmail.com",
    icon: HiOutlineMail,
    description: "eabebe91@gmail.com",
    external: true,
    gradient: "from-rose-500 to-orange-500",
    shadowColor: "shadow-rose-500/20",
  },
  {
    label: "Phone",
    href: "tel:+251964643164",
    icon: FaPhone,
    description: "+251 964 643 164",
    external: false,
    gradient: "from-emerald-500 to-teal-500",
    shadowColor: "shadow-emerald-500/20",
  },
  {
    label: "Telegram",
    href: "https://t.me/eyoba_bisru",
    icon: FaTelegram,
    description: "@eyoba_bisru",
    external: true,
    gradient: "from-blue-500 to-sky-500",
    shadowColor: "shadow-blue-500/20",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/eyob-abebe-8327b71a1/",
    icon: BsLinkedin,
    description: "Connect with me",
    external: true,
    gradient: "from-blue-600 to-blue-700",
    shadowColor: "shadow-blue-600/20",
  },
  {
    label: "GitHub",
    href: "https://github.com/eyoba-bisru",
    icon: FaGithubSquare,
    description: "eyoba-bisru",
    external: true,
    gradient: "from-gray-700 to-gray-900",
    shadowColor: "shadow-gray-700/20",
  },
];

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,42rem)] text-center scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <SectionHeading subtitle="I'd love to hear from you">
        Let&apos;s connect
      </SectionHeading>

      <div className="glass rounded-2xl p-6 sm:p-8">
        <p className="text-gray-500 dark:text-gray-400 mb-6 text-sm">
          Reach out through any of the channels below — I usually respond within 24 hours.
        </p>

        <div className="flex flex-col gap-3">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.label}
              className="group flex items-center gap-4 glass rounded-xl px-5 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-100 text-left"
              href={contact.href}
              target={contact.external ? "_blank" : undefined}
              rel={contact.external ? "noopener noreferrer" : undefined}
              aria-label={contact.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * index }}
            >
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${contact.gradient} text-white shadow-lg ${contact.shadowColor} group-hover:shadow-xl transition-shadow flex-shrink-0`}
              >
                <contact.icon className="text-lg" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-800 dark:text-white/90 group-hover:gradient-text transition-all">
                  {contact.label}
                </span>
                <span className="text-xs text-gray-500 dark:text-white/50">
                  {contact.description}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
