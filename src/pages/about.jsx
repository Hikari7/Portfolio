import React from "react";
import { Link } from "gatsby";
import {
  title,
  h1,
  h2,
  h3,
  container,
  main,
  detail,
  tweet,
  socialMedia,
  icon,
  li,
  btn,
} from "./about.module.scss";
import { TwitterEmbed } from "react-social-media-embed";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";

const about = () => {
  return (
    <>
      <div className={title}>
        <h1 className={h1}>About Me</h1>
      </div>

      <div className={container}>
        <main className={main}>
          <p className={h3}>
            A Front-End Developer <br></br>specialized React
          </p>
          <p className={h2}>Hikari Kobe</p>
        </main>
        <ul className={detail}>
          <li>
            Love to put stylings for <span>a user-friendly application</span>
          </li>
          <li>
            <span>Have strong communication skills</span> to have worked a
            customer service as a technical support specialist for 3 years and
            trained more than 130 employees.
          </li>
          <li>
            <span>
              “If you want to make progress on something, be consistent”
            </span>{" "}
            is my growth mindset
          </li>
          <li>
            Spend most of my free time working out, travelling and watching
            sitcoms (<span>"The office" is the best show ever!</span>)
          </li>
        </ul>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TwitterEmbed
            url="https://twitter.com/hk_Vancouver/status/1559786990794551297"
            width={400}
            height={600}
          />
        </div>
        <div className={`${detail} ${tweet}`}>
          <p className={tweet}>
            You can check how I love learning tech skills consistently through
            <span>
              <a href="https://twitter.com/hk_Vancouver"> my Twitter!</a>
            </span>
          </p>
        </div>
        <div className={socialMedia}>
          <li>
            <a href="https://www.linkedin.com/in/hikari-kobe-106054242/">
              <AiFillLinkedin size="40px" color="#3e3e3e" className={icon} />
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
        </div>
        <button className={`${li} ${btn}`}>
          <Link to="/">Resume</Link>
        </button>
      </div>
    </>
  );
};

export default about;
