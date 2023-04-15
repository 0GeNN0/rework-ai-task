import React from "react";

// Images
import logo from '../../assets/images/logo.png';

// CSS
import './header.css';

// Components
import Button from "../Button/Button";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="LOGO" />
      <div className="links">
        <ul>
          <li>Our Solutions</li>
          <li>Resources</li>
          <li>About Us</li>
          <li>Careers</li>
        </ul>
        <Button text='Contact Us' brW={1} pad='4px 20px' fnS={18} />
      </div>
    </header>
  );
}

export default Header;
