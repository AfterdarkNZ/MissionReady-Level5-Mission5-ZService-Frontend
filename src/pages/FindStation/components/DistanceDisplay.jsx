import { useEffect } from "react";
import styles from "../FindStation.module.css";

export default function DistanceDisplay() {
  useEffect();

  return (
    <div>
      <div className={styles.distanceDisplayTitleBanner}>
        <h3 className={styles.distanceDisplayTitle}>Within 20km</h3>
        <div className={styles.distanceDisplayBtnDiv}>
          <button className={styles.distanceDisplayBtn}>Nearest</button>
          <button className={styles.distanceDisplayBtn}>Cheapest</button>
        </div>
      </div>
      <div className={styles.distanceDisplay}>STUFF</div>
    </div>
  );
}
