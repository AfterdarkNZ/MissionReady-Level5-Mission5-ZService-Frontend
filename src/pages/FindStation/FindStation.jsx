import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
import StationMap from "../../components/StationMap/StationMap";
import styles from "./FindStation.module.css";
import {
  MapPin,
  GasPump,
  Coffee,
  DotsThree,
  ChargingStation,
  MoneyWavy,
  WifiHigh,
  Toilet,
  HandCoins,
  Drop,
  TruckTrailer,
  Cookie,
  PintGlass,
  ForkKnife,
} from "@phosphor-icons/react";
import axios from "axios";

// Maps specific icons to buttons
const iconMapping = {
  ultraFast: <ChargingStation size={18} />,
  fast: <ChargingStation size={18} />,
  atm: <MoneyWavy size={18} />,
  wifi: <WifiHigh size={18} />,
  toilet: <Toilet size={18} />,
  payAtPump: <HandCoins size={18} />,
  trailerHire: <TruckTrailer size={18} />,
  carWash: <Drop size={18} />,
  coffee: <Coffee size={18} />,
  hotFood: <ForkKnife size={18} />,
  snacks: <Cookie size={18} />,
  drinks: <PintGlass size={18} />,
};

// Array of extra buttons when dots button is selected
const extraButtons = [
  { name: "ultraFast", label: "Ultra Fast" },
  { name: "fast", label: "Fast" },
  { name: "atm", label: "ATM" },
  { name: "wifi", label: "WiFi" },
  { name: "toilet", label: "Toilet" },
  { name: "payAtPump", label: "Pay at Pump" },
  { name: "trailerHire", label: "Trailer Hire" },
  { name: "carWash", label: "Car Wash" },
  { name: "coffee", label: "Coffee" },
  { name: "hotFood", label: "Hot Food" },
  { name: "snacks", label: "Snacks" },
  { name: "drinks", label: "Drinks" },
];

export default function FindStation() {
  // Set intial state of buttons to unselected
  const [clickedButtons, setClickedButtons] = useState({
    premium: false,
    unleaded: false,
    diesel: false,
    ultraFast: false,
    fast: false,
    dots: false,
    atm: false,
    wifi: false,
    toilet: false,
    payAtPump: false,
    trailerHire: false,
    carWash: false,
    coffee: false,
    hotFood: false,
    snacks: false,
    drinks: false,
  });

  // Change the state of the buttons when clicked
  const handleButtonClick = (button) => {
    setClickedButtons((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
  };

  // Fuel type buttons are radio buttons
  const handleFuelTypeClick = (button) => {
    setClickedButtons({
      ...clickedButtons,
      premium: false,
      unleaded: false,
      diesel: false,
      [button]: true,
    });
  };

  // Prevent default form submission behaviour - page refresh
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Commented out until ready to work on filters
    const filters = {
      // premium: clickedButtons.premium,
      // unleaded: clickedButtons.unleaded,
      // diesel: clickedButtons.diesel,

      dots: clickedButtons.dots,
      ...extraButtons.reduce((acc, { name }) => {
        acc[name] = clickedButtons[name];
        return acc;
      }, {}),
    };

    try {
      const response = await axios.post("/api/filterStations", filters);
      // Process the filtered data as needed
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching filtered stations:", error);
    }
  };

  const clearSelections = () => {
    setClickedButtons((prevState) => ({
      ...Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {}),
      dots: true, // Keep the dots menu open
    }));
  };

  return (
    <div>
      <Header />
      <div className={styles.mapContainer}>
        <StationMap />
        <div className={styles.formContainer}>
          <div className={styles.findStationTitle}>
            <h2 className={styles.titleText}>Find a Z Station</h2>
          </div>
          <form className={styles.findStationForm} onSubmit={handleSubmit}>
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
              <h3 className={styles.filterHeading}>Fuel Type</h3>
              <div className={styles.fuelTypeButtons}>
                <button
                  type="button"
                  className={`${styles.filterBtn} ${
                    clickedButtons.premium ? styles.clicked : ""
                  }`}
                  onClick={() => {
                    handleFuelTypeClick("premium");
                  }}
                >
                  <GasPump size={18} />
                  <span className={styles.premium}>ZX95 Premium</span>
                </button>
                <button
                  type="button"
                  className={`${styles.filterBtn} ${
                    clickedButtons.unleaded ? styles.clicked : ""
                  }`}
                  onClick={() => {
                    handleFuelTypeClick("unleaded");
                  }}
                >
                  <GasPump size={18} />
                  <span className={styles.unleaded}>Z91 Unleaded</span>
                </button>
                <button
                  type="button"
                  className={`${styles.filterBtn} ${
                    clickedButtons.diesel ? styles.clicked : ""
                  }`}
                  onClick={() => {
                    handleFuelTypeClick("diesel");
                  }}
                >
                  <GasPump size={18} />
                  <span className={styles.diesel}>Z Diesel</span>
                </button>
                <button
                  type="button"
                  className={`${styles.filterBtn} ${
                    clickedButtons.dots ? styles.clicked : ""
                  }`}
                  onClick={() => {
                    handleButtonClick("dots");
                  }}
                >
                  <DotsThree size={18} />
                </button>
              </div>

              {clickedButtons.dots && (
                <div className={styles.extraFilters}>
                  <hr className={styles.divider} />
                  <h3 className={styles.filterHeading}>EV Charging</h3>
                  {extraButtons.slice(0, 2).map(({ name, label }) => (
                    <button
                      key={name}
                      type="button"
                      className={`${styles.filterBtn} ${
                        clickedButtons[name] ? styles.clicked : ""
                      }`}
                      onClick={() => handleButtonClick(name)}
                    >
                      {iconMapping[name]}
                      {label}
                    </button>
                  ))}
                  <hr className={styles.divider} />
                  <h3 className={styles.filterHeading}>Services</h3>
                  {extraButtons.slice(2, 8).map(({ name, label }) => (
                    <button
                      key={name}
                      type="button"
                      className={`${styles.filterBtn} ${
                        clickedButtons[name] ? styles.clicked : ""
                      }`}
                      onClick={() => handleButtonClick(name)}
                    >
                      {iconMapping[name]}
                      {label}
                    </button>
                  ))}
                  <hr className={styles.divider} />
                  <h3 className={styles.filterHeading}>Food and Drink</h3>
                  {extraButtons.slice(8).map(({ name, label }) => (
                    <button
                      key={name}
                      type="button"
                      className={`${styles.filterBtn} ${
                        clickedButtons[name] ? styles.clicked : ""
                      }`}
                      onClick={() => handleButtonClick(name)}
                    >
                      {iconMapping[name]}
                      {label}
                    </button>
                  ))}
                  ;{/* Clear Button and Apply Selected Button */}
                  <div className={styles.actionButtons}>
                    <button
                      type="button"
                      className={`${styles.filterBtn} ${styles.actionBtn}`}
                      onClick={clearSelections}
                    >
                      Clear
                    </button>
                    <button
                      type="submit"
                      className={`${styles.filterBtn} ${styles.actionBtn}`}
                    >
                      Apply Selected
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
