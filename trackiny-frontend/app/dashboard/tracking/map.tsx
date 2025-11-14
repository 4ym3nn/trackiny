"use client";
import { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useTrackingStore } from "@/lib/zustand";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://www.svgrepo.com/show/376955/map-marker.svg",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  shadowUrl: "",
});

interface Vehicle {
  id: string;
  latitude: number;
  longitude: number;
  status: string;
  address: string;
  name: string;
}

const vehiclesData: Vehicle[] = [
  {
    id: "veh_001",
    latitude: 36.7525,
    longitude: 3.0419,
    status: "active",
    address: "Algiers City Center",
    name: "Truck A"
  },
  {
    id: "veh_002",
    latitude: 36.6993,
    longitude: 3.1737,
    status: "idle",
    address: "Bab Ezzouar",
    name: "Van B"
  },
  {
    id: "veh_003",
    latitude: 36.7651,
    longitude: 2.9912,
    status: "offline",
    address: "El Harrach",
    name: "Car C"
  },
  {
    id: "veh_004",
    latitude: 36.7805,
    longitude: 3.0586,
    status: "active",
    address: "Kouba",
    name: "Motorbike D"
  },
  {
    id: "veh_005",
    latitude: 36.7558,
    longitude: 3.0411,
    status: "maintenance",
    address: "Hydra",
    name: "Truck E"
  }
];

export default function TrackingMap() {
  const trackedDriver = useTrackingStore((state) => state.trackedDriver);
  const mapRef = useRef<L.Map | null>(null);
  const mapCenterRef = useRef<[number, number] | null>(null);
  const [mapCenter, setMapCenter] = useState<[number, number]>([36.75, 3.06]);
  const [vehicles, setVehicles] = useState<Vehicle[]>(vehiclesData);

  useEffect(() => {
    setVehicles(vehiclesData);

    const tracked = trackedDriver
      ? vehiclesData.find((vehicle) => vehicle.id === trackedDriver.id)
      : vehiclesData[0];

    if (tracked) {
      const newCenter: [number, number] = [tracked.latitude, tracked.longitude];

      if (
        !mapCenterRef.current ||
        mapCenterRef.current[0] !== newCenter[0] ||
        mapCenterRef.current[1] !== newCenter[1]
      ) {
        mapCenterRef.current = newCenter;
        setMapCenter(newCenter);

        if (mapRef.current) {
          mapRef.current.flyTo(newCenter, 14);
        }
      }
    }
  }, [trackedDriver]);

  return (
    <div className="relative h-screen w-full">
      <MapContainer
        center={mapCenter}
        zoom={13}
        style={{ height: "100%", width: "100%" }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {vehicles.map((vehicle) => (
          <Marker key={vehicle.id} position={[vehicle.latitude, vehicle.longitude]}>
            <Popup>
              <strong>{vehicle.name}</strong>
              <br />
              Address: {vehicle.address}
              <br />
              Status: {vehicle.status}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
