
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return(
        <footer className="footer">
            <div className="container">
            <div className="footer-top">
                <div>
                <Image src="/logo.png" alt="TransitionX Logo" width={100} height={50} />
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
                <li className="nav-register"><Link href="/register">Register</Link></li>
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