'use client'

import Image from 'next/image'
import useImageFallback, { initialsOf } from '@/hooks/useImageFallback'

/** The minimum a logo mark needs. `alt` falls back to the name. */
export type LogoMark = {
  name: string
  src: string
  sources?: string[]
  alt?: string
}

export type Partner = LogoMark & {
  tier: string
}

type Props = Partner & {
  /** Stagger index for the entrance reveal. */
  i?: number
}

/** One partner slot. Tries each candidate file in turn so a logo that has not
 *  landed yet shows a monogram plate instead of a broken image. Every mark sits
 *  on its own white plate so the full range of supplied logos reads. */
export default function PartnerCard({ tier, name, src, sources, alt, i = 0 }: Props) {
  const { src: current, ok, onError } = useImageFallback(sources ?? [src])

  return (
    <div className="pn-card reveal" style={{ transitionDelay: `${0.08 * (i + 1)}s` }}>
      <span className="pn-tier">{tier}</span>
      <span className="pn-plate">
        {ok ? (
          <Image
            className="pn-logo"
            src={current}
            alt={alt ?? name}
            width={280}
            height={120}
            sizes="(max-width: 640px) 60vw, (max-width: 960px) 30vw, 260px"
            onError={onError}
          />
        ) : (
          <span className="pn-mono" aria-hidden="true">
            {initialsOf(name)}
          </span>
        )}
      </span>
      <h3 className="pn-name">{name}</h3>
    </div>
  )
}