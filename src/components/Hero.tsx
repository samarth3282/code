import { Link } from "react-router-dom"
import Button from "./Button"

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  image?: string
  buttons?: Array<{ label: string; link: string; primary?: boolean }>
}

export default function Hero({ title, subtitle, description, image, buttons }: HeroProps) {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      {image && (
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        {subtitle && <p className="text-white text-sm font-semibold mb-4 tracking-widest uppercase">{subtitle}</p>}

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">{title}</h1>

        {description && (
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">{description}</p>
        )}

        {buttons && buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {buttons.map((button, index) => (
              <Link
                key={index}
                to={button.link}
              >
                <Button content={button.label} {...(!button.primary && { backgroundColor: "white", textColor: "black", borderColor: "white", notHoverBackgroundColor: "black", hoverTextColor: "white"})}
/>

                
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
