"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="flex-col items-center gap-1 my-24 hidden sm:flex"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <motion.div
        className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan shadow-lg shadow-accent-violet/30"
        animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      ></motion.div>
      <div className="h-16 w-[2px] rounded-full bg-gradient-to-b from-accent-violet/40 via-accent-cyan/20 to-transparent"></div>
    </motion.div>
  );
}
