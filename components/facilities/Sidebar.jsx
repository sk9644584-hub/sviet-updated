"use client"
import Link from 'next/link'
import React from 'react'
const sideBarData = [
    {
        title: "Library",
        slug: "library",
    },
    {
        title: "Hostel Accomodation",
        slug: "hostel-accomodation"
    },
    {
        title: "Auditorium",
        slug: "auditorium"
    },
    {
        title: "Sports",
        slug: "sports"
    },
    {
        title: "Gymnasium",
        slug: "gymnasium"
    },
    {
        title: "Cafeteria",
        slug: "cafeteria"
    },
    {
        title: "Transportation",
        slug: "transportation"
    },
    {
        title: "Counselling Centre",
        slug: "counselling-centre"
    },
    {
        title: "ATM Facility",
        slug: "atm-facility"
    }
]



const Sidebar = ({ departmentNameForNav, slug }) => {
    const [activeIndex, setActiveIndex] = React.useState(
        sideBarData.findIndex((data) => data.slug === slug)
    );
    return (
        <div className="lg:col-span-1">
            <div className="bg-gray-100 rounded-lg shadow-sm p-4">
                <h3 className="text-base text-center font-semibold text-[#003366] mb-4 border-b pb-2">
                    {departmentNameForNav}
                </h3>
                <nav className="space-y-1">
                    {sideBarData.map((data, index) => (
                        <Link
                            key={index}
                            href={`/facilities/${data.slug}`}
                            onClick={() => setActiveIndex(index)}
                            className={`block px-3 py-2 text-sm rounded-md transition-colors ${index == activeIndex
                                ? "bg-[#007bff] text-white"
                                : "text-gray-700 hover:bg-white hover:text-[#007bff]"
                                }`}
                        >
                            {data.title}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    )
}

export { Sidebar }