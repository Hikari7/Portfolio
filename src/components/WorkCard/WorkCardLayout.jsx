import React from "react";
import WorkCard from "./WorkCard";
import WorkCardMobile from "./workCardMobile";
import { mobile, desktop } from "./workCardLayout.module.scss";
import WorkCardLayout from "../Works/works";

const WorkCardLayout = (
  worktitle,
  details,
  tool,
  tool2,
  tool3,
  github,
  link,
  image
) => {
  return (
    <>
      {/* desktopになると消す(デフォルトがこちらの設定...?) */}
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
