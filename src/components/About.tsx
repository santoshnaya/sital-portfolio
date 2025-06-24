'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Heart, Sparkles, Coffee, Code } from 'lucide-react'
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(imageRef.current,
      { x: -60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(contentRef.current,
      { x: 60, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6"
    )
  }, [])

  return (
    <section ref={sectionRef} id="about" className="section-padding bg-gradient-to-br from-pink-50/50 to-purple-50/50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            <span className="handwriting text-pink-500 text-3xl md:text-4xl block mb-2">Get to know</span>
            <span className="text-gradient font-medium">About Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center max-w-6xl mx-auto">
          <div ref={imageRef} className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              <div className="w-80 h-96 md:w-96 md:h-[28rem] rounded-3xl overflow-hidden glass-effect p-4 group-hover:scale-105 transition-all duration-500" data-cursor-image>
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <Image
                    src="/pic2.jpg"
                    alt="Sital Snigdha Swain"
                    width={400}
                    height={500}
                    className="w-full h-full object-cover object-center"
                    data-cursor-image
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-200/30 via-transparent to-purple-200/20"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-effect p-3 rounded-full floating-animation">
                <Heart size={20} className="text-pink-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-effect p-3 rounded-full floating-animation" style={{animationDelay: '2s'}}>
                <Sparkles size={20} className="text-purple-500" />
              </div>
              <div className="absolute top-1/4 -left-8 glass-effect p-2 rounded-full floating-animation" style={{animationDelay: '4s'}}>
                <Code size={16} className="text-rose-500" />
              </div>
            </div>
          </div>

          <div ref={contentRef} className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <div className="glass-effect p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-2xl font-medium text-gradient-soft mb-4 casual-writing">My Journey</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  Hello! I&apos;m Sital, a passionate Python and Web Developer from the beautiful city of Bhubaneswar. 
                  My journey in tech began with a curiosity about how websites work, and it has evolved into a 
                  deep love for creating elegant, user-friendly digital experiences.
                </p>
              </div>

              <div className="glass-effect p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-2xl font-medium text-gradient-soft mb-4 casual-writing">What Drives Me</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  I believe in the power of clean code and beautiful design. Every project I work on is an 
                  opportunity to create something meaningful that not only functions perfectly but also 
                  delights users with its elegance and simplicity.
                </p>
              </div>

              <div className="glass-effect p-6 rounded-2xl hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-2xl font-medium text-gradient-soft mb-4 casual-writing">Beyond Code</h3>
                <p className="text-slate-600 leading-relaxed font-light">
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
                  open-source projects, or enjoying a good cup of coffee while brainstorming creative solutions 
                  to complex problems.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <Coffee size={16} className="text-pink-500" />
                <span className="text-slate-600 font-light">Coffee Lover</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <Code size={16} className="text-purple-500" />
                <span className="text-slate-600 font-light">Clean Code Enthusiast</span>
              </div>
              <div className="flex items-center gap-2 glass-effect px-4 py-2 rounded-full">
                <Heart size={16} className="text-rose-500" />
                <span className="text-slate-600 font-light">Problem Solver</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 