import styles from "../FindStation.module.css";
import { MapPin, GasPump, Coffee, DotsThree } from "@phosphor-icons/react";

import { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

export default function LocationInput() {
  const [address, setAddress] = useState("");

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };
  return (
    <div>
      <form className={styles.findStationForm}>
        <div className={styles.location}>
          <div className={styles.locationIcon}>
            <MapPin size={32} color="#ed560e" weight="fill" />
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
                <div>
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
