import React from "react";
import {
  title,
  h1,
  container,
  wrapper,
  headline,
  skillsList,
  stripe,
  bg,
  subTitle,
} from "./skills.module.scss";
import { AiFillHtml5 } from "@react-icons/all-files/ai/AiFillHtml5";
import { DiCss3 } from "@react-icons/all-files/di/DiCss3";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { DiSass } from "@react-icons/all-files/di/DiSass";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiRedux } from "@react-icons/all-files/si/SiRedux";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiGatsby } from "@react-icons/all-files/si/SiGatsby";
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap";
import { SiFirebase } from "@react-icons/all-files/si/SiFirebase";
import { DiMongodb } from "@react-icons/all-files/di/DiMongodb";
import { DiGithubBadge } from "@react-icons/all-files/di/DiGithubBadge";
import { FaFigma } from "@react-icons/all-files/fa/FaFigma";
// import { AiFillHeart } from "@react-icons/all-files/Ai/AiFillHeart";
import mui from "../../images/material-ui.svg";
import styledComponents from "../../images/styled-components.svg";
import AnimateInView from "../Animation";

const skills = () => {
  return (
    <>
      <div className={title} id="skills">
        <h1 className={h1}>Skills</h1>
      </div>
      <div className={bg}>
        <h2 className={subTitle}>
          TypeScript and React are my best friends!
          <br></br>I use the below skills to bring your products to life.
        </h2>
        <div className={container}>
          <div>
            <h3 className={headline}>
              <p className={stripe}>Languages</p>
            </h3>
            <AnimateInView>
              <div className={wrapper}>
                <ul className={skillsList}>
                  <li>
                    <AiFillHtml5 size="40px" />
                    <p>HTML5</p>
                  </li>
                  <li>
                    <DiCss3 size="40px" />
                    <p>CSS3</p>
                  </li>
                  <li>
                    <SiJavascript size="40px" />
                    <p>JavaScript</p>
                  </li>
                  <li>
                    <SiTypescript size="40px" color="#dca0a2" />

                    <p>
                      {/* <span>
                        <AiFillHeart />
                      </span> */}
                      TypeScript
                      {/* <span>
                        <AiFillHeart />
                      </span> */}
                    </p>
                  </li>
                  <li>
                    <DiSass size="40px" />
                    <p>Sass/SCSS</p>
                  </li>
                </ul>
              </div>
            </AnimateInView>
          </div>
          <div>
            <h3 className={headline}>
              <p className={stripe}>Front end</p>
            </h3>
            <AnimateInView>
              <div className={wrapper}>
                <ul className={skillsList}>
                  <li>
                    <FaReact size="45px" color="#dca0a2" />
                    <p>
                      {/* <span>
                        <AiFillHeart />
                      </span> */}
                      React
                      {/* <span>
                        <AiFillHeart />
                      </span> */}
                    </p>
                  </li>
                  <li>
                    <SiRedux size="40px" />
                    <p>Redux</p>
                  </li>
                  <li>
                    <SiTailwindcss size="40px" />
                    <p>Tailwind</p>
                  </li>
                  <li>
                    <FaBootstrap size="40px" />
                    <p>Bootstrap</p>
                  </li>
                  <li>
                    <img src={mui} alt="mui" />
                    <p>MUI</p>
                  </li>
                  <li>
                    <img src={styledComponents} alt="styledComponents" />
                    <p>
                      Styled <br></br>Components
                    </p>
                  </li>
                </ul>
              </div>
            </AnimateInView>
          </div>
          <div>
            <h3 className={headline}>
              <p className={stripe}>Others</p>
            </h3>
            <AnimateInView>
              <div className={wrapper}>
                <ul className={skillsList}>
                  <li>
                    <FaNodeJs size="40px" />
                    <p>Node.js</p>
                  </li>
                  <li>
                    <SiFirebase size="40px" />
                    <p>Firebase</p>
                  </li>
                  <li>
                    <SiGatsby size="40px" />
                    <p>Gatsby</p>
                  </li>
                  <li>
                    <DiMongodb size="40px" />
                    <p>MongoDB</p>
                  </li>
                  <li>
                    <DiGithubBadge size="40px" />
                    <p>Github</p>
                  </li>
                  <li>
                    <FaFigma size="40px" />
                    <p>Figma</p>
                  </li>
                </ul>
              </div>
            </AnimateInView>
          </div>
        </div>
      </div>
    </>
  );
};

export default skills;
