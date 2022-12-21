import { Link } from "gatsby";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <h1>HK</h1>
      <div>
        <Link to="/">HK</Link>
        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
      </div>
    </nav>
  );
};

export default Navbar;
