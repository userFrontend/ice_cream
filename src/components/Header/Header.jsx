import React, { useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <img src="/images/logo.png" alt="logo" />
                </div>

                <nav className={`nav-links ${menuOpen ? "hidden" : ""}`}>
                    <NavLink to='/about'>О холдинге</NavLink>
                    <NavLink to='/'>Продукция</NavLink>
                    <NavLink to='/contact'>Контакты</NavLink>
                </nav>

                <div className={`contact ${menuOpen ? "hidden" : ""}`}>
                    <span className="phone">71 228 00 88</span>
                </div>

                <button className={`menu-btn ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
            </div>

            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <NavLink to='/' onClick={toggleMenu}>О холдинге</NavLink>
                <NavLink to='/' onClick={toggleMenu}>Продукция</NavLink>
                <NavLink to='/' onClick={toggleMenu}>Контакты</NavLink>
                <span className="phone">71 228 00 88</span>
            </div>
        </header>
    );
};

export default Header;
