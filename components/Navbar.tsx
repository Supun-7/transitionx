'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    return (
    <header className="nav">
        <div className="container nav-inner">
            <Link className="brand" href="/">
            <Image src="/logo.png" alt="TransitionX Logo" width={130} height={60} />
            </Link>
            <button className={`nav-toggle ${isOpen ? 'open' : ''}`} aria-label="Menu" aria-expanded={isOpen ? "true" : "false"} onClick={() => setIsOpen(!isOpen)}>
            <span></span><span></span><span></span>
            </button>

            <nav>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/process">Process</Link></li>
                <li><Link href="/impact">Impact</Link></li>
                <li><Link href="/dates">Key Dates</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li className="nav-register"><Link href="/register">Register</Link></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

