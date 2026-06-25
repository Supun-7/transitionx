'use client'
import Link from "next/link"
import useReveal from "../../hooks/useReveal"

export default function Process() {
  useReveal()

  return (
    <main style={{ paddingTop: '80px' }}>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">The Process</span>
            <h2>Four Phases. One Transformation.</h2>
            <div className="title-rule"></div>
            <p className="lead" style={{ marginTop: '20px' }}>
              TransitionX is built around a structured 4-phase journey — each phase designed
              to progressively close the gap between academic knowledge and industry readiness.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="rail reveal">
            <div className="rail-track" />
            <div className="rail-nodes">
              {[
                { num: '01', name: 'Company Engagement', desc: 'Industry meets campus' },
                { num: '02', name: 'Skill Accelerator', desc: 'Targeted workshops' },
                { num: '03', name: 'Mentorship Track', desc: 'Guided by experts' },
                { num: '04', name: 'Industry Buildathon', desc: 'The final showcase' },
              ].map((p, i) => (
                <div className="rail-node" key={i}>
                  <div className="bead">{p.num}</div>
                  <div className="pname">{p.name}</div>
                  <div className="pdesc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">

          <div className="phase card reveal d1" style={{ marginBottom: '28px' }}>
            <div className="phase-main">
              <span className="phase-tag">PHASE 01</span>
              <h3>Company Engagement</h3>
              <p className="phase-sub">Where industry meets the next generation</p>
              <ul>
                <li>Partner companies present real-world challenges to students</li>
                <li>Students gain direct exposure to industry problems and expectations</li>
                <li>Teams are formed around company challenge domains</li>
                <li>Initial briefings and problem statements are distributed</li>
              </ul>
            </div>
            <div className="outcome card">
              <div className="ol">Phase Outcome</div>
              <p>Students leave with a clear understanding of a real industry challenge and a team ready to tackle it.</p>
            </div>
          </div>

          <div className="phase card reveal d2" style={{ marginBottom: '28px' }}>
            <div className="phase-main">
              <span className="phase-tag">PHASE 02</span>
              <h3>Skill Accelerator</h3>
              <p className="phase-sub">Closing the gap between theory and practice</p>
              <ul>
                <li>Targeted workshops on industry-relevant skills</li>
                <li>Hands-on sessions covering technical and soft skills</li>
                <li>Expert-led training aligned to company challenge requirements</li>
                <li>Peer learning and collaborative problem-solving sessions</li>
              </ul>
            </div>
            <div className="outcome card">
              <div className="ol">Phase Outcome</div>
              <p>Students are equipped with the specific skills needed to approach their industry challenge with confidence.</p>
            </div>
          </div>

          <div className="phase card reveal d3" style={{ marginBottom: '28px' }}>
            <div className="phase-main">
              <span className="phase-tag">PHASE 03</span>
              <h3>Mentorship Track</h3>
              <p className="phase-sub">Guided by those who&apos;ve walked the path</p>
              <ul>
                <li>Each team is paired with an industry professional mentor</li>
                <li>Regular mentorship sessions to guide solution development</li>
                <li>Feedback loops between students, mentors and company partners</li>
                <li>Professional development coaching alongside technical guidance</li>
              </ul>
            </div>
            <div className="outcome card">
              <div className="ol">Phase Outcome</div>
              <p>Teams have a refined, mentor-validated solution approach ready for the final buildathon.</p>
            </div>
          </div>

          <div className="phase card reveal d4" style={{ marginBottom: '28px' }}>
            <div className="phase-main">
              <span className="phase-tag">PHASE 04</span>
              <h3>Industry Buildathon</h3>
              <p className="phase-sub">The ultimate test of transition</p>
              <ul>
                <li>Teams present final solutions to industry partner panels</li>
                <li>Live demonstrations and technical evaluations</li>
                <li>Industry judges assess real-world applicability and innovation</li>
                <li>Top teams recognized and connected with industry opportunities</li>
              </ul>
            </div>
            <div className="outcome card">
              <div className="ol">Phase Outcome</div>
              <p>Students walk away with real industry exposure, professional connections, and proof of their capabilities.</p>
            </div>
          </div>

        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="cta-band reveal">
            <h2>See the Impact We&apos;ve Made</h2>
            <p>Discover how TransitionX has transformed students into industry-ready engineers.</p>
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