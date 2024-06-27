import { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import styles from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [hamburgOpen, setHamburgOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const toggleHamburger = () => setHamburgOpen(!hamburgOpen);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.header}>
      <Link to="/">
        <img src="\images\z-logo.png" alt="z logo" className={styles.logo} />
      </Link>
      <ul
        className={styles.navBar}
        style={{
          display: `${
            width <= 767 ? (hamburgOpen ? "inline" : "none") : "flex"
          }`,
        }}
      >
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
      <div className={styles.hamburgerMenu} onClick={toggleHamburger}>
        <Hamburger />
      </div>
    </div>
  );
}
