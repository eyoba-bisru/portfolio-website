import chattingAppImg from "@/public/chatting_app.png";
import publicNewsApp from "@/public/public_new_app.png";
import linkedinClone from "@/public/linkedin_clone.png";
import Pneumonia from "@/public/pneumonia.png";
import FaydaImg from "@/public/fayda.png";
import habeshaChinetImg from "@/public/habesha_chinet.png";
import type { SkillCategory, ProjectCategory } from "./types";

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
      "Graduated with a Bachelor's degree in Software Engineering from Bahir Dar University with a CGPA of 3.93.",
    type: "education" as const,
    date: "Oct. 2018 - Jul. 2023",
  },
  {
    title: "Internship",
    location: "Gondar, Ethiopia",
    description:
      "Worked as an intern at Gondar University, gaining hands-on experience with web development fundamentals and collaborative software projects.",
    type: "work" as const,
    date: "Jun. 2022 - Sep. 2022",
  },
  {
    title: "IT Officer I",
    location: "Amhara Bank S.C. — Addis Ababa, Ethiopia",
    description:
      "Developed ABa RTGS limit system for limiting RTGS transactions. Built an automated ATM working amount checker with automated notifications. Collaborated with a team of 5 developers on major projects. Managed SQL queries and database operations. Authored technical and functional specifications for T24 solutions.",
    type: "work" as const,
    date: "Nov. 2023 - Dec. 2024",
  },
  {
    title: "Junior Core Banking Officer",
    location: "Amhara Bank S.C. — Addis Ababa, Ethiopia",
    description:
      "Developing local routines and integrations using TAFJ, InfoBasic, and Java. Designing custom configurations for the Temenos Transact (T24) platform. Building bespoke applications to align core banking systems with institutional needs.",
    type: "work" as const,
    date: "Jan. 2025 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Fayda Integration for Amhara Bank",
    description:
      "Integration system for linking all Amhara Bank accounts to the Fayda National ID.",
    tags: ["React.js", "Express.js", "Docker Compose", "MongoDB", "Java"],
    imageUrl: FaydaImg,
    link: "http://fayda.amharabank.com.et/",
    category: "fullstack" as ProjectCategory,
  },
  {
    title: "Habesha Chinet (Web & Mobile Apps)",
    description:
      "Ethiopia's premier freight platform. I built the complete ecosystem including the web landing page and the dedicated mobile applications for both Customers and Drivers.",
    tags: ["React.js", "Flutter", "TypeScript", "Tailwind CSS", "Mobile Apps"],
    imageUrl: habeshaChinetImg,
    link: "https://habeshachinet.com/",
    category: "fullstack" as ProjectCategory,
  },
  {
    title: "Pneumonia Prediction App",
    description:
      "A mobile app that analyzes chest X-rays using a CNN model to identify patterns indicative of pneumonia.",
    tags: ["Flutter", "TensorFlow", "TFLite", "CNN"],
    imageUrl: Pneumonia,
    link: "https://github.com/eyoba-bisru/pneumonia_prediction_app",
    category: "mobile" as ProjectCategory,
  },
  {
    title: "URL Shortener",
    description:
      "A URL shortener that converts long, complex web addresses into shorter, more manageable links with Redis caching.",
    tags: ["Go", "Gin", "PostgreSQL", "Redis", "GORM", "Docker", "Auth"],
    imageUrl: null,
    link: "https://github.com/eyoba-bisru/url_shortener",
    category: "backend" as ProjectCategory,
  },
  {
    title: "Blogly — Blog Backend",
    description:
      "A full-featured blog backend service built with Go, featuring authentication, GORM ORM, and containerized deployment.",
    tags: ["Go", "Gin", "GORM", "Docker", "PostgreSQL", "Auth"],
    imageUrl: null,
    link: "https://github.com/eyoba-bisru/blogly",
    category: "backend" as ProjectCategory,
  },
  {
    title: "Chatting App",
    description:
      "A real-time chat application with GraphQL subscriptions for seamless communication.",
    tags: ["Next.js", "GraphQL", "Apollo Server", "MongoDB"],
    imageUrl: chattingAppImg,
    link: "http://chatting-app-ui.vercel.app/",
    category: "fullstack" as ProjectCategory,
  },
  {
    title: "Public News App",
    description:
      "A progressive web app for delivering timely and accurate news to the public.",
    tags: ["Next.js", "Express.js", "Prisma", "PostgreSQL", "Tailwind", "PWA"],
    imageUrl: publicNewsApp,
    link: "https://github.com/eyoba-bisru/public-news-frontend",
    category: "fullstack" as ProjectCategory,
  },
  {
    title: "Go Auth",
    description:
      "A reusable authentication service for Go applications built with the Chi framework.",
    tags: ["Go", "Chi", "Auth"],
    imageUrl: null,
    link: "https://github.com/eyoba-bisru/go_auth",
    category: "backend" as ProjectCategory,
  },
  {
    title: "LinkedIn Clone",
    description:
      "A LinkedIn clone with real-time posts and Google OAuth user authentication.",
    tags: ["Next.js", "Tailwind", "Firebase", "Google OAuth"],
    imageUrl: linkedinClone,
    link: "https://github.com/eyoba-bisru/linkedin-clone",
    category: "fullstack" as ProjectCategory,
  },
] as const;

export const skillCategories: SkillCategory[] = [
  {
    name: "Frontend",
    emoji: "🎨",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Flutter"],
  },
  {
    name: "Backend",
    emoji: "⚙️",
    skills: [
      "Go",
      "Gin Framework",
      "Django",
      "Django REST Framework",
      "Node.js",
      "Express.js",
      "Python",
    ],
  },
  {
    name: "Database",
    emoji: "🗄️",
    skills: ["PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    name: "DevOps & Tools",
    emoji: "🚀",
    skills: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "Linux / Ubuntu",
      "RHEL",
    ],
  },
  {
    name: "APIs & Protocols",
    emoji: "🔗",
    skills: ["REST API", "GraphQL"],
  },
];

export const skillsData = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Django",
  "Django REST Framework",
  "Node.js",
  "Express.js",
  "Go",
  "Gin Framework",
  "Flutter",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "Docker Compose",
  "Git",
  "GitHub",
  "REST API",
  "GraphQL",
  "Linux / Ubuntu",
  "RHEL",
  "Prisma",
  "Python",
] as const;
