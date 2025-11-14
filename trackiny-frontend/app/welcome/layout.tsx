import Footer from "./footer"
import type React from "react"
import { Header } from "./header"


export default function LandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (


    <div className="min-h-screen">
        <Header/>
      {children}
    </div>
  )
}

