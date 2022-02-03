import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const showNavbar = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="main-top">
        <div className="main-top-cont">
          <div className="logo-cont">
            <img className="logo" src="./images/logo.svg" alt="" />
          </div>
          <div>
            <ul className={toggle ? "navULactive" : "navUL"}>
              <li>
                <a href="/">
                  <Link className="nula" to="/">
                    Home
                  </Link>
                </a>
              </li>
              <li>
                <a href="/about">
                  <Link className="nula" to="/about">
                    About
                  </Link>
                </a>
              </li>
              <li>
                <a href="/contact">
                  <Link className="btn-t" to="/contact">
                    Contact
                  </Link>
                </a>
              </li>
            </ul>
            <div className="hamburger" onClick={showNavbar}>
              {toggle ? (
                <i class="fas fa-times"></i>
              ) : (
                <i class="fas fa-bars"></i>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
