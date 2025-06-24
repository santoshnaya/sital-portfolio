'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Github, ExternalLink, Heart, Sparkles, Star } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

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

    gsap.utils.toArray('.project-card').forEach((card: any, index) => {
      tl.fromTo(card,
        { y: 60, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        `-=${0.4 - index * 0.15}`
      )
    })
  }, [])

  const projects = [
    {
      title: 'Education Management System',
      description: 'A comprehensive web application for managing educational activities, student records, and course management with a beautiful, intuitive interface.',
      tags: ['Python', 'Django', 'MySQL', 'HTML/CSS', 'JavaScript'],
      github: '#',
      demo: '#',
      color: 'from-pink-400 to-rose-400',
      icon: <Star className="w-6 h-6" />
    },
    {
      title: 'Personal Portfolio',
      description: 'A modern, responsive portfolio website showcasing my work and skills with elegant animations and a minimalist design approach.',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'GSAP', 'TypeScript'],
      github: '#',
      demo: '#',
      color: 'from-purple-400 to-pink-400',
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'Mini Web Projects Collection',
      description: 'A curated collection of small but impactful web projects demonstrating various programming concepts and creative solutions.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask'],
      github: '#',
      demo: '#',
      color: 'from-rose-400 to-orange-400',
      icon: <Sparkles className="w-6 h-6" />
    }
  ]

  return (
    <section ref={sectionRef} id="projects" className="section-padding bg-gradient-to-br from-pink-50/40 to-purple-50/40">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
            <span className="handwriting text-rose-500 text-3xl md:text-4xl block mb-2">Things I&apos;ve built with</span>
            <span className="text-gradient font-medium">Love & Code</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="project-card group glass-effect p-8 rounded-3xl hover:scale-[1.05] transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-all duration-500`}></div>
              
              {/* Icon */}
              <div className={`p-4 rounded-2xl bg-gradient-to-br ${project.color} text-white mb-6 w-fit group-hover:scale-110 transition-all duration-300`}>
                {project.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-medium text-slate-800 mb-4 casual-writing">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-light glass-effect rounded-full text-slate-600 hover:bg-pink-50/50 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="p-3 glass-effect rounded-full hover:bg-pink-50/50 transition-all duration-300 hover:scale-110 group/link"
                  >
                    <Github size={18} className="text-slate-600 group-hover/link:text-pink-600" />
                  </a>
                  <a
                    href={project.demo}
                    className="p-3 glass-effect rounded-full hover:bg-pink-50/50 transition-all duration-300 hover:scale-110 group/link"
                  >
                    <ExternalLink size={18} className="text-slate-600 group-hover/link:text-pink-600" />
                  </a>
                </div>
              </div>

              {/* Hover Effect Sparkles */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <Sparkles size={16} className="text-pink-400 animate-pulse" />
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center justify-center mt-16">
          <p className="text-slate-600 font-light mb-6 casual-writing text-lg text-center">
            Want to see more of my work?
          </p>
          <div className="flex justify-center w-full">
            <button className="btn-primary group">
              <Github size={20} className="mr-2 group-hover:scale-110 transition-transform" />
              <span>View All Projects</span>
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center mt-12 gap-8 opacity-40">
          <div className="floating-animation">
            <Heart size={20} className="text-pink-300" />
          </div>
          <div className="floating-animation" style={{animationDelay: '1.5s'}}>
            <Star size={24} className="text-rose-300" />
          </div>
          <div className="floating-animation" style={{animationDelay: '3s'}}>
            <Sparkles size={22} className="text-purple-300" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 