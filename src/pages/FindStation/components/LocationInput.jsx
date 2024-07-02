import styles from "../FindStation.module.css";
import { MapPin, GasPump, Coffee, DotsThree } from "@phosphor-icons/react";

import PlacesAutocomplete, {
  geocodeByAddress,
} from "react-places-autocomplete";
import { setDefaults, fromLatLng } from "react-geocode";
import { useEffect, useState } from "react";

setDefaults({
  // Put your Google Maps API key here:
  key: import.meta.env.VITE_MAP_API_KEY,
});

export default function LocationInput({
  address,
  setAddress,
  setFuelType,
  setStations,
}) {
  const [getStation, setGetStation] = useState(false);
  const getStations = (userAddress) => {
    if (address) {
      fetch(`http://localhost:5000/api/distance-calc`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: userAddress,
        }),
      })
        .then((response) => response.json())
        .then((result) => {
          const resultStations = result.result;
          const finalOrder = resultStations.toSorted((a, b) => {
            return a.distance - b.distance;
          });
          setStations(finalOrder);
          setFuelType(result.fuelType);
        });
    }
  };

  const useCurrentLocation = async () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      return;
    }

    try {
      // 1. Request current position from device
      const position = await new Promise((resolve, reject) =>
        navigator.geolocation.getCurrentPosition(resolve, reject)
      );
      const { latitude, longitude } = position.coords;

      // 2. Query the reverse geocoding API
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

  return (
    <div>
      <form className={styles.findStationForm}>
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
  );
}
