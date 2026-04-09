import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Hero from '../components/Hero'
import BentoGrid from '../components/BentoGrid'

gsap.registerPlugin(ScrollTrigger)

const Home = ({ setPage }) => {
  useGSAP(() => {
    gsap.from(".hero-sub", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: "power3.out"
    })

    gsap.from(".fade-in-up", {
      scrollTrigger: {
        trigger: ".fade-in-up",
        start: "top 80%"
      },
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: "power3.out"
    })
  })


  return (
    <div className="w-full">
      {/* Interactive Hero Section */}
      <Hero setPage={setPage} />

      {/* Interactive Grid */}
      <BentoGrid />

      {/* Mid Section Reveal */}
      <section className="fade-in-up relative overflow-hidden bg-[#080808] py-24 md:py-36 text-white">
        <div className="container mx-auto px-4 sm:px-6 md:px-10">
          <div className="max-w-5xl relative z-10">
            <h2 className="reveal-text text-center font-serif text-[clamp(2rem,7vw,4.25rem)] leading-tight tracking-[0.01em] text-white/90">
              Clarity in strategy. <span className="italic">Precision</span> in execution.
            </h2>
            <h3 className="pointer-events-none select-none text-center font-serif italic text-[clamp(2.75rem,11vw,7rem)] leading-none tracking-tight text-white/5 mt-2">
              LOOM & LOGIC
            </h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
