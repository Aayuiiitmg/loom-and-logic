import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'

const Magnetic = ({ children, strength = 0.5 }) => {
  const magnetic = useRef(null)

  useEffect(() => {
    const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" })
    const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" })

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { height, width, left, top } = magnetic.current.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x * strength)
      yTo(y * strength)
    }

    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
    }

    const current = magnetic.current
    current.addEventListener("mousemove", handleMouseMove)
    current.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      current.removeEventListener("mousemove", handleMouseMove)
      current.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [strength])

  return (
    React.cloneElement(children, { ref: magnetic })
  )
}

export default Magnetic
