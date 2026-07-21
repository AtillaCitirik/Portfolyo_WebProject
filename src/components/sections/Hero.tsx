import styles from "./Hero.module.css";
import { siteConfig } from "../../data/siteConfig";
import { LinkButton } from "../ui/LinkButton";
import { GitHubIcon, LinkedInIcon, MapPinIcon } from "../ui/icons";

export function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.container}>
        <p className={styles.greeting}>Merhaba, ben</p>
        <h1 className={styles.name}>{siteConfig.name}</h1>
        <p className={styles.role}>{siteConfig.title}</p>
        <p className={styles.tagline}>{siteConfig.tagline}</p>
        <p className={styles.location}>
          <MapPinIcon size={16} />
          {siteConfig.location}
        </p>

        <div className={styles.actions}>
          <LinkButton href="#projects">Projelerim</LinkButton>
          <LinkButton href="#contact" variant="ghost">
            İletişime Geç
          </LinkButton>
        </div>

        <div className={styles.social}>
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profilim"
          >
            <GitHubIcon size={22} />
          </a>
          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profilim"
          >
            <LinkedInIcon size={22} />
          </a>
        </div>
      </div>
    </section>
  );
}
