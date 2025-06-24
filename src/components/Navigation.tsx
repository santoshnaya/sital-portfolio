'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Download, Heart } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = "/sital's resume.pdf"
    link.download = "Sital_Snigdha_Swain_Resume.pdf"
    link.click()
  }

  const navItems = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About', href: '/about', id: 'about' },
    { name: 'Skills', href: '/skills', id: 'skills' },
    { name: 'Projects', href: '/projects', id: 'projects' },
    { name: 'Experience', href: '/experience', id: 'experience' },
    { name: 'Certifications', href: '/certifications', id: 'certifications' },
    { name: 'Contact', href: '/contact', id: 'contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect shadow-lg shadow-pink-100/20' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="handwriting text-2xl md:text-3xl text-gradient font-semibold hover:scale-105 transition-transform duration-300">
            Sital&apos;s Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-slate-600 hover:text-pink-500 transition-all duration-300 font-light hover:scale-105 relative group ${
                  pathname === item.href ? 'text-pink-500' : ''
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 ${
                  pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </Link>
            ))}
            <button
              onClick={downloadResume}
              className="btn-primary text-sm group flex items-center justify-center"
            >
              <Download size={16} className="mr-2 group-hover:scale-110 transition-transform" />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 glass-effect rounded-full hover:bg-pink-50 transition-all duration-300"
          >
            {isOpen ? (
              <X size={24} className="text-slate-600" />
            ) : (
              <Menu size={24} className="text-slate-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="glass-effect rounded-2xl mt-4 p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block w-full text-left text-slate-600 hover:text-pink-500 transition-all duration-300 font-light py-2 hover:pl-4 group ${
                  pathname === item.href ? 'text-pink-500 pl-4' : ''
                }`}
              >
                <span className="relative">
                  {item.name}
                  <Heart size={16} className={`inline ml-2 text-pink-400 transition-all duration-300 ${
                    pathname === item.href ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                </span>
              </Link>
            ))}
            <button
              onClick={downloadResume}
              className="btn-primary text-sm w-full group mt-4 flex items-center justify-center"
            >
              <Download size={16} className="mr-2 group-hover:scale-110 transition-transform" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation 