import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
}

export default function ServiceCard({ icon: Icon, title, description, points }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <Icon size={32} className="text-accent" />
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {points.map((point, index) => (
          <li key={index} className="text-sm text-gray-700 flex items-start gap-2">
            <span className="text-accent mt-1">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
