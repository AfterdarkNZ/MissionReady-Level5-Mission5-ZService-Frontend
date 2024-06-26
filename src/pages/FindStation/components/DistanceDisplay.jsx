import { useEffect, useState } from "react";
import styles from "../FindStation.module.css";
import CardStation from "./CardStation";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

export default function DistanceDisplay({
  fuelType,
  setFuelType,
  stations,
  setStations,
}) {
  const [showStationCards, setShowStationCards] = useState(false);
  return (
    <div
      className={`${styles.distanceContainer} ${
        !showStationCards ? styles.minimiseContainer : ""
      } `}
    >
      <div className={styles.distanceDisplayTitleBanner}>
        <button
          class={styles.showStationCardsBtn}
          onClick={() => setShowStationCards(!showStationCards)}
        >
          {showStationCards ? <CaretDown size={32} /> : <CaretUp size={32} />}
        </button>
        <div className={styles.titleContainer}>
          <h3 className={styles.distanceDisplayTitle}>Within 20km</h3>
          <div className={styles.distanceDisplayBtnDiv}>
            <button className={styles.distanceDisplayBtn}>Nearest</button>
            <button className={styles.distanceDisplayBtn}>Cheapest</button>
          </div>
        </div>
      </div>
      <div className={styles.distanceDisplay}>
        {stations.map((station, index) => {
          return (
            <div key={index}>
              <CardStation station={station} fuelType={fuelType} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
