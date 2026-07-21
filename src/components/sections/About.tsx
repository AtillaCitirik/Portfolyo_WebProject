import styles from "./About.module.css";
import { about } from "../../data/about";
import { Section } from "../ui/Section";

export function About() {
  return (
    <Section id="about" overline="Tanışalım" title="Hakkımda">
      <div className={styles.paragraphs}>
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>

      <div className={styles.highlights}>
        {about.highlights.map((highlight) => (
          <article key={highlight.id} className={styles.card}>
            <h3 className={styles.cardTitle}>{highlight.title}</h3>
            <p className={styles.cardText}>{highlight.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
