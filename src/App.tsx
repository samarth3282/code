import { Routes, Route } from "react-router-dom"
import { HelmetProvider } from 'react-helmet-async'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import ProjectDetail from "./pages/ProjectDetail"
import Contact from "./pages/Contact"
import { ReactLenis, useLenis } from 'lenis/react'
import Button from "./components/Button"
import Card from "./components/FlipCard"
import ScrollToTop from "./components/ScrollToTop"
import { BentoGrid } from "./components/BentoGrid"
import { BubbleBackground } from "./components/bubble"
// import ServicesStack from "./components/ServicesStack"
import PageTransition from "./components/PageTransition"
import MagicBento from "./components/MagicBento"

export default function App() {
  // const lenis = useLenis((lenis) => {
  //   // called every scroll
  //   // console.log(lenis)
  // })
  return (
    <HelmetProvider>
      <ReactLenis 
        root
        // options={{
        //   duration: 0.8,
        //   easing: (t) => 1 - Math.pow(1 - t, 3),
        //   lerp: 1,
        //   smoothWheel: true,
        //   wheelMultiplier: 1,
        // }}
      >
  <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <ScrollToTop />
      <PageTransition>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </PageTransition>
      <Footer />
      {/* <Card/> */}
      {/* <AsymmetricGrid/> */}
      {/* <BentoGrid/> */}
      {/* <BubbleBackground
      interactive={true}
      className="absolute inset-0 flex items-center justify-center rounded-xl"/> */}
      {/* <ServicesStack/> */}
    </div>
    {/* <MagicBento/> */}
      </ReactLenis>
    </HelmetProvider>
  )
}
