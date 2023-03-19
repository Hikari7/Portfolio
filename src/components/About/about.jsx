import React from "react";
import {
  title,
  h3,
  container,
  main,
  detail,
  tweet,
  socialMedia,
  icon,
  li,
  btn,
  profilePic,
  leftPart,
  bg,
  rightPart,
} from "./about.module.scss";
import { TwitterEmbed } from "react-social-media-embed";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";
import { GrArticle } from "@react-icons/all-files/gr/GrArticle";
import profile from "../../images/portfolio.jpg";
import resume from "../../images/Resume_HikariKobe.pdf";
import AnimateInView from "../Animation";

const about = () => {
  return (
    <>
      <div className={title} id="about">
        <h1>About Me</h1>
      </div>
      <div className={bg}>
        <div className={container}>
          <div className={leftPart}>
            <main className={main}>
              <p className={h3}>
                A Front-End Developer <br></br>specialized <span>React</span>
              </p>
            </main>
            <AnimateInView>
              <img src={profile} alt="profile" className={profilePic} />
            </AnimateInView>
            <AnimateInView>
              <ul className={detail}>
                <li>
                  <span>
                    Skilled in creating user-friendly application designs
                  </span>{" "}
                  with a passion for adding style and creativity.
                </li>
                <li>
                  Excellent <span>communication abilities</span> developed
                  through 3 years of experience as a technical support
                  specialist, having trained over 130 employees
                </li>
                <li>
                  Firmly believing in <span>the power of consistency</span> is
                  my growth mindset
                </li>
                <li>
                  Passionate about <span>fitness, travel, and sitcoms</span>
                  (with "The Office" being my all-time favourite show!)
                </li>
              </ul>
            </AnimateInView>
          </div>
          <AnimateInView>
            <div className={rightPart}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: 16,
                }}
              >
                <TwitterEmbed
                  url="https://twitter.com/hk_Vancouver/status/1608891933912600577"
                  width={450}
                  height={600}
                />
              </div>
              <div className={`${detail} ${tweet}`}>
                <p className={tweet}>
                  Check out{" "}
                  <span>
                    <a href="https://twitter.com/hk_Vancouver"> my Twitter</a>
                  </span>{" "}
                  to see my love for consistently learning new tech skills!
                </p>
              </div>
              <div className={socialMedia}>
                <li>
                  <a href="https://www.linkedin.com/in/hikari-kobe-106054242/">
                    <AiFillLinkedin
                      size="40px"
                      color="#3e3e3e"
                      className={icon}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Hikari7">
                    <AiFillGithub
                      size="40px"
                      color="#3e3e3e"
                      className={icon}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/hk_Vancouver">
                    <AiFillTwitterCircle
                      size="40px"
                      color="#3e3e3e"
                      className={icon}
                    />
                  </a>
                </li>
                <li>
                  <a href="https://dev.to/hikari7">
                    <GrArticle size="40px" color="#3e3e3e" className={icon} />
                  </a>
                </li>
              </div>
              <button className={`${li} ${btn}`}>
                <a href={resume}>resume</a>
              </button>
            </div>
          </AnimateInView>
        </div>
      </div>
    </>
  );
};

export default about;
