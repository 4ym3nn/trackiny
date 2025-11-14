import { Separator } from "@/components/ui/separator";
import Image from "next/image"
import { ShipmentHeader } from "../shipment-header";


const Card = ({from,to}:{from:string,to:string}) =>{
    return(
        <main className="flex flex-col">
            <div className="w-full p-4 bg-white rounded-[15px]  h-40 border border-[#d0d0d0]  flex items-center justify-between gap-4" >
            <span className=" font-semibold text-2xl text-gray-700">{from}</span>
            <Image src="/Frame.svg" alt="Road image" width={200} height={200} className="mx-4" />
            <span className="text-2xl font-semibold text-gray-700">{to}</span>
        </div>
        </main>
    )
}

const roads = [
    { from: "Riyadh", to: "Dammam" },
    { from: "Jeddah", to: "Makkah" },
    { from: "Madinah", to: "Yanbu" },
    { from: "Abha", to: "Khamis Mushait" },
    { from: "Tabuk", to: "Haql" }
];

const Roads =() =>{
return(
    <div className="space-y-4">
        <ShipmentHeader title="Roads"/>
        {roads.map((road, index) => (
            <Card key={index} from={road.from} to={road.to} />
        ))}

    </div>
)
}

export default Roads