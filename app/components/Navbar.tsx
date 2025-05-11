"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaWhatsapp, FaHome } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center" onClick={handleLinkClick}>
            <Image
              src="/amberrjewelss.jpg"
              alt="AMBERRJEWELSS"
              width={50}
              height={50}
              className="mr-3 rounded-full"
            />
            <span className="font-sans text-2xl text-secondary">AMBERRJEWELSS</span>
            <span className="text-sm text-secondary/70 italic ml-4">Founder: SAKEENA</span>
          </Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {!isHomePage && (
              <Link href="/" className="text-secondary hover:text-primary transition-colors flex items-center gap-2" onClick={handleLinkClick}>
                <FaHome className="text-xl" /> Home
              </Link>
            )}
            <Link href="/products" className="text-secondary hover:text-primary transition-colors" onClick={handleLinkClick}>
              Products
            </Link>
            <Link href="/about" className="text-secondary hover:text-primary transition-colors" onClick={handleLinkClick}>
              About
            </Link>
            <Link href="/contact" className="text-secondary hover:text-primary transition-colors" onClick={handleLinkClick}>
              Contact
            </Link>
            <Link href="https://instagram.com/amberrjewelss" target="_blank" className="text-secondary hover:text-primary transition-colors" onClick={handleLinkClick}>
              Instagram
            </Link>
            <Link href="https://wa.me/916366009883" target="_blank" className="luxury-button flex items-center gap-2" onClick={handleLinkClick}>
              <FaWhatsapp className="text-xl" /> Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {!isHomePage && (
                <Link href="/" className="text-secondary hover:text-primary transition-colors flex items-center gap-2" onClick={handleLinkClick}>
                  <FaHome className="text-xl" /> Home
                </Link>
              )}
              <Link href="/products" className="text-secondary hover:text-primary transition-colors" onClick={handleLinkClick}>
                Products
              </Link>
              <Link href="/about" className="text-secondary hover:text-primary transition-colors" onClick={handleLinkClick}>
                About
              </Link>
              <Link href="/contact" className="text-secondary hover:text-primary transition-colors" onClick={handleLinkClick}>
                Contact
              </Link>
              <Link href="https://instagram.com/amberrjewelss" target="_blank" className="text-secondary hover:text-primary transition-colors" onClick={handleLinkClick}>
                Instagram
              </Link>
              <Link href="https://wa.me/916366009883" target="_blank" className="luxury-button inline-block flex items-center gap-2" onClick={handleLinkClick}>
                <FaWhatsapp className="text-xl" /> Order Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 