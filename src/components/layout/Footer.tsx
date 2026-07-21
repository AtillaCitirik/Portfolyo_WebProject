import styles from "./Footer.module.css";
import { siteConfig } from "../../data/siteConfig";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <p className={styles.note}>React + TypeScript ile geliştirildi.</p>
      </div>
    </footer>
  );
}
