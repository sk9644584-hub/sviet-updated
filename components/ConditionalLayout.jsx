"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import { NavBar } from '@/components/NavBar'
import Footer from '@/components/Footer'

export default function ConditionalLayout({ children, topBanners }) {
    const pathname = usePathname() || ''

    // Hide the global NavBar/Footer for the /m route (and any nested routes)
    const hideGlobals = pathname === '/m' || pathname.startsWith('/m/')

    return (
        <>
            {!hideGlobals && <NavBar topBanners={topBanners} />}
            {children}
            {!hideGlobals && <Footer />}
        </>
    )
}
