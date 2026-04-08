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
  })


  return (
    <div className="w-full">
      {/* Interactive Hero Section */}
      <Hero />

      {/* Interactive Grid */}
      <BentoGrid />

      {/* Mid Section Reveal */}
      <section className="bg-olive py-40 text-white">
        <div className="container mx-auto px-10">
          <div className="max-w-4xl">
            <h2 className="reveal-text font-serif text-5xl md:text-7xl leading-tight">
              Every thread matters. Every pixel counts. We build with <span className="italic">intent</span>.
            </h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
