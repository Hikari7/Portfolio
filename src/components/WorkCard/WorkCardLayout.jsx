import React from "react";
import WorkCard from "./WorkCard";
import WorkCardMobile from "./workCardMobile";
import { mobile, desktop } from "./workCardLayout.module.scss";
import WorkCardLayout from "../Works/works";

const WorkCardLayout = () => {
  return (
    <>
      <div className={mobile}>
        <WorkCardMobile />
      </div>
      <div className={desktop}>
        <WorkCard />
      </div>
    </>
  );
};

export default WorkCardLayout;
