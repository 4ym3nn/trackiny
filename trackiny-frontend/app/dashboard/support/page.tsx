import { ShipmentHeader } from "../shipment-header"
import { CardWithForm } from './card';
import { Separator } from "@/components/ui/separator";
export default function ShipmentPage() {
    return (
        <div className="flex flex-col h-full">
            <ShipmentHeader title="support" />
            <div className="flex flex-col   ">
             
                
                <div className="flex flex-col my-32 items-center justify-center">
                    <CardWithForm />
                </div>
            </div>
        </div>
    )
}

