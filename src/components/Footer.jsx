import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin } from 'lucide-react';

const Footer = ({ setPage }) => {
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-[#080808] border-t border-white/10 py-14 px-4 sm:px-6 md:px-12 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12 mb-12">
          {/* Left: Branding */}
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="size-10 bg-white rounded-full flex items-center justify-center text-black font-serif italic text-xl">L</div>
              <h2 className="font-serif italic text-3xl tracking-tighter">loom & logic</h2>
            </div>
            <p className="text-sm text-white/50 leading-relaxed font-light">
              Loom & Logic is a full-service digital & web solutions agency based in India, crafting intentional digital experiences.
            </p>
          </div>

          {/* Right: Nav & Social */}
          <div className="flex-1 w-full md:w-auto">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-8 border-b border-white/10">
              <nav>
                <ul className="flex flex-wrap gap-x-6 gap-y-4 text-sm font-medium text-white/80">
                  {navLinks.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => setPage?.(link.id)}
                        className="hover:text-white transition-colors"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="flex gap-4">
                <a href="#" className="size-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Facebook size={14} />
                </a>
                <a href="#" className="size-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                  <Linkedin size={14} />
                </a>
              </div>
            </div>

            {/* Bottom Contact Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8 items-start">
              <div className="flex items-start gap-3">
                <Mail className="text-white/40 mt-1" size={18} />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Email Us</p>
                  <p className="text-sm font-light text-white/70">enquiry@loomandlogic.com</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-white/40 mt-1" size={18} />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Call Us</p>
                  <p className="text-sm font-light text-white/70">+91 96 5050 3679</p>
                  <p className="text-sm font-light text-white/70">+91 98 9923 5987</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-white/40 mt-1" size={18} />
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Visit Us</p>
                  <p className="text-sm font-light text-white/70 leading-relaxed">
                    B-1/H-2, Mohan Cooperative, Mathura Road,<br />
                    New Delhi - 110044, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] text-white/20 text-center md:text-left">
          <p>© 2026 Loom & Logic Creative. All Rights Reserved.</p>
          <p>Built with Intent</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
