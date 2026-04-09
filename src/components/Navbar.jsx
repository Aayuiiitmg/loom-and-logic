import React from 'react'
import Magnetic from './Magnetic'

const Navbar = ({ setPage, currentPage }) => {
  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-8 md:px-12 md:py-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div 
          className="cursor-pointer font-serif italic text-2xl tracking-tighter text-white"
          onClick={() => setPage('home')}
        >
          Loom & Logic
        </div>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Magnetic key={item.id} strength={0.3}>
              <button
                onClick={() => setPage(item.id)}
                className={`group relative py-2 font-sans text-sm uppercase tracking-widest transition-colors hover:text-white ${
                  currentPage === item.id ? 'text-white' : 'text-white/40'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 h-px w-full origin-left bg-white transition-transform duration-500 ease-out ${
                  currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </button>
            </Magnetic>
          ))}
        </div>

        <Magnetic strength={0.2}>
          <button className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 font-sans text-xs uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(112,149,220,0.25)]">
            Work With Us
          </button>
        </Magnetic>
      </div>
    </nav>
  )
}

export default Navbar
