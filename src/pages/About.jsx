import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const About = ({ setPage }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.reveal-section');
    
    sections.forEach((section) => {
      gsap.fromTo(section, 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    // Hero Floating Animation
    gsap.to('.hero-glow', {
      x: 'random(-50, 50)',
      y: 'random(-50, 50)',
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative bg-[#080808] text-white overflow-hidden">
      {/* Background Glows */}
      <div className="glow-purple top-[-10%] left-[-5%] w-[500px] h-[500px] opacity-25 hero-glow hidden md:block" />
      <div className="glow-blue bottom-[20%] right-[-10%] w-[600px] h-[600px] opacity-20 hero-glow hidden md:block" />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex flex-center px-4 sm:px-6 pt-28 md:pt-32 pb-16 md:pb-20">
        <div className="container mx-auto">
          <div className="max-w-5xl reveal-section">
            <h1 className="hero-heading leading-none mb-8 text-[clamp(2.6rem,10vw,7rem)]">
              Loom & Logic <br />
              <span className="text-gradient">Digital Architecture</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <p className="text-[clamp(1.125rem,3vw,1.5rem)] font-light text-white/60 leading-relaxed">
                A Full-Service Digital & Web Solutions Company. 
                We empower businesses to thrive online by blending innovative technology with strategic insights.
              </p>
              <div className="glass-morphism p-8 rounded-2xl relative overflow-hidden group">
                 <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                 <p className="text-lg text-white/80 leading-relaxed">
                   As a leading digital creative agency, our team leverages extensive expertise in the digital landscape to craft solutions that engage, inspire, and drive measurable results.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-20 md:py-32 relative reveal-section">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start mb-20">
            <h2 className="text-[clamp(2rem,8vw,4.5rem)] font-serif mb-8 md:mb-0">
              Our <span className="italic">Services</span>
            </h2>
            <div className="max-w-md text-white/60">
              <p className="mb-6">
                At Loom & Logic, we believe each brand has a story capable of huge online success when united with the right digital team.
              </p>
              <button className="text-white border-b border-white/30 pb-1 hover:border-white transition-colors">
                View All Capabilities +
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
            {[
              "Digital Strategy", "Design Services", "E-Commerce Solutions", "Web Development",
              "Web Application Development", "Technology", "Digital Marketing", "Web Hosting"
            ].map((service, i) => (
              <div key={i} className="bg-[#0a0a0a] p-8 md:p-10 hover:bg-white/5 transition-all duration-500 group">
                <span className="text-xs text-white/30 mb-4 block">0{i + 1}</span>
                <h3 className="text-xl font-medium mb-4 group-hover:translate-x-2 transition-transform">{service}</h3>
                <div className="h-0.5 w-0 bg-white/50 group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <h4 className="text-4xl md:text-6xl font-serif italic text-white/20 hover:text-white/40 transition-colors pointer-events-none">
              We Succeed When You Succeed.
            </h4>
          </div>
        </div>
      </section>

      {/* 3. EXPERIENCE SECTION */}
      <section className="py-20 md:py-32 bg-white/5 reveal-section">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col justify-center">
              <div className="relative inline-block">
                <h2 className="text-[clamp(5rem,22vw,18rem)] font-serif leading-[0.8] text-gradient opacity-80">
                  25+
                </h2>
                <p className="absolute bottom-0 left-0 text-lg md:text-xl tracking-[0.3em] uppercase text-white/40 ml-4 translate-y-full">
                  Years of Excellence
                </p>
              </div>
            </div>
            <div className="space-y-8 text-lg text-white/70 leading-relaxed font-light">
              <p>
                Our objective is to align your business goals of wider reach and growth with exceptionally functional and result-oriented digital experiences.
              </p>
              <p>
                As a top digital agency, we connect you to the world, inspire action, and encourage conversion across digital channels and mediums. We offer a comprehensive range of services as a premier partner for clients globally.
              </p>
              <div className="h-px w-full bg-gradient-to-r from-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. PILLARS / TRANSFORMATION SECTION */}
      <section className="py-24 md:py-40 relative reveal-section overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="mb-24 relative">
             <h2 className="text-[clamp(2.5rem,11vw,12rem)] font-serif text-white/5 absolute -top-6 md:-top-24 left-0 pointer-events-none select-none tracking-tighter">
                TRANSFORMATION
             </h2>
             <h3 className="text-[clamp(1.8rem,6vw,3.8rem)] font-light relative z-10 pt-4">
                Strategic <span className="italic font-serif">Pillars</span>
             </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Awe-inspiring designs",
                desc: "Digital technology solutions armed with awe-inspiring designs and meticulous strategy."
              },
              {
                title: "Global exposure",
                desc: "Immense experience of working with clients from around the globe across many business verticals."
              },
              {
                title: "Expansive experience",
                desc: "Cross Platforms, Technologies, Markets and Industry Exposure."
              }
            ].map((pillar, i) => (
              <div key={i} className="glass-morphism p-12 rounded-3xl hover:bg-white/10 transition-all group">
                <div className="size-12 rounded-full border border-white/20 flex-center mb-8 group-hover:bg-white group-hover:text-black transition-all">
                  {i + 1}
                </div>
                <h4 className="text-2xl font-serif mb-4">{pillar.title}</h4>
                <p className="text-white/50 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Contact Tease */}
      <section className="py-20 md:py-32 text-center reveal-section">
        <div className="container mx-auto px-4 sm:px-6">
          <p className="text-white/40 uppercase tracking-widest text-sm mb-8">Ready to evolve?</p>
          <button
            onClick={() => setPage?.('contact')}
            className="text-[clamp(2.2rem,10vw,7rem)] font-serif hover:italic transition-all"
          >
            Let's <span className="text-white/20">Connect</span>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
