import { APIProvider, Map, AdvancedMarker } from "@vis.gl/react-google-maps";
import styles from "./StationMap.module.css";

export default function StationMap() {
  const position = { lat: 61.2176, lng: -149.8997 };
  return (
    <APIProvider apiKey={"AIzaSyCJN_1vLLbe5TIVQAZPfJzIWpfyy_EWTHY"}>
      <Map
        defaultCenter={position}
        defaultZoom={10}
        className={styles.provider}
        mapId="af741e2e47b3e12"
      >
        <AdvancedMarker position={position} />
      </Map>
    </APIProvider>
  );
}
