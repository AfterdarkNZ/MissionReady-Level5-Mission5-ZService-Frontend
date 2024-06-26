import { useEffect, useState } from "react";
import styles from "../FindStation.module.css";
import CardStation from "./CardStation";

export default function DistanceDisplay({
  fuelType,
  setFuelType,
  stations,
  setStations,
}) {
  useEffect(() => {
    // fetch(`http://localhost:5000/api/distance-calc`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     address: "70 Baverstock Road, Flat Bush, Auckland 2016, New Zealand",
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     setStations(result.result);
    //     setFuelType(result.fuelType);
    //   });
  }, []);
  return (
    <div>
      <div className={styles.distanceDisplayTitleBanner}>
        <h3 className={styles.distanceDisplayTitle}>Within 20km</h3>
        <div className={styles.distanceDisplayBtnDiv}>
          <button className={styles.distanceDisplayBtn}>Nearest</button>
          <button className={styles.distanceDisplayBtn}>Cheapest</button>
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
