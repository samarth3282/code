"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We will get back to you soon!")
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="min-h-80 flex items-center justify-center bg-primary text-white px-4 py-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-gray-300">
            We'd love to hear about your project. Reach out to discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:info@wiserootdesign.com"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      info@wiserootdesign.com
                    </a>
                    <br />
                    <a
                      href="mailto:projects@wiserootdesign.com"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      projects@wiserootdesign.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <Phone className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                    <a href="tel:+1234567890" className="text-gray-600 hover:text-accent transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Studio Location</h3>
                    <p className="text-gray-600">
                      123 Architecture Avenue
                      <br />
                      Design City, DC 10001
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-lg overflow-hidden h-80">
                {/* <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1480949258907!2d-74.00601!3d40.71281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQzLjAiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Wise Root Design Studio Location"
                ></iframe> */}
                <iframe
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.744180129635!2d72.81658683796476!3d21.241990627034074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04eb2f9534f55%3A0xce7bc265123d0155!2sNani%20Ved%2C%20Pramukh%20Darshan%20Society%2C%20Dabholi%2C%20Surat%2C%20Gujarat%20395004!5e0!3m2!1sen!2sin!4v1763147059465!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wise Root Design Studio Location"></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Send us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-accent bg-white"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-accent bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-accent bg-white"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border rounded focus:outline-none focus:border-accent bg-white resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent text-white py-3 rounded font-semibold hover:bg-accent/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Type Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Different Inquiry Types?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "For Project Inquiries",
                email: "projects@wiserootdesign.com",
              },
              {
                title: "For General Information",
                email: "info@wiserootdesign.com",
              },
              {
                title: "For Career Opportunities",
                email: "careers@wiserootdesign.com",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-background rounded-lg">
                <h3 className="text-lg font-bold text-foreground mb-3">{item.title}</h3>
                <a href={`mailto:${item.email}`} className="text-accent hover:text-accent/80 transition-colors">
                  {item.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
