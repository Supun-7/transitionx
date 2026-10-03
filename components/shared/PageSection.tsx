import type { ReactNode } from 'react'
import AxisLabel from './AxisLabel'

type PageSectionProps = {
  /** Two-digit ordinal shown in the rail, e.g. "01" */
  index: string
  /** Text on the left vertical axis for this section */
  axis: string
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  children?: ReactNode
  /** Alternate the backdrop wash so consecutive sections read as distinct bands */
  tone?: 'deep' | 'raised'
  /** Text alignment: 'left' | 'right' | 'center' */
  align?: 'left' | 'right' | 'center'
}

export default function PageSection({
  index,
  axis,
  eyebrow,
  title,
  lead,
  children,
  tone = 'deep',
  align = 'center',
}: PageSectionProps) {
  const alignClass = align !== 'center' ? `page-section--align-${align}` : ''

  return (
    <section className={`page-section page-section--${tone} ${alignClass}`}>
      <AxisLabel text={axis} className="page-section-axis" />

      <div className="container">
        <header className="page-section-head reveal">
          <div className="page-section-rail" aria-hidden="true">
            <span className="page-section-index">{index}</span>
            <span className="page-section-index-rule" />
          </div>

          <span className="eyebrow">{eyebrow}</span>
          <h2 className="page-section-title">{title}</h2>
          <div className="title-rule" />
          {lead ? <p className="lead page-section-lead">{lead}</p> : null}
        </header>

        {children ? <div className="page-section-body reveal">{children}</div> : null}
      </div>
    </section>
  )
}