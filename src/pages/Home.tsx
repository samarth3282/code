import Hero from "../components/Hero"
import SectionHeader from "../components/SectionHeader"
import ServiceCard from "../components/ServiceCard"
import ProjectCard from "../components/ProjectCard"
import { Building2, Map, FileCheck, Lightbulb } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../components/Button"
// import ServicesStack from "../components/ServicesStack"
import { BentoCard, BentoGrid } from "../components/BentoGrid"



export default function Home() {
  const services = [
    {
      icon: Building2,
      title: "Urban & Town Planning",
      description: "Strategic urban development and master planning",
      points: [
        "Strategic master planning",
        "Zoning and land use analysis",
        "Community engagement",
        "Sustainable development",
      ],
    },
    {
      icon: Building2,
      title: "Architectural Design",
      description: "Creative and functional architectural solutions",
      points: ["Conceptual design", "Technical drawings", " 3D visualization", "Detail specifications"],
    },
    {
      icon: FileCheck,
      title: "Plan Approval & Permissions",
      description: "Navigate regulatory approval processes",
      points: ["Municipal approvals", "Environmental clearance", "Heritage approvals", "Compliance documentation"],
    },
    {
      icon: Map,
      title: "GIS & Mapping Services",
      description: "Advanced spatial data and analysis",
      points: ["Geospatial analysis", "Land surveys", "Digital mapping", "Data visualization"],
    },
    {
      icon: Lightbulb,
      title: "Project Consultancy",
      description: "Expert guidance through project lifecycle",
      points: ["Feasibility studies", "Project management", "Cost optimization", "Risk mitigation"],
    },
  ]

  const projects = [
    {
      id: "1",
      title: "Downtown Revitalization",
      location: "Metropolitan Area",
      category: "Urban Planning",
      image: "/modern-downtown-urban-development.jpg",
    },
    {
      id: "2",
      title: "Sustainable Housing Complex",
      location: "Eco District",
      category: "Architecture",
      image: "/sustainable-green-buildings-architecture.jpg",
    },
    {
      id: "3",
      title: "Cultural Center",
      location: "Arts Quarter",
      category: "Architecture",
      image: "/modern-cultural-center-building-design.jpg",
    },
    {
      id: "4",
      title: "Regional Park Development",
      location: "Suburban Area",
      category: "Urban Planning",
      image: "/landscape-park-design-outdoor-spaces.jpg",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Design Rooted in Wisdom. Built for Tomorrow."
        subtitle="Wise Root Design Studio"
        description="Architectural Design • Urban Planning • GIS • Project Consultancy"
        image="/modern-architecture-building-skyline.jpg"
        buttons={[
          { label: "Explore Services", link: "/services", primary: true },
          { label: "View Projects", link: "/projects", primary: false },
        ]}
      />

      {/* About Preview Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="Designing Experiences, Not Just Buildings"
                description="We believe great design creates positive change in communities. Our approach combines tradition with innovation, rooted in deep understanding of local contexts and future possibilities."
                centered={false}
              />
              <Link
                to="/about"
              >
                <Button content={"Learn Our Story"}/>
              </Link>
            </div>
            <div className="h-96 rounded-lg overflow-hidden">
              <img src="/architecture-studio-office-workspace.jpg" alt="About" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Our Services"
            description="Comprehensive architectural and urban planning solutions tailored to your vision"
            centered={true}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/services"
            >
              <Button content={"View All Services"}/>
            </Link>
          </div>
        </div>
        {/* <ServicesStack/> */}
      </section>

      {/* Featured Projects Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Featured Projects" description="Showcasing our diverse portfolio of realized visions" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/projects"
            >
              <Button content={"Explore All Projects"}/>
            </Link>
          </div>
        </div>
        
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest">Testimonial</p>
          </div>
          <blockquote className="text-3xl font-bold text-foreground mb-6 leading-tight">
            "Wise Root Design Studio transformed our vision into reality. Their expertise and attention to detail
            exceeded our expectations."
          </blockquote>
          <div>
            <p className="font-semibold text-foreground">Sarah Johnson</p>
            <p className="text-gray-600 text-sm">Mayor, Metropolitan City</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Let's discuss how we can bring your architectural vision to life with innovation and precision.
          </p>
          <Link
            to="/contact"
          >
            <Button content={"Get in Touch"}/>
          </Link>
        </div>
      </section>
      {/* <ServicesStack/> */}
    </main>
  )
}
