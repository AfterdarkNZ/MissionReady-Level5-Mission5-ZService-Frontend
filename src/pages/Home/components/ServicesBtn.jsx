import styles from "../Home.module.css";
import { ArrowRight } from "@phosphor-icons/react";

export default function ServicesBtn(props) {
  return (
    <div className={styles.right}>
      <button className={styles.serviceBtn}>
        {props.children}
        {props.text}
        <div className={styles.arrowDivBlue}>
          <ArrowRight
            size={24}
            color="white"
            weight="bold"
            className={styles.arrowIcon}
          />
        </div>
      </button>
    </div>
  );
}
