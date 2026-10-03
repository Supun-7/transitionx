'use client'

type Props = {
  items: string[]
  /** Seconds for one full pass. Longer lists want a longer run. */
  duration?: number
}

/** The scrolling label strip that runs along the bottom edge of a panel —
 *  the same motion the title hero uses. */
export default function TxTicker({ items, duration = 36 }: Props) {
  return (
    <div className="about-hero-foot" aria-hidden="true">
      <div className="about-hero-ticker">
        <div className="about-hero-ticker-track" style={{ animationDuration: `${duration}s` }}>
          {[0, 1].map(run => (
            <span className="about-hero-ticker-run" key={run}>
              {items.map(item => (
                <span className="about-hero-ticker-item" key={item}>
                  {item}
                  <i />
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}