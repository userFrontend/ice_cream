import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
