'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <Link className="brand" href="/" aria-label="TransitionX home">
          <Image
            src="/logo.png"
            alt="TransitionX Logo"
            width={140}
            height={40}
            priority
            style={{ objectFit: 'contain' }}
          />
        </Link>

        <button
          className={`nav-toggle ${isOpen ? 'open' : ''}`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="site-menu"
          onClick={() => setIsOpen(v => !v)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav aria-label="Main">
          <ul id="site-menu" className={`nav-links ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}>
            {LINKS.map(l => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={isActive(l.href) ? 'active' : ''}
                  aria-current={isActive(l.href) ? 'page' : undefined}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
