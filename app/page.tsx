'use client'
import { HeroJungle, HeroOverlay, Phase04Showcase, Phase04Award, PhotoMarquee } from "@/components/home"
import useReveal from "@/hooks/useReveal"

const PHASE_02_PHOTOS = 9
const PHASE_03_PHOTOS = 8

export default function Home() {
  useReveal()

  return (
    <main style={{ paddingTop: '80px' }}>

      {/* ===== HERO ===== */}
      <section className="hero-stage">
        <HeroJungle />
        <HeroOverlay />
      </section>

      {/* ===== CURRENT STAGE ===== */}
      <section className="section current-stage-section">
        <div className="current-stage-backdrop" aria-hidden="true">
          <PhotoMarquee dir="/industry-visits" count={PHASE_03_PHOTOS} label="TransitionX industry visit" />
        </div>

        <div className="current-stage-wash" aria-hidden="true" />

        <div className="current-stage-scrim" aria-hidden="true" />

        <div className="container">
          <div className="current-stage-copy">
          <div className="current-stage-head reveal">
            <span className="eyebrow">Current Stage</span>
            <h2>
              <span className="stage-03-phase">Phase 03</span>
              <span className="stage-03-title">Solution Development</span>
            </h2>
            <div className="title-rule"></div>
            <p className="lead">
              Industry engagement and solution development, running as one stage. Every
              project starts inside a partner company — walking their floors, watching
              live systems, understanding the real problem, then engineering the system
              that answers it.
            </p>
          </div>

          <div className="current-stage-steps reveal d1">
            {[
              { index: '01', label: 'Industry visit', desc: 'On-site immersion inside a partner company.' },
              { index: '02', label: 'Understand the problem', desc: 'Requirements shaped with engineers and mentors.' },
              { index: '03', label: 'Develop the solution', desc: 'Modular components integrated into one deployable system.' },
            ].map(item => (
              <div className="current-stage-step" key={item.index}>
                <span className="current-stage-index">{item.index}</span>
                <h3>{item.label}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ===== PHASE 02: COMPLETED ===== */}
      <section className="section stage-section stage-section--02">
        <div className="stage-backdrop" aria-hidden="true">
          <PhotoMarquee dir="/phase-02" stem="2_" count={PHASE_02_PHOTOS} label="TransitionX workshop session" />
        </div>

        <div className="stage-wash" aria-hidden="true" />

        <div className="stage-scrim" aria-hidden="true" />

        <div className="container">
          <div className="stage-copy">
          <div className="stage-head reveal">
            <span className="eyebrow">Completed Stage</span>
            <h2>
              <span className="stage-phase">Phase 02</span>
              <span className="stage-title">Workshops &amp; Mentoring</span>
            </h2>
            <div className="title-rule"></div>
            <p className="lead">
              Before a line of code gets written, the thinking gets shaped. Targeted
              sessions, hands-on training, and mentor reviews turn a raw brief into a
              solution architecture a team can actually build.
            </p>
          </div>

          <div className="stage-steps reveal d1">
            {[
              { index: '01', label: 'Targeted workshops', desc: 'Focused sessions on the tools and patterns each track depends on.' },
              { index: '02', label: 'Mentor reviews', desc: 'Experienced engineers review architecture, scope, and trade-offs.' },
              { index: '03', label: 'Design the architecture', desc: 'Feedback checkpoints converge into a buildable solution design.' },
            ].map(item => (
              <div className="stage-step" key={item.index}>
                <span className="stage-index">{item.index}</span>
                <h3>{item.label}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      {/* ===== PHASE 04: UPCOMING ===== */}
      <section className="section stage-section stage-section--04">
        <div className="stage-backdrop" aria-hidden="true">
          <Phase04Showcase />
        </div>

        <div className="stage-wash" aria-hidden="true" />

        <div className="stage-scrim" aria-hidden="true" />

        <div className="container">
          <div className="stage-copy">
          <div className="stage-head reveal">
            <span className="eyebrow">Upcoming Stage</span>
            <h2>
              <span className="stage-phase">Phase 04</span>
              <span className="stage-title">Final Showcase</span>
            </h2>
            <div className="title-rule"></div>
            <p className="lead">
              The culmination of everything built so far. Completed solutions go on stage
              in front of an industry panel, and what they are judged on is what they
              have earned — recognition, awards, and the completion of the TransitionX
              journey.
            </p>
          </div>

          <div className="stage-steps reveal d1">
            {[
              { index: '01', label: 'Final pitch', desc: 'Present the completed solution to the industry expert panel.' },
              { index: '02', label: 'Evaluation', desc: 'Judged on technical depth, real-world impact, and delivery.' },
              { index: '03', label: 'Recognition', desc: 'Awards, certificates, and the closing of the TransitionX journey.' },
            ].map(item => (
              <div className="stage-step" key={item.index}>
                <span className="stage-index">{item.index}</span>
                <h3>{item.label}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
          </div>

          <div className="stage-award" aria-hidden="true">
            <Phase04Award />
          </div>
        </div>
      </section>

    </main>
  )
}