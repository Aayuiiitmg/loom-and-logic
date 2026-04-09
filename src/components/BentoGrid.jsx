import React from 'react'
import BentoCard, { BentoTilt } from './BentoCard'

const BentoGrid = () => {
  const techMedia = {
    keyboard: '/media/dev-typing-dark.mp4',
    codeScroll: '/media/react-typescript-scroll.mp4',
    stylusUi: '/media/designer-stylus-wireframe.mp4',
    studioDesk: '/media/minimalist-studio-desk.mp4',
    fallbackA: 'https://media.w3.org/2010/05/sintel/trailer.mp4',
    fallbackB: 'https://vjs.zencdn.net/v/oceans.mp4',
    fallbackC: 'https://media.w3.org/2010/05/bunny/movie.mp4',
    fallbackD: 'https://www.w3schools.com/html/mov_bbb.mp4',
  }

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
            src={techMedia.keyboard}
            fallbackSrc={techMedia.fallbackA}
            title={
              <>
                kinetic<b> co</b>de
              </>
            }
            description="Low-light close-up of mechanical keystrokes for a focused, high-performance studio mood."
            isComingSoon
          />
        </BentoTilt>

        <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src={techMedia.codeScroll}
              fallbackSrc={techMedia.fallbackB}
              title={
                <>
                  re<b>ac</b>t flow
                </>
              }
              description="Clean React and TypeScript lines scrolling on a dark 4K monitor."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard
              src={techMedia.stylusUi}
              fallbackSrc={techMedia.fallbackC}
              title={
                <>
                  ui<b> cr</b>aft
                </>
              }
              description="A designer refining wireframes on tablet with stylus precision."
            />
          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard
              src={techMedia.studioDesk}
              fallbackSrc={techMedia.fallbackD}
              title={
                <>
                  ni<b>gh</b>t studio
                </>
              }
              description="Minimalist workstation atmosphere with olive and deep-blue monitor glows."
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
              src={techMedia.codeScroll}
              loop
              muted
              autoPlay
              playsInline
              className="size-full object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#040608]/65 via-transparent to-[#1a2740]/45" />
          </BentoTilt>
        </div>
      </div>
    </section>
  )
}

export default BentoGrid
