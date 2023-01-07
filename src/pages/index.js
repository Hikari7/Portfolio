import * as React from "react";
import Layout from "../components/Layout/Layout";
import {
  mainText,
  btn,
  main,
  mainBg,
  bg,
  downArrow,
  arrow,
  container,
} from "../styles/home.module.scss";
import { motion } from "framer-motion";
import Works from "../components/Works/works";
import About from "../components/About/about";
import Skills from "../components/Skills/skills";
import Contact from "../components/Contact/contact";
import { GrDown } from "@react-icons/all-files/gr/GrDown";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Home() {
  return (
    <Layout>
      <div className={container}>
        <div className={bg}>
          <main className={main}>
            <div className={mainBg}></div>

            <div className={mainText}>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: "100%",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 2.2,
                    ease: "easeInOut",
                  },
                }}
              >
                Hi, I'm Hikari
              </motion.h1>
              <motion.h2
                initial={{
                  opacity: 0,
                  y: "100%",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 2.7,
                    ease: "easeInOut",
                  },
                }}
              >
                A front end developer
                <br></br>
                based in Vancouver
              </motion.h2>
              <motion.button
                className={btn}
                initial={{
                  opacity: 0,
                  y: "100%",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    delay: 3,
                    ease: "easeInOut",
                  },
                }}
              >
                <a href="mailto:h.kobe712@gmail.com">Contact Me</a>
              </motion.button>
            </div>
            <div></div>
          </main>
        </div>
        <motion.div
          className={arrow}
          initial={{
            opacity: 0,
            y: "100%",
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 3.5,
              ease: "easeInOut",
            },
          }}
        >
          <span className={downArrow}>
            <AnchorLink href="#works">
              <GrDown size="40px" />
            </AnchorLink>
          </span>
        </motion.div>
      </div>
      <Works />
      <About />
      <Skills />
      <Contact />
    </Layout>
  );
}
