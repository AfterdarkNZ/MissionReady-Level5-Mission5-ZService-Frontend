import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import styles from "./StationMap.module.css";
import { useState, useEffect } from "react";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import PropTypes from "prop-types";
import { MapPin } from "@phosphor-icons/react";

export default function StationMap({ fuelType }) {
  const [position, setPosition] = useState({ lat: -36.89, lng: 174.7645 });
  // const [fuelType, setFuelType] = useState();
  const [locations, setLocations] = useState([]);

  // Fetch request to get all petrol stations
  useEffect(() => {
    const fetchStations = async () => {
      const response = await fetch("http://localhost:5000/api/stations");
      const data = await response.json();
      setLocations(data);
    };
    fetchStations();
  }, []);

  const apiKey = import.meta.env.VITE_MAP_API_KEY;
  const mapID = import.meta.env.VITE_MAP_ID;

  return (
    <div className={styles.mapContainer}>
      <APIProvider
        apiKey={apiKey}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <Map
          defaultCenter={position}
          // center={position}
          defaultZoom={13}
          className={styles.provider}
          mapId={mapID}
          disableDefaultUI={true}
          zoomControl={true}
        >
          {locations.map((poi) => (
            <AdvancedMarker
              key={poi.key}
              position={poi.location}
              clickable={true}
              onClick={() => {
                // console.log(poi.name);
                props.setPosition(poi.location);
              }}
            >
              <div className={styles.pinInfo}>
                <div className={styles.fuelInfo}>
                  <p className={`${styles.fuelType} ${styles[fuelType]}`}>
                    {fuelType === "95" && "ZX 95"}
                    {fuelType === "91" && "Z 91"}
                    {fuelType === "diesel" && "Z Diesel"}
                  </p>

                  <p className={styles.fuelCost}>
                    {poi.fuelPrices[fuelType] !== null || undefined ? (
                      `$${poi.fuelPrices[fuelType].toFixed(2)} L`
                    ) : (
                      <span className={styles.priceNotAvailable}>
                        Not available
                      </span>
                    )}
                  </p>
                </div>
                <MapPin size={32} color="#ed560e" /> {/* Use MapPin icon */}
              </div>
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}

// Add propTypes and defaultProps
StationMap.propTypes = {
  fuelType: PropTypes.string.isRequired,
};

StationMap.defaultProps = {
  fuelType: "91", // Default fuel type if not provided
};
