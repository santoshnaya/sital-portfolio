import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Python for Web Development",
      excerpt: "Learn the fundamentals of Python web development and discover why it&apos;s one of the most popular choices for building modern web applications.",
      image: "/pic1.jpg",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Python",
      slug: "getting-started-python-web-development"
    },
    {
      id: 2,
      title: "Building Responsive UIs with React and Tailwind",
      excerpt: "Discover how to create beautiful, responsive user interfaces using React and Tailwind CSS with practical examples and best practices.",
      image: "/pic2.jpg",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "Frontend",
      slug: "building-responsive-uis-react-tailwind"
    },
    {
      id: 3,
      title: "Database Design Best Practices",
      excerpt: "Essential tips and strategies for designing efficient, scalable databases that will serve your applications well as they grow.",
      image: "/pic1.jpg",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Database",
      slug: "database-design-best-practices"
    },
    {
      id: 4,
      title: "The Future of Web Development",
      excerpt: "Exploring emerging trends and technologies that are shaping the future of web development and what developers should prepare for.",
      image: "/pic2.jpg",
      date: "February 28, 2024",
      readTime: "7 min read",
      category: "Technology",
      slug: "future-of-web-development"
    }
  ]

  const categories = ["All", "Python", "Frontend", "Database", "Technology"]

  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section className="section-padding pt-32 bg-gradient-to-br from-pink-50/50 to-purple-50/50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6">
              <span className="handwriting text-pink-500 text-3xl md:text-4xl block mb-2">Welcome to my</span>
              <span className="text-gradient font-medium">Blog</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Sharing insights, tutorials, and thoughts on web development, programming, 
              and the ever-evolving world of technology.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full mt-8"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="glass-effect px-6 py-2 rounded-full text-slate-600 hover:text-pink-500 hover:bg-pink-50 transition-all duration-300 font-light"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <div className="glass-effect rounded-3xl overflow-hidden card-hover group max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
                    <span className="glass-effect px-3 py-1 rounded-full">{blogPosts[0].category}</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-medium text-gradient-soft mb-4 casual-writing">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed font-light mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <Link
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium group"
                  >
                    Read More
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <article key={post.id} className="glass-effect rounded-2xl overflow-hidden card-hover group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="glass-effect px-3 py-1 rounded-full text-xs text-slate-600">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-medium text-gradient-soft mb-3 casual-writing">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light text-sm mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-600 font-medium text-sm group"
                  >
                    Read Article
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 