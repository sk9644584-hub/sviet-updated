"use client"

import Link from "next/link"
import { useState } from "react"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"
import { navItems } from "./NavItems"

export function MainNav() {
    const [activeDropdown, setActiveDropdown] = useState(null)



    return (
        <nav className="bg-[#007bff] md:px-10 lg:px-0     md:py-3 text-white">
            <div className=" mx-auto  flex items-center justify-between  ">
                {/* Desktop Navigation */}
                <ul className="hidden  flex-wrap justify-center  gap-x-0 gap-y-2 text-xs font-medium md:flex  w-full">
                    {navItems.map(item => (
                        <li
                            onMouseEnter={() => setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                            key={item.name}
                            className="relative group  text-center"

                        >
                            {item.dropdown && item.dropdown.length > 0 ? (
                                <DropdownMenu

                                    open={activeDropdown === item.name}
                                    onOpenChange={open => !open && setActiveDropdown(null)}
                                >
                                    <DropdownMenuTrigger asChild>
                                        <span
                                            className={`cursor-pointerz lg:px-2 md:px-5 px-1 py-3 whitespace-nowrap   block transition-colors duration-200 uppercase
                        ${activeDropdown === item.name
                                                    ? "bg-white text-[#007bff]"
                                                    : "hover:bg-white hover:text-[#007bff]"
                                                }
                      `}
                                            // Prevent navigation on click for dropdown triggers
                                            onClick={e => e.preventDefault()}
                                        >
                                            {item.name}
                                        </span>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        className="bg-white shadow-lg py-4 rounded-none border-t-0 !overflow-visible"
                                        // Align content to the start of the trigger
                                        align="start"
                                        // Align content directly below trigger
                                        sideOffset={0}
                                    >
                                        <div className={`container mx-auto grid grid-cols-1 gap-x-7 gap-y-4 px-4 lg:px-5   ${item.dropdown.length > 1 ? "md:grid-cols-2" : ""} `}>
                                            {item.dropdown.map((col, colIndex) => (
                                                <div key={colIndex}>
                                                    {col.title && (
                                                        <h5 className="mb-2 font-medium text-gray-900">
                                                            {col.title}
                                                        </h5>
                                                    )}
                                                    <ul className="space-y-1">
                                                        {col.links.map((link, linkIndex) => (
                                                            <li key={linkIndex} className="relative w-full">
                                                                {link.subLinks && link.subLinks.length > 0 ? (
                                                                    <Accordion type="single" collapsible className="w-full">
                                                                        <AccordionItem value={link.name} className="border-b-0 space-y-0 pb-0">
                                                                            <AccordionTrigger className="py-1 text-sm text-left text-gray-700 hover:text-[#007bff] hover:no-underline flex justify-between w-full font-medium">
                                                                                {link.name}
                                                                            </AccordionTrigger>
                                                                            <AccordionContent className="pb-1 pt-1 ml-3 border-l-2 border-gray-100 pl-3">
                                                                                <ul className="space-y-2">
                                                                                    {link.subLinks.map((sub, subIdx) => (
                                                                                        <li key={subIdx}>
                                                                                            <Link
                                                                                                href={sub.href}
                                                                                                className="text-gray-500 text-xs hover:text-[#007bff] block transition-colors"
                                                                                            >
                                                                                                {sub.name}
                                                                                            </Link>
                                                                                        </li>
                                                                                    ))}
                                                                                </ul>
                                                                            </AccordionContent>
                                                                        </AccordionItem>
                                                                    </Accordion>
                                                                ) : (
                                                                    <Link
                                                                        href={link.href}
                                                                        className="text-gray-700 text-sm hover:text-[#007bff] font-medium block py-1"
                                                                    >
                                                                        {link.name}
                                                                    </Link>
                                                                )}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <Link
                                    href={item.href}
                                    className={`whitespace-nowrap xl:px-3 md:px-5 lg:px-2 px-1 py-3 block transition-colors duration-200 hover:bg-white uppercase hover:text-[#007bff]`}
                                >
                                    {item.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>


            </div>
        </nav >
    )
}
