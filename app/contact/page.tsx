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
              <div className="role">Event Chairperson — SLIIT</div>
              <div className="name">Senethmi Wickramanayake</div>
              <div className="ph">
                <a href="tel:+94717144188">+94 71 714 4188</a>
              </div>
              <div className="ph" style={{ marginTop: '4px' }}>
                <a href="mailto:senwickramanayake25@gmail.com" style={{ fontSize: '0.9rem', opacity: 0.85 }}>senwickramanayake25@gmail.com</a>
              </div>
            </div>
            <div className="card contact-card reveal d2">
              <div className="icon" style={{ margin: '0 auto 18px', fontSize: '1.4rem' }}>👤</div>
              <div className="role">Event Chairperson — Curtin University Colombo</div>
              <div className="name">Sanindu Talwatte</div>
              <div className="ph">
                <a href="tel:+94710540797">+94 71 054 0797</a>
              </div>
              <div className="ph" style={{ marginTop: '4px' }}>
                <a href="mailto:sanindutalwatte9@gmail.com" style={{ fontSize: '0.9rem', opacity: 0.85 }}>sanindutalwatte9@gmail.com</a>
              </div>
            </div>
            <div className="card contact-card reveal d3">
              <div className="icon" style={{ margin: '0 auto 18px', fontSize: '1.4rem' }}>✉️</div>
              <div className="role">General Enquiries</div>
              <div className="name">Email Us</div>
              <div className="ph">
                <a href="mailto:[EMAIL_ADDRESS]">transitionx.ieee@gmail.com</a>
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
          <div className="card reveal" style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
            
           
            <p style={{ marginTop: '12px' }}>Want to bring your real challenges to the next generation of engineers? Partner with TransitionX and get access to motivated, talented final-year students.</p>
            <div style={{ marginTop: '20px' }}>
              <a className="btn btn-primary" href="mailto:transitionx.ieee@gmail.com?subject=Company Partnership Enquiry">
                Partner with us <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL / FOLLOW ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band reveal">
            <h2>Stay in the Loop</h2>
            <p>Follow our IEEE Student Branches</p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="https://www.sliit.lk/life-at-sliit/clubs-and-societies/ieee-student-branch-in-sliit" target="_blank" rel="noopener noreferrer">
                IEEE SB SLIIT <span className="arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="https://ieeeofcuc.com/" target="_blank" rel="noopener noreferrer">
                IEEE SB CUC <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}
