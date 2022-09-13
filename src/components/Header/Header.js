import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './header.scss';
// import About from '../About/About'

class Header extends Component {

    render() {
        return (
           <header class="header" height = "80">
                <div class="navbar">
                    <Link to="/" class ="name">Jeffrey Hsu</Link>
                    <nav class="navlinks">
                        <div class="content">
                            <Link to="/blog" class="kVNvgp fWqsav">Blog</Link>
                            <Link to="/about" class="kVNvgp fWqsav">About</Link>
                        </div>
                        <button class="SlideMenuToggle-sc-15qpx1o-0 bdIxsw"><svg viewBox="0 0 24 24" class="Menu__MenuIconOutline-jd4rtl-0 bwLYPW"><rect x="3" y="11" width="18" height="2" rx="0.95" ry="0.95"></rect><rect x="3" y="16" width="18" height="2" rx="0.95" ry="0.95"></rect><rect x="3" y="6" width="18" height="2" rx="0.95" ry="0.95"></rect></svg></button>
                    </nav>
                </div>
           </header>
        )
    }
}

export default Header