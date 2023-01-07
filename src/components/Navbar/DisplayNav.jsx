import React from "react";
import { displayNav, header, accent, ul, li } from "./displaynav.module.scss";
import resume from "../../images/Resume_HikariKobe.pdf";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const DisplayNav = () => {
  return (
    <>
      <nav className={`${header} ${displayNav}`}>
        <motion.h1
          initial={{
            opacity: 0,
            y: "-100%",
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.85,
              delay: 0.3,
              ease: "easeInOut",
            },
          }}
        ></motion.h1>

        <ul className={ul}>
          <motion.li
            className={li}
            initial={{
              opacity: 0,
              y: "-100%",
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.85,
                delay: 0.5,
                ease: "easeInOut",
              },
            }}
          >
            <AnchorLink href="#works">Works</AnchorLink>
          </motion.li>
          <motion.li
            className={li}
            initial={{
              opacity: 0,
              y: "-100%",
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.85,
                delay: 0.7,
                ease: "easeInOut",
              },
            }}
          >
            <AnchorLink href="#about">About</AnchorLink>
          </motion.li>
          <motion.li
            className={li}
            initial={{
              opacity: 0,
              y: "-100%",
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.85,
                delay: 0.9,
                ease: "easeInOut",
              },
            }}
          >
            <AnchorLink href="#skills">Skills</AnchorLink>
          </motion.li>
          <motion.li
            className={li}
            initial={{
              opacity: 0,
              y: "-100%",
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.85,
                delay: 1.1,
                ease: "easeInOut",
              },
            }}
          >
            <AnchorLink href="#contact">Contact</AnchorLink>
          </motion.li>
          <motion.li
            className={`${li} ${accent}`}
            initial={{
              opacity: 0,
              y: "-100%",
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.85,
                delay: 1.13,
                ease: "easeInOut",
              },
            }}
          >
            <a href={resume}>Resume</a>
          </motion.li>
        </ul>
      </nav>
    </>
  );
};

export default DisplayNav;
