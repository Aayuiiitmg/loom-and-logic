import React from 'react'
import BentoCard, { BentoTilt } from './BentoCard'

const BentoGrid = () => {
  return (
    <section className="bg-white pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-sans text-lg text-olive/60">
            Design & Development
          </p>
          <p className="max-w-md font-serif text-lg text-olive/60">
            We weave logic into your digital loom, creating patterns that resonate with your users.
          </p>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="https://media.w3.org/2010/05/sintel/trailer.mp4"
            title={
              <>
                creati<b>ve</b> burst
              </>
            }
            description="Our flagship approach to rapid brand iteration and visual storytelling."
            isComingSoon
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="https://vjs.zencdn.net/v/oceans.mp4"
              title={
                <>
                  stra<b>te</b>gic focus
                </>
              }
              description="Deep research meets pixel-perfect execution."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src="https://media.w3.org/2010/05/bunny/movie.mp4"
              title={
                <>
                  mo<b>de</b>rn weave
                </>
              }
              description="Tailored digital experiences for the next generation of agencies."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              title={
                <>
                  ar<b>ti</b>san code
                </>
              }
              description="Handcrafted solutions for complex technical challenges."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-olive p-5">
              <h1 className="bento-title max-w-64 font-serif italic text-white text-3xl">
                mo<b>re</b> coming s<b>oo</b>n
              </h1>
              <div className="size-10 self-end">
                <svg viewBox="0 0 100 100" className="fill-white opacity-20">
                    <circle cx="50" cy="50" r="40" />
                </svg>
              </div>
            </div>
          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
            <video
              src="https://vjs.zencdn.net/v/oceans.mp4"
              loop
              muted
              autoPlay
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
