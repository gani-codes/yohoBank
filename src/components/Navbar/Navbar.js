import React, { useState } from "react";
import { logo, menu, close } from "../../assets";
import { navLinks } from "../../constants";

import './Navbar.css';
const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <nav >
            <div className="container nav__container">

                <div>
                    <a href="/">
                        <img src={logo} alt="" id="logo" />
                    </a>
                </div>

                <ul>
                    {navLinks.map((navLink) => (
                        <li key={navLink.id}>
                            <a className={navLink.id === 'home' ? 'active' : ""} href={`/${navLink.id}`}>{navLink.title}</a>
                        </li>
                    ))}
                    <div>
                        <a href="/" className="btn btn-primary">
                            Sign Up
                        </a>
                    </div>
                </ul>

                <div className="hamburger-menu">
                    <img src={toggle ? close : menu} alt="menu"
                        onClick={() => setToggle((prev) => !prev)} />

                    <ul style={{ display: toggle ? 'flex' : 'none' }}>
                        {navLinks.map((navLink) => (
                            <li key={navLink.id}>
                                <a className={navLink.id === 'home' ? 'active' : ""} href={`/${navLink.id}`}>{navLink.title}</a>
                            </li>
                        ))}

                        <div>
                            <a href="/" className="btn btn-primary">
                                Sign Up
                            </a>
                        </div>
                    </ul>
                </div>

            </div>
        </nav >
    );
};

export default Navbar;
