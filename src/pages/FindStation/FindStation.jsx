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
          <form className={styles.findStationForm} style={{ display: "none" }}>
            <div className={styles.location}>
              <div className={styles.locationIcon}>
                <MapPin size={32} color="#ed560e" weight="fill" />
              </div>
              <input
                className={styles.locationInput}
                type="text"
                placeholder="Search Location"
              />
            </div>
            <div className={styles.filters}>
              <button className={styles.filterBtn}>
                <GasPump size={18} />
                <span className={styles.premium}>ZX95 Premium</span>
              </button>
              <button className={styles.filterBtn}>
                <GasPump size={18} />
                <span className={styles.unleaded}>Z91 Unleaded</span>
              </button>
              <button className={styles.filterBtn}>
                <Coffee size={18} />
                <span className={styles.filterText}>Coffee</span>
              </button>
              <button className={styles.filterBtn}>
                <DotsThree size={18} />
              </button>
            </div>
          </form>
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
