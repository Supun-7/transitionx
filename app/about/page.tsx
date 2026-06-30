'use client'
import Link from "next/link"
import Image from "next/image"
import useReveal from "../../hooks/useReveal"

export default function About() {
  useReveal()

  return (
    <main style={{ paddingTop: '80px' }}>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">About TransitionX</span>
            <h2>Where Ideas Meet Industry</h2>
            <div className="title-rule"></div>
            <p className="lead" style={{ marginTop: '20px' }}>
              TransitionX was born from a simple observation — the gap between what universities
              teach and what industries need is wider than ever. We exist to close that gap.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Our Background</span>
            <h2>Why We Built This</h2>
            <div className="title-rule"></div>
          </div>
          <div className="grid grid-2">
            <div className="card reveal d1">
              <h3>The Problem</h3>
              <p style={{ marginTop: '12px' }}>
                Undergraduates and fresh graduates often complete their degrees with strong theoretical foundations
                but limited real-world exposure. Companies spend months re-training new hires
                on skills that should have been developed during their studies.
              </p>
            </div>
            <div className="card reveal d2">
              <h3>The Solution</h3>
              <p style={{ marginTop: '12px' }}>
                TransitionX bridges this gap through a structured 3-phase programme —
                connecting 3rd/4th-year students and fresh graduates directly with industry partners, real challenges,
                and professional mentors before they ever set foot in an office.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Organized By</span>
            <h2>Two IEEE Student Branches. One Vision.</h2>
            <div className="title-rule"></div>
          </div>
          <div className="grid grid-2">
            <div className="card reveal d1" style={{ textAlign: 'center' }}>
              <div className="about-logo-wrapper">
                <Image
                  src="/sliitlogo.png"
                  alt="SLIIT Logo"
                  width={271}
                  height={40}
                  className="about-card-logo"
                />
              </div>
               <p>Sri Lanka Institute of Information Technology — one of Sri Lanka's leading technology universities, driving innovation through student-led initiatives.</p>
            </div>
            <div className="card reveal d2" style={{ textAlign: 'center' }}>
              <div className="about-logo-wrapper">
                <Image
                  src="/curtin logo.png"
                  alt="Curtin University Colombo Logo"
                  width={292}
                  height={40}
                  className="about-card-logo"
                />
              </div>
              
              <p>The Colombo campus of Curtin University Australia — bringing global academic standards and industry connections to Sri Lanka's engineering community.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">What Drives Us</span>
            <h2>Our Core Values</h2>
            <div className="title-rule"></div>
          </div>
          <div className="grid grid-3">
            {[
              { icon: '🔗', title: 'Collaboration', desc: 'We believe the best outcomes happen when academia and industry work together, not in silos.' },
              { icon: '💡', title: 'Innovation', desc: 'We challenge students to think beyond textbooks and approach real problems with creative solutions.' },
              { icon: '🎯', title: 'Impact', desc: 'Every workshop, every mentorship session, every buildathon challenge is designed with one goal — real impact.' },
              { icon: '🌱', title: 'Growth', desc: 'We create environments where students grow not just technically, but professionally and personally.' },
              { icon: '🤝', title: 'Integrity', desc: 'We hold ourselves to the highest standards — in how we run the programme and how we treat every participant.' },
              { icon: '🚀', title: 'Ambition', desc: 'We set the stage for big ideas. We encourage students to aim higher than they thought possible.' },
            ].map((v, i) => (
              <div className={`card reveal d${(i % 4) + 1}`} key={i}>
                <div className="icon" style={{ fontSize: '1.4rem' }}>{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band reveal">
            <h2>Ready to Make the Transition?</h2>
            <p>Join hundreds of engineering students stepping confidently into the industry.</p>
            <div className="hero-cta">
              <Link className="btn btn-primary" href="/process">
                See how it works <span className="arrow">→</span>
              </Link>
              <Link className="btn btn-ghost" href="/contact">Get in touch</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}