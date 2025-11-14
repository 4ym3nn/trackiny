import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function CardWithForm() {
  return (
<Card className="w-[703px] h-full bg-white">
    <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Contact Us</CardTitle>

    </CardHeader>
    <CardContent>
        <form>
            <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" className="p-4" placeholder="Your name" />
                </div>
                <div  className="flex flex-col space-y-1.5">
                    <Label htmlFor="surname">Surname</Label>
                    <Input id="surname" className="p-4" placeholder="Your surname" />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" className="p-4" placeholder="Your email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="message">Message</Label>
                    <Input id="message" className="p-4 py-8" placeholder="Value " />
                </div>
            </div>
        </form>
    </CardContent>
    <CardFooter className="">
        <Button variant="login" className="bg-black text-white w-full rounded-lg" type="submit">Submit</Button>
    </CardFooter>
</Card>
  )
}
