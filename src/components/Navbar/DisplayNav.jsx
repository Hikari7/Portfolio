import React from "react";
import { Link } from "gatsby";
import { displayNav, header, accent, ul, li } from "./displaynav.module.scss";
import resume from "../../images/Resume_HikariKobe.pdf";
import { motion } from "framer-motion";
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
        >
          <Link to="/">HK</Link>
        </motion.h1>

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
            <Link to="/works">Works</Link>
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
            <Link to="/about">About</Link>
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
            <Link to="/skills">Skills</Link>
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
            <Link to="/contact">Contact</Link>
          </motion.li>
          <motion.li
            className={`${li} ${accent}`}
            // className={li}
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
