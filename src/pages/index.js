import * as React from "react";
import Layout from "../components/Layout";
import { Link } from "gatsby";
import {
  mainText,
  btn,
  main,
  mainBg,
  bg,
  // img,
  // mainWrapper,
  downArrow,
  arrow,
  container,
} from "../styles/home.module.scss";
// import portfolio from "../images/portfolio.jpg";
import Works from "./works";
import About from "./about";
import Skills from "./skills";
import Contact from "./contact";
// import { HiOutlineChevronDown } from "@react-icons/all-files/hi/HiOutlineChevronDown";
import { GrDown } from "@react-icons/all-files/gr/GrDown";

export default function Home() {
  return (
    <Layout>
      <div className={container}>
        <div className={bg}>
          <main className={main}>
            <div className={mainBg}></div>
            {/* <div className={mainWrapper}> */}
            <div className={mainText}>
              <h1>Hi, I'm Hikari</h1>
              <h2>
                A front end developer
                <br></br>
                based in Vancouver
              </h2>
              <button className={btn}>
                <Link to="/contact">Contact me</Link>
              </button>
            </div>
            <div>
              {/* <img src={portfolio} alt="profile" className={img} /> */}
            </div>
            {/* </div> */}
          </main>
        </div>
        <div className={arrow}>
          <span className={downArrow}>
            <GrDown size="40px" />
          </span>
        </div>
      </div>
      <Works />
      <About />
      <Skills />
      <Contact />
    </Layout>
  );
}
