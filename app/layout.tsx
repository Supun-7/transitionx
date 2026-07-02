import './globals.css'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Rajdhani } from "next/font/google"
import Script from 'next/script'

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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DLXEWEKKSB"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DLXEWEKKSB');
          `}
        </Script>
      </head>
      <body className={`${rajdhani.className}`}>
        <div className="bg-grid" />
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
