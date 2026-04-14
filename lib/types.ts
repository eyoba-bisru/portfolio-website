import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectCategory = "all" | "fullstack" | "backend" | "mobile";

export type SkillCategory = {
  name: string;
  emoji: string;
  skills: string[];
};
