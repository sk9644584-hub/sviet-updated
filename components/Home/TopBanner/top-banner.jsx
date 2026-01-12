"use client"
let marqueeAnim = null
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

const marqueeAnimation = (element, speed = 50) => {
  const totalWidth = element.scrollWidth / 2 // since we're duplicating
  const duration = (totalWidth / speed) * 1000 // px/sec -> ms

  return element.animate(
    [
      { transform: "translateX(0)" },
      { transform: `translateX(-${totalWidth}px)` }
    ],
    {
      duration,
      iterations: Infinity,
      easing: "linear",
    }
  )
}


const TopBanner = ({ skills }) => {
  const skillsElementRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(0)
  useEffect(() => {
    const element = skillsElementRef.current
    if (!element) return

    marqueeAnim = marqueeAnimation(element, 60) // speed in px/sec

    const handleMouseEnter = () => marqueeAnim?.pause()
    const handleMouseLeave = () => marqueeAnim?.play()

    element.addEventListener("mouseenter", handleMouseEnter)
    element.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      element.removeEventListener("mouseenter", handleMouseEnter)
      element.removeEventListener("mouseleave", handleMouseLeave)
      marqueeAnim?.cancel()
      marqueeAnim = null
    }
  }, [skills])

  const handleResize = () => setWindowWidth(window.innerWidth)
  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative bg-[#f7f7f7] overflow-hidden text-white">
      <div
        id="skills"
        className=" w-max whitespace-nowrap py-2 px-5 lg:px-7 flex"
        ref={skillsElementRef}
      >
        <div className="flex gap-8 lg:gap-24">
          {[...skills, ...skills].map((skill, index) => (
            <span key={index} className="flex items-center text-sm whitespace-nowrap">
              {
                skill?.isNewItem && <img loading="lazy" className="inline mr-2" src="/blinking_new.gif" alt="blinking_new" />
              }
              {skill.title != "" && <span className="text-red-400 font-medium">
                {skill.title} :
              </span>}
              {skill.description != "" && <span className="ml-1 text-[#28a745] font-normal">
                {skill.description}
              </span>}
              {skill.linkRef != "" && <Link href={skill.linkRef} className="ml-1 underline font-light text-[#007bff] hover:underline">
                {skill.btnText}
              </Link>}

            </span>
          ))}
        </div>
      </div>
    </div>

  )
}

export { TopBanner }
