import { MapContainer, Marker, Popup } from "react-leaflet";
export default function Maps() {
  const position = { lat: 32.3547, lng: 89.3985 };
  return (
    <MapContainer>
      <div>
        <Map zoom={9} center={position} />
      </div>
    </MapContainer>
  );
}
