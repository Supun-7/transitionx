'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

interface DomainItem {
  name: string
  status: string
  isFull: boolean
  fillPercent: number
}

const DOMAIN_DATA: DomainItem[] = [
  {
    name: 'Digital Systems & Software',
    status: '4 LEFT',
    isFull: false,
    fillPercent: 75,
  },
  {
    name: 'AI, Data & Cyber Technologies',
    status: 'FULL',
    isFull: true,
    fillPercent: 100,
  },
  {
    name: 'Robotics & Embedded Systems',
    status: '6 LEFT',
    isFull: false,
    fillPercent: 50,
  },
  {
    name: 'Smart Manufacturing & Industrial Automation',
    status: '6 LEFT',
    isFull: false,
    fillPercent: 50,
  },
  {
    name: 'Civil Engineering & Smart Infrastructure',
    status: '5 LEFT',
    isFull: false,
    fillPercent: 62,
  },
]

export default function DomainCountdown() {
  const [daysLeft, setDaysLeft] = useState<number | null>(null)

  useEffect(() => {
    // Target date: August 15, 2026 23:59:59 IST
    const targetDate = new Date('2026-08-15T23:59:59+05:30').getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        // Calculate full 24h days remaining until deadline
        const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)))
        setDaysLeft(days)
      } else {
        setDaysLeft(0)
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="domain-section" id="domain-countdown-section">
      <div className="container">
        {/* ===== HERO TITLE & SUBTITLE ===== */}
        <div className="domain-header reveal">
          <h2 className="domain-main-title">
            ONE DOWN, <span className="domain-highlight">FOUR LEFT</span>
          </h2>
          <p className="domain-subtitle">
            AI &amp; Cyber is officially locked. Secure your remaining track
          </p>
          <div className="domain-pill-badge">
            DOMAIN AVAILABILITY
          </div>
        </div>

        {/* ===== DOMAIN PROGRESS BARS LIST ===== */}
        <div className="domain-list reveal">
          {DOMAIN_DATA.map((item, idx) => (
            <div
              key={idx}
              className={`domain-row ${item.isFull ? 'row-full' : ''}`}
            >
              <div className="domain-row-header">
                <span className="domain-name">{item.name}</span>
                <span className={`domain-status ${item.isFull ? 'status-full' : 'status-available'}`}>
                  {item.status}
                </span>
              </div>
              <div className="domain-bar-bg">
                <div
                  className={`domain-bar-fill ${item.isFull ? 'bar-full' : 'bar-available'}`}
                  style={{ width: `${item.fillPercent}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* ===== SECURE YOUR SPOT RIGHT NOW ===== */}
        <div className="domain-callout reveal">
          SECURE YOUR SPOT RIGHT NOW
        </div>

        {/* ===== COUNTDOWN BADGE BOX ===== */}
        <div className="domain-countdown-box reveal">
          <div className="domain-countdown-inner">
            {/* Left Compartment */}
            <div className="countdown-left">
              <span className="countdown-title-top">REGISTRATION</span>
              <span className="countdown-title-bottom">CLOSING IN</span>
              {/* Chevrons Graphic */}
              <div className="chevrons-wrap">
                <svg viewBox="0 0 40 16" fill="none" className="chevrons-svg">
                  <path d="M2 2L8 8L2 14" stroke="url(#chevGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 2L18 8L12 14" stroke="url(#chevGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                  <path d="M22 2L28 8L22 14" stroke="url(#chevGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" />
                  <defs>
                    <linearGradient id="chevGrad" x1="0" y1="0" x2="30" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#38bdf8" />
                      <stop offset="1" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Vertical Glowing Divider */}
            <div className="countdown-divider" />

            {/* Right Compartment */}
            <div className="countdown-right">
              <div className="days-big">
                <span className="num-glow">{daysLeft !== null ? daysLeft : 5}</span>
                <span className="unit-text">{(daysLeft !== null ? daysLeft : 5) === 1 ? 'DAY' : 'DAYS'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ===== REGISTER LINK ===== */}
        <div className="domain-cta-wrap reveal">
          <Link href="/register" className="btn btn-primary domain-cta-btn">
            Secure Your Spot Now <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
