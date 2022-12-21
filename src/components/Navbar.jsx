import { Link } from "gatsby";
import React from "react";
import {
  outline,
  header,
  div,
  ul,
  li,
  btn,
} from "../styles/navbar.module.scss";

const Navbar = () => {
  return (
    <div className={div}>
      <nav className={`${outline} ${header}`}>
        <h1>
          <Link to="/">HK</Link>
        </h1>
        <ul className={ul}>
          <li className={li}>
            <Link to="/about">About</Link>
          </li>
          <li className={li}>
            <Link to="/works">Works</Link>
          </li>
          <li className={li}>
            <Link to="/contact">Contact</Link>
          </li>
          <button className={`${li} ${btn}`}>
            <Link to="/">Resume</Link>
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
