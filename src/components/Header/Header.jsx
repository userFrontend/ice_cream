import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <Link to='/' className="logo">
                    <img src="/images/logo.png" alt="logo" />
                </Link>

                <nav className={`nav-links ${menuOpen ? "hidden" : ""}`}>
                    <NavLink to='/about'>О холдинге</NavLink>
                    <NavLink to='/catalog'>Продукция</NavLink>
                    <NavLink to='/contact'>Контакты</NavLink>
                </nav>

                <div className={`contact ${menuOpen ? "hidden" : ""}`}>
                    <Link to='tel:501117733' className="phone">50 111 77 33</Link>
                </div>

                <button className={`menu-btn ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </button>
            </div>

            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
                <NavLink to='/about' onClick={toggleMenu}>О холдинге</NavLink>
                <NavLink to='/catalog' onClick={toggleMenu}>Продукция</NavLink>
                <NavLink to='/contact' onClick={toggleMenu}>Контакты</NavLink>
                <Link to='tel:501117733' className="phone">50 111 77 33</Link>
            </div>

            <div className="media-mobile">
                <NavLink to='/'><i className='bx bx-home-smile' ></i> Домой</NavLink>
                <NavLink to='/about'><i className='bx bx-package' ></i> О холдинге</NavLink>
                <NavLink to='/catalog'><i className='bx bx-basket'></i> Продукция</NavLink>
                <NavLink to='/contact'><i className='bx bx-universal-access' ></i> Контакты</NavLink>
            </div>
        </header>
    );
};

export default Header;
