import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Hero from '../components/Hero'
import BentoGrid from '../components/BentoGrid'
import Magnetic from '../components/Magnetic'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  useGSAP(() => {
    // Reveal text animations
    gsap.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.2
    })

    gsap.from(".hero-sub", {
      opacity: 0,
      y: 20,
      duration: 1,
      delay: 0.8,
      ease: "power3.out"
    })

    gsap.from(".fade-in-up", {
      scrollTrigger: {
        trigger: ".fade-in-up",
        start: "top 80%"
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out"
    })
  })


  return (
    <div className="w-full">
      {/* Interactive Hero Section */}
      <Hero />

      {/* Interactive Grid */}
      <BentoGrid />

      {/* Mid Section Reveal */}
      <section className="fade-in-up relative overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#111827] to-[#0b0f14] py-40 text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,rgba(72,118,200,0.15),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(61,68,50,0.14),transparent_40%)]" />
        <div className="container mx-auto px-10">
          <div className="max-w-5xl relative z-10">
            <h2 className="reveal-text font-serif text-5xl md:text-7xl leading-tight tracking-[0.01em] text-white [text-shadow:0_0_24px_rgba(101,135,193,0.2)]">
              We don&apos;t just build websites. We craft digital <span className="italic text-white/90">experiences</span>.
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
