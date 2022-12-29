import React, { useState } from "react";
import {
  title,
  container,
  workImg,
  cardWrapper,
  rowWrapper,
  subTitle,
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  bg,
  overLay,
  content,
  tools,
  site,
} from "./works.module.scss";

import workoutLog from "../images/workout-tracker.jpg";
import sleepTight from "../images/sleep-tight.jpg";
import cookHelper from "../images/cooking-helper.jpg";
import oatmealEcSite from "../images/oatmeal-ecsite.jpg";
import commitFit from "../images/commit-fit.jpg";
import portfolio from "../images/portfolioSite.jpg";
import { DiGithubBadge } from "@react-icons/all-files/di/DiGithubBadge";
import { FiExternalLink } from "@react-icons/all-files/fi/FiExternalLink";

const Works = () => {
  const [showInfo, setShowInfo] = useState(false);

  const showDetails = (e) => {
    e.preventDefault();
    setShowInfo(true);
  };

  const hideDetails = (e) => {
    e.preventDefault();
    setShowInfo(false);
  };

  console.log(showInfo);

  return (
    <>
      <div className={title}>
        <h1>Works</h1>
      </div>

      <div className={bg}>
        <h2 className={subTitle}>Hover over any project to learn more!</h2>
        <div className={container}>
          <div className={rowWrapper}>
            <div
              className={`${cardWrapper} ${work1} `}
              onMouseEnter={(e) => showDetails(e)}
              onMouseLeave={(e) => hideDetails(e)}
            >
              {showInfo && (
                <div className={overLay}>
                  <div className={content}>
                    <h1>Workout tracker</h1>
                    <p>
                      A workout log application provides the store the user
                      information and their posts.
                    </p>
                    <div className={tools}>
                      <span>React.js</span>
                      <span>Firebase</span>
                      <span>MUI</span>
                    </div>
                    <div className={site}>
                      <a href="https://github.com/Hikari7/Workout_tracking_App">
                        <DiGithubBadge size={52} color="#dca0a2" />
                      </a>
                      <a href="https://workout-tracking-app.vercel.app/">
                        <FiExternalLink size={52} color="#dca0a2" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
              {!showInfo && (
                <img src={workoutLog} className={workImg} alt="workoutLog" />
              )}
            </div>

            <div className={`${cardWrapper} ${work2}`}>
              <a href="https://github.com/Hikari7/Cooking_helper_ReactApp">
                <img
                  src={cookHelper}
                  className={workImg}
                  alt="cookHelper"
                  onMouseOver={() => setShowInfo(!showInfo)}
                />
              </a>
            </div>
          </div>
          <div className={rowWrapper}>
            <div className={`${cardWrapper} ${work3}`}>
              <a href="https://github.com/Hikari7/YabeeOatmeal_EC-Website">
                <img
                  src={oatmealEcSite}
                  className={workImg}
                  alt="oatmealEcSite"
                  onMouseOver={() => setShowInfo(!showInfo)}
                />
              </a>
            </div>

            <div className={`${cardWrapper} ${work4}`}>
              <a href="https://github.com/Hikari7/SleepTight_ReactApp">
                <img
                  src={sleepTight}
                  className={workImg}
                  alt="sleepTight"
                  onMouseOver={() => setShowInfo(!showInfo)}
                />
              </a>
            </div>
          </div>
          <div className={rowWrapper}>
            <div className={`${cardWrapper} ${work5}`}>
              <a href="https://github.com/Hikari7/SleepTight_ReactApp">
                <img
                  src={portfolio}
                  className={workImg}
                  alt="portfolio"
                  onMouseOver={() => setShowInfo(!showInfo)}
                />
              </a>
            </div>
            <div className={`${cardWrapper} ${work6}`}>
              <a href="https://github.com/Hikari7/SleepTight_ReactApp">
                <img
                  src={commitFit}
                  className={workImg}
                  alt="commitFit"
                  onMouseOver={() => setShowInfo(!showInfo)}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
