import React from "react";
import data from "../data";

const Navbar = () => {
  const {navLinks} = data
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Jatin Vashisht</div>
        <div>
          <ul className="nav-links">
            {navLinks.map(({ href, title }) => (
              <li key={title}>
                <a href={href}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Jatin Vashisht</div>
        <div className="hamburger-menu">
          <div className="hamburger-icon" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="menu-links">
            {navLinks.map(({ href, title }) => (
              <li key={title}>
                <a href={href} onClick={toggleMenu}>{title}</a>
              </li>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
