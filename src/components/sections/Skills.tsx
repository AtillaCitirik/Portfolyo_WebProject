import styles from "./Skills.module.css";
import { skillCategories } from "../../data/skills";
import { Section } from "../ui/Section";
import { Tag } from "../ui/Tag";

export function Skills() {
  return (
    <Section id="skills" overline="Teknolojiler" title="Yetenekler">
      <div className={styles.grid}>
        {skillCategories.map((category) => (
          <article key={category.id} className={styles.category}>
            <h3 className={styles.title}>{category.title}</h3>
            <div className={styles.tags}>
              {category.skills.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
