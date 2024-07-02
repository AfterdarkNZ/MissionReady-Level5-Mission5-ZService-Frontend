import { useState, useEffect } from "react";
import axios from "axios";
import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import { setDefaults, fromLatLng } from "react-geocode";
import styles from "../FindStation.module.css";
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

setDefaults({
  key: import.meta.env.VITE_MAP_API_KEY,
});

// Maps Icons to individual buttons
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
  mapPin: <MapPin size={18} />,
  gasPump: <GasPump size={18} />,
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

export default function LocationInput({
  address,
  setAddress,
  setFuelType,
  setStations,
}) {
  const [getStation, setGetStation] = useState(false);

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

  const getStations = async (userAddress) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/distance-calc`,
        {
          address: userAddress,
        }
      );
      setStations(response.data.result);
      setFuelType(response.data.fuelType);
    } catch (error) {
      console.error("Error fetching stations:", error);
    }
  };

  const useCurrentLocation = async () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      return;
    }

    try {
      const position = await new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );
      const { latitude, longitude } = position.coords;
      const address = await fromLatLng(latitude, longitude);
      console.log("[useCurrentLocation]", { latitude, longitude, address });

      // 3. Extract address components from Google Maps API response
      const components = address.results[1]?.address_components.reduce(
        (acc, component) => {
          acc[component.types[0]] = component.long_name;
          return acc;
        },
        {}
      );

      setAddress(
        `${[components.street_number, components.route]
          .filter((x) => x)
          .join(" ")} ${
          components.locality || components.administrative_area_level_1 || ""
        } ${components.postal_code || ""} ${components.country || ""}`
      );
      setGetStation(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    setAddress(value);
    setGetStation(true);
  };

  useEffect(() => {
    if (getStation) {
      getStations(address);
    }
  }, [address]);

  // Change the state of the buttons when clicked
  const handleButtonClick = (button) => {
    setClickedButtons((prevState) => ({
      ...prevState,
      [button]: !prevState[button],
    }));
  };

  // Fuel type buttons are radio buttons
  const handleFuelTypeClick = (button, fuel) => {
    setClickedButtons({
      ...clickedButtons,
      premium: false,
      unleaded: false,
      diesel: false,
      [button]: true,
    });
    setFuelType(fuel);
  };

  // Prevent default form submission behaviour - page refresh
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Filter for extra buttons
    const extraFilters = extraButtons.reduce((acc, { name }) => {
      if (clickedButtons[name]) {
        acc[name] = true;
      }
      return acc;
    }, {});

    // Filter for dots button and extra buttons
    const filters = {
      dots: clickedButtons.dots,
      premium: clickedButtons.premium,
      fuelType: clickedButtons.premium
        ? "95"
        : clickedButtons.unleaded
        ? "91"
        : clickedButtons.diesel
        ? "diesel"
        : "",
      extraFilters,
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/api/filterStations",
        filters
      );
      // Process the filtered data as needed
      //console.log(response.data);
      setStations(response.data);
    } catch (error) {
      console.error("Error fetching filtered stations:", error);
    }
  };

  // Clear all selected buttons
  const clearSelections = () => {
    setClickedButtons((prevState) => ({
      ...Object.keys(prevState).reduce((acc, key) => {
        acc[key] = false;
        return acc;
      }, {}),
      dots: true, // Keep the dots menu open after selections are cleared
    }));
  };

  return (
    <div>
      <form className={styles.findStationForm} onSubmit={handleSubmit}>
        <div className={styles.location}>
          <div className={styles.locationIcon}>
            <MapPin
              size={32}
              color="#ed560e"
              weight="fill"
              onClick={useCurrentLocation}
            />
          </div>
          <PlacesAutocomplete
            value={address}
            onChange={setAddress}
            onSelect={handleSelect}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => {
              return (
                <div className={styles.inputContainer}>
                  <input
                    {...getInputProps({ placeholder: "Type address" })}
                    className={styles.locationInput}
                  />
                  <div>{loading ? <div>...loading</div> : null}</div>

                  {suggestions.map((suggestion, index) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#ed560e" : "#fff",
                      position: "relative",
                      fontSize: "1.5rem",
                      padding: "1vh 1vw",
                    };

                    return (
                      <div
                        {...getSuggestionItemProps(suggestion, { style })}
                        key={index}
                      >
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              );
            }}
          </PlacesAutocomplete>
        </div>
        <div className={styles.filters}>
          <h3 className={styles.filterHeading}>Fuel Type</h3>
          <div className={styles.fuelTypeButtons}>
            <button
              type="button"
              className={`${styles.filterBtn} ${
                clickedButtons.premium ? styles.clicked : ""
              }`}
              onClick={() => handleFuelTypeClick("premium", "95")}
            >
              <GasPump size={18} />
              <span className={styles.premium}>ZX Premium</span>
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${
                clickedButtons.unleaded ? styles.clicked : ""
              }`}
              onClick={() => handleFuelTypeClick("unleaded", "91")}
            >
              <GasPump size={18} />
              <span className={styles.unleaded}>Z91 Unleaded</span>
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${
                clickedButtons.diesel ? styles.clicked : ""
              }`}
              onClick={() => handleFuelTypeClick("diesel", "diesel")}
            >
              <GasPump size={18} />
              <span className={styles.diesel}>Z Diesel</span>
            </button>
            <button
              type="button"
              className={`${styles.filterBtn} ${
                clickedButtons.dots ? styles.clicked : ""
              }`}
              onClick={() => handleButtonClick("dots")}
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
  );
}
