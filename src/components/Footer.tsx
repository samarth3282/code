import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">Wise Root</div>
            <p className="text-gray-300 text-sm leading-relaxed">Design Rooted in Wisdom. Built for Tomorrow.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Urban Planning
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Architecture
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  GIS & Mapping
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white">
                  Consultancy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-sm">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <a href="mailto:info@wiserootdesign.com" className="text-gray-300 hover:text-white">
                  wiseroot.design5@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white">
                  +91 87803 64153
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span className="text-gray-300">
                  G10, Patel Nagar Society
                  <br />
                  Jahangir Pura, Surat, 395004
                  <br />
                  Gujarat, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8 flex justify-between items-center">
          <p className="text-sm text-gray-400">&copy; 2025 Wise Root Design Studio. All rights reserved.</p>
          <div className="flex gap-4">
            <a target="_blank" href="https://www.linkedin.com/in/harsh-patel-453026184/" className="text-gray-300 hover:text-white">
              <Linkedin size={18} />
            </a>
            <a target="_blank" href="https://www.instagram.com/wise_root_/" className="text-gray-300 hover:text-white">
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
