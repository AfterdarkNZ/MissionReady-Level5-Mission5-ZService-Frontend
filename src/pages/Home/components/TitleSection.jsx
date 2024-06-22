import styles from "../Home.module.css";

export default function TitleSection() {
  return (
    <div className={styles.titleSection}>
      <h1 className={styles.title}>
        Z is for <br /> New Zealand
      </h1>
      <h2 className={styles.subTitle}>
        We're here to keep our <br /> communities and whanau <br /> moving
      </h2>
    </div>
  );
}
