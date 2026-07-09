"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { patchHistoryForLocationChange } from "@/lib/history-events"

const Sidebar = ({ showFaculty = true, routeName, departmentNameForNav }) => {
    const pathname = usePathname()
    const [hash, setHash] = React.useState("")

    React.useEffect(() => {
        patchHistoryForLocationChange()

        const updateHash = () => setHash(window.location.hash)
        updateHash()

        window.addEventListener("hashchange", updateHash)
        window.addEventListener("locationchange", updateHash)

        return () => {
            window.removeEventListener("hashchange", updateHash)
            window.removeEventListener("locationchange", updateHash)
        }
    }, [])

    const sidebarLinks = [
        { name: "About Department", pathname: "/academics/" + routeName, hash: "about-department" },
        { name: "Department Profile", pathname: "/academics/" + routeName, hash: "department-profile" },
        { name: "Vision", pathname: "/academics/" + routeName, hash: "vision" },
        { name: "Mission", pathname: "/academics/" + routeName, hash: "mission" },
        { name: "Programmes", pathname: "/Programmes/" + routeName, hash: "" },
        { name: "Syllabus", pathname: "/syllabus/" + routeName, hash: "" },
        { name: "Faculty Members", pathname: "/faculty/" + routeName, hash: "" },
    ]

    const isLinkActive = (link) => {
        if (pathname !== link.pathname) return false
        if (!link.hash) return true
        if (hash === `#${link.hash}`) return true
        // landed on /academics/[dept] with no hash yet -> default section
        if (hash === "" && link.hash === "about-department") return true
        return false
    }

    return (
        <div className="lg:col-span-1 lg:self-start lg:sticky lg:top-6">
            <div className="bg-gray-100 rounded-lg shadow-sm p-4 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
                <h3 className="text-base text-center font-semibold text-[#003366] mb-4 border-b pb-2">
                    {departmentNameForNav}
                </h3>
                <nav className="space-y-1">
                    {sidebarLinks.map((link, index) => {
                        if (link.name === "Faculty Members" && !showFaculty) return null

                        const href = link.hash ? `${link.pathname}#${link.hash}` : link.pathname
                        const isActive = isLinkActive(link)

                        return (
                            <Link
                                key={index}
                                href={href}
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

export { Sidebar }