import React, { useState } from 'react'
import Magnetic from '../components/Magnetic'

const Contact = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false })

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

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-[#141922] via-[#0e1420] to-[#080808] pt-40 pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed z-30 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3d4432]/35 blur-3xl transition-opacity duration-300"
        style={{
          left: `${cursor.x}px`,
          top: `${cursor.y}px`,
          opacity: cursor.active ? 1 : 0
        }}
      />
      <div className="container mx-auto px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-white/55 mb-4">Get in touch</p>
            <h1 className="font-serif text-6xl md:text-8xl text-white leading-tight mb-8 [text-shadow:0_0_10px_rgba(255,255,255,0.36),0_0_28px_rgba(155,175,220,0.24)]">
              Let's <span className="italic">collaborate</span>.
            </h1>
            <p className="font-sans text-xl text-white/70 mb-12">
              Have a project in mind? We'd love to hear about it. Drop us a line and let's weave something extraordinary together.
            </p>

            <div className="space-y-4">
              <p className="font-sans text-lg text-white/90">idr.shubham@gmail.com</p>
              <p className="font-sans text-lg text-white/90">+91 9319825519</p>
            </div>
          </div>

          <form
            className="relative space-y-8"
            onMouseMove={handleFormMove}
            onMouseLeave={handleFormLeave}
          >
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/45">Name</label>
              <input type="text" className="w-full border-b border-white/35 bg-transparent py-4 text-xl text-white outline-none transition-colors placeholder:text-white/40 focus:border-white focus:placeholder:text-[#3d4432]" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/45">Email</label>
              <input type="email" className="w-full border-b border-white/35 bg-transparent py-4 text-xl text-white outline-none transition-colors placeholder:text-white/40 focus:border-white focus:placeholder:text-[#a9c7ff]" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-white/45">Project Details</label>
              <textarea className="w-full border-b border-white/35 bg-transparent py-4 text-xl text-white outline-none transition-colors placeholder:text-white/40 focus:border-white focus:placeholder:text-[#3d4432] h-32 resize-none" placeholder="Tell us about your vision..." />
            </div>

            <div className="pt-8">
              <Magnetic strength={0.3}>
                <button type="submit" className="group relative rounded-full bg-[#3d4432] px-12 py-5 font-sans text-sm uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:bg-[#545f45] hover:shadow-[0_0_24px_rgba(111,130,87,0.4)]">
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
