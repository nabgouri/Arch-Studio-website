import { MapContainer, Marker, Popup } from "react-leaflet";
export default function Maps() {
  const position = [32.3547, 89.3985];
  return (
    <MapContainer
      center={position}
      zoom={9}
      style={{ height: "560px", width: "100%" }}
    >
      <Marker position={position}>
        <Popup>A location marker</Popup>
      </Marker>
    </MapContainer>
  );
}
