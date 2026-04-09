"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="flex flex-col items-center gap-1.5 my-24 hidden sm:flex"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <motion.div
        className="h-3 w-3 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan shadow-lg shadow-accent-violet/30"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      ></motion.div>
      <div className="h-5 w-0.5 rounded-full bg-gradient-to-b from-accent-violet to-accent-violet/30"></div>
      <div className="h-5 w-0.5 rounded-full bg-gradient-to-b from-accent-violet/30 to-accent-cyan/30"></div>
      <div className="h-5 w-0.5 rounded-full bg-gradient-to-b from-accent-cyan/30 to-accent-cyan"></div>
      <motion.div
        className="h-3 w-3 rounded-full bg-gradient-to-br from-accent-cyan to-accent-violet shadow-lg shadow-accent-cyan/30"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: 1 }}
      ></motion.div>
    </motion.div>
  );
}
