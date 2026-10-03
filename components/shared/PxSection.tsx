import type { ReactNode } from 'react'

type Props = {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  center?: boolean
  id?: string
  /** Set on the About and Partners pages so the section renders as a panel with
   *  the same measure and height as the hero frames above it. */
  panel?: boolean
  children: ReactNode
}

/** Content section used under every page hero. Same eyebrow / title / rule
 *  header as the home page, glass cards below. */
export default function PxSection({ eyebrow, title, lead, center, id, panel, children }: Props) {
  return (
    <section className={`px-section ${panel ? 'px-section--panel' : ''}`} id={id}>
      <div className={panel ? 'tx-panel' : 'container'}>
        {panel ? <span className="about-hero-floor" aria-hidden="true" /> : null}
        <header className={`px-head reveal ${center ? 'center' : ''}`}>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <div className="title-rule"></div>
          {lead ? <p className="lead">{lead}</p> : null}
        </header>
        {children}
        {panel ? (
          <>
            <span className="about-corner about-corner--tl" aria-hidden="true" />
            <span className="about-corner about-corner--tr" aria-hidden="true" />
            <span className="about-corner about-corner--bl" aria-hidden="true" />
            <span className="about-corner about-corner--br" aria-hidden="true" />
          </>
        ) : null}
      </div>
    </section>
  )
}
