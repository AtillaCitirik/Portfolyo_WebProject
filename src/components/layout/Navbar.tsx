import { useState } from "react";
import styles from "./Navbar.module.css";
import { siteConfig } from "../../data/siteConfig";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.navbar}>
      <nav className={styles.inner} aria-label="Ana menü">
        <a className={styles.logo} href="#hero" onClick={closeMenu}>
          Atilla<span className={styles.logoDot}>.</span>
        </a>

        <button
          className={styles.toggle}
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={styles.toggleBar} />
          <span className={styles.toggleBar} />
          <span className={styles.toggleBar} />
        </button>

        <ul className={`${styles.links} ${open ? styles.open : ""}`}>
          {siteConfig.nav.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} onClick={closeMenu}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
