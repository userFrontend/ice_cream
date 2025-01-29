import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { RiDiscountPercentFill, RiFileList3Fill, RiFileList3Line, RiHome3Fill, RiHome3Line } from "react-icons/ri";
import { RiLinkM } from "react-icons/ri";

import { TbRosetteDiscount } from "react-icons/tb";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-lists">
          <li className="nav-items">
            <NavLink to="/">
              <RiHome3Line className="icon unactive-icon" />
              <RiHome3Fill className="icon active-icon" />
              <span>Bosh sahifa</span>
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/tasks">
              <RiFileList3Line className="icon unactive-icon" />
              <RiFileList3Fill className="icon active-icon" />
              <span>Joylangan e’lonlar</span>
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/promocodes">
              <TbRosetteDiscount className="resize unactive-icon" />
              <RiDiscountPercentFill  className="resize active-icon" />
              <span>Promo kodlar</span>
            </NavLink>
          </li>
          <li className="nav-items">
            <NavLink to="/links">
              <RiLinkM className="resize" />
              <span>Referal havolalar</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
