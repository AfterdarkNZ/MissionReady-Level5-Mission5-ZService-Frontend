import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function Map() {
  return (
    <APIProvider apiKey={"AIzaSyCJN_1vLLbe5TIVQAZPfJzIWpfyy_EWTHY"}>
      <Map
        style={{ width: "100vw", height: "100vh" }}
        defaultCenter={{ lat: 22.54992, lng: 0 }}
        defaultZoom={3}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    </APIProvider>
  );
}
