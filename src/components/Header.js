import React from "react";
import "./Header.css";
import Logo from "./Logo.png";
import Line from "./Line.png";

const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <img src={Logo} alt={Logo} style={{ height: "20px" }} />
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <a href="">Services</a>
        <a href="">Blog</a>
        <button className="button">Login</button> <br />
        <img src={Line} alt={Line} style={{ width: "100%" }} />
      </nav>
    </header>
  );
};

export default Header;
