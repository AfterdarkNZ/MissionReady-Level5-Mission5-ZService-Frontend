import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src="\images\z-logo.png" alt="z logo" className={styles.logo} />
      <ul className={styles.navBar}>
        <li className={styles.navLink}>Products and services</li>
        <li className={styles.navLink}>For business</li>
        <li className={styles.navLink}>Sustainability</li>
        <li className={styles.navLink}>About Z</li>
        <li className={styles.navLink}>Find a Z Gas Station</li>
        <li className={styles.navLink}>
          <input type="text" defaultValue="search" />
        </li>
      </ul>
    </div>
  );
}
