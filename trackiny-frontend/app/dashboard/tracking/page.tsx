import React from "react";
import { ShipmentList } from "./shipment-list";
import { ShipmentHeader } from "../shipment-header";
import TrackingMap from "./map";

export default function TrackingPage() {
  return (
   <main className="w-full h-screen " >
    <div  className="sticky top-0 z-10">
    <ShipmentHeader title="Tracking" />
    </div>
     <div className="flex items-start w-full h-fit">
      <div className="w-1/2 h-full overflow-y-auto scrollbar-hidden">
        <ShipmentList title="Tracking" />
      </div>
      <div className="w-1/2 h-full sticky top-0">
        <TrackingMap/>
      </div>
   </div>
   </main>
  );
}
