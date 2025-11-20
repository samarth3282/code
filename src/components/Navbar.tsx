"use client"

import { useState, useEffect } from "react"
import { StaggeredMenu } from "./StaggeredMenu"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: "Home", ariaLabel: "Navigate to Home", link: "/" },
    { label: "About", ariaLabel: "Navigate to About", link: "/about" },
    { label: "Services", ariaLabel: "Navigate to Services", link: "/services" },
    { label: "Projects", ariaLabel: "Navigate to Projects", link: "/projects" },
    { label: "Contact", ariaLabel: "Navigate to Contact", link: "/contact" },
  ]

  return (
    <>
      <div
        className={`fixed w-full top-0 left-0 h-20 z-40 transition-all duration-300 overflow-visible pointer-events-none ${
          isScrolled ? "backdrop-blur-md" : ""
        }`}
      >
        <StaggeredMenu
        position="right"
        items={menuItems}
        displaySocials={false}
        displayItemNumbering={true}
        isFixed={true}
        logoUrl=""
        menuButtonColor="#1a1a18"
        openMenuButtonColor="#1a1a18"
        accentColor="#8b7355"
        colors={["#2d2d2b", "#8b7355"]}
        changeMenuColorOnOpen={false}
      />
      </div>
      
      {/* <nav className="fixed w-full top-0 z-50">
        <div className="absolute left-1/2 -translate-x-1/2 top-4 z-50 pointer-events-none">
          <div className="text-5xl font-bold text-foreground">WR.</div>
        </div>
      </nav> */}
      
      
    </>
  )
}
