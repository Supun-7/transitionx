'use client'
import Link from "next/link"
import useReveal from "../../hooks/useReveal"

export default function Impact() {
  useReveal()

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* ===== PAGE HEADER ===== */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Our Impact</span>
            <h2>Real Students. Real Results.</h2>
            <div className="title-rule"></div>
            <p className="lead" style={{ marginTop: '20px' }}>
              TransitionX isn't just a programme — it's a movement. Here's what happens
              when you put the right students in front of the right industry challenges.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stats reveal">
            <div className="stat">
              <div className="num">200+</div>
              <div className="label">Students Impacted</div>
            </div>
            <div className="stat">
              <div className="num">10+</div>
              <div className="label">Industry Partners</div>
            </div>
            <div className="stat">
              <div className="num">4</div>
              <div className="label">Structured Phases</div>
            </div>
            <div className="stat">
              <div className="num">92%</div>
              <div className="label">Industry Readiness Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== IMPACT AREAS ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">What Changes</span>
            <h2>The TransitionX Effect</h2>
            <div className="title-rule"></div>
          </div>
          <div className="grid grid-3">
            {[
              { icon: '🧠', title: 'Mindset Shift', desc: 'Students stop thinking like students and start thinking like professionals — approaching problems with industry-level clarity.' },
              { icon: '🔧', title: 'Technical Depth', desc: 'Hands-on exposure to real tools, real codebases, and real engineering decisions that textbooks never cover.' },
              { icon: '🤝', title: 'Professional Network', desc: 'Direct connections with industry mentors, company partners, and fellow engineers who are all making the same transition.' },
              { icon: '📊', title: 'Problem Solving', desc: 'Structured exposure to ambiguous, open-ended industry problems builds the kind of critical thinking employers value most.' },
              { icon: '🎯', title: 'Career Clarity', desc: 'Students discover what industries, roles and challenges genuinely excite them — before they sign their first contract.' },
              { icon: '🚀', title: 'Confidence', desc: 'Walking into a job interview having already solved a real industry problem is a confidence that no classroom can manufacture.' },
            ].map((item, i) => (
              <div className={`card reveal d${(i % 4) + 1}`} key={i}>
                <div className="icon" style={{ fontSize: '1.4rem' }}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FOR COMPANIES ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">For Industry Partners</span>
            <h2>Why Companies Partner With Us</h2>
            <div className="title-rule"></div>
          </div>
          <div className="grid grid-2">
            <div className="card reveal d1">
              <div className="icon" style={{ fontSize: '1.4rem' }}>🔍</div>
              <h3>Early Talent Pipeline</h3>
              <p>Identify and engage top engineering talent before they hit the job market. TransitionX gives companies first access to the best graduating engineers.</p>
            </div>
            <div className="card reveal d2">
              <div className="icon" style={{ fontSize: '1.4rem' }}>💡</div>
              <h3>Fresh Perspectives</h3>
              <p>Students bring unfiltered, creative thinking to real company challenges. Some of the best solutions come from people who haven't yet been told "that's not how we do it."</p>
            </div>
            <div className="card reveal d3">
              <div className="icon" style={{ fontSize: '1.4rem' }}>🌱</div>
              <h3>CSR & Brand Building</h3>
              <p>Investing in student development builds genuine goodwill in the engineering community and positions your company as a place where talent wants to grow.</p>
            </div>
            <div className="card reveal d4">
              <div className="icon" style={{ fontSize: '1.4rem' }}>⚡</div>
              <h3>Reduced Onboarding Cost</h3>
              <p>Students who've already engaged with your challenges and culture arrive ready to contribute — cutting the time and cost of traditional onboarding significantly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BAND ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band reveal">
            <h2>Want to Be Part of the Impact?</h2>
            <p>Whether you're a student ready to transition or a company looking for fresh talent — TransitionX has a place for you.</p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/register">
                Register now <span className="arrow">→</span>
              </Link>
              <Link className="btn btn-ghost" href="/contact">Partner with us</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}