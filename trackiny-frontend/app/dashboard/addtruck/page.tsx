"use client";

import { useState } from "react";
import { ShipmentHeader } from "../shipment-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { ChevronDown, Package } from "lucide-react";
import axios from "axios";

interface FormData {
  begin: string;
  destination: string;
  produit: string;
  ammount: number | null;
}



export default function Page() {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedTransport, setSelectedTransport] = useState<number | null>(
    null
  );
  const [begin, setBegin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [produit, setProduit] = useState<string>("");
  const [ammount, setAmmount] = useState<number | null>(null);
  const [date, setDate] = useState<string>("");
  const [additionalComments, setAdditionalComments] = useState<string>("");

  const handleOptionSelect = (option: string) => {
    setIsDialogOpen(true);
    setSelectedOption(option === selectedOption ? null : option);
  };

  const transports = [
    {
      id: 1,
      name: "Transport 1",
      price: 50,
      unit: "Km",
      truck: "Tata Truck",
      offersAccepted: "12345",
      offersNeglected: "12345",
    },
    {
      id: 2,
      name: "Transport 2",
      price: 50,
      unit: "Day",
      truck: "Volvo Truck",
      offersAccepted: "12345",
      offersNeglected: "54321",
    },
    {
      id: 3,
      name: "Transport 3",
      price: 50,
      unit: "mo",
      truck: "Mercedes Truck",
      offersAccepted: "12345",
      offersNeglected: "54321",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData: FormData = {
      begin,
      destination,
      produit,
      ammount,
    };
    
    console.log("Form data before submission:", formData);

  };

  return (
    <main className="items-center justify-center w-full h-full bg-gray-100">
      <ShipmentHeader title="CAREER" />
      <div className="justify-center bg-gray-100 items-start m-4 mt-8 p-4">
        <h1 className="h1">Choose a transporter</h1>
      </div>
      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
        <div className="w-full justify-center items-center px-8 rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 h-full w-full">
              {/* Location Inputs */}
              <div className="flex flex-row h3 items-center gap-4 justify-between">
                <Input
                  placeholder="From"
                  value={begin}
                  onChange={(e) => setBegin(e.target.value)}
                  className="w-full h-14 flex justify-start items-center bg-white border"
                />
                <Input
                  placeholder="To"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full h-14 flex justify-start items-center bg-white border"
                />
              </div>

              {/* Product Selection */}
              <Select onValueChange={(value) => setProduit(value)}>
                <SelectTrigger className="h-14 flex items-center justify-between bg-white w-full border">
                  <span className="flex flex-row items-center gap-2">
                    <Package />
                    {produit || "Product"}
                  </span>
                </SelectTrigger>
                <SelectContent className="bg-white text-black w-full">
                  <SelectItem value="xbox" className="w-[176vh]">
                    xbox
                  </SelectItem>
                  <SelectItem value="sneakers" className="w-[176vh]">
                  sneakers
                  </SelectItem>
                  <SelectItem value="Goceries" className="w-[176vh]">
                    Groceries
                  </SelectItem>
                  <SelectItem value="Groeries" className="w-[176vh]">
                    Groceries
                  </SelectItem>
                  <SelectItem value="Groceres" className="w-[176vh]">
                    Groceries
                  </SelectItem> <SelectItem value="Groceriess" className="w-[176vh]">
                    Groceries
                  </SelectItem>
                </SelectContent>
              </Select>

              {/* Amount Input */}
              <Input
                type="number"
                placeholder="Amount"
                value={ammount || ""}
                onChange={(e) => setAmmount(Number(e.target.value))}
                className="h-14 flex justify-start items-center bg-white w-full border"
              />

              {/* Date Input */}
              <Input
                type="datetime-local"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-14 flex justify-start items-center bg-white w-full border"
              />
            </div>

            {/* Option Selection */}
            <div className="mt-4 text-center h3">
              <p className="text-sm text-start px-3 my-6 mb-2">Choose one:</p>
              <div className="grid grid-cols-3 gap-4">
                {["Internal", "External", "Shared"].map((option) => (
                  <Button
                    key={option}
                    variant={(selectedOption === option  ) ? "default" : "outline"}
                    className={`w-full bg-white h-[52px] ${
                      (selectedOption === option) ? "gradient-bg" : ""
                    }`}
                    onClick={() => handleOptionSelect(option)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
            </div>

            {/* Additional Comments */}
            <Input
              className="mt-4 bg-white text-black h-24 p-8 w-full"
              placeholder="Anything to add..."
              value={additionalComments}
              onChange={(e) => setAdditionalComments(e.target.value)}
            />

            {/* Submit Button */}
            <div className="flex justify-end pb-16 items-center w-full h-full">
              <Button
                className="m-8 gradient-bg rounded-full text-white w-[148px] h-[46px]"
                type="submit"
                disabled={false}
                onClick={()=>{setIsDialogOpen(true)}}
              >
                {false ? "Submitting..." : "Continue"}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Transport Selection Dialog */}
      {isDialogOpen && (
        <div className="bg-red-400 p-6 rounded-lg w-full shadow-md">
          <div className="fixed inset-0 bg-black bg-opacity-50 flex flex-col w-full items-center justify-center">
            <div className="bg-white h-[80vh] flex-col items-center justify-center m-16 w-[1550px]">
              <div className="flex items-center justify-center">
                <h2 className="h6 p-4 mt-8 bg-gray-400">Choose a transport</h2>
              </div>
              <div className="flex flex-row gap-8 m-16 items-center justify-center">
                {transports.map((transport) => (
                  <div
                    key={transport.id}
                    className={`p-6 border flex flex-col items-center text-center rounded-lg w-[328px] h-[400px] ${
                      (selectedTransport === transport.id || transport.id === 2)
                        ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg"
                        : "bg-white text-black border-gray-300"
                    }`}
                  >
                    <h3 className="text-lg font-semibold capitalize">
                      {transport.name}
                    </h3>
                    <p className="text-xl font-bold mt-2">
                      {selectedTransport === transport.id ? "DZD" : "$"}{" "}
                      {transport.price} / {transport.unit}
                    </p>
                    <ul className="text-sm mt-4 space-y-1">
                      <li>{transport.truck}</li>
                      <li>Offers accepted: {transport.offersAccepted}</li>
                      <li>Offers neglected: {transport.offersNeglected}</li>
                      {selectedTransport === transport.id && <li>40% filled</li>}
                    </ul>
                    <Button
                      className={`w-full mt-6 py-2 rounded-lg ${
                        (selectedTransport === transport.id || transport.id === 2)
                          ? "bg-gray-200 text-black"
                          : "bg-blue-500 text-white"
                      }`}
                      onClick={() => {
                        setSelectedTransport(transport.id);
                        setIsDialogOpen(false);
                      }}
                    >
                      Choose
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
