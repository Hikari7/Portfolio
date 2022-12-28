import React from "react";
import { header } from "./navbar.module.scss";
import DisplayNav from "./DisplayNav";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <div className={header}>
      <DisplayNav />
      <MobileNav />
    </div>
  );
};

export default Navbar;
