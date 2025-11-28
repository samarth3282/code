"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import Hyperspeed from "../components/Hyperspeed"
import SEO from "../components/SEO"
import Button from "../components/Button"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    const formDataObj = new FormData(event.currentTarget)
    formDataObj.append("access_key", "4bec022f-0486-47a8-81b2-5dc2d67a9733")

    const object = Object.fromEntries(formDataObj)
    const json = JSON.stringify(object)

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json())

      if (res.success) {
        console.log("Success", res)
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message! We will get back to you soon."
        })
        setFormData({ name: "", email: "", phone: "", message: "" })
      } else {
        throw new Error(res.message || "Failed to send message")
      }
    } catch (error) {
      console.error("Error:", error)
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again or email us directly."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="">
      <SEO 
        title="Contact Us - Wise Root Design Studio"
        description="Get in touch with Wise Root Design Studio for architectural design, urban planning, and consultancy services. Contact our team of experts today."
        keywords="contact architect, architecture firm contact, urban planning consultation, project consultation, get in touch"
        url="https://wise-root.vercel.app/contact"
      />
      
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative text-white px-4 py-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Hyperspeed />
        </div>
        <div className="max-w-4xl text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch.</h1>
          <p className="text-xl text-gray-300">
            Supercharge your designs.
          </p>
          <p className="text-sm text-gray-400 mt-6 animate-pulse">
            💡 Click and hold to accelerate your ideas even faster.
          </p>
        </div>
        
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Contact Information.</h2>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                    <a
                      href="mailto:info@wise-root.vercel.app"
                      className="text-gray-600 hover:text-accent transition-colors"
                    >
                      wiseroot.design5@gmail.com
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
                      +91 87803 64153
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <MapPin className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Studio Location.</h3>
                    <p className="text-gray-600">
                      G10, Patel Nagar Society
                      <br />
                      Jahangir Pura, Surat, 395004
                      <br />
                      Gujarat, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-lg overflow-hidden h-80">
                <iframe
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.969419006965!2d72.7848666!3d21.2458826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f01cf5cebb3%3A0x7a90dc7992a71cd6!2sPin%20Location!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Wise Root Design Studio Location"
                style={{ border: 0 }}></iframe>
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
                <Button className="w-full" content={isSubmitting ? "Sending..." : "Send Message"}/>
                {/* <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-white py-3 rounded font-semibold hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button> */}

                {submitStatus && (
                  <div
                    className={`mt-4 p-4 rounded ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
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
                email: "wiseroot.design5@gmail.com",
              },
              {
                title: "For General Information",
                email: "wiseroot.design5@gmail.com",
              },
              {
                title: "For Career Opportunities",
                email: "wiseroot.design5@gmail.com",
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
