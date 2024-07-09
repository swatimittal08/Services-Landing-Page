import React from "react";
import "./Footer.css";
import Footerr from "./Footer.png";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Subscribe Now</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
        proin risus Sit
        <br /> purus ante dictum in malesuada id.
      </p>

      <input type="email" placeholder="Enter Your Email" />
      <button className="button">Subscribe</button>
      <br />

      <img src={Footerr} alt={Footerr} />
    </footer>
  );
};

export default Footer;
