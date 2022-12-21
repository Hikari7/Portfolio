import { Link } from "gatsby";
import React from "react";
import {
  outline,
  layout,
  bg,
  layout_ul,
  reset,
} from "../styles/navbar.module.scss";
// import {  reset } from "../styles/mixin.scss";

const Navbar = () => {
  return (
    <nav className={`${outline} ${layout}`}>
      <h1>
        <Link to="/" className={reset}>
          HK
        </Link>
      </h1>
      <ul className={layout_ul}>
        <li>
          <Link to="/" className={reset}>
            HK
          </Link>
        </li>
        <li>
          <Link to="/about" className={reset}>
            About
          </Link>
        </li>
        <li>
          <Link to="/works" className={reset}>
            Works
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
