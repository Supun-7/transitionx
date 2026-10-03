'use client'

import { useEffect, useState, type ReactNode } from 'react'
import PhotoMarquee from '@/components/home/PhotoMarquee'

type Props = {
  title: string
  eyebrow?: string
  /** Small line above the gradient title, like "Phase 02" on the home page */
  kicker?: string
  lead?: ReactNode
  /** Photo marquee backdrop. Omit for a plain hero on its own colour bed. */
  photos?: { dir: string; stem?: string; count: number; label: string }
  /** Gradient heading with the glitch reveal used on the About and title heroes. */
  glitch?: boolean
  /** Hide the rule under the heading, for a title-only hero. */
  bare?: boolean
  children?: ReactNode
}

/** Same anatomy as the home page stage sections:
 *  photo marquee backdrop → colour wash → scrim → copy block. */
export default function PageHero({ eyebrow, kicker, title, lead, photos, glitch = false, bare = false, children }: Props) {
  const [on, setOn] = useState(false)
  useEffect(() => {
    const id = requestAnimationFrame(() => setOn(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section className={`section stage-section page-hero${photos ? '' : ' page-hero--plain'} ${on ? 'in' : ''}`}>
      {photos ? (
        <div className="stage-backdrop" aria-hidden="true">
          <PhotoMarquee {...photos} />
        </div>
      ) : null}
      <div className="stage-wash" aria-hidden="true" />
      {!photos ? null : <div className="stage-scrim" aria-hidden="true" />}

      <div className="container">
        <div className="stage-copy">
          <div className="stage-head">
            {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
            <h1>
              {kicker ? <span className="stage-phase">{kicker}</span> : null}
              {glitch ? (
                <span className="stage-title tx-glitch" data-text={title}>{title}</span>
              ) : (
                <span className="stage-title">{title}</span>
              )}
            </h1>
            {bare ? null : <div className="title-rule"></div>}
            {lead ? <p className="lead">{lead}</p> : null}
            {children ? <div className="page-hero-cta">{children}</div> : null}
          </div>
        </div>
      </div>
    </section>
  )
}
