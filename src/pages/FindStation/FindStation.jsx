import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import StationMap from "../../components/StationMap/StationMap";
import styles from "./FindStation.module.css";
import { MapPin } from "@phosphor-icons/react";

export default function FindStation() {
  return (
    <div>
      <Header />
      <div className={styles.mapContainer}>
        <StationMap />
        <div className={styles.formContainer}>
          <div className={styles.findStationTitle}>
            <h2 className={styles.titleText}>Find a Z Station</h2>
          </div>
          <form className={styles.findStationForm}>
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
              <button className={styles.filterBtn}>Premium</button>
              <button className={styles.filterBtn}>Unleaded</button>
              <button className={styles.filterBtn}>Coffee</button>
              <button className={styles.filterBtn}>...</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
