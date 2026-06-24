
import Navbar from "../components/Navbar"
import { Rajdhani } from "next/font/google"

const rajdhani = Rajdhani({weight: ["500" , "600" , "700"],subsets:["latin"]})

export const metadata = {
  title: "TransitionX 2026",
  description: "Your IDEA. We set the STAGE"

}

export default function Rootlayout({children}: {children: React.ReactNode}) {
  return(
    <html lang="en">
      <body className={`${rajdhani.className}`}>
      <Navbar/>
      {children}
      <div className="bg-grid" />
      </body>
    </html>
  )
}