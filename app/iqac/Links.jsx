"use client"
import React from 'react'

const Links = () => {
    return (
        <div className="flex flex-col gap-3 md:flex-row md:gap-6">
            <span
                onClick={() => window.open("https://static.shubhampf.cloud/iqac-manual.pdf")}
                className="cursor-pointer inline-block px-6 py-3 text-white bg-[#003366] rounded-lg hover:bg-[#0055a5] transition"
            >
                📘 Manual IQAC
            </span>
            <span
                onClick={() => window.open("https://static.shubhampf.cloud/ReformationofIQAC.pdf")}
                className="cursor-pointer inline-block px-6 py-3 text-white bg-[#003366] rounded-lg hover:bg-[#0055a5] transition"
            >
                🏗️ List Of Members
            </span>
        </div>
    )
}

export { Links }