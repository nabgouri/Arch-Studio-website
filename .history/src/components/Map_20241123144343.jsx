import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
export default function Maps() {
  const centerPosition = [32.7503, -89.8743];
  const nashvilleAddress = [36.2067, -86.6169];
  const fortWorthAddress = [32.7065, -97.2233];
  return (
    <section className="px-8 md:px-[6.0625rem] xl:px-[10.25rem]">
      <MapContainer
        center={centerPosition}
        zoom={9}
        style={{ height: "560px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={nashvilleAddress}>
          <Popup>A location marker</Popup>
        </Marker>
        <Marker position={fortWorthAddress}>
          <Popup>A location marker</Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
