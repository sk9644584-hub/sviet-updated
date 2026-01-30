import React from 'react'
import { Header, MainNav, TopBanner } from './Home'
import NavScrollProgress from './NavScrollProgress'

const NavBar = ({ topBanners }) => {

    return (
        <div id="site-navbar" className="relative">
            <NavScrollProgress />
            <TopBanner skills={topBanners} />
            <Header />
            {/* <Navigation /> */}
            <MainNav />
        </div>
    )
}

export { NavBar }
