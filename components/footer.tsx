import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaTelegram } from "react-icons/fa";
import { HiHeart } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      {/* Gradient divider */}
      <div className="mx-auto mb-8 h-px w-60 bg-gradient-to-r from-transparent via-accent-violet/30 to-transparent dark:via-accent-cyan/30"></div>

      {/* Social icons */}
      <div className="flex justify-center gap-3 mb-5">
        {[
          { href: "https://www.linkedin.com/in/eyob-abebe-8327b71a1/", icon: BsLinkedin, label: "LinkedIn", size: 17 },
          { href: "https://github.com/eyoba-bisru", icon: FaGithubSquare, label: "GitHub", size: 19 },
          { href: "https://t.me/eyoba_bisru", icon: FaTelegram, label: "Telegram", size: 17 },
        ].map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full glass gradient-border text-gray-400 hover:text-accent-violet dark:hover:text-accent-cyan transition-all duration-300 hover:scale-110"
            aria-label={social.label}
          >
            <social.icon size={social.size} />
          </a>
        ))}
      </div>

      <small className="mb-2 block text-xs text-gray-400 dark:text-gray-500">
        &copy; {new Date().getFullYear()} Eyob Abebe. All rights reserved.
      </small>
      <p className="text-xs text-gray-400 dark:text-gray-600 flex items-center justify-center gap-1">
        Built with{" "}
        <HiHeart className="text-red-400 inline-block text-sm" />{" "}
        using{" "}
        <span className="font-medium gradient-text">Next.js</span> &amp;{" "}
        <span className="font-medium gradient-text">Tailwind CSS</span>
      </p>
    </footer>
  );
}
