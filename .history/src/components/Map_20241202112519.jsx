import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useState } from "react";
import { motion } from "framer-motion";
export default function Maps() {
  const [isMapInteractive, setIsMapInteractive] = useState(false);
  const nashvilleAddress = [36.2067, -86.6169];
  const fortWorthAddress = [32.7065, -97.2233];
  const centerLat = (nashvilleAddress[0] + fortWorthAddress[0]) / 2;
  const centerLng = (nashvilleAddress[1] + fortWorthAddress[1]) / 2;
  const centerPosition = [centerLat, centerLng];

  return (
    <motion.section
      initial={{ opacity: 0, scale: 1.5 }}
      whileInview={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        ease: "easeOut",
        stiffness: 50,
        duration: 0.6,
        damping: 10,
      }}
      viewport={{ once: true, amount: 0.4 }}
      className="relative mb-[4.5625rem] h-[23rem] md:mb-40 md:h-[35rem] md:px-[6.0625rem] xl:px-[10.25rem]"
    >
      <MapContainer
        center={centerPosition}
        zoom={6}
        style={{ height: "100%", width: "100%" }}
        dragging={isMapInteractive}
        touchZoom={isMapInteractive}
        doubleClickZoom={isMapInteractive}
        scrollWheelZoom={isMapInteractive}
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
      {!isMapInteractive && (
        <div
          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/10 md:hidden"
          onClick={() => setIsMapInteractive(true)}
        >
          <div className="rounded-lg bg-white px-4 py-2 shadow-lg">
            Tap to activate map
          </div>
        </div>
      )}
      {isMapInteractive && (
        <button
          className="absolute right-2 top-2 z-[1000] rounded-lg bg-white px-3 py-1 shadow-lg md:hidden"
          onClick={() => setIsMapInteractive(false)}
        >
          Exit Map
        </button>
      )}
    </motion.section>
  );
}
