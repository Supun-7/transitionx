'use client'
import useReveal from '@/hooks/useReveal'
import { AboutHero, TxPanel, PartnerTrack } from '@/components/shared'
import type { Partner, LogoMark } from '@/components/shared'

const PARTNERS: Partner[] = [
  { tier: 'Title Partner',       name: 'Virtusa',            src: '/virtusa.png',   sources: ['/virtusa.png', '/virtusa.jpg', '/virtusa.jpeg'],     alt: 'Virtusa' },
  { tier: 'Industry Partner',    name: 'HayWind',            src: '/partner_1.png', sources: ['/partner_1.png', '/partner_1.jpg', '/partner_1.jpeg'], alt: 'HayWind' },
  { tier: 'Enterprise Partner',  name: 'SSS Group Companies',src: '/partner_2.png', sources: ['/partner_2.png', '/partner_2.jpg', '/partner_2.jpeg'], alt: 'SSS Group Companies' },
  { tier: 'Refreshment Partner', name: 'The Potio Bakery',   src: '/partner_3.png', sources: ['/partner_3.png', '/partner_3.jpg', '/partner_3.jpeg'], alt: 'The Potio Bakery' },
  { tier: 'Category Partner',    name: 'INSEE Cement',       src: '/partner_4.png', sources: ['/partner_4.png', '/partner_4.jpg', '/partner_4.jpeg'], alt: 'INSEE Cement' },
  { tier: 'Printing Partner',    name: 'Methuli Premium',    src: '/partner_5.png', sources: ['/partner_5.png', '/parnter_3.png', '/partner_5.jpg'],  alt: 'Methuli Premium' },
]

/* One entry per knowledge partner — kn_N is the company's mark. Swap the
   artwork and nothing else changes. */
const KNOWLEDGE_PARTNERS: LogoMark[] = [
  { name: 'Orel Corporation',    src: '/kn_1.png' },
  { name: 'RYSERA',               src: '/kn_2.png' },
  { name: 'Kawdoco',              src: '/kn_3.png' },
  { name: 'AMSK Constructions',   src: '/kn_4.png' },
  { name: 'Colombo Dockyard PLC', src: '/kn_5.png' },
  { name: 'ARDMEL',               src: '/kn_6.png' },
  { name: 'Keangnam E & C',       src: '/kn_7.png' },
  { name: 'Atlas Axillia',        src: '/kn_8.png' },
  { name: 'Dialog',               src: '/kn_9.png' },
  { name: 'Knowledge Partner 10', src: '/kn_10.png' },
]

export default function Partners() {
  useReveal()

  return (
    <main className="px-main">
      {/* ===== TITLE PARTNER ===== */}
      <AboutHero
        headingId="partners-title-title"
        eyebrow=""
        kicker="Presented by"
        title="Virtusa"
        lead="TransitionX is presented by Virtusa as the title partner of the programme — the organisation backing the programme end to end, from the challenge brief to the final showcase."
        alt="Virtusa team at the TransitionX programme"
        sources={['/title_1.jpg', '/title_1.jpeg']}
        logo={{
          src: '/virtusa.png',
          sources: ['/virtusa.png', '/virtusa.jpg', '/virtusa.jpeg'],
          alt: 'Virtusa',
          width: 2512,
          height: 584,
          caption: 'Title Partner · 2026',
        }}
        hudId="TX—TITLE"
        tone="VIRTUSA"
        spine="TransitionX // Title Partner // IEEE"
        tags={['Programme Sponsor', 'Challenge Partner', 'Mentorship']}
        ticker={['Title Partner', 'Virtusa', 'TransitionX 2026', 'Bridging Academia & Industry']}
      />

      {/* ===== OUR PARTNERS ===== */}
      <TxPanel
        className="px-partners"
        id="our-partners"
        headingId="our-partners-title"
        ticker={PARTNERS.map(p => p.name).concat(['TransitionX 2026', 'Bridging Academia & Industry'])}
      >
        {/* — Heading block, matching the Title Partner hero style — */}
        <div className="pp-head">
          <span className="eyebrow pp-eyebrow">
            <i className="pp-pip" aria-hidden="true" />
            The roster
          </span>
          <h2 className="pp-title" id="our-partners-title">
            Our Partners
          </h2>
          <div className="title-rule pp-rule" aria-hidden="true" />
        </div>

        {/* — Partnership name + company list — */}
        <ul className="pp-names">
          {PARTNERS.map((p, i) => (
            <li key={p.name} className="reveal" style={{ transitionDelay: `${0.5 + i * 0.07}s` }}>
              <span className="pp-names-tier">{p.tier}</span>
              <span className="pp-names-sep">·</span>
              <span className="pp-names-company">{p.name}</span>
            </li>
          ))}
        </ul>

        {/* — Infinite 3-row logo track — */}
        <PartnerTrack partners={PARTNERS} />
      </TxPanel>

      {/* ===== KNOWLEDGE PARTNERS ===== */}
      <TxPanel
        className="px-knowledge"
        id="knowledge-partners"
        headingId="knowledge-title"
        ticker={KNOWLEDGE_PARTNERS.map(p => p.name).concat(['TransitionX 2026', 'Bridging Academia & Industry'])}
      >
        <div className="kn-centre">
          <span className="eyebrow kn-eyebrow">
            <i className="kn-pip" aria-hidden="true" />
            Academic backbone
          </span>
          <h2 className="kn-title" id="knowledge-title">
            Knowledge Partners
          </h2>
          <div className="title-rule kn-rule" aria-hidden="true" />
        </div>

        {/* — Company list, same treatment as the roster above — */}
        <ul className="pp-names">
          {KNOWLEDGE_PARTNERS.map((p, i) => (
            <li key={p.name} className="reveal" style={{ transitionDelay: `${0.5 + i * 0.07}s` }}>
              <span className="pp-names-company">{p.name}</span>
            </li>
          ))}
        </ul>

        {/* — Infinite 3-row logo track — */}
        <PartnerTrack partners={KNOWLEDGE_PARTNERS} label="Knowledge partner logos" />
      </TxPanel>
    </main>
  )
}