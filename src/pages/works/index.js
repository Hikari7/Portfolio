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
} from "./index.module.scss";

import workoutLog from "../../images/workout-tracker.jpg";
import sleepTight from "../../images/sleep-tight.jpg";
import cookHelper from "../../images/cooking-helper.jpg";
import oatmealEcSite from "../../images/oatmeal-ecsite.jpg";
import commitFit from "../../images/commit-fit.jpg";
import portfolio from "../../images/portfolioSite.jpg";
import { Link } from "gatsby";

const Works = () => {
  const [showInfo, setShowInfo] = useState(false);

  // const handleInfo = () => {
  //   <dsiv className={{ workDetail }}></dsiv>;
  // };

  console.log(showInfo);

  return (
    <>
      <div className={title}>
        <h1>Works</h1>
      </div>

      <div className={bg}>
        {/* <h2 className={subTitle}>Hover over any project to learn more!</h2> */}
        <div className={container}>
          <div className={rowWrapper}>
            <div className={`${cardWrapper} ${work1}`}>
              <a href="https://github.com/Hikari7/Workout_tracking_App">
                <img
                  src={workoutLog}
                  className={workImg}
                  alt="workoutLog"
                  // onMouseEnter={() => setShowInfo(true)}
                  // onMouseLeave={() => setShowInfo(false)}
                  onMouseOver={() => setShowInfo(!showInfo)}
                  // onMouseOut={handleImg}
                />
              </a>
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
