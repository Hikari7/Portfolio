//一応モバイルファーストなのでモバイル用
//ハンバーガーメニュー設置

import { Link } from "gatsby";
import React, { useState } from "react";
import {
  mobileNav,
  open,
  close,
  mobileBg,
  ul,
  li,
  btn,
  header,
} from "../../styles/mobilenav.module.scss";
import { CgMenu } from "@react-icons/all-files/cg/CgMenu";
import { CgClose } from "@react-icons/all-files/cg/CgClose";
import { motion } from "framer-motion";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const openIcon = (
    <CgMenu
      className={open}
      size="32px"
      color="#3e3e3e"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <CgClose
      className={close}
      size="32px"
      color="#3e3e3e"
      onClick={() => setOpen(!open)}
    />
  );

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <>
      <nav className={`${header} ${mobileNav}`}>
        <h1>
          <Link to="/">HK</Link>
        </h1>

        {open ? closeIcon : openIcon}

        {open && (
          <motion.div
            className={mobileBg}
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <ul className={ul}>
              <motion.li
                className={li}
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.15 }}
              >
                <Link to="/about">About</Link>
              </motion.li>
              <motion.li
                className={li}
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.2 }}
              >
                <Link to="/works">Works</Link>
              </motion.li>
              <motion.li
                className={li}
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.3 }}
              >
                <Link to="/contact">Contact</Link>
              </motion.li>
              <motion.button
                className={`${li} ${btn}`}
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.45 }}
              >
                <Link to="/">Resume</Link>
              </motion.button>
            </ul>
          </motion.div>
        )}
      </nav>
    </>
  );
};

export default MobileNav;
