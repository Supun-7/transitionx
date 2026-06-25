'use client'
import { useEffect } from "react"
import Link from "next/link"
import HeroScene from "../components/HeroScene"

export default function Home() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
    }, { threshold: 0.15 })
    reveals.forEach(r => observer.observe(r))
    return () => observer.disconnect()
  }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* ===== HERO ===== */}
      <section className="hero-stage">
        <HeroScene />
        <div className="geo-wrap">
          <div className="geo">
            <div className="geo-face" /><div className="geo-face" />
            <div className="geo-face" /><div className="geo-face" />
            <div className="geo-face" /><div className="geo-face" />
            <div className="geo-ring" /><div className="geo-ring" />
            <div className="geo-ring" />
          </div>
        </div>
        <div className="spotlight spotlight-left" />
        <div className="spotlight spotlight-right" />
        <div className="hero-content">
          <p className="hero-eyebrow eyebrow">SLIIT &amp; Curtin University Colombo IEEE · 2026</p>
          <h1 className="hero-tagline">
            Your <span className="idea">IDEA.</span>
            <span className="stage">We set the STAGE.</span>
          </h1>
          <p className="hero-lead lead">
            A flagship initiative by the IEEE Student Branches of SLIIT and Curtin University Colombo,
            built to help graduating students turn academic knowledge into real, hands-on industry experience.
          </p>
          <div className="hero-cta-wrap hero-cta">
            <Link className="btn btn-primary" href="/process">
              Explore the process <span className="arrow">→</span>
            </Link>
            <Link className="btn btn-ghost" href="/dates">See key dates</Link>
          </div>
          <div className="hero-org org-line">
            <span><span className="dot"></span>IEEE Student Branch of SLIIT</span>
            <span><span className="dot"></span>IEEE Student Branch of Curtin University Colombo</span>
          </div>
        </div>
      </section>

      {/* ===== WHAT IS TRANSITIONX ===== */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">What is TransitionX</span>
            <h2>Bridging the Gap Between Academia &amp; Industry</h2>
            <div className="title-rule"></div>
            <p className="lead" style={{ marginTop: '20px' }}>
              TransitionX is a structured industry transition programme designed for final-year
              engineering students. It connects graduating talent with real company challenges
              through workshops, mentorship, and a final Industry Buildathon — creating engineers
              who are truly industry-ready from day one.
            </p>
          </div>

          {/* Stats */}
          <div className="stats reveal d1">
            <div className="stat">
              <div className="num">4</div>
              <div className="label">Structured Phases</div>
            </div>
            <div className="stat">
              <div className="num">10+</div>
              <div className="label">Partner Companies</div>
            </div>
            <div className="stat">
              <div className="num">200+</div>
              <div className="label">Students Impacted</div>
            </div>
            <div className="stat">
              <div className="num">2</div>
              <div className="label">IEEE Student Branches</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Our Direction</span>
            <h2>Vision &amp; Mission</h2>
            <div className="title-rule"></div>
          </div>
          <div className="grid grid-2">
            <div className="card reveal d1">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
                  <line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
                  <line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/>
                </svg>
              </div>
              <h3>Vision</h3>
              <p>To be the definitive bridge between Sri Lanka's engineering academia and industry — producing graduates who don't just enter the workforce, but transform it.</p>
            </div>
            <div className="card reveal d2">
              <div className="icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>Mission</h3>
              <p>To deliver a structured, immersive programme that equips final-year students with real industry exposure, professional mentorship, and hands-on problem-solving experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE 4 PILLARS ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Why TransitionX</span>
            <h2>The Four Pillars</h2>
            <div className="title-rule"></div>
          </div>
          <div className="grid grid-4">
            {[
              { icon: '🏢', title: 'Company Engagement', desc: 'Real challenges from real companies. Students work on live industry problems, not textbook exercises.' },
              { icon: '🧠', title: 'Expert Mentorship', desc: 'Guided by industry professionals who have navigated the exact transition students are about to make.' },
              { icon: '⚡', title: 'Skill Accelerator', desc: 'Targeted workshops that close the gap between academic knowledge and professional expectations.' },
              { icon: '🏆', title: 'Industry Buildathon', desc: 'A final showcase where teams present real solutions to industry partners — the ultimate test.' },
            ].map((p, i) => (
              <div className={`card reveal d${i + 1}`} key={i}>
                <div className="icon" style={{ fontSize: '1.4rem' }}>{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band reveal">
            <h2>Four Phases. One Transition.</h2>
            <p>From company engagement to the final Buildathon — every step is designed to make you industry-ready.</p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/process">
                See the full process <span className="arrow">→</span>
              </Link>
              <Link className="btn btn-ghost" href="/about">Learn more about us</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}