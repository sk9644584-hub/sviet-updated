"use client"
import Link from 'next/link'
import React from 'react'

const Sidebar = ({ routeName, activeRoute = 0, departmentNameForNav }) => {
    const sidebarLinks = [
        { name: "About Department", href: "/academics/" + routeName + "#about-department", },
        { name: "Department Profile", href: "/academics/" + routeName + "#department-profile" },
        { name: "Vision", href: "/academics/" + routeName + "#vision" },
        { name: "Mission", href: "/academics/" + routeName + "#mission" },
        { name: "Programmes", href: "/Programmes/" + routeName },
        { name: "Syllabus", href: "/syllabus/" + routeName },
    ]
    const [activeIndex, setActiveIndex] = React.useState(activeRoute)

    return (
        <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-lg shadow-sm p-4">
                <h3 className="text-base text-center font-semibold text-[#003366] mb-4 border-b pb-2">
                    {departmentNameForNav}
                </h3>
                <nav className="space-y-1">
                    {sidebarLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={() => setActiveIndex(index)}
                            className={`block px-3 py-2 text-sm rounded-md transition-colors ${index == activeIndex
                                ? "bg-[#007bff] text-white"
                                : "text-gray-700 hover:bg-white hover:text-[#007bff]"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export { Sidebar }