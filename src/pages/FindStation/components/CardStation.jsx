import { useEffect, useState } from "react";
import styles from "../FindStation.module.css";

export default function CardStation({ station, fuelType }) {
  const [fuelDisplay, setFuelDisplay] = useState([true, true, true]);
  const [services, setServices] = useState([]);
  useEffect(() => {
    switch (fuelType) {
      case "all":
        const red = station.fuelsAvailable["95"];
        const green = station.fuelsAvailable["91"];
        const diesel = station.fuelsAvailable["diesel"];
        setFuelDisplay([red, green, diesel]);
        break;
      case "red":
        setFuelDisplay([true, false, false]);
        break;
      case "green":
        setFuelDisplay([false, true, false]);
        break;
      case "black":
        setFuelDisplay([false, false, true]);
        break;
    }
    setServices([...station.evCharging, ...station.facilities]);
  }, []);

  const checkDisplay = (user) => {
    if (user) {
      return "block";
    } else {
      return "none";
    }
  };

  return (
    <div className={styles.stationCard}>
      <h3 className={styles.stationLabel}>{station.name}</h3>
      <h4 className={styles.stationAddress}>{station.displayAddress}</h4>
      <div>
        <div>
          <p className={styles.opening}>Open now</p>
          <p className={styles.phone}>+{station.phoneNumber}</p>
        </div>
        <div>
          <div
            className={styles.z95Div}
            style={{
              display: checkDisplay(fuelDisplay[0]),
            }}
          >
            <p className={styles.fuelLabel}>Z 95</p>
            <h3>${station.fuelPrices["95"]} L</h3>
          </div>
          <div
            className={styles.z91Div}
            style={{ display: checkDisplay(fuelDisplay[1]) }}
          >
            <p className={styles.fuelLabel}>Z 91</p>
            <h3>${station.fuelPrices["91"]} L</h3>
          </div>
          <div
            className={styles.zDieselDiv}
            style={{ display: checkDisplay(fuelDisplay[2]) }}
          >
            <p className={styles.fuelLabel}>Z D</p>
            <h3>{`$${station.fuelPrices["diesel"]} L`}</h3>
          </div>
        </div>
      </div>
      <div>
        <h4 className={styles.servicesLabel}>Services</h4>
        <p className={styles.servicesList}>
          {services.map((service) => {
            return service;
          })}
        </p>
      </div>
    </div>
  );
}
