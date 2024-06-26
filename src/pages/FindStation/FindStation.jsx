import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import StationMap from "../../components/StationMap/StationMap";
import styles from "./FindStation.module.css";
import { MapPin, GasPump, Coffee, DotsThree } from "@phosphor-icons/react";
import DistanceDisplay from "./components/DistanceDisplay";
import LocationInput from "./components/LocationInput";
import { useState } from "react";

export default function FindStation() {
  const [address, setAddress] = useState("");
  const [fuelType, setFuelType] = useState("all");
  const [stations, setStations] = useState([]);
  return (
    <div>
      <Header />
      <div className={styles.mapContainer}>
        <StationMap />
        <div className={styles.formContainer}>
          <div className={styles.findStationTitle}>
            <h2 className={styles.titleText}>Find a Z Station</h2>
          </div>
          <LocationInput
            address={address}
            setAddress={setAddress}
            setFuelType={setFuelType}
            setStations={setStations}
          />
          <DistanceDisplay
            fuelType={fuelType}
            setFuelType={setFuelType}
            stations={stations}
            setStations={setStations}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
