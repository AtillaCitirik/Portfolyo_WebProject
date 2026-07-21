import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id: string;
  overline: string;
  title: string;
  children: ReactNode;
}

/** Tüm sayfa bölümleri için ortak sarmalayıcı: başlık + içerik düzeni. */
export function Section({ id, overline, title, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <span className={styles.overline}>{overline}</span>
          <h2 className={styles.title}>{title}</h2>
        </header>
        {children}
      </div>
    </section>
  );
}
