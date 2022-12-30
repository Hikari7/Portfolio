import React from "react";
import {
  title,
  h1,
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
import profile from "../images/portfolio.jpg";
import resume from "../images/Resume_HikariKobe.pdf";

const about = () => {
  return (
    <>
      <div className={title}>
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
            <img src={profile} alt="profile" className={profilePic} />

            <ul className={detail}>
              <li>
                Love to put stylings for{" "}
                <span>a user-friendly application</span>
              </li>
              <li>
                <span>Have strong communication skills</span> to have worked a
                customer service as a technical support specialist for 3 years
                and trained more than 130 employees.
              </li>
              <li>
                <span>
                  “If you want to make progress on something, be consistent”
                </span>{" "}
                is my growth mindset
              </li>
              <li>
                Spend most of my free time working out, travelling and watching
                sitcoms <br></br>(
                <span>"The office" is the best show ever!</span>)
              </li>
            </ul>
          </div>
          <div className={rightPart}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 16,
              }}
            >
              <TwitterEmbed
                url="https://twitter.com/hk_Vancouver/status/1559786990794551297"
                width={450}
                height={600}
              />
            </div>
            <div className={`${detail} ${tweet}`}>
              <p className={tweet}>
                You can check how I love learning tech skills consistently
                through
                <span>
                  <a href="https://twitter.com/hk_Vancouver"> my Twitter!</a>
                </span>
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
                  <AiFillGithub size="40px" color="#3e3e3e" className={icon} />
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
        </div>
      </div>
    </>
  );
};

export default about;
