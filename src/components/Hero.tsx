'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { MapPin, Mail, Github, Linkedin, Twitter, Heart, Sparkles } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const decorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 })
    
    tl.fromTo(imageRef.current, 
      { scale: 0, opacity: 0, rotation: -10 },
      { scale: 1, opacity: 1, rotation: 0, duration: 1.2, ease: "back.out(1.7)" }
    )
    .fromTo(titleRef.current,
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.6"
    )
    .fromTo(subtitleRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(decorRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.3"
    )

    gsap.to(imageRef.current, {
      y: -15,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    })

    gsap.to(decorRef.current, {
      rotation: 360,
      duration: 20,
      repeat: -1,
      ease: "none"
    })
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div ref={decorRef} className="absolute top-20 right-20 w-32 h-32 opacity-30 text-pink-300">
        <Sparkles size={128} />
      </div>
      
      {/* Floating Background Shapes */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 floating-animation"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-rose-200 to-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-60 floating-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 floating-animation" style={{animationDelay: '4s'}}></div>
      
      {/* Additional Animated Elements */}
      <div className="absolute top-32 left-1/3 w-4 h-4 bg-pink-400 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-32 left-1/2 w-3 h-3 bg-purple-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-rose-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/4 left-1/6 w-5 h-5 bg-pink-300 rounded-full opacity-50 animate-pulse" style={{animationDelay: '3s'}}></div>
      
      {/* Floating Icons Scattered */}
      <div className="absolute top-16 left-1/4 text-pink-300 opacity-40 floating-animation" style={{animationDelay: '1s'}}>
        <Heart size={20} />
      </div>
      <div className="absolute bottom-24 right-1/4 text-purple-300 opacity-40 floating-animation" style={{animationDelay: '3s'}}>
        <Sparkles size={24} />
      </div>
      <div className="absolute top-1/3 right-1/6 text-rose-300 opacity-40 floating-animation" style={{animationDelay: '5s'}}>
        <Heart size={16} />
      </div>
      <div className="absolute bottom-1/3 left-1/6 text-pink-300 opacity-40 floating-animation" style={{animationDelay: '7s'}}>
        <Sparkles size={18} />
      </div>

      <div ref={heroRef} className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center min-h-[85vh] pt-20 lg:pt-0 max-w-6xl mx-auto">
          <div className="order-2 lg:order-1 flex flex-col justify-center space-y-6 lg:space-y-8">
            <div className="text-center lg:text-left">
              <div className="handwriting text-pink-500 text-xl sm:text-2xl mb-3 lg:mb-4">Hello, I&apos;m</div>
              <h1 ref={titleRef} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-4 lg:mb-6 leading-tight">
                <span className="block text-slate-700">Sital</span>
                <span className="block text-gradient font-medium">Snigdha</span>
                <span className="block text-slate-600 text-3xl sm:text-4xl md:text-5xl lg:text-6xl casual-writing">Swain</span>
              </h1>
            </div>
            
            <p ref={subtitleRef} className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed text-center lg:text-left font-light">
              <span className="text-gradient-soft font-medium">Python Developer</span> • 
              <span className="text-gradient-soft font-medium"> Web Developer</span>
              <br />
              <span className="text-slate-500 text-base sm:text-lg casual-writing">Full Stack Enthusiast with a passion for elegant code</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 text-slate-600 justify-center lg:justify-start">
              <div className="flex items-center gap-3 glass-effect px-3 py-2 rounded-full text-sm sm:text-base">
                <MapPin size={16} className="text-pink-500" />
                <span className="font-light">Bhubaneswar</span>
              </div>
              <div className="flex items-center gap-3 glass-effect px-3 py-2 rounded-full text-sm sm:text-base">
                <Mail size={16} className="text-pink-500" />
                <a href="mailto:sitalswain70@gmail.com" className="hover:text-pink-600 transition-colors font-light truncate">
                  sitalswain70@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 glass-effect rounded-full hover:bg-pink-50 transition-all duration-300 hover:scale-110 group">
                <Github size={24} className="text-slate-600 group-hover:text-pink-600" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 glass-effect rounded-full hover:bg-pink-50 transition-all duration-300 hover:scale-110 group">
                <Linkedin size={24} className="text-slate-600 group-hover:text-pink-600" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-4 glass-effect rounded-full hover:bg-pink-50 transition-all duration-300 hover:scale-110 group">
                <Twitter size={24} className="text-slate-600 group-hover:text-pink-600" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary group flex items-center justify-center">
                <Heart size={20} className="mr-2 group-hover:text-pink-100" />
                <span>Let&apos;s Connect</span>
              </button>
              <button className="btn-secondary flex items-center justify-center">
                <Sparkles size={20} className="mr-2" />
                <span>View My Work</span>
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div ref={imageRef} className="relative group">
              {/* Main Image Container */}
              <div className="w-72 h-90 sm:w-80 sm:h-96 md:w-96 md:h-[40rem] lg:w-[24rem] lg:h-[40rem] rounded-3xl overflow-hidden bg-white/80 p-3 shadow-2xl group-hover:scale-105 transition-all duration-500 border border-white/50">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <Image
                    src="/pic1.jpg"
                    alt="Sital Snigdha Swain"
                    width={500}
                    height={600}
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                </div>
              </div>
              
              {/* Animated Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full shadow-lg sparkle floating-animation"></div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full shadow-lg floating-animation" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/4 -left-8 w-8 h-8 bg-gradient-to-r from-rose-400 to-orange-400 rounded-full shadow-lg floating-animation" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-3/4 -right-8 w-6 h-6 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full shadow-lg floating-animation" style={{animationDelay: '3s'}}></div>
              
              {/* Floating Icons */}
              <div className="absolute -top-12 left-1/4 text-pink-400 floating-animation" style={{animationDelay: '0.5s'}}>
                <Sparkles size={24} className="drop-shadow-lg" />
              </div>
              <div className="absolute -bottom-12 right-1/4 text-purple-400 floating-animation" style={{animationDelay: '1.5s'}}>
                <Heart size={20} className="drop-shadow-lg" />
              </div>
              <div className="absolute top-1/2 -right-16 text-rose-400 floating-animation" style={{animationDelay: '2.5s'}}>
                <Sparkles size={18} className="drop-shadow-lg" />
              </div>
              <div className="absolute top-1/3 -left-12 text-pink-400 floating-animation" style={{animationDelay: '3.5s'}}>
                <Heart size={16} className="drop-shadow-lg" />
              </div>
              
              {/* Orbiting Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-8 right-8 w-3 h-3 bg-pink-300 rounded-full opacity-70 animate-bounce" style={{animationDelay: '0s'}}></div>
                <div className="absolute bottom-12 left-12 w-2 h-2 bg-purple-300 rounded-full opacity-70 animate-bounce" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 right-4 w-2 h-2 bg-rose-300 rounded-full opacity-70 animate-bounce" style={{animationDelay: '2s'}}></div>
                <div className="absolute bottom-8 right-16 w-3 h-3 bg-pink-300 rounded-full opacity-70 animate-bounce" style={{animationDelay: '3s'}}></div>
              </div>
              
              {/* Subtle Glow Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 