import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
export default function Maps() {
  const position = [32.3547, 89.3985];
  return (
    <MapContainer
      center={position}
      zoom={9}
      style={{ height: "560px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>A location marker</Popup>
      </Marker>
    </MapContainer>
  );
}
