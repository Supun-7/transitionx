'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HeroOverlay() {
  const [showTitle, setShowTitle] = useState(false)
  const [showDesc, setShowDesc] = useState(false)
  const [showCtas, setShowCtas] = useState(false)

  useEffect(() => {
    // Cinematic staggered entrance sequence:
    // 1. TransitionX title loads first
    const t1 = setTimeout(() => setShowTitle(true), 350)
    // 2. One-sentence description loads after the title
    const t2 = setTimeout(() => setShowDesc(true), 1200)
    // 3. CTA buttons load after the sentence
    const t3 = setTimeout(() => setShowCtas(true), 1900)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      clearTimeout(t3)
    }
  }, [])

  return (
    <>
      {/* Background vignette overlay to ensure pristine readability over the 3D scene */}
      <div className="jungle-text-overlay" aria-hidden="true" />

      {/* Cinematic Hero Content */}
      <div className="hero-content">
        <div className="hero-cinematic-wrap">
          {/* 1. TransitionX 3D Title */}
          <h1
            className={`hero-brand-title-3d ${showTitle ? 'cinematic-in' : 'cinematic-out'}`}
            aria-label="TransitionX"
          >
            <span className="text-3d-base">
              Transition<span className="brand-x-base">X</span>
            </span>
            <span className="text-3d-face" aria-hidden="true">
              Transition<span className="brand-x-face">X</span>
            </span>
          </h1>

          {/* 2. What is TransitionX in one sentence */}
          <p className={`hero-cinematic-desc ${showDesc ? 'cinematic-in' : 'cinematic-out'}`} >
            TransitionX is a structured industry transition programme that bridges academia and industry by connecting students and fresh graduates with real-world challenges, mentorship, workshops, and hands-on industry experience.
          </p>

          {/* 3. Two CTA buttons: Get in touch & Explore More */}
          <div
            className={`hero-cinematic-cta ${showCtas ? 'cinematic-in' : 'cinematic-out'}`}
          >
            <Link className="btn btn-primary hero-btn-glow" href="/contact">
              Get in touch <span className="arrow">→</span>
            </Link>
            <Link className="btn btn-ghost hero-btn-explore" href="/about">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
