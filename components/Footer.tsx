import Link from 'next/link'

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