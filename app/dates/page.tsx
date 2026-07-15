'use client'
import Link from "next/link"
import useReveal from "../../hooks/useReveal"

export default function Dates() {
  useReveal()

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* ===== PAGE HEADER ===== */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Key Dates</span>
            <h2>Mark Your Calendar.</h2>
            <div className="title-rule"></div>
            <p className="lead" style={{ marginTop: '20px' }}>
              TransitionX 2026 runs across a structured timeline. Every date is a milestone
              — don't miss a single one.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="timeline">
            {([
              { date: '29th June 2026', title: 'Applications Open', desc: "Registration is officially open to 3rd-year, 4th-year, and fresh graduate students across Sri Lanka! Gather your team of 1 to 3 members and step up to solve real-world industry challenges. Don't wait—spaces are highly competitive and only 75 teams will be selected to compete." },
              { date: '29th July 2026', title: 'Applications Close', desc: "This is the final deadline to submit your team's registration. Secure your spot before the portal closes. Selected participants will be notified shortly after." },
              { title: 'Phase 01: Kick-off with an Online Session', desc: 'Join our informative webinar to uncover the competition structure. Following this, meet industry partners face-to-face for company introductions, challenge briefings, and problem clarification before development begins.' },
              { title: 'Phase 02: Guidance Workshops & Mentoring', desc: 'Participate in targeted support sessions and hands-on training. Submit your formal problem proposal for a progress checkpoint, and use constructive feedback from industry partners to refine your solution architecture.' },
              { title: 'Phase 03: Final Pitch & Evaluation', desc: 'Submit your final technical research and working prototypes prior to the finale. On Judgement Day, step onto the stage to present live demonstrations of your final solutions to the industry expert panels.' },
            ] as Array<{ date?: string; title: string; desc: string }>).map((item, i) => (
              <div className="tl-item card reveal" key={i}>
                {item.date && <div className="tl-date">{item.date}</div>}
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NOTE ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card reveal" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            <div className="icon" style={{ margin: '0 auto 18px', display: 'grid', placeItems: 'center', width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(202,140,211,.12)', border: '1px solid rgba(202,140,211,.3)', color: 'var(--lavender)' }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '26px', height: '26px' }}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h3>Dates Subject to Change</h3>
            <p style={{ marginTop: '12px' }}>
              All dates are indicative and may be adjusted. Registered participants will be
              notified of any changes via email. Follow our official channels for real-time updates.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band reveal">
            <h2>Don&apos;t Miss Your Window.</h2>
            <p>Applications are now open. Secure your spot before they close</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="https://forms.gle/rUxKqfu6AumZiqQ48" target="_blank" rel="noopener noreferrer">
                Register now <span className="arrow">→</span>
              </a>
              <Link className="btn btn-ghost" href="/contact">Have a question?</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
