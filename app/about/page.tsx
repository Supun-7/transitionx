'use client'
import Image from 'next/image'
import useReveal from '@/hooks/useReveal'
import { AboutHero } from '@/components/shared'

const PHASES = [
  { n: '01', status: 'done', name: 'Initial Stage', desc: 'Online kick-off, company introductions, challenge briefings and expert Q&A. Teams are registered, validated, and given their problems.' },
  { n: '02', status: 'done', name: 'Workshops & Mentoring', desc: 'Targeted workshops and mentor reviews shape each brief into a solution architecture a team can actually build.' },
  { n: '03', status: 'live', name: 'Solution Development', desc: 'Industry visits and development run as one stage. Teams walk partner floors, understand the real problem, then build the system that answers it.' },
  { n: '04', status: 'soon', name: 'Final Showcase', desc: 'Live demos and pitches to an industry expert panel, followed by evaluation, awards and certificates.' },
] as const

const STATUS_LABEL: Record<typeof PHASES[number]['status'], string> = {
  done: 'Completed',
  live: 'Current',
  soon: 'Upcoming',
}

export default function About() {
  useReveal()

  return (
    <main className="px-main">
      {/* ===== ABOUT HERO ===== */}
      <AboutHero
        headingId="about-hero-title"
        eyebrow="About TransitionX"
        kicker="Who we are"
        title="Bridging Academia & Industry"
        lead="TransitionX is an industry-driven innovation programme organized by the IEEE Student Branches of SLIIT and Curtin University Colombo. It connects 3rd/4th-year students and fresh graduates with real challenges submitted by industry partners."
        alt="TransitionX team members at a programme session"
      />

      {/* ===== WHY WE EXIST ===== */}
      <AboutHero
        headingId="about-gap-title"
        as="h2"
        variant="alt"
        sources={['/about_1.jpg', '/about_1.jpeg']}
        hudId="TX—GAP"
        tone="BRIDGE ACTIVE"
        spine="TransitionX // The Gap // IEEE"
        eyebrow="Why we exist"
        kicker="The gap"
        title="Closing the gap between classroom and company"
        lead="Students learn the theory. Companies hold the problems. TransitionX puts them in the same room."
        alt="Students and industry engineers working side by side"
        tags={['Real Problems', 'Real Guidance', 'Real Recognition']}
        ticker={['Classroom', 'Company Floor', 'Shared Brief', 'Working Engineers', 'Live Systems', 'One Room']}
      />

      {/* ===== THE JOURNEY — standalone creative timeline ===== */}
      <section className="ab-journey" aria-labelledby="about-journey-title">
        <div className="ab-journey-head reveal">
          <span className="eyebrow ab-journey-eyebrow">
            <i className="ab-journey-pip" aria-hidden="true" />
            The journey
          </span>
          <h2 className="ab-journey-title" id="about-journey-title">
            Four phases, one programme
          </h2>
          <div className="ab-journey-rule" aria-hidden="true" />
          <p className="ab-journey-lead">
            Phases 01 and 02 are complete. Phase 03 is running now. Each stop on the road below is a stage every team moves through, in order.
          </p>
        </div>

        <ol className="ab-phases" aria-label="Programme phases">
          {PHASES.map((p, i) => (
            <li
              key={p.n}
              className={`ab-phase ab-phase--${p.status} reveal`}
              style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
            >
              <span className="ab-phase-num" aria-hidden="true">{p.n}</span>
              <div className="ab-phase-body">
                <span className={`ab-phase-chip ab-phase-chip--${p.status}`}>
                  {STATUS_LABEL[p.status]}
                </span>
                <h3 className="ab-phase-name">{p.name}</h3>
                <p className="ab-phase-desc">{p.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ===== ORGANIZED BY — creative centered section ===== */}
      <section className="ab-orgs" aria-labelledby="about-orgs-title">
        <div className="ab-orgs-head reveal">
          <span className="eyebrow ab-orgs-eyebrow">
            <i className="ab-orgs-pip" aria-hidden="true" />
            Organized by
          </span>
          <h2 className="ab-orgs-title" id="about-orgs-title">
            Two IEEE Student Branches
          </h2>
          <div className="ab-orgs-rule" aria-hidden="true" />
        </div>

        <div className="ab-orgs-grid">
          <div className="ab-org-card reveal d1">
            <span className="ab-org-glow" aria-hidden="true" />
            <span className="ab-org-dot" aria-hidden="true" />
            <Image
              src="/sliitlogo.png"
              alt="SLIIT"
              width={163}
              height={24}
              style={{ width: 'auto', height: '24px' }}
              className="ab-org-logo"
            />
            <h3 className="ab-org-name">IEEE Student Branch<br />of SLIIT</h3>
            <p className="ab-org-desc">Co-organiser of TransitionX 2026.</p>
          </div>

          <div className="ab-org-card reveal d2">
            <span className="ab-org-glow ab-org-glow--b" aria-hidden="true" />
            <span className="ab-org-dot" aria-hidden="true" />
            <Image
              src="/curtin logo.png"
              alt="Curtin University Colombo"
              width={175}
              height={24}
              style={{ width: 'auto', height: '24px' }}
              className="ab-org-logo"
            />
            <h3 className="ab-org-name">IEEE Student Branch<br />of Curtin Colombo</h3>
            <p className="ab-org-desc">Co-organiser of TransitionX 2026.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
