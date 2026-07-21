export interface Project {
  id: string;
  title: string;
  company: string;
  role: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  liveUrl?: string;
}
