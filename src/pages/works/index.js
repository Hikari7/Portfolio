import React, { useState } from "react";
import {
  title,
  h1,
  container,
  workImg,
  h3,
  cardWrapper,
} from "./index.module.scss";
// import Cardinfo from "./Cardinfo";
import workoutLog from "../../images/workout-tracker.png";
import sleepTight from "../../images/sleep-tight.png";
import cookHelper from "../../images/cooking-helper.png";
import oatmealEcSite from "../../images/oatmeal-ecsite.png";
import commitFit from "../../images/commit-fit.png";

const Works = () => {
  const [showInfo, setShowInfo] = useState(false);

  // const handleInfo = () => {
  //   <dsiv className={{ workDetail }}></dsiv>;
  // };

  console.log(showInfo);

  return (
    <>
      <div className={title}>
        <h1 className={h1}>Works</h1>
        <h2 className={h3}>Hover over any project to learn more</h2>
      </div>

      <div className={container}>
        <div className={cardWrapper}>
          <img
            src={workoutLog}
            className={workImg}
            alt="workoutLog"
            // onMouseEnter={() => setShowInfo(true)}
            // onMouseLeave={() => setShowInfo(false)}
            onMouseOver={() => setShowInfo(!showInfo)}
            // onMouseOut={handleImg}
          />
        </div>
        <div className={cardWrapper}>
          <img
            src={sleepTight}
            className={workImg}
            alt="sleepTight"
            onMouseOver={() => setShowInfo(!showInfo)}
          />
        </div>
        <div className={cardWrapper}>
          <img
            src={cookHelper}
            className={workImg}
            alt="cookHelper"
            onMouseOver={() => setShowInfo(!showInfo)}
          />
        </div>
        <div className={cardWrapper}>
          <img
            src={oatmealEcSite}
            className={workImg}
            alt="oatmealEcSite"
            onMouseOver={() => setShowInfo(!showInfo)}
          />
        </div>
        <div className={cardWrapper}>
          <img
            src={commitFit}
            className={workImg}
            alt="oatmealEcSite"
            onMouseOver={() => setShowInfo(!showInfo)}
          />
        </div>
      </div>
    </>
  );
};

export default Works;
