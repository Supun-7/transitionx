'use client'
import useReveal from "../../hooks/useReveal"

export default function Register() {
  useReveal()

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* ===== PAGE HEADER ===== */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Register</span>
            <h2>Secure Your Spot.</h2>
            <div className="title-rule"></div>
            <p className="lead" style={{ marginTop: '20px' }}>
              Before filling the registration form, please read all instructions carefully.
              Incomplete or incorrect submissions will not be considered.
            </p>
          </div>
        </div>
      </section>

      {/* ===== WHO CAN APPLY ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Eligibility</span>
            <h2>Who Can Apply?</h2>
            <div className="title-rule"></div>
          </div>
          <div className="grid grid-3">
            {[
              { icon: '🎓', title: 'Final Year Students', desc: 'Open to final-year undergraduate engineering students from SLIIT and Curtin University Colombo.' },
              { icon: '⚙️', title: 'Engineering Disciplines', desc: 'All engineering disciplines welcome — software, electrical, mechanical, civil, and more.' },
              { icon: '🔥', title: 'Driven & Ambitious', desc: 'We look for students who are genuinely hungry to bridge the gap between academia and industry.' },
            ].map((item, i) => (
              <div className={`card reveal d${i + 1}`} key={i}>
                <div className="icon" style={{ fontSize: '1.4rem' }}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INSTRUCTIONS ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Read Before You Register</span>
            <h2>Registration Instructions</h2>
            <div className="title-rule"></div>
          </div>
          <div className="card reveal" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gap: '20px' }}>
              {[
                { num: '01', title: 'Check Your Eligibility', desc: 'Make sure you are a final-year undergraduate engineering student at SLIIT or Curtin University Colombo before proceeding.' },
                { num: '02', title: 'Prepare Your Details', desc: 'Have your full name, university email, student ID, engineering discipline, and year of study ready before opening the form.' },
                { num: '03', title: 'Payment Slip Required', desc: 'You must complete the registration fee payment before submitting the form. Have your payment slip/receipt ready to upload.' },
                { num: '04', title: 'One Submission Only', desc: 'Submit the form only once. Multiple submissions from the same person will be disqualified. Double-check all details before submitting.' },
                { num: '05', title: 'Use Your University Email', desc: 'Register using your official university email address. Personal email submissions may not be accepted.' },
                { num: '06', title: 'Confirmation Email', desc: "After successful submission you will receive a confirmation email within 48 hours. Check your spam folder if you don't see it." },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <div style={{
                    minWidth: '48px', height: '48px', borderRadius: '12px',
                    background: 'rgba(202,140,211,0.12)', border: '1px solid rgba(202,140,211,0.3)',
                    display: 'grid', placeItems: 'center',
                    color: 'var(--lavender)', fontWeight: 700, fontSize: '0.85rem'
                  }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '6px' }}>{step.title}</h3>
                    <p style={{ color: 'var(--ink-soft)', fontSize: '0.97rem' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== REGISTER BUTTON ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band reveal" style={{ textAlign: 'center' }}>
            <h2>Ready to Register?</h2>
            <p>Make sure you have read all instructions and prepared your payment slip before proceeding.</p>
            <div style={{ marginTop: '28px' }}>
              <a
                className="btn btn-primary"
                href="GOOGLE_FORM_LINK_HERE"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: '1.1rem', padding: '16px 36px' }}
              >
                Register Now <span className="arrow">→</span>
              </a>
            </div>
            <p style={{ marginTop: '16px', color: 'var(--ink-faint)', fontSize: '0.88rem' }}>
              You will be redirected to our official Google Form. Please do not close the tab until you receive a confirmation.
            </p>
          </div>
        </div>
      </section>

    </main>
  )
}