import React, { useEffect } from "react";
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

import workoutLog from "../images/workout-tracker.jpg";
import sleepTight from "../images/sleep-tight.jpg";
import cookHelper from "../images/cooking-helper.jpg";
import oatmealEcSite from "../images/oatmeal-ecsite.jpg";
import commitFit from "../images/commit-fit.jpg";
import portfolio from "../images/portfolioSite.jpg";
import WorkCard from "../components/WorkCard";

import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";

const Works = () => {
  // const control = useAnimation();
  // const [ref, inView] = useInView({ threshold: 0.2 });

  // const cardVariant = {
  //   visible: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 1,
  //       // delay: 0.3,
  //       ease: "easeIn",
  //     },
  //   },
  //   hidden: { opacity: 0, x: "50%" },
  // };

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   } else {
  //     control.start("hidden");
  //   }
  // }, [control, inView]);

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
        <div
          className={container}
          // ref={ref}
          // variants={cardVariant}
          // initial="hidden"
          // animate={control}
        >
          <div className={rowWrapper}>
            <div className={work1}>
              <WorkCard
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
            <div className={work2}>
              <WorkCard
                worktitle={"Cook Helper"}
                details={"A recipe searching app which has grocery lists"}
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
              <WorkCard
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
              <WorkCard
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
          </div>
          <div className={rowWrapper}>
            <div className={work5}>
              <WorkCard
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
            <div className={work6}>
              <WorkCard
                worktitle={"Commit fit"}
                details={
                  "A gym landing page website which is built with SASS and vanilla JavaScript."
                }
                tool={"JavaScript"}
                tool2={"Sass"}
                tool3={"HTML"}
                github={"https://github.com/Hikari7/Commit-fit_LandingPage"}
                link={"https://commit-fit.netlify.app/"}
                image={commitFit}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
