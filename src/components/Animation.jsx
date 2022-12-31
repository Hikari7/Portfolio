import * as React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

function AnimateInView({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  const variants = {
    moved: { y: 0 },
    initial: { y: 50 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("moved");
    } else {
      controls.stop();
      controls.set("initial");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={false}
      transition={{ duration: 1 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export default AnimateInView;
