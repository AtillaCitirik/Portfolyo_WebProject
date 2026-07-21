export interface NavItem {
  id: string;
  label: string;
}

export interface SocialLinks {
  github: string;
  linkedin: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  social: SocialLinks;
  nav: NavItem[];
}
