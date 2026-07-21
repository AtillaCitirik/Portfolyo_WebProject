import type { ReactNode } from "react";
import styles from "./LinkButton.module.css";

interface LinkButtonProps {
  href: string;
  variant?: "primary" | "ghost";
  external?: boolean;
  children: ReactNode;
}

/** Bağlantı olarak çalışan buton (sayfa içi anchor veya dış link). */
export function LinkButton({
  href,
  variant = "primary",
  external = false,
  children,
}: LinkButtonProps) {
  return (
    <a
      className={`${styles.button} ${variant === "ghost" ? styles.ghost : styles.primary}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
