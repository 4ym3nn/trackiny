"use client"

import { Star, Edit, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const availableCarriers = [
  {
    name: "HUGE BRK",
    trucks: "BIG TRUCKS",
    ways: "MID RANGE WAYS",
    rating: 5,
  },
  {
    name: "SOUTH EAST",
    trucks: "MEDIUM TRUCKS",
    ways: "LONG WAYS",
    rating: 3,
  },
  {
    name: "ONLY NORTH",
    trucks: "BIG MEDIUM TRUCKS",
    ways: "SHORT WAYS",
    rating: 4,
  },
  {
    name: "LIVRAISON",
    trucks: "SMALL TRUCKS",
    ways: "VERY LONG WAYS",
    rating: 2,
  },
  {
    name: "LIVRAISON 58 WAILAYAS",
    trucks: "SMALL TRUCKS",
    ways: "MEDIUM WAYS",
    rating: 4,
  },
]

const previousCarriers = [
  {
    name: "AZ EXPRESS",
    trucks: "big trucks",
    lastWorked: "02-11-2024",
    rating: 4,
  },
  {
    name: "XD LIVRAISON",
    trucks: "Small trucks",
    lastWorked: "12-03-2025",
    rating: 4,
  },
  {
    name: "CAMION 2LITRES",
    trucks: "Medium trucks",
    lastWorked: "12-03-2025",
    rating: 4,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
        />
      ))}
    </div>
  )
}

export function ShipmentList() {
  return (
    <div className="p-6 space-y-6 ">
      {/* Available Carriers Table */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Available Carriers</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow >
                <TableHead className="text-start">Name</TableHead> 
                <TableHead className="text-start">Trucks</TableHead>
                <TableHead className="text-start">Ways</TableHead>
                <TableHead className="text-start">REVIEWS</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {availableCarriers.map((carrier) => (
                <TableRow key={carrier.name}>
                  <TableCell className="font-medium">{carrier.name}</TableCell>
                  <TableCell>{carrier.trucks}</TableCell>
                  <TableCell>{carrier.ways}</TableCell>
                  <TableCell>
                    <StarRating rating={carrier.rating} />
                  </TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm" className="p-4">
                      Contact
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Worked with before Table */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Worked with before</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-start">Name</TableHead>
                <TableHead className="text-start">Trucks</TableHead>
                <TableHead className="text-start">Last time worked</TableHead>
                <TableHead className="text-start">Your review</TableHead>
                <TableHead className="text-start"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {previousCarriers.map((carrier) => (
                <TableRow key={carrier.name}>
                  <TableCell className="font-medium">{carrier.name}</TableCell>
                  <TableCell>{carrier.trucks}</TableCell>
                  <TableCell>{carrier.lastWorked}</TableCell>
                  <TableCell>
                    <StarRating rating={carrier.rating} />
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}

