import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import StationMap from "../../components/StationMap/StationMap";
import styles from "./FindStation.module.css";
import { MapPin, GasPump, Coffee, DotsThree } from "@phosphor-icons/react";

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
              <div className={styles.locationIconContainer}>
                <MapPin
                  size={32}
                  color="#ed560e"
                  weight="fill"
                  className={styles.locationIcon}
                />
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
        </div>
      </div>
      <Footer />
    </div>
  );
}
