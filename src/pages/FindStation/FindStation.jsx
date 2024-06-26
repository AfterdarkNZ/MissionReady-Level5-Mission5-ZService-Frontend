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
