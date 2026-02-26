import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare, FaTelegram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      {/* Gradient divider */}
      <div className="mx-auto mb-8 h-px w-40 bg-gradient-to-r from-transparent via-accent-violet/40 to-transparent dark:via-accent-cyan/40"></div>

      {/* Social icons */}
      <div className="flex justify-center gap-4 mb-4">
        <a
          href="https://www.linkedin.com/in/eyob-abebe-8327b71a1/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-accent-violet dark:hover:text-accent-cyan transition-colors"
          aria-label="LinkedIn"
        >
          <BsLinkedin size={18} />
        </a>
        <a
          href="https://github.com/eyoba-bisru"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-accent-violet dark:hover:text-accent-cyan transition-colors"
          aria-label="GitHub"
        >
          <FaGithubSquare size={20} />
        </a>
        <a
          href="https://t.me/eyoba_bisru"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-accent-violet dark:hover:text-accent-cyan transition-colors"
          aria-label="Telegram"
        >
          <FaTelegram size={18} />
        </a>
      </div>

      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} Eyob Abebe. All rights reserved.
      </small>
      <p className="text-xs text-gray-400 dark:text-gray-600">
        Built with{" "}
        <span className="font-medium gradient-text">Next.js</span> &{" "}
        <span className="font-medium gradient-text">Tailwind CSS</span>
      </p>
    </footer>
  );
}
