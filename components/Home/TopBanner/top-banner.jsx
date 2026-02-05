"use client"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

let marqueeAnim = null

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
    // Set initial width and add event listener
    setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    // CHANGE 1: Replaced 'bg-yellow-300' with 'bg-amber-400' for a bolder look.
    // CHANGE 2: Added 'border-t-0' to explicitly remove any top border.
    <div className="relative bg-[#f7f7f7] overflow-hidden text-white border-t-0">
      <div
        id="skills"
        className="w-max whitespace-nowrap py-2 px-5 lg:px-7 flex"
        ref={skillsElementRef}
      >
        <div className="flex gap-8 lg:gap-24">
          {[...skills, ...skills].map((skill, index) => (
            <span key={index} className="flex items-center text-sm whitespace-nowrap">
              {
                skill?.isNewItem && <img loading="lazy" className="inline mr-2" src="/blinking_new.gif" alt="blinking_new" />
              }
              {skill.title != "" && <span className="text-[#D32F2F] font-bold"> {/* Made title slightly darker and bolder for better contrast on amber */}
                {skill.title} :
              </span>}
              {skill.description != "" && <span className="ml-1 text-[#1A237E] font-medium"> {/* Made description slightly darker for contrast */}
                {skill.description}
              </span>}
              {skill.linkRef != "" && <Link href={skill.linkRef} className="ml-1 underline font-medium text-[#0288D1] hover:text-blue-900"> {/* Made link darker for contrast */}
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