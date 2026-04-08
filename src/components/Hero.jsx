import { useEffect, useRef, useState } from "react";
import Button from "./Button";
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
      className={`bento-glass group perspective-1000 ${className}`}
    >
      <div className="relative z-10">
        <h3 className="text-4xl md:text-6xl font-serif text-white mb-2">
          {value.includes('+') ? `${count}+` : 
           value.includes('%') ? `${count}%` : 
           value.includes('/') ? `${count}/7` : count}
        </h3>
        <p className="text-sm uppercase tracking-widest text-[#3d4432] font-semibold mb-1">{title}</p>
        <p className="text-xs text-white/40 leading-relaxed">{subtext}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
    </div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    if (isLoading) return;

    // Split text staggered animation
    const tl = gsap.timeline();
    tl.from(".stagger-line", {
      y: 100,
      opacity: 0,
      duration: 1,
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
      scale: 0.8,
      y: 50,
      duration: 1,
      stagger: 0.2,
      ease: "back.out(1.7)"
    }, "-=1");

  }, { scope: containerRef, dependencies: [isLoading] });

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#050505] overflow-hidden flex items-center pt-20"
    >
      <TechBackground />

      {/* Top CTA Button */}
      <div className="absolute top-8 right-8 z-50">
        <Magnetic strength={0.2}>
          <div>
            <Button
              title="Work With Us"
              id="cta-hero"
              containerClass="bg-transparent border border-[#3d4432]/30 text-white animate-breathing px-8 py-3 rounded-full hover:bg-[#3d4432] transition-colors"
            />
          </div>
        </Magnetic>
      </div>

      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left Side: Typography */}
        <div className="space-y-4">
          <div className="overflow-hidden">
            <h1 className="special-font text-[10rem] md:text-[14rem] leading-none mb-4 stagger-line font-serif italic bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-[#3d4432]">
              WEAVE
            </h1>
          </div>
          <p className="hero-sub text-xl md:text-2xl text-white/60 font-light max-w-lg mb-12">
            Intertwining creativity with technical precision. <br />
            Crafting digital tapestries for the modern age.
          </p>
          <div className="overflow-hidden pt-8">
            <h2 className="special-font text-7xl md:text-9xl stagger-line text-outline uppercase tracking-tighter">
              AGENCY
            </h2>
          </div>
        </div>

        {/* Right Side: Bento Cards */}
        <div className="grid grid-cols-2 gap-6 h-full">
          <StatCard 
            title="Experience" 
            value="50+" 
            subtext="Premium projects delivered across 5 continents"
            className="col-span-2 stat-card" 
          />
          <StatCard 
            title="Quality" 
            value="100%" 
            subtext="Client satisfaction rate through code excellence"
            className="stat-card" 
          />
          <StatCard 
            title="Reliability" 
            value="24/7" 
            subtext="Available around the clock for digital support"
            className="stat-card" 
            // Handle non-numeric count-up differently
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
