import React from "react";
import { Link } from "gatsby";
import { displayNav, header, btn, ul, li } from "./displaynav.module.scss";
import resume from "../../images/Resume_HikariKobe.pdf";

const DisplayNav = () => {
  return (
    <>
      <nav className={`${header} ${displayNav}`}>
        <h1>
          <Link to="/">HK</Link>
        </h1>

        <ul className={ul}>
          <li className={li}>
            <Link to="/works">Works</Link>
          </li>
          <li className={li}>
            <Link to="/about">About</Link>
          </li>
          <li className={li}>
            <Link to="/skills">Skills</Link>
          </li>
          <li className={li}>
            <Link to="/contact">Contact</Link>
          </li>
          <button className={`${li} ${btn}`}>
            <a href={resume}>Resume</a>
          </button>
        </ul>
      </nav>
    </>
  );
};

export default DisplayNav;
