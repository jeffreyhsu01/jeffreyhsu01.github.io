import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";
import './header.scss';
// import About from '../About/About'

    function Header() {
        const [hamMenu, setHamOpen] = useState(false)
        const handleToggle = () => {
            setHamOpen(!hamMenu)
        }

        return (
            <header class="header" height = "80">
                <div class="navbar">
                    <nav class="name-link">
                        <Link to="/" class="kVNvgp fWqsav">Jeffrey Hsu</Link>
                    </nav>
                     <nav class="navlinks">
                        <button onClick={handleToggle} class="SlideMenuToggle-sc-15qpx1o-0 bdIxsw"><svg viewBox="0 0 24 24" class="Menu__MenuIconOutline-jd4rtl-0 bwLYPW"><rect x="3" y="11" width="18" height="2" rx="0.95" ry="0.95"></rect><rect x="3" y="16" width="18" height="2" rx="0.95" ry="0.95"></rect><rect x="3" y="6" width="18" height="2" rx="0.95" ry="0.95"></rect></svg>{hamMenu ? "" : ""}</button>
                        <div class="content">
                            <Link to="/blog" class="kVNvgp fWqsav">Blog</Link>
                            <Link to="/about" class="kVNvgp fWqsav">About</Link>
                        </div>
                        </nav>
                </div>
                <div class={`mobileNav ${hamMenu ? " showMenu" : ""}`}>
                    <div class="vertNavList">
                        <Link to="/blog" class="mobileLink kVNvgp">Blog</Link>
                        <Link to="/about" class="mobileLink kVNvgp">About</Link>
                    </div>
                    
                </div>
            </header>
        )

    }

export default Header