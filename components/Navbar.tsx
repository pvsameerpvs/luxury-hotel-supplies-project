'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur shadow-md' : 'bg-white/85 backdrop-blur border-b border-borderGray'
      }`}
    >
      <div className="container-lux">
        <div className="flex h-[80px] md:h-[96px] items-center justify-between">
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo.png" 
              alt="Luxury Hotel Supplies Logo" 
              width={240}
              height={75}
              className="w-[160px] md:w-[240px] h-[50px] md:h-[75px] object-contain py-1"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.path}
                className={`text-sm font-semibold transition-colors hover:text-gold ${
                  pathname === link.path ? 'text-gold' : 'text-foreground/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:043258275"
              className="inline-flex items-center rounded-luxury border border-borderGray bg-white px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-gray-50"
            >
              Call 043258275
            </a>
            <Link href="/contact#contact-form" className="btn-gold py-2 px-5 text-sm">
              Request Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center rounded-luxury border border-borderGray bg-white p-2 text-foreground hover:bg-gray-50 transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {isOpen ? (
          <div className="md:hidden pb-5">
            <div className="card-lux p-4">
              <nav className="flex flex-col gap-2">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-luxury px-3 py-2 text-sm font-semibold transition hover:bg-gray-50 ${
                      pathname === link.path ? 'text-gold' : 'text-foreground'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-4 grid gap-2">
                <a href="tel:043258275" className="btn-ghost px-4 py-2 text-center">
                  Call 043258275
                </a>
                <Link href="/contact#contact-form" onClick={() => setIsOpen(false)} className="btn-gold px-4 py-2 text-center">
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
