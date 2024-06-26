import styles from "../Home.module.css";
import { ArrowRight } from "@phosphor-icons/react";

export default function InfoSections(props) {
  return (
    <div className={styles.flex} style={{ background: props.background }}>
      <div className={styles.left}>
        <h2 className={styles.sectionTitle}>{props.title}</h2>
        <p className={styles.sectionParagraph}>{props.paragraph}</p>
        <button className={styles.sectionBtn}>
          <p className={styles.btnText}>{props.btnInfo}</p>
          <div className={styles.arrowDiv}>
            <ArrowRight
              size={24}
              color="#ed560e"
              weight="bold"
              className={styles.arrowIcon}
            />
          </div>
        </button>
      </div>
      <div className={styles.right}>{props.children}</div>
    </div>
  );
}
