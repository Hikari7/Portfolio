import React from "react";
import {
  container,
  title,
  mainBg,
  mainText,
  socialMedia,
  icon,
  contactBtn,
} from "./contact.module.scss";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillTwitterCircle } from "@react-icons/all-files/ai/AiFillTwitterCircle";

const contact = () => {
  return (
    <>
      <div className={container}>
        <div className={mainBg}>
          <div className={mainText}>
            <div className={title}>
              <h1>Contact</h1>
              <div>
                <p>
                  If you like my work,<br></br> why not contact me for your next
                  project?{" "}
                </p>
                <p>
                  You can find me on social media or send me a message here!
                </p>
              </div>
            </div>
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
          <button className={contactBtn}>
            <a href="mailto:h.kobe712@gmail.com">Contact Me</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default contact;
