import Hero from "../components/Hero"
import SectionHeader from "../components/SectionHeader"
import ServiceCard from "../components/ServiceCard"
import ProjectCard from "../components/ProjectCard"
import { Building2, Map, FileCheck, Lightbulb } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../components/Button"
import MagicBento, { BentoCardProps } from "../components/MagicBento"
import { BentoCard, BentoGrid } from "../components/BentoGrid"
import { ArchiveIcon, HomeIcon, GlobeIcon, BookmarkIcon } from "@radix-ui/react-icons"
// import ServicesStack from "../components/ServicesStack"



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
      name: "Downtown Revitalization Master Plan",
      location: "Metropolitan Area",
      category: "Urban Planning",
      className: "md:col-span-1",
      background: (
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-purple-500/20">
          <img 
            src="/modern-downtown-urban-development-city.jpg" 
            alt="Downtown Revitalization" 
            className="w-full h-full object-cover opacity-100"
          />
        </div>
      ),
      Icon: GlobeIcon,
      description: "Comprehensive urban revitalization strategy for downtown core",
      href: "/projects/1",
      cta: "Learn more",
    },
    {
      id: "2",
      name: "Sustainable Housing Complex",
      location: "Eco District",
      category: "Architecture",
      className: "md:col-span-2",
      background: (
        <div className="absolute inset-0 bg-linear-to-br from-green-500/20 to-teal-500/20">
          <img 
            src="/sustainable-green-buildings-eco-friendly.jpg" 
            alt="Sustainable Housing" 
            className="w-full h-full object-cover opacity-100"
          />
        </div>
      ),
      Icon: HomeIcon,
      description: "Mixed-use residential development with green building certifications",
      href: "/projects/2",
      cta: "Learn more",
    },
    {
      id: "3",
      name: "Cultural Center & Public Plaza",
      location: "Arts Quarter",
      category: "Architecture",
      className: "md:col-span-2",
      background: (
        <div className="absolute inset-0 bg-linear-to-br from-pink-500/20 to-orange-500/20">
          <img 
            src="/modern-cultural-center-building-glass-architecture.jpg" 
            alt="Cultural Center" 
            className="w-full h-full object-cover opacity-100"
          />
        </div>
      ),
      Icon: ArchiveIcon,
      description: "Contemporary cultural hub with flexible public gathering space",
      href: "/projects/3",
      cta: "Learn more",
    },
    {
      id: "4",
      name: "Regional Park Development",
      location: "Suburban Area",
      category: "Urban Planning",
      className: "md:col-span-1",
      background: (
        <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 to-lime-500/20">
          <img 
            src="/landscape-park-design-outdoor-recreation.jpg" 
            alt="Regional Park" 
            className="w-full h-full object-cover opacity-100"
          />
        </div>
      ),
      Icon: BookmarkIcon,
      description: "Multi-phase park development with trails and community facilities",
      href: "/projects/4",
      cta: "Learn more",
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <Hero
        title="Design Rooted in Wisdom. Built for Tomorrow."
        subtitle="Wise Root Design Studio"
        description="Architectural Design • Urban Planning • GIS • Project Consultancy"
        image="/foreground.jpeg"
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
            cards={[
              {
                color: '#2d2d2b',
                title: 'Urban & Town Planning',
                description: 'Comprehensive urban planning solutions for sustainable community development',
                label: 'Planning'
              },
              {
                color: '#8b7355',
                title: 'Architectural Design',
                description: 'Innovative architectural design from concept to completion',
                label: 'Design'
              },
              {
                color: '#1a1a18',
                title: 'Plan Approval & Permissions',
                description: 'Navigate complex regulatory processes with expertise',
                label: 'Approvals'
              },
              {
                color: '#8b7355',
                title: 'GIS & Mapping Services',
                description: 'Advanced geospatial analysis and data visualization',
                label: 'GIS'
              }
            ]}
          />
          <div className="text-center mt-12">
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
          <BentoGrid>
            {projects.map((project) => (
              <BentoCard key={project.id} {...project} />
            ))}
          </BentoGrid>
          <div className="text-center mt-12">
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
