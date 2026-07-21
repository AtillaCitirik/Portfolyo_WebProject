import styles from "./Contact.module.css";
import { siteConfig } from "../../data/siteConfig";
import { Section } from "../ui/Section";
import { LinkButton } from "../ui/LinkButton";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon, PhoneIcon } from "../ui/icons";

export function Contact() {
  return (
    <Section id="contact" overline="İletişim" title="Birlikte çalışalım">
      <p className={styles.text}>
        Bir iş fırsatı, proje ya da sadece merhaba demek için bana ulaşabilirsin. En hızlı
        dönüşü e-posta üzerinden yaparım.
      </p>

      <div className={styles.actions}>
        <LinkButton href={`mailto:${siteConfig.email}`}>
          <MailIcon size={18} />
          {siteConfig.email}
        </LinkButton>
      </div>

      <ul className={styles.channels}>
        <li>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}>
            <PhoneIcon size={16} />
            {siteConfig.phone}
          </a>
        </li>
        <li>
          <span className={styles.channel}>
            <MapPinIcon size={16} />
            {siteConfig.location}
          </span>
        </li>
        <li>
          <a href={siteConfig.social.github} target="_blank" rel="noreferrer">
            <GitHubIcon size={16} />
            GitHub
          </a>
        </li>
        <li>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">
            <LinkedInIcon size={16} />
            LinkedIn
          </a>
        </li>
      </ul>
    </Section>
  );
}
