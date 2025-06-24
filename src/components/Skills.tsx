'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Code, Database, Globe, Wrench, Users, Brain, MessageCircle, Target } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  const technicalSkills = [
    { name: 'Python', level: 90, icon: Code },
    { name: 'JavaScript', level: 85, icon: Code },
    { name: 'Django', level: 88, icon: Globe },
    { name: 'Flask', level: 82, icon: Globe },
    { name: 'HTML5/CSS3', level: 92, icon: Globe },
    { name: 'MySQL/SQLite', level: 80, icon: Database },
    { name: 'Git', level: 85, icon: Wrench },
    { name: 'VS Code', level: 90, icon: Wrench },
  ]

  const softSkills = [
    { name: 'Communication', level: 85, icon: MessageCircle },
    { name: 'Teamwork', level: 90, icon: Users },
    { name: 'Problem-solving', level: 88, icon: Brain },
    { name: 'Leadership', level: 82, icon: Target },
  ]

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

    // Animate skill cards
    gsap.utils.toArray('.skill-card').forEach((card: any, index) => {
      tl.fromTo(card,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" },
        `-=${0.8 - index * 0.1}`
      )
    })

    // Animate progress bars
    gsap.utils.toArray('.progress-bar').forEach((bar: any) => {
      const width = bar.dataset.width
      gsap.fromTo(bar,
        { width: '0%' },
        {
          width: `${width}%`,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, [])

  const SkillCard = ({ skill, index }: { skill: any, index: number }) => {
    const IconComponent = skill.icon
    return (
      <div className="skill-card bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
        <div className="flex items-center mb-4">
          <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg mr-4">
            <IconComponent size={24} className="text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-gray-800">{skill.name}</h3>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="progress-bar bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                data-width={skill.level}
              ></div>
            </div>
          </div>
          <span className="text-sm font-medium text-gray-600 ml-2">{skill.level}%</span>
        </div>
      </div>
    )
  }

  return (
    <section ref={sectionRef} id="skills" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-center mb-16">
          My <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-800">Soft Skills</h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <SkillCard key={skill.name} skill={skill} index={index + technicalSkills.length} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 