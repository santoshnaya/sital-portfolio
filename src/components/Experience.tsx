'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Experience = () => {
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

    gsap.utils.toArray('.experience-card').forEach((card: any, index) => {
      tl.fromTo(card,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
        `-=${0.3}`
      )
    })
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-gradient">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="experience-card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover p-8">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mr-4">
                    <Briefcase size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Python Developer Intern</h3>
                    <p className="text-blue-600 font-semibold">SEREE, Bhubaneswar</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-gray-600">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <span>Internship Period</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    <span>Bhubaneswar, Odisha</span>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <h4 className="text-lg font-semibold mb-4 text-gray-800">Key Achievements & Responsibilities:</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      <strong>Built Education Management System:</strong> Developed a comprehensive full-stack web application 
                      for managing student registrations, course enrollments, and administrative functions.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      <strong>Implemented CRUD Operations:</strong> Created complete Create, Read, Update, and Delete 
                      functionality with proper user authentication and authorization systems.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      <strong>Django ORM Expertise:</strong> Utilized Django&apos;s Object-Relational Mapping to design 
                      and implement efficient database schemas and queries.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      <strong>Responsive Frontend Development:</strong> Created mobile-first, responsive user interfaces 
                      using HTML5, CSS3, and JavaScript with cross-browser compatibility.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle size={16} className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">
                      <strong>Backend Optimization:</strong> Optimized database queries and server-side logic to 
                      improve application performance and user experience.
                    </span>
                  </li>
                </ul>

                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'Django', 'HTML5', 'CSS3', 'JavaScript', 'SQLite', 'Git'].map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-sm font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 