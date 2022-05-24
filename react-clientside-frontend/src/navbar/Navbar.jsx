/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.scss";
import React, { useState } from "react";
import { CgUserlane } from "react-icons/cg";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav" id="1">
        {/* 1st logo part  */}
        <div
          className="logo"
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            width: "100%",
            // border: "1px solid red",
          }}
        >
          <a
            href="#"
            class="header__logo"
            style={{
              fontSize: "2.4rem",
              fontWeight: "600",
              color: "#6C63FF",
            }}
          >
            PetECare
          </a>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div
          className="nav-tools"
          style={{
            marginTop: "4px",
          }}
        >
          <ul className="nav-tools-desktop">
            <li>
              <a href="#">
                <CgUserlane className="userIcon" />
              </a>
            </li>
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
