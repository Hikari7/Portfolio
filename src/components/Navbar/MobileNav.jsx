//一応モバイルファーストなのでモバイル用
//ハンバーガーメニュー設置

import { Link } from "gatsby";
import React, { useState } from "react";
import {
  outline,
  header,
  div,
  ul,
  li,
  btn,
} from "../../styles/navbar.module.scss";
import { mobileNav, hamburger } from "../../styles/mobilenav.module.scss";
import { GiHamburgerMenu } from "@react-icons/all-files/gi/GiHamburgerMenu";

const MobileNav = () => {
  return (
    <>
      <nav className={`${outline} ${header} ${mobileNav}`}>
        <h1>
          <Link to="/">HK</Link>
        </h1>
        <GiHamburgerMenu
          className={hamburger}
          size="36px"
          color="#3e3e3e"
          onClick={() => console.log("clicked")}
        />
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
    </>
  );
};

export default MobileNav;
