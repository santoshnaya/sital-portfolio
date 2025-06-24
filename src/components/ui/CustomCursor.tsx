'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorInnerRef = useRef<HTMLDivElement>(null)
  const isVisible = useRef(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorInner = cursorInnerRef.current
    
    if (!cursor || !cursorInner) return

    // Initial setup
    gsap.set(cursor, { 
      xPercent: -50, 
      yPercent: -50,
      scale: 0
    })
    
    gsap.set(cursorInner, { 
      xPercent: -50, 
      yPercent: -50,
      scale: 0
    })

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible.current) {
        isVisible.current = true
        gsap.to(cursor, { 
          scale: 1, 
          duration: 0.2, 
          ease: "back.out(1.7)" 
        })
        gsap.to(cursorInner, { 
          scale: 1, 
          duration: 0.15, 
          delay: 0.05,
          ease: "back.out(1.7)" 
        })
      }

      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power3.out"
      })

      gsap.to(cursorInner, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
        ease: "none"
      })
    }

    // Mouse leave handler
    const handleMouseLeave = () => {
      isVisible.current = false
      gsap.to([cursor, cursorInner], { 
        scale: 0, 
        duration: 0.2 
      })
    }

    // Image hover handlers
    const handleImageHover = () => {
      gsap.to(cursor, {
        scale: 2.5,
        background: "conic-gradient(from 0deg, #ec4899, #f97316, #ec4899, #8b5cf6, #ec4899)",
        borderWidth: "0px",
        duration: 0.25,
        ease: "back.out(2)"
      })
      
      gsap.to(cursorInner, {
        scale: 0.2,
        backgroundColor: "#ffffff",
        duration: 0.2,
        ease: "back.out(2)"
      })

      // Add sparkle effect with gradient colors
      gsap.fromTo(cursor, 
        { boxShadow: "0 0 0px rgba(236, 72, 153, 0)" },
        { 
          boxShadow: "0 0 30px rgba(236, 72, 153, 0.6), 0 0 60px rgba(139, 92, 246, 0.3), 0 0 90px rgba(249, 115, 22, 0.2)",
          duration: 0.3,
          ease: "power2.out"
        }
      )

      // Add rotation animation to the gradient ring
      gsap.to(cursor, {
        rotation: 360,
        duration: 3,
        ease: "none",
        repeat: -1
      })
    }

    const handleImageLeave = () => {
      // Kill the rotation animation
      gsap.killTweensOf(cursor, "rotation")
      
      gsap.to(cursor, {
        scale: 1,
        background: "rgba(0, 0, 0, 0.1)",
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: "2px",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
        rotation: 0,
        duration: 0.25,
        ease: "back.out(1.7)"
      })
      
      gsap.to(cursorInner, {
        scale: 1,
        backgroundColor: "#000000",
        duration: 0.3,
        ease: "back.out(1.7)"
      })
    }

    // Button/Link hover handlers
    const handleInteractiveHover = () => {
      gsap.to(cursor, {
        scale: 1.3,
        background: "linear-gradient(45deg, rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))",
        borderWidth: "0px",
        duration: 0.2,
        ease: "back.out(2)"
      })
      
      gsap.to(cursorInner, {
        scale: 0.6,
        backgroundColor: "#ec4899",
        duration: 0.15,
        ease: "back.out(2)"
      })

      // Add subtle gradient glow effect
      gsap.to(cursor, {
        boxShadow: "0 0 20px rgba(236, 72, 153, 0.4), 0 0 40px rgba(139, 92, 246, 0.2)",
        duration: 0.3,
        ease: "power2.out"
      })
    }

    const handleInteractiveLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        background: "rgba(0, 0, 0, 0.1)",
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: "2px",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
        duration: 0.25,
        ease: "back.out(1.7)"
      })
      
      gsap.to(cursorInner, {
        scale: 1,
        backgroundColor: "#000000",
        duration: 0.2,
        ease: "back.out(1.7)"
      })
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Add hover effects to images
    const images = document.querySelectorAll('img, [data-cursor-image]')
    images.forEach(img => {
      img.addEventListener('mouseenter', handleImageHover)
      img.addEventListener('mouseleave', handleImageLeave)
    })

    // Text hover handlers (more subtle)
    const handleTextHover = () => {
      gsap.to(cursor, {
        scale: 1.1,
        background: "radial-gradient(circle, rgba(236, 72, 153, 0.1), rgba(236, 72, 153, 0.05))",
        borderWidth: "0px",
        duration: 0.2,
        ease: "power2.out"
      })
      
      gsap.to(cursorInner, {
        scale: 0.8,
        backgroundColor: "#ec4899",
        duration: 0.15,
        ease: "power2.out"
      })
    }

    const handleTextLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        background: "rgba(0, 0, 0, 0.1)",
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: "2px",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
        duration: 0.2,
        ease: "power2.out"
      })
      
      gsap.to(cursorInner, {
        scale: 1,
        backgroundColor: "#000000",
        duration: 0.15,
        ease: "power2.out"
      })
    }

    // Add hover effects to interactive elements
    const buttons = document.querySelectorAll('button, [data-cursor-interactive]')
    buttons.forEach(element => {
      element.addEventListener('mouseenter', handleInteractiveHover)
      element.addEventListener('mouseleave', handleInteractiveLeave)
    })

    // Add subtle hover effects to links and text
    const textElements = document.querySelectorAll('a:not(button), [data-cursor-text]')
    textElements.forEach(element => {
      element.addEventListener('mouseenter', handleTextHover)
      element.addEventListener('mouseleave', handleTextLeave)
    })

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      
      images.forEach(img => {
        img.removeEventListener('mouseenter', handleImageHover)
        img.removeEventListener('mouseleave', handleImageLeave)
      })
      
      buttons.forEach(element => {
        element.removeEventListener('mouseenter', handleInteractiveHover)
        element.removeEventListener('mouseleave', handleInteractiveLeave)
      })

      textElements.forEach(element => {
        element.removeEventListener('mouseenter', handleTextHover)
        element.removeEventListener('mouseleave', handleTextLeave)
      })
    }
  }, [])

  return (
    <>
      {/* Outer cursor */}
      <div
        ref={cursorRef}
        className="custom-cursor fixed top-0 left-0 w-12 h-12 border-2 border-black/20 bg-black/10 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          backdropFilter: 'blur(2px)',
          boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
        }}
      />
      
      {/* Inner cursor dot */}
      <div
        ref={cursorInnerRef}
        className="custom-cursor fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        }}
      />
      
      {/* Trailing particles effect */}
      <div className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9998]">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-pink-400/30 rounded-full"
            style={{
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
      </div>
    </>
  )
}

export default CustomCursor 