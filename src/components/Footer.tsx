'use client'

import { Heart, ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container-custom">
        <div className="text-center">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Sital.dev</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Passionate Python Developer and Full Stack Enthusiast dedicated to creating 
              innovative solutions and building meaningful connections in the tech community.
            </p>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="flex items-center justify-center text-gray-400">
              Made with <Heart size={16} className="text-red-500 mx-2" /> by Sital Snigdha Swain
            </p>
            <p className="text-gray-500 mt-2 text-sm">
              © {new Date().getFullYear()} Sital.dev. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </footer>
  )
}

export default Footer 