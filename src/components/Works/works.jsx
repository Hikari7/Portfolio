import React from "react";
import {
  title,
  container,
  rowWrapper,
  subTitle,
  work1,
  work2,
  work3,
  work4,
  work5,
  work6,
  bg,
} from "./works.module.scss";

import workoutLog from "../../images/workout-tracker.jpg";
import sleepTight from "../../images/sleep-tight.jpg";
import cookHelper from "../../images/cooking-helper.jpg";
import oatmealEcSite from "../../images/oatmeal-ecsite.jpg";
import mernNoteApp from "../../images/mern_noteApp.jpg";
import portfolio from "../../images/portfolioSite.jpg";
import WorkCardLayout from "../WorkCard/WorkCard";

const Works = () => {
  return (
    <>
      <div className={title}>
        <h1>Works</h1>
      </div>

      <div className={bg}>
        <h2 className={subTitle}>
          Hover over any project to learn more!
          <br></br>
          You can also see the details from the Github link.
        </h2>
        <div className={container}>
          <div className={rowWrapper}>
            <div className={work1}>
              <WorkCardLayout
                worktitle={"MERN Note App"}
                details={"A note taking CRUD app with MERN stack."}
                tool={"React.js"}
                tool2={"Node.js"}
                tool3={"Mongo DB"}
                github={"https://github.com/Hikari7/MERN_NoteApp"}
                link={"https://mern-note-app-client.vercel.app/"}
                image={mernNoteApp}
              />
            </div>
            <div className={work2}>
              <WorkCardLayout
                worktitle={"Cook Helper"}
                details={
                  "A recipe searching app which also provides a grocery list users can add, edit and delete lists"
                }
                tool={"React.js"}
                tool2={"Tailwind"}
                tool3={"Spoonacular API"}
                github={"https://github.com/Hikari7/Cooking_helper_ReactApp"}
                link={
                  "https://meal-idea-generation-react-es1qdgl8u-hikari7.vercel.app/"
                }
                image={cookHelper}
              />
            </div>
          </div>
          <div className={rowWrapper}>
            <div className={work3}>
              <WorkCardLayout
                worktitle={"Oatmeal EC Site"}
                details={
                  "An Ecommerce website using vanilla JS and the Local Storage"
                }
                tool={"HTML"}
                tool2={"SASS"}
                tool3={"JavaScript"}
                github={"https://github.com/Hikari7/YabeeOatmeal_EC-Website"}
                link={"https://oatmeal-ec-site.netlify.app/"}
                image={oatmealEcSite}
              />
            </div>
            <div className={work4}>
              <WorkCardLayout
                worktitle={"Workout Tracker"}
                details={
                  "A workout tracker recording app provides the store the user information and their posts."
                }
                tool={"React.js"}
                tool2={"FireBase"}
                tool3={"MUI"}
                github={"https://github.com/Hikari7/Workout_tracking_App"}
                link={"https://workout-tracking-app.vercel.app/"}
                image={workoutLog}
              />
            </div>
          </div>
          <div className={rowWrapper}>
            <div className={work5}>
              <WorkCardLayout
                worktitle={"Sleep Tight"}
                details={"A web app only plays BGM-related relaxing sounds"}
                tool={"React.js"}
                tool2={"YouTube Data API v3"}
                tool3={"Tailwind/GSAP"}
                github={"https://github.com/Hikari7/SleepTight_ReactApp"}
                link={"https://sleeptight.vercel.app/"}
                image={sleepTight}
              />
            </div>
            <div className={work6}>
              <WorkCardLayout
                worktitle={"Portfolio"}
                details={"My portfolio"}
                tool={"React.js"}
                tool2={"Sass"}
                tool3={"Framer-motion"}
                github={"https://github.com/Hikari7/portfolio"}
                link={"hikari-kobe.vercel.app"}
                image={portfolio}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
