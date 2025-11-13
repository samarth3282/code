import SectionHeader from "../components/SectionHeader"
import ServiceCard from "../components/ServiceCard"
import { Building2, Map, FileCheck, Lightbulb, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Urban & Town Planning",
      description: "Comprehensive urban planning solutions for sustainable community development",
      points: [
        "Strategic master planning and long-term visioning",
        "Zoning, land use analysis, and policy recommendations",
        "Community engagement and stakeholder consultation",
        "Sustainability and resilience planning",
      ],
    },
    {
      icon: Building2,
      title: "Architectural Design",
      description: "Innovative architectural design from concept to completion",
      points: [
        "Conceptual design and feasibility studies",
        "Detailed technical drawings and specifications",
        "3D visualization and rendering",
        "Construction administration and site oversight",
      ],
    },
    {
      icon: FileCheck,
      title: "Plan Approval & Permissions",
      description: "Navigate complex regulatory processes with expertise",
      points: [
        "Municipal and governmental approvals",
        "Environmental impact assessment and clearance",
        "Heritage conservation compliance",
        "Comprehensive documentation and liaison",
      ],
    },
    {
      icon: Map,
      title: "GIS & Mapping Services",
      description: "Advanced geospatial analysis and data visualization",
      points: [
        "Geospatial data collection and analysis",
        "Land surveys and digital mapping",
        "Spatial visualization and reporting",
        "Custom GIS database development",
      ],
    },
    {
      icon: Lightbulb,
      title: "Project Consultancy",
      description: "Expert guidance throughout your project lifecycle",
      points: [
        "Feasibility studies and market analysis",
        "Project management and coordination",
        "Cost optimization and budgeting",
        "Risk assessment and mitigation strategies",
      ],
    },
    {
      icon: Building2,
      title: "Adaptive Reuse Design",
      description: "Transform existing structures into vibrant new spaces",
      points: [
        "Heritage building assessment",
        "Functional repurposing strategies",
        "Modern integration with historic elements",
        "Compliance with conservation standards",
      ],
    },
  ]

  return (
    <main className="pt-20">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
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
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-accent rounded hover:bg-gray-100 transition-colors font-semibold"
          >
            Request Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  )
}
