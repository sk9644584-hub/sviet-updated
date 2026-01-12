"use client"
import React, { useEffect, useState } from "react"

export default function ScrollToNavbarButton() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const update = () => {
            const scrollTop = window.scrollY || window.pageYOffset
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0
            setProgress(pct)
        }

        update()
        window.addEventListener("scroll", update, { passive: true })
        window.addEventListener("resize", update)
        return () => {
            window.removeEventListener("scroll", update)
            window.removeEventListener("resize", update)
        }
    }, [])

    const handleClick = () => {
        const el = document.getElementById("site-navbar")
        if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    // Circular progress SVG parameters
    const size = 48
    const stroke = 4
    const radius = (size - stroke) / 2
    const circumference = 2 * Math.PI * radius
    const dashoffset = circumference - (progress / 100) * circumference

    return (
        <button
            onClick={handleClick}
            aria-label="Go to top navigation"
            title="Go to top"
            className="fixed right-4 bottom-6 z-50 rounded-full bg-[#003366] p-0 text-white shadow-lg hover:bg-[#002244] focus:outline-none"
            style={{ width: size, height: size }}
        >
            <svg width={size} height={size} className="block">
                <defs>
                    <filter id="btnShadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.2" />
                    </filter>
                </defs>
                <g transform={`translate(${size / 2}, ${size / 2})`}>
                    {/* background track */}
                    <circle
                        r={radius}
                        fill="transparent"
                        stroke="#e6e6e6"
                        strokeWidth={stroke}
                    />
                    {/* progress stroke */}
                    <circle
                        r={radius}
                        fill="transparent"
                        stroke="#00aaff"
                        strokeWidth={stroke}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashoffset}
                        transform="rotate(-90)"
                        style={{ transition: "stroke-dashoffset 120ms linear" }}
                    />
                    {/* center content */}
                    <text
                        x="0"
                        y="4"
                        textAnchor="middle"
                        fontSize="20"
                        fontWeight="700"
                        fill="#ffffff"
                        style={{ pointerEvents: "none" }}
                    >
                        ↑
                    </text>
                </g>
            </svg>
        </button>
    )
}
