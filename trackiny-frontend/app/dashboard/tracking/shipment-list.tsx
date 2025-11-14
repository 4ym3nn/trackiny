"use client";

import { ArrowUpDown, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useTrackingStore } from "@/lib/zustand";



interface TrackedDriver  {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  adderss: string;
};

const shipments = [
  {
    id: "DRV-001",
    name: "Ahmed Mohamed",
    status: "in-progress",
    address: "123 Main St, Algiers",
    amount: "1,234 DZD"
  },
  {
    id: "DRV-002",
    name: "Karim Benzema",
    status: "done",
    address: "456 Park Ave, Oran",
    amount: "2,567 DZD"
  },
  {
    id: "DRV-003",
    name: "Sarah Ahmed",
    status: "pending",
    address: "789 Beach Rd, Constantine",
    amount: "3,890 DZD"
  },
  {
    id: "DRV-004",
    name: "Youcef Ali",
    status: "fail",
    address: "321 Mountain View, Annaba",
    amount: "4,123 DZD"
  }
];
export function ShipmentList({
  title,
  style,
}: {
  title: string;
  style?: string;
}) {
  const setTrackedDriver = useTrackingStore((state) => state.setTrackedDriver);

  return (
    <div className={`p-6 ${style}`}>
      <div className={`flex items-center justify-between mb-6 ${style}`}>
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="h-[33px]" size="sm">
            <ArrowUpDown className="h-4 w-4 ml-4 mr-8" />
            <p className="px-4">Sort</p>
          </Button>
          <Button variant="outline" className="h-[33px]" size="sm">
            <Filter className="h-4 w-4 ml-4 mr-8" />
            <p className="px-4">Add filter</p>
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        {shipments.map((shipment) => (
          <div
            key={shipment.id}
            className="border rounded-lg p-6 bg-white flex items-center gap-6 cursor-pointer"
            onClick={() => {
              setTrackedDriver({
                id: shipment.id,
                name: shipment.name,
                adderss: shipment.address,
              });
            }}
          >
            <div className="w-max h-24 border rounded-lg flex items-center justify-center">
              <Image alt="" src="/Frame.svg" width={146} height={108}></Image>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold">{shipment.name}</h4>
                  <p className="text-sm text-gray-500">{shipment.id}</p>
                </div>
                <Badge
                  variant={
                    shipment.status === "done"
                      ? "success"
                      : shipment.status === "in-progress"
                      ? "default"
                      : "warning"
                  }
                  className={`capitalize text-white px-8 py-4  
                    ${shipment.status === "done" && "bg-green-500"} 
                    ${shipment.status === "fail" && "bg-red-500"}
                     ${shipment.status === "pending" && "bg-blue-500"}
                    ${shipment.status === "in-progress" && "bg-yellow-500"}`}
                >
                  {shipment.status}
                </Badge>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">{shipment.address}</p>
                <p className="font-semibold mt-1">{shipment.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
