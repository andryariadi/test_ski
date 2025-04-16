"use client";

import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { Destination } from "@/types";
import Image from "next/image";

// Fix for default marker icons
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface DestinationMapProps {
  destinations: Destination[];
  onMarkerClick: (destination: Destination) => void;
}

export default function DestinationMap({ destinations, onMarkerClick }: DestinationMapProps) {
  console.log({ destinations }, "<--- destinationsMap");

  return (
    <MapContainer center={[-8.4095, 115.1889]} zoom={9} style={{ height: "420px", width: "100%", borderRadius: "0.5rem" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />

      {destinations.map((destination) => (
        <Marker
          key={destination.id}
          position={[destination.coordinates[0], destination.coordinates[1]]}
          icon={defaultIcon}
          eventHandlers={{
            click: () => onMarkerClick(destination),
          }}
        >
          <Popup className="flex items-center justify-center">
            <Image src={destination.image} alt={destination.name} width={100} height={100} className="rounded-lg" />
            <p>{destination.location}</p>
          </Popup>
          <Tooltip>{destination.name}</Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
