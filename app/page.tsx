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

      {/* ===== FLOATING ALERT BANNER ===== */}
      <div className="alert-banner">
        <span className="alert-icon">⚡</span>
        <span className="alert-text">Registration Deadline Extended to July 29th! </span>
      </div>

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
        </div>
      </section>

      {/* ===== ROADMAP: THREE PHASES ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">The Journey</span>
            <h2>Three Phases. One Transition.</h2>
            <div className="title-rule"></div>
            <p className="lead" style={{ marginTop: '20px' }}>
              TransitionX takes you through a structured pathway designed to transform academic learning into industry success.
            </p>
          </div>

          <div className="home-phases-grid reveal">
            {[
              {
                phase: 'PHASE 01',
                title: 'Initial Stage',
                desc: 'Webinar kick-off, company briefings, problem distribution, and team validation. Get matched with your core track.'
              },
              {
                phase: 'PHASE 02',
                title: 'Workshops & Mentoring',
                desc: 'Targeted support sessions, hands-on training, mentor reviews, and feedback checkpoints to design your solution architecture.'
              },
              {
                phase: 'PHASE 03',
                title: 'Final Pitch & Evaluation',
                desc: 'Submit technical research, deploy working prototypes, and deliver live solution presentations to industry expert panels.'
              }
            ].map((p, i) => (
              <div className="card home-phase-card" key={i} style={{ padding: '28px' }}>
                <span className="home-phase-tag">{p.phase}</span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== DOMAIN AVAILABILITY TRACKER ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Real-Time Status</span>
            <h2>Domain Availability</h2>
            <div className="title-rule"></div>
            <p className="lead" style={{ marginTop: '20px' }}>
              Monitor live registration availability across each technical track. Each domain is strictly capped at 15 teams to maintain direct mentorship quality.
            </p>
          </div>

          <div className="tracker-section">
            {[
              {
                title: 'Digital Systems & Software',
                progressVal: 20,
                progressText: '20%',
                statusTag: 'Spots Available',
                statusClass: 'tag-info'
              },
              {
                title: 'AI, Data & Cyber Technologies',
                progressVal: 60,
                progressText: '60%',
                statusTag: 'Filling Fast',
                statusClass: 'tag-warning'
              },
              {
                title: 'Robotics & Embedded Systems',
                progressVal: 7,
                progressText: '~7%',
                statusTag: 'Spots Available',
                statusClass: 'tag-info'
              },
              {
                title: 'Smart Manufacturing & Industrial Automation',
                progressVal: 13,
                progressText: '~13%',
                statusTag: 'Spots Available',
                statusClass: 'tag-info'
              },
              {
                title: 'Civil Engineering & Smart Infrastructure',
                progressVal: 0,
                progressText: '0%',
                statusTag: 'Be the First!',
                statusClass: 'tag-success'
              }
            ].map((item, idx) => (
              <div 
                className="tracker-card reveal" 
                key={idx} 
                style={{ '--progress-width': `${item.progressVal}%` } as React.CSSProperties}
              >
                <div className="tracker-info">
                  <div className="tracker-header-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <span className="tracker-title">{item.title}</span>
                    <span className={`tracker-badge ${item.statusClass}`}>{item.statusTag}</span>
                  </div>
                  <div className="tracker-progress-bg">
                    <div className="tracker-progress-fill" />
                  </div>
                </div>
                <div className="tracker-percentage">
                  {item.progressText}
                </div>
              </div>
            ))}
          </div>

          {/* Secure Your Slot CTA Button */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '36px' }} className="reveal">
            <Link href="/register" className="btn btn-primary" style={{ padding: '14px 32px' }}>
              Secure Your Slot Now <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== TRACK DETAILS ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Track Details</span>
            <h2>What Each Domain Entails</h2>
            <div className="title-rule"></div>
            <p className="lead" style={{ marginTop: '20px' }}>
              Understand the core technical focus, scope, and tools utilized across each competition track.
            </p>
          </div>

          <div className="grid grid-3 reveal">
            {[
              {
                title: 'Digital Systems & Software',
                desc: 'Focuses on modern software architectures, cloud deployments, API integrations, and robust web applications.',
                tech: 'React · Node.js · TypeScript · AWS / Azure · PostgreSQL'
              },
              {
                title: 'AI, Data & Cyber Technologies',
                desc: 'Covers machine learning pipelines, LLM fine-tuning, big data analytics, threat detection, and system compliance.',
                tech: 'Python · PyTorch · Docker · Kubernetes · LangChain'
              },
              {
                title: 'Robotics & Embedded Systems',
                desc: 'Integrates microcontrollers, sensors, communication protocols, actuators, and hardware control.',
                tech: 'C++ · RTOS · ESP32 · STM32 · ROS · I2C / SPI'
              },
              {
                title: 'Smart Manufacturing & Industrial Automation',
                desc: 'Explores industrial IoT gateways, SCADA systems, PLCs, automated telemetry, and factory networking.',
                tech: 'Modbus · OPC UA · Siemens TIA Portal · Node-RED'
              },
              {
                title: 'Civil Engineering & Smart Infrastructure',
                desc: 'Applies smart structural health monitoring, BIM integrations, geographic information systems, and materials data.',
                tech: 'BIM / Revit · GIS · Sensor networks · Structural Analysis'
              }
            ].map((track, i) => (
              <div className="card" key={i} style={{ display: 'flex', flexDirection: 'column', padding: '28px' }}>
                <div style={{ flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--white)' }}>{track.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--ink-soft)', marginBottom: '24px' }}>{track.desc}</p>
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--x-cyan)', letterSpacing: '1px', textTransform: 'uppercase', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '12px', marginTop: 'auto' }}>
                  {track.tech}
                </div>
              </div>
            ))}
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
              <h3>IEEE SB SLIIT LinkedIn</h3>
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
              <h3>IEEE SB CUC LinkedIn</h3>
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

    </main>
  )
}