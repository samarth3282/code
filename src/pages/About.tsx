import SectionHeader from "../components/SectionHeader"

export default function About() {
  const values = [
    {
      title: "Tradition",
      description: "Respecting heritage and cultural context in every design",
    },
    {
      title: "Transformation",
      description: "Creating progressive solutions for modern challenges",
    },
    {
      title: "Sustainability",
      description: "Building responsibly with environmental consciousness",
    },
    {
      title: "Creativity",
      description: "Pushing boundaries through innovative thinking",
    },
  ]

  const team = [
    {
      name: "Harsh Patel",
      role: "Founder & Principal Architect",
      image: "/hp.jpg",
    },
    {
      name: "Harsh Patel",
      role: "Urban Planning Director",
      image: "/hp.jpg",
    },
    {
      name: "Harsh Patel",
      role: "Senior Design Consultant",
      image: "/hp.jpg",
    },
  ]

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-background px-4 py-20">
        <div className="max-w-4xl">
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-4">About Us</p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Design Rooted in Wisdom, Built for Tomorrow
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Wise Root Design Studio is a collective of architects and urban planners dedicated to creating spaces that
            inspire, heal, and connect communities. Founded on the belief that great design begins with understanding
            context, we blend timeless principles with contemporary innovation.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <SectionHeader title="Our Story" description="" centered={false} />
              <p className="text-gray-600 leading-relaxed mb-4">
                Founded in 2015, Wise Root Design Studio emerged from a shared vision of creating meaningful
                architectural and urban solutions. Our founders recognized that sustainable growth requires designs
                rooted in tradition yet oriented toward the future.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Over the past nine years, we've grown from a small practice to a multidisciplinary studio with expertise
                spanning architectural design, urban planning, GIS analysis, and project consultancy. Each project
                strengthens our commitment to wisdom-rooted design.
              </p>
            </div>
            <div className="h-96 rounded-lg overflow-hidden">
              <img src="/modern-office-architecture-interior-design.jpg" alt="Studio" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionHeader title="Our Mission" description="" centered={false} />
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              To design transformative spaces that honor cultural heritage, embrace sustainability, and inspire
              community connection. We create buildings and environments that endure, evolve with communities, and
              contribute positively to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Our Values" description="The principles guiding every decision we make" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((value, index) => (
              <div key={index} className="border-l-4 border-accent pl-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Meet the Team" description="Talented professionals dedicated to excellence" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-6 h-64 rounded-lg overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{member.name}</h3>
                <p className="text-accent text-sm font-semibold uppercase">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
