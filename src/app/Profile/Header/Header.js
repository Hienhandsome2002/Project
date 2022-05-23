import React, { memo, useState, useEffect } from "react";
import './Header.scss'
function Header() {
    return (
        <header className="header">
            <nav className="nav">

                <ul className="listItems">
                    <li className="item">
                        <a href="home" className="link">
                            Home
                        </a>
                    </li>
                    <li className="item">
                        <a href="about" className="link">
                            About
                        </a>
                    </li>
                    <li className="item" >
                        <a href="contact" className="link">
                            Contact
                        </a>
                    </li>
                    <li className="item">
                        <a href="education" className="link">
                            Education
                        </a>
                    </li>
                    <li className="item">
                        <a href="experience" className="link">
                            Experience
                        </a>
                    </li>
                    <li className="item">
                        <a href="skill" className="link">
                            Skills
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default memo(Header);