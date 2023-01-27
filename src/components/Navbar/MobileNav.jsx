import React, { useState } from "react";
import {
  mobileBg,
  ul,
  li,
  btn,
  navEl,
  mobile,
  logo,
} from "./mobilenav.module.scss";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import resume from "../../images/Resume_HikariKobe.pdf";
import AnchorLink from "react-anchor-link-smooth-scroll";
import myLogo from "../../images/logo.jpg";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  const animateFrom = { opacity: 0, y: -10 };
  const animateTo = { opacity: 1, y: 0 };

  return (
    <>
      <div className={mobile}>
        <nav className={navEl}>
          <Hamburger toggled={open} toggle={setOpen} />
          <img src={myLogo} alt="logo" className={logo} />
        </nav>
        {open && (
          <motion.div
            className={mobileBg}
            initial={animateFrom}
            animate={animateTo}
            transition={{ duration: 0.1 }}
          >
            <ul className={ul}>
              <AnchorLink href="#about">
                <motion.li
                  className={li}
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.15 }}
                >
                  About
                </motion.li>
              </AnchorLink>
              <AnchorLink href="#works">
                <motion.li
                  className={li}
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.2 }}
                >
                  Works
                </motion.li>
              </AnchorLink>
              <AnchorLink href="#skills">
                <motion.li
                  className={li}
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.3 }}
                >
                  Skills
                </motion.li>
              </AnchorLink>
              <AnchorLink href="#contact">
                <motion.li
                  className={li}
                  initial={animateFrom}
                  animate={animateTo}
                  transition={{ delay: 0.3 }}
                >
                  Contact
                </motion.li>
              </AnchorLink>

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
        )}
      </div>
    </>
  );
};

export default MobileNav;
