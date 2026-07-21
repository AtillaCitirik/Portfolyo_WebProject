import type { SiteConfig } from "../types/site";

export const siteConfig: SiteConfig = {
  name: "Atilla Çıtırık",
  title: "Software Developer",
  tagline:
    "Backend ve veritabanı odaklı yazılım geliştiricisiyim. Fintech, sadakat sistemleri ve mobil uygulamalar üzerinde yaklaşık 3 yıllık profesyonel deneyimim var.",
  location: "İstanbul, Türkiye",
  email: "atillactrk@gmail.com",
  phone: "+90 539 480 08 24",
  social: {
    github: "https://github.com/AtillaCitirik",
    linkedin: "https://www.linkedin.com/in/atillacitirik/",
  },
  nav: [
    { id: "about", label: "Hakkımda" },
    { id: "experience", label: "Deneyim" },
    { id: "projects", label: "Projeler" },
    { id: "skills", label: "Yetenekler" },
    { id: "education", label: "Eğitim" },
    { id: "contact", label: "İletişim" },
  ],
};
