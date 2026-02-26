"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SectionDivider() {
  return (
    <motion.div
      className="flex flex-col items-center gap-1 my-24 hidden sm:flex"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    >
      <div className="h-4 w-1 rounded-full bg-gradient-to-b from-accent-violet to-accent-violet/50"></div>
      <div className="h-4 w-1 rounded-full bg-gradient-to-b from-accent-violet/50 to-accent-cyan/50"></div>
      <div className="h-4 w-1 rounded-full bg-gradient-to-b from-accent-cyan/50 to-accent-cyan"></div>
    </motion.div>
  );
}
