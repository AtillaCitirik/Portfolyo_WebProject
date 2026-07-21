import type { SkillCategory } from "../types/skill";

export const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend & Programlama",
    skills: ["Python", "C#/.NET", "JavaScript", "Swift", "RESTful API"],
  },
  {
    id: "database",
    title: "Veritabanı",
    skills: ["SQL (MSSQL)", "Oracle", "NoSQL"],
  },
  {
    id: "tools",
    title: "Araçlar & Altyapı",
    skills: ["Docker", "Git", "Postman", "SEQ", "Windows Server"],
  },
  {
    id: "languages",
    title: "Diller",
    skills: ["Türkçe (Ana dil)", "İngilizce (Pre-Intermediate)"],
  },
];
