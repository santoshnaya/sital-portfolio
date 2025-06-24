'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Award, Calendar, Building, GraduationCap } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
    )

    gsap.utils.toArray('.cert-card').forEach((card: any, index) => {
      tl.fromTo(card,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        `-=${0.3}`
      )
    })
  }, [])

  return (
    <section ref={sectionRef} id="certifications" className="section-padding bg-white">
      <div className="container-custom">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16">
          Certifications & <span className="text-gradient">Education</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Certification */}
          <div className="cert-card bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover p-8">
            <div className="flex items-start mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mr-4">
                <Award size={24} className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Python Full Stack Developer Internship</h3>
                <p className="text-blue-600 font-semibold">SEREE, Bhubaneswar</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Calendar size={16} className="mr-2" />
                <span>Successfully Completed</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Building size={16} className="mr-2" />
                <span>Software Engineering & Research Excellence</span>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-3">Certification Highlights:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Completed comprehensive full-stack development training
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Hands-on experience with Python, Django, and web technologies
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Built and deployed real-world applications
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Demonstrated proficiency in full-stack development
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="cert-card bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover p-8">
            <div className="flex items-start mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg mr-4">
                <GraduationCap size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Full Stack Development</h3>
                <p className="text-purple-600 font-semibold">QSpiders, Bhubaneswar</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Calendar size={16} className="mr-2" />
                <span>Currently Pursuing</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <Building size={16} className="mr-2" />
                <span>Python-based Full Stack Development</span>
              </div>
              
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 mb-3">Program Focus:</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Advanced Python programming and frameworks
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Web development with modern technologies
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Database design and management
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Industry-relevant project development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certifications 