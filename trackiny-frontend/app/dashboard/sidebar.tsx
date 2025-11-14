"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  Truck,
  DollarSign,
  FileText,
  HelpCircle,
  MessageCircle,
  Settings,
  LogOut,User,Handshake
} from "lucide-react"
import { useUserStore } from "@/lib/zustand";


const staticNavigation = [
  { name: "Support", href: "/dashboard/support", icon: HelpCircle },
  { name: "FAQs", href: "/dashboard/faqs", icon: MessageCircle },
]
const bottomNavigation = [
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Logout", href: "/logout", icon: LogOut },
]

export function Sidebar() {

  const { user } = useUserStore();
  const navigation = user === "company"
    ? [
        { name: "Shipments", href: "/dashboard", icon: LayoutDashboard },
        { name: "Products", href: "/dashboard/products", icon: Package },
        { name: "Carriers", href: "/dashboard/carriers", icon: Truck },
        { name: "Revenue", href: "/dashboard/revenue", icon: DollarSign },
        { name: "Billing", href: "/dashboard/billing", icon: FileText },
        { name: "Tracking", href: "/dashboard/tracking", icon: Truck },
        { name: "Add Truck", href: "/dashboard/transp", icon: Truck },

      ]
    : [
        { name: "Drivers", href: "/dashboard/drivers", icon: User },
        { name: "Roads", href: "/dashboard/roads", icon: Package },
        { name: "Partners", href: "/dashboard/partners", icon:Handshake },
        { name: "Trucks", href: "/dashboard/trucks", icon: Truck },
        { name: "Income", href: "/dashboard/revenue", icon: DollarSign },
        { name: "Billing", href: "/dashboard/billing", icon: FileText },
        { name: "Tracking", href: "/dashboard/tracking", icon: Truck },
        { name: "Add Truck", href: "/dashboard/addtruck", icon: Truck },

      ]


  const pathname = usePathname()

  return (
    <div className="w-64 border-r bg-white flex flex-col bg-soft-gradient">
      <div className="flex-1 flex flex-col gap-1 p-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-2 text-sm font-medium rounded-lg ${
                isActive ? "bg-primary text-primary-foreground" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
        <div className="flex-1 flex flex-col gap-1 border-gray-300/90 border-t-2">
          {
            staticNavigation.map((item) => (
              <Link key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))

          }
        </div>
      </div>

      <div className="p-4 border-t">
        {bottomNavigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg"
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </div>

    </div>
  )
}

