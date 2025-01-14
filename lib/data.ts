import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import chattingAppImg from "@/public/chatting_app.png";
import publicNewsApp from "@/public/public_new_app.png";
import foodRecipe from "@/public/food_recipe.png";
import linkedinClone from "@/public/linkedin_clone.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Studied Software Engineering",
    location: "Bahir Dar, Ethiopia",
    description:
      "I studied Software Engineering at Bahir Dar University, where I graduated with a GPA of 3.93.",
    icon: React.createElement(LuGraduationCap),
    date: "Oct. 2018 - Jul. 2023",
  },
  {
    title: "Internship",
    location: "Gondar, Ethiopia",
    description:
      "I worked as an intern at Gondar University, where I learned the basics of web development.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun. 2022 - Sep. 2022",
  },
  {
    title: "Application Developer (IT Officer I)",
    location: "Addis Ababa, Ethiopia",
    description:
      "I worked as an Application Developer at Amhara Bank, where I have had the opportunity to contribute to the development, maintenance, and optimization of banking systems.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov. 2023 - Dec. 2024",
  },
  {
    title: "Junior Core Banking Officer",
    location: "Addis Ababa, Ethiopia",
    description:
      "I am currently working as an Junior Core Banking Officer at Amhara Bank, where I have had the opportunity to contribute to the development, maintenance, and optimization of banking systems.",
    icon: React.createElement(CgWorkAlt),
    date: "Jan. 2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Chatting App",
    description:
      "A simple real-time chat application for seamless communication.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Redux Toolkit",
      "Chakra UI",
      "GraphQL",
      "MongoDB",
    ],
    imageUrl: chattingAppImg,
  },
  {
    title: "Public News App",
    description:
      "A simple news app for delivering timely and accurate news to the public",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Chakra UI",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "PWA",
    ],
    imageUrl: publicNewsApp,
  },
  {
    title: "Food recipe",
    description:
      "Explore recipes by cuisine, ingredient, or dietary needs. Save your favorites and create shopping lists for easy meal planning.",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "Redux Toolkit",
      "Material UI",
      "Express.js",
      "MongoDB",
    ],
    imageUrl: foodRecipe,
  },
  {
    title: "LinkedIn Clone",
    description:
      "A LinkedIn clone with a real-time, posts, and user authentication.",
    tags: ["React", "Next.js", "Tailwind", "Firebase", "Google OAuth"],
    imageUrl: linkedinClone,
  },
] as const;

export const skillsData = [
  "React",
  "TypeScript",
  "Next.js",
  "Django",
  "Django REST Framework",
  "Tailwind",
  "Go",
  "Node.js",
  "Express.js",
  "Flutter",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Git",
  "GitHub",
  "Rest API",
  "GraphQL",
  "Apollo",
  "Python",
] as const;
