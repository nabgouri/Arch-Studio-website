import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
export default function Maps() {
  const nashvilleAddress = [36.2067, -86.6169];
  const fortWorthAddress = [32.7065, -97.2233];
  const centerLat = (nashvilleAddress[0] + fortWorthAddress[0]) / 2;
  const centerLng = (nashvilleAddress[1] + fortWorthAddress[1]) / 2;
  const centerPosition = [centerLat, centerLng];

  return (
    <section className="mb-20 px-8 md:px-[6.0625rem] xl:px-[10.25rem]">
      <MapContainer
        center={centerPosition}
        zoom={6}
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
