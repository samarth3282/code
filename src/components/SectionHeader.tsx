interface SectionHeaderProps {
  title: string
  description?: string
  centered?: boolean
}

export default function SectionHeader({ title, description, centered = true }: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center mb-12" : "mb-12"}>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">{title}</h2>
      {description && <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">{description}</p>}
    </div>
  )
}
