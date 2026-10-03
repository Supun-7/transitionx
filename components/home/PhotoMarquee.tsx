'use client'
import Image from 'next/image'

type Props = {
  /** Source folder under /public, e.g. "/phase-02" or "/industry-visits". */
  dir: string
  /** Filename stem of the photos, e.g. "2_" for 2_1.jpeg, or "" for 1.jpeg. */
  stem?: string
  /** How many photos to render in each run. */
  count: number
  /** Alt text describing the photos. */
  label: string
}

function Run({ dir, stem = '', count, label, duplicate = false }: Props & { duplicate?: boolean }) {
  return (
    <div className="ivm-run" aria-hidden={duplicate || undefined}>
      {Array.from({ length: count }, (_, i) => (
        <figure className="ivm-card" key={i}>
          <div className="ivm-media">
            <div className="ivm-photo">
              <Image
                className="ivm-img"
                src={`${dir}/thumbs/${stem}${i + 1}.webp`}
                alt={duplicate ? '' : `${label} ${i + 1}`}
                fill
                sizes="(max-width: 720px) 196px, 262px"
              />
            </div>
          </div>
        </figure>
      ))}
    </div>
  )
}

export default function PhotoMarquee({ dir, stem, count, label }: Props) {
  return (
    <div className="ivm-stack">
      <div className="ivm ivm--rtl">
        <div className="ivm-track">
          <Run dir={dir} stem={stem} count={count} label={label} />
          <Run dir={dir} stem={stem} count={count} label={label} duplicate />
        </div>
      </div>

      <div className="ivm ivm--ltr">
        <div className="ivm-track">
          <Run dir={dir} stem={stem} count={count} label={label} />
          <Run dir={dir} stem={stem} count={count} label={label} duplicate />
        </div>
      </div>
    </div>
  )
}