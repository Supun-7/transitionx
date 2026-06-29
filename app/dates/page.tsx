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
              { date: '15th July 2026', title: 'Informative Webinar', desc: 'Join our online session to uncover the competition structure, review event guidelines, and get a preview of the industry challenge categories.' },
              { date: '18th July 2026', title: 'Company Meetup', desc: 'Meet your industry partners face-to-face. Companies will present their real-world challenges, allowing your team to ask questions and clarify constraints before development begins.' },
              { date: 'Late July (Ongoing)', title: 'Support Sessions', desc: 'Level up your capabilities. Participate in targeted workshops and hands-on training designed to equip you with the practical skills needed to tackle your specific industry problem.' },
              { date: '1st August 2026', title: 'Progress Checkpoint', desc: "Submit your team's formal problem proposal. This document will outline your technical understanding of the challenge and the solution architecture you plan to build." },
              { date: '1st – 18th August 2026', title: 'Company Feedback & Refinement', desc: 'Industry partners will review your checkpoint proposals. Use their professional, constructive feedback to refine your approach, pivot if necessary, and perfect your final deliverable.' },
              { date: 'Prior to the Finale', title: 'Solution Submission', desc: 'Lock in your hard work. Finalize and submit your technical research, code, simulations, or working prototypes for the judges to evaluate.' },
              { date: '22nd August 2026', title: 'Grand Finale Judgement Day', desc: 'The ultimate test of transition. Step onto the stage to pitch your final solutions and run live demonstrations directly for the industry partner panels.' },
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