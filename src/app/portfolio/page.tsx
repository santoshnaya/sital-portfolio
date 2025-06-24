import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react'
import Image from 'next/image'

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Django and React, featuring user authentication, payment integration, and admin dashboard.",
      image: "/pic1.jpg",
      technologies: ["Django", "React", "PostgreSQL", "Stripe", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2024",
      category: "Full Stack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, built using Flask and WebSocket technology.",
      image: "/pic2.jpg",
      technologies: ["Flask", "Socket.IO", "MongoDB", "Redis", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2023",
      category: "Web App"
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      description: "Interactive dashboard for data visualization and analytics, built with Python and modern web technologies.",
      image: "/pic1.jpg",
      technologies: ["Python", "Plotly", "Pandas", "FastAPI", "React"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      date: "2023",
      category: "Data Science"
    }
  ]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="section-padding pt-32 bg-gradient-to-br from-pink-50/50 to-purple-50/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              <span className="handwriting text-pink-500 text-3xl md:text-4xl block mb-2">My Creative</span>
              <span className="text-gradient font-medium">Portfolio</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Explore my collection of projects that showcase my passion for creating 
              beautiful, functional, and user-friendly digital experiences.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mt-8"></div>
          </div>

          <div className="grid gap-12 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div key={project.id} className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="glass-effect p-6 rounded-2xl card-hover group">
                    <div className="relative overflow-hidden rounded-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={600}
                        height={400}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{project.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Tag size={16} />
                      <span>{project.category}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-medium text-gradient-soft mb-4 casual-writing">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-light text-lg">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="glass-effect px-3 py-1 rounded-full text-sm text-slate-600 font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 glass-effect px-6 py-3 rounded-full hover:bg-pink-50 transition-all duration-300 group"
                    >
                      <Github size={18} className="group-hover:scale-110 transition-transform" />
                      <span className="font-light">Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 btn-primary text-sm group"
                    >
                      <ExternalLink size={18} className="group-hover:scale-110 transition-transform" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 