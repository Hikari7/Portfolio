import React from "react";
// import { header } from "./navbar.module.scss";
import Works from "./works";
import WorkCardMobile from "../WorkCard/WorkCardMobile";

const Navbar = () => {
  return (
    <div>
      <Works />
      <WorkCardMobile />
    </div>
  );
};

export default Navbar;
