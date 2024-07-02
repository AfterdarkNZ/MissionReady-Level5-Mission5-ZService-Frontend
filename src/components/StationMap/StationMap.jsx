import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import styles from "./StationMap.module.css";

export default function StationMap(props) {
  const position = props.position;
  const fuelType = props.fuelType;
  const locations = props.locations;
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
                {!fuelType || fuelType === "all" ? (
                  ""
                ) : (
                  <div className={styles.fuelInfo}>
                    <p className={styles.fuelType}>ZX{fuelType}</p>
                    <p className={styles.fuelCost}>
                      ${poi.fuelPrices[fuelType].toFixed(2)} L
                    </p>
                  </div>
                )}

                <img
                  src="/src/assets/images/default.svg"
                  alt="Map pin"
                  className={styles.mapPin}
                />
              </div>
            </AdvancedMarker>
          ))}
        </Map>
      </APIProvider>
    </div>
  );
}
