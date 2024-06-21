import logo from "../../assets/images/z-logo.jpg";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="z logo" className={styles.logo} />
      <ul className={styles.navBar}>
        <li className={styles.navLink}>
          <spam className={styles.underlined}>Prod</spam>ucts and services
        </li>
        <li className={styles.navLink}>
          <spam className={styles.underlined}>For </spam>business
        </li>
        <li className={styles.navLink}>
          <spam className={styles.underlined}>Sust</spam>ainability
        </li>
        <li className={styles.navLink}>
          <spam className={styles.underlined}>Abo</spam>t Z
        </li>
        <li className={styles.navLink}>
          <spam className={styles.underlined}>Find</spam>a Z Gas Station
        </li>
        <li className={styles.navLink}>
          <input type="text" defaultValue="search" />
        </li>
      </ul>
    </div>
  );
}
