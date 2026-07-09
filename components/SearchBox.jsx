"use client"

import * as React from "react"
import { Search, X } from "lucide-react"
import Fuse from "fuse.js"
import { useRouter } from "next/navigation"
import { navItems } from "./Home/MainNav/NavItems"
import { getGlobalSearchData } from "@/app/actions/searchData"

const staticPages = [
    // CSE
    { name: "B.Tech Computer Science & Engineering", href: "/academics/Computer-Science-And-Engineering", keywords: "btech, cse, computer science engineering, academics, coding" },
    { name: "CSE Syllabus", href: "/syllabus/Computer-Science-And-Engineering", keywords: "cse, btech, computer science engineering, syllabus, subjects, exams" },
    { name: "CSE Programmes", href: "/Programmes/Computer-Science-And-Engineering", keywords: "cse, btech, computer science engineering, programmes, courses, degrees" },
    { name: "CSE Faculty Members", href: "/faculty/Computer-Science-And-Engineering", keywords: "cse, btech, computer science engineering, faculty, staff, teachers, hod" },

    // CA (BCA / MCA)
    { name: "Computer Applications (BCA / MCA)", href: "/academics/Computer-Applications", keywords: "bca, mca, computer applications, academics, coding, bachelor" },
    { name: "BCA / MCA Syllabus", href: "/syllabus/Computer-Applications", keywords: "bca, mca, computer applications, syllabus, subjects, exams" },
    { name: "BCA / MCA Programmes", href: "/Programmes/Computer-Applications", keywords: "bca, mca, computer applications, programmes, courses, degrees" },
    { name: "Computer Applications Faculty", href: "/faculty/Computer-Applications", keywords: "bca, mca, computer applications, faculty, staff, teachers, hod" },

    // Business Administration (BBA / MBA / B.Com)
    { name: "Business Administration (BBA / MBA / B.Com)", href: "/academics/Business-Administration", keywords: "bba, mba, bcom, business administration, commerce, academics" },
    { name: "BBA / MBA / B.Com Syllabus", href: "/syllabus/Business-Administration", keywords: "bba, mba, bcom, business administration, commerce, syllabus, subjects" },
    { name: "BBA / MBA / B.Com Programmes", href: "/Programmes/Business-Administration", keywords: "bba, mba, bcom, business administration, commerce, programmes, courses" },
    { name: "Business Administration Faculty", href: "/faculty/Business-Administration", keywords: "bba, mba, bcom, business administration, commerce, faculty, staff, teachers, hod" },

    // Hotel management (BHMCT / B.Voc / B.Sc Nutrition & Dietetics)
    { name: "Hotel Management (BHMCT / B.Voc / B.Sc Nutrition / MHMCT)", href: "/academics/Hotel-Management", keywords: "bhmct, hotel management, hospitality, catering technology, bvoc, b.sc nutrition, dietetics, mhmct, academics" },
    { name: "Hotel Management Syllabus", href: "/syllabus/Hotel-Management", keywords: "bhmct, hotel management, hospitality, catering, bvoc, nutrition, dietetics, mhmct, syllabus, subjects" },
    { name: "Hotel Management Programmes", href: "/Programmes/Hotel-Management", keywords: "bhmct, hotel management, hospitality, catering, bvoc, nutrition, dietetics, mhmct, programmes, courses" },
    
    // ECE
    { name: "B.Tech Electronics & Communication", href: "/academics/Electronics-And-Communication-Engineering", keywords: "ece, electronics, communication, engineering, btech, academics" },
    { name: "ECE Syllabus", href: "/syllabus/Electronics-And-Communication-Engineering", keywords: "ece, electronics, communication, btech, syllabus, subjects" },
    { name: "ECE Programmes", href: "/Programmes/Electronics-And-Communication-Engineering", keywords: "ece, electronics, communication, btech, programmes, courses" },
    { name: "ECE Faculty Members", href: "/faculty/Electronics-And-Communication-Engineering", keywords: "ece, electronics, communication, btech, faculty, staff, teachers, hod" },

    // ME
    { name: "B.Tech Mechanical Engineering", href: "/academics/Mechanical-Engineering", keywords: "me, mechanical, engineering, btech, academics" },
    { name: "Mechanical Engineering Syllabus", href: "/syllabus/Mechanical-Engineering", keywords: "me, mechanical, btech, syllabus, subjects" },
    { name: "Mechanical Programmes", href: "/Programmes/Mechanical-Engineering", keywords: "me, mechanical, btech, programmes, courses" },
    { name: "Mechanical Faculty Members", href: "/faculty/Mechanical-Engineering", keywords: "me, mechanical, btech, faculty, staff, teachers, hod" },

    // EE
    { name: "B.Tech Electrical Engineering", href: "/academics/Electrical-Engineering", keywords: "ee, electrical, engineering, btech, academics" },
    { name: "EE Syllabus", href: "/syllabus/Electrical-Engineering", keywords: "ee, electrical, btech, syllabus, subjects" },
    { name: "EE Programmes", href: "/Programmes/Electrical-Engineering", keywords: "ee, electrical, btech, programmes, courses" },
    { name: "EE Faculty Members", href: "/faculty/Electrical-Engineering", keywords: "ee, electrical, btech, faculty, staff, teachers, hod" },

    // CE
    { name: "B.Tech Civil Engineering", href: "/academics/Civil-Engineering", keywords: "ce, civil, engineering, btech, academics" },
    { name: "CE Syllabus", href: "/syllabus/Civil-Engineering", keywords: "ce, civil, btech, syllabus, subjects" },
    { name: "CE Programmes", href: "/Programmes/Civil-Engineering", keywords: "ce, civil, btech, programmes, courses" },
    { name: "CE Faculty Members", href: "/faculty/Civil-Engineering", keywords: "ce, civil, btech, faculty, staff, teachers, hod" },

    // General Site Pages (Added for Comprehensive Indexing)
    { name: "Admissions", href: "/Admissions", keywords: "apply, admission, registration, fee, join", group: "General" },
    { name: "Alumni Network", href: "/Alumni", keywords: "alumni, graduates, past students, network, connect", group: "General" },
    { name: "Campus Tour", href: "/Campustour", keywords: "campus, tour, video, virtual, infrastructure", group: "General" },
    { name: "College Gallery", href: "/CollegeGallery", keywords: "gallery, photos, pictures, events, images", group: "General" },
    { name: "Contact Us", href: "/contact-us", keywords: "contact, phone, email, address, reach out, map, location", group: "General" },
    { name: "Developers", href: "/Developers", keywords: "developers, creators, technical team, website team", group: "General" },
    { name: "Director General", href: "/Director-General", keywords: "director, dg, leadership, message, administration", group: "Leadership" },
    { name: "Mandatory Disclosures", href: "/mandatory_disclosures", keywords: "mandatory, disclosures, aicte, legal, compliance, documents", group: "Documents" },
    { name: "NAAC", href: "/Naac", keywords: "naac, accreditation, quality, grading, cycles", group: "General" },
    { name: "NCC (National Cadet Corps)", href: "/Ncc", keywords: "ncc, cadets, army, training, patriotic, national", group: "General" },
    { name: "NSS (National Service Scheme)", href: "/Nss", keywords: "nss, social service, community, volunteers", group: "General" },
    { name: "Placement Cell", href: "/Placement", keywords: "placement, jobs, recruiters, career, hiring, companies", group: "General" },
    { name: "President Message", href: "/President", keywords: "president, message, leadership, founder", group: "Leadership" },
    { name: "Research & Development", href: "/Research", keywords: "research, papers, patents, innovation, r&d", group: "General" },
    { name: "Sitemap", href: "/Sitemap", fallback: true, keywords: "sitemap, links, index, all pages", group: "General" },
    { name: "Strategic Plan", href: "/Strategic-Plan", keywords: "strategy, plan, future, goals, roadmap", group: "General" },
    { name: "Student Welfare", href: "/Student-Welfare", keywords: "welfare, students, counselling, help, support, anti-ragging", group: "General" },
]

export function SearchBox() {
    const [open, setOpen] = React.useState(false)
    const [searchQuery, setSearchQuery] = React.useState("")
    const [dynamicItems, setDynamicItems] = React.useState([])
    const router = useRouter()

    React.useEffect(() => {
        // Fetch Dynamic Content via Server Action
        async function fetchDynamicData() {
            try {
                const data = await getGlobalSearchData()
                if (data && Array.isArray(data)) {
                    setDynamicItems(data)
                }
            } catch (error) {
                console.error("Failed to fetch dynamic search data", error)
            }
        }

        fetchDynamicData()
    }, [])

    const runCommand = React.useCallback((command) => {
        setOpen(false)
        setSearchQuery("")
        command()
    }, [])

    const allSearchItems = React.useMemo(() => {
        const items = [...staticPages, ...dynamicItems]

        // Extend with global nav items
        navItems.forEach((item) => {
            if (item.href && item.href !== "" && item.href !== "#") {
                items.push({ name: item.name, href: item.href, keywords: "nav, link, general, page", group: "General Link" })
            }
            if (item.dropdown && item.dropdown.length > 0) {
                item.dropdown.forEach((col) => {
                    if (col.links) {
                        col.links.forEach((link) => {
                            if (link.href && link.href !== "#") {
                                items.push({ name: link.name, href: link.href, keywords: `${item.name.toLowerCase()} nav link page`, group: item.name })
                            }
                            if (link.subLinks) {
                                link.subLinks.forEach((sub) => {
                                    items.push({ name: `${link.name} - ${sub.name}`, href: sub.href, keywords: `${link.name.toLowerCase()} nav sub link document ${sub.name.toLowerCase()}`, group: "Resources" })
                                })
                            }
                        })
                    }
                })
            }
        })

        // Deduplicate by href and name (gallery uses same href)
        const uniqueMap = new Map()
        items.forEach(it => {
            const key = `${it.name}-${it.href}`
            if (!uniqueMap.has(key)) uniqueMap.set(key, it)
        })

        return Array.from(uniqueMap.values())
    }, [dynamicItems])

    const fuse = React.useMemo(() => new Fuse(allSearchItems, {
        keys: [
            { name: "name", weight: 2 },
            { name: "keywords", weight: 1 }
        ],
        threshold: 0.35, // Allows slight typos
        ignoreLocation: true,
    }), [allSearchItems])

    const filteredItems = React.useMemo(() => {
        if (!searchQuery) return allSearchItems.slice(0, 10) // show top 10 as default
        return fuse.search(searchQuery).map(res => res.item).slice(0, 12)
    }, [searchQuery, fuse, allSearchItems])

    const highlightText = React.useCallback((text, query) => {
        if (!query) return text;
        // Split on query safely
        const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const parts = text.split(new RegExp(`(${escapedQuery})`, 'gi'));
        return (
            <span>
                {parts.map((p, i) =>
                    p.toLowerCase() === query.toLowerCase()
                        ? <strong key={i} className="text-[#007bff] font-bold bg-blue-50/50 rounded-sm italic">{p}</strong>
                        : p
                )}
            </span>
        );
    }, []);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="hidden md:flex items-center gap-2 px-3 py-2 text-sm text-gray-500 bg-gray-50 hover:bg-gray-100 rounded-md border shadow-sm transition-colors w-[150px] lg:w-[150px]"
            >
                <Search className="h-4 w-4" />
                <span>Search...</span>
            </button>

            {open && (
                <div
                    className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] bg-black/50 backdrop-blur-sm"
                    onClick={() => setOpen(false)}
                >
                    <div
                        className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100 mx-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center px-4 py-3 border-b">
                            <Search className="h-5 w-5 text-gray-400 mr-3 hidden sm:block" />
                            <input
                                autoFocus
                                className="flex-1 bg-transparent outline-none border-none text-base text-gray-900 placeholder-gray-400"
                                placeholder="Search for courses (e.g., BCA Syllabus), committees, or pages..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <button onClick={() => setOpen(false)} className="p-1 hover:bg-gray-100 rounded-md transition-colors ml-2">
                                <X className="h-5 w-5 text-gray-500" />
                            </button>
                        </div>

                        <div className="max-h-[60vh] overflow-y-auto p-2">
                            {filteredItems.length === 0 ? (
                                <div className="p-6 text-center text-gray-500 text-sm">
                                    No results found for "{searchQuery}".
                                </div>
                            ) : (
                                <div>
                                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                        {searchQuery ? "Search Results" : "Suggested Pages"}
                                    </div>
                                    <div className="mt-1 space-y-1">
                                        {filteredItems.map((item, itemIdx) => (
                                            <button
                                                key={itemIdx}
                                                onClick={() => runCommand(() => {
                                                    const isExternal = item.href.startsWith("http")
                                                    if (isExternal) {
                                                        window.open(item.href, "_blank")
                                                    } else {
                                                        router.push(item.href)
                                                    }
                                                })}
                                                className="w-full flex items-center text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md select-none outline-none focus:bg-gray-100 transition-colors"
                                            >
                                                <div className="flex-1 truncate">
                                                    {highlightText(item.name, searchQuery)}
                                                </div>
                                                {item.group && (
                                                    <span className="ml-3 text-[10px] text-gray-400 font-normal bg-gray-50 px-2 py-0.5 rounded-full border shrink-0">
                                                        {item.group}
                                                    </span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
