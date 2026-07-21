import styles from "./Education.module.css";
import { education } from "../../data/education";
import { Section } from "../ui/Section";

export function Education() {
  return (
    <Section id="education" overline="Akademik" title="Eğitim">
      <div className={styles.grid}>
        {education.map((item) => (
          <article key={item.id} className={styles.card}>
            <h3 className={styles.degree}>{item.degree}</h3>
            <p className={styles.school}>{item.school}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
