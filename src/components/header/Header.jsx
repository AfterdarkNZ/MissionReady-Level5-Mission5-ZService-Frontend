import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header}>
      <img src="\images\z-logo.png" alt="z logo" className={styles.logo} />
      <ul className={styles.navBar}>
        <li className={styles.navLink}>Products and services</li>
        <li className={styles.navLink}>For business</li>
        <li className={styles.navLink}>Sustainability</li>
        <li className={styles.navLink}>About Z</li>
        <Link
          to="/find-station"
          style={{ textDecoration: "none", color: "black" }}
        >
          <li className={styles.navLink}>Find a Z Gas Station</li>
        </Link>
        <li className={styles.navLink}>
          <input type="text" defaultValue="search" />
        </li>
      </ul>
    </div>
  );
}
