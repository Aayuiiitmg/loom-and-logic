import React, { useState } from 'react'
import Magnetic from '../components/Magnetic'

const Contact = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectDetails: ''
  })

  const handleFormMove = (event) => {
    const nextActive = event.target.matches('input, textarea')
    setCursor({
      x: event.clientX,
      y: event.clientY,
      active: nextActive
    })
  }

  const handleFormLeave = () => {
    setCursor((previous) => ({ ...previous, active: false }))
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({
      ...previous,
      [name]: value
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const to = 'loomandlogicwebagency@gmail.com'
    const subject = encodeURIComponent(`New inquiry from ${formData.name || 'Website Contact Form'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.projectDetails}`
    )

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`
  }

  return (
    <div className="relative overflow-hidden bg-[#080808] pt-28 md:pt-40 pb-16 md:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-30 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3d4432]/30 blur-3xl transition-opacity duration-300 hidden md:block"
        style={{
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
          opacity: cursor.active ? 1 : 0
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-white/55 mb-4">Get in touch</p>
            <h1 className="font-serif text-[clamp(2.3rem,10vw,5.5rem)] text-white leading-tight mb-8">
              Let's <span className="italic">collaborate</span>.
            </h1>
            <p className="font-sans text-[clamp(1rem,3.8vw,1.25rem)] text-white/70 mb-10 md:mb-12">
              Have a project in mind? We'd love to hear about it. Drop us a line and let's weave something extraordinary together.
            </p>

            <div className="space-y-4">
              <p className="font-sans text-lg text-white/90">loomandlogicwebagency@gmail.com</p>
              <p className="font-sans text-lg text-white/90">+91 9319825519</p>
            </div>
          </div>

          <form
            className="relative space-y-8"
            onMouseMove={handleFormMove}
            onMouseLeave={handleFormLeave}
            onSubmit={handleSubmit}
          >
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/45">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full border-b border-white/25 bg-transparent py-4 text-lg md:text-xl text-white outline-none transition-colors placeholder:text-white/40 focus:border-white focus:placeholder:text-[#3d4432]"
                placeholder="Your Name"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/45">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full border-b border-white/25 bg-transparent py-4 text-lg md:text-xl text-white outline-none transition-colors placeholder:text-white/40 focus:border-white focus:placeholder:text-[#a9c7ff]"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/45">Project Details</label>
              <textarea
                name="projectDetails"
                value={formData.projectDetails}
                onChange={handleInputChange}
                required
                className="w-full border-b border-white/25 bg-transparent py-4 text-lg md:text-xl text-white outline-none transition-colors placeholder:text-white/40 focus:border-white focus:placeholder:text-[#3d4432] h-32 resize-none"
                placeholder="Tell us about your vision..."
              />
            </div>

            <div className="pt-8">
              <Magnetic strength={0.3}>
                <button type="submit" className="group relative w-full sm:w-auto rounded-full border border-white/20 bg-white/5 px-8 sm:px-12 py-4 sm:py-5 font-sans text-xs sm:text-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/10">
                  <span className="relative z-10">Send Message</span>
                  <span className="absolute right-7 top-1/2 -translate-y-1/2 translate-x-[-10px] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </button>
              </Magnetic>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
