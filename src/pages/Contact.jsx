import React, { useState, useRef } from 'react'
import Magnetic from '../components/Magnetic'
import { ArrowRight } from 'lucide-react'

const Contact = () => {
  const formRef = useRef(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringForm, setIsHoveringForm] = useState(false);

  const handlePointerMove = (e) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div className="pt-40 pb-20 bg-gradient-to-b from-[#111111] via-[#0a1128] to-black min-h-screen text-white relative">
      <div className="container mx-auto px-10 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-gray-400 mb-4">Get in touch</p>
            <h1 
              className="font-serif text-6xl md:text-8xl text-white leading-tight mb-8"
              style={{ textShadow: '0 0 20px rgba(255,255,255,0.4), 0 0 40px rgba(255,255,255,0.2)' }}
            >
                Let's <span className="italic">collaborate</span>.
            </h1>
            <p className="font-sans text-xl text-gray-300 mb-12">
                Have a project in mind? We'd love to hear about it. Drop us a line and let's weave something extraordinary together.
            </p>
            
            <div className="space-y-4">
                <p className="font-sans text-lg text-gray-300">idr.shubham@gmail.com</p>
                <p className="font-sans text-lg text-gray-300">+91 9319825519</p>
            </div>
          </div>

          <div
            ref={formRef}
            onPointerMove={handlePointerMove}
            onPointerEnter={() => setIsHoveringForm(true)}
            onPointerLeave={() => setIsHoveringForm(false)}
            className="relative p-6 -m-6 rounded-2xl"
          >
            {/* Glow Effect */}
            <div 
              className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
              style={{
                opacity: isHoveringForm ? 1 : 0,
                background: `radial-gradient(400px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(96, 165, 250, 0.12), transparent 40%)`
              }}
            />

            <form className="relative z-10 space-y-8">
              <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Name</label>
                  <input type="text" className="w-full border-b border-white/20 bg-transparent py-4 text-xl text-white/50 outline-none transition-colors focus:border-white focus:text-white placeholder-gray-500 focus:placeholder-[#3d4432]" placeholder="Your Name" />
              </div>
              <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Email</label>
                  <input type="email" className="w-full border-b border-white/20 bg-transparent py-4 text-xl text-white/50 outline-none transition-colors focus:border-white focus:text-white placeholder-gray-500 focus:placeholder-[#3d4432]" placeholder="your@email.com" />
              </div>
              <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500">Project Details</label>
                  <textarea className="w-full border-b border-white/20 bg-transparent py-4 text-xl text-white/50 outline-none transition-colors focus:border-white focus:text-white placeholder-gray-500 focus:placeholder-[#3d4432] h-32 resize-none" placeholder="Tell us about your vision..." />
              </div>

              <div className="pt-8 flex justify-start">
                  <Magnetic strength={0.3}>
                      <button type="submit" className="group relative overflow-hidden flex items-center justify-center rounded-full bg-olive px-12 py-5 font-sans text-sm uppercase tracking-widest text-white transition-all duration-300 hover:brightness-125 hover:shadow-[0_0_20px_rgba(61,68,50,0.6)]">
                          <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-3">Send Message</span>
                          <span className="absolute right-8 z-10 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2">
                              <ArrowRight size={18} />
                          </span>
                      </button>
                  </Magnetic>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
