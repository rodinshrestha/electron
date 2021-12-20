import React from 'react';
import { motion } from "framer-motion";

import {
  fadeInRightScreenAnimation,
  fadeInLeftScreenAnimation,
  fadeInTopScreenAnimation,
  fadeInTop2ScreenAnimation,
  fadeInTop3ScreenAnimation,
  fadeInBottomScreenAnimation,
  fadeInBottom2ScreenAnimation,
  fadeInScreenAnimationTransition,
  fadeInScreenAnimation,
} from "../../config/AnimationConfig";

const FadeDiv = (props) => {
  const direction = () => {
    switch (props.direction) {
      case "right":
        return fadeInRightScreenAnimation;
      case "left":
        return fadeInLeftScreenAnimation;
      case "top":
        return fadeInTopScreenAnimation;
      case "top2":
        return fadeInTop2ScreenAnimation;
      case "top3":
        return fadeInTop3ScreenAnimation;
      case "bottom":
        return fadeInBottomScreenAnimation;
      case "bottom2":
        return fadeInBottom2ScreenAnimation;
      case "none":
        return fadeInScreenAnimation;
    }
  };

  return (
    <motion.div
      style={props.style || {}}
      className={props.className}
      initial={props.disabled ? false : "out"}
      animate="in"
      exit="out"
      variants={direction()}
      transition={fadeInScreenAnimationTransition}
    >
      {props.children}
    </motion.div>
  );
};

export default FadeDiv;
