import { Link } from "react-router-dom"

interface ProjectCardProps {
  id: string
  title: string
  location: string
  image: string
  category: string
}

export default function ProjectCard({ id, title, location, image, category }: ProjectCardProps) {
  return (
    <Link to={`/projects/${id}`}>
      <div className="group relative overflow-hidden rounded-lg h-80">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <p className="text-accent text-xs font-semibold uppercase mb-2">{category}</p>
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <p className="text-gray-200 text-sm">{location}</p>
        </div>
      </div>
    </Link>
  )
}
