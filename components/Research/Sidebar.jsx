"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const Sidebar = () => {
    const pathname = usePathname()
    const [hash, setHash] = React.useState("")

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            setHash(window.location.hash)

            const handleHashChange = () => {
                setHash(window.location.hash)
            }

            window.addEventListener("hashchange", handleHashChange)
            return () => {
                window.removeEventListener("hashchange", handleHashChange)
            }
        }
    }, [])

    const sidebarLinks = [
        { name: "Overview", href: "/Research" },
        { name: "Research & Development Committee", href: "/Research#Research" },
        { name: "Our Innovative Projects", href: "/Projects" },
        { name: "Journal Publications", href: "/Publications" },
        { name: "Patents", href: "/patents" },
        { name: "Books & Edited Chapters", href: "/Books-&-Edited-Chapters" },
    ]

    return (
        <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-lg shadow-sm p-4">
                <nav className="space-y-1">
                    {sidebarLinks.map((link, index) => {
                        const [basePath, linkHash] = link.href.split("#")

                        const isActive =
                            pathname === basePath &&
                            (linkHash ? `#${linkHash}` === hash : hash === "")

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

export { Sidebar }
