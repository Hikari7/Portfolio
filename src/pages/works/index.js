import React, { useState } from "react";
import {
  title,
  h1,
  h2,
  container,
  card,
  workImg,
  workDetail,
  backgroundColor,
} from "./index.module.scss";
import workoutLog from "../../images/workout_tracker.jpg";

const Works = () => {
  const [show, setShow] = useState(false);

  // function showInfo() {}

  return (
    <>
      <div className={title}>
        <h1 className={h1}>Works</h1>
        <h2 className={h2}>Hover over any project to learn more</h2>
      </div>

      <ul className={container}>
        {/* <li className={card} onClick={() => showInfo()}> */}
        <li className={card} onClick={() => setShow(!show)}>
          {show ? (
            <img src={workoutLog} alt="workoutLog" className={workImg} />
          ) : (
            <div className={backgroundColor}>
              {/* <img src={workoutLog} alt="workoutLog" className={workDetail} /> */}
            </div>
          )}
        </li>
      </ul>
    </>
  );
};

export default Works;
