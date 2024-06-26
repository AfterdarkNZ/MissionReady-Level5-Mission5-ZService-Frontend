import { useEffect, useState } from "react";
import styles from "../FindStation.module.css";
// Import images
import {
  MoneyWavy,
  Drop,
  Coffee,
  PintGlass,
  ChargingStation,
  ForkKnife,
  GasPump,
  HandCoins,
  Cookie,
  ToiletPaper,
  TruckTrailer,
  WifiHigh,
  Clock,
} from "@phosphor-icons/react";

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
      <div className={styles.openFuelDiv}>
        <div className={styles.openDiv}>
          <p className={styles.opening}>
            <Clock /> Open now
          </p>
          <p className={styles.phone}>+{station.phoneNumber}</p>
        </div>
        <div className={styles.fuelDiv}>
          <div
            className={styles.z95Div}
            style={{
              display: checkDisplay(fuelDisplay[0]),
            }}
          >
            <p className={styles.fuelLabel}>Z 95</p>
            <h3 className={styles.fuelPrice}>${station.fuelPrices["95"]} L</h3>
          </div>
          <div
            className={styles.z91Div}
            style={{ display: checkDisplay(fuelDisplay[1]) }}
          >
            <p className={styles.fuelLabel}>Z 91</p>
            <h3 className={styles.fuelPrice}>${station.fuelPrices["91"]} L</h3>
          </div>
          <div
            className={styles.zDieselDiv}
            style={{ display: checkDisplay(fuelDisplay[2]) }}
          >
            <p className={styles.fuelLabel}>Z D</p>
            <h3
              className={styles.fuelPrice}
            >{`$${station.fuelPrices["diesel"]} L`}</h3>
          </div>
        </div>
      </div>
      <div>
        <h4 className={styles.servicesLabel}>Services</h4>
        <ul className={styles.servicesList}>
          {services.map((service, index) => {
            switch (service) {
              case "fast" || "ultraFast":
                return (
                  <li className={styles.servicesListItem} key={index}>
                    <ChargingStation />
                    EV Charging{" "}
                  </li>
                );
                break;
              case "atm":
                return (
                  <li className={styles.servicesListItem} key={index}>
                    <MoneyWavy />
                    ATM{" "}
                  </li>
                );
                break;
              case "wifi":
                return (
                  <li className={styles.servicesListItem} key={index}>
                    <WifiHigh />
                    Wi-Fi{" "}
                  </li>
                );
                break;
              case "toilet":
                return (
                  <li className={styles.servicesListItem} key={index}>
                    <ToiletPaper />
                    Toilet{" "}
                  </li>
                );
                break;
              case "payAtPump":
                return (
                  <li className={styles.servicesListItem} key={index}>
                    <HandCoins />
                    Pay at Pump{" "}
                  </li>
                );
                break;
              case "trailerHire":
                return (
                  <li className={styles.servicesListItem} key={index}>
                    <TruckTrailer />
                    Trailer Hire{" "}
                  </li>
                );
                break;
              case "carWash":
                return (
                  <li className={styles.servicesListItem} key={index}>
                    <Drop />
                    Car Wash{" "}
                  </li>
                );
                break;
              case "coffee":
                return (
                  <li className={styles.servicesListItem} key={index}>
                    <Coffee />
                    Coffee{" "}
                  </li>
                );
                break;
              case "hotFood":
                return (
                  <li className={styles.servicesListItem} key={index}>
                    <ForkKnife />
                    Hot Food{" "}
                  </li>
                );
                break;
              case "snacks":
                return (
                  <li className={styles.servicesListItem} key={index}>
                    <Cookie />
                    Snacks{" "}
                  </li>
                );
                break;
              case "drinks":
                return (
                  <li className={styles.servicesListItem} key={index}>
                    <PintGlass />
                    Drinks
                  </li>
                );
                break;
            }
          })}
        </ul>
      </div>
    </div>
  );
}
