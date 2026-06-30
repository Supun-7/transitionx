import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">

<div className="footer-logo-banner">
  <span className="footer-wordmark">TRANSITION<span className="footer-wm-x">X</span></span>
</div>

      <div className="container">
        <div className="footer-top">

          <div>
            <p className="f-tagline">Bridging academia and industry, one engineer at a time.</p>
            <p className="f-orgs">IEEE Student Branches of SLIIT &amp; Curtin University Colombo</p>
            <div className="footer-logos-container">
              <Image
                src="/sliitlogo.png"
                alt="SLIIT Logo"
                width={163}
                height={24}
                className="footer-logo-img"
              />
              <span className="footer-logo-divider"></span>
              <Image
                src="/curtin logo.png"
                alt="Curtin University Colombo Logo"
                width={175}
                height={24}
                className="footer-logo-img"
              />
            </div>
            
            <div style={{ marginTop: '24px', display: 'flex', gap: '16px', alignItems: 'center' }}>
              <span style={{ fontSize: '0.88rem', color: 'var(--ink-faint)', fontWeight: 500 }}>Follow us:</span>
              <a 
                href="https://instagram.com/transitionx.official" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ cursor: 'pointer', transition: 'transform 0.2s', display: 'block' }}
                className="hover-scale"
              >
                <div style={{ position: 'relative', width: '28px', height: '28px', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image
                    src="/logo-computer-icons-clip-art-instagram-logo.jpg"
                    alt="Instagram Logo"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </a>
              <a 
                href="https://whatsapp.com/channel/0029VbCw8fD5fM5dbMtn8S19" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ cursor: 'pointer', transition: 'transform 0.2s', display: 'block' }}
                className="hover-scale"
              >
                <div style={{ position: 'relative', width: '28px', height: '28px', borderRadius: '8px', overflow: 'hidden' }}>
                  <Image
                    src="/whatsapp-vector-logo-icon-logotype-vector-social-media_901408-406.avif"
                    alt="WhatsApp Logo"
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h4>Explore</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/process">Process</Link></li>
              </ul>
            </div>
            <div>
              <h4>More</h4>
              <ul>
                <li><Link href="/impact">Impact</Link></li>
                <li><Link href="/dates">Key Dates</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/register">Register</Link></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          <span>&copy; {new Date().getFullYear()} TransitionX · IEEE Student Branches of SLIIT &amp; CUC</span>
          <span>Built for the class that's ready to transition.</span>
        </div>
      </div>

    </footer>
  )
}