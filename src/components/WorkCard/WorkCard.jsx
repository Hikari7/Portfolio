import React, { useState } from "react";
import {
  workImg,
  overLay,
  content,
  tools,
  site,
  cardWrapper,
  hover,
} from "./workcard.module.scss";
import { DiGithubBadge } from "@react-icons/all-files/di/DiGithubBadge";
import { FiExternalLink } from "@react-icons/all-files/fi/FiExternalLink";
import AnimateInView from "../Animation";
function WorkCard({
  worktitle,
  details,
  tool,
  tool2,
  tool3,
  github,
  link,
  image,
}) {
  const [showInfo, setShowInfo] = useState(false);

  const showDetails = (e) => {
    e.preventDefault();
    setShowInfo(true);
  };

  const hideDetails = (e) => {
    e.preventDefault();
    setShowInfo(false);
  };

  return (
    <>
      <AnimateInView>
        <div
          className={`${cardWrapper} ${showInfo ? hover : ""}`}
          onMouseEnter={(e) => showDetails(e)}
          onMouseLeave={(e) => hideDetails(e)}
          role="presentation"
          id="works"
        >
          {showInfo && (
            <div className={overLay}>
              <div className={content}>
                <h1>{worktitle}</h1>
                <p>{details}</p>
                <div className={tools}>
                  <span>{tool}</span>
                  <span>{tool2}</span>
                  <span>{tool3}</span>
                </div>
                <div className={site}>
                  <a href={github}>
                    <DiGithubBadge size={42} color="#dca0a2" />
                  </a>
                  <a href={link}>
                    <FiExternalLink size={36} color="#dca0a2" />
                  </a>
                </div>
              </div>
            </div>
          )}
          {!showInfo && (
            <img src={image} className={workImg} alt="workoutLog" />
          )}
        </div>
      </AnimateInView>
    </>
  );
}

export default WorkCard;
