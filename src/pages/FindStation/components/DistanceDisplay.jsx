import { useEffect, useState } from "react";
import styles from "../FindStation.module.css";
import CardStation from "./CardStation";

export default function DistanceDisplay({ fuelType, stations, setStations }) {
  const [order, setOrder] = useState("nearest");

  const orderStations = (btnType) => {
    setOrder(btnType);
    const finalOrder = orderFunc(btnType) ? orderFunc(btnType) : stations;
    setStations(finalOrder);
  };

  const orderFunc = (btnType) => {
    if (btnType === "nearest") {
      const order = stations.toSorted((a, b) => {
        return a.distance - b.distance;
      });
      return order;
    } else if (btnType === "cheapest" && fuelType !== "all") {
      const order = stations.toSorted((a, b) => {
        return a.fuelPrices[fuelType] - b.fuelPrices[fuelType];
      });
      return order;
    }
  };
  return (
    <div>
      <div className={styles.distanceDisplayTitleBanner}>
        <h3 className={styles.distanceDisplayTitle}>Within 20km</h3>
        <div className={styles.distanceDisplayBtnDiv}>
          <button
            className={styles.distanceDisplayBtn}
            onClick={() => orderStations("nearest")}
            style={{
              textDecoration: order === "nearest" ? "underline" : "none",
            }}
          >
            Nearest
          </button>
          <button
            className={styles.distanceDisplayBtn}
            onClick={() => orderStations("cheapest")}
            style={{
              textDecoration: order === "cheapest" ? "underline" : "none",
            }}
            disabled={fuelType === "all" ? true : false}
          >
            Cheapest
          </button>
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
