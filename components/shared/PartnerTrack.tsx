'use client'

import Image from 'next/image'
import useImageFallback, { initialsOf } from '@/hooks/useImageFallback'
import type { LogoMark } from './PartnerCard'

/** One logo tile inside the infinite track. */
function TrackLogo({ name, src, sources, alt }: LogoMark) {
  const { src: current, ok, onError } = useImageFallback(sources ?? [src])
  return (
    <div className="pt-logo">
      <span className="pt-logo-plate">
        {ok ? (
          <Image
            className="pt-logo-img"
            src={current}
            alt={alt ?? name}
            width={200}
            height={90}
            sizes="160px"
            onError={onError}
          />
        ) : (
          <span className="pt-logo-mono" aria-hidden="true">
            {initialsOf(name)}
          </span>
        )}
      </span>
    </div>
  )
}

type RowProps = {
  partners: LogoMark[]
  runs?: number
  row?: number
}

/** Base pace per row, in seconds for a two-mark row — the roster's feel. The
 *  three differ so the lines never fall into lockstep. */
const ROW_PACE = [48, 55, 40]

/** The row length ROW_PACE is tuned against. */
const REFERENCE_MARKS = 2

/** A single infinite scrolling row of partner logos, moving right → left. */
function TrackRow({ partners, runs = 8, row = 0 }: RowProps) {
  /* The keyframe travels half the track's width, so a fixed duration makes a
   * longer row race past. Scaling the duration with the mark count keeps every
   * row at the same px/second, however many names it carries. */
  const pace = ROW_PACE[row] ?? ROW_PACE[0]
  const duration = `${(pace * partners.length) / REFERENCE_MARKS}s`
  // Keyed by position: top-up padding can repeat a mark within one run, so the
  // name alone is not unique.
  const items = Array.from({ length: runs }, (_, r) =>
    partners.map((p, i) => ({ ...p, _key: `${r}-${i}` }))
  ).flat()

  return (
    <div className="pt-row" aria-hidden="true">
      <div className="pt-row-track" style={{ animationDuration: duration }}>
        {items.map(({ _key, ...p }) => (
          <TrackLogo key={_key} {...p} />
        ))}
      </div>
    </div>
  )
}

/** Three staggered infinite rows of partner logos, all moving right → left. */
export default function PartnerTrack({ partners, label = 'Partner logos' }: { partners: LogoMark[]; label?: string }) {
  // Distribute partners across 3 rows by cycling, then pad so all feel full
  const rows: LogoMark[][] = [[], [], []]
  partners.forEach((p, i) => rows[i % 3].push(p))

  const max = Math.max(...rows.map(r => r.length), 1)
  const padded = rows.map(row => {
    const out: LogoMark[] = [...row]
    // Top up short rows one mark at a time, so every row ends up the same
    // length and the three lines carry an even share of the logos.
    for (let i = 0; out.length < max && row.length; i++) out.push(row[i % row.length])
    return out
  })

  return (
    <div className="pt-stage" aria-label={label}>
      {padded.map((row, i) => (
        <TrackRow key={i} partners={row} row={i} runs={8} />
      ))}
    </div>
  )
}
