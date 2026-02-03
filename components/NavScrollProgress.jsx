"use client"
import React, { useEffect, useState } from "react"

export default function NavScrollProgress() {
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

    return (
        <div aria-hidden="true" className="w-full h-0 bg-transparent">
            <div
                className="h-0.5 bg-[#007bff] transition-all duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    )
}
