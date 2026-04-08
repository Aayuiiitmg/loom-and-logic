import React from 'react'
import Magnetic from '../components/Magnetic'

const Contact = () => {
  return (
    <div className="pt-40 pb-20">
      <div className="container mx-auto px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-olive/40 mb-4">Get in touch</p>
            <h1 className="font-serif text-6xl md:text-8xl text-olive leading-tight mb-8">
                Let's <span className="italic">collaborate</span>.
            </h1>
            <p className="font-sans text-xl text-olive/60 mb-12">
                Have a project in mind? We'd love to hear about it. Drop us a line and let's weave something extraordinary together.
            </p>
            
            <div className="space-y-4">
                <p className="font-sans text-lg text-olive">idr.shubham@gmail.com</p>
                <p className="font-sans text-lg text-olive">+91 9319825519</p>
            </div>
          </div>

          <form className="space-y-8">
            <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-olive/40">Name</label>
                <input type="text" className="w-full border-b border-olive/20 bg-transparent py-4 text-xl outline-none transition-colors focus:border-olive" placeholder="Your Name" />
            </div>
            <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-olive/40">Email</label>
                <input type="email" className="w-full border-b border-olive/20 bg-transparent py-4 text-xl outline-none transition-colors focus:border-olive" placeholder="your@email.com" />
            </div>
            <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-olive/40">Project Details</label>
                <textarea className="w-full border-b border-olive/20 bg-transparent py-4 text-xl outline-none transition-colors focus:border-olive h-32 resize-none" placeholder="Tell us about your vision..." />
            </div>

            <div className="pt-8">
                <Magnetic strength={0.3}>
                    <button type="submit" className="rounded-full bg-olive px-12 py-5 font-sans text-sm uppercase tracking-widest text-white transition-all hover:scale-105">
                        Send Message
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
