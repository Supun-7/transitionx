import type { ReactNode } from 'react'

type FeatureCardProps = {
  index: string
  icon: string
  title: string
  body: string
  delay?: 1 | 2 | 3 | 4
  /** 'plain' | 'branch' — branch cards carry the brand gradient border */
  variant?: 'plain' | 'branch'
  children?: ReactNode
}

export default function FeatureCard({
  index,
  icon,
  title,
  body,
  delay = 1,
  variant = 'plain',
  children,
}: FeatureCardProps) {
  const variantClass = variant !== 'plain' ? `feature-card--${variant}` : ''

  return (
    <article className={`feature-card reveal d${delay} ${variantClass}`.trim()}>
      <div className="feature-card-top">
        <span className="feature-card-glyph" aria-hidden="true">{icon}</span>
        <span className="feature-card-index">{index}</span>
      </div>

      <h3 className="feature-card-title">{title}</h3>
      <p className="feature-card-body">{body}</p>
      {children}

      <span className="feature-card-rule" aria-hidden="true" />
      <span className="feature-card-corner" aria-hidden="true" />
    </article>
  )
}