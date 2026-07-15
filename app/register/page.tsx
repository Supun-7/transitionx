'use client'
import { useState, useEffect } from "react"
import Image from "next/image"
import useReveal from "../../hooks/useReveal"
import { InstagramIcon, WhatsAppIcon, LinkedInIcon } from "../../components/Icons"


export default function Register() {
  useReveal()

  const [mounted, setMounted] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [activeTab, setActiveTab] = useState<number | null>(null)

  const toggleTab = (index: number) => {
    setActiveTab(activeTab === index ? null : index)
  }

  const playbookItems = [
    {
      num: '01',
      title: 'Who Can Join? (Eligibility)',
      content: (
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'grid', gap: '8px', marginTop: '4px', fontSize: '0.97rem' }}>
          <li><strong>Target Audience:</strong> Built exclusively for 3rd-year, 4th-year, and fresh graduate students ready to transition into the industry.</li>
          <li><strong>Verification:</strong> Just have your university name, student ID, and degree details ready when you sign up so we can quickly verify your slot! Keep it accurate so we can verify your spot.</li>
          <li><strong>Note:</strong> To ensure the right level of challenge, this program isn&apos;t open to 1st and 2nd-year students.</li>
        </ul>
      )
    },
    {
      num: '02',
      title: 'Build Your Team',
      content: (
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'grid', gap: '8px', marginTop: '4px', fontSize: '0.97rem' }}>
          <li><strong>Squad Size:</strong> Gather a team of 1 to 3 members.</li>
          <li><strong>Mix it Up:</strong> We highly encourage cross-disciplinary and cross-university teams—diverse perspectives build the best solutions!</li>
          <li><strong>Lock it In:</strong> You can freely adjust your team members anytime before the registration window closes on July 29, 2026.</li>
        </ul>
      )
    },
    {
      num: '03',
      title: 'Seamless Registration & IP',
      content: (
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'grid', gap: '8px', marginTop: '4px', fontSize: '0.97rem' }}>
          <li><strong>Quick Sign-up:</strong> Pick a Team Leader and have any member fill out the form accurately to lock in your domain.</li>
          <li><strong>Your Code, Your Ownership:</strong> Your intellectual property stays 100% yours. IEEE will never claim ownership of your work. If an industry partner wants to commercialize your solution, they&apos;ll negotiate a separate agreement directly with your team.</li>
          <li><strong>Showcasing Success:</strong> By entering, you give us the green light to highlight your team&apos;s journey and photos on our official channels!</li>
        </ul>
      )
    },
    {
      num: '04',
      title: 'Collaborative Spirit (Conduct)',
      content: (
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'grid', gap: '8px', marginTop: '4px', fontSize: '0.97rem' }}>
          <li><strong>Respect the Community:</strong> TransitionX thrives on mutual respect. We maintain a friendly, inclusive, and professional environment for all participants, mentors, and industry experts.</li>
          <li><strong>Play Fair:</strong> Following organizer instructions ensures a smooth, high-value experience for every team involved.</li>
        </ul>
      )
    },
    {
      num: '05',
      title: 'Stay Committed',
      content: (
        <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'grid', gap: '8px', marginTop: '4px', fontSize: '0.97rem' }}>
          <li><strong>Value Your Slot:</strong> With slots strictly capped at 15 per domain, every spot is highly valuable. If your team absolutely must withdraw, please drop us a written note early so we can pass the opportunity to a waitlisted team.</li>
          <li><strong>Reliability Matters (Commitment &amp; Reliability):</strong> Backing out after the deadline without notice impacts the program flow and may limit your eligibility for future IEEE events (excepting medical or personal emergencies, of course!).</li>
        </ul>
      )
    }
  ];

  useEffect(() => {
    setMounted(true)
    const targetDate = new Date('2026-07-29T23:59:59').getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }

    setTimeLeft(calculateTimeLeft())

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* ===== PAGE HEADER ===== */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Register</span>
            <h2>Secure Your Team&apos;s Spot.</h2>
            <div className="title-rule"></div>
            <p className="lead" style={{ marginTop: '20px' }}>
              Please review all instructions carefully before starting your application. With only <strong className="accent-text">75 team slots available</strong>, spaces are highly competitive, and incomplete or incorrect submissions will not be reviewed.
            </p>

            {/* Countdown Timer */}
            <div className="countdown-timer-wrap">
              <div className="countdown-grid">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hours', value: timeLeft.hours },
                  { label: 'Minutes', value: timeLeft.minutes },
                  { label: 'Seconds', value: timeLeft.seconds }
                ].map((item, idx) => (
                  <div className="countdown-item" key={idx}>
                    <span className="countdown-number">
                      {mounted ? String(item.value).padStart(2, '0') : '00'}
                    </span>
                    <span className="countdown-label">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-cta" style={{ marginTop: '28px' }}>
              <a
                className="btn btn-primary"
                href="https://forms.gle/rUxKqfu6AumZiqQ48"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '1.1rem', padding: '16px 36px' }}
              >
                Register Now <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHO CAN APPLY ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Eligibility Requirements</span>
            <h2>Who Can Apply?</h2>
            <div className="title-rule"></div>
          </div>
          <div className="grid grid-3">
            {[
              {
                header: 'ELIGIBLE BATCHES',
                boldText: 'Open exclusively to 3rd-year, 4th-year, and fresh graduate students.',
                bodyText: '1st and 2nd-year students are not eligible.',
                accentColor: 'linear-gradient(90deg, var(--x-cyan), var(--x-magenta))'
              },
              {
                header: 'ALL FIELDS WELCOME',
                boldText: 'Built for diverse perspectives across all engineering and tech backgrounds—including Software, Electrical, Mechanical, Civil, and beyond.',
                bodyText: '',
                accentColor: 'linear-gradient(90deg, var(--x-magenta), var(--lavender))'
              },
              {
                header: 'THE PERFECT FIT',
                boldText: 'Designed for relentless problem-solvers ready to transition from classroom theory to real-world industry execution.',
                bodyText: '',
                accentColor: 'linear-gradient(90deg, var(--x-cyan), var(--lavender))'
              }
            ].map((item, i) => (
              <div 
                className={`card reveal d${i + 1}`} 
                key={i}
                style={{
                  position: 'relative',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  overflow: 'hidden'
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: item.accentColor
                }} />
                <span style={{ 
                  fontSize: '0.75rem', 
                  fontWeight: 700, 
                  textTransform: 'uppercase', 
                  letterSpacing: '1.5px', 
                  color: 'var(--lavender)' 
                }}>
                  {item.header}
                </span>
                <p style={{ 
                  fontSize: '1.15rem', 
                  fontWeight: 700, 
                  lineHeight: 1.45, 
                  color: 'var(--white)', 
                  margin: 0 
                }}>
                  {item.boldText}
                </p>
                {item.bodyText && (
                  <p style={{ 
                    fontSize: '0.95rem', 
                    fontWeight: 400, 
                    lineHeight: 1.5, 
                    color: 'var(--ink-soft)', 
                    margin: 0 
                  }}>
                    {item.bodyText}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RULES & REGULATIONS ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Participation Guidelines</span>
            <h2>The Playbook</h2>
            <div className="title-rule"></div>
          </div>
          
          <div style={{ maxWidth: '720px', margin: '0 auto', display: 'grid', gap: '16px' }} className="reveal">
            {playbookItems.map((item, idx) => {
              const isOpen = activeTab === idx;
              return (
                <div 
                  key={idx} 
                  className={`card playbook-card ${isOpen ? 'open' : ''}`}
                  style={{ padding: '0', cursor: 'pointer', overflow: 'hidden' }}
                  onClick={() => toggleTab(idx)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '24px 30px', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                      <span className="playbook-num">{item.num}</span>
                      <h3 style={{ fontSize: '1.2rem', margin: 0, fontWeight: 700 }}>{item.title}</h3>
                    </div>
                    <span className="playbook-toggle-icon" style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--lavender)', transition: 'transform 0.3s ease', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      ＋
                    </span>
                  </div>
                  {isOpen && (
                    <div style={{ padding: '0 30px 24px 30px', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '20px', color: 'var(--ink-soft)' }} onClick={(e) => e.stopPropagation()}>
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== REGISTER BUTTON ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band reveal" style={{ textAlign: 'center' }}>
            <h2>Ready to Register?</h2>
            <p>Make sure you have read all rules and instructions carefully before proceeding.</p>
            <div style={{ marginTop: '28px' }}>
              <a
                className="btn btn-primary"
                href="https://forms.gle/rUxKqfu6AumZiqQ48"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '1.1rem', padding: '16px 36px' }}
              >
                Register Now <span className="arrow">→</span>
              </a>
            </div>
            <p style={{ marginTop: '16px', color: 'var(--ink-faint)', fontSize: '0.88rem' }}>
              You will be redirected to our official Google Form.
            </p>
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

    </main>
  )
}