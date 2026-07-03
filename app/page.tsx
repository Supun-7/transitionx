'use client'
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import HeroScene from "../components/HeroScene"
import { InstagramIcon, WhatsAppIcon, LinkedInIcon } from "../components/Icons"

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
          <div className="hero-logos-container hero-eyebrow">
            <Image
              src="/sliitlogo.png"
              alt="SLIIT Logo"
              width={190}
              height={28}
              className="hero-logo-img"
              priority
            />
            <span className="logo-divider"></span>
            <Image
              src="/curtin logo.png"
              alt="Curtin University Colombo Logo"
              width={204}
              height={28}
              className="hero-logo-img"
              priority
            />
          </div>
          <h1 className="hero-tagline">
            Real <span className="idea">Industry Challenges.</span>
            <span className="stage">We set the STAGE.</span>
          </h1>
          <p className="hero-lead lead">
            A flagship initiative by the IEEE Student Branches of SLIIT and Curtin University Colombo,
            built to help 3rd/4th-year students and fresh graduates turn academic knowledge into real, hands-on industry experience.
          </p>
          <div className="hero-cta-wrap hero-cta">
            <Link className="btn btn-primary" href="/process">
              Explore the process <span className="arrow">→</span>
            </Link>
            <Link className="btn btn-ghost" href="/dates">See key dates</Link>
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
              TransitionX is a structured industry transition programme designed for 3rd/4th-year students and fresh graduates. It connects graduating talent with real company challenges through workshops, mentorship, and a final Industry Buildathon — creating engineers who are truly industry-ready from day one.
            </p>
          </div>

          {/* Stats */}
          <div className="stats reveal d1">
            <div className="stat">
              <div className="num">3</div>
              <div className="label">Structured Phases</div>
            </div>
            <div className="stat">
              <div className="num">25</div>
              <div className="label">Partner Companies</div>
            </div>
            <div className="stat">
              <div className="num">75</div>
              <div className="label">Students Impacted</div>
            </div>
            <div className="stat">
              <div className="num">5</div>
              <div className="label">Core Technical Domains</div>
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
              <p>To deliver a structured, immersive programme that equips 3rd/4th-year students and fresh graduates with real industry exposure, professional mentorship, and hands-on problem-solving experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TECHNICAL DOMAINS & CORE PILLARS ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-2 reveal" style={{ alignItems: 'center', gap: '48px' }}>
            <div>
              <span className="eyebrow">Technical Domains &amp; Core Pillars</span>
              <h2 style={{ marginBottom: '20px' }}>Empowering Innovation</h2>
              <div className="title-rule" style={{ marginBottom: '24px' }}></div>
              <p className="lead" style={{ marginBottom: '24px' }}>
                Transition-X brings together industry and academia by addressing real-world challenges across five key technology and engineering domains. The competition encourages innovation, interdisciplinary collaboration, and practical problem-solving through industry-driven projects.
              </p>
              
            </div>
            
            <div className="card" style={{ padding: '36px' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '24px', color: 'var(--lavender)' }}>Core Competition Domains</h3>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '20px' }}>
                {[
                  { icon: '💻', text: 'Digital Systems & Software' },
                  { icon: '🤖', text: 'AI, Data & Cyber Technologies' },
                  { icon: '🔌', text: 'Robotics & Embedded Systems' },
                  { icon: '🏭', text: 'Smart Manufacturing & Industrial Automation' },
                  { icon: '🏗️', text: 'Civil Engineering & Smart Infrastructure' }
                ].map((dom, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '16px', alignItems: 'center', fontSize: '1.15rem', fontWeight: 600 }}>
                    <span style={{ fontSize: '1.6rem' }}>{dom.icon}</span>
                    <span>{dom.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL & COMMUNITY ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Stay Connected</span>
            <h2>Join Our Community</h2>
            <div className="title-rule"></div>
            <p className="lead" style={{ marginTop: '20px', maxWidth: '600px', margin: '20px auto 0' }}>
              Follow our official social media channels for direct announcements, behind-the-scenes content, and real-time updates.
            </p>
          </div>
          
          <div className="grid grid-2" style={{ maxWidth: '960px', margin: '0 auto', gap: '20px' }}>
            <div className="card reveal d1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px' }}>
              <a 
                href="https://instagram.com/transitionx.official" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                className="hover-scale"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', marginBottom: '16px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'var(--lavender)' }}>
                  <InstagramIcon style={{ width: '28px', height: '28px' }} />
                </div>
              </a>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Instagram</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', marginBottom: '20px' }}>
                Follow us on Instagram for live stories, highlights, and participant spotlights.
              </p>
              <a 
                href="https://instagram.com/transitionx.official" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-ghost"
                style={{ fontSize: '0.95rem', padding: '10px 24px' }}
              >
                @transitionx.official
              </a>
            </div>

            <div className="card reveal d2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px' }}>
              <a 
                href="https://whatsapp.com/channel/0029VbCw8fD5fM5dbMtn8S19" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                className="hover-scale"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', marginBottom: '16px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'var(--lavender)' }}>
                  <WhatsAppIcon style={{ width: '28px', height: '28px' }} />
                </div>
              </a>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>WhatsApp Channel</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', marginBottom: '20px' }}>
                Join our official WhatsApp channel for direct alerts, schedule announcements, and links.
              </p>
              <a 
                href="https://whatsapp.com/channel/0029VbCw8fD5fM5dbMtn8S19" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ fontSize: '0.95rem', padding: '10px 24px' }}
              >
                Join Channel <span className="arrow">→</span>
              </a>
            </div>

            <div className="card reveal d3" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px' }}>
              <a 
                href="https://www.linkedin.com/company/ieee-student-branch-of-sliit/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                className="hover-scale"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', marginBottom: '16px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'var(--lavender)' }}>
                  <LinkedInIcon style={{ width: '28px', height: '28px' }} />
                </div>
              </a>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>IEEE SB SLIIT LinkedIn</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', marginBottom: '20px' }}>
                Connect with the IEEE Student Branch of SLIIT for professional updates and networking.
              </p>
              <a 
                href="https://www.linkedin.com/company/ieee-student-branch-of-sliit/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-ghost"
                style={{ fontSize: '0.95rem', padding: '10px 24px' }}
              >
                Connect on LinkedIn
              </a>
            </div>

            <div className="card reveal d4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '32px' }}>
              <a 
                href="https://www.linkedin.com/company/ieee-student-branch-of-cuc/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                className="hover-scale"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '56px', height: '56px', marginBottom: '16px', borderRadius: '14px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: 'var(--lavender)' }}>
                  <LinkedInIcon style={{ width: '28px', height: '28px' }} />
                </div>
              </a>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>IEEE SB CUC LinkedIn</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', marginBottom: '20px' }}>
                Connect with the IEEE Student Branch of Curtin University Colombo for industry news.
              </p>
              <a 
                href="https://www.linkedin.com/company/ieee-student-branch-of-cuc/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-ghost"
                style={{ fontSize: '0.95rem', padding: '10px 24px' }}
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band reveal">
            <h2>Three Phases. One Transition.</h2>
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