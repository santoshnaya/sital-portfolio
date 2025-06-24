import Navigation from '@/components/Navigation'
import Certifications from '@/components/Certifications'
import Footer from '@/components/Footer'

export default function CertificationsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <Certifications />
      </div>
      <Footer />
    </main>
  )
} 