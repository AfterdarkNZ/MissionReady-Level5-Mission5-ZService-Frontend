import styles from "./header.module.css";

export default function Hamburger() {
  return (
    <div className={styles.hamburger}>
      <span className={styles.burger}></span>
      <span className={styles.burger}></span>
      <span className={styles.burger}></span>
    </div>
  );
}
