import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechBackground from "./TechBackground";
import Magnetic from "./Magnetic";

gsap.registerPlugin(ScrollTrigger);

const StatCard = ({ title, value, subtext, className = "" }) => {
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);

  useGSAP(() => {
    // Count-up animation
    ScrollTrigger.create({
      trigger: cardRef.current,
      start: "top 80%",
      onEnter: () => {
        const targetValue = parseInt(value);
        if (isNaN(targetValue)) return;
        gsap.to({ val: 0 }, {
          val: targetValue,
          duration: 2,
          ease: "power2.out",
          onUpdate: function() {
            setCount(Math.floor(this.targets()[0].val));
          }
        });
      }
    });

    // Floating animation
    gsap.to(cardRef.current, {
      y: -15,
      duration: 3 + Math.random() * 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }, { scope: cardRef });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    gsap.to(cardRef.current, {
      rotateY: x * 30,
      rotateX: -y * 30,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`bento-glass group perspective-1000 transition-transform duration-500 hover:scale-[1.03] hover:shadow-[0_18px_60px_rgba(74,109,164,0.16)] ${className}`}
    >
      <div className="relative z-10">
        <h3 className="text-4xl md:text-6xl font-serif font-light tracking-wide text-white mb-3">
          {value.includes('+') ? `${count}+` : 
           value.includes('%') ? `${count}%` : 
           value.includes('/') ? `${count}/7` : count}
        </h3>
        <p className="text-xs uppercase tracking-[0.22em] text-white/55 font-semibold mb-2">{title}</p>
        <p className="text-sm text-white/70 leading-relaxed">{subtext}</p>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3d4432]/14 via-[#223048]/12 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
};

const Hero = ({ setPage }) => {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (isLoading) return;

    const prefersReducedMotion = window.matchMedia("(max-width: 768px)").matches;
    const tl = gsap.timeline();
    tl.from(".stagger-line", {
      y: prefersReducedMotion ? 20 : 60,
      opacity: 0,
      duration: prefersReducedMotion ? 0.5 : 0.9,
      stagger: 0.15,
      ease: "power4.out"
    })
    .from(".hero-sub", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .from(".stat-card", {
      opacity: 0,
      scale: prefersReducedMotion ? 0.96 : 0.9,
      y: prefersReducedMotion ? 15 : 30,
      duration: prefersReducedMotion ? 0.5 : 0.9,
      stagger: 0.2,
      ease: "power3.out"
    }, "-=1");

  }, { scope: containerRef, dependencies: [isLoading] });

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#080808] flex items-center pt-24"
    >
      <TechBackground />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0f14]/80 via-transparent to-[#0b0f14]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        {/* Left Side: Typography */}
        <div className="space-y-5">
          <p className="hero-sub inline-block rounded-full border border-white/15 bg-white/[0.03] px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-white/70">
            Digital Strategy • UI/UX • Web Development • E-commerce
          </p>
          <div className="overflow-hidden">
            <h1 className="stagger-line font-serif text-[clamp(2.2rem,7vw,5.2rem)] leading-[1.08] tracking-[0.015em] text-white">
              Digital Architecture for <span className="italic text-white/90">Modern Brands</span>
            </h1>
          </div>
          <p className="hero-sub text-lg md:text-xl text-white/70 font-light max-w-2xl">
            We design, build, and scale high-performance digital experiences — from strategy to execution.
          </p>
          <div className="hero-sub flex flex-wrap items-center gap-4 pt-4">
            <Magnetic strength={0.2}>
              <button
                onClick={() => setPage?.('about')}
                className="w-full sm:w-auto rounded-full border border-white/20 bg-white/[0.02] px-8 py-3 font-sans text-xs uppercase tracking-[0.18em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10"
              >
                View Our Work
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Right Side: Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-full">
          <StatCard 
            title="Projects Delivered Globally" 
            value="50+" 
            subtext="Trusted by ambitious teams across industries and regions."
            className="sm:col-span-2 stat-card" 
          />
          <StatCard 
            title="Commitment To Quality & Precision" 
            value="100%" 
            subtext="Crafted interfaces and robust systems with uncompromising standards."
            className="stat-card" 
          />
          <StatCard 
            title="Reliable Support & Iteration" 
            value="24/7" 
            subtext="Continuous collaboration and improvements through every release cycle."
            className="stat-card" 
            // Handle non-numeric count-up differently
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
