import { MapContainer, Marker, Popup } from "react-leaflet";
export default function Maps() {
  const position = { lat: 32.3547, lng: 89.3985 };
  return <MapContainer center={position}></MapContainer>;
}
