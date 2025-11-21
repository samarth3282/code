import Button from "../components/Button"
import SectionHeader from "../components/SectionHeader"
import MagicBento from "../components/MagicBento"
import { ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import SEO from "../components/SEO"

export default function Services() {
  return (
    <main>
      <SEO 
        title="Our Services - Wise Root Design Studio"
        description="Comprehensive architectural and urban planning services including architectural design, urban planning, GIS mapping, plan approvals, and project consultancy."
        keywords="architectural services, urban planning services, GIS mapping, plan approval, project consultancy, master planning, architectural design services"
        url="https://wiserootdesign.com/services"
      />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-primary text-white px-4 py-20">
        <div className="max-w-4xl text-center">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">Services</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">Comprehensive Design Solutions</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            From initial concept to final implementation, we provide end-to-end services for architectural, urban
            planning, and consultancy projects.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MagicBento
            textAutoHide={false}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            disableAnimations={false}
            spotlightRadius={1000}
            particleCount={12}
            enableTilt={false}
            glowColor="139, 115, 85"
            clickEffect={true}
            enableMagnetism={true}
          />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Process" description="A systematic approach to delivering exceptional results" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your vision, context, and requirements through detailed consultation",
              },
              {
                step: "02",
                title: "Concept",
                description: "Developing innovative concepts that balance aesthetic vision with practical constraints",
              },
              {
                step: "03",
                title: "Development",
                description: "Refining designs with detailed technical specifications and regulatory compliance",
              },
              {
                step: "04",
                title: "Implementation",
                description: "Overseeing execution with ongoing guidance and quality assurance throughout",
              },
            ].map((phase, index) => (
              <div key={index} className="relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-8 h-0.5 bg-accent transform -translate-x-4"></div>
                )}
                <div className="bg-background rounded-lg p-6 relative z-10">
                  <p className="text-3xl font-bold text-accent mb-2">{phase.step}</p>
                  <h3 className="text-xl font-bold text-foreground mb-3">{phase.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Project?</h2>
          <p className="text-lg text-gray-100 mb-8 leading-relaxed">
            Contact us today to discuss how our services can bring your vision to reality.
          </p>
          <Link
            to="/contact"
            
          >
            <div className="inline-flex items-center gap-2">
<Button content={"Request Consultation"}  notHoverBackgroundColor="white" textColor="#8b7355" className="font-bold" />
            <ArrowRight size={18} />
            </div>
            
          </Link>
        </div>
      </section>
    </main>
  )
}
