'use client'
import { useEffect } from "react"
import Link from "next/link"
import HeroScene from "../components/HeroScene"

export default function Home() {
  return (
    <main>
      <section className="hero-stage">

        <HeroScene />

        <div className="geo-wrap">
          <div className="geo">
            <div className="geo-face" />
            <div className="geo-face" />
            <div className="geo-face" />
            <div className="geo-face" />
            <div className="geo-face" />
            <div className="geo-face" />
            <div className="geo-ring" />
            <div className="geo-ring" />
            <div className="geo-ring" />
          </div>
        </div>

        <div className="spotlight spotlight-left" />
        <div className="spotlight spotlight-right" />

        <div className="hero-content">
          <p className="hero-eyebrow eyebrow">
            SLIIT &amp; Curtin University Colombo IEEE · 2026
          </p>

          <h1 className="hero-tagline">
            Your <span className="idea">IDEA.</span>
            <span className="stage">We set the STAGE.</span>
          </h1>

          <p className="hero-lead lead">
            A flagship initiative by the IEEE Student Branches of SLIIT and Curtin University Colombo, built to help graduating students turn academic knowledge into real, hands-on industry experience.
          </p>

          <div className="hero-cta-wrap hero-cta">
            <Link className="btn btn-primary" href="/process">
              Explore the process <span className="arrow">→</span>
            </Link>
            <Link className="btn btn-ghost" href="/dates">
              See key dates
            </Link>
          </div>

          <div className="hero-org org-line">
            <span><span className="dot"></span>IEEE Student Branch of SLIIT</span>
            <span><span className="dot"></span>IEEE Student Branch of Curtin University Colombo</span>
          </div>
        </div>

      </section>
    </main>
  )
}