import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="max-width">
        <div className="footer-container">
          <img className="footer-logo" src="./images/white-logo.svg" alt="" />
          <h3>
            Learning, enjoying & leveling up <br /> one day at a time.
          </h3>
          <div className="footer-links">
            <i onClick={() => window.open("https://github.com/strogyy","_blank")} class="fab fa-github"></i>
            <i onClick={() => window.open("https://github.com/strogyy","_blank")}class="fab fa-linkedin"></i>
            <i onClick={() => window.open("https://github.com/strogyy","_blank")}class="fab fa-twitter"></i>
            <i onClick={() => window.open("https://github.com/strogyy","_blank")}class="fab fa-youtube"></i>
            <i onClick={() => window.open("https://github.com/strogyy","_blank")}class="fab fa-instagram"></i>
          </div>
          <p>
            Designed & Built by strogyy © 2022 <br />
            personal.com, Turkey
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
