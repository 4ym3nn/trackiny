import { ShipmentList } from "../carriers/shipment-carry"
import { ShipmentHeader } from "../shipment-header"

export default function ShipmentPage() {
  return (
    <div className="flex flex-col h-full bg-soft-gradient">
      <ShipmentHeader title="Partnerers"/>
      <ShipmentList />
    </div>
  )
}
