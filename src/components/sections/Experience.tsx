import styles from "./Experience.module.css";
import { experience } from "../../data/experience";
import { Section } from "../ui/Section";

export function Experience() {
  return (
    <Section id="experience" overline="Kariyer" title="Deneyim">
      <ol className={styles.timeline}>
        {experience.map((item) => (
          <li key={item.id} className={styles.item}>
            <span className={styles.marker} aria-hidden="true" />
            <div className={styles.top}>
              <h3 className={styles.role}>{item.role}</h3>
              <span className={styles.period}>{item.period}</span>
            </div>
            <p className={styles.company}>{item.company}</p>
            <ul className={styles.highlights}>
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
