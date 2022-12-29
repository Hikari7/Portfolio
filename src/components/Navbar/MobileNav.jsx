//一応モバイルファーストなのでモバイル用
//ハンバーガーメニュー設置

import { Link } from "gatsby";
import React, { useState } from "react";
import { mobileBg, ul, li, btn, navEl, mobile } from "./mobilenav.module.scss";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import resume from "../../images/Resume_HikariKobe.pdf";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const animateFrom = { opacity: 0, y: -10 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <>
      <div className={mobile}>
        <nav className={navEl}>
          <h1>
            <Link to="/">HK</Link>
          </h1>
          <Hamburger toggled={open} toggle={setOpen} />
        </nav>
        {open ? (
          <motion.div
            className={mobileBg}
            initial={animateFrom}
            animate={animateTo}
            transition={{ duration: 0.1 }}
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
              <motion.li
                className={li}
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.3 }}
              >
                <Link to="/skills">Skills</Link>
              </motion.li>
              <motion.button
                className={`${li} ${btn}`}
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.45 }}
              >
                <a href={resume}>Resume</a>
              </motion.button>
            </ul>
          </motion.div>
        ) : (
          <motion.div
            className={mobileBg}
            initial={animateTo}
            animate={animateFrom}
            transition={{ duration: 0.1 }}
          >
            <ul className={ul}>
              <motion.li
                className={li}
                initial={animateTo}
                animate={animateFrom}
                transition={{ delay: 0.15 }}
              >
                <Link to="/about">About</Link>
              </motion.li>
              <motion.li
                className={li}
                initial={animateTo}
                animate={animateFrom}
                transition={{ delay: 0.2 }}
              >
                <Link to="/works">Works</Link>
              </motion.li>
              <motion.li
                className={li}
                initial={animateTo}
                animate={animateFrom}
                transition={{ delay: 0.3 }}
              >
                <Link to="/contact">Contact</Link>
              </motion.li>
              <motion.li
                className={li}
                initial={animateTo}
                animate={animateFrom}
                transition={{ delay: 0.3 }}
              >
                <Link to="/skills">Skills</Link>
              </motion.li>
              <motion.button
                className={`${li} ${btn}`}
                initial={animateTo}
                animate={animateFrom}
                transition={{ delay: 0.45 }}
              >
                <a href={resume}>Resume</a>
                {/* <Link to="/">Resume</Link> */}
              </motion.button>
            </ul>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default MobileNav;
