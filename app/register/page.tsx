'use client'
import Image from "next/image"
import useReveal from "../../hooks/useReveal"
import { InstagramIcon, WhatsAppIcon, LinkedInIcon } from "../../components/Icons"


export default function Register() {
  useReveal()

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
              Please review all instructions carefully before starting your application. With only <strong className="accent-text">25 team slots available</strong>, spaces are highly competitive, and incomplete or incorrect submissions will not be reviewed.
            </p>
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
              { desc: 'Open to 3rd year, 4th year, and fresh graduate students only. (1st and 2nd year students are not eligible).' },
              { desc: 'Innovation requires diverse perspectives. We welcome students from all technical backgrounds, including software, electrical, mechanical, civil engineering, and beyond.' },
              { desc: 'We are seeking relentless problem-solvers who are ready to step out of the classroom and bridge the gap between academic theory and real-world industry execution.' },
            ].map((item, i) => (
              <div className={`card reveal d${i + 1}`} key={i}>
                <p style={{ fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.5, color: 'var(--white)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RULES & REGULATIONS ===== */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Terms &amp; Guidelines</span>
            <h2>Rules &amp; Regulations</h2>
            <div className="title-rule"></div>
          </div>
          <div className="card reveal" style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div className="rules-list">
              {[
                {
                  num: '01',
                  title: 'Eligibility',
                  desc: (
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'grid', gap: '6px', marginTop: '4px' }}>
                      <li>Open to 3rd year, 4th year, and fresh graduate students only.</li>
                      <li>1st and 2nd year students are not eligible.</li>
                      <li>You must provide valid academic details: university name, registration number, student/faculty ID, and degree program.</li>
                      <li>The Organizing Committee may verify your eligibility.</li>
                    </ul>
                  )
                },
                {
                  num: '02',
                  title: 'Team Formation',
                  desc: (
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'grid', gap: '6px', marginTop: '4px' }}>
                      <li>Teams must have a minimum of 1 and a maximum of 3 members.</li>
                      <li>Each participant may only be in one team.</li>
                      <li>Cross-disciplinary and cross-university teams are strongly encouraged.</li>
                      <li>Team changes are only allowed during the registration period: <strong>29 June – 13 July 2026</strong>.</li>
                      <li>No changes will be accepted after the registration period closes.</li>
                    </ul>
                  )
                },
                {
                  num: '03',
                  title: 'Registration',
                  desc: (
                    <>
                      <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'grid', gap: '6px', marginTop: '4px' }}>
                        <li>The Team Leader must be identified at the time of registration.</li>
                        <li>Any team member may submit the form on behalf of the team.</li>
                        <li>All registration details must be accurate. False or incomplete information may lead to disqualification.</li>
                        <li>By registering, you consent to IEEE and the Organizing Committee using your team&apos;s name, photos, and submitted work for promotional purposes across official channels.</li>
                      </ul>
                      <p style={{ marginTop: '10px', fontStyle: 'italic', color: 'var(--lavender)' }}>
                        Your intellectual property remains yours. Commercial use of your solution requires your written consent.
                      </p>
                    </>
                  )
                },
                {
                  num: '04',
                  title: 'Professional Conduct',
                  desc: (
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'grid', gap: '6px', marginTop: '4px' }}>
                      <li>Treat all participants, organizers, mentors, judges, and company representatives with respect.</li>
                      <li>Harassment, discrimination, abusive language, or disruptive behavior will not be tolerated.</li>
                      <li>Follow all instructions issued by the Organizing Committee.</li>
                      <li>Misconduct may result in warnings, disqualification, or removal from the event.</li>
                    </ul>
                  )
                },
                {
                  num: '05',
                  title: 'Withdrawal & Penalties',
                  desc: (
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'grid', gap: '6px', marginTop: '4px' }}>
                      <li>If your team wishes to withdraw, notify the Organizing Committee in writing as soon as possible.</li>
                      <li>Withdrawing after the registration deadline without notice may result in:
                        <div style={{ margin: '8px 0', paddingLeft: '12px', borderLeft: '2px solid var(--lavender)', color: 'var(--white)' }}>
                          Disqualification &middot; Suspension from future IEEE events
                        </div>
                      </li>
                      <li>Penalties may be waived in exceptional cases such as documented medical emergencies.</li>
                    </ul>
                  )
                },
                {
                  num: '06',
                  title: 'Intellectual Property',
                  desc: (
                    <ul style={{ paddingLeft: '20px', listStyleType: 'disc', display: 'grid', gap: '6px', marginTop: '4px' }}>
                      <li>All solutions developed during the competition belong to your team.</li>
                      <li>The Organizing Committee and IEEE will not claim ownership of your work.</li>
                      <li>If a company wishes to use or commercialize your solution, a separate agreement must be made directly with your team.</li>
                    </ul>
                  )
                }
              ].map((step, i) => (
                <div key={i} className="rules-item">
                  <div className="rules-badge">
                    {step.num}
                  </div>
                  <div className="rules-content">
                    <h3>{step.title}</h3>
                    <div className="rules-desc">{step.desc}</div>
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