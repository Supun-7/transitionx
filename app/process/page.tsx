'use client'
import Link from "next/link"
import useReveal from "../../hooks/useReveal"

export default function Process() {
  useReveal()

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* ===== INTRODUCING TRANSITIONX ===== */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Introducing TransitionX</span>
            <h2>Bridging Academia &amp; Industry</h2>
            <div className="title-rule"></div>
            <p className="lead" style={{ marginTop: '20px' }}>
              Transition-X is an industry-driven innovation program jointly organized by the IEEE Student Branch of SLIIT and the IEEE Student Branch of Curtin Colombo. The initiative aims to bridge the gap between academia and industry by connecting 3rd/4th-year students and fresh graduates with real-world challenges submitted by industry partners.
            </p>
          </div>
          
          <div style={{ display: 'grid', gap: '20px', marginTop: '32px', color: 'var(--ink-soft)', lineHeight: 1.6, fontSize: '1.02rem' }}>
            
          </div>
        </div>
      </section>

      

      {/* ===== THE ROADMAP: PHASES & MILESTONES ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">The Roadmap</span>
            <h2>Phases &amp; Milestones</h2>
            <div className="title-rule"></div>
          </div>

          <div className="rail reveal" style={{ marginBottom: '60px' }}>
            <div className="rail-track" />
            <div className="rail-nodes" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {[
                { num: '01', name: 'Initial Stage', desc: 'Registration & Problem Distribution' },
                { num: '02', name: 'Workshops & Mentoring', desc: 'Guidance Workshops & Mentoring' },
                { num: '03', name: 'Final Pitch & Evaluation', desc: 'Final Pitch & Evaluation' },
              ].map((p, i) => (
                <div className="rail-node" key={i}>
                  <div className="bead">{p.num}</div>
                  <div className="pname">{p.name}</div>
                  <div className="pdesc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="phase card reveal d1" style={{ marginBottom: '28px' }}>
            <div className="phase-main">
              <span className="phase-tag">PHASE 01</span>
              <h3>Initial Stage</h3>
              <p className="phase-sub">Registration &amp; Problem Distribution</p>
              <ul>
                <li>Kick off with an Online Session</li>
                <li>Company Introductions, Challenge Briefing, Problem Clarification &amp; Expert session</li>
                <li>Participant Registration and Problem Distribution after Validating</li>
              </ul>
            </div>
            <div className="outcome card">
              <div className="ol">Phase Outcome</div>
              <p>Teams are registered, eligibility is validated, and challenge scopes are distributed with initial support briefings.</p>
            </div>
          </div>

          <div className="phase card reveal d2" style={{ marginBottom: '28px' }}>
            <div className="phase-main">
              <span className="phase-tag">PHASE 02</span>
              <h3>Workshops &amp; Mentoring</h3>
              <p className="phase-sub">Guidance Workshops &amp; Mentoring</p>
              <ul>
                <li>Workshops, Mentoring &amp; Industry Exposure</li>
                <li>Company site visits, environment observation, problem clarification, workshops, Mentoring</li>
                <li>Progress Reviews, Mentor Guidance &amp; Team Collaboration</li>
              </ul>
            </div>
            <div className="outcome card">
              <div className="ol">Phase Outcome</div>
              <p>Teams engage directly in workshops, site visits, and progress check-ins, gaining crucial industry guidance.</p>
            </div>
          </div>

          <div className="phase card reveal d3" style={{ marginBottom: '28px' }}>
            <div className="phase-main">
              <span className="phase-tag">PHASE 03</span>
              <h3>Final Pitch &amp; Evaluation</h3>
              <p className="phase-sub">Final Pitch &amp; Evaluation</p>
              <ul>
                <li>Final solution presentation/live demonstration/simulations, judging by industry experts and award ceremony.</li>
              </ul>
            </div>
            <div className="outcome card">
              <div className="ol">Phase Outcome</div>
              <p>Solutions are pitched to the expert panel, prototypes are evaluated, and winning teams are recognized.</p>
            </div>
          </div>

        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band reveal">
            <h2>Ready to make an Impact? </h2>
            <p>Discover how TransitionX can transform students into industry-ready engineers.</p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/impact">
                View impact <span className="arrow">→</span>
              </Link>
              <Link className="btn btn-ghost" href="/dates">See key dates</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}