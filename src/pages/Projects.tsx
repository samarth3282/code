"use client"

import { useState } from "react"
import ProjectCard from "../components/ProjectCard"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: "1",
      title: "Downtown Revitalization Master Plan",
      location: "Metropolitan Area",
      category: "Urban Planning",
      image: "/modern-downtown-urban-development-city.jpg",
      description: "Comprehensive urban revitalization strategy for downtown core",
    },
    {
      id: "2",
      title: "Sustainable Housing Complex",
      location: "Eco District",
      category: "Architecture",
      image: "/sustainable-green-buildings-eco-friendly.jpg",
      description: "Mixed-use residential development with green building certifications",
    },
    {
      id: "3",
      title: "Cultural Center & Public Plaza",
      location: "Arts Quarter",
      category: "Architecture",
      image: "/modern-cultural-center-building-glass-architecture.jpg",
      description: "Contemporary cultural hub with flexible public gathering space",
    },
    {
      id: "4",
      title: "Regional Park Development",
      location: "Suburban Area",
      category: "Urban Planning",
      image: "/landscape-park-design-outdoor-recreation.jpg",
      description: "Multi-phase park development with trails and community facilities",
    },
    {
      id: "5",
      title: "Tech Campus Expansion",
      location: "Innovation Hub",
      category: "Architecture",
      image: "/modern-office-campus-tech-buildings.jpg",
      description: "Cutting-edge office spaces designed for collaborative innovation",
    },
    {
      id: "6",
      title: "Heritage District Preservation",
      location: "Historic Quarter",
      category: "Urban Planning",
      image: "/historic-architecture-renovation-restoration.jpg",
      description: "Adaptive reuse strategy preserving heritage while enabling growth",
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filtered.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
