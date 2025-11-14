"use client"

import { useState } from "react"
import { BentoCard, BentoGrid } from "../components/BentoGrid"
import { ArchiveIcon, RocketIcon, HomeIcon, GlobeIcon, LightningBoltIcon, BookmarkIcon } from "@radix-ui/react-icons"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

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
    {
      id: "5",
      name: "Tech Campus Expansion",
      location: "Innovation Hub",
      category: "Architecture",
      className: "md:col-span-1",
      background: (
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/20 to-cyan-500/20">
          <img 
            src="/modern-office-campus-tech-buildings.jpg" 
            alt="Tech Campus" 
            className="w-full h-full object-cover opacity-100"
          />
        </div>
      ),
      Icon: RocketIcon,
      description: "Cutting-edge office spaces designed for collaborative innovation",
      href: "/projects/5",
      cta: "Learn more",
    },
    {
      id: "6",
      name: "Heritage District Preservation",
      location: "Historic Quarter",
      category: "Urban Planning",
      className: "md:col-span-2",
      background: (
        <div className="absolute inset-0 bg-linear-to-br from-amber-500/20 to-red-500/20">
          <img 
            src="/historic-architecture-renovation-restoration.jpg" 
            alt="Heritage District" 
            className="w-full h-full object-cover opacity-100"
          />
        </div>
      ),
      Icon: LightningBoltIcon,
      description: "Adaptive reuse strategy preserving heritage while enabling growth",
      href: "/projects/6",
      cta: "Learn more",
    },
  ]

  const categories = ["all", "Architecture", "Urban Planning"]

  const filtered = projects.filter((project) => activeFilter === "all" || project.category === activeFilter)

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-96 flex items-center justify-center bg-primary text-white px-4 py-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-300">
            Explore our portfolio of completed projects showcasing our design excellence and expertise.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 rounded transition-colors capitalize ${
                  activeFilter === category
                    ? "bg-accent text-white"
                    : "bg-white text-foreground border border-border hover:bg-gray-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BentoGrid>
            {filtered.map((project) => (
              <BentoCard key={project.id} {...project} />
            ))}
          </BentoGrid>
        </div>
      </section>
    </main>
  )
}
