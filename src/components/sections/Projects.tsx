import styles from "./Projects.module.css";
import { projects } from "../../data/projects";
import { Section } from "../ui/Section";
import { Tag } from "../ui/Tag";

export function Projects() {
  return (
    <Section id="projects" overline="Portfolyo" title="Projeler">
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.id} className={styles.card}>
            <div className={styles.meta}>
              <span className={styles.company}>{project.company}</span>
              <span className={styles.role}>{project.role}</span>
            </div>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <div className={styles.tags}>
              {project.tech.map((tech) => (
                <Tag key={tech} label={tech} />
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
