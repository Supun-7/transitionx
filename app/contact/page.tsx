'use client'
import { useState } from 'react'
import useReveal from '@/hooks/useReveal'
import { PageHero, InstagramIcon, WhatsAppIcon } from '@/components/shared'

const MAIL = 'transitionx.ieee@gmail.com'

const PEOPLE = [
  { role: 'Event Co-Chair, SLIIT', name: 'Senethmi Wickramanayake', tel: '+94717144188', phone: '+94 71 714 4188', email: 'senwickramanayake25@gmail.com' },
  { role: 'Event Co-Chair, Curtin University Colombo', name: 'Sanindu Talwatte', tel: '+94710540797', phone: '+94 71 054 0797', email: 'sanindutalwatte9@gmail.com' },
]

export default function Contact() {
  useReveal()
  const [f, setF] = useState({ name: '', email: '', who: 'Student', msg: '' })
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setF(v => ({ ...v, [k]: e.target.value }))

  const send = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `${f.msg}\n\n— ${f.name} (${f.who})\n${f.email}`
    window.location.href = `mailto:${MAIL}?subject=${encodeURIComponent(`TransitionX enquiry from ${f.name}`)}&body=${encodeURIComponent(body)}`
  }

  return (
    <main className="px-main">
      <PageHero title="Contact Us" glitch bare />

      <section className="px-section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="px-quick reveal">
            <a className="btn btn-primary" href={`mailto:${MAIL}`}>Email us</a>
            <a className="btn btn-ghost" href="https://instagram.com/transitionx.official" target="_blank" rel="noopener noreferrer"><InstagramIcon style={{ width: 18, height: 18 }} /> Instagram</a>
            <a className="btn btn-ghost" href="https://whatsapp.com/channel/0029VbCw8fD5fM5dbMtn8S19" target="_blank" rel="noopener noreferrer"><WhatsAppIcon style={{ width: 18, height: 18 }} /> WhatsApp channel</a>
          </div>
        </div>
      </section>

      {/* ===== EVENT CO-CHAIRS — direct numbers ===== */}
      <section className="px-section">
        <div className="container">
          <header className="px-head center">
            <span className="eyebrow">Event co-chairs</span>
            <h2>Call the organisers</h2>
            <div className="title-rule"></div>
            <p className="lead">Tap a number to call, or send an email straight to the co-chair you need.</p>
          </header>

          <div className="px-grid px-grid--2">
            {PEOPLE.map((p, i) => (
              <div className={`card px-person reveal d${i + 1}`} key={p.name}>
                <div className="role">{p.role}</div>
                <div className="name">{p.name}</div>

                <a className="px-person-tel" href={`tel:${p.tel}`} aria-label={`Call ${p.name} on ${p.phone}`}>
                  <span className="px-person-tel-num">{p.phone}</span>
                  <span className="px-person-tel-cta">Call</span>
                </a>

                <a className="px-person-mail" href={`mailto:${p.email}`} aria-label={`Email ${p.name}`}>
                  {p.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== MESSAGE FORM ===== */}
      <section className="px-section">
        <div className="container ct-form-wrap">
          <header className="px-head center">
            <span className="eyebrow">Send a message</span>
            <h2>We reply by email</h2>
            <div className="title-rule"></div>
          </header>

          <form className="px-form reveal" onSubmit={send}>
            <div className="px-field"><label htmlFor="n">Your name</label><input id="n" required autoComplete="name" value={f.name} onChange={set('name')} /></div>
            <div className="px-field"><label htmlFor="e">Email</label><input id="e" type="email" required autoComplete="email" inputMode="email" value={f.email} onChange={set('email')} /></div>
            <div className="px-field"><label htmlFor="w">I am a</label>
              <select id="w" value={f.who} onChange={set('who')}><option>Student</option><option>Company</option><option>Other</option></select>
            </div>
            <div className="px-field"><label htmlFor="m">Message</label><textarea id="m" required value={f.msg} onChange={set('msg')} /></div>
            <button className="btn btn-primary" type="submit">Send message <span className="arrow">→</span></button>
            <p className="px-form-note">This opens your email app with the message ready to send.</p>
          </form>
        </div>
      </section>
    </main>
  )
}