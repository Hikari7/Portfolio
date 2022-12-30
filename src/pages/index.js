import * as React from "react";
import Layout from "../components/Layout";
// import { Link } from "gatsby";
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
import Works from "./works";
import About from "./about";
import Skills from "./skills";
import Contact from "./contact";
import { GrDown } from "@react-icons/all-files/gr/GrDown";

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
            <GrDown size="40px" />
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
