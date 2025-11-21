"use client"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, MapPin } from "lucide-react"
import SEO from "../components/SEO"

export default function ProjectDetail() {
  const { id } = useParams()

  const projectData: Record<
    string,
    {
      title: string
      location: string
      category: string
      year: number
      description: string
      challenge: string
      solution: string
      images: string[]
    }
  > = {
    "1": {
      title: "Downtown Revitalization Master Plan",
      location: "Metropolitan Area",
      category: "Urban Planning",
      year: 2023,
      description:
        "A comprehensive master plan to revitalize the downtown core, creating a vibrant mixed-use district that celebrates the city's heritage while embracing modern urban development principles.",
      challenge:
        "The downtown area faced declining commercial activity, aging infrastructure, and limited public spaces. We needed to create a strategy that would attract investment while preserving community character.",
      solution:
        "We developed a phased approach emphasizing adaptive reuse of historic buildings, creation of public gathering spaces, improved transit connectivity, and new mixed-income housing. The plan integrates sustainability and cultural programming.",
      images: [
        "/downtown-urban-revitalization-modern-city-center.jpg",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    "2": {
      title: "Sustainable Housing Complex",
      location: "Eco District",
      category: "Architecture",
      year: 2022,
      description:
        "A pioneering sustainable residential development featuring 250 units of mixed-income housing designed to minimize environmental impact while maximizing community connection and livability.",
      challenge:
        "Balancing affordability with sustainability while meeting strict environmental standards. The project needed to serve diverse income levels without compromising design quality.",
      solution:
        "We implemented passive design strategies, renewable energy systems, and green building materials. The layout prioritizes walkability, community gardens, and shared green spaces. Extensive use of natural light reduces energy consumption.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    "3": {
      title: "Cultural Center & Public Plaza",
      location: "Arts Quarter",
      category: "Architecture",
      year: 2023,
      description:
        "A striking contemporary cultural center anchoring the arts quarter with flexible performance and exhibition spaces, supported by an expansive public plaza designed for community gathering and cultural events.",
      challenge:
        "Creating a flexible venue capable of hosting diverse events while maintaining architectural coherence. The plaza needed to serve both programmed events and casual public use.",
      solution:
        "The design features a modular interior layout allowing various configurations, while the plaza incorporates movable elements, multiple levels, and strategic landscaping to define spaces for different activities and audience sizes.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    "4": {
      title: "Regional Park Development",
      location: "Suburban Area",
      category: "Urban Planning",
      year: 2022,
      description:
        "A comprehensive 150-acre regional park designed to serve multiple communities with recreational trails, sports facilities, nature areas, and community programming spaces.",
      challenge:
        "Balancing recreation with ecological preservation while serving multiple user groups. Environmental constraints required careful site planning and sensitive design approaches.",
      solution:
        "We created distinct zones for active recreation, passive nature areas, and community gathering. Native plantings support local ecosystems, while trails provide connectivity throughout. Stormwater management is integrated into the landscape design.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    "5": {
      title: "Tech Campus Expansion",
      location: "Innovation Hub",
      category: "Architecture",
      year: 2023,
      description:
        "A state-of-the-art office campus designed to foster innovation and collaboration, featuring flexible workspaces, cutting-edge amenities, and sustainable design throughout.",
      challenge:
        "Creating adaptable spaces that could accommodate changing corporate needs while fostering genuine collaboration and innovation among diverse teams.",
      solution:
        "The design emphasizes flexible open spaces, breakout areas, and outdoor connectivity. Each floor features modular workstations, casual meeting zones, and dedicated innovation spaces. Biophilic design elements throughout improve wellbeing and creativity.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
    "6": {
      title: "Heritage District Preservation",
      location: "Historic Quarter",
      category: "Urban Planning",
      year: 2021,
      description:
        "A strategic preservation and revitalization plan for the historic district that enables economic development while protecting the area's architectural heritage and cultural significance.",
      challenge:
        "Preserving historic character while enabling adaptive reuse and new development. Balancing conservation concerns with economic viability for property owners.",
      solution:
        "We established design guidelines respecting historic typologies while allowing contemporary interventions. Tax incentive strategies were identified, and adaptive reuse case studies demonstrated economic potential. Community engagement ensured cultural priorities were maintained.",
      images: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
    },
  }

  const project = projectData[id || "1"]

  return (
    <main className="pt-20">
      <SEO 
        title={`${project.title} - Wise Root Design Studio`}
        description={project.description}
        keywords={`${project.category}, ${project.title}, architecture project, urban planning project, ${project.location}`}
        url={`https://wiserootdesign.com/projects/${id}`}
        image={project.images[0]}
      />
      
      {/* Back Button */}
      <section className="bg-background border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">{project.category}</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">{project.title}</h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-300">
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              {project.location}
            </div>
            <div>{project.year}</div>
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {project.images.map((image, index) => (
              <div key={index} className="h-96 rounded-lg overflow-hidden">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} view ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Overview</h2>
            <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">The Challenge</h3>
              <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Solution</h3>
              <p className="text-gray-600 leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Interested in Similar Work?</h2>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
            Let's discuss how we can bring your project vision to life with the same expertise and dedication.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-accent text-white rounded hover:bg-accent/90 transition-colors"
          >
            Schedule Consultation
          </Link>
        </div>
      </section>
    </main>
  )
}
