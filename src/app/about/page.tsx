import Navigation from '@/components/Navigation'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <About />
      </div>
      <Footer />
    </main>
  )
} 