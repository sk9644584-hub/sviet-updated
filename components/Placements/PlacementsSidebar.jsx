"use client"
import Link from 'next/link'
import { usePathname } from "next/navigation"
import React from 'react'

const PlacementsSidebar = () => {
    const pathname = usePathname()

    const sidebarLinks = [
        { name: "Overview", href: "/Placements", },
        { name: "Placement Training", href: "/Placements-Training" },
        { name: "Placement Activities", href: "/Placements-Activities" },
        { name: "Recruiting Companies", href: "/Recruiting-Companies" },
        { name: "Gallery", href: "/Gallery" },
    ]

    return (
        <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-lg shadow-sm p-4">
                <nav className="space-y-1">
                    {sidebarLinks.map((link, index) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={index}
                                href={link.href}
                                className={`block px-3 py-2 text-sm rounded-md transition-colors ${isActive
                                    ? "bg-[#007bff] text-white"
                                    : "text-gray-700 hover:bg-white hover:text-[#007bff]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </div>
        </div>
    )
}

export { PlacementsSidebar }
