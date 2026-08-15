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
    status: 'FULL',
    isFull: true,
    fillPercent: 100,
  },
  {
    name: 'AI, Data & Cyber Technologies',
    status: 'FULL',
    isFull: true,
    fillPercent: 100,
  },
  {
    name: 'Robotics & Embedded Systems',
    status: '4 LEFT',
    isFull: false,
    fillPercent: 75,
  },
  {
    name: 'Smart Manufacturing & Industrial Automation',
    status: '4 LEFT',
    isFull: false,
    fillPercent: 75,
  },
  {
    name: 'Civil Engineering & Smart Infrastructure',
    status: '3 LEFT',
    isFull: false,
    fillPercent: 82,
  },
]

export default function DomainCountdown() {
  const [timeLeft, setTimeLeft] = useState<{ value: number; unit: string } | null>(null)

  useEffect(() => {
    // Target date: August 15, 2026 23:59:59 SLST (Sri Lankan Time, UTC+5:30)
    const targetDate = new Date('2026-08-15T23:59:59+05:30').getTime()

    const updateTimer = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        if (days >= 1) {
          setTimeLeft({ value: days, unit: days === 1 ? 'DAY' : 'DAYS' })
        } else {
          const hours = Math.max(1, Math.ceil(difference / (1000 * 60 * 60)))
          setTimeLeft({ value: hours, unit: hours === 1 ? 'HOUR' : 'HOURS' })
        }
      } else {
        setTimeLeft({ value: 0, unit: 'HOURS' })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="domain-section" id="domain-countdown-section">
      <div className="container">
        {/* ===== HERO TITLE & SUBTITLE ===== */}
        <div className="domain-header reveal">
          <h2 className="domain-main-title">
            TWO DOWN, <span className="domain-highlight">THREE LEFT</span>
          </h2>
          <p className="domain-subtitle">
            Slots are almost gone. Secure your remaining track now.
          </p>
          <div className="domain-pill-badge">
            DOMAIN AVAILABILITY UPDATE
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
                <span className="num-glow">{timeLeft !== null ? timeLeft.value : 8}</span>
                <span className="unit-text">{timeLeft !== null ? timeLeft.unit : 'HOURS'}</span>
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
