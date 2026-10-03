'use client'

import type { CSSProperties } from 'react'

export type Phase = {
  n: string
  status: 'done' | 'live' | 'soon'
  name: string
  desc: string
}

type Props = {
  phases: readonly Phase[]
  labels: Record<Phase['status'], string>
  /** Seconds for one full pass of all four phases down the road. */
  duration?: number
}

/** The four phases rendered as a road running top to bottom behind the panel
 *  copy. The whole surface — lane dashes, station nodes, cards — travels
 *  downward in one seamless loop, so it reads as driving along a road and
 *  watching the journey pass. Two identical runs sit stacked and the track
 *  shifts by exactly one run, which is what makes the loop invisible. */
export default function PhaseConveyor({ phases, labels, duration = 18 }: Props) {
  return (
    <div className="pc-road" style={{ '--pc-dur': `${duration}s` } as CSSProperties}>
      <div className="pc-lamp" aria-hidden="true" />

      <ol className="pc-stream">
        {[0, 1].map(run => (
          <li className="pc-run" key={run} aria-hidden={run === 1 || undefined}>
            {phases.map(p => (
              <div className={`pc-card pc-card--${p.status}`} key={p.n}>
                <span className="pc-node" aria-hidden="true" />
                <span className={`pc-chip px-chip--${p.status}`}>{labels[p.status]}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
              </div>
            ))}
          </li>
        ))}
      </ol>
    </div>
  )
}
