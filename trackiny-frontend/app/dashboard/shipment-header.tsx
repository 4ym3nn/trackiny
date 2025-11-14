"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BellIcon, UserCircle, User } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
interface HeaderProps{
  title:string
}
export function ShipmentHeader({title}:HeaderProps) {
  return (
    <div className=" ">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">DASHBOARD</h1>
          <span className="text-gray-500">/</span>
          <h2 className="text-xl text-gray-500 capitalize">{title}</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input className="w-[400px] pl-10" placeholder="Search order, items.." type="search" />
          </div>
          <Button variant="ghost" size="icon">
            <BellIcon className="h-5 w-5" />
          </Button>
          <section className="flex items-center  space-x-2 p-1 rounded-full hover:bg-gray-200">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <User className="h-6 w-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/">Log out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </section>
        </div>
      </div>
    </div>
  )
}

