import styles from "./Tag.module.css";

interface TagProps {
  label: string;
}

/** Teknoloji/yetenek rozeti. */
export function Tag({ label }: TagProps) {
  return <span className={styles.tag}>{label}</span>;
}
