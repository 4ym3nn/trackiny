import { ShipmentHeader } from "./shipment-header"
import { ShipmentList } from "./shipment-list"

export default function ShipmentPage() {
  return (
    <div className="flex flex-col h-full bg-soft-gradient">
      <ShipmentHeader title="shipment"/>
      <ShipmentList title="SHIPMENT" />
    </div>
  )
}

