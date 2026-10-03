'use client'

import Image from 'next/image'
import useImageFallback, { initialsOf } from '@/hooks/useImageFallback'
import type { Partner } from './PartnerCard'

type Props = Partner & {
  /** Stagger index for the entrance reveal. */
  i?: number
}

/** One partner mark on the partners field. No plate behind it — the marks sit
 *  straight on the panel, as they do in the title hero's lockup. */
export default function ScatterLogo({ name, src, sources, alt, i = 0 }: Props) {
  const list = sources ?? [src]
  const { src: current, ok, onError } = useImageFallback(list)

  return (
    <div className="pp-mark reveal" style={{ transitionDelay: `${0.14 + i * 0.09}s` }}>
      <span className="pp-mark-plate">
        {ok ? (
          <Image
            className="pp-mark-img"
            src={current}
            alt={alt ?? name}
            width={280}
            height={120}
            sizes="(max-width: 720px) 40vw, 170px"
            onError={onError}
          />
        ) : (
          <span className="pp-mark-mono" aria-hidden="true">
            {initialsOf(name)}
          </span>
        )}
      </span>
    </div>
  )
}