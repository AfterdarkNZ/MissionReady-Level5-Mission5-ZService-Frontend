import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import StationMap from "../../components/StationMap/StationMap";
import styles from "./FindStation.module.css";
import { MapPin, GasPump, Coffee, DotsThree } from "@phosphor-icons/react";
import DistanceDisplay from "./components/DistanceDisplay";
import LocationInput from "./components/LocationInput";
import { useState, useEffect } from "react";

export default function FindStation() {
  const [address, setAddress] = useState("");
  const [fuelType, setFuelType] = useState("all");
  const [stations, setStations] = useState([]);
  const [locations, setLocations] = useState([]);
  const [position, setPosition] = useState({ lat: -36.89, lng: 174.7645 });

  // Fetch request to get all petrol stations
  useEffect(() => {
    const fetchStations = async () => {
      const response = await fetch("http://localhost:5000/api/stations");
      const data = await response.json();
      setLocations(data);
      setStations(data);
    };
    fetchStations();
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.mapContainer}>
        <StationMap
          fuelType={fuelType}
          locations={locations}
          position={position}
          setPosition={setPosition}
        />
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
