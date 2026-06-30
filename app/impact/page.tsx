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
            <span className="eyebrow">Why Partner With Us</span>
            <h2>The Corporate Advantage</h2>
            <div className="title-rule"></div>
            <p className="lead" style={{ marginTop: '20px' }}>
              TransitionX creates lasting value by connecting academia with industry through innovation, collaboration, and practical problem solving. The program empowers organizations to engage with the next generation of engineering and technology professionals.
            </p>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="stats reveal">
            <div className="stat">
              <div className="num">25</div>
              <div className="label">Selected Teams</div>
            </div>
            <div className="stat">
              <div className="num">5</div>
              <div className="label">Technical Domains</div>
            </div>
            <div className="stat">
              <div className="num">2,500+</div>
              <div className="label">Brand Reach</div>
            </div>
            <div className="stat">
              <div className="num">100%</div>
              <div className="label">Industry Focus</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS FOR PARTNERS ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Partner Benefits</span>
            <h2>Why Companies Partner With Us</h2>
            <div className="title-rule"></div>
          </div>
          
          <div className="grid grid-2">
            <div className="card reveal d1">
              <div className="icon" style={{ fontSize: '1.4rem' }}>💡</div>
              <h3>Innovative Solutions</h3>
              <p>Gain creative, research-driven ideas and new perspectives for real business and technical challenges.</p>
            </div>
            <div className="card reveal d2">
              <div className="icon" style={{ fontSize: '1.4rem' }}>🎓</div>
              <h3>Access to Emerging Talent</h3>
              <p>Connect with highly skilled 3rd/4th-year students and fresh graduates for future recruitment and internships.</p>
            </div>
            <div className="card reveal d3">
              <div className="icon" style={{ fontSize: '1.4rem' }}>📢</div>
              <h3>Brand Visibility</h3>
              <p>Showcase your organization through promotions across official platforms, reaching 2,500+ followers and the wider university community.</p>
            </div>
            <div className="card reveal d4">
              <div className="icon" style={{ fontSize: '1.4rem' }}>📈</div>
              <h3>Long-Term Value</h3>
              <p>Build lasting relationships that support industry-academia innovation and future collaboration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPECTED OUTCOMES & IMPACT ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card reveal" style={{ padding: '36px' }}>
            <div className="section-head reveal" style={{ textAlign: 'left', marginBottom: '24px' }}>
              <span className="eyebrow">Outcomes</span>
              <h2>Expected Outcomes &amp; Impact</h2>
              <div className="title-rule" style={{ marginLeft: 0 }}></div>
            </div>
            <ul style={{ display: 'grid', gap: '14px', listStyleType: 'disc', paddingLeft: '20px', fontSize: '1.05rem', color: 'var(--ink-soft)' }}>
              <li>Strengthen partnerships between industry and universities through direct collaboration.</li>
              <li>Enable students to gain practical experience by solving real-world challenges.</li>
              <li>Generate innovative solution concepts that organizations can further explore and develop.</li>
              <li>Enhance students&apos; technical, analytical, and professional skills in real industry scenarios.</li>
              <li>Build a sustainable platform for future industry–academia collaboration, research, and talent development.</li>
            </ul>
          </div>
        </div>
      </section>

     

      {/* ===== CTA BAND ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band reveal" style={{ textAlign: 'center' }}>
            <h2>Partner With Us</h2>
            <p>Bring your real-world challenges to TransitionX and collaborate with the next generation of engineering talent.</p>
            <div style={{ marginTop: '28px' }}>
              <a className="btn btn-primary" href="mailto:transitionx.ieee@gmail.com?subject=Company Partnership Enquiry" style={{ padding: '16px 36px', fontSize: '1.1rem' }}>
                Partner with us <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}