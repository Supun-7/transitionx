import './globals.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Rajdhani } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

const rajdhani = Rajdhani({weight: ["500" , "600" , "700"],subsets:["latin"]})

export const metadata = {
  title: "TransitionX 2026",
  description: "Your IDEA. We set the STAGE",
  icons: {
    icon: "/icon.png",
  },
}

export default function Rootlayout({children}: {children: React.ReactNode}) {
  return(
    <html lang="en">
      <body className={`${rajdhani.className}`}>
      <div className="bg-grid" />
      <Navbar/>
      {children}
      <Footer/>
      <Analytics />
      </body>
    </html>
  )
}