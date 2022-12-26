import React from "react";
import {
  title,
  h1,
  container,
  wrapper,
  headline,
  skillsList,
} from "./skills.module.scss";
import { AiFillHtml5 } from "@react-icons/all-files/ai/AiFillHtml5";
import { DiCss3 } from "@react-icons/all-files/di/DiCss3";
import { SiJavascript } from "@react-icons/all-files/si/SiJavascript";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { DiSass } from "@react-icons/all-files/di/DiSass";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiRedux } from "@react-icons/all-files/si/SiRedux";
// import { SiStyledcomponents } from "@react-icons/all-files/si/SiStyledcomponents";
// import { TbBrandNextjs } from "@react-icons/all-files/tb/TbBrandNextjs";
import { FaNodeJs } from "@react-icons/all-files/fa/FaNodeJs";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { SiGatsby } from "@react-icons/all-files/si/SiGatsby";
import { FaBootstrap } from "@react-icons/all-files/fa/FaBootstrap";
import { SiMaterialui } from "@react-icons/all-files/si/SiMaterialui";
import { SiFirebase } from "@react-icons/all-files/si/SiFirebase";
import { DiMongodb } from "@react-icons/all-files/di/DiMongodb";
import { DiGithubBadge } from "@react-icons/all-files/di/DiGithubBadge";
import { FaFigma } from "@react-icons/all-files/fa/FaFigma";
// import { Styledcomponents } from "@styled-icons/simple-icons/Styledcomponents";
import mui from "../../src/images/material-ui.svg";
import styledComponents from "../../src/images/styled-components.svg";

const skills = () => {
  return (
    <>
      <div className={title}>
        <h1 className={h1}>Skills</h1>
      </div>

      <div className={container}>
        <h3 className={headline}>Languages</h3>
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
              <SiJavascript size="40px" color="#dca0a2" />
              <p>JavaScript</p>
            </li>
            <li>
              <SiTypescript size="40px" />
              <p>TypeScript</p>
            </li>
            <li>
              <DiSass size="40px" />
              <p>Sass/SCSS</p>
            </li>
          </ul>
        </div>

        <h3 className={headline}>Front end</h3>
        <div className={wrapper}>
          <ul className={skillsList}>
            <li>
              <FaReact size="40px" color="#dca0a2" />
              <p>React</p>
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
              <img src={mui} />
              <p>MUI</p>
            </li>
            <li>
              <img src={styledComponents} />
              <p>
                Styled <br></br>Components
              </p>
            </li>
          </ul>
        </div>

        <h3 className={headline}>Others</h3>
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
      </div>
    </>
  );
};

export default skills;
