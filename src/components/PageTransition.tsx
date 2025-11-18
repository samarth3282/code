import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayLocation, setDisplayLocation] = useState(location)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide current content and start transition
    setIsVisible(false)
    setIsTransitioning(true)

    // Update the actual page content at midpoint (when overlay fully covers screen)
    const updateTimer = setTimeout(() => {
      setDisplayLocation(location)
      setIsVisible(true)
    }, 400) // Half of animation duration (800ms / 2)

    // End transition after animation completes
    const endTimer = setTimeout(() => {
      setIsTransitioning(false)
    }, 800) // Match this with CSS animation duration

    return () => {
      clearTimeout(updateTimer)
      clearTimeout(endTimer)
    }
  }, [location.pathname])

  return (
    <>
      <div className={isVisible ? "opacity-100" : "opacity-0"}>
        {children}
      </div>
      <div
        className={`fixed inset-0 z-100 bg-primary pointer-events-none ${
          isTransitioning ? "animate-slide-in-out" : "translate-x-full"
        }`}
      />
    </>
  )
}
