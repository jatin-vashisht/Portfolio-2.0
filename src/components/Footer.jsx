import React from "react";
import data from "../data";

const Footer = () => {
  const {navLinks} = data
  return (
    <footer>
      <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            {navLinks.map(({ href, title }) => (
              <li key={title}>
                <a href={href}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <p>Copyright &copy; {new Date().getFullYear()} Jatin Vashisht. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
