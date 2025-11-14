"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useState } from "react"
import { Button } from "src/components/ui/button"
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const headers = [
    { name: "Home", path: "/" },
    
    { name: "About us", path: "#section4" },
    { name: "Contact", path: "#section5" },
    { name: "Sign in", path: "/signin" },
    { name: "Sign up", path: "/signup" },
  ]


  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full ">
      <div className="container mx-auto">
        <div className="flex items-center justify-center h-[60px] px-8">
          <nav className="flex justify-center items-center gap-8">
            {headers.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`text-lg font-medium ${item.path === "Home" &&
                  "bg-gray-100 h-[32px] w-[70px] items-center justify-center flex rounded"
                  } text-gray-600 hover:bg-[#3461E0]/15 p-2 rounded-md transition-colors`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

        </div>


      </div>
    </header>
  )
}

export default Header;