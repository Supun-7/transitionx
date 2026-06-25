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
            {[
              { date: '29th June 2026', title: 'Applications Open', desc: 'Registration opens for final-year engineering students from SLIIT and Curtin University Colombo.' },
              { date: '06th July 2026', title: 'Applications Close', desc: 'Last day to submit your registration. Selected participants will be notified within one week.' },
              { date: '15th July 2026', title: 'Phase 01 — Company Engagement', desc: 'Industry partners present their real-world challenges. Teams are formed and problem statements distributed.' },
              { date: '18th July 2026', title: 'Phase 02 — Skill Accelerator', desc: 'Targeted workshops and hands-on training sessions begin. Expert-led sessions run across four weeks.' },
              { date: '21st August 2026', title: 'Phase 03 — Mentorship Track', desc: 'Teams are paired with industry mentors. Weekly mentorship sessions and feedback loops begin.' },
            ].map((item, i) => (
              <div className="tl-item card reveal" key={i}>
                <div className="tl-date">{item.date}</div>
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
            <div className="icon" style={{ margin: '0 auto 18px', fontSize: '1.4rem' }}>📅</div>
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
            <p>Applications open January 2026. Secure your spot before they close.</p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/register">
                Register now <span className="arrow">→</span>
              </Link>
              <Link className="btn btn-ghost" href="/contact">Have a question?</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}