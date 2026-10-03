'use client'

import type { ReactNode } from 'react'
import TxTicker from './TxTicker'

type Props = {
  children: ReactNode
  /** Id of the heading inside the panel, used to name the section. */
  headingId: string
  id?: string
  className?: string
  /** Scrolling label strip along the bottom edge, as on the title hero. */
  ticker?: string[]
}

/** A content section in the same frame, theme and size as the title hero: the
 *  drifting colour bed, the perspective floor, scanlines, vignette and corner
 *  brackets, all behind the content. */
export default function TxPanel({ children, headingId, id, className = '', ticker }: Props) {
  return (
    <section
      className={`px-section px-section--panel ${ticker ? 'tx-panel-wrap--ticker' : ''} ${className}`}
      id={id}
      aria-labelledby={headingId}
    >
      <div className="tx-panel">
        <span className="about-hero-floor" aria-hidden="true" />
        {children}

        <span className="about-corner about-corner--tl" aria-hidden="true" />
        <span className="about-corner about-corner--tr" aria-hidden="true" />
        <span className="about-corner about-corner--bl" aria-hidden="true" />
        <span className="about-corner about-corner--br" aria-hidden="true" />

        {ticker ? <TxTicker items={ticker} /> : null}
      </div>
    </section>
  )
}