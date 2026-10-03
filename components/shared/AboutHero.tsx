'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import Image from 'next/image'

type Props = {
  eyebrow: string
  kicker: string
  title: string
  lead: ReactNode
  alt: string
  image?: string
  sources?: string[]
  tags?: string[]
  ticker?: string[]
  hudId?: string
  spine?: string
  headingId: string
  as?: 'h1' | 'h2'
  variant?: 'lead' | 'alt' | 'journey'
  tone?: string
  /** Rendered beside the copy inside the frame, in place of the photo. */
  backdrop?: ReactNode
  showImage?: boolean
  /** Highlighted logo lockup, set into the copy block under the lead. */
  logo?: {
    src: string
    sources?: string[]
    alt: string
    width?: number
    height?: number
    caption?: string
  }
}

const DEFAULT_TAGS = ['IEEE SLIIT', 'Curtin Colombo', 'Industry Driven', '2026']
const DEFAULT_TICKER = [
  'Academia × Industry',
  'Real Challenges',
  'Mentorship',
  'Live Showcase',
  'Student Teams',
  'Industry Panel',
]
const DEFAULT_SOURCES = ['/about.jpg', '/about.jpeg']

export default function AboutHero({
  eyebrow,
  kicker,
  title,
  lead,
  alt,
  image,
  sources = DEFAULT_SOURCES,
  tags = DEFAULT_TAGS,
  ticker = DEFAULT_TICKER,
  hudId = 'TX—2026',
  spine = 'TransitionX // About // IEEE',
  headingId,
  as = 'h1',
  variant = 'lead',
  tone = 'SYSTEM ONLINE',
  backdrop,
  showImage = true,
  logo,
}: Props) {
  const [on, setOn] = useState(false)
  const [srcStep, setSrcStep] = useState(0)
  const [imgOk, setImgOk] = useState(true)
  const [logoStep, setLogoStep] = useState(0)
  const [logoOk, setLogoOk] = useState(true)
  const frameRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = frameRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setOn(true)
      return
    }
    const io = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          setOn(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const src = image ?? sources[srcStep]
  const handleError = () => {
    if (image === undefined && srcStep + 1 < sources.length) setSrcStep(step => step + 1)
    else setImgOk(false)
  }

  const logoList = logo ? (logo.sources ?? [logo.src]) : []
  const logoSrc = logoList[logoStep]
  const handleLogoError = () => {
    if (logoStep + 1 < logoList.length) setLogoStep(step => step + 1)
    else setLogoOk(false)
  }

  const Heading = as

  return (
    <section
      ref={frameRef}
      className={`about-hero about-hero--${variant} ${on ? 'in' : ''}`}
      aria-labelledby={headingId}
    >
      <div className="about-hero-frame">
        <div className="about-hero-media">
          <div className="about-hero-bed" aria-hidden="true" />
          {showImage && imgOk ? (
            <Image
              className="about-hero-img"
              src={src}
              alt={alt}
              fill
              priority={variant === 'lead'}
              sizes="(max-width: 1100px) 100vw, 1020px"
              onError={handleError}
            />
          ) : null}
          <div className="about-hero-tint" aria-hidden="true" />
          <div className="about-hero-floor" aria-hidden="true" />
          <div className="about-hero-scanlines" aria-hidden="true" />
          <div className="about-hero-sweep" aria-hidden="true" />
          <div className="about-hero-grain" aria-hidden="true" />
          <div className="about-hero-vignette" aria-hidden="true" />
        </div>

        <div className="about-hero-hud" aria-hidden="true">
          <span className="about-hero-hud-id">{hudId}</span>
          <span className="about-hero-hud-ticks">
            {Array.from({ length: 12 }, (_, i) => (
              <i key={i} />
            ))}
          </span>
          <span className="about-hero-hud-status">
            <b />
            {tone}
          </span>
        </div>

        <div className="about-hero-spine" aria-hidden="true">
          <span className="about-hero-spine-text">{spine}</span>
        </div>

        <div className="about-hero-panel">
          <div className="about-hero-copy">
            <span className="eyebrow about-hero-eyebrow">
              <i className="about-hero-pip" aria-hidden="true" />
              {eyebrow}
            </span>

            <Heading className="about-hero-heading" id={headingId}>
              <span className="about-hero-kicker">{kicker}</span>
              <span className="tx-glitch" data-text={title}>
                {title}
              </span>
            </Heading>

            <div className="title-rule about-hero-rule" aria-hidden="true" />

            <p className="lead about-hero-lead">{lead}</p>

            {logo ? (
              <figure className="ah-logo">
                <span className="ah-logo-plate">
                  {logoOk ? (
                    <Image
                      className="ah-logo-img"
                      src={logoSrc}
                      alt={logo.alt}
                      width={logo.width ?? 300}
                      height={logo.height ?? 150}
                      sizes="(max-width: 900px) 220px, 260px"
                      onError={handleLogoError}
                    />
                  ) : (
                    <span className="ah-logo-fallback">{logo.caption ?? logo.alt}</span>
                  )}
                </span>
                {logo.caption ? (
                  <figcaption className="ah-logo-caption">{logo.caption}</figcaption>
                ) : null}
              </figure>
            ) : null}

            <ul className="about-hero-tags">
              {tags.map((t, i) => (
                <li key={t} style={{ transitionDelay: `${0.62 + i * 0.09}s` }}>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {backdrop ? <div className="about-hero-scene">{backdrop}</div> : null}
        </div>

        <div className="about-hero-foot" aria-hidden="true">
          <div className="about-hero-ticker">
            <div className="about-hero-ticker-track">
              {[0, 1].map(run => (
                <span className="about-hero-ticker-run" key={run}>
                  {ticker.map(item => (
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

        <span className="about-corner about-corner--tl" aria-hidden="true" />
        <span className="about-corner about-corner--tr" aria-hidden="true" />
        <span className="about-corner about-corner--bl" aria-hidden="true" />
        <span className="about-corner about-corner--br" aria-hidden="true" />
      </div>
    </section>
  )
}
