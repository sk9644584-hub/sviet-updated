// "use client"
// import Link from "next/link"
// import { usePathname } from "next/navigation"
// import React from "react"

// const Sidebar = () => {
//     const pathname = usePathname()
//     const [hash, setHash] = React.useState("")

//     React.useEffect(() => {
//         const updateHash = () => {
//             setHash(window.location.hash);
//         };

//         updateHash();

//         window.addEventListener("hashchange", updateHash);

//         // Next.js Link doesn't always fire hashchange,
//         // so also update after every click.
//         const handleClick = () => {
//             requestAnimationFrame(updateHash);
//         };

//         document.addEventListener("click", handleClick);

//         return () => {
//             window.removeEventListener("hashchange", updateHash);
//             document.removeEventListener("click", handleClick);
//         };
//     }, [pathname]);

//     const sidebarLinks = [
//         {
//             name: "Overview",
//             pathname: "/Research",
//             hash: "overview",
//         },
//         {
//             name: "Research & Development Committee",
//             pathname: "/Research",
//             hash: "research",
//         },
//         {
//             name: "Our Innovative Projects",
//             pathname: "/Projects",
//             hash: "",
//         },
//         {
//             name: "Journal Publications",
//             pathname: "/Publications",
//             hash: "",
//         },
//         {
//             name: "Patents",
//             pathname: "/patents",
//             hash: "",
//         },
//         {
//             name: "Books & Edited Chapters",
//             pathname: "/Books-&-Edited-Chapters",
//             hash: "",
//         },
//     ]

//     return (
//         <div className="lg:col-span-1">
//             <div className="bg-gray-100 rounded-lg shadow-sm p-4">
//                 <nav className="space-y-1">
//                     {sidebarLinks.map((link, index) => {
//                         const href = link.hash
//                             ? `${link.pathname}#${link.hash}`
//                             : link.pathname

//                         const isActive =
//                             pathname === link.pathname &&
//                             (
//                                 link.hash
//                                     ? hash === `#${link.hash}`
//                                     : hash === ""
//                             );

//                         return (
//                             <Link
//                                 key={index}
//                                 href={href}
//                                 className={`block px-3 py-2 text-sm rounded-md transition-colors ${isActive
//                                     ? "bg-[#007bff] text-white"
//                                     : "text-gray-700 hover:bg-white hover:text-[#007bff]"
//                                     }`}
//                             >
//                                 {link.name}
//                             </Link>
//                         )
//                     })}
//                 </nav>
//             </div>
//         </div>
//     )
// }

// export { Sidebar }

"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { patchHistoryForLocationChange } from "@/lib/history-events"

const Sidebar = () => {
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
        { name: "Overview", pathname: "/Research", hash: "overview" },
        { name: "Research & Development Committee", pathname: "/Research", hash: "research" },
        { name: "Our Innovative Projects", pathname: "/Projects", hash: "" },
        { name: "Journal Publications", pathname: "/Publications", hash: "" },
        { name: "Patents", pathname: "/patents", hash: "" },
        { name: "Books & Edited Chapters", pathname: "/Books-&-Edited-Chapters", hash: "" },
    ]

    const isLinkActive = (link) => {
        if (pathname !== link.pathname) return false
        if (!link.hash) return true
        if (hash === `#${link.hash}`) return true
        // land on /Research with no hash yet -> Overview is the default section
        if (hash === "" && link.hash === "overview") return true
        return false
    }

    return (
        <div className="lg:col-span-1 lg:self-start lg:sticky lg:top-6 ">
            <div className="bg-gray-100 rounded-lg shadow-sm p-4 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
                <nav className="space-y-1">
                    {sidebarLinks.map((link, index) => {
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