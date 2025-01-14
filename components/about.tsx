"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello, I'm Eyob Abebe, a passionate Full-stack Developer based in Addis
        Ababa, Ethiopia. I specialize in both front-end and back-end
        development, using technologies such as React.js, Next.js, Tailwind CSS,
        Django, DRF, Express.js, and Go to build dynamic and efficient web
        applications. Currently, I am an Application Developer at Amhara Bank,
        where I have had the opportunity to contribute to the development,
        maintenance, and optimization of banking systems. My experience has
        provided me with a solid understanding of the complexities involved in
        building and managing large-scale applications. I hold a Bachelor's
        degree in Software Engineering from Bahir Dar University, where I
        graduated with a GPA of 3.93. I am a fast learner, detail-oriented, and
        thrive in team-oriented environments where collaboration is key. I’m
        passionate about continuously improving my skills and staying up-to-date
        with the latest industry trends and technologies. I am eager to apply my
        knowledge and passion for development to make a meaningful impact in the
        tech world.
        <br />
        <br />
        Feel free to connect with me or reach out for any opportunities or
        collaborations!
      </p>
    </motion.section>
  );
}
