'use client'
import Link from "next/link"
import useReveal from "../../hooks/useReveal"

export default function Contact() {
  useReveal()

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* ===== PAGE HEADER ===== */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Contact Us</span>
            <h2>Let&apos;s Start a Conversation.</h2>
            <div className="title-rule"></div>
            <p className="lead" style={{ marginTop: '20px' }}>
              Whether you&apos;re a student ready to transition, a company looking to partner,
              or just curious about TransitionX — we&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CARDS ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Get In Touch</span>
            <h2>Our Organising Team</h2>
            <div className="title-rule"></div>
          </div>
          <div className="grid grid-3">
            <div className="card contact-card reveal d1">
              <div className="icon" style={{ margin: '0 auto 18px', fontSize: '1.4rem' }}>👤</div>
              <div className="role">Programme Lead — SLIIT</div>
              <div className="name">Contact Name</div>
              <div className="ph">
                <a href="tel:+94XXXXXXXXX">+94 XX XXX XXXX</a>
              </div>
            </div>
            <div className="card contact-card reveal d2">
              <div className="icon" style={{ margin: '0 auto 18px', fontSize: '1.4rem' }}>👤</div>
              <div className="role">Programme Lead — CUC</div>
              <div className="name">Contact Name</div>
              <div className="ph">
                <a href="tel:+94XXXXXXXXX">+94 XX XXX XXXX</a>
              </div>
            </div>
            <div className="card contact-card reveal d3">
              <div className="icon" style={{ margin: '0 auto 18px', fontSize: '1.4rem' }}>✉️</div>
              <div className="role">General Enquiries</div>
              <div className="name">Email Us</div>
              <div className="ph">
                <a href="mailto:transitionx@ieee.org">transitionx@ieee.org</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOR COMPANIES ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Industry Partners</span>
            <h2>Interested in Partnering?</h2>
            <div className="title-rule"></div>
          </div>
          <div className="grid grid-2">
            <div className="card reveal d1">
              <div className="icon" style={{ fontSize: '1.4rem' }}>🏢</div>
              <h3>For Companies</h3>
              <p>Want to bring your real challenges to the next generation of engineers? Partner with TransitionX and get access to motivated, talented final-year students.</p>
              <div style={{ marginTop: '20px' }}>
                <a className="btn btn-primary" href="mailto:transitionx@ieee.org?subject=Company Partnership Enquiry">
                  Partner with us <span className="arrow">→</span>
                </a>
              </div>
            </div>
            <div className="card reveal d2">
              <div className="icon" style={{ fontSize: '1.4rem' }}>🎓</div>
              <h3>For Students</h3>
              <p>Ready to make the transition from academia to industry? Register your interest and be the first to know when applications open.</p>
              <div style={{ marginTop: '20px' }}>
                <Link className="btn btn-primary" href="/register">
                  Register interest <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL / FOLLOW ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band reveal">
            <h2>Stay in the Loop</h2>
            <p>Follow our official IEEE Student Branch channels for the latest updates on TransitionX 2026.</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="https://www.linkedin.com/company/ieee-sb-sliit" target="_blank" rel="noopener noreferrer">
                IEEE SB SLIIT <span className="arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="https://www.linkedin.com/company/ieee-sb-cuc" target="_blank" rel="noopener noreferrer">
                IEEE SB CUC
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}