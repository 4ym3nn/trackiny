"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { BellIcon, UserCircle } from "lucide-react"

export function BillingHeader() {
  return (
    <div className="border-b">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold">DASHBOARD</h1>
          <span className="text-gray-500">/</span>
          <h2 className="text-xl text-gray-500">Billing</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <Input className="w-[400px] pl-10" placeholder="Search order, items.." type="search" />
          </div>
          <Button variant="ghost" size="icon">
            <BellIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <UserCircle className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}

